import { configure } from '@storybook/react'
import requireContext from 'require-context.macro'

const req = requireContext('../imports/ui', true, /.stories.tsx$/)

console.log('being called')
function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
