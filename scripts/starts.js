'use strict'

/**
 * ################################################
 * Customize for build for multiple entry points  #
 * @author thanes@zanroo.com                      #
 * ################################################
 */

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'
// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

const bundles = process.env.BUNDLE_NAME
  ? process.env.BUNDLE_NAME.split(',')
  : []

// Ensure environment variables are read.
require('react-scripts/config/env')

const path = require('path')
const fs = require('fs-extra')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('react-scripts/config/paths')
const buildsConfig = require('../configs/builds')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

// Override path app builded
paths.appBuild = resolveApp(buildsConfig.path)

// Require config after override path
const config = require('react-scripts/config/webpack.config.dev')

// Get neccessary upper default entry point
// for assign to customize config.entry
const commonEntry = config.entry.slice(0, -1)

// Find HtmlWebpackPlugin in config.plugins get and remove it
// for insert customize version to config.plugins
config.plugins = config.plugins.filter(
  plugin => !(plugin instanceof HtmlWebpackPlugin)
)

// Override output filename remove hash behide name
config.output.filename = 'static/js/[name].js'

// Enabled config.watch
config.watch = true

// Modify entry path to object and get configs
// from src/configs/builds assign to entry
config.entry = {}
// For keep entry files
let entrys = []
// For keep html files
let htmls = []
Object.keys(buildsConfig.entrys).forEach(key => {
  // If would like to bundle specific name for you want
  // It will skip other is not associated
  if (bundles.length > 0 && bundles.indexOf(key) < 0) return
  const val = buildsConfig.entrys[key]
  config.entry[key] = [...commonEntry, resolveApp(val)]
  // Assign resolve path to configs builds.entrys
  entrys.push(resolveApp(val))
})

// Assign HtmlWebpackPlugin to config.plugins
Object.keys(buildsConfig.htmls).forEach(key => {
  // If would like to bundle specific name for you want
  // It will skip other is not associated
  if (bundles.length > 0 && bundles.indexOf(key) < 0) return
  const val = buildsConfig.htmls[key]
  config.plugins.push(
    new HtmlWebpackPlugin({
      inject: true,
      chunks: [key],
      template: resolveApp(val),
      filename: `${key}.html`,
    })
  )
  // Assign resolve path to configs builds.entrys
  htmls.push(resolveApp(val))
})

// Warn and crash if required files are missing
if (!checkRequiredFiles([...entrys, ...htmls])) {
  process.exit(1)
}

// Remove all content but keep the directory so that
// if you're in it, you don't end up in Trash
fs.emptyDirSync(paths.appBuild)
// Merge with the public folder
copyPublicFolder()
// Start the webpack build
build()

// Create the development build and print the deployment instructions.
function build() {
  console.log('Creating an development build...')

  let compiler = webpack(config)
  compiler.watch(
    {
      aggregateTimeout: 300,
      poll: true,
    },
    (err, stats) => {
      console.log(
        stats.toString({
          chunks: false,
          // Add console colors
          colors: true,
        })
      )
    }
  )
}

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file =>
      htmls.indexOf(file) < 0 &&
      file.indexOf('.htm') < 0 &&
      file.indexOf('.HTM') < 0,
  })
}
