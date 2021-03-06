// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const webpack = require('webpack')

module.exports = {
  plugins: [
    // your custom plugins
    new webpack.DefinePlugin({
      AUTH_BACKEND_SERVER: JSON.stringify('https://auth.localhost'),
      CLIENT_ID: JSON.stringify('dukfaar-ui-app'),
      CLIENT_SECRET: JSON.stringify('i am a ninja unicorn')
  })
  ],
  module: {
    rules: [
      
      // add your custom rules.
    ]
  }
};
