import { Grid, Typography, Link } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation, Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';
import AirdropCheck from '../AirdropCheck/AirdropCheck';

const useStyles = makeStyles(styles);

export default function AirdropDetails() {
  const classes = useStyles();

  const { t /*, i18n*/ } = useTranslation();

  return (
    <Grid container className={classes.container}>
      <Helmet>
        <title>{t('Airdrop-Title')}</title>
      </Helmet>
      <Grid item xs={12}>
        <Typography className={classes.title}>{t('Airdrop-Title')}</Typography>
      </Grid>
      <Grid item xs={6} className={classes.infoContainer}>
        <Typography className={classes.info}>{t('Airdrop-Info-1')}</Typography>

        <Typography className={classes.info}>{t('Airdrop-Info-2')}</Typography>

        <Typography className={classes.info}>
          <Trans i18nKey="Airdrop-Info-Link">
            More informations{' '}
            <Link
              className={classes.link}
              target="_blank"
              href="https://chimera-1.gitbook.io/coconuts-finance/tokenomics/lockdrop-and-gtm"
            >
              here
            </Link>
          </Trans>
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.adcContainer}>
        <AirdropCheck />
      </Grid>
    </Grid>
  );
}
