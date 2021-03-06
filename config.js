'use strict'

const path = require('path')
const appManifest = require('./app/package.json')

let config = {
  // Name of electron app
  // Will be used in production builds
  name: 'daocloud-plus',

  // Use ESLint (extends `airbnb`)
  // Further changes can be made in `.eslintrc.js`
  eslint: true,

  // webpack-dev-server port
  port: 9080,

  // electron-packager options
  // Docs: https://simulatedgreg.gitbooks.io/electron-vue/content/docs/building_your_app.html
  building: {
    arch: 'x64',
    asar: false,
    dir: path.join(__dirname, 'app'),
    icon: path.join(__dirname, 'app/icons/icon'),
    ignore: Object.keys((appManifest.devDependencies || {})).map(function (name) {
      return '/node_modules/' + name + '($|/)'
    }),
    out: path.join(__dirname, 'builds'),
    overwrite: true,
    platform: process.env.PLATFORM_TARGET || 'all',
    'app-bundle-id': 'me.thecode.daocloudplus'
  }
}

config.building.name = config.name

module.exports = config
