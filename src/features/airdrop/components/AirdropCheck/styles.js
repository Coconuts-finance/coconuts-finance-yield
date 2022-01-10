import { primaryColor } from 'assets/jss/material-kit-pro-react';

const styles = theme => ({
  noWalletButtonCon: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  noWalletButton: {
    margin: '20px 0',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '5px',
    backgroundColor: primaryColor[0],
    '& .MuiButton-label': {
      color: 'white',
    },
  },
  checkEligibilityCon: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  checkEligibility: {
    margin: '20px 0',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '5px',
    backgroundColor: primaryColor[0],
    '& .MuiButton-label': {
      color: 'white',
    },
  },
});

export default styles;
