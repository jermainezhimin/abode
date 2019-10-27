const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/index.jsx'),
  templatePath: path.resolve(__dirname, '../', 'src/template.html'),
  faviconPath: path.resolve(__dirname, '../', 'src/images/abode.svg'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
