'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of')

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck')

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass')

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn')

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits')

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _reactNoSsr = require('react-no-ssr')

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr)

var _reactRouterDom = require('react-router-dom')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _jsxFileName =
  '/Applications/MAMP/htdocs/tostyle/barebook/client/pages/index.js?entry'

var Helloworld = function Helloworld() {
  return _react2.default.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
      },
    },
    'Helloworld'
  )
}
var HelloCreate = function HelloCreate() {
  return _react2.default.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
      },
    },
    'project create'
  )
}
var HelloUpload = function HelloUpload() {
  return _react2.default.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
      },
    },
    'project upload'
  )
}
var HelloPreview = function HelloPreview() {
  return _react2.default.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
      },
    },
    'project preview'
  )
}

var Routes = (function(_Component) {
  ;(0, _inherits3.default)(Routes, _Component)

  function Routes() {
    ;(0, _classCallCheck3.default)(this, Routes)

    return (0, _possibleConstructorReturn3.default)(
      this,
      (Routes.__proto__ || (0, _getPrototypeOf2.default)(Routes))
        .apply(this, arguments)
    )
  }

  ;(0, _createClass3.default)(Routes, [
    {
      key: 'render',

      // render () {
      //   return (<div>HSSSSSSSSSSSSSS</div>)
      // }
      value: function render() {
        return _react2.default.createElement(
          _reactNoSsr2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17,
            },
          },
          _react2.default.createElement(
            _reactRouterDom.BrowserRouter,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18,
              },
            },
            _react2.default.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                },
              },
              _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  to: '/project/create',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                  },
                },
                'Create Proejct'
              ),
              _react2.default.createElement(_reactRouterDom.Route, {
                exact: true,
                path: '/',
                component: Helloworld,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                },
              }),
              _react2.default.createElement(_reactRouterDom.Route, {
                path: '/project/create',
                component: HelloCreate,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                },
              }),
              _react2.default.createElement(_reactRouterDom.Route, {
                path: '/project/upload',
                component: HelloUpload,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                },
              }),
              _react2.default.createElement(_reactRouterDom.Route, {
                path: '/project/preview',
                component: HelloPreview,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                },
              })
            )
          )
        )
      },
    },
  ])

  return Routes
})(_react.Component)

// const App = () => (<div>Hello world</div>)

exports.default = Routes
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTm9TU1IiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUm91dGUiLCJMaW5rIiwiSGVsbG93b3JsZCIsIkhlbGxvQ3JlYXRlIiwiSGVsbG9VcGxvYWQiLCJIZWxsb1ByZXZpZXciLCJSb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTzs7OztBQUNQLEFBQVMsQUFBaUIsQUFBUSxBQUFPOzs7Ozs7O0FBR3pDLElBQU0sYUFBYSxTQUFiLEFBQWEsYUFBQTt5QkFBTSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsR0FBQSxFQUFOLEFBQU07QUFBekI7QUFDQSxJQUFNLGNBQWMsU0FBZCxBQUFjLGNBQUE7eUJBQU0sY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEdBQUEsRUFBTixBQUFNO0FBQTFCO0FBQ0EsSUFBTSxjQUFjLFNBQWQsQUFBYyxjQUFBO3lCQUFNLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxHQUFBLEVBQU4sQUFBTTtBQUExQjtBQUNBLElBQU0sZUFBZSxTQUFmLEFBQWUsZUFBQTt5QkFBTSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsR0FBQSxFQUFOLEFBQU07QUFBM0I7O0ksQUFFTTs7Ozs7Ozs7OztTQUNKOztBQUNBO0FBQ0E7OzZCQUNTLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHNDQUFLLElBQU4sQUFBVTtvQkFBVjtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLG1DQUFBLEFBQUMsdUNBQU0sT0FBUCxNQUFhLE1BQWIsQUFBa0IsS0FBSSxXQUF0QixBQUFpQztvQkFBakM7c0JBRkYsQUFFRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx1Q0FBTSxNQUFQLEFBQVksbUJBQWtCLFdBQTlCLEFBQXlDO29CQUF6QztzQkFIRixBQUdFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHVDQUFNLE1BQVAsQUFBWSxtQkFBa0IsV0FBOUIsQUFBeUM7b0JBQXpDO3NCQUpGLEFBSUUsQUFDQTtBQURBOzBCQUNBLEFBQUMsdUNBQU0sTUFBUCxBQUFZLG9CQUFtQixXQUEvQixBQUEwQztvQkFBMUM7c0JBUk4sQUFDRSxBQUNBLEFBQ0UsQUFLRSxBQUtQO0FBTE87Ozs7OztBQWJXLEE7O0FBcUJyQixBQUVBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvdG9zdHlsZS9iYXJlYm9vay9jbGllbnQifQ==
