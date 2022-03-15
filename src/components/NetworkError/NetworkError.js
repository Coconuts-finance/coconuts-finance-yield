import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { networkSettings } from 'common/networkSetup';
import { networks } from 'components/NetworksProvider/NetworksProvider';

import styles from './styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(styles);

const NetworkError = ({ network, currentNetwork }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  // Get current selected network
  const currentNetworkData = networks.find(
    element => parseInt(element.id) === parseInt(currentNetwork)
  );

  const reloadPage = event => {
    window.location.assign(currentNetworkData.url);
    window.location.reload();
  };

  return (
    <Grid container item className={classes.root} justify="center">
      <div className={classes.networkErrorContainer}>
        <Typography className={classes.networkError}>
          {t('Network-Error', { network: networkSettings[network].chainName })}
        </Typography>
        <Typography className={classes.networkError}>
          {currentNetworkData && (
            <Trans i18nKey="Network-Error-Switch">
              &nbsp;Or switch to{' '}
              <Button className={classes.networkButton} onClick={reloadPage}>
                {{ name: currentNetworkData.name }}
              </Button>{' '}
              version.
            </Trans>
          )}
        </Typography>
      </div>
    </Grid>
  );
};

export default NetworkError;
