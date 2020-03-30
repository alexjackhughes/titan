import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { ResolutionItem } from './ResolutionItem'

storiesOf('Resolution Item', module).add('default', () => (
  <ResolutionItem
    _id="1"
    name="Learn spanish"
    completed={false}
    onClick={() => action('clciked to complete')}
    onDelete={() => action('clicked to delete!')}
  />
))
