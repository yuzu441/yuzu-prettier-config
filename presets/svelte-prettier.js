const baseConfig = require('../index')

module.exports = {
  ...baseConfig,
  svelteStrictMode: true,
  svelteAllowShorthand: false,
  svelteIndentScriptAndStyle: false,
}
