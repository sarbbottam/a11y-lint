const path = require('path');

module.exports = {
  entry: './src/engine.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'a11y-lint.js',
    library: 'A11yLintEngine',
    libraryTarget: 'umd'
  }
};
