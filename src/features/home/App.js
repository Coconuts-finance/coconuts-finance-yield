import React, { useEffect, useState } from 'react';
import { hexToRgb } from 'assets/jss/material-kit-pro-react';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import Header from 'components/Header/Header';
import HeaderLinks from 'components/HeaderLinks/HeaderLinks';
import NetworksProvider from 'components/NetworksProvider/NetworksProvider';
import NetworkError from 'components/NetworkError/NetworkError';

import { useTranslation } from 'react-i18next';

import { SnackbarProvider } from 'notistack';
import { Notifier } from 'features/common';

import Footer from 'components/Footer/Footer';
//import Pastures from 'components/Pastures/Pastures';
import appStyle from './jss/appStyle.js';

import { createWeb3Modal } from '../web3';
import { useConnectWallet, useDisconnectWallet } from './redux/hooks';
import useNightMode from './hooks/useNightMode';
import createTheme from './jss/appTheme';
import { networkSetup } from 'common/networkSetup';
import ReactGA from 'react-ga';

ReactGA.initialize('G-TMSH7GQS2X');
const useStyles = makeStyles(appStyle);

export default function App({ children }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const { connectWallet, web3, address, networkId, connected, connectWalletPending } =
    useConnectWallet();
  const { disconnectWallet } = useDisconnectWallet();
  const [web3Modal, setModal] = useState(null);
  const [networkError, setNetworkError] = useState(null);

  const { isNightMode, setNightMode } = useNightMode();
  const theme = createTheme(isNightMode);

  useEffect(() => {
    setModal(createWeb3Modal(t));
  }, [setModal, t]);

  useEffect(() => {
    if (web3Modal && (web3Modal.cachedProvider || window.ethereum)) {
      connectWallet(web3Modal);
    }
  }, [web3Modal, connectWallet]);

  useEffect(() => {
    if (
      web3 &&
      address &&
      !connectWalletPending &&
      networkId &&
      Boolean(networkId !== Number(window.REACT_APP_NETWORK_ID))
    ) {
      networkSetup(Number(window.REACT_APP_NETWORK_ID)).catch(setNetworkError);
    }
  }, [web3, address, networkId, connectWalletPending, t]);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <NetworksProvider>
            <div
              className={classes.page_outer}
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(' +
                  hexToRgb(theme.palette.background.gradient1) +
                  ', ' +
                  theme.palette.background.gradientOpacity +
                  ') 0%, rgba(' +
                  hexToRgb(theme.palette.background.gradient2) +
                  ', ' +
                  theme.palette.background.gradientOpacity +
                  ') 30%, rgba(' +
                  hexToRgb(theme.palette.background.gradient3) +
                  ', ' +
                  theme.palette.background.gradientOpacity +
                  ') 50%, rgba(' +
                  hexToRgb(theme.palette.background.gradient4) +
                  ', ' +
                  theme.palette.background.gradientOpacity +
                  ') 80%)',
              }}
            >
              <div
                className={classes.page_inner}
                style={{
                  backgroundImage: 'url("/assets/img/' + theme.palette.background.image + '")',
                }}
              >
                <div className={classes.page} style={{ backgroundColor: 'transparent' }}>
                  <Header
                    links={
                      <HeaderLinks
                        address={address}
                        connected={connected}
                        connectWallet={() => connectWallet(web3Modal)}
                        disconnectWallet={() => disconnectWallet(web3, web3Modal)}
                        isNightMode={isNightMode}
                        setNightMode={() => setNightMode(!isNightMode)}
                      />
                    }
                    isNightMode={isNightMode}
                    setNightMode={() => setNightMode(!isNightMode)}
                  />
                  <div className={classes.container}>
                    <div className={classes.children}>
                      {Boolean(networkId === Number(window.REACT_APP_NETWORK_ID)) ? (
                        children
                      ) : (
                        <NetworkError
                          network={window.REACT_APP_NETWORK_ID}
                          currentNetwork={networkId}
                        />
                      )}
                      <Notifier />
                    </div>
                  </div>

                  <Footer />
                </div>
              </div>
            </div>
          </NetworksProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}
