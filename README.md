<div align="center">
  <a href="https://ohbug.net" target="_blank">
    <img src="https://raw.githubusercontent.com/ohbug-org/blog/master/images/ohbug_logo.svg" alt="Ohbug" height="72">
  </a>
  
  <p>An open source application information monitoring platform.</p>
</div>

# OhbugExtension starter

Use this template to create your own Ohbug extension.

English | [简体中文](./README-zh_CN.md)

## Quick start

1.  **Git clone the repo.**
    ```shell
    git clone git@github.com:ohbug-org/ohbug-extension-starter.git
    ```
1.  **Installation dependencies.**
    ```shell
    cd ohbug-extension-starter/
    yarn
    ```
1.  **Start developing.**
    ```shell
    yarn dev
    ```
1.  **Build.**
    ```shell
    yarn build
    ```

## What's inside?

A quick look at the directory structure of **Ohbug Extension** project.

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

1.  **`/node_modules`**: This directory contains all of the modules of code.

1.  **`/src`**: This directory will contain the code for collecting data by Ohbug Extension. `src` is a convention for “source code”.

1.  **`/ui`**: This directory will contain a [React](https://reactjs.org/) component, the function of this component is to visualize the data collected in the `src` directory.

1.  **`.editorconfig`**: This is a file format and collection of text editor plugins for maintaining consistent coding styles between different editors and IDEs.

1.  **`.eslintrc.js`**: This is a configuration file for [Eslint](https://eslint.org/). Eslint is a tool to find and fix problems in your JavaScript code.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`LICENSE`**: This **ohbug-extension-starter** is licensed under the MIT license.

1.  **`package.json`**: This file is how npm knows which packages to install for your project. Ohbug will query the extension's `name`, `key`, ui-extension's `name`, `cdn` and other data from this file.

1.  **`README.md`**: A text file containing useful reference information about your project.

## `package.json` `ohbug` field explanation

```json
{
  "ohbug": {
    // The name of the extension
    "name": "OhbugExtensionStarter",
    // Unique identifying name of the extension
    "key": "starter",
    "ui": {
      // The name of the UI component corresponding to the extension
      "name": "OhbugExtensionUIStarter",
      // The cdn link of the corresponding UI component of the extension, the Ohbug online console will obtain the resource file according to the link provided here
      // Recommend to use jsdelivr or unpkg
      "cdn": "your_cdn"
    }
  }
}
```
