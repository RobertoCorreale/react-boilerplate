import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import theme from '../ui/theme';

const req = require.context('../', true, /.stories.(js|jsx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

const themes = [theme()];
addDecorator(withThemesProvider(themes));
