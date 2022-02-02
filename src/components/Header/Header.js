import React from 'react';
//import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
//import Close from '@material-ui/icons/Close';
import WbSunny from '@material-ui/icons/WbSunny';
import NightsStay from '@material-ui/icons/NightsStay';
import { getNetworkBuyLink } from '../../features/helpers/getNetworkData';
import styles from './styles';

const useStyles = makeStyles(styles);

const Header = ({ links, isNightMode, setNightMode }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  //const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar className={`${classes.appBar} ${classes.dark}`}>
      <Toolbar className={classes.container}>
        <Button href="/" className={classes.title}>
          <Hidden xsDown>
            <img
              alt="Coconuts finance"
              src={require(`assets/img/cnc-logo.svg`)}
              height={'160px'}
              className={classes.logo}
            />
          </Hidden>
          <Hidden smUp>
            <img
              alt="Coconuts finance"
              src={require(`assets/img/cnc-logo.svg`)}
              height={'100px'}
              className={classes.logo}
            />
          </Hidden>
        </Button>

        <div className={classes.middleNav}>
          <Hidden smDown>
            <Button className={classes.link} href="/">
              <span>Pools</span>
            </Button>
            <Button className={classes.link} href="/stake">
              <span>Stake</span>
            </Button>
            <Button className={classes.link} href="/airdrop">
              <span>Airdrop</span>
            </Button>
          </Hidden>
          <Hidden mdUp>
            <Button className={classes.link} href="/">
              <span>Pools</span>
            </Button>
            <Button className={classes.link} href="/stake">
              <span>Stake</span>
            </Button>
            <Button className={classes.link} href="/airdrop">
              <span>Airdrop</span>
            </Button>
          </Hidden>
        </div>
        <Hidden smDown implementation="css">
          <div className={classes.collapse}>{links}</div>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>

      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>{links}</div>
          <div style={{ textAlign: 'center' }}>
            <LinkSidebar name="docs" label="docs" icon="book" classes={classes} />
            <IconButton onClick={setNightMode} className={classes.icon}>
              {isNightMode ? <WbSunny /> : <NightsStay />}
            </IconButton>
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

const renderLink = (name, label, icon, classes) => {
  return (
    <a
      href={getLinkUrl(name)}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
      style={{ marginLeft: '5px', marginRight: '5px' }}
    >
      <i className={`fas fa-${icon} ${classes.icon}`} />
      <span>{label}</span>
    </a>
  );
};
/*
const renderBoost = classes => {
  return (
    <a className={classes.btnBoost} href="/stake">
      <img alt="Boost" src={require('images/stake/boost.svg')} />
    </a>
  );
};
*/
const LinkSidebar = ({ name, label, icon, classes }) => (
  <div style={{ width: '100%', paddingTop: '10px' }}>{renderLink(name, label, icon, classes)}</div>
);

const getLinkUrl = name => {
  switch (name) {
    case 'buy':
      return getNetworkBuyLink();
    case 'docs':
      return 'https://chimera-1.gitbook.io/coconuts-finance/';
  }

  return `https://${name}.coconuts.finance`;
  //return name === 'buy' ? getNetworkBuyLink() : `https://${name}.coconuts.finance`;
};

export default Header;
