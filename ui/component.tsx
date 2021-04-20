import { createExtensionUI } from '@ohbug/core'

export default createExtensionUI({
  name: 'OhbugExtensionUIName',
  key: 'key',
  components: {
    event: (React) =>
      function EventComponent({ event }) {
        const [count] = React.useState()
        return <div>{count}</div>
      },
  },
})
