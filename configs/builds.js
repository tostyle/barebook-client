module.exports = {
  /**
   * Entrys is setting for entry points
   * [key] mean a bundle name ([name].js)
   * [value] mean a path to entry file start of key in your set
   */
  entrys: {
    index: 'src/index.js',
    foo: 'src/foo.js',
    // bar: 'src/bar.js',
    // baz: 'src/baz.js',
  },
  /**
   * Generates an `[name].html` file with the <script> and other tag
   * it will be automatic injected with static file.
   * If you don't want to use set it to empty
   * @example { htmls: {} }
   */
  htmls: {
    // index: 'public/index.html',
    // foo: 'public/foo.html',
    // bar: 'public/bar.html',
    // baz: 'public/baz.html',
  },
  // Path is a path to folder output of any your bundle files.
  path: '../public',
}
