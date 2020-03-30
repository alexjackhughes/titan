import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { ResolutionForm } from './ResolutionForm'

storiesOf('Resolution Form', module).add('default', () => <ResolutionForm onClick={() => action('form clicked!')} />)
