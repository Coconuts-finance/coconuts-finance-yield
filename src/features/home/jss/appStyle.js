import { container } from 'assets/jss/material-kit-pro-react.js';

const appStyle = theme => ({
  page_outer: {},
  page_inner: {
    backgroundPosition: 'bottom right',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  page: {
    backgroundColor: '#fbf9f6',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    ...container,
    zIndex: 1,
  },
  children: {
    minHeight: '77vh',
  },
});

export default appStyle;
