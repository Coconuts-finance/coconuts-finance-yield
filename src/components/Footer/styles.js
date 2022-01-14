import { hexToRgb } from 'assets/jss/material-kit-pro-react.js';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: '2rem',
    '@media (min-width: 769px)': {
      padding: '2rem 5rem',
    },
    backgroundColor: 'rgba(' + hexToRgb(theme.palette.background.footer) + ', 0.7)',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 900,
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
  link: {
    margin: '0.5rem 0',
    fontWeight: 400,
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.text.primary,
      textDecoration: 'underline',
    },
  },
  linkIcon: {
    marginRight: '0.5rem',
    minWidth: '24px',
  },
});

export default styles;
