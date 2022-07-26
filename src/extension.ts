import type { OhbugExtension } from '@ohbug/types'

/**
 * Create an extension that collects data. You can get more detailed documentation here.
 * https://ohbug.net/guide/extension
 */
const extension: OhbugExtension = {
  name: 'OhbugExtensionName',
  onSetup: () => {
    // You can initialize the data collection program here
    // 你可以在此处初始化数据收集程序
  },
  onEvent: (event, client) => {
    // If you need to modify the `Event` before reporting it or prevent it from being reported, `created` provides the ability to do these things.
    // 如果你需要在上报前对 `Event` 进行修改亦或是阻止上报，`created` 提供了做到这些事情的能力。
    // If you need to prevent the report from being reported, just return `false` in `created`.
    // 如果需要阻止上报，在 `created` 内返回 `false` 即可。

    // eslint-disable-next-line no-console
    console.log({ event, client })
    return event
  },
  onNotify: (event, client) => {
    // If you want to do something after reporting
    // 如果你想上报后做一些事情

    // eslint-disable-next-line no-console
    console.log({ event, client })
  },
}

export default extension
