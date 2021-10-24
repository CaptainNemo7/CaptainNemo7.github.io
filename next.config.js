const withImages = require('next-images');

module.exports = withImages(
  {
    fileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'mp4'],
    webpack(config, options) {
      return config;
    },
  },
  { assetPrefix: '/devsite/' }
);
