import { hexToRgb } from 'assets/jss/material-kit-pro-react';

const styles = theme => ({
  container: {
    marginBottom: '24px',
    border: '1px solid ' + theme.palette.background.border,
    borderRadius: '5px',
    background: 'rgba(' + hexToRgb(theme.palette.background.sand) + ', 0.9)',
    color: theme.palette.text.primary,
  },
  title: {
    fontSize: '32px',
    letterSpacing: '0',
    lineHeight: '32px',
    fontWeight: '550',
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '35px',
  },
  infoContainer: {
    paddingLeft: '40px',
  },
  info: {
    paddingBottom: '40px',
  },
  adcContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    margin: '0.5rem 0',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export default styles;
