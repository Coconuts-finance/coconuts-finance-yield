import { hexToRgb } from 'assets/jss/material-kit-pro-react';

const styles = theme => ({
  container: {
    padding: '24px',
    margin: '8px 0 2rem',
    border: '1px solid ' + theme.palette.background.border,
    backgroundColor:
      'rgba(' +
      hexToRgb(theme.palette.background.sand) +
      ', ' +
      theme.palette.background.sandOpacity +
      ')',
    justifyContent: 'space-between',
    position: 'relative',
    borderRadius: '5px',
  },

  selectorContainer: {
    width: '100%',
  },

  selectorLabel: {
    color: theme.palette.text.secondary,
    marginBottom: '10px',
  },

  selector: {
    padding: '0',
    margin: '0',
  },

  label: {
    color: theme.palette.text.primary,
    '& .MuiTypography-root': {
      fontSize: '14px',
    },
  },
  boost: {
    color: '#5a8f69',
    fontWeight: 'bold',
    '& .MuiAvatar-root': {
      position: 'absolute',
      top: 0,
      right: '-20px',
    },
  },
  reset: {
    border: '1px solid ' + theme.palette.background.border,
    padding: '4px 8px',
    position: 'absolute',
    top: '5px',
    right: '5px',
    backgroundColor: theme.palette.background.button,
    '& .MuiButton-label': {
      fontWeight: 'bold',
      textTransform: 'capitalize',
      color: theme.palette.text.button,
    },
    '&:hover .MuiButton-label': {
      color: theme.palette.background.button,
    },
  },
});

export default styles;
