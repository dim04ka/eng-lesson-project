const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@store': 'src/store',
    '@component': 'src/component',
    '@cabinet': 'src/component/Cabinet/'
  })(config)

  return config
}