const webpack = require('webpack')
const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  },
  devServer: {
    before (app) {
      app.get('/home/api/seller', function (req, res) {
        res.json({
          errno: 0,
          data: seller
        })
      })
      app.get('/home/api/goods', function (req, res) {
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/home/api/ratings', function (req, res) {
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  }
}
