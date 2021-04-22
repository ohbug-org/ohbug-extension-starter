<div align="center">
  <a href="https://ohbug.net" target="_blank">
    <img src="https://raw.githubusercontent.com/ohbug-org/blog/master/images/ohbug_logo.svg" alt="Ohbug" height="72">
  </a>
  
  <p>开源应用信息监控平台</p>
</div>

# OhbugExtension starter

使用这个模板仓库创建属于你的 Ohbug 扩展。

[English](./README.md) | 简体中文

## 开始

1.  **Git clone the repo.**
    ```shell
    git clone git@github.com:ohbug-org/ohbug-extension-starter.git
    ```
1.  **安装依赖**
    ```shell
    cd ohbug-extension-starter/
    yarn
    ```
1.  **开始调试**
    ```shell
    yarn dev
    ```
1.  **打包**
    ```shell
    yarn build
    ```

## 目录结构

快速浏览 **Ohbug Extension** 项目的目录结构。

    .
    ├── node_modules
    ├── src
    ├── ui
    ├── .editorconfig
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── rollup.config.js
    ├── rollup.config.ui.js
    └── tsconfig.json

1.  **`/node_modules`**: 该目录包含所有代码依赖模块。

1.  **`/src`**: 该目录将包含通过 **Ohbug Extension** 收集数据的代码。src 是“source code”的约定。

1.  **`/ui`**: 该目录将包含一个 [React](https://reactjs.org/) 组件，该组件的作用是将 `src` 目录中收集的数据进行可视化展示。

1.  **`.editorconfig`**: 这是文件格式和文本编辑器插件的集合，用于在不同的编辑器和 IDE 之间保持一致的编码样式。

1.  **`.eslintrc.js`**: 这是 [Eslint](https://eslint.org/) 的配置文件。Eslint 可用于查找和修复 JavaScript 代码中的问题。

1.  **`.gitignore`**: 这个文件告诉 git 不跟踪 / 不维护哪个版本历史的文件。

1.  **`.prettierrc`**: 这是 [Prettier](https://prettier.io/) 的配置文件。Prettier 是一种帮助保持代码格式一致的工具。

1.  **`LICENSE`**: **ohbug-extension-starter** 根据 MIT 许可授权。

1.  **`package.json`**: 此文件告知 npm 为您的项目安装哪些软件包。Ohbug 将从该文件中查询扩展的 `name`、`key`，ui 扩展的 `name`、`cdn` 和其他数据。

1.  **`README.md`**: 此文件包含与本项目有关的说明文档、参考信息等。

## `package.json` `ohbug` 字段解释

```json
{
  "ohbug": {
    // 扩展在程序内的名称
    "name": "OhbugExtensionStarter",
    // 扩展的唯一标识名称
    "key": "starter",
    "ui": {
      // 扩展所对应的 UI 组件的名称
      "name": "OhbugExtensionUIStarter",
      // 扩展所对应的 UI 组件的 cdn 链接，Ohbug 线上控制台将根据此处提供的链接获取资源文件
      // 推荐使用 jsdelivr 或 unpkg
      "cdn": "your_cdn"
    }
  }
}
```
