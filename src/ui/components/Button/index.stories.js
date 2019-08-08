import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import Button from './index';

storiesOf('Base', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .add('Button', () => <Button />);
