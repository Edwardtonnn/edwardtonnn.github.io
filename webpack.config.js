const path = require('path');

module.exports = {
  // Entry point of your application
  entry: './assets/js/script.js',

  // Output configuration of your bundle
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // Bundled files in 'dist' directory
  },

  // Mode can be 'development' or 'production'
  mode: 'development',

  // Configuration for a development server
  devServer: {
    static: {
      directory: path.join(__dirname), // Serve files from root directory
    },
    port: 9000,
  },

  // Configuration for webpack plugins, loaders, etc.
  module: {
    rules: [
      // Rules for loaders go here
    ],
  },

  // Source maps for debugging
  devtool: 'inline-source-map',
};
