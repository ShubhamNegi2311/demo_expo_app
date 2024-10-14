module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            api: './src/api',
            assets: './src/assets',
            navigation: './src/navigation',
            screen: './src/screen',
            types: './src/types',
            utilities: './src/utilities'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
