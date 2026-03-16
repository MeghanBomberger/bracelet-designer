const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Required for @shopify/react-native-skia — enables package.json exports resolution
config.resolver.unstable_enablePackageExports = true;

module.exports = config;
