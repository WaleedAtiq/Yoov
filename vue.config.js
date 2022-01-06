module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  publicPath: "/demo/design/yoov2",

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
}
