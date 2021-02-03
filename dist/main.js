/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react.js */ \"./toy-react.js\");\n/* harmony import */ var _toy_react_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Square = /*#__PURE__*/function (_Component) {\n  _inherits(Square, _Component);\n\n  var _super = _createSuper(Square);\n\n  function Square(props) {\n    var _this;\n\n    _classCallCheck(this, Square);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      value: null\n    };\n    return _this;\n  }\n\n  _createClass(Square, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n        className: \"square\",\n        onClick: function onClick() {\n          return _this2.props.onClick();\n        }\n      }, this.props.value);\n    }\n  }]);\n\n  return Square;\n}(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Board = /*#__PURE__*/function (_Component2) {\n  _inherits(Board, _Component2);\n\n  var _super2 = _createSuper(Board);\n\n  function Board() {\n    _classCallCheck(this, Board);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(Board, [{\n    key: \"renderSquare\",\n    value: function renderSquare(i) {\n      var _this3 = this;\n\n      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Square, {\n        value: this.props.squares[i],\n        onClick: function onClick() {\n          return _this3.props.onClick(i);\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));\n    }\n  }]);\n\n  return Board;\n}(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Game = /*#__PURE__*/function (_Component3) {\n  _inherits(Game, _Component3);\n\n  var _super3 = _createSuper(Game);\n\n  function Game(props) {\n    var _this4;\n\n    _classCallCheck(this, Game);\n\n    _this4 = _super3.call(this, props);\n    _this4.state = {\n      history: [{\n        squares: Array(9).fill(null)\n      }],\n      stepNumber: 0,\n      xIsNext: true\n    };\n    return _this4;\n  }\n\n  _createClass(Game, [{\n    key: \"handleClick\",\n    value: function handleClick(i) {\n      var history = this.state.history.slice(0, this.state.stepNumber + 1);\n      ;\n      var current = history[history.length - 1];\n      var squares = current.squares.slice();\n\n      if (calculateWinner(squares) || squares[i]) {\n        return;\n      }\n\n      squares[i] = this.state.xIsNext ? \"X\" : \"O\";\n      this.setState({\n        history: history.concat([{\n          squares: squares\n        }]),\n        stepNumber: history.length,\n        xIsNext: !this.state.xIsNext\n      });\n    }\n  }, {\n    key: \"jumpTo\",\n    value: function jumpTo(step) {\n      this.setState({\n        stepNumber: step,\n        xIsNext: step % 2 === 0\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this5 = this;\n\n      var history = this.state.history;\n      var current = history[this.state.stepNumber];\n      var winner = calculateWinner(current.squares);\n      var moves = history.map(function (step, move) {\n        var desc = move ? \"Go to move #\" + move : \"Go to game start\";\n        return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"li\", null, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n          key: \"move-\".concat(move),\n          onClick: function onClick() {\n            return _this5.jumpTo(move);\n          }\n        }, desc));\n      });\n      var status;\n\n      if (winner) {\n        status = \"Winner: \" + winner;\n      } else {\n        status = \"Next player: \" + (this.state.xIsNext ? \"X\" : \"O\");\n      }\n\n      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"game\"\n      }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"game-board\"\n      }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Board, {\n        squares: current.squares,\n        onClick: function onClick(i) {\n          _this5.handleClick(i);\n        }\n      })), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"game-info\"\n      }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, status), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"ol\", null, moves)));\n    }\n  }]);\n\n  return Game;\n}(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]); // render(<Game />, document.getElementById(\"root\"));\n\n\nvar game = Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Game, null);\nconsole.log(game);\n\nfunction calculateWinner(squares) {\n  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];\n\n  for (var i = 0; i < lines.length; i++) {\n    var _lines$i = _slicedToArray(lines[i], 3),\n        a = _lines$i[0],\n        b = _lines$i[1],\n        c = _lines$i[2];\n\n    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\n      return squares[a];\n    }\n  }\n\n  return null;\n}\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./toy-react.js":
/*!**********************!*\
  !*** ./toy-react.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/denten/Desktop/ttt-content/code/react/tt-toy-react/toy-react.js: Unexpected token, expected \\\",\\\" (80:60)\\n\\n\\u001b[0m \\u001b[90m 78 | \\u001b[39m            type\\u001b[33m:\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mtype\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 79 | \\u001b[39m            props\\u001b[33m:\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mprops\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 80 | \\u001b[39m            children\\u001b[33m:\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mchildren\\u001b[33m.\\u001b[39mmap(child \\u001b[33m=>\\u001b[39m child\\u001b[33m.\\u001b[39mvdom)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                                                            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 81 | \\u001b[39m        }\\u001b[0m\\n\\u001b[0m \\u001b[90m 82 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m \\u001b[90m 83 | \\u001b[39m    \\u001b[0m\\n    at Object._raise (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:748:17)\\n    at Object.raiseWithData (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:741:17)\\n    at Object.raise (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:735:17)\\n    at Object.unexpected (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:9101:16)\\n    at Object.expect (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:9087:28)\\n    at Object.parseObjectLike (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:10923:14)\\n    at Object.parseExprAtom (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:10491:23)\\n    at Object.parseExprAtom (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:4763:20)\\n    at Object.parseExprSubscripts (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:10150:23)\\n    at Object.parseUpdate (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:10130:21)\\n    at Object.parseMaybeUnary (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:10119:17)\\n    at Object.parseExprOps (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:9989:23)\\n    at Object.parseMaybeConditional (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:9963:23)\\n    at Object.parseMaybeAssign (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:9926:21)\\n    at Object.parseExpressionBase (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:9871:23)\\n    at /Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:9865:39\\n    at Object.allowInAnd (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:11541:16)\\n    at Object.parseExpression (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:9865:17)\\n    at Object.parseReturnStatement (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:12045:28)\\n    at Object.parseStatementContent (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:11724:21)\\n    at Object.parseStatement (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:11676:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:12258:25)\\n    at Object.parseBlockBody (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:12249:10)\\n    at Object.parseBlock (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:12233:10)\\n    at Object.parseFunctionBody (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:11221:24)\\n    at Object.parseFunctionBodyAndFinish (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:11205:10)\\n    at Object.parseMethod (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:11155:10)\\n    at Object.pushClassMethod (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:12701:30)\\n    at Object.parseClassMemberWithIsStatic (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:12628:14)\\n    at Object.parseClassMember (/Users/denten/Desktop/ttt-content/code/react/tt-toy-react/node_modules/@babel/parser/lib/index.js:12532:10)\");\n\n//# sourceURL=webpack:///./toy-react.js?");

/***/ })

/******/ });