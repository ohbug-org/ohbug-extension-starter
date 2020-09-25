import React from 'react'
import { createExtensionUI } from '@ohbug/core'
import type { OhbugExtensionUIComponentProps } from '@ohbug/types'

interface ComponentProps extends OhbugExtensionUIComponentProps {}
const Component: React.FC<ComponentProps> = ({ event }) => {
  return <div>visualize the data</div>
}

export default createExtensionUI({
  name: 'OhbugExtensionUIName',
  key: 'key',
  components: {
    event: Component,
  },
})
