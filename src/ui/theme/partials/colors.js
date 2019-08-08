const colors = {
  /* Main */
  primary: '#0C304E',
  primaryDark: '#3D597A',
  primaryMedium: '#6B86A9',
  primaryLight: '#C4CFDD',
  primaryLighter: '#F4F7FC',
  secondary: '#7CB342',
  secondaryDark: '#659533',
  secondaryMedium: '#9CCC65',
  secondaryLight: '#F5FAF0',
  black: '#222222',
  white: '#fff',
  body_bg: '#f2f5fa',
  transparent: 'transparent',

  /* Secondary */
  orange: '#D58507',
  yellow: '#FFC107',
  red: '#E62A10',
  green: '#9CCC65',
  azureDark: '#2196F3',
  azureLight: '#90CAF9',
  purple: '#9b006f',

  /* Grey */
  greyDark: '#66696C',
  greyMedium: '#DEDEDE',
  greyLight: '#E7EAEC',
  greyLighter: '#F9F9F9',
  text_grey: '#66696C',
  grey: '#F3F3F3',
  lightGrey: '#D8D8D8',

  /* Form */
  disabled: '#a0a8b0',

  /* Shadow */
  borderShadow: '0 0 10px 0 rgba(0,0,0,0.01), 0 5px 20px 0 rgba(0,0,0,0.08)',

  /* Grandient */
  get primaryGradientStart() {
    return this.primaryMedium;
  },

  get primaryGradientEnd() {
    return this.primary;
  }
};

export default colors;
