import { configure } from '@storybook/react'
import requireContext from 'require-context.macro'

const req = requireContext('../imports/ui', true, /.stories.tsx$/)

console.log('being called')
function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)

// Set up imports in Storybook
import '../imports/ui/styles/_variables.scss'
import '../imports/ui/styles/_spacers.scss'
import '../node_modules/bulma_scss/bulma.scss'
import '../imports/ui/styles/index.scss'

