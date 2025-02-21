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
  showDetailBottom: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& + &': {
      marginLeft: '5px',
    },
  },
  showResponsiveButtonCon: {
    width: '160px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '80px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '100px',
    },
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    lineHeight: '18px',
    letterSpacing: 0,
    wordBreak: 'break-word',
    minWidth: '150px',
  },
  subtitle: {
    fontSize: '14px',
    fontWeight: '400',
    color: theme.palette.text.secondary,
    lineHeight: '20px',
    letterSpacing: 0,
  },
});

export default styles;
