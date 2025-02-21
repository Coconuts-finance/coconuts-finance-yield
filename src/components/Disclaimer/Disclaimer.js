import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const useStyles = makeStyles(styles);

const Disclaimer = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      <Grid container item className={classes.root} justify="center">
        {
          <Typography className={classes.annoucement}>
            <span>This product is in an Alpha Testing phase - use with caution</span>
            <br />
          </Typography>
        }
      </Grid>
      <Grid container item className={classes.root} justify="center">
        {
          <Typography className={classes.disclaimer}>
            {t('Disclaimer')}
            <a
              href="https://chimera-1.gitbook.io/coconuts-finance/security"
              rel="noreferrer"
              target="_blank"
            >
              <i className={`fas fa-book ${classes.linkIcon}`}></i>
            </a>
          </Typography>
        }
      </Grid>
    </>
  );
};

export default memo(Disclaimer);
