import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AccordionDetails from '@material-ui/core/AccordionActions';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PoolActions from '../PoolActions/PoolActions';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';
import useSharedButtons from 'features/common/styles/buttons';
import Button from 'components/CustomButtons/Button.js';
import { useConnectWallet } from 'features/home/redux/hooks';
import { createWeb3Modal } from 'features/web3';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(styles);

const PoolAccordion = ({ pool, balanceSingle, index, sharesBalance }) => {
  const { chain } = useParams();
  const classes = useStyles();
  const sharedButtons = useSharedButtons();
  const { t } = useTranslation();
  const { connected, connectWallet } = useConnectWallet();

  const handleConnectWallet = () => {
    const web3Modal = createWeb3Modal(t);
    connectWallet(web3Modal);
  };
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (event, value) => {
    setTabIndex(value);
  };

  if (connected) {
    if (pool.useStake) {
      return (
        <AccordionDetails className={classes.multiTabAccordion}>
          <Tabs className={classes.multiTabs} value={tabIndex} onChange={handleChange}>
            <Tab className={classes.tab} label="Step 1: Deposit" />
            <Tab className={classes.tab} label="Step 2: Stake" />
          </Tabs>
          {tabIndex === 0 && (
            <TabContainer>
              <PoolActions
                pool={pool}
                balanceSingle={balanceSingle}
                sharesBalance={sharesBalance}
              />
            </TabContainer>
          )}
          {tabIndex === 1 && (
            <TabContainer>
              <Grid container alignItems="center" style={{ padding: '30px' }}>
                <Grid item xs={12} sm={8}>
                  If you have deposited USDC and get ACUSDC back, you can now stake it to earn
                  rewards.
                </Grid>
                <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
                  <Link to={`/${chain}/stake/pool/${pool.useStake}`}>
                    <Button
                      xs={5}
                      md={2}
                      className={`${sharedButtons.showDetailButton} ${sharedButtons.showDetailButtonContained}`}
                    >
                      {t('Stake-Button-Stake-Tokens')}
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </TabContainer>
          )}
        </AccordionDetails>
      );
    } else {
      return (
        <AccordionDetails className={classes.simpleTabAccordion}>
          <PoolActions pool={pool} balanceSingle={balanceSingle} sharesBalance={sharesBalance} />
        </AccordionDetails>
      );
    }
  } else {
    return (
      <div className={sharedButtons.noWalletButtonCon}>
        <Button className={sharedButtons.noWalletButton} onClick={handleConnectWallet}>
          {t('Vault-ConnectWallet')}
        </Button>
      </div>
    );
  }
};

export default PoolAccordion;
