module.exports = {
  publicPath: './',
  productionSourceMap: process.env.NODE_ENV != 'production',
  devServer: {
    disableHostCheck: true,
  },
};
