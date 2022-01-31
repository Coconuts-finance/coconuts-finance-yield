import { makeStyles } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/core';
import { primaryColor } from 'assets/jss/material-kit-pro-react.js';

export default makeStyles(theme =>
  createStyles({
    noWalletButtonCon: {
      display: 'flex',
      justifyContent: 'space-around',
    },

    noWalletButton: {
      margin: '20px 0',
      fontSize: '14px',
      fontWeight: 'bold',
      borderRadius: '5px',
      backgroundColor: theme.palette.background.button, //primaryColor[0],
      '& .MuiButton-label': {
        color: theme.palette.text.button,
      },
    },
    showDetailButtonCon: {
      display: 'flex',
      justifyContent: 'space-around',
      '& + &': {
        marginLeft: '5px',
      },
    },
    showDetailButton: {
      margin: '12px 5px',
      fontSize: '14px',
      fontWeight: 'bold',
      borderRadius: '5px',
      width: '160px',
    },
    showDetailButtonOutlined: {
      backgroundColor: theme.palette.background.buttonOutlined,
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.text.buttonOutlined, // primaryColor[0],
      '&:hover': {
        '& .MuiButton-label': {
          color: 'white', //theme.palette.text.buttonOutlined,
        },
      },
      '& .MuiTouchRipple-root span': {
        backgroundColor: primaryColor[0],
      },
    },
    showDetailButtonContained: {
      backgroundColor: theme.palette.background.button, //primaryColor[0],
      '& .MuiButton-label': {
        color: theme.palette.text.button,
      },
    },
  })
);
