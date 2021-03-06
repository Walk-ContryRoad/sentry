const theme = {
  breakpoints: ['768px', '992px', '1200px'],

  offWhite: '#FAF9FB',
  whiteDark: '#fbfbfc',
  white: '#FFFFFF',

  gray1: '#BDB4C7',
  gray2: '#9585A3',
  gray3: '#645574',
  gray4: '#4A3E56',
  gray5: '#302839',

  blue: '#3B6ECC',
  blueLight: '#628BD6',
  blueDark: '#2F58A3',

  green: '#57be8c',
  greenLight: '#71D8A6',
  greenDark: '#3EA573',
  greenTransparent: 'rgba(87, 190, 140, 0.5)',

  yellow: '#ecc844',
  yellowLightest: '#FFFDF7',
  yellowLight: '#FFF15E',
  yellowDark: '#e6bc23',

  yellowOrange: '#f9a66d',
  yellowOrangeLight: '#FFC087',
  yellowOrangeDark: '#E08D54',

  orange: '#ec5e44',
  orangeLight: '#FF785E',
  orangeDark: '#D3452B',

  red: '#e03e2f',
  redLight: '#FA5849',
  redDark: '#C72516',

  pink: '#F868BC',
  pinkLight: '#FF82D6',
  pinkDark: '#DF4FA3',

  purple: '#6C5FC7',
  purple2: '#6f617c', // This is from event-details
  purplelightest: '#9F92FA',
  purpleLight: '#8679E1',
  purpleDark: '#5346AE',
  purpleDarkest: '#392C94',

  borderLighter: '#f9f6fd',
  borderLight: '#E2DBE8',
  borderDark: '#D1CAD8',
  borderRadius: '4px',

  dropShadowLight: '0 2px 0 rgba(37, 11, 54, 0.04)',
  dropShadowHeavy: '0 1px 4px 1px rgba(47,40,55,0.08), 0 4px 16px 0 rgba(47,40,55,0.12)',

  background: '#fff',

  zIndex: {
    sidebar: 9999,
    header: 1000,
    dropdown: 1001,
    modal: 10000,
    toast: 10001,
  },

  alert: {
    info: {
      backgroundLight: '#F5FAFE',
      border: '#B5D6ED',
    },
    warning: {
      backgroundLight: '#FFFDF7',
      background: '#f9a66d',
      border: '#E1D697',
      textDark: '#D3BE2B',
    },
    success: {
      backgroundLight: '#F8FCF7',
      background: '#57be8c',
      border: '#BBD6B3',
    },
    error: {
      backgroundLight: '#FDF6F5',
      border: '#E7C0BC',
      textLight: '#92635f',
      textDark: '#5d3e3b',
    },
  },

  grid: 8,
  fontSizeSmall: '12px',
  fontSizeMedium: '14px',
  fontSizeLarge: '16px',
  fontSizeExtraLarge: '18px',

  settings: {
    containerWidth: '1140px',
    headerHeight: '115px',
    sidebarWidth: '210px',
  },

  sidebar: {
    background: '#2f2936',
    color: '#9586a5',
    divider: '#493e54',
    badgeSize: '22px',
    smallBadgeSize: '11px',
    collapsedWidth: '70px',
    expandedWidth: '220px',
    mobileHeight: '54px',
    menuSpacing: '15px',
    panel: {
      width: '320px',
      headerHeight: '62px',
    },
  },

  text: {
    family: '"Rubik", "Avenir Next", sans-serif',
    familyMono: 'Monaco, Consolas, "Courier New", monospace',
    lineHeightHeading: '1.15',
    lineHeightBody: '1.4',
  },
};

// Aliases
theme.textColor = theme.gray5;
theme.success = theme.green;
theme.error = theme.red;

theme.alert.info.iconColor = theme.blue;
theme.alert.info.background = theme.blue;

theme.alert.warning.iconColor = theme.yellowDark;
theme.alert.warning.background = theme.yellow;

theme.alert.success.iconColor = theme.greenDark;
theme.alert.success.background = theme.green;

theme.alert.error.iconColor = theme.redDark;
theme.alert.error.background = theme.red;

//alias warn to warning
theme.alert.warn = theme.alert.warning;

theme.button = {
  borderRadius: '3px',

  default: {
    color: '#2f2936',
    colorActive: '#161319',
    background: theme.white,
    backgroundActive: theme.white,
    border: '#d8d2de',
    borderActive: '#c9c0d1',
  },
  primary: {
    color: theme.white,
    background: theme.purple,
    backgroundActive: '#4e3fb4',
    border: '#3d328e',
    borderActive: '#352b7b',
  },
  success: {
    color: theme.white,
    background: '#3fa372',
    backgroundActive: theme.green,
    border: '#7ccca5',
    borderActive: '#7ccca5',
  },
  danger: {
    color: theme.white,
    background: theme.red,
    backgroundActive: '#bf2a1d',
    border: '#bf2a1d',
    borderActive: '#7d1c13',
  },
  link: {
    color: theme.blue,
    background: 'transparent',
    // border: '#3d328e',
    backgroundActive: 'transparent',
    // borderActive: '#352b7b',
  },
  disabled: {
    color: '#ced3d6',
    border: '#e3e5e6',
    borderActive: '#e3e5e6',
    background: theme.white,
    backgroundActive: theme.white,
  },
};

export default theme;
