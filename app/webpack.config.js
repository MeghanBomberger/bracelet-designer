const createExpoWebpackConfig = require('@expo/webpack-config');

module.exports = (env, argv) => {
  const config = createExpoWebpackConfig(env, argv);
  // You can customize the config here if needed
  return config;
};