import { createExtension } from '@ohbug/core'

/**
 * Create an extension that collects data. You can get more detailed documentation here.
 * https://ohbug.net/docs/library/CustomExtension
 */
const extension = createExtension({
  name: 'OhbugExtensionName',
  init: () => {
    // You can initialize the data collection program here
    // 你可以在此处初始化数据收集程序
  },
  created: (event, client) => {
    // If you need to modify the `Event` before reporting it or prevent it from being reported, `created` provides the ability to do these things.
    // 如果你需要在上报前对 `Event` 进行修改亦或是阻止上报，`created` 提供了做到这些事情的能力。
    // If you need to prevent the report from being reported, just return `false` in `created`.
    // 如果需要阻止上报，在 `created` 内返回 `false` 即可。
    return event
  },
  notified: (event, client) => {
    // If you want to do something after reporting
    // 如果你想上报后做一些事情
  },
})

export default extension
