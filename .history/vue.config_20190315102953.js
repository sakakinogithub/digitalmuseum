const webpack = require('webpack')
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        // eslint-disable-next-line quotes
        $: "jquery",
        // eslint-disable-next-line quotes
        jQuery: "jquery"
      })
    ]
  }
}
