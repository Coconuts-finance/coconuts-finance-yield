import { hexToRgb, primaryColor } from 'assets/jss/material-kit-pro-react.js';

const styles = theme => ({
  sliderDetailContainer: {
    padding: '24px 30px',
  },
  showDetailLeft: {
    float: 'left',
    marginBottom: '10px',
    fontSize: '1rem',
    lineHeight: '20px',
    color: theme.palette.text.secondary,
    fontWeight: '500',
  },
  showPausedMsg: {
    display: 'flex',
    margin: '12px 5px',
    padding: '15px',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '5px',
    background:
      'rgba(' +
      hexToRgb(theme.palette.background.paused) +
      ', ' +
      theme.palette.background.sandOpacity +
      ')',
    //background: `${theme.palette.background.paused}`,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  showRetiredMsg: {
    display: 'flex',
    margin: '12px 5px',
    padding: '15px',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '5px',
    background:
      'rgba(' +
      hexToRgb(theme.palette.background.retired) +
      ', ' +
      theme.palette.background.sandOpacity +
      ')',
    //background: `${theme.palette.background.retired}`,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  numericInput: {
    color: primaryColor[0],
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0',
    lineHeight: '8px',
    [theme.breakpoints.down('xs')]: {
      lineHeight: '16px',
    },
    fontWeight: '550',
    color: theme.palette.text.secondary,
  },
  note: {
    textAlign: 'center',
    fontSize: '12px',
    color: theme.palette.text.secondary,
  },
  balanceMax: {
    cursor: 'pointer',
    color: theme.palette.text.secondary,
    borderBottom: '1px dashed',
  },
  zapNote: {
    width: '100%',
    textAlign: 'left',
    fontSize: '14px',
    color: theme.palette.text.secondary,
  },
  zapFormControl: {
    minWidth: 'auto',
  },
  zapSelect: {
    border: 'none',
    borderLeft: `1px solid ${theme.palette.text.secondary}`,
    paddingLeft: '10px',
    '& > div': {
      padding: '6px 0',
    },
    '&::before': {
      content: 'none',
    },
    '&::after': {
      content: 'none',
    },
  },
});

export default styles;
