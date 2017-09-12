'use strict'

/**
 * ################################################
 * Customize for build for multiple entry points  #
 * @author thanes@zanroo.com                      #
 * ################################################
 */

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

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
const chalk = require('chalk')
const fs = require('fs-extra')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('react-scripts/config/paths')
const buildsConfig = require('../configs/builds')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const printHostingInstructions = require('react-dev-utils/printHostingInstructions')
const FileSizeReporter = require('react-dev-utils/FileSizeReporter')

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild
const useYarn = fs.existsSync(paths.yarnLockFile)

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

// Override path app builded
paths.appBuild = resolveApp(buildsConfig.path)

// Require config after override path
const config = require('react-scripts/config/webpack.config.prod')

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
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    })
  )
  // Assign resolve path to configs builds.entrys
  htmls.push(resolveApp(val))
})

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024

// Warn and crash if required files are missing
if (!checkRequiredFiles([...entrys, ...htmls])) {
  process.exit(1)
}

// First, read the current file sizes in build directory.
// This lets us display how much they changed later.
measureFileSizesBeforeBuild(paths.appBuild)
  .then(previousFileSizes => {
    // Remove all content but keep the directory so that
    // if you're in it, you don't end up in Trash
    fs.emptyDirSync(paths.appBuild)
    // Merge with the public folder
    copyPublicFolder()
    // Start the webpack build
    return build(previousFileSizes)
  })
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      if (warnings.length) {
        console.log(chalk.yellow('Compiled with warnings.\n'))
        console.log(warnings.join('\n\n'))
        console.log(
          '\nSearch for the ' +
            chalk.underline(chalk.yellow('keywords')) +
            ' to learn more about each warning.'
        )
        console.log(
          'To ignore, add ' +
            chalk.cyan('// eslint-disable-next-line') +
            ' to the line before.\n'
        )
      } else {
        console.log(chalk.green('Compiled successfully.\n'))
      }

      console.log('File sizes after gzip:\n')
      printFileSizesAfterBuild(
        stats,
        previousFileSizes,
        paths.appBuild,
        WARN_AFTER_BUNDLE_GZIP_SIZE,
        WARN_AFTER_CHUNK_GZIP_SIZE
      )
      console.log()

      const appPackage = require(paths.appPackageJson)
      const publicUrl = paths.publicUrl
      const publicPath = config.output.publicPath
      const buildFolder = path.relative(process.cwd(), paths.appBuild)
      printHostingInstructions(
        appPackage,
        publicUrl,
        publicPath,
        buildFolder,
        useYarn
      )
    },
    err => {
      console.log(chalk.red('Failed to compile.\n'))
      console.log((err.message || err) + '\n')
      process.exit(1)
    }
  )

// Create the production build and print the deployment instructions.
function build(previousFileSizes) {
  console.log('Creating an optimized production build...')

  let compiler = webpack(config)
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err)
      }
      const messages = formatWebpackMessages(stats.toJson({}, true))
      if (messages.errors.length) {
        return reject(new Error(messages.errors.join('\n\n')))
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
              'Most CI servers set it automatically.\n'
          )
        )
        return reject(new Error(messages.warnings.join('\n\n')))
      }
      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      })
    })
  })
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
