module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  publicPath: "/yoov2",

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
