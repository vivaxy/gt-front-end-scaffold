/**
 * @since 2016-11-18 13:56
 * @author vivaxy
 */

if (!global._babelPolyfill) {
    require('babel-polyfill');
}
require('babel-register');
module.exports = require('./gt/index');
