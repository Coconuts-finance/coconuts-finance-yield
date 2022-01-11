import { createMuiTheme } from '@material-ui/core/styles';

const createTheme = isNightMode =>
  createMuiTheme({
    palette: {
      type: isNightMode ? 'dark' : 'light',
      background: {
        //default: isNightMode ? '#2042b3' : '#fff',

        image: isNightMode ? 'coconuts-island-dark.png' : 'coconuts-island-light.png',

        default: isNightMode ? '#631f04' : '#fff',
        transparent: isNightMode ? 'transparent' : 'transparent',

        // Used to make a gradient background
        gradient1: isNightMode ? '#02002c' : '#e8fcff',
        gradient2: isNightMode ? '#02002c' : '#bdf3fe',
        gradient3: isNightMode ? '#02002c' : '#86e4f0',
        gradient4: isNightMode ? '#02002c' : '#aadbcd',
        gradientOpacity: isNightMode ? '1' : '0.7',

        // Sand color, to colorize each grid element
        sand: isNightMode ? '#243169' : '#FCF3D4',
        sandOpacity: isNightMode ? '0.7' : '0.7',

        // Header and footer background color
        header: isNightMode ? '#243169' : '#C0F9FF',
        footer: isNightMode ? '#243169' : '#fcf3d4',

        paper: isNightMode ? '#445db3' : '#fff',

        // Used in progress bar to retrieve external data (prices, apy, tvl).
        primary: isNightMode ? '#445db3' : '#fff',

        // Used in disclaimer, header links, network errors and toogle.
        secondary: isNightMode ? '#445db3' : '#fff',

        extra: isNightMode ? '#242332' : '#FBF6F0',

        // Custom buttons already colored, on hover (for example the "deposit all" button).
        dark: isNightMode ? '#2B2A3D' : '#999',

        // When a pool is paused (deposit are paused)
        paused: isNightMode ? '#2B2A5A' : '#FCE57E',

        // When a pool is retired
        retired: isNightMode ? '#b47289' : '#e57373',

        // Used by TVL / value progress loader.
        hover: isNightMode ? '#2B2A3D' : '#EFE6DC',

        // Border of each grid element.
        border: isNightMode ? '#2B2A3D' : '#b8c2e6',

        // Top announce background.
        announce: isNightMode ? '#2B2A3D' : '#2B2A3D',

        // Disclaimer
        disclaimer: isNightMode ? '#ff3100' : '#FDC2C4',

        button: isNightMode ? '#ff3100' : '#631f3a',
        buttonOutlined: isNightMode ? 'transparent' : 'transparent',
      },
      primary: {
        // Heading (filters) and deposit/withdraw border buttons
        main: isNightMode ? '#fff' : '#000',
      },
      secondary: {
        // Not used...
        main: isNightMode ? '#fff' : '#F8F2EC',
      },
      text: {
        // Used for :
        // - Header / Footer items
        // - TVL / Holdings
        // - Filter checkboxes texts and list items
        // - Any pool title and bold text
        // - input text and percentages in pools
        primary: isNightMode ? '#fff' : '#631f3a',

        // Used for :
        // - Filter list titles
        // - Any pool standard header texts
        // - pools balances / holdings
        // - pools fees informations
        secondary: isNightMode ? '#fff' : '#7c2706',

        // Announce text color
        announce: isNightMode ? '#fff' : '#fff',

        // Disclaimer
        disclaimer: isNightMode ? '#fff' : '#978e9c',

        button: isNightMode ? 'white' : 'white',
        buttonOutlined: isNightMode ? 'white' : '#631f3a',
      },
    },
    overrides: {
      MuiButton: {
        label: {
          // standard button text color
          color: isNightMode ? 'white' : '#631f3a',
        },
      },
      // for dropdown menu items
      MuiButtonBase: {
        root: {
          // Used by paused / retired info at top left of pool
          color: isNightMode ? 'white' : '#631f3a',
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          // Checkbox border
          color: isNightMode ? '#fff' : '#000',
        },
        colorSecondary: {
          // Not used...
          color: isNightMode ? '#fff' : '#000',
        },
      },
    },
  });

export default createTheme;
