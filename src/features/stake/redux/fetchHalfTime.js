import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  STAKE_FETCH_HALF_TIME_BEGIN,
  STAKE_FETCH_HALF_TIME_SUCCESS,
  STAKE_FETCH_HALF_TIME_FAILURE,
} from './constants';
import Web3 from 'web3';
import { getRpcUrl } from '../../../common/networkSetup';

export function fetchHalfTime(index) {
  return (dispatch, getState) => {
    // optionally you can have getState as the second argument
    dispatch({
      type: STAKE_FETCH_HALF_TIME_BEGIN,
      index,
    });
    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
    const promise = new Promise((resolve, reject) => {
      // doRequest is a placeholder Promise. You should replace it with your own logic.
      // See the real-word example at:  https://github.com/supnate/rekit/blob/master/src/features/home/redux/fetchRedditReactjsList.js
      // args.error here is only for test coverage purpose.
      const { home, stake } = getState();
      let { address, web3 } = home;
      const { pools } = stake;
      const { earnContractAbi, earnContractAbiName, earnContractAddress, earnedTokenAddress } =
        pools[index];

      if (!web3) {
        web3 = new Web3(new Web3.providers.HttpProvider(getRpcUrl()));
      }

      const contract = new web3.eth.Contract(earnContractAbi, earnContractAddress);
      switch (earnContractAbiName) {
        case 'klimaPoolABI':
          contract.methods
            .rewardData(earnedTokenAddress)
            .call({ from: address })
            .then(data => {
              dispatch({
                type: STAKE_FETCH_HALF_TIME_SUCCESS,
                data: data.periodFinish,
                index,
              });
              resolve(data);
            })
            .catch(error => {
              dispatch({
                type: STAKE_FETCH_HALF_TIME_FAILURE,
                index,
              });
              reject(error.message || error);
            });
          break;

        case 'govPoolABI':
        default:
          contract.methods
            .periodFinish()
            .call({ from: address })
            .then(data => {
              dispatch({
                type: STAKE_FETCH_HALF_TIME_SUCCESS,
                data,
                index,
              });
              resolve(data);
            })
            .catch(
              // Use rejectHandler as the second argument so that render errors won't be caught.
              error => {
                dispatch({
                  type: STAKE_FETCH_HALF_TIME_FAILURE,
                  index,
                });
                reject(error.message || error);
              }
            );
          break;
      }
    });
    return promise;
  };
}

export function useFetchHalfTime() {
  // args: false value or array
  // if array, means args passed to the action creator
  const dispatch = useDispatch();

  const { halfTime, fetchHalfTimePending } = useSelector(state => ({
    halfTime: state.stake.halfTime,
    fetchHalfTimePending: state.stake.fetchHalfTimePending,
  }));

  const boundAction = useCallback(data => dispatch(fetchHalfTime(data)), [dispatch]);

  return {
    halfTime,
    fetchHalfTime: boundAction,
    fetchHalfTimePending,
  };
}

export function reducer(state, action) {
  const { halfTime, fetchHalfTimePending } = state;
  switch (action.type) {
    case STAKE_FETCH_HALF_TIME_BEGIN:
      // Just after a request is sent
      fetchHalfTimePending[action.index] = true;
      return {
        ...state,
        fetchHalfTimePending,
      };

    case STAKE_FETCH_HALF_TIME_SUCCESS:
      // The request is success

      fetchHalfTimePending[action.index] = false;
      halfTime[action.index] = action.data;
      return {
        ...state,
        halfTime,
        fetchHalfTimePending,
      };

    case STAKE_FETCH_HALF_TIME_FAILURE:
      // The request is failed
      fetchHalfTimePending[action.index] = false;
      return {
        ...state,
        fetchHalfTimePending,
      };

    default:
      return state;
  }
}
