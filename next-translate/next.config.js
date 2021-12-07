const withPWA = require('next-pwa')
const nextTranslate = require('next-translate');
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  [nextTranslate()],
  [withPWA, {
    pwa: {
      dest: 'public',
      // disable: process.env.NODE_ENV === 'development',
      // register: true,
      // scope: '/app',
      // sw: 'service-worker.js',
      //...
    },
  }],
]);
