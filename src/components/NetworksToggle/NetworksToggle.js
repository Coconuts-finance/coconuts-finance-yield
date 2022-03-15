import React, { memo, useCallback, useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NetworksModal from '../NetworksModal/NetworksModal';
import styles from './styles';
import { SettingsPowerRounded } from '@material-ui/icons';
import { allNetworks } from 'network';

const useStyles = makeStyles(styles);

const NetworksToggle = memo(function () {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const currentNetwork = useMemo(
    () => allNetworks.find(network => network.id === window.REACT_APP_NETWORK_ID),
    []
  );
  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);
  const handleOpen = useCallback(() => setIsOpen(true), [setIsOpen]);

  return (
    <>
      <div className={classes.container} onClick={handleOpen}>
        <img
          className={classes.logo}
          src={require(`images/networks/${currentNetwork.asset}.svg`)}
          alt={`${currentNetwork.asset} logo`}
        />
        <div className={classes.tag}>
          <div className={classes.connected}></div>
          <p className={classes.networkName}>{currentNetwork.name}</p>
        </div>
      </div>
      <NetworksModal isOpen={isOpen} handleClose={handleClose} currentNetwork={currentNetwork} />
    </>
  );
});

export default NetworksToggle;
