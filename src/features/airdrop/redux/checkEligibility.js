import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { airdropList } from '../../configure/airdrop/list';
import {
  AIRDROP_CHECK_ELIGIBILITY,
  AIRDROP_TEST_ELIGIBILITY,
  AIRDROP_ELIGIBLE,
  AIRDROP_IS_ELIGIBLE,
  AIRDROP_NOT_ELIGIBLE,
  AIRDROP_IS_NOT_ELIGIBLE,
  AIRDROP_FAILURE,
  AIRDROP_IS_FAILURE,
} from './constants';

/**
 * Check if an address exists in array.
 * @param {array} list
 * @param {string} address
 * @returns boolean
 */
function checkAddressEligibility(list, address) {
  // Prepare lowercase addresses object.
  const lc = obj =>
    Object.keys(list).reduce((acc, key) => {
      acc[key.toLowerCase()] = obj[key];
      return acc;
    }, {});
  const l = lc(list);

  // Get keys (addresses list) and return amount if key exists.
  //const keys = Object.keys(l);
  if (Object.keys(l).indexOf(address.toLowerCase()) > -1) {
    return l[address.toLowerCase()];
  }

  return false;
}

export function checkEligibility(address) {
  return async dispatch => {
    try {
      if (address === null) {
        dispatch({
          type: AIRDROP_CHECK_ELIGIBILITY,
          data: { state: AIRDROP_TEST_ELIGIBILITY, amount: 0 },
        });
      }

      const amount = checkAddressEligibility(airdropList, address);
      if (amount !== false) {
        dispatch({ type: AIRDROP_ELIGIBLE, data: { state: AIRDROP_IS_ELIGIBLE, amount: amount } });
      } else {
        dispatch({
          type: AIRDROP_NOT_ELIGIBLE,
          data: { state: AIRDROP_IS_NOT_ELIGIBLE, amount: 0 },
        });
      }
    } catch (error) {
      dispatch({ type: AIRDROP_FAILURE, data: { state: AIRDROP_IS_FAILURE, amount: 0 } });
    }
  };
}

export function useCheckEligibility() {
  const dispatch = useDispatch();
  const { isAirdropEligible, amount } = useSelector(
    // Check the name of the reducer on src/common/rootReducer
    // to know how to retrieve the correct item.
    //state => state.airdrop.isAirdropEligible,

    state => ({
      isAirdropEligible: state.airdrop.isAirdropEligible,
      amount: state.airdrop.amount,
    }),

    shallowEqual
  );
  const boundAction = useCallback(data => dispatch(checkEligibility(data)), [dispatch]);

  return { isAirdropEligible, amount, checkEligibility: boundAction };
}

export function reducer(state, action) {
  switch (action.type) {
    // Check for account change
    // to reinit the airdrop eligibility state.
    case AIRDROP_CHECK_ELIGIBILITY:
      return {
        ...state,
        isAirdropEligible: AIRDROP_TEST_ELIGIBILITY,
        amount: 0,
      };

    case AIRDROP_ELIGIBLE:
      return {
        ...state,
        isAirdropEligible: AIRDROP_IS_ELIGIBLE,
        amount: action.data.amount,
      };

    case AIRDROP_NOT_ELIGIBLE:
      return {
        ...state,
        isAirdropEligible: AIRDROP_IS_NOT_ELIGIBLE,
        amount: 0,
      };

    case AIRDROP_FAILURE:
      return {
        ...state,
        isAirdropEligible: AIRDROP_FAILURE,
        amount: 0,
      };

    default:
      return state;
  }
}
