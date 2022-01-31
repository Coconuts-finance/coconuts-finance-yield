import { hexToRgb } from 'assets/jss/material-kit-pro-react';

const styles = theme => ({
  container: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    backgroundColor: 'rgba(' + hexToRgb(theme.palette.primary.main) + ',0.15)',
    width: '100%',
  },
  texts: {
    padding: '5px 10px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  launchpool: {
    color: '#ffffff',
    backgroundColor: theme.palette.type === 'dark' ? '#3e754e' : '#5a8f69',
  },
  experimental: {
    color: '#ffffff',
    backgroundColor: theme.palette.type === 'dark' ? '#205686' : '#3285CF',
  },
});

export default styles;
