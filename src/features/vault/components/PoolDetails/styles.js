import { hexToRgb } from 'assets/jss/material-kit-pro-react.js';

const styles = theme => ({
  container: {
    position: 'relative',
    backgroundColor: theme.palette.background.extra,
    padding: '24px',
    border: '1px solid ' + theme.palette.background.border,
  },
  heading: {
    color: theme.palette.primary.main,
  },
  summary: {
    paddingTop: '24px',
    paddingBottom: '24px',
  },
  statusIcon: {
    marginRight: '.5rem',
  },
  status: {
    padding: '24px',
    marginBottom: '8px',
    background: pool =>
      pool.status === 'eol'
        ? 'rgba(' +
          hexToRgb(theme.palette.background.retired) +
          ', ' +
          theme.palette.background.sandOpacity +
          ')'
        : 'rbga(' +
          hexToRgb(pool.depositsPaused) +
          ', ' +
          theme.palette.background.sandOpacity +
          ')'
        ? 'rgba(' +
          hexToRgb(theme.palette.background.paused) +
          ', ' +
          theme.palette.background.sandOpacity +
          ')'
        : 'rgba(' +
          hexToRgb(theme.palette.background.primary) +
          ', ' +
          theme.palette.background.sandOpacity +
          ')',
  },
  description: {
    padding: '8px',
  },
  item: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
      maxWidth: '50%',
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '37%',
      maxWidth: '37%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '30%',
      maxWidth: '30%',
    },
  },
  itemBalances: {
    [theme.breakpoints.up('sm')]: {
      flexBasis: '25%',
      maxWidth: '25%',
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '15%',
      maxWidth: '15%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '18%',
      maxWidth: '18%',
    },
  },
  itemStats: {
    [theme.breakpoints.up('md')]: {
      flexBasis: '14.6%',
      maxWidth: '14.6%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '14.6%',
      maxWidth: '14.6%',
    },
  },
  itemInner: {
    textAlign: 'center',
  },
  simpleTabAccordion: {
    justifyContent: 'space-between',
  },
  multiTabAccordion: {
    justifyContent: 'space-between',
    display: 'block',

    '& .MuiTabs-indicator': {
      display: 'none',
    },
  },
  multiTabs: {
    margin: '25px',
    '& .MuiTabs-flexContainer': {
      borderBottom: '1px solid rgba(' + hexToRgb(theme.palette.primary.main) + ',0.12)',
    },
  },
  tab: {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    border: '1px solid rgba(' + hexToRgb(theme.palette.primary.main) + ',0.12)',
    //border: '1px solid rgba(' + hexToRgb(theme.palette.primary.main)+ ',0.12)',
    marginLeft: '15px',
    marginRight: '0px',
    marginBottom: '-1px',
    backgroundColor:
      'rgba(' +
      hexToRgb(theme.palette.background.sand) +
      ', ' +
      theme.palette.background.sandOpacity +
      ')',

    '&.Mui-selected': {
      backgroundColor: 'transparent',
      border: '1px solid rgba(' + hexToRgb(theme.palette.primary.main) + ',0.12)',
      borderBottom: '1px solid ' + theme.palette.background.sand,
    },
  },
});

export default styles;
