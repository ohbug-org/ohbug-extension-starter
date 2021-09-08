import { createExtensionUI } from '@ohbug/core'

export default createExtensionUI({
  name: 'OhbugExtensionUIName',
  key: 'your_key',
  component: (event, root) => {
    // eslint-disable-next-line no-console
    console.log({ event, root })
  },
})
