import { createMuiTheme } from '@material-ui/core/styles';

const createTheme = isNightMode =>
  createMuiTheme({
    palette: {
      type: isNightMode ? 'dark' : 'light',
      background: {
        //default: isNightMode ? '#2042b3' : '#fff',
        default: isNightMode ? '#631f04' : '#fff',
        transparent: isNightMode ? 'transparent' : 'transparent',
        color1: isNightMode ? '#020024' : '#e5fbff',
        color2: isNightMode ? '#090979' : '#79e9ff',
        color3: isNightMode ? '#beae5c' : '#e0cf9b',
        sand: isNightMode ? '#7e633a' : '#fff3d0',
        header: isNightMode ? '#324687' : '#b1f8ff',
        footer: isNightMode ? '#7e633a' : '#fff3d0',
        paper: isNightMode ? '#445db3' : '#fff',
        primary: isNightMode ? '#445db3' : '#fff',
        secondary: isNightMode ? '#445db3' : '#fff',
        extra: isNightMode ? '#242332' : '#FBF6F0',
        dark: isNightMode ? '#2B2A3D' : '#999',
        paused: isNightMode ? '#2B2A5A' : '#FCE57E',
        retired: isNightMode ? '#d32f2f' : '#e57373',
        hover: isNightMode ? '#2B2A3D' : '#EFE6DC',
        border: isNightMode ? '#2B2A3D' : '#b8c2e6',
        announce: isNightMode ? '#2B2A3D' : '#2B2A3D',
      },
      primary: {
        main: isNightMode ? '#fff' : '#000',
      },
      secondary: {
        main: isNightMode ? '#fff' : '#F8F2EC',
      },
      text: {
        primary: isNightMode ? '#fff3b7' : '#631f04',
        secondary: isNightMode ? '#fff3b7' : '#7c2706',
        announce: isNightMode ? '#fff' : '#fff',
      },
    },
    overrides: {
      MuiButton: {
        label: {
          color: isNightMode ? '#fff' : '#631f04',
        },
      },
      // for dropdown menu items
      MuiButtonBase: {
        root: {
          color: isNightMode ? '#fff3b7' : '#631f04',
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          color: isNightMode ? '#fff' : '#000',
        },
        colorSecondary: {
          color: isNightMode ? '#fff' : '#000',
        },
      },
    },
  });

export default createTheme;
