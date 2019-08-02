module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '././': './',
  chainWebpack: config => {
    config.module.rules.delete('svg')
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}
