import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.column}>
        <div className={classes.title}>Coconuts.finance</div>
        <a
          href="https://chimera-1.gitbook.io/coconuts-finance/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-book ${classes.linkIcon}`}></i>
          <span>docs</span>
        </a>

        <a
          href="https://medium.com/@coconuts.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-medium ${classes.linkIcon}`}></i>
          <span>{t('news')}</span>
        </a>

        <a
          href="https://github.com/Coconuts-finance/coconuts-finance-yield"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-github ${classes.linkIcon}`}></i>
          <span>{t('source')}</span>
        </a>

        {/*<a
          href="http://analytics.coconuts.finance/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fa fa-bar-chart ${classes.linkIcon}`}></i>
          <span>{'analytics'}</span>
        </a>*/}
      </div>

      <div className={classes.column}>
        <div className={classes.title}>{t('Socials')}</div>
        <a
          href="https://twitter.com/CoconutsFinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-twitter ${classes.linkIcon}`}></i>

          <span>twitter</span>
        </a>

        <a
          href="https://discord.gg/z6bpPh4Ufp"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-discord ${classes.linkIcon}`}></i>
          <span>discord</span>
        </a>

        <a
          href="https://t.me/coconutsfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-telegram ${classes.linkIcon}`}></i>
          <span>telegram</span>
        </a>
      </div>
    </div>
  );
};

export default memo(Footer);
