const styles = theme => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  networkErrorContainer: {
    background: theme.palette.background.secondary,
    marginTop: '2rem',
    marginBottom: '2rem',
    fontWeight: 900,
    color: theme.palette.text.primary,
  },
  networkError: {
    padding: '12px',
    borderRadius: '0',
    width: '100%',
    textAlign: 'center',
  },
  networkButton: {
    border: `1px solid ${theme.palette.primary.main}`,
    padding: '4px',
    marginLeft: '10px',
    marginRight: '10px',
  },
});

export default styles;
