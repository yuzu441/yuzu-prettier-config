# @yuzu441/prettier-config

[![npm version](https://badge.fury.io/js/@yuzu441%2Fprettier-config.svg)](https://badge.fury.io/js/@yuzu441%2Fprettier-config)

## Installation

Install `@yuzu441/prettier-config` and `prettier`.

```sh
npm i -D @yuzu441/prettier-config prettier 

# or

yarn add -D @yuzu441/prettier-config prettier
```

## Usage

In your `package.json`

```json
{
  "prettier": "@yuzu441/prettier-config",
}
```

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

If your use svelte, please install `prettier-plugin-svelte` additionally and configure the following.

```javascript
module.exports = require('@yuzu441/prettier-config/preset/svelte-prettier')
```
