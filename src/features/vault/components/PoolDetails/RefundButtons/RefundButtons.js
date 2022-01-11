import React, { memo } from 'react';
import { useSnackbar } from 'notistack';

import { useFetchApproval } from '../../../redux/hooks';
import Button from 'components/CustomButtons/Button.js';
import { useConnectWallet } from 'features/home/redux/hooks';
import { refundABI } from 'features/configure/abi';
import useSharedButtons from 'features/common/styles/buttons';

//import { makeStyles } from '@material-ui/core/styles';
//import styles from './styles';

//const useStyles = makeStyles(styles);

const RefundButtons = ({ tokenAddress, refundAddress, index }) => {
  //const classes = useStyles();
  const sharedButtons = useSharedButtons();
  const { web3, address } = useConnectWallet();
  const { enqueueSnackbar } = useSnackbar();
  const { fetchApproval } = useFetchApproval();

  const onRefundApproval = () => {
    fetchApproval({
      address,
      web3,
      tokenAddress,
      refundAddress,
      contractAddress: refundAddress,
      index,
    })
      .then(() => enqueueSnackbar(`Approval success`, { variant: 'success' }))
      .catch(error => enqueueSnackbar(`Approval error: ${error}`, { variant: 'error' }));
  };

  const onRefund = () => {
    const vault = new web3.eth.Contract(refundABI, refundAddress);
    vault.methods.refund().send({ from: address });
  };

  return (
    <>
      <Button
        className={`${sharedButtons.showDetailButton} ${sharedButtons.showDetailButtonContained}`}
        onClick={onRefundApproval}
      >
        Approve
      </Button>
      <Button
        className={`${sharedButtons.showDetailButton} ${sharedButtons.showDetailButtonContained}`}
        onClick={onRefund}
      >
        Refund
      </Button>
    </>
  );
};

export default memo(RefundButtons);
