const withImages = require('next-images')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass');

module.exports = withCSS(withLess(withImages(withSass({
  env: {
    ANY_ENV_KEY: "ANY_ENV_VARIABLE"
  }
}))));

module.exports = {
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en'
  }
}

