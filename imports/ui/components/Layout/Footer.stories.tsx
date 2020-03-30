import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

import { Footer } from './Footer'

// This is an example storybook bile
storiesOf('Layout', module)
  .addDecorator(StoryRouter())
  .add('Footer', () => <Footer />)
