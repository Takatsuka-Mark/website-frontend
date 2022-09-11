module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  // devServer: {
  //   https: true,
  // },
  configureWebpack: {
    resolve: {
      fallback: {
        https: require.resolve('https-browserify'),
        http: require.resolve('stream-http'),
        url: require.resolve('url/'),
      },
    },
  },
};
