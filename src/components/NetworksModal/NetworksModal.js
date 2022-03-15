import React, { memo, useCallback, useEffect } from 'react';
import Modal from 'react-modal';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';

import styles from './styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@material-ui/core';
import { allNetworks } from 'network';

const useStyles = makeStyles(styles);

const NetworksModal = memo(function NetworksModal({ isOpen, handleClose, currentNetwork }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const handleNetworkClick = useCallback(
    network => {
      if (network.id === currentNetwork.id) {
        handleClose();
      } else {
        window.location.hash = network.hash;
        window.location.reload();
      }
    },
    [currentNetwork, handleClose]
  );
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{
        content: {
          backgroundColor: theme.palette.background.primary,
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <IconButton className={classes.close} onClick={handleClose}>
        <Close />
      </IconButton>
      <h1 className={classes.title}>{t('Select-Network')}</h1>
      <div className={classes.networks}>
        {allNetworks.map(network => (
          <div
            onClick={() => handleNetworkClick(network)}
            className={classes.networkContainer}
            key={network.id}
          >
            <img
              className={classes.logo}
              src={require(`images/networks/${network.asset}.svg`)}
              alt={`${currentNetwork.asset} logo`}
            />
            <div className={classes.tag}>
              {network.id === currentNetwork.id && <div className={classes.connected}></div>}
              <p className={classes.networkName}>{network.name}</p>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
});

export default NetworksModal;
