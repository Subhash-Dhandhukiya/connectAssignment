module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
  plugins: ['react-native-reanimated/plugin',["@babel/plugin-transform-private-methods", { "loose": true }]],

};
