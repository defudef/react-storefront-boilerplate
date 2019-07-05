const { prod } = require('react-storefront/webpack/client')
const path = require('path')

module.exports = prod(path.join(__dirname, '..', '..'), {
  workboxConfig: require('./workbox.config'),
  allowPrefetchThrottling: true,
  entries: {
    header: './proxy/hydrateHeader'
  }
})
