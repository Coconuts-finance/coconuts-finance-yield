import React, { useEffect } from 'react';
import Button from 'components/CustomButtons/Button.js';
import { Typography } from '@material-ui/core';

import { useConnectWallet } from 'features/home/redux/hooks';
import { createWeb3Modal } from 'features/web3';

import { useCheckEligibility } from 'features/airdrop/redux/checkEligibility';

import { useTranslation, Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';
import {
  AIRDROP_IS_ELIGIBLE,
  AIRDROP_IS_NOT_ELIGIBLE,
  AIRDROP_TEST_ELIGIBILITY,
} from 'features/airdrop/redux/constants';

const useStyles = makeStyles(styles);

export default function AirdropCheck() {
  const classes = useStyles();
  const { t } = useTranslation();
  const { connected, address, connectWallet } = useConnectWallet();
  const { isAirdropEligible, amount, checkEligibility } = useCheckEligibility();
  const handleConnectWallet = () => {
    const web3Modal = createWeb3Modal(t);
    connectWallet(web3Modal);
  };

  const handleEligibility = () => {
    checkEligibility(address);
  };

  // Trigger any web3 address change to
  // restart eligibility check.
  useEffect(() => {
    checkEligibility(address);
  }, [address]);

  if (connected) {
    switch (isAirdropEligible) {
      case AIRDROP_IS_ELIGIBLE:
        const count = amount;
        return (
          <Typography>
            <Trans i18nKey="Airdrop-Eligible" count={count}>
              You are eligible for <strong>{{ count }} token</strong> !!
            </Trans>
          </Typography>
        );
      case AIRDROP_IS_NOT_ELIGIBLE:
        return <Typography>{t('Airdrop-Not-Eligible')}</Typography>;
      case AIRDROP_TEST_ELIGIBILITY:
        return (
          <div className={classes.checkEligibilityCon}>
            <Button className={classes.checkEligibility} onClick={handleEligibility}>
              {t('Airdrop-Check-Eligibility')}
            </Button>
          </div>
        );
      default:
        return <Typography>What append ??</Typography>;
    }
  } else {
    return (
      <div className={classes.noWalletButtonCon}>
        <Button className={classes.noWalletButton} onClick={handleConnectWallet}>
          {t('Vault-ConnectWallet')}
        </Button>
      </div>
    );
  }
}
