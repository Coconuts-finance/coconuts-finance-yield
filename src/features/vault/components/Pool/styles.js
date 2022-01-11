import { hexToRgb } from 'assets/jss/material-kit-pro-react';

const styles = theme => ({
  container: {
    marginBottom: '24px',
    border: '1px solid ' + theme.palette.background.border,
    borderRadius: '5px',
    background:
      'rgba(' +
      hexToRgb(theme.palette.background.sand) +
      ', ' +
      theme.palette.background.sandOpacity +
      ')',
  },
  containerPaused: {
    marginBottom: '24px',
    border: '1px solid ' + theme.palette.background.border,
    borderRadius: '5px',
    background:
      'rgba(' +
      hexToRgb(theme.palette.background.paused) +
      ', ' +
      theme.palette.background.sandOpacity +
      ')',
  },
  containerRetired: {
    marginBottom: '24px',
    border: '1px solid ' + theme.palette.background.border,
    borderRadius: '5px',
    background:
      'rgba(' +
      hexToRgb(theme.palette.background.retired) +
      ', ' +
      theme.palette.background.sandOpacity +
      ')',
  },

  accordion: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  divider: {
    margin: '0 30px',
  },
});

export default styles;
