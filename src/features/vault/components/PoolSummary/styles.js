const styles = theme => ({
  details: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
  },
  detailsPaused: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.paused,
    borderRadius: '5px',
  },
  detailsRetired: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.retired,
    borderRadius: '5px',
  },
  mobilePadding: {
    paddingTop: '20px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 0,
    },
  },
  item: {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    [theme.breakpoints.up('xs')]: {
      flexBasis: '50%',
      maxWidth: '50%',
    },
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
      maxWidth: '50%',
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '33%',
      maxWidth: '33%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '25%',
      maxWidth: '25%',
    },
  },
  itemBalances: {
    [theme.breakpoints.up('xs')]: {
      flexBasis: '50%',
      maxWidth: '50%',
    },
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
      maxWidth: '50%',
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '33%',
      maxWidth: '33%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '17.5%',
      maxWidth: '17.5%',
    },
  },
  itemStats: {
    [theme.breakpoints.up('xs')]: {
      flexBasis: '50%',
      maxWidth: '50%',
    },
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
      maxWidth: '50%',
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '33%',
      maxWidth: '33%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '13.3%',
      maxWidth: '13.3%',
    },
  },
  itemInner: {
    textAlign: 'center',
  },
});

export default styles;
