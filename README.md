# @yuzu441/prettier-config

[![npm version](https://badge.fury.io/js/@yuzu441%2Fprettier-config.svg)](https://badge.fury.io/js/@yuzu441%2Fprettier-config)

## Installation

Install `@yuzu441/prettier-config`.

```sh
yarn add -D @yuzu441/prettier-config
```

## Usage

In your `prettier.config.js`

```javascript
module.exports = require('@yuzu441/prettier-config')
```

Customizing use-case

```javascript
const base = require('@yuzu441/prettier-config')

module.exports = {
  ...base,
  semi: true,
}
```

If your use svelte

```javascript
module.exports = require('@yuzu441/prettier-config/preset/svelte-prettier')
```
