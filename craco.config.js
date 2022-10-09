const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@typing': path.resolve(__dirname, 'src/typing/'),
      '@libraries': path.resolve(__dirname, 'src/libraries/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
};
