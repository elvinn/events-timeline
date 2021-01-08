module.exports = {
  publicPath: '/events-timeline',
  productionSourceMap: process.env.NODE_ENV != 'production',
  devServer: {
    disableHostCheck: true,
  },
};
