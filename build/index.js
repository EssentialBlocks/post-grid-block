(window["webpackJsonp_post_grid_block"] = window["webpackJsonp_post_grid_block"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_post_grid_block"] = window["webpackJsonp_post_grid_block"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/dist/stylis.mjs");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js");





var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (Object(stylis__WEBPACK_IMPORTED_MODULE_1__["token"])(character)) {
      case 0:
        // &\f
        if (character === 38 && Object(stylis__WEBPACK_IMPORTED_MODULE_1__["peek"])() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += Object(stylis__WEBPACK_IMPORTED_MODULE_1__["identifier"])(stylis__WEBPACK_IMPORTED_MODULE_1__["position"] - 1);
        break;

      case 2:
        parsed[index] += Object(stylis__WEBPACK_IMPORTED_MODULE_1__["delimit"])(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = Object(stylis__WEBPACK_IMPORTED_MODULE_1__["peek"])() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += Object(stylis__WEBPACK_IMPORTED_MODULE_1__["from"])(character);
    }
  } while (character = Object(stylis__WEBPACK_IMPORTED_MODULE_1__["next"])());

  return parsed;
};

var getRules = function getRules(value, points) {
  return Object(stylis__WEBPACK_IMPORTED_MODULE_1__["dealloc"])(toRules(Object(stylis__WEBPACK_IMPORTED_MODULE_1__["alloc"])(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
  !element.length) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule') return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;

      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

var defaultStylisPlugins = [stylis__WEBPACK_IMPORTED_MODULE_1__["prefixer"]];

var createCache = function createCache(options) {
  var key = options.key;

  if ( true && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (true) {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  {
    var currentSheet;
    var finalizingPlugins = [stylis__WEBPACK_IMPORTED_MODULE_1__["stringify"],  true ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== stylis__WEBPACK_IMPORTED_MODULE_1__["COMMENT"]) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : undefined];
    var serializer = Object(stylis__WEBPACK_IMPORTED_MODULE_1__["middleware"])(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return Object(stylis__WEBPACK_IMPORTED_MODULE_1__["serialize"])(Object(stylis__WEBPACK_IMPORTED_MODULE_1__["compile"])(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if ( true && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js ***!
  \**********************************************************************************/
/*! exports provided: C, E, T, _, a, b, c, h, u, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Emotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return __unsafe_useEmotionCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEmotionProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return withEmotionCache; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var _isolated_hoist_non_react_statics_do_not_use_this_in_your_code_dist_emotion_react_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js */ "./node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");








var hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])({
  key: 'css'
}) : null);

if (true) {
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(EmotionCacheContext);
};

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
    // the cache will never be null in the browser
    var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

if (true) {
  ThemeContext.displayName = 'EmotionThemeContext';
}

var useTheme = function useTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme))) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if ( true && (theme == null || typeof theme !== 'object' || Array.isArray(theme))) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */Object(_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (outerTheme) {
  return Object(_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider = function ThemeProvider(props) {
  var theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeContext);
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return Object(_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_dist_emotion_react_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["default"])(WithTheme, Component);
}

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z0-9$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z0-9$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  return newProps;
};
var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_5__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_6__["serializeStyles"])(registeredStyles, undefined, Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeContext));

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_6__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_5__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(type, newProps);

  return ele;
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}




/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: CacheProvider, ThemeContext, ThemeProvider, __unsafe_useEmotionCache, useTheme, withEmotionCache, withTheme, ClassNames, Global, createElement, css, jsx, keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emotion-element-99289b21.browser.esm.js */ "./node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return _emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return _emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["T"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__unsafe_useEmotionCache", function() { return _emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return _emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return _emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return _emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _isolated_hoist_non_react_statics_do_not_use_this_in_your_code_dist_emotion_react_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js */ "./node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js");












var pkg = {
	name: "@emotion/react",
	version: "11.4.1",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"isolated-hoist-non-react-statics-do-not-use-this-in-your-code",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "mitchellhamilton <mitchell@mitchellhamilton.me>",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.13.10",
		"@emotion/cache": "^11.4.0",
		"@emotion/serialize": "^1.0.2",
		"@emotion/sheet": "^1.0.2",
		"@emotion/utils": "^1.0.0",
		"@emotion/weak-memoize": "^0.2.5",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		"@babel/core": "^7.0.0",
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@babel/core": {
			optional: true
		},
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@babel/core": "^7.13.10",
		"@emotion/css": "11.1.3",
		"@emotion/css-prettifier": "1.0.0",
		"@emotion/server": "11.4.0",
		"@emotion/styled": "11.3.0",
		"@types/react": "^16.9.11",
		dtslint: "^0.3.0",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./isolated-hoist-non-react-statics-do-not-use-this-in-your-code.js"
		],
		umdName: "emotionReact"
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["h"].call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"].apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["E"];
  createElementArgArray[1] = Object(_emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["c"])(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */Object(_emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["w"])(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_8__["serializeStyles"])([styles], undefined, Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["T"]));
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    var key = cache.key + "-global";
    var sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_9__["StyleSheet"]({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_7__["insertStyles"])(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (true) {
  Global.displayName = 'EmotionGlobal';
}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_8__["serializeStyles"])(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if ( true && arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_7__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = /* #__PURE__ */Object(_emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["w"])(function (props, cache) {
  var hasRendered = false;

  var css = function css() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_8__["serializeStyles"])(args, cache.registered);

    {
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_7__["insertStyles"])(cache, serialized, false);
    }

    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_emotion_element_99289b21_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["T"])
  };
  var ele = props.children(content);
  hasRendered = true;

  return ele;
});

if (true) {
  ClassNames.displayName = 'EmotionClassNames';
}

if (true) {
  var isBrowser = "object" !== 'undefined'; // #1727 for some reason Jest evaluates modules twice if some consuming module gets mocked with jest.mock

  var isJest = typeof jest !== 'undefined';

  if (isBrowser && !isJest) {
    var globalContext = isBrowser ? window : global;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var hoistNonReactStatics = (function (targetComponent, sourceComponent) {
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(targetComponent, sourceComponent);
});

/* harmony default export */ __webpack_exports__["default"] = (hoistNonReactStatics);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (true) {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if ( true && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-select/dist/Select-de8d601b.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-select/dist/Select-de8d601b.esm.js ***!
  \***************************************************************/
/*! exports provided: S, a, b, c, d, g, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getOptionLabel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getOptionValue$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mergeStyles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-fd4f5d85.esm.js */ "./node_modules/react-select/dist/index-fd4f5d85.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");











function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref =  false ? undefined : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

var A11yText = function A11yText(props) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: _ref
  }, props));
};

var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable,
        isMulti = props.isMulti,
        isDisabled = props.isDisabled,
        tabSelectsValue = props.tabSelectsValue,
        context = props.context;

    switch (context) {
      case 'menu':
        return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu").concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");

      case 'input':
        return "".concat(props['aria-label'] || 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

      case 'value':
        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';

      default:
        return '';
    }
  },
  onChange: function onChange(props) {
    var action = props.action,
        _props$label = props.label,
        label = _props$label === void 0 ? '' : _props$label,
        labels = props.labels,
        isDisabled = props.isDisabled;

    switch (action) {
      case 'deselect-option':
      case 'pop-value':
      case 'remove-value':
        return "option ".concat(label, ", deselected.");

      case 'clear':
        return 'All selected options have been cleared.';

      case 'initial-input-focus':
        return "option".concat(labels.length > 1 ? 's' : '', " ").concat(labels.join(','), ", selected.");

      case 'select-option':
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");

      default:
        return '';
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context,
        focused = props.focused,
        options = props.options,
        _props$label2 = props.label,
        label = _props$label2 === void 0 ? '' : _props$label2,
        selectValue = props.selectValue,
        isDisabled = props.isDisabled,
        isSelected = props.isSelected;

    var getArrayIndex = function getArrayIndex(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : '';
    };

    if (context === 'value' && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }

    if (context === 'menu') {
      var disabled = isDisabled ? ' disabled' : '';
      var status = "".concat(isSelected ? 'selected' : 'focused').concat(disabled);
      return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options, focused), ".");
    }

    return '';
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue,
        resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
  }
};

var LiveRegion = function LiveRegion(props) {
  var ariaSelection = props.ariaSelection,
      focusedOption = props.focusedOption,
      focusedValue = props.focusedValue,
      focusableOptions = props.focusableOptions,
      isFocused = props.isFocused,
      selectValue = props.selectValue,
      selectProps = props.selectProps,
      id = props.id;
  var ariaLiveMessages = selectProps.ariaLiveMessages,
      getOptionLabel = selectProps.getOptionLabel,
      inputValue = selectProps.inputValue,
      isMulti = selectProps.isMulti,
      isOptionDisabled = selectProps.isOptionDisabled,
      isSearchable = selectProps.isSearchable,
      menuIsOpen = selectProps.menuIsOpen,
      options = selectProps.options,
      screenReaderStatus = selectProps.screenReaderStatus,
      tabSelectsValue = selectProps.tabSelectsValue;
  var ariaLabel = selectProps['aria-label'];
  var ariaLive = selectProps['aria-live']; // Update aria live message configuration when prop changes

  var messages = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    return Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]); // Update aria live selected option when prop changes

  var ariaSelected = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    var message = '';

    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option,
          selectedOptions = ariaSelection.options,
          removedValue = ariaSelection.removedValue,
          removedValues = ariaSelection.removedValues,
          value = ariaSelection.value; // select-option when !isMulti does not return option so we assume selected option is value

      var asOption = function asOption(val) {
        return !Array.isArray(val) ? val : null;
      }; // If there is just one item from the action then get its label


      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel(selected) : ''; // If there are multiple items from the action then return an array of labels

      var multiSelected = selectedOptions || removedValues || undefined;
      var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];

      var onChangeProps = Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: selected && isOptionDisabled(selected, selectValue),
        label: label,
        labels: labels
      }, ariaSelection);

      message = messages.onChange(onChangeProps);
    }

    return message;
  }, [ariaSelection, messages, isOptionDisabled, selectValue, getOptionLabel]);
  var ariaFocused = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    var focusMsg = '';
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));

    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused: focused,
        label: getOptionLabel(focused),
        isDisabled: isOptionDisabled(focused, selectValue),
        isSelected: isSelected,
        options: options,
        context: focused === focusedOption ? 'menu' : 'value',
        selectValue: selectValue
      };
      focusMsg = messages.onFocus(onFocusProps);
    }

    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, options, selectValue]);
  var ariaResults = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    var resultsMsg = '';

    if (menuIsOpen && options.length && messages.onFilter) {
      var resultsMessage = screenReaderStatus({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue: inputValue,
        resultsMessage: resultsMessage
      });
    }

    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus]);
  var ariaGuidance = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    var guidanceMsg = '';

    if (messages.guidance) {
      var context = focusedValue ? 'value' : menuIsOpen ? 'menu' : 'input';
      guidanceMsg = messages.guidance({
        'aria-label': ariaLabel,
        context: context,
        isDisabled: focusedOption && isOptionDisabled(focusedOption, selectValue),
        isMulti: isMulti,
        isSearchable: isSearchable,
        tabSelectsValue: tabSelectsValue
      });
    }

    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue]);
  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
  var ScreenReaderText = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", {
    id: "aria-selection"
  }, ariaSelected), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", {
    id: "aria-context"
  }, ariaContext));
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus';
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(A11yText, {
    id: id
  }, isInitialFocus && ScreenReaderText), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(A11yText, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, isFocused && !isInitialFocus && ScreenReaderText));
};

var diacritics = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
  return d.letters;
}).join('') + ']', 'g');
var diacriticToBase = {};

for (var i = 0; i < diacritics.length; i++) {
  var diacritic = diacritics[i];

  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}

var stripDiacritics = function stripDiacritics(str) {
  return str.replace(anyDiacritic, function (match) {
    return diacriticToBase[match];
  });
};

var memoizedStripDiacriticsForInput = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(stripDiacritics);

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    // eslint-disable-next-line no-underscore-dangle
    if (option.data.__isNew__) return true;

    var _ignoreCase$ignoreAcc = Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

var _excluded = ["innerRef"];
function DummyInput(_ref) {
  var innerRef = _ref.innerRef,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref, _excluded);

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: innerRef
  }, props, {
    css: /*#__PURE__*/Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["css"])({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: 'transparent',
      fontSize: 'inherit',
      gridArea: '1 / 1 / 2 / 3',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(.01)'
    },  false ? undefined : ";label:DummyInput;",  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNNIiwiZmlsZSI6IkR1bW15SW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbm5lclJlZixcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSAmIHtcbiAgcmVhZG9ubHkgaW5uZXJSZWY6IFJlZjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgICBjYXJldENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICB3aWR0aDogMSxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgICBsZWZ0OiAtMTAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjAxKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */")
  }));
}

var cancelScroll = function cancelScroll(event) {
  event.preventDefault();
  event.stopPropagation();
};

function useScrollCapture(_ref) {
  var isEnabled = _ref.isEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
  var isBottom = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(false);
  var isTop = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(false);
  var touchStart = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(0);
  var scrollTarget = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var handleEventDelta = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (event, delta) {
    if (scrollTarget.current === null) return;
    var _scrollTarget$current = scrollTarget.current,
        scrollTop = _scrollTarget$current.scrollTop,
        scrollHeight = _scrollTarget$current.scrollHeight,
        clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false; // reset bottom/top flags

    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave) onBottomLeave(event);
      isBottom.current = false;
    }

    if (isDeltaPositive && isTop.current) {
      if (onTopLeave) onTopLeave(event);
      isTop.current = false;
    } // bottom limit


    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }

      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true; // top limit
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }

      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    } // cancel scroll


    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (event) {
    // set touch start so we can calculate touchmove delta
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (el) {
    // bail early if no element is available to attach to
    if (!el) return;
    var notPassive = _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["s"] ? {
      passive: false
    } : false;
    el.addEventListener('wheel', onWheel, notPassive);
    el.addEventListener('touchstart', onTouchStart, notPassive);
    el.addEventListener('touchmove', onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (el) {
    // bail early if no element is available to detach from
    if (!el) return;
    el.removeEventListener('wheel', onWheel, false);
    el.removeEventListener('touchstart', onTouchStart, false);
    el.removeEventListener('touchmove', onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    startListening(element);
    return function () {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function (element) {
    scrollTarget.current = element;
  };
}

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}

function allowTouchMove(e) {
  e.stopPropagation();
}

function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface


function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref) {
  var isEnabled = _ref.isEnabled,
      _ref$accountForScroll = _ref.accountForScrollbars,
      accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])({});
  var scrollTarget = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var addScrollLock = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;

    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    } // apply the lock styles and padding if this is the first scroll lock


    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });

      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    } // account for touch devices


    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, listenerOptions); // Allow scroll on provided target

      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    } // increment active scroll locks


    activeScrollLocks += 1;
  }, [accountForScrollbars]);
  var removeScrollLock = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style; // safely decrement active scroll locks

    activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = originalStyles.current[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    } // remove touch listeners


    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, listenerOptions);

      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }
  }, [accountForScrollbars]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function () {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function (element) {
    scrollTarget.current = element;
  };
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var blurSelectInput = function blurSelectInput() {
  return document.activeElement && document.activeElement.blur();
};

var _ref2 =  false ? undefined : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9ICgpID0+XG4gIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmJsdXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsTWFuYWdlcih7XG4gIGNoaWxkcmVuLFxuICBsb2NrRW5hYmxlZCxcbiAgY2FwdHVyZUVuYWJsZWQgPSB0cnVlLFxuICBvbkJvdHRvbUFycml2ZSxcbiAgb25Cb3R0b21MZWF2ZSxcbiAgb25Ub3BBcnJpdmUsXG4gIG9uVG9wTGVhdmUsXG59OiBQcm9wcykge1xuICBjb25zdCBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0ID0gdXNlU2Nyb2xsQ2FwdHVyZSh7XG4gICAgaXNFbmFibGVkOiBjYXB0dXJlRW5hYmxlZCxcbiAgICBvbkJvdHRvbUFycml2ZSxcbiAgICBvbkJvdHRvbUxlYXZlLFxuICAgIG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmUsXG4gIH0pO1xuICBjb25zdCBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7IGlzRW5hYmxlZDogbG9ja0VuYWJsZWQgfSk7XG5cbiAgY29uc3QgdGFyZ2V0UmVmOiBSZWZDYWxsYmFjazxIVE1MRWxlbWVudD4gPSAoZWxlbWVudCkgPT4ge1xuICAgIHNldFNjcm9sbENhcHR1cmVUYXJnZXQoZWxlbWVudCk7XG4gICAgc2V0U2Nyb2xsTG9ja1RhcmdldChlbGVtZW50KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtsb2NrRW5hYmxlZCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtibHVyU2VsZWN0SW5wdXR9XG4gICAgICAgICAgY3NzPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCBsZWZ0OiAwLCBib3R0b206IDAsIHJpZ2h0OiAwLCB0b3A6IDAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7Y2hpbGRyZW4odGFyZ2V0UmVmKX1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function ScrollManager(_ref) {
  var children = _ref.children,
      lockEnabled = _ref.lockEnabled,
      _ref$captureEnabled = _ref.captureEnabled,
      captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive: onBottomArrive,
    onBottomLeave: onBottomLeave,
    onTopArrive: onTopArrive,
    onTopLeave: onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });

  var targetRef = function targetRef(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, lockEnabled && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    onClick: blurSelectInput,
    css: _ref2
  }), children(targetRef));
}

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

var defaultStyles = {
  clearIndicator: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["b"],
  container: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["d"],
  control: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["e"],
  dropdownIndicator: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["f"],
  group: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["g"],
  groupHeading: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["h"],
  indicatorsContainer: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["i"],
  indicatorSeparator: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["j"],
  input: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["k"],
  loadingIndicator: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["l"],
  loadingMessage: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["m"],
  menu: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["n"],
  menuList: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["o"],
  menuPortal: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["p"],
  multiValue: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["q"],
  multiValueLabel: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["r"],
  multiValueRemove: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["t"],
  noOptionsMessage: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["u"],
  option: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["v"],
  placeholder: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["w"],
  singleValue: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["x"],
  valueContainer: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["y"]
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, source); // massage in target styles


  Object.keys(target).forEach(function (keyAsString) {
    var key = keyAsString;

    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

var defaultProps = {
  'aria-live': 'polite',
  backspaceRemovesValue: true,
  blurInputOnSelect: Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["z"])(),
  captureMenuScroll: !Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["z"])(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["A"])(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: true
};

function toCategorizedOption(props, option, selectValue, index) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);

  var isSelected = _isOptionSelected(props, option, selectValue);

  var label = getOptionLabel(props, option);
  var value = getOptionValue(props, option);
  return {
    type: 'option',
    data: option,
    isDisabled: isDisabled,
    isSelected: isSelected,
    label: label,
    value: value,
    index: index
  };
}

function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function (groupOrOption, groupOrOptionIndex) {
    if ('options' in groupOrOption) {
      var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function (categorizedOption) {
        return isFocusable(props, categorizedOption);
      });
      return categorizedOptions.length > 0 ? {
        type: 'group',
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : undefined;
    }

    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
  }).filter(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["G"]);
}

function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === 'group') {
      optionsAccumulator.push.apply(optionsAccumulator, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(categorizedOption.options.map(function (option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }

    return optionsAccumulator;
  }, []);
}

function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}

function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue,
      inputValue = _props$inputValue === void 0 ? '' : _props$inputValue;
  var data = categorizedOption.data,
      isSelected = categorizedOption.isSelected,
      label = categorizedOption.label,
      value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label: label,
    value: value,
    data: data
  }, inputValue);
}

function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue,
      lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

    if (nextFocusedIndex > -1) {
      // the focused value is still in the selectValue, return it
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      // the focusedValue is not present in the next selectValue array by
      // reference, so return the new value at the same index
      return nextSelectValue[lastFocusedIndex];
    }
  }

  return null;
}

function getNextFocusedOption(state, options) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
}

var getOptionLabel = function getOptionLabel(props, data) {
  return props.getOptionLabel(data);
};

var getOptionValue = function getOptionValue(props, data) {
  return props.getOptionValue(data);
};

function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
}

function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1) return true;

  if (typeof props.isOptionSelected === 'function') {
    return props.isOptionSelected(option, selectValue);
  }

  var candidate = getOptionValue(props, option);
  return selectValue.some(function (i) {
    return getOptionValue(props, i) === candidate;
  });
}

function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}

var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
  var hideSelectedOptions = props.hideSelectedOptions,
      isMulti = props.isMulti;
  if (hideSelectedOptions === undefined) return isMulti;
  return hideSelectedOptions;
};

var instanceId = 1;

var Select = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Select, _Component);

  var _super = Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["_"])(Select);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Select);

    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      prevWasFocused: false,
      inputIsHiddenAfterUpdate: undefined,
      prevProps: undefined
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;

    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };

    _this.focusedOptionRef = null;

    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };

    _this.menuListRef = null;

    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.inputRef = null;

    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };

    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;

    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      actionMeta.name = name;

      _this.ariaOnChange(newValue, actionMeta);

      onChange(newValue, actionMeta);
    };

    _this.setValue = function (newValue, action, option) {
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.setState({
        clearFocusValueOnUpdate: true
      });

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };

    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti,
          name = _this$props3.name;
      var selectValue = _this.state.selectValue;

      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);

      var isDisabled = _this.isOptionDisabled(newValue, selectValue);

      if (deselected) {
        var candidate = _this.getOptionValue(newValue);

        _this.setValue(Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["B"])(selectValue.filter(function (i) {
          return _this.getOptionValue(i) !== candidate;
        })), 'deselect-option', newValue);
      } else if (!isDisabled) {
        // Select option if option is not disabled
        if (isMulti) {
          _this.setValue(Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["B"])([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(selectValue), [newValue])), 'select-option', newValue);
        } else {
          _this.setValue(Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["C"])(newValue), 'select-option');
        }
      } else {
        _this.ariaOnChange(Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["C"])(newValue), {
          action: 'select-option',
          option: newValue,
          name: name
        });

        return;
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };

    _this.removeValue = function (removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValueArray = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["D"])(isMulti, newValueArray, newValueArray[0] || null);

      _this.onChange(newValue, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.focusInput();
    };

    _this.clearValue = function () {
      var selectValue = _this.state.selectValue;

      _this.onChange(Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["D"])(_this.props.isMulti, [], null), {
        action: 'clear',
        removedValues: selectValue
      });
    };

    _this.popValue = function () {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["D"])(isMulti, newValueArray, newValueArray[0] || null);

      _this.onChange(newValue, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };

    _this.getValue = function () {
      return _this.state.selectValue;
    };

    _this.cx = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["E"].apply(void 0, [_this.props.classNamePrefix].concat(args));
    };

    _this.getOptionLabel = function (data) {
      return getOptionLabel(_this.props, data);
    };

    _this.getOptionValue = function (data) {
      return getOptionValue(_this.props, data);
    };

    _this.getStyles = function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    _this.getElementId = function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };

    _this.getComponents = function () {
      return Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["F"])(_this.props);
    };

    _this.buildCategorizedOptions = function () {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };

    _this.getCategorizedOptions = function () {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };

    _this.buildFocusableOptions = function () {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };

    _this.getFocusableOptions = function () {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };

    _this.ariaOnChange = function (value, actionMeta) {
      _this.setState({
        ariaSelection: Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({
          value: value
        }, actionMeta)
      });
    };

    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    };

    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };

    _this.onControlMouseDown = function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }

      if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };

    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    };

    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.preventDefault();
      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };

    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["H"])(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };

    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };

    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };

    _this.onTouchStart = function (_ref2) {
      var touches = _ref2.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };

    _this.onTouchMove = function (_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };

    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };

    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    };

    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    };

    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    };

    _this.handleInputChange = function (event) {
      var inputValue = event.currentTarget.value;

      _this.setState({
        inputIsHiddenAfterUpdate: false
      });

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };

    _this.onInputFocus = function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    };

    _this.onInputBlur = function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };

    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    };

    _this.shouldHideSelectedOptions = function () {
      return shouldHideSelectedOptions(_this.props);
    };

    _this.onKeyDown = function (event) {
      var _this$props5 = _this.props,
          isMulti = _this$props5.isMulti,
          backspaceRemovesValue = _this$props5.backspaceRemovesValue,
          escapeClearsValue = _this$props5.escapeClearsValue,
          inputValue = _this$props5.inputValue,
          isClearable = _this$props5.isClearable,
          isDisabled = _this$props5.isDisabled,
          menuIsOpen = _this$props5.menuIsOpen,
          onKeyDown = _this$props5.onKeyDown,
          tabSelectsValue = _this$props5.tabSelectsValue,
          openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state,
          focusedOption = _this$state.focusedOption,
          focusedValue = _this$state.focusedValue,
          selectValue = _this$state.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    };

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["I"])(_props.value);
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props,
          isDisabled = _this$props6.isDisabled,
          menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }

      if (isFocused && isDisabled && !prevProps.isDisabled) {
        // ensure select state gets blurred in case Select is programatically disabled while focused
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["J"])(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    } // ==============================
    // Consumer Handlers
    // ==============================

  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers

  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;

      var _this$state2 = this.state,
          selectValue = _this$state2.selectValue,
          isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;

      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex]
      }, function () {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state,
          selectValue = _this$state3.selectValue,
          focusedValue = _this$state3.focusedValue; // Only multiselects support value focusing

      if (!this.props.isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options = this.getFocusableOptions();
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: "getTheme",
    value: // ==============================
    // Getters
    // ==============================
    function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          cx = this.cx,
          getStyles = this.getStyles,
          getValue = this.getValue,
          selectOption = this.selectOption,
          setValue = this.setValue,
          props = this.props;
      var isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue: clearValue,
        cx: cx,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        selectProps: props,
        setValue: setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props,
          isClearable = _this$props7.isClearable,
          isMulti = _this$props7.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: _inputValue,
          selectValue: _selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: "startListeningComposition",
    value: // ==============================
    // Composition Handlers
    // ==============================
    function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value: // ==============================
    // Touch Handlers
    // ==============================
    function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value: // ==============================
    // Renderers
    // ==============================
    function renderInput() {
      var _this$props8 = this.props,
          isDisabled = _this$props8.isDisabled,
          isSearchable = _this$props8.isSearchable,
          inputId = _this$props8.inputId,
          inputValue = _this$props8.inputValue,
          tabIndex = _this$props8.tabIndex,
          form = _this$props8.form,
          menuIsOpen = _this$props8.menuIsOpen;

      var _this$getComponents = this.getComponents(),
          Input = _this$getComponents.Input;

      var _this$state4 = this.state,
          inputIsHidden = _this$state4.inputIsHidden,
          ariaSelection = _this$state4.ariaSelection;
      var commonProps = this.commonProps;
      var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

      var ariaAttributes = Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({
        'aria-autocomplete': 'list',
        'aria-expanded': menuIsOpen,
        'aria-haspopup': true,
        'aria-controls': this.getElementId('listbox'),
        'aria-owns': this.getElementId('listbox'),
        'aria-errormessage': this.props['aria-errormessage'],
        'aria-invalid': this.props['aria-invalid'],
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby'],
        role: 'combobox'
      }, !isSearchable && {
        'aria-readonly': true
      }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus' && {
        'aria-describedby': this.getElementId('live-region')
      } : {
        'aria-describedby': this.getElementId('placeholder')
      });

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DummyInput, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["K"],
          onFocus: this.onInputFocus,
          disabled: isDisabled,
          tabIndex: tabIndex,
          inputMode: "none",
          form: form,
          value: ""
        }, ariaAttributes));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Input, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: "false",
        tabIndex: tabIndex,
        form: form,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;

      var _this$getComponents2 = this.getComponents(),
          MultiValue = _this$getComponents2.MultiValue,
          MultiValueContainer = _this$getComponents2.MultiValueContainer,
          MultiValueLabel = _this$getComponents2.MultiValueLabel,
          MultiValueRemove = _this$getComponents2.MultiValueRemove,
          SingleValue = _this$getComponents2.SingleValue,
          Placeholder = _this$getComponents2.Placeholder;

      var commonProps = this.commonProps;
      var _this$props9 = this.props,
          controlShouldRenderValue = _this$props9.controlShouldRenderValue,
          isDisabled = _this$props9.isDisabled,
          isMulti = _this$props9.isMulti,
          inputValue = _this$props9.inputValue,
          placeholder = _this$props9.placeholder;
      var _this$state5 = this.state,
          selectValue = _this$state5.selectValue,
          focusedValue = _this$state5.focusedValue,
          isFocused = _this$state5.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Placeholder, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused,
          innerProps: {
            id: this.getElementId('placeholder')
          }
        }), placeholder);
      }

      if (isMulti) {
        return selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MultiValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: "".concat(_this3.getOptionValue(opt), "-").concat(index),
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, 'value'));
        });
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SingleValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(),
          ClearIndicator = _this$getComponents3.ClearIndicator;

      var commonProps = this.commonProps;
      var _this$props10 = this.props,
          isDisabled = _this$props10.isDisabled,
          isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ClearIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(),
          LoadingIndicator = _this$getComponents4.LoadingIndicator;

      var commonProps = this.commonProps;
      var _this$props11 = this.props,
          isDisabled = _this$props11.isDisabled,
          isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(LoadingIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(),
          DropdownIndicator = _this$getComponents5.DropdownIndicator,
          IndicatorSeparator = _this$getComponents5.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator


      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IndicatorSeparator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(),
          DropdownIndicator = _this$getComponents6.DropdownIndicator;

      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DropdownIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;

      var _this$getComponents7 = this.getComponents(),
          Group = _this$getComponents7.Group,
          GroupHeading = _this$getComponents7.GroupHeading,
          Menu = _this$getComponents7.Menu,
          MenuList = _this$getComponents7.MenuList,
          MenuPortal = _this$getComponents7.MenuPortal,
          LoadingMessage = _this$getComponents7.LoadingMessage,
          NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
          Option = _this$getComponents7.Option;

      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props,
          captureMenuScroll = _this$props12.captureMenuScroll,
          inputValue = _this$props12.inputValue,
          isLoading = _this$props12.isLoading,
          loadingMessage = _this$props12.loadingMessage,
          minMenuHeight = _this$props12.minMenuHeight,
          maxMenuHeight = _this$props12.maxMenuHeight,
          menuIsOpen = _this$props12.menuIsOpen,
          menuPlacement = _this$props12.menuPlacement,
          menuPosition = _this$props12.menuPosition,
          menuPortalTarget = _this$props12.menuPortalTarget,
          menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
          noOptionsMessage = _this$props12.noOptionsMessage,
          onMenuScrollToTop = _this$props12.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props, id) {
        var type = props.type,
            data = props.data,
            isDisabled = props.isDisabled,
            isSelected = props.isSelected,
            label = props.label,
            value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? undefined : function () {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1
        };
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Option, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
          innerProps: innerProps,
          data: data,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: type,
          value: value,
          isFocused: isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
        }), _this4.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function (item) {
          if (item.type === 'group') {
            var _data = item.data,
                options = item.options,
                groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Group, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
              key: groupId,
              data: _data,
              options: options,
              Heading: GroupHeading,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === 'option') {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NoOptionsMessage, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["M"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, menuPlacementProps), function (_ref4) {
        var ref = _ref4.ref,
            _ref4$placerProps = _ref4.placerProps,
            placement = _ref4$placerProps.placement,
            maxHeight = _ref4$placerProps.maxHeight;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Menu, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove,
            id: _this4.getElementId('listbox')
          },
          isLoading: isLoading,
          placement: placement
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function (scrollTargetRef) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MenuList, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);

              scrollTargetRef(instance);
            },
            isLoading: isLoading,
            maxHeight: maxHeight,
            focusedOption: focusedOption
          }), menuUI);
        }));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MenuPortal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;

      var _this$props13 = this.props,
          delimiter = _this$props13.delimiter,
          isDisabled = _this$props13.isDisabled,
          isMulti = _this$props13.isMulti,
          name = _this$props13.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
            name: name,
            type: "hidden"
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state6 = this.state,
          ariaSelection = _this$state6.ariaSelection,
          focusedOption = _this$state6.focusedOption,
          focusedValue = _this$state6.focusedValue,
          isFocused = _this$state6.isFocused,
          selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(LiveRegion, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        id: this.getElementId('live-region'),
        ariaSelection: ariaSelection,
        focusedOption: focusedOption,
        focusedValue: focusedValue,
        isFocused: isFocused,
        selectValue: selectValue,
        focusableOptions: focusableOptions
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(),
          Control = _this$getComponents8.Control,
          IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
          SelectContainer = _this$getComponents8.SelectContainer,
          ValueContainer = _this$getComponents8.ValueContainer;

      var _this$props14 = this.props,
          className = _this$props14.className,
          id = _this$props14.id,
          isDisabled = _this$props14.isDisabled,
          menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SelectContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Control, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ValueContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IndicatorsContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps,
          clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
          inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate,
          ariaSelection = state.ariaSelection,
          isFocused = state.isFocused,
          prevWasFocused = state.prevWasFocused;
      var options = props.options,
          value = props.value,
          menuIsOpen = props.menuIsOpen,
          inputValue = props.inputValue,
          isMulti = props.isMulti;
      var selectValue = Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["I"])(value);
      var newMenuOptionsState = {};

      if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        newMenuOptionsState = {
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue,
          clearFocusValueOnUpdate: false
        };
      } // some updates should toggle the state of the input visibility


      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: undefined
      } : {};
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;

      if (isFocused && !hasKeptFocus) {
        // If `value` or `defaultValue` props are not empty then announce them
        // when the Select is initially focused
        newAriaSelection = {
          value: Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["D"])(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: 'initial-input-focus'
        };
        hasKeptFocus = !prevWasFocused;
      } // If the 'initial-input-focus' action has been set already
      // then reset the ariaSelection to null


      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus') {
        newAriaSelection = null;
      }

      return Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Select.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/react-select/dist/index-fd4f5d85.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-select/dist/index-fd4f5d85.esm.js ***!
  \**************************************************************/
/*! exports provided: A, B, C, D, E, F, G, H, I, J, K, L, M, _, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return isMobileDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return multiValueAsValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return singleValueAsValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return valueTernary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return defaultComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return notNullish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return isDocumentElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return cleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return handleInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MenuPlacer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _createSuper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clearIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return containerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return css$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return dropdownIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return groupCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return groupHeadingCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return indicatorsContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return indicatorSeparatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return inputCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return loadingIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return loadingMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return menuCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return menuListCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return menuPortalCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return multiValueCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return multiValueLabelCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return supportsPassiveEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return multiValueRemoveCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return noOptionsMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return optionCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return placeholderCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return valueContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return isTouchCapable; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);












function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var _excluded$3 = ["className", "clearValue", "cx", "getStyles", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (isArray(value)) return value.filter(Boolean);
  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__["default"])(value) === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Clean Common Props
// ==============================

var cleanCommonProps = function cleanCommonProps(props) {
  //className
  props.className;
      props.clearValue;
      props.cx;
      props.getStyles;
      props.getValue;
      props.hasValue;
      props.isMulti;
      props.isRtl;
      props.options;
      props.selectOption;
      props.selectProps;
      props.setValue;
      props.theme;
      var innerProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, _excluded$3);

  return _objectSpread2({}, innerProps);
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var _newValue = onInputChange(inputValue, actionMeta);

    if (typeof _newValue === 'string') return _newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  if (style.position === 'fixed') return document.documentElement;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return document.documentElement;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
} // ==============================
// Passive Event Detector
// ==============================
// https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36

var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }

}; // check for SSR

var w = typeof window !== 'undefined' ? window : {};

if (w.addEventListener && w.removeEventListener) {
  w.addEventListener('p', noop, options);
  w.removeEventListener('p', noop, false);
}

var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
  return item != null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
  return singleValue;
}
function multiValueAsValue(multiValue) {
  return multiValue;
}

function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
  }

  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref3, alignToControl(placement), '100%'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref3, "backgroundColor", colors.neutral0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref3, "borderRadius", borderRadius), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref3, "marginBottom", spacing.menuGutter), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref3, "marginTop", spacing.menuGutter), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref3, "position", 'absolute'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref3, "width", '100%'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref3, "zIndex", 1), _ref3;
};
var PortalPlacementContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_9__["createContext"])({
  getPortalPlacement: null
}); // NOTE: internal only

var MenuPlacer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MenuPlacer, _Component);

  var _super = _createSuper(MenuPlacer);

  function MenuPlacer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MenuPlacer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };
    _this.context = void 0;

    _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    };

    _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread2(_objectSpread2({}, _this.props), {}, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MenuPlacer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);

  return MenuPlacer;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
MenuPlacer.contextType = PortalPlacementContext;

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className),
    ref: innerRef
  }, innerProps), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      innerRef = props.innerRef,
      isMulti = props.isMulti;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, innerProps), children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MenuPortal, _Component2);

  var _super2 = _createSuper(MenuPortal);

  function MenuPortal() {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MenuPortal);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _this2.state = {
      placement: null
    };

    _this2.getPortalPlacement = function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    };

    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MenuPortal, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          className = _this$props2.className,
          controlElement = _this$props2.controlElement,
          cx = _this$props2.cx,
          innerProps = _this$props2.innerProps,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        css: getStyles('menuPortal', state),
        className: cx({
          'menu-portal': true
        }, className)
      }, innerProps), children);
      return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(PortalPlacementContext.Provider, {
        value: {
          getPortalPlacement: this.getPortalPlacement
        }
      }, appendTo ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_10__["createPortal"])(menuWrapper, appendTo) : menuWrapper);
    }
  }]);

  return MenuPortal;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : undefined,
    pointerEvents: isDisabled ? 'none' : undefined,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing,
      isMulti = _ref2.isMulti;
  return {
    alignItems: 'center',
    display: isMulti ? 'flex' : 'grid',
    flex: 1,
    flexWrap: 'wrap',
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer = function ValueContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      innerProps = props.innerProps,
      isMulti = props.isMulti,
      getStyles = props.getStyles,
      hasValue = props.hasValue;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('valueContainer', props),
    className: cx({
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }, className)
  }, innerProps), children);
}; // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      innerProps = props.innerProps,
      getStyles = props.getStyles;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, innerProps), children);
};

var _templateObject;

var _excluded$2 = ["size"];

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2 =  false ? undefined : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06XG4gIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuXG4gICc6aG92ZXInOiB7XG4gICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93bkluZGljYXRvckNTUyA9IGJhc2VDU1M7XG5leHBvcnQgY29uc3QgRHJvcGRvd25JbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBEcm9wZG93bkluZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+XG4pID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdjbGVhckluZGljYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded$2);

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Svg, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    size: 20
  }, props), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Svg, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    size: 20
  }, props), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }, innerProps), children || Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }, innerProps), children || Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    css: /*#__PURE__*/Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"])({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : undefined,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  false ? undefined : ";label:LoadingDot;",  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFQSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06XG4gIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuXG4gICc6aG92ZXInOiB7XG4gICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93bkluZGljYXRvckNTUyA9IGJhc2VDU1M7XG5leHBvcnQgY29uc3QgRHJvcGRvd25JbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBEcm9wZG93bkluZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+XG4pID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdjbGVhckluZGljYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */")
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }, innerProps), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 160,
    offset: true
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : undefined,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

var _excluded$1 = ["data"];
var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      innerProps = props.innerProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, innerProps), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Heading, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: 500,
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var getStyles = props.getStyles,
      cx = props.cx,
      className = props.className;

  var _cleanCommonProps = cleanCommonProps(props);
      _cleanCommonProps.data;
      var innerProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_cleanCommonProps, _excluded$1);

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('groupHeading', props),
    className: cx({
      'group-heading': true
    }, className)
  }, innerProps));
};

var _excluded = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return _objectSpread2({
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  }, containerStyle);
};
var spacingStyle = {
  gridArea: '1 / 2',
  font: 'inherit',
  minWidth: '2px',
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: '1 1 auto',
  display: 'inline-grid',
  gridArea: '1 / 1 / 2 / 3',
  gridTemplateColumns: '0 min-content',
  '&:after': _objectSpread2({
    content: 'attr(data-value) " "',
    visibility: 'hidden',
    whiteSpace: 'nowrap'
  }, spacingStyle)
};

var inputStyle = function inputStyle(isHidden) {
  return _objectSpread2({
    label: 'input',
    color: 'inherit',
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: '100%'
  }, spacingStyle);
};

var Input = function Input(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      value = props.value;

  var _cleanCommonProps = cleanCommonProps(props),
      innerRef = _cleanCommonProps.innerRef,
      isDisabled = _cleanCommonProps.isDisabled,
      isHidden = _cleanCommonProps.isHidden,
      inputClassName = _cleanCommonProps.inputClassName,
      innerProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_cleanCommonProps, _excluded);

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: cx({
      'input-container': true
    }, className),
    css: getStyles('input', props),
    "data-value": value || ''
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};

var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis || cropWithEllipsis === undefined ? 'ellipsis' : undefined,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused ? colors.dangerLight : undefined,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children,
      innerProps = _ref5.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "button"
  }, innerProps), children || Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(CrossIcon, {
    size: 14
  }));
}

var MultiValue = function MultiValue(props) {
  var children = props.children,
      className = props.className,
      components = props.components,
      cx = props.cx,
      data = props.data,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
  var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["ClassNames"], null, function (_ref6) {
    var css = _ref6.css,
        emotionCx = _ref6.cx;
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Container, {
      data: data,
      innerProps: _objectSpread2({
        className: emotionCx(css(getStyles('multiValue', props)), cx({
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className))
      }, innerProps),
      selectProps: selectProps
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Label, {
      data: data,
      innerProps: {
        className: emotionCx(css(getStyles('multiValueLabel', props)), cx({
          'multi-value__label': true
        }, className))
      },
      selectProps: selectProps
    }, children), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Remove, {
      data: data,
      innerProps: _objectSpread2({
        className: emotionCx(css(getStyles('multiValueRemove', props)), cx({
          'multi-value__remove': true
        }, className)),
        'aria-label': "Remove ".concat(children || 'option')
      }, removeProps),
      selectProps: selectProps
    }));
  });
};

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : undefined
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    gridArea: '1 / 1 / 2 / 3',
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

var css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    gridArea: '1 / 1 / 2 / 3',
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _objectSpread2(_objectSpread2({}, components), props.components);
};




/***/ }),

/***/ "./node_modules/react-select/dist/react-select.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/react-select/dist/react-select.esm.js ***!
  \************************************************************/
/*! exports provided: createFilter, defaultTheme, mergeStyles, components, default, NonceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonceProvider", function() { return NonceProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Select_de8d601b_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Select-de8d601b.esm.js */ "./node_modules/react-select/dist/Select-de8d601b.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return _Select_de8d601b_esm_js__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return _Select_de8d601b_esm_js__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _Select_de8d601b_esm_js__WEBPACK_IMPORTED_MODULE_2__["m"]; });

/* harmony import */ var _useStateManager_6f19ca20_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useStateManager-6f19ca20.esm.js */ "./node_modules/react-select/dist/useStateManager-6f19ca20.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-fd4f5d85.esm.js */ "./node_modules/react-select/dist/index-fd4f5d85.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_7__["c"]; });

/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_17__);





















var StateManagedSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
  var baseSelectProps = Object(_useStateManager_6f19ca20_esm_js__WEBPACK_IMPORTED_MODULE_3__["u"])(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Select_de8d601b_esm_js__WEBPACK_IMPORTED_MODULE_2__["S"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, baseSelectProps));
});

var NonceProvider = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(NonceProvider, _Component);

  var _super = Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_7__["_"])(NonceProvider);

  function NonceProvider(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NonceProvider);

    _this = _super.call(this, props);

    _this.createEmotionCache = function (nonce, key) {
      return Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_9__["default"])({
        nonce: nonce,
        key: key
      });
    };

    _this.createEmotionCache = Object(memoize_one__WEBPACK_IMPORTED_MODULE_10__["default"])(_this.createEmotionCache);
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NonceProvider, [{
    key: "render",
    value: function render() {
      var emotionCache = this.createEmotionCache(this.props.nonce, this.props.cacheKey);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["CacheProvider"], {
        value: emotionCache
      }, this.props.children);
    }
  }]);

  return NonceProvider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StateManagedSelect);



/***/ }),

/***/ "./node_modules/react-select/dist/useStateManager-6f19ca20.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-select/dist/useStateManager-6f19ca20.esm.js ***!
  \************************************************************************/
/*! exports provided: u */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useStateManager; });
/* harmony import */ var _index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-fd4f5d85.esm.js */ "./node_modules/react-select/dist/index-fd4f5d85.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var _excluded = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref) {
  var _ref$defaultInputValu = _ref.defaultInputValue,
      defaultInputValue = _ref$defaultInputValu === void 0 ? '' : _ref$defaultInputValu,
      _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen,
      defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
      propsInputValue = _ref.inputValue,
      propsMenuIsOpen = _ref.menuIsOpen,
      propsOnChange = _ref.onChange,
      propsOnInputChange = _ref.onInputChange,
      propsOnMenuClose = _ref.onMenuClose,
      propsOnMenuOpen = _ref.onMenuOpen,
      propsValue = _ref.value,
      restSelectProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(propsInputValue !== undefined ? propsInputValue : defaultInputValue),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      stateInputValue = _useState2[0],
      setStateInputValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      stateMenuIsOpen = _useState4[0],
      setStateMenuIsOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(propsValue !== undefined ? propsValue : defaultValue),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      stateValue = _useState6[0],
      setStateValue = _useState6[1];

  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (value, actionMeta) {
    if (typeof propsOnChange === 'function') {
      propsOnChange(value, actionMeta);
    }

    setStateValue(value);
  }, [propsOnChange]);
  var onInputChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (value, actionMeta) {
    var newValue;

    if (typeof propsOnInputChange === 'function') {
      newValue = propsOnInputChange(value, actionMeta);
    }

    setStateInputValue(newValue !== undefined ? newValue : value);
  }, [propsOnInputChange]);
  var onMenuOpen = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    if (typeof propsOnMenuOpen === 'function') {
      propsOnMenuOpen();
    }

    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    if (typeof propsOnMenuClose === 'function') {
      propsOnMenuClose();
    }

    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== undefined ? propsValue : stateValue;
  return Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_0__["a"])(Object(_index_fd4f5d85_esm_js__WEBPACK_IMPORTED_MODULE_0__["a"])({}, restSelectProps), {}, {
    inputValue: inputValue,
    menuIsOpen: menuIsOpen,
    onChange: onChange,
    onInputChange: onInputChange,
    onMenuClose: onMenuClose,
    onMenuOpen: onMenuOpen,
    value: value
  });
}




/***/ }),

/***/ "./node_modules/stylis/dist/stylis.mjs":
/*!*********************************************!*\
  !*** ./node_modules/stylis/dist/stylis.mjs ***!
  \*********************************************/
/*! exports provided: CHARSET, COMMENT, COUNTER_STYLE, DECLARATION, DOCUMENT, FONT_FACE, FONT_FEATURE_VALUES, IMPORT, KEYFRAMES, MEDIA, MOZ, MS, NAMESPACE, PAGE, RULESET, SUPPORTS, VIEWPORT, WEBKIT, abs, alloc, append, caret, char, character, characters, charat, column, combine, comment, commenter, compile, copy, dealloc, declaration, delimit, delimiter, escaping, from, hash, identifier, indexof, length, line, match, middleware, namespace, next, node, parse, peek, position, prefix, prefixer, prev, replace, ruleset, rulesheet, serialize, sizeof, slice, stringify, strlen, substr, token, tokenize, tokenizer, trim, whitespace */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARSET", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENT", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTER_STYLE", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECLARATION", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_FACE", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_FEATURE_VALUES", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPORT", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYFRAMES", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOZ", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MS", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMESPACE", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULESET", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORTS", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBKIT", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alloc", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caret", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "char", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "character", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characters", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charat", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "column", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comment", function() { return te; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commenter", function() { return ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealloc", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declaration", function() { return se; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delimit", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delimiter", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaping", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifier", function() { return re; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexof", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "middleware", function() { return oe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return he; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "node", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peek", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixer", function() { return ve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prev", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleset", function() { return ne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rulesheet", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return ie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeof", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return fe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strlen", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "substr", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "token", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenizer", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitespace", function() { return X; });
var e="-ms-";var r="-moz-";var a="-webkit-";var c="comm";var n="rule";var t="decl";var s="@page";var u="@media";var i="@import";var f="@charset";var o="@viewport";var l="@supports";var v="@document";var h="@namespace";var p="@keyframes";var b="@font-face";var w="@counter-style";var $="@font-feature-values";var k=Math.abs;var d=String.fromCharCode;function m(e,r){return(((r<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3)}function g(e){return e.trim()}function x(e,r){return(e=r.exec(e))?e[0]:e}function y(e,r,a){return e.replace(r,a)}function j(e,r){return e.indexOf(r)}function z(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function A(e){return e.length}function M(e){return e.length}function O(e,r){return r.push(e),e}function S(e,r){return e.map(r).join("")}var q=1;var B=1;var D=0;var E=0;var F=0;var G="";function H(e,r,a,c,n,t,s){return{value:e,root:r,parent:a,type:c,props:n,children:t,line:q,column:B,length:s,return:""}}function I(e,r,a){return H(e,r.root,r.parent,a,r.props,r.children,0)}function J(){return F}function K(){F=E>0?z(G,--E):0;if(B--,F===10)B=1,q--;return F}function L(){F=E<D?z(G,E++):0;if(B++,F===10)B=1,q++;return F}function N(){return z(G,E)}function P(){return E}function Q(e,r){return C(G,e,r)}function R(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return q=B=1,D=A(G=e),E=0,[]}function U(e){return G="",e}function V(e){return g(Q(E-1,_(e===91?e+2:e===40?e+1:e)))}function W(e){return U(Y(T(e)))}function X(e){while(F=N())if(F<33)L();else break;return R(e)>2||R(F)>3?"":" "}function Y(e){while(L())switch(R(F)){case 0:O(re(E-1),e);break;case 2:O(V(F),e);break;default:O(d(F),e)}return e}function Z(e,r){while(--r&&L())if(F<48||F>102||F>57&&F<65||F>70&&F<97)break;return Q(e,P()+(r<6&&N()==32&&L()==32))}function _(e){while(L())switch(F){case e:return E;case 34:case 39:return _(e===34||e===39?e:F);case 40:if(e===41)_(e);break;case 92:L();break}return E}function ee(e,r){while(L())if(e+F===47+10)break;else if(e+F===42+42&&N()===47)break;return"/*"+Q(r,E-1)+"*"+d(e===47?e:L())}function re(e){while(!R(N()))L();return Q(e,E)}function ae(e){return U(ce("",null,null,null,[""],e=T(e),0,[0],e))}function ce(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var b=1;var w=1;var $=1;var k=0;var m="";var g=n;var x=t;var j=c;var z=m;while(w)switch(p=k,k=L()){case 34:case 39:case 91:case 40:z+=V(k);break;case 9:case 10:case 13:case 32:z+=X(p);break;case 92:z+=Z(P()-1,7);continue;case 47:switch(N()){case 42:case 47:O(te(ee(L(),P()),r,a),i);break;default:z+="/"}break;case 123*b:u[f++]=A(z)*$;case 125*b:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+o:if(h>0&&A(z)-l)O(h>32?se(z+";",c,a,l-1):se(y(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:O(j=ne(z,r,a,f,o,n,u,m,g=[],x=[],l),t);if(k===123)if(o===0)ce(z,r,j,j,g,t,l,u,x);else switch(v){case 100:case 109:case 115:ce(e,j,j,c&&O(ne(e,j,j,0,0,n,u,m,n,g=[],l),x),n,x,l,u,c?g:x);break;default:ce(z,j,j,j,[""],x,l,u,x)}}f=o=h=0,b=$=1,m=z="",l=s;break;case 58:l=1+A(z),h=p;default:if(b<1)if(k==123)--b;else if(k==125&&b++==0&&K()==125)continue;switch(z+=d(k),k*b){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(A(z)-1)*$,$=1;break;case 64:if(N()===45)z+=V(L());v=N(),o=A(m=z+=re(P())),k++;break;case 45:if(p===45&&A(z)==2)b=0}}return t}function ne(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M(h);for(var b=0,w=0,$=0;b<c;++b)for(var d=0,m=C(e,v+1,v=k(w=u[b])),x=e;d<p;++d)if(x=g(w>0?h[d]+" "+m:y(m,/&\f/g,h[d])))f[$++]=x;return H(e,r,a,t===0?n:i,f,o,l)}function te(e,r,a){return H(e,r,a,c,d(J()),C(e,2,-2),0)}function se(e,r,a,c){return H(e,r,a,t,C(e,0,c),C(e,c+1,-1),c)}function ue(c,n){switch(m(c,n)){case 5103:return a+"print-"+c+c;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r+c+e+c+c;case 6828:case 4268:return a+c+e+c+c;case 6165:return a+c+e+"flex-"+c+c;case 5187:return a+c+y(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+c;case 5443:return a+c+e+"flex-item-"+y(c,/flex-|-self/,"")+c;case 4675:return a+c+e+"flex-line-pack"+y(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e+y(c,"shrink","negative")+c;case 5292:return a+c+e+y(c,"basis","preferred-size")+c;case 6060:return a+"box-"+y(c,"-grow","")+a+c+e+y(c,"grow","positive")+c;case 4554:return a+y(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return y(y(y(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return y(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return y(y(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return y(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(c)-1-n>6)switch(z(c,n+1)){case 109:if(z(c,n+4)!==45)break;case 102:return y(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(z(c,n+3)==108?"$3":"$2-$3"))+c;case 115:return~j(c,"stretch")?ue(y(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z(c,n+1)!==115)break;case 6444:switch(z(c,A(c)-3-(~j(c,"!important")&&10))){case 107:return y(c,":",":"+a)+c;case 101:return y(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+c}break;case 5936:switch(z(c,n+11)){case 114:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e+c+c}return c}function ie(e,r){var a="";var c=M(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function fe(e,r,a,s){switch(e.type){case i:case t:return e.return=e.return||e.value;case c:return"";case n:e.value=e.props.join(",")}return A(a=ie(e.children,s))?e.return=e.value+"{"+a+"}":""}function oe(e){var r=M(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function le(e){return function(r){if(!r.root)if(r=r.return)e(r)}}function ve(c,s,u,i){if(!c.return)switch(c.type){case t:c.return=ue(c.value,c.length);break;case p:return ie([I(y(c.value,"@","@"+a),c,"")],i);case n:if(c.length)return S(c.props,(function(n){switch(x(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ie([I(y(n,/:(read-\w+)/,":"+r+"$1"),c,"")],i);case"::placeholder":return ie([I(y(n,/:(plac\w+)/,":"+a+"input-$1"),c,""),I(y(n,/:(plac\w+)/,":"+r+"$1"),c,""),I(y(n,/:(plac\w+)/,e+"input-$1"),c,"")],i)}return""}))}}function he(e){switch(e.type){case n:e.props=e.props.map((function(r){return S(W(r),(function(r,a,c){switch(z(r,0)){case 12:return C(r,1,A(r));case 0:case 40:case 43:case 62:case 126:return r;case 58:if(c[++a]==="global")c[a]="",c[++a]="\f"+C(c[a],a=1,-1);case 32:return a===1?"":r;default:switch(a){case 0:e=r;return M(c)>1?"":r;case a=M(c)-1:case 2:return a===2?r+e+e:r+e;default:return r}}}))}))}}
//# sourceMappingURL=stylis.mjs.map


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var attributes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  resOption: {
    type: "string",
    "default": "desktop"
  },
  // blockId attribute for making unique className and other uniqueness
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    "default": "essential_block"
  },
  blockMeta: {
    type: "object"
  },
  queryData: {
    type: "object"
  },
  queryResults: {
    type: "array"
  },
  preset: {
    type: "string",
    "default": "button-1"
  },
  showThumbnail: {
    type: "boolean",
    "default": true
  },
  showTitle: {
    type: "boolean",
    "default": true
  },
  titleColor: {
    type: "string",
    "default": "#333333"
  },
  titleHoverColor: {
    type: "string",
    "default": "#333333"
  },
  titleColorStyle: {
    type: "string",
    "default": "normal"
  },
  titleLength: {
    type: "number"
  },
  titleTextAlign: {
    type: "string",
    "default": "left"
  },
  titleTag: {
    type: "string",
    "default": "h2"
  },
  showContent: {
    type: "boolean",
    "default": true
  },
  contentColor: {
    type: "string",
    "default": "#333333"
  },
  contentTextAlign: {
    type: "string",
    "default": "left"
  },
  contentLength: {
    type: "number",
    "default": 20
  },
  expansionIndicator: {
    type: "string",
    "default": "..."
  },
  showReadMore: {
    type: "boolean",
    "default": true
  },
  readmoreText: {
    type: "string",
    "default": "Read More"
  },
  readmoreColor: {
    type: "string",
    "default": "#333333"
  },
  readmoreTextAlign: {
    type: "string",
    "default": "left"
  },
  readmoreHoverColor: {
    type: "string",
    "default": "#333333"
  },
  readmoreColorType: {
    type: "string",
    "default": "normal"
  },
  showMeta: {
    type: "boolean",
    "default": true
  },
  metaPosition: {
    type: "string",
    "default": "footer"
  },
  metaColor: {
    type: "string",
    "default": "#333333"
  },
  metaTextAlign: {
    type: "string",
    "default": "left"
  },
  metaHoverColor: {
    type: "string",
    "default": "#333333"
  },
  metaColorType: {
    type: "string",
    "default": "normal"
  },
  showAvatar: {
    type: "boolean",
    "default": true
  },
  showAuthor: {
    type: "boolean",
    "default": true
  },
  showDate: {
    type: "boolean",
    "default": true
  },
  showCategories: {
    type: "boolean",
    "default": true
  }
}, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateTypographyAttributes"])(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_2__))), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["WRAPPER_MARGIN"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["WRAPPER_PADDING"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMN_PADDING"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["TITLE_MARGIN"], {
  top: 0,
  bottom: 15,
  right: 0,
  left: 0,
  isLinked: false
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["CONTENT_MARGIN"], {
  top: 0,
  bottom: 15,
  right: 0,
  left: 0,
  isLinked: false
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["READMORE_MARGIN"], {
  top: 0,
  bottom: 15,
  right: 0,
  left: 0,
  isLinked: false
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["READMORE_PADDING"], {
  top: 10,
  bottom: 10,
  right: 15,
  left: 15,
  isLinked: false
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["META_MARGIN"], {
  top: 0,
  bottom: 15,
  right: 0,
  left: 0,
  isLinked: false
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["THUMBNAIL_BORDER_RADIUS"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["AVATAR_BORDER_RADIUS"], {
  top: 50,
  bottom: 50,
  right: 50,
  left: 50,
  isLinked: true
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateBorderShadowAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["WRAPPER_BORDER_SHADOW"], {
  noShadow: true // noBorder: true,

})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateBorderShadowAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMN_BORDER_SHADOW"], {
  noShadow: true // noBorder: true,

})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateBackgroundAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["WRAPPER_BG"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateBackgroundAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMN_BG"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateResponsiveRangeAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMNS"], {
  defaultRange: 3
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateResponsiveRangeAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMN_GAP"], {
  defaultRange: 10
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["generateResponsiveRangeAttributes"])(_constants_constants__WEBPACK_IMPORTED_MODULE_0__["THUMBNAIL_IMAGE_SIZE"]));

/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/*! exports provided: WRAPPER_MARGIN, WRAPPER_PADDING, WRAPPER_BORDER_SHADOW, WRAPPER_BG, COLUMNS, COLUMN_GAP, COLUMN_PADDING, COLUMN_BG, COLUMN_BORDER_SHADOW, THUMBNAIL_IMAGE_SIZE, THUMBNAIL_BORDER_RADIUS, TITLE_MARGIN, CONTENT_MARGIN, READMORE_MARGIN, READMORE_PADDING, META_MARGIN, AVATAR_BORDER_RADIUS, UNIT_TYPES, HEIGHT_UNIT_TYPES, NORMAL_HOVER, META_POSITION, TITLE_TAGS, PRESETS, TEXT_ALIGN, CONTENT_POSITION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WRAPPER_MARGIN", function() { return WRAPPER_MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WRAPPER_PADDING", function() { return WRAPPER_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WRAPPER_BORDER_SHADOW", function() { return WRAPPER_BORDER_SHADOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WRAPPER_BG", function() { return WRAPPER_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMNS", function() { return COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMN_GAP", function() { return COLUMN_GAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMN_PADDING", function() { return COLUMN_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMN_BG", function() { return COLUMN_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMN_BORDER_SHADOW", function() { return COLUMN_BORDER_SHADOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THUMBNAIL_IMAGE_SIZE", function() { return THUMBNAIL_IMAGE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THUMBNAIL_BORDER_RADIUS", function() { return THUMBNAIL_BORDER_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_MARGIN", function() { return TITLE_MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_MARGIN", function() { return CONTENT_MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "READMORE_MARGIN", function() { return READMORE_MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "READMORE_PADDING", function() { return READMORE_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META_MARGIN", function() { return META_MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVATAR_BORDER_RADIUS", function() { return AVATAR_BORDER_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_TYPES", function() { return UNIT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHT_UNIT_TYPES", function() { return HEIGHT_UNIT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NORMAL_HOVER", function() { return NORMAL_HOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META_POSITION", function() { return META_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_TAGS", function() { return TITLE_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRESETS", function() { return PRESETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_ALIGN", function() { return TEXT_ALIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_POSITION", function() { return CONTENT_POSITION; });
var __ = wp.i18n.__;
var Dashicon = wp.components.Dashicon; // the consts defined here should be unique from one another

var WRAPPER_MARGIN = "wrpMargin";
var WRAPPER_PADDING = "wrpPadding";
var WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
var WRAPPER_BG = "wrpBG";
var COLUMNS = "columns";
var COLUMN_GAP = "columnGap";
var COLUMN_PADDING = "columnPadding";
var COLUMN_BG = "columnBG";
var COLUMN_BORDER_SHADOW = "columnBorderShadow";
var THUMBNAIL_IMAGE_SIZE = "thumbnailImageSize";
var THUMBNAIL_BORDER_RADIUS = "thumbnailBDR";
var TITLE_MARGIN = "titleMargin";
var CONTENT_MARGIN = "contentMargin";
var READMORE_MARGIN = "readmoreMargin";
var READMORE_PADDING = "readmorePadding";
var META_MARGIN = "metaMargin";
var AVATAR_BORDER_RADIUS = "avatarBDR";
var UNIT_TYPES = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}, {
  label: "%",
  value: "%"
}];
var HEIGHT_UNIT_TYPES = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}, {
  label: "vh",
  value: "vh"
}];
var NORMAL_HOVER = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Hover",
  value: "hover"
}];
var META_POSITION = [{
  label: "Header",
  value: "header"
}, {
  label: "Footer",
  value: "hover"
}, {
  label: "Under Thumbnail",
  value: "thumbnail"
}];
var TITLE_TAGS = [{
  label: "H1",
  value: "h1"
}, {
  label: "H2",
  value: "h2"
}, {
  label: "H3",
  value: "h3"
}, {
  label: "H4",
  value: "h4"
}, {
  label: "H5",
  value: "h5"
}, {
  label: "H6",
  value: "h6"
}, {
  label: "P",
  value: "p"
}];
var PRESETS = [{
  label: __("Preset 1"),
  value: "preset-1"
}, {
  label: __("Preset 2"),
  value: "preset-2"
}, {
  label: __("Preset 3"),
  value: "preset-3"
}, {
  label: __("Preset 4"),
  value: "preset-4"
}];
var TEXT_ALIGN = [{
  label: __( /*#__PURE__*/React.createElement(Dashicon, {
    icon: "editor-alignleft"
  })),
  value: "left"
}, {
  label: __( /*#__PURE__*/React.createElement(Dashicon, {
    icon: "editor-aligncenter"
  })),
  value: "center"
}, {
  label: __( /*#__PURE__*/React.createElement(Dashicon, {
    icon: "editor-alignright"
  })),
  value: "right"
}];
var CONTENT_POSITION = [{
  label: __( /*#__PURE__*/React.createElement(Dashicon, {
    icon: "editor-alignleft"
  })),
  value: "flex-start"
}, {
  label: __( /*#__PURE__*/React.createElement(Dashicon, {
    icon: "editor-aligncenter"
  })),
  value: "center"
}, {
  label: __( /*#__PURE__*/React.createElement(Dashicon, {
    icon: "editor-alignright"
  })),
  value: "flex-end"
}];

/***/ }),

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/*! exports provided: EBPG_TITLE_TYPOGRAPHY, EBPG_CONTENT_TYPOGRAPHY, EBPG_READMORE_TYPOGRAPHY, EBPG_META_TYPOGRAPHY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EBPG_TITLE_TYPOGRAPHY", function() { return EBPG_TITLE_TYPOGRAPHY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EBPG_CONTENT_TYPOGRAPHY", function() { return EBPG_CONTENT_TYPOGRAPHY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EBPG_READMORE_TYPOGRAPHY", function() { return EBPG_READMORE_TYPOGRAPHY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EBPG_META_TYPOGRAPHY", function() { return EBPG_META_TYPOGRAPHY; });
// the consts defined here should be unique from one another
var EBPG_TITLE_TYPOGRAPHY = "ebpg_title";
var EBPG_CONTENT_TYPOGRAPHY = "ebpg_content";
var EBPG_READMORE_TYPOGRAPHY = "ebpg_readmore";
var EBPG_META_TYPOGRAPHY = "ebpg_meta";

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/escape-html */ "@wordpress/escape-html");
/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * WordPress dependencies 
*/
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    useBlockProps = _wp$blockEditor.useBlockProps;
var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    renderToString = _wp$element.renderToString;
var select = wp.data.select;
var _wp$date = wp.date,
    dateI18n = _wp$date.dateI18n,
    format = _wp$date.format,
    __experimentalGetSettings = _wp$date.__experimentalGetSettings;
/**
 * External dependencies
 */



/**
  * Internal depencencies
*/






function Edit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      clientId = props.clientId,
      isSelected = props.isSelected;
  var blockId = attributes.blockId,
      blockMeta = attributes.blockMeta,
      resOption = attributes.resOption,
      preset = attributes.preset,
      queryResults = attributes.queryResults,
      showThumbnail = attributes.showThumbnail,
      showTitle = attributes.showTitle,
      titleColor = attributes.titleColor,
      titleHoverColor = attributes.titleHoverColor,
      titleColorStyle = attributes.titleColorStyle,
      titleLength = attributes.titleLength,
      titleTextAlign = attributes.titleTextAlign,
      titleTag = attributes.titleTag,
      showContent = attributes.showContent,
      contentColor = attributes.contentColor,
      contentTextAlign = attributes.contentTextAlign,
      contentLength = attributes.contentLength,
      expansionIndicator = attributes.expansionIndicator,
      showReadMore = attributes.showReadMore,
      readmoreText = attributes.readmoreText,
      readmoreColor = attributes.readmoreColor,
      readmoreTextAlign = attributes.readmoreTextAlign,
      readmoreHoverColor = attributes.readmoreHoverColor,
      readmoreColorType = attributes.readmoreColorType,
      showMeta = attributes.showMeta,
      metaPosition = attributes.metaPosition,
      metaColor = attributes.metaColor,
      metaTextAlign = attributes.metaTextAlign,
      metaHoverColor = attributes.metaHoverColor,
      metaColorType = attributes.metaColorType,
      showAvatar = attributes.showAvatar,
      showAuthor = attributes.showAuthor,
      showDate = attributes.showDate,
      showCategories = attributes.showCategories;

  var dateFormat = __experimentalGetSettings().formats.date; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class


  useEffect(function () {
    var bodyClasses = document.body.className;
    setAttributes({
      resOption: select("core/edit-post").__experimentalGetPreviewDeviceType()
    });
  }, []); // this useEffect is for creating a unique id for each block's unique className by a random unique number

  useEffect(function () {
    var BLOCK_PREFIX = "eb-post-grid";
    Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["duplicateBlockIdFix"])({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: select,
      clientId: clientId
    });
  }, []); // this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button

  useEffect(function () {
    Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["mimmikCssForPreviewBtnClick"])({
      domObj: document,
      select: select
    });
  }, []);
  var blockProps = useBlockProps({
    className: "eb-guten-block-main-parent-wrapper"
  }); //
  // CSS/styling Codes Starts from Here

  var _generateTypographySt = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_5__["EBPG_TITLE_TYPOGRAPHY"],
    defaultFontSize: 20
  }),
      titleTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
      titleTypoStylesTab = _generateTypographySt.typoStylesTab,
      titleTypoStylesMobile = _generateTypographySt.typoStylesMobile;

  var _generateTypographySt2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_5__["EBPG_CONTENT_TYPOGRAPHY"],
    defaultFontSize: 16
  }),
      contentTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
      contentTypoStylesTab = _generateTypographySt2.typoStylesTab,
      contentTypoStylesMobile = _generateTypographySt2.typoStylesMobile;

  var _generateTypographySt3 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_5__["EBPG_READMORE_TYPOGRAPHY"],
    defaultFontSize: 16
  }),
      readmoreTypoStylesDesktop = _generateTypographySt3.typoStylesDesktop,
      readmoreTypoStylesTab = _generateTypographySt3.typoStylesTab,
      readmoreTypoStylesMobile = _generateTypographySt3.typoStylesMobile;

  var _generateTypographySt4 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_5__["EBPG_META_TYPOGRAPHY"],
    defaultFontSize: 14
  }),
      metaTypoStylesDesktop = _generateTypographySt4.typoStylesDesktop,
      metaTypoStylesTab = _generateTypographySt4.typoStylesTab,
      metaTypoStylesMobile = _generateTypographySt4.typoStylesMobile;

  var _generateDimensionsCo = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsControlStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["WRAPPER_MARGIN"],
    styleFor: "margin",
    attributes: attributes
  }),
      wrapperMarginStylesDesktop = _generateDimensionsCo.dimensionStylesDesktop,
      wrapperMarginStylesTab = _generateDimensionsCo.dimensionStylesTab,
      wrapperMarginStylesMobile = _generateDimensionsCo.dimensionStylesMobile;

  var _generateDimensionsCo2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsControlStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["WRAPPER_PADDING"],
    styleFor: "padding",
    attributes: attributes
  }),
      wrapperPaddingStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
      wrapperPaddingStylesTab = _generateDimensionsCo2.dimensionStylesTab,
      wrapperPaddingStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;

  var _generateDimensionsCo3 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsControlStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["COLUMN_PADDING"],
    styleFor: "padding",
    attributes: attributes
  }),
      columnPaddingStylesDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
      columnPaddingStylesTab = _generateDimensionsCo3.dimensionStylesTab,
      columnPaddingStylesMobile = _generateDimensionsCo3.dimensionStylesMobile;

  var _generateDimensionsCo4 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsControlStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["TITLE_MARGIN"],
    styleFor: "margin",
    attributes: attributes
  }),
      titleMarginStylesDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
      titleMarginStylesTab = _generateDimensionsCo4.dimensionStylesTab,
      titleMarginStylesMobile = _generateDimensionsCo4.dimensionStylesMobile;

  var _generateDimensionsCo5 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsControlStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["CONTENT_MARGIN"],
    styleFor: "margin",
    attributes: attributes
  }),
      contentMarginStylesDesktop = _generateDimensionsCo5.dimensionStylesDesktop,
      contentMarginStylesTab = _generateDimensionsCo5.dimensionStylesTab,
      contentMarginStylesMobile = _generateDimensionsCo5.dimensionStylesMobile;

  var _generateDimensionsCo6 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsControlStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["READMORE_MARGIN"],
    styleFor: "margin",
    attributes: attributes
  }),
      readmoreMarginStylesDesktop = _generateDimensionsCo6.dimensionStylesDesktop,
      readmoreMarginStylesTab = _generateDimensionsCo6.dimensionStylesTab,
      readmoreMarginStylesMobile = _generateDimensionsCo6.dimensionStylesMobile;

  var _generateDimensionsCo7 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsControlStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["READMORE_PADDING"],
    styleFor: "padding",
    attributes: attributes
  }),
      readmorePaddingStylesDesktop = _generateDimensionsCo7.dimensionStylesDesktop,
      readmorePaddingStylesTab = _generateDimensionsCo7.dimensionStylesTab,
      readmorePaddingStylesMobile = _generateDimensionsCo7.dimensionStylesMobile;

  var _generateDimensionsCo8 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsControlStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["META_MARGIN"],
    styleFor: "margin",
    attributes: attributes
  }),
      metaMarginStylesDesktop = _generateDimensionsCo8.dimensionStylesDesktop,
      metaMarginStylesTab = _generateDimensionsCo8.dimensionStylesTab,
      metaMarginStylesMobile = _generateDimensionsCo8.dimensionStylesMobile;

  var _generateDimensionsCo9 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsControlStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["THUMBNAIL_BORDER_RADIUS"],
    styleFor: "border-radius",
    attributes: attributes
  }),
      thumbnailBdrSdwStylesDesktop = _generateDimensionsCo9.dimensionStylesDesktop,
      thumbnailBdrSdwStylesTab = _generateDimensionsCo9.dimensionStylesTab,
      thumbnailBdrSdwStylesMobile = _generateDimensionsCo9.dimensionStylesMobile;

  var _generateDimensionsCo10 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsControlStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["AVATAR_BORDER_RADIUS"],
    styleFor: "border-radius",
    attributes: attributes
  }),
      avatarBdrSdwStylesDesktop = _generateDimensionsCo10.dimensionStylesDesktop,
      avatarBdrSdwStylesTab = _generateDimensionsCo10.dimensionStylesTab,
      avatarBdrSdwStylesMobile = _generateDimensionsCo10.dimensionStylesMobile;

  var _generateBorderShadow = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateBorderShadowStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["WRAPPER_BORDER_SHADOW"],
    attributes: attributes,
    noShadow: true
  }),
      wrapperBDShadowDesktop = _generateBorderShadow.styesDesktop,
      wrapperBDShadowTab = _generateBorderShadow.styesTab,
      wrapperBDShadowMobile = _generateBorderShadow.styesMobile,
      wrapperBDShadowHoverDesktop = _generateBorderShadow.stylesHoverDesktop,
      wrapperBDShadowHoverTab = _generateBorderShadow.stylesHoverTab,
      wrapperBDShadowHoverMobile = _generateBorderShadow.stylesHoverMobile;

  var _generateBorderShadow2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateBorderShadowStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["COLUMN_BORDER_SHADOW"],
    attributes: attributes,
    noShadow: true
  }),
      columnBDShadowDesktop = _generateBorderShadow2.styesDesktop,
      columnBDShadowTab = _generateBorderShadow2.styesTab,
      columnBDShadowMobile = _generateBorderShadow2.styesMobile,
      columnBDShadowHoverDesktop = _generateBorderShadow2.stylesHoverDesktop,
      columnBDShadowHoverTab = _generateBorderShadow2.stylesHoverTab,
      columnBDShadowHoverMobile = _generateBorderShadow2.stylesHoverMobile;

  var _generateResponsiveRa = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateResponsiveRangeStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["COLUMNS"],
    property: "",
    attributes: attributes
  }),
      columnNumberDesktop = _generateResponsiveRa.rangeStylesDesktop,
      columnNumberTab = _generateResponsiveRa.rangeStylesTab,
      columnNumberMobile = _generateResponsiveRa.rangeStylesMobile;

  var _generateResponsiveRa2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateResponsiveRangeStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["COLUMN_GAP"],
    property: "gap",
    attributes: attributes
  }),
      columnGapDesktop = _generateResponsiveRa2.rangeStylesDesktop,
      columnGapTab = _generateResponsiveRa2.rangeStylesTab,
      columnGapMobile = _generateResponsiveRa2.rangeStylesMobile;

  var _generateResponsiveRa3 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateResponsiveRangeStyles"])({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["THUMBNAIL_IMAGE_SIZE"],
    property: "height",
    attributes: attributes
  }),
      thumbnailImageHeightDesktop = _generateResponsiveRa3.rangeStylesDesktop,
      thumbnailImageHeightTab = _generateResponsiveRa3.rangeStylesTab,
      thumbnailImageHeightMobile = _generateResponsiveRa3.rangeStylesMobile; //Generate Background


  var _generateBackgroundCo = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateBackgroundControlStyles"])({
    attributes: attributes,
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["WRAPPER_BG"],
    noOverlay: true
  }),
      wrapperBackgroundStylesDesktop = _generateBackgroundCo.backgroundStylesDesktop,
      wrapperHoverBackgroundStylesDesktop = _generateBackgroundCo.hoverBackgroundStylesDesktop,
      wrapperBackgroundStylesTab = _generateBackgroundCo.backgroundStylesTab,
      wrapperHoverBackgroundStylesTab = _generateBackgroundCo.hoverBackgroundStylesTab,
      wrapperBackgroundStylesMobile = _generateBackgroundCo.backgroundStylesMobile,
      wrapperHoverBackgroundStylesMobile = _generateBackgroundCo.hoverBackgroundStylesMobile,
      wrapperBgTransitionStyle = _generateBackgroundCo.bgTransitionStyle; //Generate Background


  var _generateBackgroundCo2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateBackgroundControlStyles"])({
    attributes: attributes,
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["COLUMN_BG"],
    noOverlay: true
  }),
      columnBackgroundStylesDesktop = _generateBackgroundCo2.backgroundStylesDesktop,
      columnHoverBackgroundStylesDesktop = _generateBackgroundCo2.hoverBackgroundStylesDesktop,
      columnBackgroundStylesTab = _generateBackgroundCo2.backgroundStylesTab,
      columnHoverBackgroundStylesTab = _generateBackgroundCo2.hoverBackgroundStylesTab,
      columnBackgroundStylesMobile = _generateBackgroundCo2.backgroundStylesMobile,
      columnHoverBackgroundStylesMobile = _generateBackgroundCo2.hoverBackgroundStylesMobile,
      columnBgTransitionStyle = _generateBackgroundCo2.bgTransitionStyle; // wrapper styles css in strings ⬇


  var wrapperStylesDesktop = "\n\t\t.eb-post-grid-wrapper.".concat(blockId, "{\n\t\t\tdisplay: grid;\n\t\t\tposition: relative;\n\t\t\tgrid-template-columns: repeat(").concat(columnNumberDesktop.replace(/\D/g, ''), ", minmax(0, 1fr));\n\t\t\t").concat(columnGapDesktop, "\n\t\t\t").concat(wrapperMarginStylesDesktop, "\n\t\t\t").concat(wrapperPaddingStylesDesktop, "\n\t\t}\n\t");
  var wrapperStylesTab = "\n\t\t.eb-post-grid-wrapper.".concat(blockId, "{\n\t\t\t").concat(wrapperMarginStylesTab, "\n\n\t\t}\n\t");
  var wrapperStylesMobile = "\n\t\t.eb-post-grid-wrapper.".concat(blockId, "{\n\t\t\t").concat(wrapperMarginStylesMobile, "\n\n\t\t}\n\t"); // all css styles for large screen width (desktop/laptop) in strings ⬇

  var desktopAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["softMinifyCssStrings"])("\n\t\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["isCssExists"])(wrapperStylesDesktop) ? wrapperStylesDesktop : " ", "\n\t\t")); // all css styles for Tab in strings ⬇

  var tabAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["softMinifyCssStrings"])("\n\t\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["isCssExists"])(wrapperStylesTab) ? wrapperStylesTab : " ", "\n\t\t")); // all css styles for Mobile in strings ⬇

  var mobileAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["softMinifyCssStrings"])("\n\t\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["isCssExists"])(wrapperStylesMobile) ? wrapperStylesMobile : " ", "\n\t\t")); // Set All Style in "blockMeta" Attribute

  useEffect(function () {
    var styleObject = {
      desktop: desktopAllStyles,
      tab: tabAllStyles,
      mobile: mobileAllStyles
    };

    if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
      setAttributes({
        blockMeta: styleObject
      });
    }
  }, [attributes]);
  return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], props),
  /*#__PURE__*/
  //Edit view here
  React.createElement("div", blockProps, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t".concat(desktopAllStyles, "\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t").concat(resOption === "tab" ? tabAllStyles : " ", "\n\t\t\t\t").concat(resOption === "mobile" ? tabAllStyles + mobileAllStyles : " ", "\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\t\n\n\t\t\t\t\t/* tabcssStart */\t\t\t\n\t\t\t\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["softMinifyCssStrings"])(tabAllStyles), "\n\t\t\t\t\t/* tabcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media all and (max-width: 767px) {\n\t\t\t\t\t\n\t\t\t\t\t/* mobcssStart */\t\t\t\n\t\t\t\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["softMinifyCssStrings"])(mobileAllStyles), "\n\t\t\t\t\t/* mobcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t")), /*#__PURE__*/React.createElement("div", {
    className: "eb-post-grid-wrapper ".concat(blockId, " ").concat(preset),
    "data-id": blockId
  }, _typeof(queryResults) === 'object' && queryResults.length > 0 && queryResults.map(function (post) {
    //Generate Featured Image
    var _post$featuredImageIn = post.featuredImageInfo;
    _post$featuredImageIn = _post$featuredImageIn === void 0 ? {} : _post$featuredImageIn;
    var imageSourceUrl = _post$featuredImageIn.url,
        featuredImageAlt = _post$featuredImageIn.alt;
    var featuredImage = showThumbnail && /*#__PURE__*/React.createElement("img", {
      src: imageSourceUrl,
      alt: featuredImageAlt
    }); //Generate Title

    var title = post.title.rendered;
    var titleWithLimitWords = titleLength > 0 ? title.trim().split(' ', titleLength).join(' ') : title;
    var titleHTML = "\n\t\t\t\t\t\t<".concat(titleTag, " class=\"ebpg-entry-title\">\n\t\t\t\t\t\t\t<a class=\"ebpg-grid-post-link\" href=\"").concat(post.link, "\" title=\"").concat(titleWithLimitWords, "\">\n\t\t\t\t\t\t\t\t").concat(titleWithLimitWords, "\n\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t</").concat(titleTag, ">\n\t\t\t\t\t"); //Generate Excerpt & Read More

    var excerpt = post.excerpt.rendered;
    var excerptElement = document.createElement('div');
    excerptElement.innerHTML = excerpt;
    excerpt = excerptElement.textContent || excerptElement.innerText || '';
    var excerptWithLimitWords = contentLength > 0 ? excerpt.trim().split(' ', contentLength).join(' ') : excerpt;
    var metaData = showMeta ? /*#__PURE__*/React.createElement(React.Fragment, null, showAvatar ? /*#__PURE__*/React.createElement("div", {
      "class": "ebpg-author-avatar"
    }, /*#__PURE__*/React.createElement("a", {
      href: post._embedded.author[0].link
    }, /*#__PURE__*/React.createElement("img", {
      alt: post._embedded.author[0].name ? post._embedded.author[0].name : post._embedded.author[0].slug,
      src: post._embedded.author[0].avatar_urls[96] ? post._embedded.author[0].avatar_urls[96] : ''
    }))) : '', /*#__PURE__*/React.createElement("div", {
      "class": "ebpg-entry-meta-data"
    }, showAuthor ? /*#__PURE__*/React.createElement("span", {
      "class": "ebpg-posted-by"
    }, /*#__PURE__*/React.createElement("a", {
      href: post._embedded.author[0].link,
      title: post._embedded.author[0].name ? post._embedded.author[0].name : post._embedded.author[0].slug,
      rel: "author"
    }, post._embedded.author[0].name ? post._embedded.author[0].name : post._embedded.author[0].slug)) : '', showDate ? /*#__PURE__*/React.createElement("span", {
      "class": "ebpg-posted-on"
    }, /*#__PURE__*/React.createElement("time", {
      dateTime: format('c', post.date_gmt)
    }, dateI18n(dateFormat, post.date_gmt))) : '')) : "";
    return /*#__PURE__*/React.createElement("article", {
      "class": "ebpg-grid-post ebpg-post-grid-column",
      "data-id": post.id
    }, /*#__PURE__*/React.createElement("div", {
      "class": "ebpg-grid-post-holder"
    }, /*#__PURE__*/React.createElement("div", {
      "class": "ebpg-entry-media"
    }, showThumbnail && /*#__PURE__*/React.createElement("div", {
      "class": "ebpg-entry-thumbnail"
    }, post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && /*#__PURE__*/React.createElement("img", {
      src: post._embedded['wp:featuredmedia'][0].source_url,
      alt: post.title.alt_text
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "ebpg-entry-wrapper"
    }, showTitle && /*#__PURE__*/React.createElement("header", {
      "class": "ebpg-entry-header",
      dangerouslySetInnerHTML: {
        __html: titleHTML
      }
    }), showContent && /*#__PURE__*/React.createElement("div", {
      "class": "ebpg-entry-content"
    }, /*#__PURE__*/React.createElement("div", {
      "class": "ebpg-grid-post-excerpt"
    }, /*#__PURE__*/React.createElement("p", null, excerptWithLimitWords, __(expansionIndicator)), /*#__PURE__*/React.createElement("a", {
      href: post.link,
      "class": "ebpg-readmore-btn"
    }, __(readmoreText)))), showMeta && /*#__PURE__*/React.createElement("div", {
      "class": "ebpg-entry-meta"
    }, metaData))));
  }), !isSelected && queryResults.length < 1 && /*#__PURE__*/React.createElement("p", null, "No Posts Found")))];
}
;

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Example = {
  attributes: {
    showConnector: "true",
    buttonOneBorderShadowRds_Top: 20,
    buttonOneBorderShadowRds_Bottom: 0,
    buttonOneBorderShadowRds_Left: 20,
    buttonOneBorderShadowRds_Right: 0,
    buttonTwoBorderShadowRds_Top: 0,
    buttonTwoBorderShadowRds_Bottom: 20,
    buttonTwoBorderShadowRds_Left: 0,
    buttonTwoBorderShadowRds_Right: 20,
    buttonsGapRange: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 66 70"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "prefix__a",
    gradientUnits: "userSpaceOnUse",
    x1: 0.952,
    y1: 36.707,
    x2: 70.364,
    y2: 26.707
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M33.3 22.4H4.7C2.1 22.4 0 24.6 0 27v14.3c0 2.6 2.2 4.6 4.6 4.6H33c2.6 0 4.6-2.2 4.6-4.6V27c.3-2.6-1.9-4.6-4.3-4.6zm1.8 18.9c0 1.2-1 2-2 2H4.7c-1.2 0-2-1-2-2V27c0-1.2 1-2 2-2h28.4c1.2 0 2 1 2 2v14.3z",
    fill: "url(#prefix__a)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "prefix__b",
    gradientUnits: "userSpaceOnUse",
    x1: -3.791,
    y1: 41.962,
    x2: 71.357,
    y2: 31.136
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M61.7 22.4H39.8c-2.6 0-4.7 2.2-4.7 4.6v14.3c0 2.6 2.2 4.6 4.6 4.6h21.7c2.6 0 4.6-2.2 4.6-4.6V27c.3-2.6-1.9-4.6-4.3-4.6zm1.8 18.9c0 1.2-1 2-2 2H39.8c-1.2 0-2-1-2-2V27c0-1.2 1-2 2-2h21.7c1.2 0 2 1 2 2v14.3z",
    fill: "url(#prefix__b)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "prefix__c",
    gradientUnits: "userSpaceOnUse",
    x1: 0.989,
    y1: 36.964,
    x2: 70.401,
    y2: 26.964
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M25.6 35.8H11.8c-.7 0-1.4-.6-1.4-1.4 0-.7.6-1.4 1.4-1.4h13.8c.7 0 1.4.6 1.4 1.4-.1.8-.7 1.4-1.4 1.4z",
    fill: "url(#prefix__c)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "prefix__d",
    gradientUnits: "userSpaceOnUse",
    x1: -0.903,
    y1: 41.371,
    x2: 68.508,
    y2: 31.371
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M54.5 35.5H44.3c-.7 0-1.4-.6-1.4-1.4 0-.7.6-1.4 1.4-1.4h10.2c.7 0 1.4.6 1.4 1.4-.1.8-.7 1.4-1.4 1.4z",
    fill: "url(#prefix__d)"
  }));
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example */ "./src/example.js");
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;






registerBlockType("post-grid-block/post-grid", {
  title: __("Post Grid Block", "post-grid-block"),
  description: __("Display Posts or Pages by filtering with custom queries", "post-grid-block"),
  keywords: [__("posts", "post grid", "posts block")],
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"],
  category: "widgets",
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");
/* harmony import */ var _util_color_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/color-control */ "./util/color-control/index.js");
/* harmony import */ var _util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/dimensions-control-v2 */ "./util/dimensions-control-v2/index.js");
/* harmony import */ var _util_typography_control_v2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/typography-control-v2 */ "./util/typography-control-v2/index.js");
/* harmony import */ var _util_border_shadow_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/border-shadow-control */ "./util/border-shadow-control/index.js");
/* harmony import */ var _util_responsive_range_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/responsive-range-control */ "./util/responsive-range-control/index.js");
/* harmony import */ var _util_background_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/background-control */ "./util/background-control/index.js");
/* harmony import */ var _util_custom_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/custom-query */ "./util/custom-query/index.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    BaseControl = _wp$components.BaseControl,
    TabPanel = _wp$components.TabPanel,
    RangeControl = _wp$components.RangeControl;
var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;
var select = wp.data.select;
/**
 * Internal depencencies
 */












function Inspector(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var resOption = attributes.resOption,
      preset = attributes.preset,
      queryData = attributes.queryData,
      queryResults = attributes.queryResults,
      showThumbnail = attributes.showThumbnail,
      showTitle = attributes.showTitle,
      titleColor = attributes.titleColor,
      titleHoverColor = attributes.titleHoverColor,
      titleColorStyle = attributes.titleColorStyle,
      titleLength = attributes.titleLength,
      titleTextAlign = attributes.titleTextAlign,
      titleTag = attributes.titleTag,
      showContent = attributes.showContent,
      contentColor = attributes.contentColor,
      contentTextAlign = attributes.contentTextAlign,
      contentLength = attributes.contentLength,
      expansionIndicator = attributes.expansionIndicator,
      showReadMore = attributes.showReadMore,
      readmoreText = attributes.readmoreText,
      readmoreColor = attributes.readmoreColor,
      readmoreTextAlign = attributes.readmoreTextAlign,
      readmoreHoverColor = attributes.readmoreHoverColor,
      readmoreColorType = attributes.readmoreColorType,
      showMeta = attributes.showMeta,
      metaPosition = attributes.metaPosition,
      metaColor = attributes.metaColor,
      metaTextAlign = attributes.metaTextAlign,
      metaHoverColor = attributes.metaHoverColor,
      metaColorType = attributes.metaColorType,
      showAvatar = attributes.showAvatar,
      showAuthor = attributes.showAuthor,
      showDate = attributes.showDate,
      showCategories = attributes.showCategories;
  console.log("Inspector", queryData, queryResults); // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once

  useEffect(function () {
    setAttributes({
      resOption: select("core/edit-post").__experimentalGetPreviewDeviceType()
    });
  }, []); // this useEffect is for mimmiking css for all the eb blocks on resOption changing

  useEffect(function () {
    Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["mimmikCssForResBtns"])({
      domObj: document,
      resOption: resOption
    });
  }, [resOption]); // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM

  useEffect(function () {
    var cleanUp = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["mimmikCssOnPreviewBtnClickWhileBlockSelected"])({
      domObj: document,
      select: select,
      setAttributes: setAttributes
    });
    return function () {
      cleanUp();
    };
  }, []);
  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes
  };

  var changePreset = function changePreset(selected) {
    setAttributes({
      preset: selected
    });

    switch (selected) {
      case 'preset-1':
        setAttributes({});
        break;

      case 'preset-2':
        setAttributes({});
        break;

      case 'preset-3':
        setAttributes({});
        break;

      case 'preset-4':
        setAttributes({});
        break;

      default:
        return false;
    }
  };

  return /*#__PURE__*/React.createElement(InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab" // onSelect={onSelect}
    ,
    tabs: [{
      name: 'general',
      title: 'General',
      className: 'eb-tab general'
    }, {
      name: 'styles',
      title: 'Styles',
      className: 'eb-tab styles'
    }, {
      name: 'advance',
      title: 'Advance',
      className: 'eb-tab advance'
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-tab-controls" + tab.name
    }, tab.name === "general" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_custom_query__WEBPACK_IMPORTED_MODULE_9__["default"], {
      queryData: queryData,
      queryResults: queryResults,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Layout Style"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(SelectControl, {
      label: __("Template"),
      value: preset,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_0__["PRESETS"],
      onChange: function onChange(selected) {
        return changePreset(selected);
      }
    }), /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
      baseLabel: __("Columns", "eb-post-grid"),
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMNS"],
      resRequiredProps: resRequiredProps,
      units: [],
      min: 1,
      max: 6,
      step: 1
    }), /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
      baseLabel: __("Column Gap", "eb-post-grid"),
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMN_GAP"],
      resRequiredProps: resRequiredProps,
      units: _constants_constants__WEBPACK_IMPORTED_MODULE_0__["UNIT_TYPES"],
      min: 1,
      max: 100,
      step: 1
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Thumbnail?"),
      checked: showThumbnail,
      onChange: function onChange() {
        setAttributes({
          showThumbnail: !showThumbnail
        });
      }
    }), showThumbnail && /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
      baseLabel: __("Thumbnail Height", "eb-post-grid"),
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__["THUMBNAIL_IMAGE_SIZE"],
      resRequiredProps: resRequiredProps,
      units: _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT_UNIT_TYPES"],
      min: 1,
      max: 500,
      step: 1
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Title?"),
      checked: showTitle,
      onChange: function onChange() {
        setAttributes({
          showTitle: !showTitle
        });
      }
    }), showTitle && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
      label: __("Title Tag"),
      value: titleTag,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_0__["TITLE_TAGS"],
      onChange: function onChange(value) {
        setAttributes({
          titleTag: value
        });
      }
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: "Title Words",
      value: titleLength,
      onChange: function onChange(value) {
        return setAttributes({
          titleLength: value
        });
      },
      min: 0,
      max: 100
    })), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Excerpt?"),
      checked: showContent,
      onChange: function onChange() {
        setAttributes({
          showContent: !showContent
        });
      }
    }), showContent && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RangeControl, {
      label: "Excerpt Words",
      value: contentLength,
      onChange: function onChange(value) {
        return setAttributes({
          contentLength: value
        });
      },
      min: 0,
      max: 100
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: "Expansion Indicator",
      type: "text",
      value: expansionIndicator,
      onChange: function onChange(text) {
        return setAttributes({
          expansionIndicator: text
        });
      }
    })), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Read More Button?"),
      checked: showReadMore,
      onChange: function onChange() {
        setAttributes({
          showReadMore: !showReadMore
        });
      }
    }), showReadMore && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
      label: "Button Text",
      type: "text",
      value: readmoreText,
      onChange: function onChange(text) {
        return setAttributes({
          readmoreText: text
        });
      }
    })), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Meta?"),
      checked: showMeta,
      onChange: function onChange() {
        setAttributes({
          showMeta: !showMeta
        });
      }
    }), showMeta && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
      label: __("Meta Position"),
      value: metaPosition,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_0__["META_POSITION"],
      onChange: function onChange(value) {
        setAttributes({
          metaPosition: value
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Avatar?"),
      checked: showAvatar,
      onChange: function onChange() {
        setAttributes({
          showAvatar: !showAvatar
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Author?"),
      checked: showAuthor,
      onChange: function onChange() {
        setAttributes({
          showAuthor: !showAuthor
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Date?"),
      checked: showDate,
      onChange: function onChange() {
        setAttributes({
          showDate: !showDate
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Categories?"),
      checked: showCategories,
      onChange: function onChange() {
        setAttributes({
          showCategories: !showCategories
        });
      }
    })))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Title"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: __("Color"),
      color: titleColor,
      onChange: function onChange(color) {
        return setAttributes({
          titleColor: color
        });
      }
    }), /*#__PURE__*/React.createElement(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_5__["default"], {
      baseLabel: __("Typography", "eb-post-grid"),
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__["EBPG_TITLE_TYPOGRAPHY"],
      resRequiredProps: resRequiredProps
    }))), tab.name === "advance" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      resRequiredProps: resRequiredProps,
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__["WRAPPER_MARGIN"],
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      resRequiredProps: resRequiredProps,
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__["WRAPPER_PADDING"],
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Background"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_util_background_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__["WRAPPER_BG"],
      resRequiredProps: resRequiredProps,
      noOverlay: true
    })), /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Border & Shadow"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_util_border_shadow_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_0__["WRAPPER_BORDER_SHADOW"],
      resRequiredProps: resRequiredProps // noShadow
      // noBorder

    }))));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    useBlockProps = _wp$blockEditor.useBlockProps;

var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
      preset = attributes.preset,
      buttonTextOne = attributes.buttonTextOne,
      buttonTextTwo = attributes.buttonTextTwo,
      buttonURLOne = attributes.buttonURLOne,
      buttonURLTwo = attributes.buttonURLTwo,
      innerButtonText = attributes.innerButtonText,
      innerButtonIcon = attributes.innerButtonIcon,
      showConnector = attributes.showConnector,
      connectorType = attributes.connectorType;
  return /*#__PURE__*/React.createElement("div", useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
    className: "eb-button-group-wrapper ".concat(blockId, " ").concat(preset),
    "data-id": blockId
  }, /*#__PURE__*/React.createElement("a", {
    className: "eb-button-parent eb-button-one",
    href: buttonURLOne
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-button-text eb-button-one-text"
  }, buttonTextOne)), showConnector && /*#__PURE__*/React.createElement("div", {
    className: "eb-button-group__midldeInner"
  }, connectorType === 'icon' && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "".concat(innerButtonIcon ? innerButtonIcon : "fas fa-arrows-alt-h")
  })), connectorType === 'text' && /*#__PURE__*/React.createElement("span", null, innerButtonText)), /*#__PURE__*/React.createElement("a", {
    className: "eb-button-parent eb-button-two",
    href: buttonURLTwo
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-button-text eb-button-two-text"
  }, buttonTextTwo))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./util/background-control/bgControl.js":
/*!**********************************************!*\
  !*** ./util/background-control/bgControl.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bgControl; });
/* harmony import */ var _gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _image_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-avatar */ "./util/image-avatar/index.js");
/* harmony import */ var _withResButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../withResButtons */ "./util/withResButtons/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var MediaUpload = wp.blockEditor.MediaUpload;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup;
/**
 * Internal dependencies
 */






function bgControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      noMainBgi = _ref.noMainBgi,
      noTransition = _ref.noTransition;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes,
      resOption = resRequiredProps.resOption;
  var bg_hoverType = attributes["".concat(controlName, "bg_hoverType")],
      bg_transition = attributes["".concat(controlName, "bg_transition")],
      backgroundType = attributes["".concat(controlName, "backgroundType")],
      backgroundColor = attributes["".concat(controlName, "backgroundColor")],
      gradientColor = attributes["".concat(controlName, "gradientColor")],
      bgImageURL = attributes["".concat(controlName, "bgImageURL")],
      bgImageID = attributes["".concat(controlName, "bgImageID")],
      bgImgAttachment = attributes["".concat(controlName, "bgImgAttachment")],
      backgroundSize = attributes["".concat(controlName, "backgroundSize")],
      bgImgCustomSize = attributes["".concat(controlName, "bgImgCustomSize")],
      bgImgCustomSizeUnit = attributes["".concat(controlName, "bgImgCustomSizeUnit")],
      bgImgPos = attributes["".concat(controlName, "bgImgPos")],
      bgImgcustomPosX = attributes["".concat(controlName, "bgImgcustomPosX")],
      bgImgcustomPosXUnit = attributes["".concat(controlName, "bgImgcustomPosXUnit")],
      bgImgcustomPosY = attributes["".concat(controlName, "bgImgcustomPosY")],
      bgImgcustomPosYUnit = attributes["".concat(controlName, "bgImgcustomPosYUnit")],
      bgImgRepeat = attributes["".concat(controlName, "bgImgRepeat")],
      TABbackgroundSize = attributes["TAB".concat(controlName, "backgroundSize")],
      TABbgImgCustomSize = attributes["TAB".concat(controlName, "bgImgCustomSize")],
      TABbgImgCustomSizeUnit = attributes["TAB".concat(controlName, "bgImgCustomSizeUnit")],
      TABbgImgPos = attributes["TAB".concat(controlName, "bgImgPos")],
      TABbgImgcustomPosX = attributes["TAB".concat(controlName, "bgImgcustomPosX")],
      TABbgImgcustomPosXUnit = attributes["TAB".concat(controlName, "bgImgcustomPosXUnit")],
      TABbgImgcustomPosY = attributes["TAB".concat(controlName, "bgImgcustomPosY")],
      TABbgImgcustomPosYUnit = attributes["TAB".concat(controlName, "bgImgcustomPosYUnit")],
      TABbgImgRepeat = attributes["TAB".concat(controlName, "bgImgRepeat")],
      MOBbackgroundSize = attributes["MOB".concat(controlName, "backgroundSize")],
      MOBbgImgCustomSize = attributes["MOB".concat(controlName, "bgImgCustomSize")],
      MOBbgImgCustomSizeUnit = attributes["MOB".concat(controlName, "bgImgCustomSizeUnit")],
      MOBbgImgPos = attributes["MOB".concat(controlName, "bgImgPos")],
      MOBbgImgcustomPosX = attributes["MOB".concat(controlName, "bgImgcustomPosX")],
      MOBbgImgcustomPosXUnit = attributes["MOB".concat(controlName, "bgImgcustomPosXUnit")],
      MOBbgImgcustomPosY = attributes["MOB".concat(controlName, "bgImgcustomPosY")],
      MOBbgImgcustomPosYUnit = attributes["MOB".concat(controlName, "bgImgcustomPosYUnit")],
      MOBbgImgRepeat = attributes["MOB".concat(controlName, "bgImgRepeat")],
      hov_backgroundType = attributes["hov_".concat(controlName, "backgroundType")],
      hov_backgroundColor = attributes["hov_".concat(controlName, "backgroundColor")],
      hov_gradientColor = attributes["hov_".concat(controlName, "gradientColor")],
      hov_bgImageURL = attributes["hov_".concat(controlName, "bgImageURL")],
      hov_bgImageID = attributes["hov_".concat(controlName, "bgImageID")],
      hov_bgImgAttachment = attributes["hov_".concat(controlName, "bgImgAttachment")],
      hov_backgroundSize = attributes["hov_".concat(controlName, "backgroundSize")],
      hov_bgImgCustomSize = attributes["hov_".concat(controlName, "bgImgCustomSize")],
      hov_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "bgImgCustomSizeUnit")],
      hov_bgImgPos = attributes["hov_".concat(controlName, "bgImgPos")],
      hov_bgImgcustomPosX = attributes["hov_".concat(controlName, "bgImgcustomPosX")],
      hov_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "bgImgcustomPosXUnit")],
      hov_bgImgcustomPosY = attributes["hov_".concat(controlName, "bgImgcustomPosY")],
      hov_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "bgImgcustomPosYUnit")],
      hov_bgImgRepeat = attributes["hov_".concat(controlName, "bgImgRepeat")],
      hov_TABbackgroundSize = attributes["hov_TAB".concat(controlName, "backgroundSize")],
      hov_TABbgImgCustomSize = attributes["hov_TAB".concat(controlName, "bgImgCustomSize")],
      hov_TABbgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_TABbgImgPos = attributes["hov_TAB".concat(controlName, "bgImgPos")],
      hov_TABbgImgcustomPosX = attributes["hov_TAB".concat(controlName, "bgImgcustomPosX")],
      hov_TABbgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_TABbgImgcustomPosY = attributes["hov_TAB".concat(controlName, "bgImgcustomPosY")],
      hov_TABbgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_TABbgImgRepeat = attributes["hov_TAB".concat(controlName, "bgImgRepeat")],
      hov_MOBbackgroundSize = attributes["hov_MOB".concat(controlName, "backgroundSize")],
      hov_MOBbgImgCustomSize = attributes["hov_MOB".concat(controlName, "bgImgCustomSize")],
      hov_MOBbgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_MOBbgImgPos = attributes["hov_MOB".concat(controlName, "bgImgPos")],
      hov_MOBbgImgcustomPosX = attributes["hov_MOB".concat(controlName, "bgImgcustomPosX")],
      hov_MOBbgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_MOBbgImgcustomPosY = attributes["hov_MOB".concat(controlName, "bgImgcustomPosY")],
      hov_MOBbgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_MOBbgImgRepeat = attributes["hov_MOB".concat(controlName, "bgImgRepeat")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement(ButtonGroup, null, [{
    label: __("Normal"),
    value: "normal"
  }, {
    label: __("Hover"),
    value: "hover"
  }].map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return /*#__PURE__*/React.createElement(Button // isSmall
    // isLarge
    , {
      isPrimary: bg_hoverType === value,
      isSecondary: bg_hoverType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "bg_hoverType"), value));
      }
    }, label);
  }))), bg_hoverType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, [{
    label: __("Classic"),
    value: "classic"
  }, {
    label: __("Gradient"),
    value: "gradient"
  }].map(function (_ref3) {
    var value = _ref3.value,
        label = _ref3.label;
    return /*#__PURE__*/React.createElement(Button // isSmall
    // isLarge
    , {
      isPrimary: backgroundType === value,
      isSecondary: backgroundType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "backgroundType"), value));
      }
    }, label);
  }))), backgroundType === "classic" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Background Color"),
    color: backgroundColor,
    onChange: function onChange(backgroundColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "backgroundColor"), backgroundColor));
    }
  }), noMainBgi === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Image")
  }), /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(_ref4) {
      var _setAttributes4;

      var url = _ref4.url,
          id = _ref4.id;
      return setAttributes((_setAttributes4 = {}, _defineProperty(_setAttributes4, "".concat(controlName, "bgImageURL"), url), _defineProperty(_setAttributes4, "".concat(controlName, "bgImageID"), id), _setAttributes4));
    },
    type: "image",
    value: bgImageID,
    render: function render(_ref5) {
      var open = _ref5.open;
      return !bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_image_avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageUrl: bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImageURL"), null));
    }
  }), resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(bgImgPos) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgPos"), bgImgPos));
    }
  })), bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosXUnit"), bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: bgImgcustomPosX,
    min: 0,
    max: bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosX"), bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosYUnit"), bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: bgImgcustomPosY,
    min: 0,
    max: bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosY"), bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(bgImgRepeat) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgRepeat"), bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(backgroundSize) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "backgroundSize"), backgroundSize));
    }
  })), backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgCustomSizeUnit"), bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: bgImgCustomSize,
    min: 0,
    max: bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgCustomSize"), bgImgCustomSize));
    }
  })))), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABbgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABbgImgPos) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgPos"), TABbgImgPos));
    }
  })), TABbgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosXUnit"), TABbgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABbgImgcustomPosX,
    min: 0,
    max: TABbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(TABbgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosX"), TABbgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosYUnit"), TABbgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABbgImgcustomPosY,
    min: 0,
    max: TABbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: TABbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABbgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosY"), TABbgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABbgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(TABbgImgRepeat) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgRepeat"), TABbgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABbackgroundSize) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "backgroundSize"), TABbackgroundSize));
    }
  })), TABbackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgCustomSizeUnit"), TABbgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABbgImgCustomSize,
    min: 0,
    max: TABbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: TABbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABbgImgCustomSize) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgCustomSize"), TABbgImgCustomSize));
    }
  })))), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBbgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBbgImgPos) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgPos"), MOBbgImgPos));
    }
  })), MOBbgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosXUnit"), MOBbgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBbgImgcustomPosX,
    min: 0,
    max: MOBbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(MOBbgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosX"), MOBbgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosYUnit"), MOBbgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBbgImgcustomPosY,
    min: 0,
    max: MOBbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: MOBbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBbgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosY"), MOBbgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBbgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(MOBbgImgRepeat) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgRepeat"), MOBbgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBbackgroundSize) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "backgroundSize"), MOBbackgroundSize));
    }
  })), MOBbackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgCustomSizeUnit"), MOBbgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBbgImgCustomSize,
    min: 0,
    max: MOBbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: MOBbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBbgImgCustomSize) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgCustomSize"), MOBbgImgCustomSize));
    }
  }))))))), backgroundType === "gradient" && /*#__PURE__*/React.createElement(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gradientColor: gradientColor,
    onChange: function onChange(gradientColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "gradientColor"), gradientColor));
    }
  })), bg_hoverType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, [{
    label: __("Classic"),
    value: "classic"
  }, {
    label: __("Gradient"),
    value: "gradient"
  }].map(function (_ref6) {
    var value = _ref6.value,
        label = _ref6.label;
    return /*#__PURE__*/React.createElement(Button // isSmall
    // isLarge
    , {
      isPrimary: hov_backgroundType === value,
      isSecondary: hov_backgroundType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "hov_".concat(controlName, "backgroundType"), value));
      }
    }, label);
  }))), hov_backgroundType === "classic" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Background Color"),
    color: hov_backgroundColor,
    onChange: function onChange(hov_backgroundColor) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "backgroundColor"), hov_backgroundColor));
    }
  }), noMainBgi === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Image")
  }), /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(_ref7) {
      var _setAttributes39;

      var url = _ref7.url,
          id = _ref7.id;
      return setAttributes((_setAttributes39 = {}, _defineProperty(_setAttributes39, "hov_".concat(controlName, "bgImageURL"), url), _defineProperty(_setAttributes39, "hov_".concat(controlName, "bgImageID"), id), _setAttributes39));
    },
    type: "image",
    value: hov_bgImageID,
    render: function render(_ref8) {
      var open = _ref8.open;
      return !hov_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), hov_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_image_avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageUrl: hov_bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImageURL"), null));
    }
  }), resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_bgImgPos) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgPos"), hov_bgImgPos));
    }
  })), hov_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgcustomPosXUnit"), hov_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_bgImgcustomPosX,
    min: 0,
    max: hov_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgcustomPosX"), hov_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgcustomPosYUnit"), hov_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_bgImgcustomPosY,
    min: 0,
    max: hov_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgcustomPosY"), hov_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgAttachment"), hov_bgImgAttachment));
    }
  }), hov_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgRepeat"), hov_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_backgroundSize) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "backgroundSize"), hov_backgroundSize));
    }
  })), hov_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgCustomSizeUnit"), hov_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_bgImgCustomSize,
    min: 0,
    max: hov_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgCustomSize"), hov_bgImgCustomSize));
    }
  })))), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABbgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_TABbgImgPos) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgPos"), hov_TABbgImgPos));
    }
  })), hov_TABbgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABbgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgcustomPosXUnit"), hov_TABbgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABbgImgcustomPosX,
    min: 0,
    max: hov_TABbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_TABbgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgcustomPosX"), hov_TABbgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABbgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgcustomPosYUnit"), hov_TABbgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABbgImgcustomPosY,
    min: 0,
    max: hov_TABbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_TABbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABbgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgcustomPosY"), hov_TABbgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgAttachment"), hov_bgImgAttachment));
    }
  }), hov_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABbgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_TABbgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgRepeat"), hov_TABbgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_TABbackgroundSize) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "backgroundSize"), hov_TABbackgroundSize));
    }
  })), hov_TABbackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABbgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgCustomSizeUnit"), hov_TABbgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABbgImgCustomSize,
    min: 0,
    max: hov_TABbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_TABbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABbgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgCustomSize"), hov_TABbgImgCustomSize));
    }
  })))), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBbgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_MOBbgImgPos) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgPos"), hov_MOBbgImgPos));
    }
  })), hov_MOBbgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBbgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgcustomPosXUnit"), hov_MOBbgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBbgImgcustomPosX,
    min: 0,
    max: hov_MOBbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_MOBbgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgcustomPosX"), hov_MOBbgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBbgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgcustomPosYUnit"), hov_MOBbgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBbgImgcustomPosY,
    min: 0,
    max: hov_MOBbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_MOBbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBbgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgcustomPosY"), hov_MOBbgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgAttachment"), hov_bgImgAttachment));
    }
  }), hov_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBbgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_MOBbgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgRepeat"), hov_MOBbgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_MOBbackgroundSize) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "backgroundSize"), hov_MOBbackgroundSize));
    }
  })), hov_MOBbackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBbgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgCustomSizeUnit"), hov_MOBbgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBbgImgCustomSize,
    min: 0,
    max: hov_MOBbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_MOBbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBbgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgCustomSize"), hov_MOBbgImgCustomSize));
    }
  }))))))), hov_backgroundType === "gradient" && /*#__PURE__*/React.createElement(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gradientColor: hov_gradientColor,
    onChange: function onChange(hov_gradientColor) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "gradientColor"), hov_gradientColor));
    }
  }), !noTransition && /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Background Transition"),
    value: bg_transition,
    min: 0,
    max: 5,
    step: 0.1,
    onChange: function onChange(bg_transition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bg_transition"), bg_transition));
    }
  })));
}

/***/ }),

/***/ "./util/background-control/index.js":
/*!******************************************!*\
  !*** ./util/background-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackgroundControl; });
/* harmony import */ var _overlayControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlayControl */ "./util/background-control/overlayControl.js");
/* harmony import */ var _bgControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bgControl */ "./util/background-control/bgControl.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var ToggleControl = wp.components.ToggleControl;
/**
 * Internal dependencies
 */



function BackgroundControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      _ref$noOverlay = _ref.noOverlay,
      noOverlay = _ref$noOverlay === void 0 ? false : _ref$noOverlay,
      _ref$noMainBgi = _ref.noMainBgi,
      noMainBgi = _ref$noMainBgi === void 0 ? false : _ref$noMainBgi,
      _ref$noOverlayBgi = _ref.noOverlayBgi,
      noOverlayBgi = _ref$noOverlayBgi === void 0 ? false : _ref$noOverlayBgi,
      _ref$noTransition = _ref.noTransition,
      noTransition = _ref$noTransition === void 0 ? false : _ref$noTransition;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes;
  var isBgOverlay = attributes["".concat(controlName, "isBgOverlay")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_bgControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: controlName,
    noMainBgi: noMainBgi,
    noTransition: noTransition
  }), noOverlay === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Enable Overlay"),
    checked: isBgOverlay,
    onChange: function onChange() {
      return setAttributes(_defineProperty({}, "".concat(controlName, "isBgOverlay"), !isBgOverlay));
    }
  }), isBgOverlay && /*#__PURE__*/React.createElement(_overlayControl__WEBPACK_IMPORTED_MODULE_0__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: controlName,
    noOverlayBgi: noOverlayBgi,
    noTransition: noTransition
  })));
}

/***/ }),

/***/ "./util/background-control/overlayControl.js":
/*!***************************************************!*\
  !*** ./util/background-control/overlayControl.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return overlayControl; });
/* harmony import */ var _gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _image_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-avatar */ "./util/image-avatar/index.js");
/* harmony import */ var _withResButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../withResButtons */ "./util/withResButtons/index.js");
/* harmony import */ var _reset_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reset-control */ "./util/reset-control/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var MediaUpload = wp.blockEditor.MediaUpload;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup,
    ToggleControl = _wp$components.ToggleControl;
/**
 * Internal dependencies
 */







function overlayControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      noOverlayBgi = _ref.noOverlayBgi,
      noTransition = _ref.noTransition;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes,
      resOption = resRequiredProps.resOption;
  var ovl_hoverType = attributes["".concat(controlName, "ovl_hoverType")],
      ovl_bg_transition = attributes["".concat(controlName, "ovl_bg_transition")],
      ovl_filtersTransition = attributes["".concat(controlName, "ovl_filtersTransition")],
      ovl_opacityTransition = attributes["".concat(controlName, "ovl_opacityTransition")],
      overlayType = attributes["".concat(controlName, "overlayType")],
      overlayColor = attributes["".concat(controlName, "overlayColor")],
      overlayGradient = attributes["".concat(controlName, "overlayGradient")],
      ovl_bgImageURL = attributes["".concat(controlName, "ovl_bgImageURL")],
      ovl_bgImageID = attributes["".concat(controlName, "ovl_bgImageID")],
      ovl_bgImgAttachment = attributes["".concat(controlName, "ovl_bgImgAttachment")],
      ovl_opacity = attributes["".concat(controlName, "ovl_opacity")],
      ovl_blendMode = attributes["".concat(controlName, "ovl_blendMode")],
      ovl_allowFilters = attributes["".concat(controlName, "ovl_allowFilters")],
      ovl_fltrBrightness = attributes["".concat(controlName, "ovl_fltrBrightness")],
      ovl_fltrContrast = attributes["".concat(controlName, "ovl_fltrContrast")],
      ovl_fltrSaturation = attributes["".concat(controlName, "ovl_fltrSaturation")],
      ovl_fltrBlur = attributes["".concat(controlName, "ovl_fltrBlur")],
      ovl_fltrHue = attributes["".concat(controlName, "ovl_fltrHue")],
      ovl_backgroundSize = attributes["".concat(controlName, "ovl_backgroundSize")],
      ovl_bgImgCustomSize = attributes["".concat(controlName, "ovl_bgImgCustomSize")],
      ovl_bgImgCustomSizeUnit = attributes["".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      ovl_bgImgPos = attributes["".concat(controlName, "ovl_bgImgPos")],
      ovl_bgImgcustomPosX = attributes["".concat(controlName, "ovl_bgImgcustomPosX")],
      ovl_bgImgcustomPosXUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      ovl_bgImgcustomPosY = attributes["".concat(controlName, "ovl_bgImgcustomPosY")],
      ovl_bgImgcustomPosYUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      ovl_bgImgRepeat = attributes["".concat(controlName, "ovl_bgImgRepeat")],
      TABovl_backgroundSize = attributes["TAB".concat(controlName, "ovl_backgroundSize")],
      TABovl_bgImgCustomSize = attributes["TAB".concat(controlName, "ovl_bgImgCustomSize")],
      TABovl_bgImgCustomSizeUnit = attributes["TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      TABovl_bgImgPos = attributes["TAB".concat(controlName, "ovl_bgImgPos")],
      TABovl_bgImgcustomPosX = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      TABovl_bgImgcustomPosXUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      TABovl_bgImgcustomPosY = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      TABovl_bgImgcustomPosYUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      TABovl_bgImgRepeat = attributes["TAB".concat(controlName, "ovl_bgImgRepeat")],
      MOBovl_backgroundSize = attributes["MOB".concat(controlName, "ovl_backgroundSize")],
      MOBovl_bgImgCustomSize = attributes["MOB".concat(controlName, "ovl_bgImgCustomSize")],
      MOBovl_bgImgCustomSizeUnit = attributes["MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      MOBovl_bgImgPos = attributes["MOB".concat(controlName, "ovl_bgImgPos")],
      MOBovl_bgImgcustomPosX = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      MOBovl_bgImgcustomPosXUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      MOBovl_bgImgcustomPosY = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      MOBovl_bgImgcustomPosYUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      MOBovl_bgImgRepeat = attributes["MOB".concat(controlName, "ovl_bgImgRepeat")],
      hov_overlayType = attributes["hov_".concat(controlName, "overlayType")],
      hov_overlayColor = attributes["hov_".concat(controlName, "overlayColor")],
      hov_overlayGradient = attributes["hov_".concat(controlName, "overlayGradient")],
      hov_ovl_bgImageURL = attributes["hov_".concat(controlName, "ovl_bgImageURL")],
      hov_ovl_bgImageID = attributes["hov_".concat(controlName, "ovl_bgImageID")],
      hov_ovl_bgImgAttachment = attributes["hov_".concat(controlName, "ovl_bgImgAttachment")],
      hov_ovl_opacity = attributes["hov_".concat(controlName, "ovl_opacity")],
      hov_ovl_blendMode = attributes["hov_".concat(controlName, "ovl_blendMode")],
      hov_ovl_allowFilters = attributes["hov_".concat(controlName, "ovl_allowFilters")],
      hov_ovl_fltrBrightness = attributes["hov_".concat(controlName, "ovl_fltrBrightness")],
      hov_ovl_fltrContrast = attributes["hov_".concat(controlName, "ovl_fltrContrast")],
      hov_ovl_fltrSaturation = attributes["hov_".concat(controlName, "ovl_fltrSaturation")],
      hov_ovl_fltrBlur = attributes["hov_".concat(controlName, "ovl_fltrBlur")],
      hov_ovl_fltrHue = attributes["hov_".concat(controlName, "ovl_fltrHue")],
      hov_ovl_backgroundSize = attributes["hov_".concat(controlName, "ovl_backgroundSize")],
      hov_ovl_bgImgCustomSize = attributes["hov_".concat(controlName, "ovl_bgImgCustomSize")],
      hov_ovl_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_ovl_bgImgPos = attributes["hov_".concat(controlName, "ovl_bgImgPos")],
      hov_ovl_bgImgcustomPosX = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_ovl_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_ovl_bgImgcustomPosY = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_ovl_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_ovl_bgImgRepeat = attributes["hov_".concat(controlName, "ovl_bgImgRepeat")],
      hov_TABovl_backgroundSize = attributes["hov_TAB".concat(controlName, "ovl_backgroundSize")],
      hov_TABovl_bgImgCustomSize = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_TABovl_bgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_TABovl_bgImgPos = attributes["hov_TAB".concat(controlName, "ovl_bgImgPos")],
      hov_TABovl_bgImgcustomPosX = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_TABovl_bgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_TABovl_bgImgcustomPosY = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_TABovl_bgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_TABovl_bgImgRepeat = attributes["hov_TAB".concat(controlName, "ovl_bgImgRepeat")],
      hov_MOBovl_backgroundSize = attributes["hov_MOB".concat(controlName, "ovl_backgroundSize")],
      hov_MOBovl_bgImgCustomSize = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_MOBovl_bgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_MOBovl_bgImgPos = attributes["hov_MOB".concat(controlName, "ovl_bgImgPos")],
      hov_MOBovl_bgImgcustomPosX = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_MOBovl_bgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_MOBovl_bgImgcustomPosY = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_MOBovl_bgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_MOBovl_bgImgRepeat = attributes["hov_MOB".concat(controlName, "ovl_bgImgRepeat")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Overlay")
  }), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement(ButtonGroup, null, [{
    label: __("Normal"),
    value: "normal"
  }, {
    label: __("Hover"),
    value: "hover"
  }].map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return /*#__PURE__*/React.createElement(Button // isSmall
    // isLarge
    , {
      isPrimary: ovl_hoverType === value,
      isSecondary: ovl_hoverType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_hoverType"), value));
      }
    }, label);
  }))), ovl_hoverType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Overlay Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-background-control-new"
  }, [{
    label: "Classic",
    value: "classic"
  }, {
    label: "Gradient",
    value: "gradient"
  }].map(function (_ref3) {
    var value = _ref3.value,
        label = _ref3.label;
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isPrimary: overlayType === value,
      isSecondary: overlayType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "overlayType"), value));
      }
    }, label);
  }))), overlayType === "classic" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Overlay Color"),
    color: overlayColor,
    onChange: function onChange(overlayColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "overlayColor"), overlayColor));
    }
  }), noOverlayBgi === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Overlay Image")
  }), /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(_ref4) {
      var _setAttributes4;

      var url = _ref4.url,
          id = _ref4.id;
      return setAttributes((_setAttributes4 = {}, _defineProperty(_setAttributes4, "".concat(controlName, "ovl_bgImageURL"), url), _defineProperty(_setAttributes4, "".concat(controlName, "ovl_bgImageID"), id), _setAttributes4));
    },
    type: "image",
    value: ovl_bgImageID,
    render: function render(_ref5) {
      var open = _ref5.open;
      return !ovl_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), ovl_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_image_avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageUrl: ovl_bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImageURL"), null));
    }
  }), resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: ovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(ovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgPos"), ovl_bgImgPos));
    }
  })), ovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: ovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(ovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgcustomPosXUnit"), ovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: ovl_bgImgcustomPosX,
    min: 0,
    max: ovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(ovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgcustomPosX"), ovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: ovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(ovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgcustomPosYUnit"), ovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: ovl_bgImgcustomPosY,
    min: 0,
    max: ovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: ovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(ovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgcustomPosY"), ovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgAttachment"), ovl_bgImgAttachment));
    }
  }), ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: ovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(ovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgRepeat"), ovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: ovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(ovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_backgroundSize"), ovl_backgroundSize));
    }
  })), ovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: ovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(ovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgCustomSizeUnit"), ovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: ovl_bgImgCustomSize,
    min: 0,
    max: ovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: ovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(ovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgCustomSize"), ovl_bgImgCustomSize));
    }
  })))), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgPos"), TABovl_bgImgPos));
    }
  })), TABovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), TABovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABovl_bgImgcustomPosX,
    min: 0,
    max: TABovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(TABovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgcustomPosX"), TABovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), TABovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABovl_bgImgcustomPosY,
    min: 0,
    max: TABovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: TABovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgcustomPosY"), TABovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgAttachment"), ovl_bgImgAttachment));
    }
  }), ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(TABovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgRepeat"), TABovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_backgroundSize"), TABovl_backgroundSize));
    }
  })), TABovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), TABovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABovl_bgImgCustomSize,
    min: 0,
    max: TABovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: TABovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgCustomSize"), TABovl_bgImgCustomSize));
    }
  })))), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgPos"), MOBovl_bgImgPos));
    }
  })), MOBovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), MOBovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBovl_bgImgcustomPosX,
    min: 0,
    max: MOBovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(MOBovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgcustomPosX"), MOBovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), MOBovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBovl_bgImgcustomPosY,
    min: 0,
    max: MOBovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: MOBovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgcustomPosY"), MOBovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgAttachment"), ovl_bgImgAttachment));
    }
  }), ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(MOBovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgRepeat"), MOBovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_backgroundSize"), MOBovl_backgroundSize));
    }
  })), MOBovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), MOBovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBovl_bgImgCustomSize,
    min: 0,
    max: MOBovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: MOBovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgCustomSize"), MOBovl_bgImgCustomSize));
    }
  }))))))), overlayType === "gradient" && /*#__PURE__*/React.createElement(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gradientColor: overlayGradient,
    onChange: function onChange(overlayGradient) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "overlayGradient"), overlayGradient));
    }
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Opacity"),
    value: ovl_opacity,
    onChange: function onChange(ovl_opacity) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_opacity"), ovl_opacity));
    },
    step: 0.01,
    min: 0,
    max: 1
  }), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Blend Mode"),
    value: ovl_blendMode,
    options: [{
      label: __("Normal"),
      value: ""
    }, {
      label: __("Multiply"),
      value: "multiply"
    }, {
      label: __("Screen"),
      value: "screen"
    }, {
      label: __("Overlay"),
      value: "overlay"
    }, {
      label: __("Darken"),
      value: "darken"
    }, {
      label: __("Lighten"),
      value: "lighten"
    }, {
      label: __("Color Dodge"),
      value: "color-dodge"
    }, {
      label: __("Saturation"),
      value: "saturation"
    }, {
      label: __("Color"),
      value: "color"
    }, {
      label: __("Luminosity"),
      value: "luminosity"
    }],
    onChange: function onChange(ovl_blendMode) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_blendMode"), ovl_blendMode));
    }
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("CSS Filters"),
    checked: ovl_allowFilters,
    onChange: function onChange() {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_allowFilters"), !ovl_allowFilters));
    }
  }), ovl_allowFilters && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Blur"),
    value: ovl_fltrBlur,
    onChange: function onChange(ovl_fltrBlur) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrBlur"), ovl_fltrBlur));
    },
    step: 0.1,
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Brightness"),
    value: ovl_fltrBrightness,
    onChange: function onChange(ovl_fltrBrightness) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrBrightness"), ovl_fltrBrightness));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Contrast"),
    value: ovl_fltrContrast,
    onChange: function onChange(ovl_fltrContrast) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrContrast"), ovl_fltrContrast));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Saturation"),
    value: ovl_fltrSaturation,
    onChange: function onChange(ovl_fltrSaturation) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrSaturation"), ovl_fltrSaturation));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Hue"),
    value: ovl_fltrHue,
    onChange: function onChange(ovl_fltrHue) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrHue"), ovl_fltrHue));
    },
    step: 1,
    min: 0,
    max: 360
  }))), ovl_hoverType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Overlay Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-background-control-new"
  }, [{
    label: "Classic",
    value: "classic"
  }, {
    label: "Gradient",
    value: "gradient"
  }].map(function (_ref6) {
    var value = _ref6.value,
        label = _ref6.label;
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isPrimary: hov_overlayType === value,
      isSecondary: hov_overlayType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "hov_".concat(controlName, "overlayType"), value));
      }
    }, label);
  }))), hov_overlayType === "classic" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Overlay Color"),
    color: hov_overlayColor,
    onChange: function onChange(hov_overlayColor) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "overlayColor"), hov_overlayColor));
    }
  }), noOverlayBgi === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Overlay Image")
  }), /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(_ref7) {
      var _setAttributes47;

      var url = _ref7.url,
          id = _ref7.id;
      return setAttributes((_setAttributes47 = {}, _defineProperty(_setAttributes47, "hov_".concat(controlName, "ovl_bgImageURL"), url), _defineProperty(_setAttributes47, "hov_".concat(controlName, "ovl_bgImageID"), id), _setAttributes47));
    },
    type: "image",
    value: hov_ovl_bgImageID,
    render: function render(_ref8) {
      var open = _ref8.open;
      return !hov_ovl_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), hov_ovl_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_image_avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageUrl: hov_ovl_bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImageURL"), null));
    }
  }), resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_ovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_ovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgPos"), hov_ovl_bgImgPos));
    }
  })), hov_ovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_ovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_ovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgcustomPosXUnit"), hov_ovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_ovl_bgImgcustomPosX,
    min: 0,
    max: hov_ovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_ovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgcustomPosX"), hov_ovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_ovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_ovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgcustomPosYUnit"), hov_ovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_ovl_bgImgcustomPosY,
    min: 0,
    max: hov_ovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_ovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_ovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgcustomPosY"), hov_ovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgAttachment"), hov_ovl_bgImgAttachment));
    }
  }), hov_ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_ovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_ovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgRepeat"), hov_ovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_ovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_ovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_backgroundSize"), hov_ovl_backgroundSize));
    }
  })), hov_ovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_ovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_ovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgCustomSizeUnit"), hov_ovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_ovl_bgImgCustomSize,
    min: 0,
    max: hov_ovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_ovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_ovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgCustomSize"), hov_ovl_bgImgCustomSize));
    }
  })))), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_TABovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgPos"), hov_TABovl_bgImgPos));
    }
  })), hov_TABovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), hov_TABovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABovl_bgImgcustomPosX,
    min: 0,
    max: hov_TABovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_TABovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosX"), hov_TABovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), hov_TABovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABovl_bgImgcustomPosY,
    min: 0,
    max: hov_TABovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_TABovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosY"), hov_TABovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgAttachment"), hov_ovl_bgImgAttachment));
    }
  }), hov_ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_TABovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgRepeat"), hov_TABovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_TABovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_backgroundSize"), hov_TABovl_backgroundSize));
    }
  })), hov_TABovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), hov_TABovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABovl_bgImgCustomSize,
    min: 0,
    max: hov_TABovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_TABovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgCustomSize"), hov_TABovl_bgImgCustomSize));
    }
  })))), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_MOBovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgPos"), hov_MOBovl_bgImgPos));
    }
  })), hov_MOBovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), hov_MOBovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBovl_bgImgcustomPosX,
    min: 0,
    max: hov_MOBovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_MOBovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosX"), hov_MOBovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), hov_MOBovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBovl_bgImgcustomPosY,
    min: 0,
    max: hov_MOBovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_MOBovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosY"), hov_MOBovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgAttachment"), hov_ovl_bgImgAttachment));
    }
  }), hov_ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_MOBovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgRepeat"), hov_MOBovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_MOBovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_backgroundSize"), hov_MOBovl_backgroundSize));
    }
  })), hov_MOBovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), hov_MOBovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBovl_bgImgCustomSize,
    min: 0,
    max: hov_MOBovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_MOBovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgCustomSize"), hov_MOBovl_bgImgCustomSize));
    }
  }))))))), hov_overlayType === "gradient" && /*#__PURE__*/React.createElement(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gradientColor: hov_overlayGradient,
    onChange: function onChange(hov_overlayGradient) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "overlayGradient"), hov_overlayGradient));
    }
  }), /*#__PURE__*/React.createElement("hr", null), !noTransition && /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Overlay Transition"),
    value: ovl_bg_transition,
    min: 0,
    max: 5,
    step: 0.1,
    onChange: function onChange(ovl_bg_transition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bg_transition"), ovl_bg_transition));
    }
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: function onReset() {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_opacity"), undefined));
    }
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Opacity"),
    value: hov_ovl_opacity,
    onChange: function onChange(hov_ovl_opacity) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_opacity"), hov_ovl_opacity));
    },
    step: 0.01,
    min: 0,
    max: 1
  })), !noTransition && hov_ovl_opacity && /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Opacity Transition"),
    value: ovl_opacityTransition,
    onChange: function onChange(ovl_opacityTransition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_opacityTransition"), ovl_opacityTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Blend Mode"),
    value: hov_ovl_blendMode,
    options: [{
      label: __("Normal"),
      value: ""
    }, {
      label: __("multiply"),
      value: "multiply"
    }, {
      label: __("screen"),
      value: "screen"
    }, {
      label: __("overlay"),
      value: "overlay"
    }, {
      label: __("darken"),
      value: "darken"
    }, {
      label: __("lighten"),
      value: "lighten"
    }, {
      label: __("color-dodge"),
      value: "Color Dodge"
    }, {
      label: __("saturation"),
      value: "saturation"
    }, {
      label: __("color"),
      value: "color"
    }, {
      label: __("luminosity"),
      value: "luminosity"
    }],
    onChange: function onChange(hov_ovl_blendMode) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_blendMode"), hov_ovl_blendMode));
    }
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("CSS Filters"),
    checked: hov_ovl_allowFilters,
    onChange: function onChange() {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_allowFilters"), !hov_ovl_allowFilters));
    }
  }), hov_ovl_allowFilters && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Blur"),
    value: hov_ovl_fltrBlur,
    onChange: function onChange(hov_ovl_fltrBlur) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrBlur"), hov_ovl_fltrBlur));
    },
    step: 0.1,
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Brightness"),
    value: hov_ovl_fltrBrightness,
    onChange: function onChange(hov_ovl_fltrBrightness) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrBrightness"), hov_ovl_fltrBrightness));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Contrast"),
    value: hov_ovl_fltrContrast,
    onChange: function onChange(hov_ovl_fltrContrast) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrContrast"), hov_ovl_fltrContrast));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Saturation"),
    value: hov_ovl_fltrSaturation,
    onChange: function onChange(hov_ovl_fltrSaturation) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrSaturation"), hov_ovl_fltrSaturation));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Hue"),
    value: hov_ovl_fltrHue,
    onChange: function onChange(hov_ovl_fltrHue) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrHue"), hov_ovl_fltrHue));
    },
    step: 1,
    min: 0,
    max: 360
  }), /*#__PURE__*/React.createElement("hr", null), !noTransition && /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Css Filters Transition"),
    value: ovl_filtersTransition,
    onChange: function onChange(ovl_filtersTransition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_filtersTransition"), ovl_filtersTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  }))));
}

/***/ }),

/***/ "./util/border-shadow-control/index.js":
/*!*********************************************!*\
  !*** ./util/border-shadow-control/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BorderShadowControl; });
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _reset_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reset-control */ "./util/reset-control/index.js");
/* harmony import */ var _dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dimensions-control-v2 */ "./util/dimensions-control-v2/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./util/icons.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup,
    SelectControl = _wp$components.SelectControl,
    Dropdown = _wp$components.Dropdown;
/**
 * Internal dependencies
 */





function BorderShadowControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      noBorder = _ref.noBorder,
      noShadow = _ref.noShadow;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes;
  var borderStyle = attributes["".concat(controlName, "borderStyle")],
      borderColor = attributes["".concat(controlName, "borderColor")],
      shadowType = attributes["".concat(controlName, "shadowType")],
      shadowColor = attributes["".concat(controlName, "shadowColor")],
      hOffset = attributes["".concat(controlName, "hOffset")],
      vOffset = attributes["".concat(controlName, "vOffset")],
      blur = attributes["".concat(controlName, "blur")],
      spread = attributes["".concat(controlName, "spread")],
      hoverShadowColor = attributes["".concat(controlName, "hoverShadowColor")],
      hoverHOffset = attributes["".concat(controlName, "hoverHOffset")],
      hoverVOffset = attributes["".concat(controlName, "hoverVOffset")],
      hoverBlur = attributes["".concat(controlName, "hoverBlur")],
      hoverSpread = attributes["".concat(controlName, "hoverSpread")],
      inset = attributes["".concat(controlName, "inset")],
      BorderType = attributes["".concat(controlName, "BorderType")],
      HborderStyle = attributes["".concat(controlName, "HborderStyle")],
      HborderColor = attributes["".concat(controlName, "HborderColor")],
      borderTransition = attributes["".concat(controlName, "borderTransition")],
      radiusTransition = attributes["".concat(controlName, "radiusTransition")],
      shadowTransition = attributes["".concat(controlName, "shadowTransition")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, noBorder !== true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    id: "eb-infobox-border-hover-ptions"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-infobox-border-hover-ptions"
  }, [{
    label: "Normal",
    value: "normal"
  }, {
    label: "Hover",
    value: "hover"
  }].map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isSecondary: BorderType !== value,
      isPrimary: BorderType === value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "BorderType"), value));
      }
    }, label);
  }))), BorderType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Border Style"),
    value: borderStyle,
    options: [{
      label: __("None"),
      value: "none"
    }, {
      label: __("Dashed"),
      value: "dashed"
    }, {
      label: __("Solid"),
      value: "solid"
    }, {
      label: __("Dotted"),
      value: "dotted"
    }, {
      label: __("Double"),
      value: "double"
    }, {
      label: __("Groove"),
      value: "groove"
    }, {
      label: __("Inset"),
      value: "inset"
    }, {
      label: __("Outset"),
      value: "outset"
    }, {
      label: __("Ridge"),
      value: "ridge"
    }],
    onChange: function onChange(borderStyle) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "borderStyle"), borderStyle));
    }
  }), borderStyle !== "none" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Border Color"),
    color: borderColor,
    onChange: function onChange(borderColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "borderColor"), borderColor));
    }
  }), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "Bdr_"),
    baseLabel: "Border Width"
  })), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    forBorderRadius: true,
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "Rds_"),
    baseLabel: "Border Radius"
  })), BorderType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Border Style"),
    value: HborderStyle,
    options: [{
      label: __("None"),
      value: "none"
    }, {
      label: __("Dashed"),
      value: "dashed"
    }, {
      label: __("Solid"),
      value: "solid"
    }, {
      label: __("Dotted"),
      value: "dotted"
    }, {
      label: __("Double"),
      value: "double"
    }, {
      label: __("Groove"),
      value: "groove"
    }, {
      label: __("Inset"),
      value: "inset"
    }, {
      label: __("Outset"),
      value: "outset"
    }, {
      label: __("Ridge"),
      value: "ridge"
    }],
    onChange: function onChange(HborderStyle) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "HborderStyle"), HborderStyle));
    }
  }), HborderStyle !== "none" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Border Color"),
    color: HborderColor,
    onChange: function onChange(HborderColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "HborderColor"), HborderColor));
    }
  }), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "HBdr_"),
    baseLabel: "Border Width"
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Transition"),
    value: borderTransition,
    onChange: function onChange(borderTransition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "borderTransition"), borderTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  })), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    forBorderRadius: true,
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "HRds_"),
    baseLabel: "Border Radius"
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Radius Transition"),
    value: radiusTransition,
    onChange: function onChange(radiusTransition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "radiusTransition"), radiusTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  }))), noShadow !== true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Box Shadow"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["TypographyIcon"], null));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "eb-panel-control",
        style: {
          minWidth: "230px",
          padding: "10px"
        }
      }, /*#__PURE__*/React.createElement(BaseControl, {
        id: "eb-infobox-shadow-hover-ptions"
      }, /*#__PURE__*/React.createElement(ButtonGroup, {
        id: "eb-infobox-shadow-hover-ptions"
      }, [{
        label: "Normal",
        value: "normal"
      }, {
        label: "Hover",
        value: "hover"
      }].map(function (_ref4) {
        var value = _ref4.value,
            label = _ref4.label;
        return /*#__PURE__*/React.createElement(Button, {
          isLarge: true,
          isSecondary: shadowType !== value,
          isPrimary: shadowType === value,
          onClick: function onClick() {
            return setAttributes(_defineProperty({}, "".concat(controlName, "shadowType"), value));
          }
        }, label);
      }))), /*#__PURE__*/React.createElement(ToggleControl, {
        label: __("Inset"),
        checked: inset,
        onChange: function onChange() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "inset"), !inset));
        }
      }), shadowType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        label: __("Shadow Color"),
        color: shadowColor,
        onChange: function onChange(shadowColor) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "shadowColor"), shadowColor));
        }
      }), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Horizontal Offset"),
        value: hOffset,
        onChange: function onChange(hOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hOffset"), hOffset));
        },
        min: 0,
        max: 200
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "vOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Vertical Offset"),
        value: vOffset,
        onChange: function onChange(vOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "vOffset"), vOffset));
        },
        min: 0,
        max: 200
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "blur"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Blur"),
        value: blur,
        onChange: function onChange(blur) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "blur"), blur));
        },
        min: 0,
        max: 200
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "spread"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Spread"),
        value: spread,
        onChange: function onChange(spread) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "spread"), spread));
        },
        min: 0,
        max: 200
      }))), shadowType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        label: __("Hover Shadow Color"),
        color: hoverShadowColor,
        onChange: function onChange(hoverShadowColor) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverShadowColor"), hoverShadowColor));
        }
      }), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverHOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Horizontal Offset"),
        value: hoverHOffset,
        onChange: function onChange(hoverHOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverHOffset"), hoverHOffset));
        },
        min: 0,
        max: 200
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverVOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Vertical Offset"),
        value: hoverVOffset,
        onChange: function onChange(hoverVOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverVOffset"), hoverVOffset));
        },
        min: 0,
        max: 200
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverBlur"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Blur"),
        value: hoverBlur,
        onChange: function onChange(hoverBlur) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverBlur"), hoverBlur));
        },
        min: 0,
        max: 200
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverSpread"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Spread"),
        value: hoverSpread,
        onChange: function onChange(hoverSpread) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverSpread"), hoverSpread));
        },
        min: 0,
        max: 200
      })), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Transition"),
        value: shadowTransition,
        onChange: function onChange(shadowTransition) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "shadowTransition"), shadowTransition));
        },
        step: 0.01,
        min: 0,
        max: 5
      }))));
    }
  }))));
}

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker,
    Button = _wp$components.Button;
var colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: "white",
  border: "1px solid #ebebeb"
};
var colorStyles = {
  height: 16,
  width: 16,
  borderRadius: "0%",
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)"
};

var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  useEffect(function () {
    onChange(bgColor);
  }, [bgColor]);
  useEffect(function () {
    setBgColor(color);
  }, []);
  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label || "",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: bgColor || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball",
        style: bgColor && colorBallStyles
      }, /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: bgColor
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": bgColor || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: bgColor,
        onChangeComplete: function onChangeComplete(_ref3) {
          var rgb = _ref3.rgb;
          setBgColor("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  }), bgColor && /*#__PURE__*/React.createElement(Button, {
    isSmall: true,
    className: "eb-color-undo",
    icon: "image-rotate",
    style: {
      transform: "scaleX(-1) rotate(90deg)"
    },
    onClick: function onClick() {
      setBgColor(undefined);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/custom-query/apiData.js":
/*!**************************************!*\
  !*** ./util/custom-query/apiData.js ***!
  \**************************************/
/*! exports provided: getPosts, getAuthor, getCategory, getTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthor", function() { return getAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTag", function() { return getTag; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var apiFetch = wp.apiFetch; //Get Posts

var getPosts = function getPosts(query) {
  console.log("Query", query);
  var queryStringObj = {};

  if (query.source === 'posts') {
    var includesObjStr = ['author', 'categories', 'tags'];
    var includesDirectVal = ['per_page', 'offset', 'orderby', 'order'];
    Object.keys(query).forEach(function (key) {
      if (includesObjStr.includes(key) && query[key].length > 0) {
        var data = JSON.parse(query[key]);
        var arg = [];

        if (data.length > 0) {
          data.forEach(function (eachData) {
            if (_typeof(eachData) === 'object') {
              arg.push(eachData.value);
            }
          });
          queryStringObj[key] = arg.join(',');
        }
      } else if (includesDirectVal.includes(key) && query[key].length > 0) {
        queryStringObj[key] = query[key];
      }
    });
  } else if (query.source === 'pages') {
    var _includesObjStr = ['author'];
    var _includesDirectVal = ['per_page', 'offset', 'orderby', 'order'];
    Object.keys(query).forEach(function (key) {
      if (_includesObjStr.includes(key) && query[key].length > 0) {
        var data = JSON.parse(query[key]);
        var arg = [];

        if (data.length > 0) {
          data.forEach(function (eachData) {
            if (_typeof(eachData) === 'object') {
              arg.push(eachData.value);
            }
          });
          queryStringObj[key] = arg.join(',');
        }
      } else if (_includesDirectVal.includes(key) && query[key].length > 0) {
        queryStringObj[key] = query[key];
      }
    });
  }

  var queryString = Object.keys(queryStringObj).map(function (key) {
    return key + '=' + queryStringObj[key];
  }).join('&');
  var postData = [];
  return apiFetch({
    path: "/wp/v2/".concat(query.source, "?").concat(queryString, "&_embed")
  }).then(function (result) {
    // console.log("Posts", result)
    result != null && result.length > 0 && result.forEach(function (item) {
      var filterPostData = {};
      Object.keys(item).forEach(function (key) {
        filterPostData[key] = item[key];
      });
      postData = [].concat(_toConsumableArray(postData), [filterPostData]);
    });
    return postData;
  }, function (error) {
    console.log("error", error); // setIsLoaded( true );
    // setError( error );
  });
}; //Get Author Data

var getAuthor = function getAuthor() {
  var authorData = [];
  return apiFetch({
    path: "/wp/v2/users/"
  }).then(function (result) {
    // console.log("Authors", result)
    result != null && result.length > 0 && result.forEach(function (item) {
      var filterauthorData = {};
      var includesVal = ['id', 'link', 'name', 'slug'];
      Object.keys(item).forEach(function (key) {
        if (includesVal.includes(key)) {
          filterauthorData[key] = item[key];
        }
      });
      authorData = [].concat(_toConsumableArray(authorData), [filterauthorData]);
    });
    return authorData;
  }, function (error) {
    console.log("error", error); // setIsLoaded( true );
    // setError( error );
  });
}; //Get Categories

var getCategory = function getCategory() {
  var categoryData = [];
  return apiFetch({
    path: "/wp/v2/categories/"
  }).then(function (result) {
    // console.log("Categories", result)
    result != null && result.length > 0 && result.forEach(function (item) {
      var filterCategoryData = {};
      var includesVal = ['id', 'link', 'name', 'slug', 'parent'];
      Object.keys(item).forEach(function (key) {
        if (includesVal.includes(key)) {
          filterCategoryData[key] = item[key];
        }
      });
      categoryData = [].concat(_toConsumableArray(categoryData), [filterCategoryData]);
    });
    return categoryData;
  }, function (error) {
    console.log("error", error); // setIsLoaded( true );
    // setError( error );
  });
}; //Get Tags

var getTag = function getTag() {
  var tagsData = [];
  return apiFetch({
    path: "/wp/v2/tags/"
  }).then(function (result) {
    // console.log("Tags", result)
    result != null && result.length > 0 && result.forEach(function (item) {
      var filterTagsData = {};
      var includesVal = ['id', 'link', 'name', 'slug'];
      Object.keys(item).forEach(function (key) {
        if (includesVal.includes(key)) {
          filterTagsData[key] = item[key];
        }
      });
      tagsData = [].concat(_toConsumableArray(tagsData), [filterTagsData]);
    });
    return tagsData;
  }, function (error) {
    console.log("error", error); // setIsLoaded( true );
    // setError( error );
  });
};

/***/ }),

/***/ "./util/custom-query/constants.js":
/*!****************************************!*\
  !*** ./util/custom-query/constants.js ***!
  \****************************************/
/*! exports provided: SOURCES, ORDER_BY, ORDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOURCES", function() { return SOURCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_BY", function() { return ORDER_BY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER", function() { return ORDER; });
var __ = wp.i18n.__;
var SOURCES = [{
  label: __("Post"),
  value: "posts"
}, {
  label: __("Page"),
  value: "pages"
}];
var ORDER_BY = [{
  label: __("Date"),
  value: "date"
}, {
  label: __("modified Date"),
  value: "modified"
}, {
  label: __("Relevance"),
  value: "relevance"
}, {
  label: __("Title"),
  value: "title"
}, {
  label: __("Id"),
  value: "id"
}, {
  label: __("Parent"),
  value: "parent"
}];
var ORDER = [{
  label: __("Desc"),
  value: "desc"
}, {
  label: __("Asc"),
  value: "asc"
}];

/***/ }),

/***/ "./util/custom-query/index.js":
/*!************************************!*\
  !*** ./util/custom-query/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inspector; });
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./util/custom-query/constants.js");
/* harmony import */ var _apiData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiData */ "./util/custom-query/apiData.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress Core Dependencies
*/
var __ = wp.i18n.__;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl;
var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;
/**
 * React Library Dependencies
*/


/**
 * Internal Dependencies
*/



function Inspector(props) {
  var queryData = props.queryData,
      queryResults = props.queryResults,
      setAttributes = props.setAttributes;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      authorOptions = _useState2[0],
      setAuthorOptions = _useState2[1]; //Author Data for Select2 Format


  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      categoryOptions = _useState4[0],
      setCategoryOptions = _useState4[1]; //Categories Data for Select2 Format


  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      tagOptions = _useState6[0],
      setTagOptions = _useState6[1]; //Tags Data for Select2 Format


  var _useState7 = useState({
    source: 'posts',
    author: '',
    categories: '',
    tags: '',
    per_page: '6',
    offset: '0',
    orderby: 'date',
    order: 'desc'
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      query = _useState8[0],
      setQuery = _useState8[1];

  useEffect(function () {
    //If Exixsting query data exists in Attributes, set existing data to current query data
    if (typeof queryData != 'undefined' && queryData.length > 0) {
      setQuery(_objectSpread({}, queryData));
    } //Get Author data and Set Author Options Data


    Object(_apiData__WEBPACK_IMPORTED_MODULE_2__["getAuthor"])().then(function (authorData) {
      var authorDataForOptions = [];
      authorData.length > 0 && authorData.forEach(function (item) {
        var filterAuthorData = {};
        Object.keys(item).forEach(function (key) {
          if (key === 'name') {
            filterAuthorData.label = item[key];
          }

          if (key === 'id') {
            filterAuthorData.value = item[key];
          }
        });
        authorDataForOptions.push(filterAuthorData);
      });
      setAuthorOptions(authorDataForOptions);
    }); //Get Categories data and Set Categories Options Data

    Object(_apiData__WEBPACK_IMPORTED_MODULE_2__["getCategory"])().then(function (categoryData) {
      var categoryDataForOptions = [];
      categoryData.length > 0 && categoryData.forEach(function (item) {
        var filterCategoryData = {};
        Object.keys(item).forEach(function (key) {
          if (key === 'name') {
            filterCategoryData.label = item[key];
          }

          if (key === 'id') {
            filterCategoryData.value = item[key];
          }
        });
        categoryDataForOptions.push(filterCategoryData);
      });
      setCategoryOptions(categoryDataForOptions);
    }); //Get Tags data and Set Tags Options Data

    Object(_apiData__WEBPACK_IMPORTED_MODULE_2__["getTag"])().then(function (tagData) {
      var tagDataForOptions = [];
      tagData.length > 0 && tagData.forEach(function (item) {
        var filterTagData = {};
        Object.keys(item).forEach(function (key) {
          if (key === 'name') {
            filterTagData.label = item[key];
          }

          if (key === 'id') {
            filterTagData.value = item[key];
          }
        });
        tagDataForOptions.push(filterTagData);
      });
      setTagOptions(tagDataForOptions);
    });
  }, []);
  useEffect(function () {
    //Get Post data on query change and set to Attributes
    Object(_apiData__WEBPACK_IMPORTED_MODULE_2__["getPosts"])(query).then(function (posts) {
      setAttributes({
        queryData: query
      });
      setAttributes({
        queryResults: posts
      });
    });
  }, [query]); //Function for update query data on Source Select

  var setSource = function setSource(value) {
    var updatedQueryData = _objectSpread({}, query);

    updatedQueryData.source = value;
    setQuery(updatedQueryData);
  }; //Function for update query data on Author Select


  var setAuthor = function setAuthor(author) {
    var updatedQueryData = _objectSpread({}, query);

    updatedQueryData.author = JSON.stringify(author);
    setQuery(updatedQueryData);
  }; //Function for update query data on Category Select


  var setCategories = function setCategories(categories) {
    var updatedQueryData = _objectSpread({}, query);

    updatedQueryData.categories = JSON.stringify(categories);
    setQuery(updatedQueryData);
  }; //Function for update query data on Tag Select


  var setTags = function setTags(tags) {
    var updatedQueryData = _objectSpread({}, query);

    updatedQueryData.tags = JSON.stringify(tags);
    setQuery(updatedQueryData);
  }; //Function for update query data on Post Per Page Select


  var setPerPage = function setPerPage(number) {
    var updatedQueryData = _objectSpread({}, query);

    updatedQueryData.per_page = number;
    setQuery(updatedQueryData);
  }; //Function for update query data on Offset Select


  var setOffset = function setOffset(number) {
    var updatedQueryData = _objectSpread({}, query);

    updatedQueryData.offset = number;
    setQuery(updatedQueryData);
  }; //Function for update query data on Order By Select


  var setOrderBy = function setOrderBy(value) {
    var updatedQueryData = _objectSpread({}, query);

    updatedQueryData.orderby = value;
    setQuery(updatedQueryData);
  }; //Function for update query data on Order Select


  var setOrder = function setOrder(value) {
    var updatedQueryData = _objectSpread({}, query);

    updatedQueryData.order = value;
    setQuery(updatedQueryData);
  };

  return /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Query"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Source"),
    value: query.source,
    options: _constants__WEBPACK_IMPORTED_MODULE_1__["SOURCES"],
    onChange: function onChange(selected) {
      return setSource(selected);
    }
  }), /*#__PURE__*/React.createElement(PanelRow, null, "Author"), /*#__PURE__*/React.createElement(react_select__WEBPACK_IMPORTED_MODULE_0__["default"], {
    name: "select-author",
    value: query.author.length > 0 ? JSON.parse(query.author) : '',
    onChange: function onChange(selected) {
      return setAuthor(selected);
    },
    options: authorOptions,
    isMulti: "true"
  }), query.source === 'posts' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelRow, null, "Categories"), /*#__PURE__*/React.createElement(react_select__WEBPACK_IMPORTED_MODULE_0__["default"], {
    name: "select-categories",
    value: query.categories.length > 0 ? JSON.parse(query.categories) : '',
    onChange: function onChange(selected) {
      return setCategories(selected);
    },
    options: categoryOptions,
    isMulti: "true"
  }), /*#__PURE__*/React.createElement(PanelRow, null, "Tags"), /*#__PURE__*/React.createElement(react_select__WEBPACK_IMPORTED_MODULE_0__["default"], {
    name: "select-tags",
    value: query.tags.length > 0 ? JSON.parse(query.tags) : '',
    onChange: function onChange(selected) {
      return setTags(selected);
    },
    options: tagOptions,
    isMulti: "true"
  })), /*#__PURE__*/React.createElement(TextControl, {
    label: "Posts Per Page",
    type: "number",
    value: query.per_page,
    onChange: function onChange(selected) {
      return setPerPage(selected);
    }
  }), /*#__PURE__*/React.createElement(TextControl, {
    label: "Offset",
    type: "number",
    value: query.offset,
    onChange: function onChange(selected) {
      return setOffset(selected);
    }
  }), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Order By"),
    value: query.orderby,
    options: _constants__WEBPACK_IMPORTED_MODULE_1__["ORDER_BY"],
    onChange: function onChange(selected) {
      return setOrderBy(selected);
    }
  }), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Order"),
    value: query.order,
    options: _constants__WEBPACK_IMPORTED_MODULE_1__["ORDER"],
    onChange: function onChange(selected) {
      return setOrder(selected);
    }
  }));
}

/***/ }),

/***/ "./util/dimensions-control-v2/dimensions.js":
/*!**************************************************!*\
  !*** ./util/dimensions-control-v2/dimensions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DimensionsControl; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./util/helpers/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;
var dispatch = wp.data.dispatch;

function DimensionsControl(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      onChange = _ref.onChange,
      neededProps = _ref.neededProps;

  var _useState = useState({
    top: top,
    right: right,
    bottom: bottom,
    left: left
  }),
      _useState2 = _slicedToArray(_useState, 2),
      dimensions = _useState2[0],
      setDimensions = _useState2[1];

  var baseLabel = neededProps.baseLabel,
      resOption = neededProps.resOption,
      forBorderRadius = neededProps.forBorderRadius,
      setAttributes = neededProps.setAttributes,
      dimensionIsLinked = neededProps.dimensionIsLinked,
      controlName = neededProps.controlName;

  var _useState3 = useState(dimensionIsLinked),
      _useState4 = _slicedToArray(_useState3, 2),
      isLinked = _useState4[0],
      setIsLinked = _useState4[1];

  var onButtonClick = function onButtonClick() {
    return setIsLinked(!isLinked);
  };

  var onInputChange = function onInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    if (isLinked) {
      setDimensions({
        top: value,
        right: value,
        bottom: value,
        left: value
      });
    } else {
      setDimensions(function (prevDimensions) {
        return _objectSpread(_objectSpread({}, prevDimensions), {}, _defineProperty({}, name, value));
      });
    }
  };

  useEffect(function () {
    onChange(dimensions);
  }, [dimensions]);
  useEffect(function () {
    setAttributes(_defineProperty({}, "".concat(controlName, "isLinked"), isLinked));
    var value = dimensions.top;

    if (isLinked) {
      setDimensions({
        top: value,
        right: value,
        bottom: value,
        left: value
      });
    }
  }, [isLinked]);
  return /*#__PURE__*/React.createElement("div", {
    className: "dimention-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "withResWrapperInDimension"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dimention-label"
  }, baseLabel), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleDesktopBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "Desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleTabBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "Tablet" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleMobileBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "Mobile" ? "active" : " ")
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "top",
    value: dimensions.top,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Top")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "right",
    value: dimensions.right,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Right")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "bottom",
    value: dimensions.bottom,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Bottom")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "left",
    value: dimensions.left,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Left")), /*#__PURE__*/React.createElement("button", {
    className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
    onClick: onButtonClick
  })));
}

/***/ }),

/***/ "./util/dimensions-control-v2/index.js":
/*!*********************************************!*\
  !*** ./util/dimensions-control-v2/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponsiveDimensionsControl; });
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensions */ "./util/dimensions-control-v2/dimensions.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function ResponsiveDimensionsControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      baseLabel = _ref.baseLabel,
      forBorderRadius = _ref.forBorderRadius;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var dimensionIsLinked = attributes["".concat(controlName, "isLinked")],
      dimensionUnit = attributes["".concat(controlName, "Unit")],
      dimensionTop = attributes["".concat(controlName, "Top")],
      dimensionRight = attributes["".concat(controlName, "Right")],
      dimensionBottom = attributes["".concat(controlName, "Bottom")],
      dimensionLeft = attributes["".concat(controlName, "Left")],
      TABdimensionUnit = attributes["TAB".concat(controlName, "Unit")],
      TABdimensionTop = attributes["TAB".concat(controlName, "Top")],
      TABdimensionRight = attributes["TAB".concat(controlName, "Right")],
      TABdimensionBottom = attributes["TAB".concat(controlName, "Bottom")],
      TABdimensionLeft = attributes["TAB".concat(controlName, "Left")],
      MOBdimensionUnit = attributes["MOB".concat(controlName, "Unit")],
      MOBdimensionTop = attributes["MOB".concat(controlName, "Top")],
      MOBdimensionRight = attributes["MOB".concat(controlName, "Right")],
      MOBdimensionBottom = attributes["MOB".concat(controlName, "Bottom")],
      MOBdimensionLeft = attributes["MOB".concat(controlName, "Left")];
  var UNITS = [{
    label: "px",
    value: "px"
  }, {
    label: "em",
    value: "em"
  }, {
    label: "%",
    value: "%"
  }];
  var neededProps = {
    resOption: resOption,
    baseLabel: baseLabel,
    forBorderRadius: forBorderRadius,
    setAttributes: setAttributes,
    dimensionIsLinked: dimensionIsLinked,
    controlName: controlName
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, resOption == "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: dimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(dimensionUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "Unit"), dimensionUnit));
    }
  }), /*#__PURE__*/React.createElement(_dimensions__WEBPACK_IMPORTED_MODULE_0__["default"], {
    top: dimensionTop,
    right: dimensionRight,
    bottom: dimensionBottom,
    left: dimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref2) {
      var _setAttributes2;

      var top = _ref2.top,
          right = _ref2.right,
          bottom = _ref2.bottom,
          left = _ref2.left;
      return setAttributes((_setAttributes2 = {}, _defineProperty(_setAttributes2, "".concat(controlName, "Top"), top), _defineProperty(_setAttributes2, "".concat(controlName, "Right"), right), _defineProperty(_setAttributes2, "".concat(controlName, "Bottom"), bottom), _defineProperty(_setAttributes2, "".concat(controlName, "Left"), left), _setAttributes2));
    }
  })), resOption == "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABdimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(TABdimensionUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "Unit"), TABdimensionUnit));
    }
  }), /*#__PURE__*/React.createElement(_dimensions__WEBPACK_IMPORTED_MODULE_0__["default"], {
    top: TABdimensionTop,
    right: TABdimensionRight,
    bottom: TABdimensionBottom,
    left: TABdimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref3) {
      var _setAttributes4;

      var top = _ref3.top,
          right = _ref3.right,
          bottom = _ref3.bottom,
          left = _ref3.left;
      return setAttributes((_setAttributes4 = {}, _defineProperty(_setAttributes4, "TAB".concat(controlName, "Top"), top), _defineProperty(_setAttributes4, "TAB".concat(controlName, "Right"), right), _defineProperty(_setAttributes4, "TAB".concat(controlName, "Bottom"), bottom), _defineProperty(_setAttributes4, "TAB".concat(controlName, "Left"), left), _setAttributes4));
    }
  })), resOption == "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBdimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(MOBdimensionUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "Unit"), MOBdimensionUnit));
    }
  }), /*#__PURE__*/React.createElement(_dimensions__WEBPACK_IMPORTED_MODULE_0__["default"], {
    top: MOBdimensionTop,
    right: MOBdimensionRight,
    bottom: MOBdimensionBottom,
    left: MOBdimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref4) {
      var _setAttributes6;

      var top = _ref4.top,
          right = _ref4.right,
          bottom = _ref4.bottom,
          left = _ref4.left;
      return setAttributes((_setAttributes6 = {}, _defineProperty(_setAttributes6, "MOB".concat(controlName, "Top"), top), _defineProperty(_setAttributes6, "MOB".concat(controlName, "Right"), right), _defineProperty(_setAttributes6, "MOB".concat(controlName, "Bottom"), bottom), _defineProperty(_setAttributes6, "MOB".concat(controlName, "Left"), left), _setAttributes6));
    }
  })));
}

/***/ }),

/***/ "./util/fontPicker/constants.js":
/*!**************************************!*\
  !*** ./util/fontPicker/constants.js ***!
  \**************************************/
/*! exports provided: FONTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
var FONTS = {
  "Abril Fatface": {
    weight: ["400"]
  },
  Anton: {
    weight: ["400"]
  },
  Arvo: {
    weight: ["400", "700"]
  },
  Asap: {
    weight: ["400", "500", "600", "700"]
  },
  "Barlow Condensed": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Barlow: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Cormorant Garamond": {
    weight: ["300", "400", "500", "600", "700"]
  },
  Faustina: {
    weight: ["400", "500", "600", "700"]
  },
  "Fira Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "IBM Plex Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  },
  Inconsolata: {
    weight: ["400", "700"]
  },
  Heebo: {
    weight: ["100", "300", "400", "500", "700", "800", "900"]
  },
  Karla: {
    weight: ["400", "700"]
  },
  Lato: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Lora: {
    weight: ["400", "700"]
  },
  Merriweather: {
    weight: ["300", "400", "500", "600", "700", "800", "900"]
  },
  Montserrat: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Noto Sans": {
    weight: ["400", "700"]
  },
  "Noto Serif": {
    weight: ["400", "700"]
  },
  "Open Sans": {
    weight: ["300", "400", "500", "600", "700", "800"]
  },
  Oswald: {
    weight: ["200", "300", "400", "500", "600", "700"]
  },
  "Playfair Display": {
    weight: ["400", "700", "900"]
  },
  "PT Serif": {
    weight: ["400", "700"]
  },
  Roboto: {
    weight: ["100", "300", "400", "500", "700", "900"]
  },
  Rubik: {
    weight: ["300", "400", "500", "700", "900"]
  },
  Tajawal: {
    weight: ["200", "300", "400", "500", "700", "800", "900"]
  },
  Ubuntu: {
    weight: ["300", "400", "500", "700"]
  },
  Yrsa: {
    weight: ["300", "400", "500", "600", "700"]
  }
};

/***/ }),

/***/ "./util/fontPicker/index.js":
/*!**********************************!*\
  !*** ./util/fontPicker/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./util/fontPicker/constants.js");
var _excluded = ["label", "value", "help", "instanceId", "onChange", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var withInstanceId = wp.compose.withInstanceId;
var BaseControl = wp.components.BaseControl;
/**
 * Internal dependencies
 */



function FontFamilyPicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      help = _ref.help,
      instanceId = _ref.instanceId,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var id = "inspector-eb-font-family-".concat(instanceId);
  var fonts = [{
    value: "",
    label: __("Default")
  }, {
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }]; //Add Google Fonts

  Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__["FONTS"]).map(function (k) {
    fonts.push({
      value: k,
      label: k
    });
  });

  var onChangeValue = function onChangeValue(event) {
    var meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    var ba = "";
    var googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    var link = document.createElement("link");
    link.rel = "stylesheet";

    if (typeof meta !== "undefined" && typeof meta._eb_attr !== "undefined") {
      ba = meta._eb_attr;
    }

    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(event.target.value)) {
        link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
        document.head.appendChild(link);
      }

      ba = ba.replace("," + event.target.value, "");
      ba = ba + "," + event.target.value;
    } else {
      link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
      document.head.appendChild(link);
      ba = event.target.value;
    } //Save values to metadata


    wp.data.dispatch("core/editor").editPost({
      meta: {
        _eb_attr: ba
      }
    });
    onChange(event.target.value);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined
  }, props), fonts.map(function (option, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      selected: value === option.value ? "selected" : ""
    }, option.label);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(FontFamilyPicker));

/***/ }),

/***/ "./util/gradient-color-controller/constants.js":
/*!*****************************************************!*\
  !*** ./util/gradient-color-controller/constants.js ***!
  \*****************************************************/
/*! exports provided: GRADIENT_TYPE, RADIAL_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRADIENT_TYPE", function() { return GRADIENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIAL_TYPES", function() { return RADIAL_TYPES; });
var GRADIENT_TYPE = [{
  label: "Linear",
  value: "linear"
}, {
  label: "Radial",
  value: "radial"
}];
var RADIAL_TYPES = [{
  label: "Ellipse",
  value: "ellipse"
}, {
  label: "Circle",
  value: "circle"
}];

/***/ }),

/***/ "./util/gradient-color-controller/helper.js":
/*!**************************************************!*\
  !*** ./util/gradient-color-controller/helper.js ***!
  \**************************************************/
/*! exports provided: parseGradientColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseGradientColor", function() { return parseGradientColor; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Parses the gradient color string
var parseGradientColor = function parseGradientColor() {
  var gradientColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "linear-gradient(45deg,#7967ff,#c277f2)";
  var angle = 45,
      colorOnePosition = 0,
      colorTwoPosition = 100,
      radialShape = "ellipse",
      radialX = 50,
      radialY = 50;

  var _ref = gradientColor.match(/\#[a-f\d]{3,8}|rgba?\([\d\,\.]{3,16}\)/gi) || ["rgba(0,0,0,0)", "rgba(0,0,0,0)"],
      _ref2 = _slicedToArray(_ref, 2),
      colorOne = _ref2[0],
      colorTwo = _ref2[1];

  var _ref3 = gradientColor.match(/\w{6}(?=-)/i) || ["linear"],
      _ref4 = _slicedToArray(_ref3, 1),
      gradientType = _ref4[0];

  if (gradientType == "linear") {
    angle = gradientColor.match(/\d{1,3}(?=deg)/i)[0];

    var _ref5 = gradientColor.match(/\d{1,3}(?=\%)/gi) || ["0", "100"];

    var _ref6 = _slicedToArray(_ref5, 2);

    colorOnePosition = _ref6[0];
    colorTwoPosition = _ref6[1];
  } else {
    radialShape = (gradientColor.match(/\w+(?= at)/i) || ["circle"])[0];
    var pcents = gradientColor.match(/\d{1,3}(?=\%)/gi) || ["50", "50", "18", "82"];
    radialX = pcents[0];
    radialY = pcents[1];
    colorOnePosition = pcents[2];
    colorTwoPosition = pcents[3];
  }

  return {
    gradientType: gradientType,
    angle: angle,
    colorOne: colorOne,
    colorTwo: colorTwo,
    colorOnePosition: colorOnePosition,
    colorTwoPosition: colorTwoPosition,
    radialShape: radialShape,
    radialX: radialX,
    radialY: radialY
  };
};

/***/ }),

/***/ "./util/gradient-color-controller/index.js":
/*!*************************************************!*\
  !*** ./util/gradient-color-controller/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toggle-button */ "./util/toggle-button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./util/gradient-color-controller/constants.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./util/gradient-color-controller/helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
/**
 * Internal dependencies
 */
// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";




var colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: "white",
  border: "1px solid #ebebeb"
};
var colorStyles = {
  height: 16,
  width: 16,
  borderRadius: "0%",
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)"
};

var GradientColorControl = function GradientColorControl(_ref) {
  var _ref$gradientColor = _ref.gradientColor,
      gradientColor = _ref$gradientColor === void 0 ? "linear-gradient(45deg,rgba(0,0,0,0.8),rgba(0,0,0,0.4))" : _ref$gradientColor,
      onChange = _ref.onChange;

  var _useState = useState("linear"),
      _useState2 = _slicedToArray(_useState, 2),
      gradientType = _useState2[0],
      setGradientType = _useState2[1];

  var _useState3 = useState("transparent"),
      _useState4 = _slicedToArray(_useState3, 2),
      colorOne = _useState4[0],
      setColorOne = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      colorOnePosition = _useState6[0],
      setColorOnePosition = _useState6[1];

  var _useState7 = useState("transparent"),
      _useState8 = _slicedToArray(_useState7, 2),
      colorTwo = _useState8[0],
      setColorTwo = _useState8[1];

  var _useState9 = useState(100),
      _useState10 = _slicedToArray(_useState9, 2),
      colorTwoPosition = _useState10[0],
      setColorTwoPosition = _useState10[1];

  var _useState11 = useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      angle = _useState12[0],
      setAngle = _useState12[1];

  var _useState13 = useState("ellipse"),
      _useState14 = _slicedToArray(_useState13, 2),
      radialShape = _useState14[0],
      setRadialShape = _useState14[1];

  var _useState15 = useState(50),
      _useState16 = _slicedToArray(_useState15, 2),
      radialX = _useState16[0],
      setRadialX = _useState16[1];

  var _useState17 = useState(50),
      _useState18 = _slicedToArray(_useState17, 2),
      radialY = _useState18[0],
      setRadialY = _useState18[1];

  useEffect(function () {
    var _parseGradientColor = Object(_helper__WEBPACK_IMPORTED_MODULE_2__["parseGradientColor"])(gradientColor),
        gradientType = _parseGradientColor.gradientType,
        angle = _parseGradientColor.angle,
        colorOne = _parseGradientColor.colorOne,
        colorTwo = _parseGradientColor.colorTwo,
        colorOnePosition = _parseGradientColor.colorOnePosition,
        colorTwoPosition = _parseGradientColor.colorTwoPosition,
        radialShape = _parseGradientColor.radialShape,
        radialX = _parseGradientColor.radialX,
        radialY = _parseGradientColor.radialY;

    setGradientType(gradientType);
    setAngle(angle);
    setColorOne(colorOne);
    setColorTwo(colorTwo);
    setColorOnePosition(colorOnePosition);
    setColorTwoPosition(colorTwoPosition);
    setRadialShape(radialShape);
    setRadialX(radialX);
    setRadialY(radialY);
  }, []);
  useEffect(function () {
    onChange(gradientType === "linear" ? getLinearGradient() : getRadialGradient());
  }, [gradientType, colorOne, colorOnePosition, colorTwo, colorTwoPosition, angle, radialShape, radialX, radialY]);

  var getColorString = function getColorString() {
    return "".concat(colorOne, " ").concat(colorOnePosition, "% , ").concat(colorTwo, " ").concat(colorTwoPosition, "%");
  };

  var getRadialGradient = function getRadialGradient() {
    return "radial-gradient(".concat(radialShape, " at ").concat(radialX, "% ").concat(radialY, "%, ").concat(getColorString(), ")");
  };

  var getLinearGradient = function getLinearGradient() {
    return "linear-gradient(".concat(angle, "deg, ").concat(getColorString(), ")");
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "eb-gradient-control"
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Gradient Type"),
    className: "eb-gradient-toggle-label"
  }, /*#__PURE__*/React.createElement(_toggle_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    defaultSelected: gradientType === "linear" ? _constants__WEBPACK_IMPORTED_MODULE_1__["GRADIENT_TYPE"][0] : _constants__WEBPACK_IMPORTED_MODULE_1__["GRADIENT_TYPE"][1],
    options: _constants__WEBPACK_IMPORTED_MODULE_1__["GRADIENT_TYPE"],
    onChange: function onChange(gradientType) {
      return setGradientType(gradientType);
    }
  })), gradientType === "radial" && /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Radial Type"),
    className: "eb-gradient-toggle-label"
  }, /*#__PURE__*/React.createElement(_toggle_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    defaultSelected: radialShape === "ellipse" ? _constants__WEBPACK_IMPORTED_MODULE_1__["RADIAL_TYPES"][0] : _constants__WEBPACK_IMPORTED_MODULE_1__["RADIAL_TYPES"][1],
    options: _constants__WEBPACK_IMPORTED_MODULE_1__["RADIAL_TYPES"],
    onChange: function onChange(radialShape) {
      return setRadialShape(radialShape);
    }
  })), /*#__PURE__*/React.createElement(BaseControl, {
    label: "First Color",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: colorOne || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball",
        style: colorOne && colorBallStyles
      }, /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: colorOne
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": colorOne || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: colorOne,
        onChangeComplete: function onChangeComplete(_ref3) {
          var rgb = _ref3.rgb;
          setColorOne("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  })), /*#__PURE__*/React.createElement(BaseControl, {
    label: "Second Color",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref4) {
      var isOpen = _ref4.isOpen,
          onToggle = _ref4.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: colorTwo || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball",
        style: colorTwo && colorBallStyles
      }, /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: colorTwo
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": colorTwo || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: colorTwo,
        onChangeComplete: function onChangeComplete(_ref5) {
          var rgb = _ref5.rgb;
          setColorTwo("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  })), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("First Color Position"),
    value: colorOnePosition,
    onChange: function onChange(colorOnePosition) {
      return setColorOnePosition(colorOnePosition);
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Second Color Position"),
    value: colorTwoPosition,
    onChange: function onChange(colorTwoPosition) {
      return setColorTwoPosition(colorTwoPosition);
    },
    min: 0,
    max: 100
  }), gradientType === "linear" && /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Angle"),
    value: angle,
    onChange: function onChange(angle) {
      return setAngle(angle);
    },
    min: 0,
    max: 360
  }), gradientType === "radial" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Center X Position"),
    value: radialX,
    onChange: function onChange(radialX) {
      return setRadialX(radialX);
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Center Y Position"),
    value: radialY,
    onChange: function onChange(radialY) {
      return setRadialY(radialY);
    },
    min: 0,
    max: 100
  })));
}; // GradientColorControl.propTypes = {
//   gradientColor: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };


/* harmony default export */ __webpack_exports__["default"] = (GradientColorControl);

/***/ }),

/***/ "./util/helpers/backgroundHelpers.js":
/*!*******************************************!*\
  !*** ./util/helpers/backgroundHelpers.js ***!
  \*******************************************/
/*! exports provided: generateBackgroundAttributes, generateBackgroundControlStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundAttributes", function() { return generateBackgroundAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundControlStyles", function() { return generateBackgroundControlStyles; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// function to generate Background control's attributes
var generateBackgroundAttributes = function generateBackgroundAttributes(controlName) {
  var _ref4, _objectSpread4, _mainBgiAttrs, _objectSpread6, _ovlBgiAttrs;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isBgDefaultGradient = defaults.isBgDefaultGradient,
      defaultFillColor = defaults.defaultFillColor,
      _defaults$defaultBgGr = defaults.defaultBgGradient,
      defaultBgGradient = _defaults$defaultBgGr === void 0 ? "linear-gradient(45deg,#00000000,#00000000)" : _defaults$defaultBgGr,
      _defaults$noOverlay = defaults.noOverlay,
      noOverlay = _defaults$noOverlay === void 0 ? false : _defaults$noOverlay,
      _defaults$noMainBgi = defaults.noMainBgi,
      noMainBgi = _defaults$noMainBgi === void 0 ? false : _defaults$noMainBgi,
      _defaults$noOverlayBg = defaults.noOverlayBgi,
      noOverlayBgi = _defaults$noOverlayBg === void 0 ? false : _defaults$noOverlayBg,
      _defaults$noTransitio = defaults.noTransition,
      noTransition = _defaults$noTransitio === void 0 ? false : _defaults$noTransitio;
  var bgColorAttr = defaultFillColor ? _defineProperty({}, "".concat(controlName, "backgroundColor"), {
    type: "string",
    "default": defaultFillColor
  }) : _defineProperty({}, "".concat(controlName, "backgroundColor"), {
    type: "string"
  });
  var transitionAttr = noTransition ? {} : _defineProperty({}, "".concat(controlName, "bg_transition"), {
    type: "number",
    "default": 0.5
  });
  var ovlTransitionAttr = noTransition ? {} : (_ref4 = {}, _defineProperty(_ref4, "".concat(controlName, "ovl_bg_transition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_ref4, "".concat(controlName, "ovl_filtersTransition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_ref4, "".concat(controlName, "ovl_opacityTransition"), {
    type: "number",
    "default": 0.5
  }), _ref4);

  var mainWithoutBgiAttrs = _objectSpread(_objectSpread(_objectSpread(_defineProperty({}, "".concat(controlName, "bg_hoverType"), {
    type: "string",
    "default": "normal"
  }), transitionAttr), {}, _defineProperty({}, "".concat(controlName, "backgroundType"), {
    type: "string",
    "default": isBgDefaultGradient === true ? "gradient" : "classic"
  }), bgColorAttr), {}, (_objectSpread4 = {}, _defineProperty(_objectSpread4, "".concat(controlName, "gradientColor"), {
    type: "string",
    "default": defaultBgGradient
  }), _defineProperty(_objectSpread4, "hov_".concat(controlName, "backgroundType"), {
    type: "string",
    "default": "classic"
  }), _defineProperty(_objectSpread4, "hov_".concat(controlName, "backgroundColor"), {
    type: "string"
  }), _defineProperty(_objectSpread4, "hov_".concat(controlName, "gradientColor"), {
    type: "string"
  }), _objectSpread4));

  var mainBgiAttrs = (_mainBgiAttrs = {}, _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImageURL"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImageID"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgAttachment"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImageURL"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImageID"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgAttachment"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgCustomSize"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosX"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosY"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgCustomSize"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosX"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosY"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _mainBgiAttrs);

  var ovlWithoutBgiAttrs = _objectSpread(_objectSpread(_defineProperty({}, "".concat(controlName, "isBgOverlay"), {
    type: "boolean",
    "default": false
  }), ovlTransitionAttr), {}, (_objectSpread6 = {}, _defineProperty(_objectSpread6, "".concat(controlName, "ovl_hoverType"), {
    type: "string",
    "default": "normal"
  }), _defineProperty(_objectSpread6, "".concat(controlName, "overlayType"), {
    type: "string",
    "default": "classic"
  }), _defineProperty(_objectSpread6, "".concat(controlName, "overlayColor"), {
    type: "string"
  }), _defineProperty(_objectSpread6, "".concat(controlName, "overlayGradient"), {
    type: "string",
    "default": "linear-gradient(45deg,#000000cc,#00000099)"
  }), _defineProperty(_objectSpread6, "".concat(controlName, "ovl_opacity"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_objectSpread6, "".concat(controlName, "ovl_blendMode"), {
    type: "string"
  }), _defineProperty(_objectSpread6, "".concat(controlName, "ovl_allowFilters"), {
    type: "boolean",
    "default": false
  }), _defineProperty(_objectSpread6, "".concat(controlName, "ovl_fltrBrightness"), {
    type: "number",
    "default": 100
  }), _defineProperty(_objectSpread6, "".concat(controlName, "ovl_fltrContrast"), {
    type: "number",
    "default": 100
  }), _defineProperty(_objectSpread6, "".concat(controlName, "ovl_fltrSaturation"), {
    type: "number",
    "default": 100
  }), _defineProperty(_objectSpread6, "".concat(controlName, "ovl_fltrBlur"), {
    type: "number",
    "default": 0
  }), _defineProperty(_objectSpread6, "".concat(controlName, "ovl_fltrHue"), {
    type: "number",
    "default": 0
  }), _defineProperty(_objectSpread6, "hov_".concat(controlName, "overlayType"), {
    type: "string",
    "default": "classic"
  }), _defineProperty(_objectSpread6, "hov_".concat(controlName, "overlayColor"), {
    type: "string"
  }), _defineProperty(_objectSpread6, "hov_".concat(controlName, "overlayGradient"), {
    type: "string"
  }), _defineProperty(_objectSpread6, "hov_".concat(controlName, "ovl_bgImageURL"), {
    type: "string"
  }), _defineProperty(_objectSpread6, "hov_".concat(controlName, "ovl_bgImageID"), {
    type: "string"
  }), _defineProperty(_objectSpread6, "hov_".concat(controlName, "ovl_bgImgAttachment"), {
    type: "string"
  }), _defineProperty(_objectSpread6, "hov_".concat(controlName, "ovl_opacity"), {
    type: "number"
  }), _defineProperty(_objectSpread6, "hov_".concat(controlName, "ovl_blendMode"), {
    type: "string"
  }), _defineProperty(_objectSpread6, "hov_".concat(controlName, "ovl_allowFilters"), {
    type: "boolean",
    "default": false
  }), _defineProperty(_objectSpread6, "hov_".concat(controlName, "ovl_fltrBrightness"), {
    type: "number"
  }), _defineProperty(_objectSpread6, "hov_".concat(controlName, "ovl_fltrContrast"), {
    type: "number"
  }), _defineProperty(_objectSpread6, "hov_".concat(controlName, "ovl_fltrSaturation"), {
    type: "number"
  }), _defineProperty(_objectSpread6, "hov_".concat(controlName, "ovl_fltrBlur"), {
    type: "number"
  }), _defineProperty(_objectSpread6, "hov_".concat(controlName, "ovl_fltrHue"), {
    type: "number"
  }), _objectSpread6));

  var ovlBgiAttrs = (_ovlBgiAttrs = {}, _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImageURL"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImageID"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgAttachment"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _ovlBgiAttrs);
  var result = noOverlay === true ? noMainBgi === true ? _objectSpread({}, mainWithoutBgiAttrs) : _objectSpread(_objectSpread({}, mainWithoutBgiAttrs), mainBgiAttrs) : noOverlayBgi === true && noMainBgi === true ? _objectSpread(_objectSpread({}, mainWithoutBgiAttrs), ovlWithoutBgiAttrs) : noOverlayBgi === true && noMainBgi === false ? _objectSpread(_objectSpread(_objectSpread({}, mainWithoutBgiAttrs), mainBgiAttrs), ovlWithoutBgiAttrs) : noOverlayBgi === false && noMainBgi === true ? _objectSpread(_objectSpread(_objectSpread({}, mainWithoutBgiAttrs), ovlWithoutBgiAttrs), ovlBgiAttrs) : _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, mainWithoutBgiAttrs), mainBgiAttrs), ovlWithoutBgiAttrs), ovlBgiAttrs);
  return result;
}; // function to generate Background control styles based on the unique controlName(prefix)

var generateBackgroundControlStyles = function generateBackgroundControlStyles(_ref5) {
  var controlName = _ref5.controlName,
      attributes = _ref5.attributes,
      _ref5$noOverlay = _ref5.noOverlay,
      noOverlay = _ref5$noOverlay === void 0 ? false : _ref5$noOverlay,
      _ref5$noMainBgi = _ref5.noMainBgi,
      noMainBgi = _ref5$noMainBgi === void 0 ? false : _ref5$noMainBgi,
      _ref5$noOverlayBgi = _ref5.noOverlayBgi,
      noOverlayBgi = _ref5$noOverlayBgi === void 0 ? false : _ref5$noOverlayBgi,
      _ref5$noTransition = _ref5.noTransition,
      noTransition = _ref5$noTransition === void 0 ? false : _ref5$noTransition;
  var bg_transition = attributes["".concat(controlName, "bg_transition")],
      backgroundType = attributes["".concat(controlName, "backgroundType")],
      backgroundColor = attributes["".concat(controlName, "backgroundColor")],
      gradientColor = attributes["".concat(controlName, "gradientColor")],
      bgImageURL = attributes["".concat(controlName, "bgImageURL")],
      backgroundSize = attributes["".concat(controlName, "backgroundSize")],
      bgImgCustomSize = attributes["".concat(controlName, "bgImgCustomSize")],
      bgImgCustomSizeUnit = attributes["".concat(controlName, "bgImgCustomSizeUnit")],
      bgImgPos = attributes["".concat(controlName, "bgImgPos")],
      bgImgcustomPosX = attributes["".concat(controlName, "bgImgcustomPosX")],
      bgImgcustomPosXUnit = attributes["".concat(controlName, "bgImgcustomPosXUnit")],
      bgImgcustomPosY = attributes["".concat(controlName, "bgImgcustomPosY")],
      bgImgcustomPosYUnit = attributes["".concat(controlName, "bgImgcustomPosYUnit")],
      bgImgAttachment = attributes["".concat(controlName, "bgImgAttachment")],
      bgImgRepeat = attributes["".concat(controlName, "bgImgRepeat")],
      TABbackgroundSize = attributes["TAB".concat(controlName, "backgroundSize")],
      TABbgImgCustomSize = attributes["TAB".concat(controlName, "bgImgCustomSize")],
      TABbgImgCustomSizeUnit = attributes["TAB".concat(controlName, "bgImgCustomSizeUnit")],
      TABbgImgPos = attributes["TAB".concat(controlName, "bgImgPos")],
      TABbgImgcustomPosX = attributes["TAB".concat(controlName, "bgImgcustomPosX")],
      TABbgImgcustomPosXUnit = attributes["TAB".concat(controlName, "bgImgcustomPosXUnit")],
      TABbgImgcustomPosY = attributes["TAB".concat(controlName, "bgImgcustomPosY")],
      TABbgImgcustomPosYUnit = attributes["TAB".concat(controlName, "bgImgcustomPosYUnit")],
      TABbgImgRepeat = attributes["TAB".concat(controlName, "bgImgRepeat")],
      MOBbackgroundSize = attributes["MOB".concat(controlName, "backgroundSize")],
      MOBbgImgCustomSize = attributes["MOB".concat(controlName, "bgImgCustomSize")],
      MOBbgImgCustomSizeUnit = attributes["MOB".concat(controlName, "bgImgCustomSizeUnit")],
      MOBbgImgPos = attributes["MOB".concat(controlName, "bgImgPos")],
      MOBbgImgcustomPosX = attributes["MOB".concat(controlName, "bgImgcustomPosX")],
      MOBbgImgcustomPosXUnit = attributes["MOB".concat(controlName, "bgImgcustomPosXUnit")],
      MOBbgImgcustomPosY = attributes["MOB".concat(controlName, "bgImgcustomPosY")],
      MOBbgImgcustomPosYUnit = attributes["MOB".concat(controlName, "bgImgcustomPosYUnit")],
      MOBbgImgRepeat = attributes["MOB".concat(controlName, "bgImgRepeat")],
      hov_backgroundType = attributes["hov_".concat(controlName, "backgroundType")],
      hov_backgroundColor = attributes["hov_".concat(controlName, "backgroundColor")],
      hov_gradientColor = attributes["hov_".concat(controlName, "gradientColor")],
      hov_bgImageURL = attributes["hov_".concat(controlName, "bgImageURL")],
      hov_bgImgAttachment = attributes["hov_".concat(controlName, "bgImgAttachment")],
      hov_backgroundSize = attributes["hov_".concat(controlName, "backgroundSize")],
      hov_bgImgCustomSize = attributes["hov_".concat(controlName, "bgImgCustomSize")],
      hov_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "bgImgCustomSizeUnit")],
      hov_bgImgPos = attributes["hov_".concat(controlName, "bgImgPos")],
      hov_bgImgcustomPosX = attributes["hov_".concat(controlName, "bgImgcustomPosX")],
      hov_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "bgImgcustomPosXUnit")],
      hov_bgImgcustomPosY = attributes["hov_".concat(controlName, "bgImgcustomPosY")],
      hov_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "bgImgcustomPosYUnit")],
      hov_bgImgRepeat = attributes["hov_".concat(controlName, "bgImgRepeat")],
      hov_TABbackgroundSize = attributes["hov_TAB".concat(controlName, "backgroundSize")],
      hov_TABbgImgCustomSize = attributes["hov_TAB".concat(controlName, "bgImgCustomSize")],
      hov_TABbgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_TABbgImgPos = attributes["hov_TAB".concat(controlName, "bgImgPos")],
      hov_TABbgImgcustomPosX = attributes["hov_TAB".concat(controlName, "bgImgcustomPosX")],
      hov_TABbgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_TABbgImgcustomPosY = attributes["hov_TAB".concat(controlName, "bgImgcustomPosY")],
      hov_TABbgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_TABbgImgRepeat = attributes["hov_TAB".concat(controlName, "bgImgRepeat")],
      hov_MOBbackgroundSize = attributes["hov_MOB".concat(controlName, "backgroundSize")],
      hov_MOBbgImgCustomSize = attributes["hov_MOB".concat(controlName, "bgImgCustomSize")],
      hov_MOBbgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_MOBbgImgPos = attributes["hov_MOB".concat(controlName, "bgImgPos")],
      hov_MOBbgImgcustomPosX = attributes["hov_MOB".concat(controlName, "bgImgcustomPosX")],
      hov_MOBbgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_MOBbgImgcustomPosY = attributes["hov_MOB".concat(controlName, "bgImgcustomPosY")],
      hov_MOBbgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_MOBbgImgRepeat = attributes["hov_MOB".concat(controlName, "bgImgRepeat")],
      isBgOverlay = attributes["".concat(controlName, "isBgOverlay")],
      ovl_bg_transition = attributes["".concat(controlName, "ovl_bg_transition")],
      ovl_filtersTransition = attributes["".concat(controlName, "ovl_filtersTransition")],
      ovl_opacityTransition = attributes["".concat(controlName, "ovl_opacityTransition")],
      overlayType = attributes["".concat(controlName, "overlayType")],
      overlayColor = attributes["".concat(controlName, "overlayColor")],
      overlayGradient = attributes["".concat(controlName, "overlayGradient")],
      ovl_bgImageURL = attributes["".concat(controlName, "ovl_bgImageURL")],
      ovl_bgImgAttachment = attributes["".concat(controlName, "ovl_bgImgAttachment")],
      ovl_opacity = attributes["".concat(controlName, "ovl_opacity")],
      ovl_blendMode = attributes["".concat(controlName, "ovl_blendMode")],
      ovl_allowFilters = attributes["".concat(controlName, "ovl_allowFilters")],
      ovl_fltrBrightness = attributes["".concat(controlName, "ovl_fltrBrightness")],
      ovl_fltrContrast = attributes["".concat(controlName, "ovl_fltrContrast")],
      ovl_fltrSaturation = attributes["".concat(controlName, "ovl_fltrSaturation")],
      ovl_fltrBlur = attributes["".concat(controlName, "ovl_fltrBlur")],
      ovl_fltrHue = attributes["".concat(controlName, "ovl_fltrHue")],
      ovl_backgroundSize = attributes["".concat(controlName, "ovl_backgroundSize")],
      ovl_bgImgCustomSize = attributes["".concat(controlName, "ovl_bgImgCustomSize")],
      ovl_bgImgCustomSizeUnit = attributes["".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      ovl_bgImgPos = attributes["".concat(controlName, "ovl_bgImgPos")],
      ovl_bgImgcustomPosX = attributes["".concat(controlName, "ovl_bgImgcustomPosX")],
      ovl_bgImgcustomPosXUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      ovl_bgImgcustomPosY = attributes["".concat(controlName, "ovl_bgImgcustomPosY")],
      ovl_bgImgcustomPosYUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      ovl_bgImgRepeat = attributes["".concat(controlName, "ovl_bgImgRepeat")],
      TABovl_backgroundSize = attributes["TAB".concat(controlName, "ovl_backgroundSize")],
      TABovl_bgImgCustomSize = attributes["TAB".concat(controlName, "ovl_bgImgCustomSize")],
      TABovl_bgImgCustomSizeUnit = attributes["TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      TABovl_bgImgPos = attributes["TAB".concat(controlName, "ovl_bgImgPos")],
      TABovl_bgImgcustomPosX = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      TABovl_bgImgcustomPosXUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      TABovl_bgImgcustomPosY = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      TABovl_bgImgcustomPosYUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      TABovl_bgImgRepeat = attributes["TAB".concat(controlName, "ovl_bgImgRepeat")],
      MOBovl_backgroundSize = attributes["MOB".concat(controlName, "ovl_backgroundSize")],
      MOBovl_bgImgCustomSize = attributes["MOB".concat(controlName, "ovl_bgImgCustomSize")],
      MOBovl_bgImgCustomSizeUnit = attributes["MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      MOBovl_bgImgPos = attributes["MOB".concat(controlName, "ovl_bgImgPos")],
      MOBovl_bgImgcustomPosX = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      MOBovl_bgImgcustomPosXUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      MOBovl_bgImgcustomPosY = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      MOBovl_bgImgcustomPosYUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      MOBovl_bgImgRepeat = attributes["MOB".concat(controlName, "ovl_bgImgRepeat")],
      hov_overlayType = attributes["hov_".concat(controlName, "overlayType")],
      hov_overlayColor = attributes["hov_".concat(controlName, "overlayColor")],
      hov_overlayGradient = attributes["hov_".concat(controlName, "overlayGradient")],
      hov_ovl_bgImageURL = attributes["hov_".concat(controlName, "ovl_bgImageURL")],
      hov_ovl_bgImgAttachment = attributes["hov_".concat(controlName, "ovl_bgImgAttachment")],
      hov_ovl_opacity = attributes["hov_".concat(controlName, "ovl_opacity")],
      hov_ovl_blendMode = attributes["hov_".concat(controlName, "ovl_blendMode")],
      hov_ovl_allowFilters = attributes["hov_".concat(controlName, "ovl_allowFilters")],
      hov_ovl_fltrBrightness = attributes["hov_".concat(controlName, "ovl_fltrBrightness")],
      hov_ovl_fltrContrast = attributes["hov_".concat(controlName, "ovl_fltrContrast")],
      hov_ovl_fltrSaturation = attributes["hov_".concat(controlName, "ovl_fltrSaturation")],
      hov_ovl_fltrBlur = attributes["hov_".concat(controlName, "ovl_fltrBlur")],
      hov_ovl_fltrHue = attributes["hov_".concat(controlName, "ovl_fltrHue")],
      hov_ovl_backgroundSize = attributes["hov_".concat(controlName, "ovl_backgroundSize")],
      hov_ovl_bgImgCustomSize = attributes["hov_".concat(controlName, "ovl_bgImgCustomSize")],
      hov_ovl_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_ovl_bgImgPos = attributes["hov_".concat(controlName, "ovl_bgImgPos")],
      hov_ovl_bgImgcustomPosX = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_ovl_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_ovl_bgImgcustomPosY = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_ovl_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_ovl_bgImgRepeat = attributes["hov_".concat(controlName, "ovl_bgImgRepeat")],
      hov_TABovl_backgroundSize = attributes["hov_TAB".concat(controlName, "ovl_backgroundSize")],
      hov_TABovl_bgImgCustomSize = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_TABovl_bgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_TABovl_bgImgPos = attributes["hov_TAB".concat(controlName, "ovl_bgImgPos")],
      hov_TABovl_bgImgcustomPosX = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_TABovl_bgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_TABovl_bgImgcustomPosY = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_TABovl_bgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_TABovl_bgImgRepeat = attributes["hov_TAB".concat(controlName, "ovl_bgImgRepeat")],
      hov_MOBovl_backgroundSize = attributes["hov_MOB".concat(controlName, "ovl_backgroundSize")],
      hov_MOBovl_bgImgCustomSize = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_MOBovl_bgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_MOBovl_bgImgPos = attributes["hov_MOB".concat(controlName, "ovl_bgImgPos")],
      hov_MOBovl_bgImgcustomPosX = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_MOBovl_bgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_MOBovl_bgImgcustomPosY = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_MOBovl_bgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_MOBovl_bgImgRepeat = attributes["hov_MOB".concat(controlName, "ovl_bgImgRepeat")];
  var backgroundStylesDesktop = "\n  ".concat(noMainBgi === false && backgroundType === "classic" && bgImageURL || backgroundType === "gradient" && gradientColor ? "\n    background-image: ".concat(backgroundType === "classic" ? "url(\"".concat(bgImageURL, "\")") : backgroundType === "gradient" ? gradientColor : "none", ";\n    ") : " ", "\n      \n  \n      ").concat(noMainBgi === false && backgroundType === "classic" && bgImageURL ? "\n          ".concat(backgroundSize && backgroundSize !== "custom" ? "background-size: ".concat(backgroundSize, ";") : backgroundSize === "custom" ? "background-size: ".concat(bgImgCustomSize).concat(bgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(bgImgPos && bgImgPos !== "custom" ? "background-position: ".concat(bgImgPos, ";") : bgImgPos === "custom" ? "background-position: ".concat(bgImgcustomPosX).concat(bgImgcustomPosXUnit, " ").concat(bgImgcustomPosY).concat(bgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(bgImgAttachment ? "background-attachment: ".concat(bgImgAttachment, ";") : " ", "\n  \n          ").concat(bgImgRepeat ? "background-repeat: ".concat(bgImgRepeat, ";") : " ", "\n          \n         \n          ") : " ", "\n\n      ").concat(isBgOverlay ? "\n            z-index: 2;\n            position: relative;\n          " : " ", "\t\n    \n      ").concat(backgroundColor ? "background-color: ".concat(backgroundColor, ";") : " ", "\n  \n    ");
  var hoverBackgroundStylesDesktop = "\n  \n    ".concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL || hov_backgroundType === "gradient" && hov_gradientColor ? "\n        background-image: ".concat(hov_backgroundType === "classic" ? "url(\"".concat(hov_bgImageURL, "\")") : hov_backgroundType === "gradient" ? hov_gradientColor : "none", ";    \n        ") : " ", "\n  \n   \n  \n    ").concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL ? "\n        ".concat(hov_backgroundSize && hov_backgroundSize !== "custom" ? "background-size: ".concat(hov_backgroundSize, ";") : hov_backgroundSize === "custom" ? "background-size: ".concat(hov_bgImgCustomSize).concat(hov_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_bgImgPos && hov_bgImgPos !== "custom" ? "background-position: ".concat(hov_bgImgPos, ";") : hov_bgImgPos === "custom" ? "background-position: ".concat(hov_bgImgcustomPosX).concat(hov_bgImgcustomPosXUnit, " ").concat(hov_bgImgcustomPosY).concat(hov_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_bgImgAttachment ? "background-attachment: ".concat(hov_bgImgAttachment, ";") : " ", "\n  \n        ").concat(hov_bgImgRepeat ? "background-repeat: ".concat(hov_bgImgRepeat, ";") : " ", "\n        \n        ") : " ", "\n  \n        ").concat(hov_backgroundColor ? "background-color: ".concat(hov_backgroundColor, ";") : " ", "\n  \n  ");
  var backgroundStylesTab = "\n      ".concat(noMainBgi === false && backgroundType === "classic" && bgImageURL ? "\n          ".concat(TABbackgroundSize && TABbackgroundSize !== "custom" ? "background-size: ".concat(TABbackgroundSize, ";") : TABbackgroundSize === "custom" ? "background-size: ".concat(TABbgImgCustomSize).concat(TABbgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(TABbgImgPos && TABbgImgPos !== "custom" ? "background-position: ".concat(TABbgImgPos, ";") : TABbgImgPos === "custom" ? "background-position: ".concat(TABbgImgcustomPosX).concat(TABbgImgcustomPosXUnit, " ").concat(TABbgImgcustomPosY).concat(TABbgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(TABbgImgRepeat ? "background-repeat: ".concat(TABbgImgRepeat, ";") : " ", "\n          background-attachment: scroll;\n          ") : " ", "\n  \n    ");
  var hoverBackgroundStylesTab = "\n    ".concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL ? "\n        ".concat(hov_TABbackgroundSize && hov_TABbackgroundSize !== "custom" ? "background-size: ".concat(hov_TABbackgroundSize, ";") : hov_TABbackgroundSize === "custom" ? "background-size: ".concat(hov_TABbgImgCustomSize).concat(hov_TABbgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_TABbgImgPos && hov_TABbgImgPos !== "custom" ? "background-position: ".concat(hov_TABbgImgPos, ";") : hov_TABbgImgPos === "custom" ? "background-position: ".concat(hov_TABbgImgcustomPosX).concat(hov_TABbgImgcustomPosXUnit, " ").concat(hov_TABbgImgcustomPosY).concat(hov_TABbgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_TABbgImgRepeat ? "background-repeat: ".concat(hov_TABbgImgRepeat, ";") : " ", "\n        background-attachment: scroll;\n        ") : " ", "\n  \n  ");
  var backgroundStylesMobile = "\n      ".concat(noMainBgi === false && backgroundType === "classic" && bgImageURL ? "\n          ".concat(MOBbackgroundSize && MOBbackgroundSize !== "custom" ? "background-size: ".concat(MOBbackgroundSize, ";") : MOBbackgroundSize === "custom" ? "background-size: ".concat(MOBbgImgCustomSize).concat(MOBbgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(MOBbgImgPos && MOBbgImgPos !== "custom" ? "background-position: ".concat(MOBbgImgPos, ";") : MOBbgImgPos === "custom" ? "background-position: ".concat(MOBbgImgcustomPosX).concat(MOBbgImgcustomPosXUnit, " ").concat(MOBbgImgcustomPosY).concat(MOBbgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(MOBbgImgRepeat ? "background-repeat: ".concat(MOBbgImgRepeat, ";") : " ", "\n  \n          ") : " ", "\n  \n    ");
  var hoverBackgroundStylesMobile = "\n    ".concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL ? "\n        ".concat(hov_MOBbackgroundSize && hov_MOBbackgroundSize !== "custom" ? "background-size: ".concat(hov_MOBbackgroundSize, ";") : hov_MOBbackgroundSize === "custom" ? "background-size: ".concat(hov_MOBbgImgCustomSize).concat(hov_MOBbgImgCustomSizeUnit, " auto;") : " ", "\n    \n        ").concat(hov_MOBbgImgPos && hov_MOBbgImgPos !== "custom" ? "background-position: ".concat(hov_MOBbgImgPos, ";") : hov_MOBbgImgPos === "custom" ? "background-position: ".concat(hov_MOBbgImgcustomPosX).concat(hov_MOBbgImgcustomPosXUnit, " ").concat(hov_MOBbgImgcustomPosY).concat(hov_MOBbgImgcustomPosYUnit, ";") : " ", "\n    \n        ").concat(hov_MOBbgImgRepeat ? "background-repeat: ".concat(hov_MOBbgImgRepeat, ";") : " ", "\n    \n        ") : " ", "\n    \n    ");
  var overlayStylesDesktop = "\n    \n      ".concat(noOverlay === false && isBgOverlay ? "\n            content: \"\";\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            right: 0;\n            left: 0;\n            z-index: 0;\n            ".concat(noOverlayBgi === false && overlayType === "classic" && ovl_bgImageURL || overlayType === "gradient" && overlayGradient ? "\n                background-image: ".concat(overlayType === "classic" ? "url(\"".concat(ovl_bgImageURL, "\")") : overlayType === "gradient" ? overlayGradient : "none", ";              \n              ") : " ", "\n           \n            ").concat(overlayColor ? "background-color: ".concat(overlayColor, ";") : " ", "\n            ").concat(ovl_opacity || ovl_opacity === 0 ? "opacity: ".concat(ovl_opacity, ";") : " ", "\n            ").concat(ovl_blendMode ? "mix-blend-mode: ".concat(ovl_blendMode, ";") : " ", "\n            ").concat(ovl_allowFilters ? "filter: brightness( ".concat(ovl_fltrBrightness, "% ) contrast( ").concat(ovl_fltrContrast, "% ) saturate( ").concat(ovl_fltrSaturation, "% ) blur( ").concat(ovl_fltrBlur, "px ) hue-rotate( \n              ").concat(ovl_fltrHue, "deg );") : " ", "\n  \n        ").concat(noOverlayBgi === false && overlayType === "classic" && ovl_bgImageURL ? "\n            ".concat(ovl_backgroundSize && ovl_backgroundSize !== "custom" ? "background-size: ".concat(ovl_backgroundSize, ";") : ovl_backgroundSize === "custom" ? "background-size: ".concat(ovl_bgImgCustomSize).concat(ovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n            ").concat(ovl_bgImgPos && ovl_bgImgPos !== "custom" ? "background-position: ".concat(ovl_bgImgPos, ";") : ovl_bgImgPos === "custom" ? "background-position: ".concat(ovl_bgImgcustomPosX).concat(ovl_bgImgcustomPosXUnit, " ").concat(ovl_bgImgcustomPosY).concat(ovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n            ").concat(ovl_bgImgAttachment ? "background-attachment: ".concat(ovl_bgImgAttachment, ";") : " ", "\n  \n            ").concat(ovl_bgImgRepeat ? "background-repeat: ".concat(ovl_bgImgRepeat, ";") : " ", "\n            \n            ") : " ", "\n  \n        ") : " ", "\n    \n    \n    ");
  var hoverOverlayStylesDesktop = "\n    \n    ".concat(noOverlay === false && isBgOverlay ? "\n        ".concat(noOverlayBgi === false && hov_overlayType === "classic" && hov_ovl_bgImageURL || hov_overlayType === "gradient" && hov_overlayGradient ? "\n          background-image: ".concat(hov_overlayType === "classic" ? "url(\"".concat(hov_ovl_bgImageURL, "\")") : hov_overlayType === "gradient" ? hov_overlayGradient : "none", ";\n          ") : " ", "\n  \n        ").concat(hov_overlayColor ? "background-color: ".concat(hov_overlayColor, ";") : " ", "\n        ").concat(hov_ovl_opacity || hov_ovl_opacity === 0 ? "opacity: ".concat(hov_ovl_opacity, ";") : " ", "\n        ").concat(hov_ovl_blendMode ? "mix-blend-mode: ".concat(hov_ovl_blendMode, ";") : " ", "\n        ").concat(hov_ovl_allowFilters ? "filter: brightness( ".concat(hov_ovl_fltrBrightness, "% ) contrast( ").concat(hov_ovl_fltrContrast, "% ) saturate( ").concat(hov_ovl_fltrSaturation, "% ) blur( ").concat(hov_ovl_fltrBlur, "px ) hue-rotate( \n          ").concat(hov_ovl_fltrHue, "deg );") : " ", "\n    \n      ").concat(noOverlayBgi === false && hov_overlayType === "classic" && hov_ovl_bgImageURL ? "\n          ".concat(hov_ovl_backgroundSize && hov_ovl_backgroundSize !== "custom" ? "background-size: ".concat(hov_ovl_backgroundSize, ";") : hov_ovl_backgroundSize === "custom" ? "background-size: ".concat(hov_ovl_bgImgCustomSize).concat(hov_ovl_bgImgCustomSizeUnit, " auto;") : " ", "\n    \n          ").concat(hov_ovl_bgImgPos && hov_ovl_bgImgPos !== "custom" ? "background-position: ".concat(hov_ovl_bgImgPos, ";") : hov_ovl_bgImgPos === "custom" ? "background-position: ".concat(hov_ovl_bgImgcustomPosX).concat(hov_ovl_bgImgcustomPosXUnit, " ").concat(hov_ovl_bgImgcustomPosY).concat(hov_ovl_bgImgcustomPosYUnit, ";") : " ", "\n    \n          ").concat(hov_ovl_bgImgAttachment ? "background-attachment: ".concat(hov_ovl_bgImgAttachment, ";") : " ", "\n    \n          ").concat(hov_ovl_bgImgRepeat ? "background-repeat: ".concat(hov_ovl_bgImgRepeat, ";") : " ", "\n          \n          ") : " ", "\n    \n      ") : " ", "\n    \n    \n    ");
  var overlayStylesTab = "\n    ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && overlayType === "classic" && ovl_bgImageURL ? "\n        ".concat(TABovl_backgroundSize && TABovl_backgroundSize !== "custom" ? "background-size: ".concat(TABovl_backgroundSize, ";") : TABovl_backgroundSize === "custom" ? "background-size: ".concat(TABovl_bgImgCustomSize).concat(TABovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(TABovl_bgImgPos && TABovl_bgImgPos !== "custom" ? "background-position: ".concat(TABovl_bgImgPos, ";") : TABovl_bgImgPos === "custom" ? "background-position: ".concat(TABovl_bgImgcustomPosX).concat(TABovl_bgImgcustomPosXUnit, " ").concat(TABovl_bgImgcustomPosY).concat(TABovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(TABovl_bgImgRepeat ? "background-repeat: ".concat(TABovl_bgImgRepeat, ";") : " ", "\n          background-attachment: scroll;\n        ") : " ", "\n    \n    ");
  var hoverOverlayStylesTab = "\n  ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && hov_overlayType === "classic" && hov_ovl_bgImageURL ? "\n      ".concat(hov_TABovl_backgroundSize && hov_TABovl_backgroundSize !== "custom" ? "background-size: ".concat(hov_TABovl_backgroundSize, ";") : hov_TABovl_backgroundSize === "custom" ? "background-size: ".concat(hov_TABovl_bgImgCustomSize).concat(hov_TABovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_TABovl_bgImgPos && hov_TABovl_bgImgPos !== "custom" ? "background-position: ".concat(hov_TABovl_bgImgPos, ";") : hov_TABovl_bgImgPos === "custom" ? "background-position: ".concat(hov_TABovl_bgImgcustomPosX).concat(hov_TABovl_bgImgcustomPosXUnit, " ").concat(hov_TABovl_bgImgcustomPosY).concat(hov_TABovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_TABovl_bgImgRepeat ? "background-repeat: ".concat(hov_TABovl_bgImgRepeat, ";") : " ", "\n        background-attachment: scroll;\n      ") : " ", "\n  \n  ");
  var overlayStylesMobile = "\n    ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && overlayType === "classic" && ovl_bgImageURL ? "\n        ".concat(MOBovl_backgroundSize && MOBovl_backgroundSize !== "custom" ? "background-size: ".concat(MOBovl_backgroundSize, ";") : MOBovl_backgroundSize === "custom" ? "background-size: ".concat(MOBovl_bgImgCustomSize).concat(MOBovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(MOBovl_bgImgPos && MOBovl_bgImgPos !== "custom" ? "background-position: ".concat(MOBovl_bgImgPos, ";") : MOBovl_bgImgPos === "custom" ? "background-position: ".concat(MOBovl_bgImgcustomPosX).concat(MOBovl_bgImgcustomPosXUnit, " ").concat(MOBovl_bgImgcustomPosY).concat(MOBovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(MOBovl_bgImgRepeat ? "background-repeat: ".concat(MOBovl_bgImgRepeat, ";") : " ", "\n        ") : " ", "\n    \n    ");
  var hoverOverlayStylesMobile = "\n    ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && hov_overlayType === "classic" && hov_ovl_bgImageURL ? "\n        ".concat(hov_MOBovl_backgroundSize && hov_MOBovl_backgroundSize !== "custom" ? "background-size: ".concat(hov_MOBovl_backgroundSize, ";") : hov_MOBovl_backgroundSize === "custom" ? "background-size: ".concat(hov_MOBovl_bgImgCustomSize).concat(hov_MOBovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_MOBovl_bgImgPos && hov_MOBovl_bgImgPos !== "custom" ? "background-position: ".concat(hov_MOBovl_bgImgPos, ";") : hov_MOBovl_bgImgPos === "custom" ? "background-position: ".concat(hov_MOBovl_bgImgcustomPosX).concat(hov_MOBovl_bgImgcustomPosXUnit, " ").concat(hov_MOBovl_bgImgcustomPosY).concat(hov_MOBovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_MOBovl_bgImgRepeat ? "background-repeat: ".concat(hov_MOBovl_bgImgRepeat, ";") : " ", "\n        ") : " ", "\n    \n    ");
  var bgTransitionStyle = noTransition ? " " : "background ".concat(bg_transition || 0, "s");
  var ovlTransitionStyle = noTransition ? " " : "background ".concat(ovl_bg_transition || 0, "s, opacity ").concat(ovl_opacityTransition || 0, "s, filter ").concat(ovl_filtersTransition || 0, "s");
  return {
    backgroundStylesDesktop: backgroundStylesDesktop,
    hoverBackgroundStylesDesktop: hoverBackgroundStylesDesktop,
    backgroundStylesTab: backgroundStylesTab,
    hoverBackgroundStylesTab: hoverBackgroundStylesTab,
    backgroundStylesMobile: backgroundStylesMobile,
    hoverBackgroundStylesMobile: hoverBackgroundStylesMobile,
    overlayStylesDesktop: overlayStylesDesktop,
    hoverOverlayStylesDesktop: hoverOverlayStylesDesktop,
    overlayStylesTab: overlayStylesTab,
    hoverOverlayStylesTab: hoverOverlayStylesTab,
    overlayStylesMobile: overlayStylesMobile,
    hoverOverlayStylesMobile: hoverOverlayStylesMobile,
    bgTransitionStyle: bgTransitionStyle,
    ovlTransitionStyle: ovlTransitionStyle
  };
};

/***/ }),

/***/ "./util/helpers/borderShadowHelpers.js":
/*!*********************************************!*\
  !*** ./util/helpers/borderShadowHelpers.js ***!
  \*********************************************/
/*! exports provided: generateBorderShadowAttributes, generateBorderShadowStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowAttributes", function() { return generateBorderShadowAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowStyles", function() { return generateBorderShadowStyles; });
/* harmony import */ var _dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensionHelpers */ "./util/helpers/dimensionHelpers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Important: the following "generateBorderShadowAttributes" function must be declared below the "generateDimensionsAttributes" function declaration
// function to generate BorderShadow control's attributes

var generateBorderShadowAttributes = function generateBorderShadowAttributes(controlName) {
  var _objectSpread2, _shdAttrs, _transitionAttrs;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _defaults$bdrDefaults = defaults.bdrDefaults,
      bdrDefaults = _defaults$bdrDefaults === void 0 ? {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  } : _defaults$bdrDefaults,
      _defaults$rdsDefaults = defaults.rdsDefaults,
      rdsDefaults = _defaults$rdsDefaults === void 0 ? {} : _defaults$rdsDefaults,
      _defaults$noBorder = defaults.noBorder,
      noBorder = _defaults$noBorder === void 0 ? false : _defaults$noBorder,
      _defaults$noShadow = defaults.noShadow,
      noShadow = _defaults$noShadow === void 0 ? false : _defaults$noShadow;

  var bdrAttrs = _objectSpread(_objectSpread(_objectSpread(_objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, "".concat(controlName, "BorderType"), {
    type: "string",
    "default": "normal"
  }), _defineProperty(_objectSpread2, "".concat(controlName, "borderColor"), {
    type: "string"
  }), _defineProperty(_objectSpread2, "".concat(controlName, "borderStyle"), {
    type: "string",
    "default": "none"
  }), _defineProperty(_objectSpread2, "".concat(controlName, "HborderColor"), {
    type: "string"
  }), _defineProperty(_objectSpread2, "".concat(controlName, "HborderStyle"), {
    type: "string",
    "default": "none"
  }), _objectSpread2), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsAttributes"])("".concat(controlName, "Bdr_"), bdrDefaults)), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsAttributes"])("".concat(controlName, "Rds_"), rdsDefaults)), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsAttributes"])("".concat(controlName, "HBdr_"))), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsAttributes"])("".concat(controlName, "HRds_")));

  var shdAttrs = (_shdAttrs = {}, _defineProperty(_shdAttrs, "".concat(controlName, "hOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "vOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "blur"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "spread"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "shadowColor"), {
    type: "string"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "inset"), {
    type: "boolean",
    "default": false
  }), _defineProperty(_shdAttrs, "".concat(controlName, "shadowType"), {
    type: "string",
    "default": "normal"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverHOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverVOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverBlur"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverSpread"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverShadowColor"), {
    type: "string"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverInset"), {
    type: "boolean",
    "default": false
  }), _shdAttrs);
  var transitionAttrs = (_transitionAttrs = {}, _defineProperty(_transitionAttrs, "".concat(controlName, "borderTransition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_transitionAttrs, "".concat(controlName, "radiusTransition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_transitionAttrs, "".concat(controlName, "shadowTransition"), {
    type: "number",
    "default": 0.5
  }), _transitionAttrs);

  if (noBorder === true) {
    return _objectSpread(_objectSpread({}, shdAttrs), transitionAttrs);
  } else if (noShadow === true) {
    return _objectSpread(_objectSpread({}, bdrAttrs), transitionAttrs);
  } else {
    return _objectSpread(_objectSpread(_objectSpread({}, bdrAttrs), shdAttrs), transitionAttrs);
  }
}; // Important: the following "generateBorderShadowStyles" function must be declared below the "generateDimensionsControlStyles" function declaration
// function to generate BorderShadow control's Styles for an element based on it's controlName(prefix)

var generateBorderShadowStyles = function generateBorderShadowStyles(_ref) {
  var controlName = _ref.controlName,
      attributes = _ref.attributes,
      noBorder = _ref.noBorder,
      noShadow = _ref.noShadow;
  var borderStylesDesktop = "";
  var borderStylesTab = "";
  var borderStylesMobile = "";
  var radiusStylesDesktop = "";
  var radiusStylesTab = "";
  var radiusStylesMobile = "";
  var HborderStylesDesktop = "";
  var HborderStylesTab = "";
  var HborderStylesMobile = "";
  var HradiusStylesDesktop = "";
  var HradiusStylesTab = "";
  var HradiusStylesMobile = "";

  if (noBorder !== true) {
    var _generateDimensionsCo = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "Bdr_"),
      styleFor: "border",
      attributes: attributes
    }),
        F_borderStylesDesktop = _generateDimensionsCo.dimensionStylesDesktop,
        F_borderStylesTab = _generateDimensionsCo.dimensionStylesTab,
        F_borderStylesMobile = _generateDimensionsCo.dimensionStylesMobile;

    var _generateDimensionsCo2 = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "Rds_"),
      styleFor: "border-radius",
      attributes: attributes
    }),
        F_radiusStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
        F_radiusStylesTab = _generateDimensionsCo2.dimensionStylesTab,
        F_radiusStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;

    var _generateDimensionsCo3 = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "HBdr_"),
      styleFor: "border",
      attributes: attributes
    }),
        F_HborderStylesDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
        F_HborderStylesTab = _generateDimensionsCo3.dimensionStylesTab,
        F_HborderStylesMobile = _generateDimensionsCo3.dimensionStylesMobile;

    var _generateDimensionsCo4 = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "HRds_"),
      styleFor: "border-radius",
      attributes: attributes
    }),
        F_HradiusStylesDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
        F_HradiusStylesTab = _generateDimensionsCo4.dimensionStylesTab,
        F_HradiusStylesMobile = _generateDimensionsCo4.dimensionStylesMobile;

    borderStylesDesktop = F_borderStylesDesktop;
    borderStylesTab = F_borderStylesTab;
    borderStylesMobile = F_borderStylesMobile;
    radiusStylesDesktop = F_radiusStylesDesktop;
    radiusStylesTab = F_radiusStylesTab;
    radiusStylesMobile = F_radiusStylesMobile;
    HborderStylesDesktop = F_HborderStylesDesktop;
    HborderStylesTab = F_HborderStylesTab;
    HborderStylesMobile = F_HborderStylesMobile;
    HradiusStylesDesktop = F_HradiusStylesDesktop;
    HradiusStylesTab = F_HradiusStylesTab;
    HradiusStylesMobile = F_HradiusStylesMobile;
  } // const {
  //   dimensionStylesDesktop: borderStylesDesktop,
  //   dimensionStylesTab: borderStylesTab,
  //   dimensionStylesMobile: borderStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}Bdr_`,
  //   styleFor: "border",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: radiusStylesDesktop,
  //   dimensionStylesTab: radiusStylesTab,
  //   dimensionStylesMobile: radiusStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}Rds_`,
  //   styleFor: "border-radius",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: HborderStylesDesktop,
  //   dimensionStylesTab: HborderStylesTab,
  //   dimensionStylesMobile: HborderStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}HBdr_`,
  //   styleFor: "border",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: HradiusStylesDesktop,
  //   dimensionStylesTab: HradiusStylesTab,
  //   dimensionStylesMobile: HradiusStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}HRds_`,
  //   styleFor: "border-radius",
  //   attributes,
  // });


  var borderStyle = attributes["".concat(controlName, "borderStyle")],
      _attributes$ = attributes["".concat(controlName, "borderColor")],
      borderColor = _attributes$ === void 0 ? "#333333" : _attributes$,
      HborderStyle = attributes["".concat(controlName, "HborderStyle")],
      _attributes$2 = attributes["".concat(controlName, "HborderColor")],
      HborderColor = _attributes$2 === void 0 ? borderColor : _attributes$2,
      shadowColor = attributes["".concat(controlName, "shadowColor")],
      _attributes$3 = attributes["".concat(controlName, "hOffset")],
      hOffset = _attributes$3 === void 0 ? 0 : _attributes$3,
      _attributes$4 = attributes["".concat(controlName, "vOffset")],
      vOffset = _attributes$4 === void 0 ? 0 : _attributes$4,
      _attributes$5 = attributes["".concat(controlName, "blur")],
      blur = _attributes$5 === void 0 ? 0 : _attributes$5,
      _attributes$6 = attributes["".concat(controlName, "spread")],
      spread = _attributes$6 === void 0 ? 0 : _attributes$6,
      inset = attributes["".concat(controlName, "inset")],
      _attributes$7 = attributes["".concat(controlName, "hoverShadowColor")],
      hoverShadowColor = _attributes$7 === void 0 ? shadowColor : _attributes$7,
      _attributes$8 = attributes["".concat(controlName, "hoverHOffset")],
      hoverHOffset = _attributes$8 === void 0 ? hOffset : _attributes$8,
      _attributes$9 = attributes["".concat(controlName, "hoverVOffset")],
      hoverVOffset = _attributes$9 === void 0 ? vOffset : _attributes$9,
      _attributes$10 = attributes["".concat(controlName, "hoverBlur")],
      hoverBlur = _attributes$10 === void 0 ? blur : _attributes$10,
      _attributes$11 = attributes["".concat(controlName, "hoverSpread")],
      hoverSpread = _attributes$11 === void 0 ? spread : _attributes$11,
      borderTransition = attributes["".concat(controlName, "borderTransition")],
      radiusTransition = attributes["".concat(controlName, "radiusTransition")],
      shadowTransition = attributes["".concat(controlName, "shadowTransition")];
  var styesDesktop = "  \n      ".concat(noBorder !== true ? "\n          ".concat(radiusStylesDesktop, "\n          ").concat(borderStyle !== "none" && borderColor ? "\n              ".concat(borderStylesDesktop, "\n              border-color: ").concat(borderColor, ";\n              border-style: ").concat(borderStyle, ";\n              ") : " ", "\n          ") : " ", "\n    \n      ").concat(noShadow !== true ? shadowColor ? "box-shadow: ".concat(shadowColor, " ").concat(hOffset, "px ").concat(vOffset, "px ").concat(blur, "px ").concat(spread, "px ").concat(inset ? "inset" : "", ";") : " " : " ", "\n  \n  \n    ");
  var styesTab = "  \n    ".concat(noBorder !== true ? "\n        ".concat(borderColor ? borderStylesTab : " ", "\n        ").concat(radiusStylesTab, "\n        ") : " ", "\n      \n    ");
  var styesMobile = "\n    ".concat(noBorder !== true ? "\n        ".concat(borderColor ? borderStylesMobile : " ", "\n        ").concat(radiusStylesMobile, "\n        ") : " ", "\n    ");
  var stylesHoverDesktop = "\n    ".concat(noBorder !== true ? "\n        ".concat(HborderStyle !== "none" ? "\n              ".concat(HborderColor !== borderColor ? "border-color: ".concat(HborderColor, ";") : " ", " \n              ").concat(HborderStyle !== borderStyle ? "border-style: ".concat(HborderStyle, ";") : " ", "\n              ").concat(HborderStylesDesktop, "\n            ") : " ", "\n  \n        ").concat(HradiusStylesDesktop, "    \n        ") : " ", "   \n     \n    ").concat(noShadow !== true ? hoverShadowColor ? "box-shadow: ".concat(hoverShadowColor, " ").concat(hoverHOffset, "px ").concat(hoverVOffset, "px ").concat(hoverBlur, "px ").concat(hoverSpread, "px ").concat(inset ? "inset" : " ", ";") : " " : " ", "\n  \n    ");
  var stylesHoverTab = "\n    ".concat(noBorder !== true ? "\n        ".concat(HborderStyle !== "none" ? HborderStylesTab : " ", "\n        ").concat(HradiusStylesTab, "  \n        ") : " ", "\n    ");
  var stylesHoverMobile = "\n    ".concat(noBorder !== true ? "\n        ".concat(HborderStyle !== "none" ? HborderStylesMobile : " ", "\n        ").concat(HradiusStylesMobile, "\n        ") : " ", "\n     \n    ");
  var transitionStyle = "\n  border ".concat(borderTransition || 0, "s, border-radius ").concat(radiusTransition || 0, "s, box-shadow ").concat(shadowTransition || 0, "s\n  ");
  return {
    styesDesktop: styesDesktop,
    styesTab: styesTab,
    styesMobile: styesMobile,
    stylesHoverDesktop: stylesHoverDesktop,
    stylesHoverTab: stylesHoverTab,
    stylesHoverMobile: stylesHoverMobile,
    transitionStyle: transitionStyle
  };
};

/***/ }),

/***/ "./util/helpers/dimensionHelpers.js":
/*!******************************************!*\
  !*** ./util/helpers/dimensionHelpers.js ***!
  \******************************************/
/*! exports provided: generateDimensionsAttributes, generateDimensionsControlStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsAttributes", function() { return generateDimensionsAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsControlStyles", function() { return generateDimensionsControlStyles; });
/* harmony import */ var _hasVal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasVal */ "./util/helpers/hasVal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // function to generate New Dimensions-Control's attributes for multiple Dimensions control based on the array of values(prefixs)

var generateDimensionsAttributes = function generateDimensionsAttributes(controlName) {
  var _objectSpread2, _objectSpread3;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var top = defaults.top,
      right = defaults.right,
      bottom = defaults.bottom,
      left = defaults.left,
      _defaults$isLinked = defaults.isLinked,
      isLinked = _defaults$isLinked === void 0 ? true : _defaults$isLinked;
  var desktopTop = Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(top) ? _defineProperty({}, "".concat(controlName, "Top"), {
    type: "string",
    "default": "".concat(top)
  }) : _defineProperty({}, "".concat(controlName, "Top"), {
    type: "string"
  });
  var desktopRight = Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(right) ? _defineProperty({}, "".concat(controlName, "Right"), {
    type: "string",
    "default": "".concat(right)
  }) : _defineProperty({}, "".concat(controlName, "Right"), {
    type: "string"
  });
  var desktopBottom = Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(bottom) ? _defineProperty({}, "".concat(controlName, "Bottom"), {
    type: "string",
    "default": "".concat(bottom)
  }) : _defineProperty({}, "".concat(controlName, "Bottom"), {
    type: "string"
  });
  var desktopLeft = Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(left) ? _defineProperty({}, "".concat(controlName, "Left"), {
    type: "string",
    "default": "".concat(left)
  }) : _defineProperty({}, "".concat(controlName, "Left"), {
    type: "string"
  });
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, "".concat(controlName, "isLinked"), {
    type: "boolean",
    "default": isLinked
  }), _defineProperty(_objectSpread2, "".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _objectSpread2), desktopTop), desktopRight), desktopBottom), desktopLeft), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, "TAB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "Top"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "Right"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "Bottom"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "Left"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Top"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Right"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Bottom"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Left"), {
    type: "string"
  }), _objectSpread3));
}; //
// function to generate dimensions-controls styles for an element based on it's controlName(prefix)

var generateDimensionsControlStyles = function generateDimensionsControlStyles(_ref9) {
  var controlName = _ref9.controlName,
      styleFor = _ref9.styleFor,
      attributes = _ref9.attributes;
  var isLinked = attributes["".concat(controlName, "isLinked")],
      dimensionUnit = attributes["".concat(controlName, "Unit")],
      dimensionTop = attributes["".concat(controlName, "Top")],
      dimensionRight = attributes["".concat(controlName, "Right")],
      dimensionBottom = attributes["".concat(controlName, "Bottom")],
      dimensionLeft = attributes["".concat(controlName, "Left")],
      TABdimensionUnit = attributes["TAB".concat(controlName, "Unit")],
      TABdimensionTop = attributes["TAB".concat(controlName, "Top")],
      TABdimensionRight = attributes["TAB".concat(controlName, "Right")],
      TABdimensionBottom = attributes["TAB".concat(controlName, "Bottom")],
      TABdimensionLeft = attributes["TAB".concat(controlName, "Left")],
      MOBdimensionUnit = attributes["MOB".concat(controlName, "Unit")],
      MOBdimensionTop = attributes["MOB".concat(controlName, "Top")],
      MOBdimensionRight = attributes["MOB".concat(controlName, "Right")],
      MOBdimensionBottom = attributes["MOB".concat(controlName, "Bottom")],
      MOBdimensionLeft = attributes["MOB".concat(controlName, "Left")];
  var dimensionStylesDesktop = " ";
  var dimensionStylesTab = " ";
  var dimensionStylesMobile = " ";

  if (isLinked === true) {
    if (styleFor === "border") {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "border-width: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, "; ") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-width: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-width: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else if (styleFor === "border-radius") {
      dimensionStylesDesktop = "\n                ".concat(dimensionTop ? "border-radius: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-radius: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-radius: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "".concat(styleFor, ": ").concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "".concat(styleFor, ": ").concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "".concat(styleFor, ": ").concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    }
  } else {
    if (styleFor === "border") {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "border-top-width: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, "; z-index:999;") : " ", "\n            ").concat(dimensionRight ? "border-right-width: ".concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionLeft ? "border-left-width: ".concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionBottom ? "border-bottom-width: ".concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-top-width: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionRight ? "border-right-width: ".concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionLeft ? "border-left-width: ".concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionBottom ? "border-bottom-width: ".concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-top-width: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionRight ? "border-right-width: ".concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionLeft ? "border-left-width: ".concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionBottom ? "border-bottom-width: ".concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else if (styleFor === "border-radius") {
      dimensionStylesDesktop = "\n                ".concat(dimensionTop ? "border-top-left-radius: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n                ").concat(dimensionRight ? "border-top-right-radius: ".concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n                ").concat(dimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n                ").concat(dimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-top-left-radius: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionRight ? "border-top-right-radius: ".concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-top-left-radius: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionRight ? "border-top-right-radius: ".concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    }
  }

  return {
    dimensionStylesDesktop: dimensionStylesDesktop,
    dimensionStylesTab: dimensionStylesTab,
    dimensionStylesMobile: dimensionStylesMobile
  };
};

/***/ }),

/***/ "./util/helpers/flipboxHelpers.js":
/*!****************************************!*\
  !*** ./util/helpers/flipboxHelpers.js ***!
  \****************************************/
/*! exports provided: getFlipTransform, getButtonClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlipTransform", function() { return getFlipTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getButtonClasses", function() { return getButtonClasses; });
// Return flilp value based on type
var getFlipTransform = function getFlipTransform(flipType) {
  switch (flipType) {
    case "flip-left":
      return "rotateY(-180deg)";

    case "flip-right":
      return "rotateY(180deg)";

    case "flip-up":
      return "rotateX(180deg)";

    case "flip-bottom":
      return "rotateX(-180deg)";

    case "zoom-in":
      return "scale(1.1)";

    case "zoom-out":
      return "scale(0.8)";
  }
}; // Return css class names based on button style name

var getButtonClasses = function getButtonClasses(buttonStyle) {
  switch (buttonStyle) {
    case "styleOne":
      return "btn-gradient blue";

    case "styleTwo":
      return "btn-gradient purple";

    case "styleThree":
      return "btn-gradient orange";

    case "custom":
      return "";
  }
};

/***/ }),

/***/ "./util/helpers/funcsForUseEffect.js":
/*!*******************************************!*\
  !*** ./util/helpers/funcsForUseEffect.js ***!
  \*******************************************/
/*! exports provided: mimmikCssForResBtns, mimmikCssForPreviewBtnClick, mimmikCssOnPreviewBtnClickWhileBlockSelected, duplicateBlockIdFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForResBtns", function() { return mimmikCssForResBtns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForPreviewBtnClick", function() { return mimmikCssForPreviewBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimmikCssOnPreviewBtnClickWhileBlockSelected", function() { return mimmikCssOnPreviewBtnClickWhileBlockSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateBlockIdFix", function() { return duplicateBlockIdFix; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
// function to mimmik css when clicking the responsive buttons in the inspector panel
var mimmikCssForResBtns = function mimmikCssForResBtns(_ref) {
  var _ref$isForPreviewButt = _ref.isForPreviewButton,
      isForPreviewButton = _ref$isForPreviewButt === void 0 ? false : _ref$isForPreviewButt,
      domObj = _ref.domObj,
      resOption = _ref.resOption;
  var allEbBlocksWrapper;

  if (isForPreviewButton) {
    allEbBlocksWrapper = domObj.querySelectorAll(".eb-guten-block-main-parent-wrapper > style");
  } else {
    allEbBlocksWrapper = domObj.querySelectorAll(".eb-guten-block-main-parent-wrapper:not(.is-selected) > style");
  }

  if (allEbBlocksWrapper.length < 1) return;
  allEbBlocksWrapper.forEach(function (styleTag) {
    var cssStrings = styleTag.textContent;
    var minCss = cssStrings.replace(/\s+/g, " ");
    var regexCssMimmikSpace = /(mimmikcssStart\s\*\/)(.+)(\/\*\smimmikcssEnd)/i;
    var newCssStrings = " ";

    if (resOption === "Tablet") {
      var tabCssStrings = (minCss.match(/tabcssStart\s\*\/(.+)(?=\/\*\stabcssEnd)/i) || [, " "])[1];
      newCssStrings = minCss.replace(regexCssMimmikSpace, "$1 ".concat(tabCssStrings, " $3"));
    } else if (resOption === "Mobile") {
      var _tabCssStrings = (minCss.match(/tabcssStart\s\*\/(.+)(?=\/\*\stabcssEnd)/i) || [, " "])[1];
      var mobCssStrings = (minCss.match(/mobcssStart\s\*\/(.+)(?=\/\*\smobcssEnd)/i) || [, " "])[1];
      newCssStrings = minCss.replace(regexCssMimmikSpace, "$1 ".concat(_tabCssStrings, " ").concat(mobCssStrings, " $3"));
    } else {
      newCssStrings = minCss.replace(regexCssMimmikSpace, "$1  $3");
    }

    styleTag.textContent = newCssStrings;
  });
}; //
// IMPORTANT: The following fuction declaration must be below the 'mimmikCssForResBtns' function declaration
// function to mimmik css for responsive preview when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button

var mimmikCssForPreviewBtnClick = function mimmikCssForPreviewBtnClick(_ref2) {
  var domObj = _ref2.domObj,
      select = _ref2.select;
  var bodyClasses = domObj.body.className;
  if (/eb\-mimmik\-added/i.test(bodyClasses)) return;
  domObj.body.classList.add("eb-mimmik-added");
  var wpResBtnsWrap = domObj.querySelector("#editor .edit-post-layout + .popover-slot");
  wpResBtnsWrap.addEventListener("click", function (e) {
    if (/block\-editor\-post\-preview__button\-resize|components\-menu\-item__item/i.test(e.target.className)) {
      setTimeout(function () {
        var resOption = select("core/edit-post").__experimentalGetPreviewDeviceType();

        mimmikCssForResBtns({
          isForPreviewButton: true,
          domObj: domObj,
          resOption: resOption
        });
      }, 0);
    }
  });
}; // IMPORTANT: The following fuction declaration must be below the 'mimmikCssForResBtns' function declaration
// function to mimmik css for responsive preview when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM

var mimmikCssOnPreviewBtnClickWhileBlockSelected = function mimmikCssOnPreviewBtnClickWhileBlockSelected(_ref3) {
  var domObj = _ref3.domObj,
      select = _ref3.select,
      setAttributes = _ref3.setAttributes;
  var wpResBtnsWrap = domObj.querySelector("#editor .edit-post-layout + .popover-slot");

  var handleCLick = function handleCLick(e) {
    if (/block\-editor\-post\-preview__button\-resize|components\-menu\-item__item/i.test(e.target.className)) {
      setTimeout(function () {
        var resOption = select("core/edit-post").__experimentalGetPreviewDeviceType();

        mimmikCssForResBtns({
          isForPreviewButton: true,
          domObj: domObj,
          resOption: resOption
        });
        setAttributes({
          resOption: resOption
        });
      }, 0);
    }
  };

  wpResBtnsWrap.addEventListener("click", handleCLick);
  return function () {
    wpResBtnsWrap.removeEventListener("click", handleCLick);
  };
}; //
// this function is for creating a unique blockId for each block's unique className

var duplicateBlockIdFix = function duplicateBlockIdFix(_ref4) {
  var BLOCK_PREFIX = _ref4.BLOCK_PREFIX,
      blockId = _ref4.blockId,
      setAttributes = _ref4.setAttributes,
      select = _ref4.select,
      clientId = _ref4.clientId;
  var unique_id = BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);
  /**
   * Define and Generate Unique Block ID
   */

  if (!blockId) {
    setAttributes({
      blockId: unique_id
    });
  }
  /**
   * Assign New Unique ID when duplicate BlockId found
   * Mostly happens when User Duplicate a Block
   */


  var all_blocks = select("core/block-editor").getBlocks();
  var duplicateFound = false;

  var fixDuplicateBlockId = function fixDuplicateBlockId(blocks) {
    if (duplicateFound) return;

    var _iterator = _createForOfIteratorHelper(blocks),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        var innerBlocks = item.innerBlocks;

        if (item.attributes.blockId === blockId) {
          if (item.clientId !== clientId) {
            setAttributes({
              blockId: unique_id
            });
            duplicateFound = true;
            return;
          } else if (innerBlocks.length > 0) {
            fixDuplicateBlockId(innerBlocks);
          }
        } else if (innerBlocks.length > 0) {
          fixDuplicateBlockId(innerBlocks);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  fixDuplicateBlockId(all_blocks);
};

/***/ }),

/***/ "./util/helpers/handlingPreviewBtnsHelpers.js":
/*!****************************************************!*\
  !*** ./util/helpers/handlingPreviewBtnsHelpers.js ***!
  \****************************************************/
/*! exports provided: handleDesktopBtnClick, handleTabBtnClick, handleMobileBtnClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDesktopBtnClick", function() { return handleDesktopBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleTabBtnClick", function() { return handleTabBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMobileBtnClick", function() { return handleMobileBtnClick; });
//
// These following 3 functions to handle the resBtns click
// function 1: to handle desktop button click
var handleDesktopBtnClick = function handleDesktopBtnClick(_ref) {
  var setPreviewDeviceType = _ref.setPreviewDeviceType,
      setAttributes = _ref.setAttributes;
  setAttributes({
    resOption: "Desktop"
  });
  setPreviewDeviceType("Desktop");
}; // function 2: to handle Tab button click

var handleTabBtnClick = function handleTabBtnClick(_ref2) {
  var setPreviewDeviceType = _ref2.setPreviewDeviceType,
      setAttributes = _ref2.setAttributes;
  setAttributes({
    resOption: "Tablet"
  });
  setPreviewDeviceType("Tablet");
}; // function 3: to handle Mobile button click

var handleMobileBtnClick = function handleMobileBtnClick(_ref3) {
  var setPreviewDeviceType = _ref3.setPreviewDeviceType,
      setAttributes = _ref3.setAttributes;
  setAttributes({
    resOption: "Mobile"
  });
  setPreviewDeviceType("Mobile");
};

/***/ }),

/***/ "./util/helpers/hasVal.js":
/*!********************************!*\
  !*** ./util/helpers/hasVal.js ***!
  \********************************/
/*! exports provided: hasVal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVal", function() { return hasVal; });
// check if range controller input numbers  has value
var hasVal = function hasVal(val) {
  return val || val === 0;
};

/***/ }),

/***/ "./util/helpers/index.js":
/*!*******************************!*\
  !*** ./util/helpers/index.js ***!
  \*******************************/
/*! exports provided: generateBackgroundControlStyles, generateBackgroundAttributes, generateTypographyAttributes, generateTypographyStyles, generateDimensionsAttributes, generateDimensionsControlStyles, generateBorderShadowAttributes, generateBorderShadowStyles, generateResponsiveRangeStyles, generateResponsiveRangeAttributes, textInsideForEdit, generateRandomNumber, hardMinifyCssStrings, softMinifyCssStrings, isCssExists, handleDesktopBtnClick, handleTabBtnClick, handleMobileBtnClick, mimmikCssForResBtns, mimmikCssForPreviewBtnClick, mimmikCssOnPreviewBtnClickWhileBlockSelected, duplicateBlockIdFix, getFlipTransform, getButtonClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundHelpers */ "./util/helpers/backgroundHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundControlStyles", function() { return _backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__["generateBackgroundControlStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundAttributes", function() { return _backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__["generateBackgroundAttributes"]; });

/* harmony import */ var _typoHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typoHelpers */ "./util/helpers/typoHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateTypographyAttributes", function() { return _typoHelpers__WEBPACK_IMPORTED_MODULE_1__["generateTypographyAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateTypographyStyles", function() { return _typoHelpers__WEBPACK_IMPORTED_MODULE_1__["generateTypographyStyles"]; });

/* harmony import */ var _dimensionHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimensionHelpers */ "./util/helpers/dimensionHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsAttributes", function() { return _dimensionHelpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsControlStyles", function() { return _dimensionHelpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsControlStyles"]; });

/* harmony import */ var _borderShadowHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./borderShadowHelpers */ "./util/helpers/borderShadowHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowAttributes", function() { return _borderShadowHelpers__WEBPACK_IMPORTED_MODULE_3__["generateBorderShadowAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowStyles", function() { return _borderShadowHelpers__WEBPACK_IMPORTED_MODULE_3__["generateBorderShadowStyles"]; });

/* harmony import */ var _responsiveRangeHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsiveRangeHelpers */ "./util/helpers/responsiveRangeHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeStyles", function() { return _responsiveRangeHelpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeAttributes", function() { return _responsiveRangeHelpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeAttributes"]; });

/* harmony import */ var _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miniHelperFuncs */ "./util/helpers/miniHelperFuncs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textInsideForEdit", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["textInsideForEdit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["generateRandomNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hardMinifyCssStrings", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["hardMinifyCssStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "softMinifyCssStrings", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCssExists", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["isCssExists"]; });

/* harmony import */ var _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlingPreviewBtnsHelpers */ "./util/helpers/handlingPreviewBtnsHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleDesktopBtnClick", function() { return _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__["handleDesktopBtnClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleTabBtnClick", function() { return _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__["handleTabBtnClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleMobileBtnClick", function() { return _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__["handleMobileBtnClick"]; });

/* harmony import */ var _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./funcsForUseEffect */ "./util/helpers/funcsForUseEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForResBtns", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["mimmikCssForResBtns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForPreviewBtnClick", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["mimmikCssForPreviewBtnClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mimmikCssOnPreviewBtnClickWhileBlockSelected", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["mimmikCssOnPreviewBtnClickWhileBlockSelected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "duplicateBlockIdFix", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["duplicateBlockIdFix"]; });

/* harmony import */ var _flipboxHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flipboxHelpers */ "./util/helpers/flipboxHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFlipTransform", function() { return _flipboxHelpers__WEBPACK_IMPORTED_MODULE_8__["getFlipTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getButtonClasses", function() { return _flipboxHelpers__WEBPACK_IMPORTED_MODULE_8__["getButtonClasses"]; });









 //
// // unused function
// export const getBackgroundImage = (type, gradientValue, imageURL) => {
//   switch (type) {
//     case "fill":
//       return "none";
//     case "gradient":
//       return gradientValue;
//     case "image":
//       if (imageURL) {
//         return `url(${imageURL})`;
//       }
//       return "none";
//   }
// };

/***/ }),

/***/ "./util/helpers/miniHelperFuncs.js":
/*!*****************************************!*\
  !*** ./util/helpers/miniHelperFuncs.js ***!
  \*****************************************/
/*! exports provided: textInsideForEdit, generateRandomNumber, hardMinifyCssStrings, softMinifyCssStrings, isCssExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInsideForEdit", function() { return textInsideForEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return generateRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hardMinifyCssStrings", function() { return hardMinifyCssStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "softMinifyCssStrings", function() { return softMinifyCssStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssExists", function() { return isCssExists; });
// helper Functions: function 'textInsideForEdit' is for setting the innertext depending on whether separator should be shown and which separator should be shown in the number-counter block
var textInsideForEdit = function textInsideForEdit(value, isShowSeparator, separator) {
  return isShowSeparator ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : value.toString();
}; // generateRandomNumber function is for generating a random number

var generateRandomNumber = function generateRandomNumber() {
  return Math.floor(Math.random() * 1000000000);
}; // hardMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js

var hardMinifyCssStrings = function hardMinifyCssStrings(cssString) {
  return cssString.replace(/\s+/g, " ").replace(/(?<=\:).+(?=\;)/g, function (match) {
    return match.trim().replace(/\s+/g, "__s_p_a_c_e__");
  }) // .replace(/\s+(?!(?:[\w\d\.\-\#]+\{))/g, "")
  .replace(/\s+(?![\w\d\.\-\#]+\{)/g, "").replace(/\s+/g, " ").replace(/__s_p_a_c_e__/g, " ");
}; // softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js

var softMinifyCssStrings = function softMinifyCssStrings(cssString) {
  return cssString.replace(/\s+/g, " ");
}; // check if css string is empty or not.

var isCssExists = function isCssExists(cssString) {
  return /.+(?=\:(?!hover)(?!focus))/.test(cssString);
};

/***/ }),

/***/ "./util/helpers/responsiveRangeHelpers.js":
/*!************************************************!*\
  !*** ./util/helpers/responsiveRangeHelpers.js ***!
  \************************************************/
/*! exports provided: generateResponsiveRangeAttributes, generateResponsiveRangeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeAttributes", function() { return generateResponsiveRangeAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeStyles", function() { return generateResponsiveRangeStyles; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// function to generate responsive range controller attributes for multiple range control based on the array of prefix
var generateResponsiveRangeAttributes = function generateResponsiveRangeAttributes(controlName) {
  var _ref3, _objectSpread2;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultRange = defaults.defaultRange,
      noUnits = defaults.noUnits,
      _defaults$defaultUnit = defaults.defaultUnit,
      defaultUnit = _defaults$defaultUnit === void 0 ? "px" : _defaults$defaultUnit;
  var desktop = defaultRange ? _defineProperty({}, "".concat(controlName, "Range"), {
    type: "number",
    "default": defaultRange
  }) : _defineProperty({}, "".concat(controlName, "Range"), {
    type: "number"
  });
  var units = noUnits === true ? {} : (_ref3 = {}, _defineProperty(_ref3, "".concat(controlName, "Unit"), {
    type: "string",
    "default": defaultUnit
  }), _defineProperty(_ref3, "TAB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ref3, "MOB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _ref3);
  return _objectSpread(_objectSpread({}, desktop), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, "TAB".concat(controlName, "Range"), {
    type: "number"
  }), _defineProperty(_objectSpread2, "MOB".concat(controlName, "Range"), {
    type: "number"
  }), _objectSpread2), units);
}; // function to generate responsive range control styles for an element based on it's prefix

var generateResponsiveRangeStyles = function generateResponsiveRangeStyles(_ref4) {
  var controlName = _ref4.controlName,
      property = _ref4.property,
      attributes = _ref4.attributes,
      customUnit = _ref4.customUnit;
  var desktopSizeUnit;
  var TABsizeUnit;
  var MOBsizeUnit;

  if (!customUnit) {
    desktopSizeUnit = attributes["".concat(controlName, "Unit")];
    TABsizeUnit = attributes["TAB".concat(controlName, "Unit")];
    MOBsizeUnit = attributes["MOB".concat(controlName, "Unit")];
  } else {
    desktopSizeUnit = TABsizeUnit = MOBsizeUnit = customUnit;
  }

  var desktopRange = attributes["".concat(controlName, "Range")],
      TABrange = attributes["TAB".concat(controlName, "Range")],
      MOBrange = attributes["MOB".concat(controlName, "Range")];
  var rangeStylesDesktop = desktopRange || desktopRange === 0 ? property + ":" + desktopRange + (customUnit || desktopSizeUnit) + ";" : "";
  var rangeStylesTab = TABrange || TABrange === 0 ? property + ":" + TABrange + (customUnit || TABsizeUnit) + ";" : "";
  var rangeStylesMobile = MOBrange || MOBrange === 0 ? property + ":" + MOBrange + (customUnit || MOBsizeUnit) + ";" : "";
  return {
    rangeStylesDesktop: rangeStylesDesktop,
    rangeStylesTab: rangeStylesTab,
    rangeStylesMobile: rangeStylesMobile
  };
};

/***/ }),

/***/ "./util/helpers/typoHelpers.js":
/*!*************************************!*\
  !*** ./util/helpers/typoHelpers.js ***!
  \*************************************/
/*! exports provided: generateTypographyAttributes, generateTypographyStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyAttributes", function() { return generateTypographyAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyStyles", function() { return generateTypographyStyles; });
/* harmony import */ var _hasVal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasVal */ "./util/helpers/hasVal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // function to generate typography attributes for multiple typography control based on the array of prefix

var generateTypographyAttributes = function generateTypographyAttributes(prefixArray) {
  var typoAttrs = prefixArray.reduce(function (total, current) {
    var _result;

    var result = (_result = {}, _defineProperty(_result, "".concat(current, "FontFamily"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "".concat(current, "FontWeight"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "FontStyle"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "TextTransform"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "TextDecoration"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "".concat(current, "LineHeight"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "TAB".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "TAB".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "TAB".concat(current, "LineHeight"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "MOB".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "MOB".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "MOB".concat(current, "LineHeight"), {
      type: "number"
    }), _result);
    return _objectSpread(_objectSpread({}, total), result);
  }, {});
  return typoAttrs;
}; //
// function to generate typography styles for an element based on it's prefix

var generateTypographyStyles = function generateTypographyStyles(_ref) {
  var prefixConstant = _ref.prefixConstant,
      defaultFontSize = _ref.defaultFontSize,
      attributes = _ref.attributes;
  var fontFamily = attributes["".concat(prefixConstant, "FontFamily")],
      fontWeight = attributes["".concat(prefixConstant, "FontWeight")],
      fontStyle = attributes["".concat(prefixConstant, "FontStyle")],
      textTransform = attributes["".concat(prefixConstant, "TextTransform")],
      textDecoration = attributes["".concat(prefixConstant, "TextDecoration")],
      _attributes$ = attributes["".concat(prefixConstant, "FontSize")],
      fontSize = _attributes$ === void 0 ? defaultFontSize : _attributes$,
      sizeUnit = attributes["".concat(prefixConstant, "SizeUnit")],
      letterSpacing = attributes["".concat(prefixConstant, "LetterSpacing")],
      letterSpacingUnit = attributes["".concat(prefixConstant, "LetterSpacingUnit")],
      lineHeight = attributes["".concat(prefixConstant, "LineHeight")],
      lineHeightUnit = attributes["".concat(prefixConstant, "LineHeightUnit")],
      TABsizeUnit = attributes["TAB".concat(prefixConstant, "SizeUnit")],
      TABletterSpacingUnit = attributes["TAB".concat(prefixConstant, "LetterSpacingUnit")],
      TABlineHeightUnit = attributes["TAB".concat(prefixConstant, "LineHeightUnit")],
      TABfontSize = attributes["TAB".concat(prefixConstant, "FontSize")],
      TABletterSpacing = attributes["TAB".concat(prefixConstant, "LetterSpacing")],
      TABlineHeight = attributes["TAB".concat(prefixConstant, "LineHeight")],
      MOBsizeUnit = attributes["MOB".concat(prefixConstant, "SizeUnit")],
      MOBletterSpacingUnit = attributes["MOB".concat(prefixConstant, "LetterSpacingUnit")],
      MOBlineHeightUnit = attributes["MOB".concat(prefixConstant, "LineHeightUnit")],
      MOBfontSize = attributes["MOB".concat(prefixConstant, "FontSize")],
      MOBletterSpacing = attributes["MOB".concat(prefixConstant, "LetterSpacing")],
      MOBlineHeight = attributes["MOB".concat(prefixConstant, "LineHeight")];
  var typoStylesDesktop = "\n              ".concat(fontFamily ? "font-family: ".concat(fontFamily, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(fontSize) ? "font-size: ".concat(fontSize).concat(sizeUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(lineHeight) ? "line-height: ".concat(lineHeight).concat(lineHeightUnit, ";") : " ", "\n              ").concat(fontWeight ? "font-weight: ".concat(fontWeight, ";") : " ", "\n              ").concat(fontStyle ? "font-style: ".concat(fontStyle, ";") : " ", "\n              ").concat(textDecoration ? "text-decoration: ".concat(textDecoration, ";") : " ", "\n              ").concat(textTransform ? "text-transform: ".concat(textTransform, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(letterSpacing) ? "letter-spacing: ".concat(letterSpacing).concat(letterSpacingUnit, ";") : " ", "\n          ");
  var typoStylesTab = "\n              ".concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(TABfontSize) ? "font-size: ".concat(TABfontSize).concat(TABsizeUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(TABlineHeight) ? "line-height: ".concat(TABlineHeight).concat(TABlineHeightUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(TABletterSpacing) ? "letter-spacing: ".concat(TABletterSpacing).concat(TABletterSpacingUnit, ";") : " ", "\n          ");
  var typoStylesMobile = "\n              ".concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(MOBfontSize) ? "font-size: ".concat(MOBfontSize).concat(MOBsizeUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(MOBlineHeight) ? "line-height: ".concat(MOBlineHeight).concat(MOBlineHeightUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(MOBletterSpacing) ? "letter-spacing: ".concat(MOBletterSpacing).concat(MOBletterSpacingUnit, ";") : " ", "\n          ");
  return {
    typoStylesDesktop: typoStylesDesktop,
    typoStylesTab: typoStylesTab,
    typoStylesMobile: typoStylesMobile
  };
};

/***/ }),

/***/ "./util/icons.js":
/*!***********************!*\
  !*** ./util/icons.js ***!
  \***********************/
/*! exports provided: AccordionIcon, ButtonIcon, CountdownIcon, CounterIcon, CallToActionIcon, FlipboxIcon, InfoboxIcon, NoticeIcon, PricingTableIcon, ProgressbarIcon, InteractivePromoIcon, SocialIcon, TeamMembersIcon, TestimonialIcon, ImageComparisonIcon, TestIcon, WrapperIcon, InstagramIcon, ImageGalleryIcon, HeadingIcon, SliderIcon, TypingTextIcon, InstagramOriginalIcon, SaveIcon, ParallaxSliderIcon, CategoryIcon, ToggleContentIcon, TypographyIcon, UserIcon, LeftAlignIcon, RightAlignIcon, CenterAlignIcon, JustifyAlignIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionIcon", function() { return AccordionIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonIcon", function() { return ButtonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownIcon", function() { return CountdownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterIcon", function() { return CounterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallToActionIcon", function() { return CallToActionIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipboxIcon", function() { return FlipboxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoboxIcon", function() { return InfoboxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeIcon", function() { return NoticeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingTableIcon", function() { return PricingTableIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarIcon", function() { return ProgressbarIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractivePromoIcon", function() { return InteractivePromoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialIcon", function() { return SocialIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMembersIcon", function() { return TeamMembersIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialIcon", function() { return TestimonialIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComparisonIcon", function() { return ImageComparisonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestIcon", function() { return TestIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperIcon", function() { return WrapperIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramIcon", function() { return InstagramIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryIcon", function() { return ImageGalleryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingIcon", function() { return HeadingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderIcon", function() { return SliderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingTextIcon", function() { return TypingTextIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramOriginalIcon", function() { return InstagramOriginalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveIcon", function() { return SaveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxSliderIcon", function() { return ParallaxSliderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryIcon", function() { return CategoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleContentIcon", function() { return ToggleContentIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyIcon", function() { return TypographyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIcon", function() { return UserIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftAlignIcon", function() { return LeftAlignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightAlignIcon", function() { return RightAlignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterAlignIcon", function() { return CenterAlignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JustifyAlignIcon", function() { return JustifyAlignIcon; });
var AccordionIcon = function AccordionIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "256",
    height: "256",
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-8.333%",
    x2: "50%",
    y2: "108.44%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#6DC7FF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#E6ABFF",
    offset: "100%"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-2"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-icon-accordion"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M128,0 C91.9749264,0 59.4418701,14.8956537 36.1835498,38.8488312 L203.514459,38.8488312 L203.514459,119.749264 L0.277056277,119.749264 C0.103064935,122.478823 0,125.227221 0,128 C0,130.065732 0.0664935065,132.11484 0.164017316,134.15619 L203.514459,134.15619 L203.514459,215.056623 L34.1732294,215.056623 C57.5468052,240.239931 90.9309784,256 128,256 C198.692571,256 256,198.692571 256,128 C256,57.3074286 198.692571,0 128,0 Z",
    id: "Path",
    fill: "url(#linearGradient-1)"
  }), /*#__PURE__*/React.createElement("polygon", {
    id: "Path",
    fill: "url(#linearGradient-2)",
    fillRule: "nonzero",
    points: "186.891082 74.2621645 171.979913 74.2621645 171.979913 59.3509957 160.797922 59.3509957 160.797922 74.2621645 145.886753 74.2621645 145.886753 85.4441558 160.797922 85.4441558 160.797922 100.355325 171.979913 100.355325 171.979913 85.4441558 186.891082 85.4441558"
  }), /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    fill: "url(#linearGradient-2)",
    fillRule: "nonzero",
    x: "145.887",
    y: "169.015",
    width: "41.004",
    height: "11.183"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M128.155152,67.662684 L15.0929177,67.662684 C10.9747532,75.3537662 7.62015584,83.5147359 5.12775758,92.0436364 L128.155152,92.0436364 L128.155152,67.662684 Z",
    id: "Path",
    fill: "#E5E5E5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M128.155152,162.415931 L4.68668398,162.415931 C7.05939394,170.933749 10.2887619,179.09361 14.2805887,186.796883 L128.155152,186.796883 L128.155152,162.415931 Z",
    id: "Path",
    fill: "#E5E5E5"
  }))));
};
var ButtonIcon = function ButtonIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "256",
    height: "156",
    viewBox: "0 0 256 156",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-button",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.5151515,0 C6.98484752,0 0,6.98484752 0,15.5151515 L0,124.121212 C0,132.651516 6.98484752,139.636364 15.5151515,139.636364 C15.5151515,141.772726 17.2575767,143.515152 19.3939394,143.515152 C21.5303021,143.515152 23.2727273,141.772726 23.2727273,139.636364 L31.030303,139.636364 C31.030303,141.772726 32.7727282,143.515152 34.9090909,143.515152 C37.0454536,143.515152 38.7878788,141.772726 38.7878788,139.636364 L46.5454545,139.636364 C46.5454545,141.772726 48.2878798,143.515152 50.4242424,143.515152 C52.5606051,143.515152 54.3030303,141.772726 54.3030303,139.636364 L62.0606061,139.636364 C62.0606061,141.772726 63.8030313,143.515152 65.9393939,143.515152 C68.0757566,143.515152 69.8181818,141.772726 69.8181818,139.636364 L77.5757576,139.636364 C77.5757576,141.772726 79.3181828,143.515152 81.4545455,143.515152 C83.5909081,143.515152 85.3333333,141.772726 85.3333333,139.636364 L93.0909091,139.636364 C93.0909091,141.772726 94.8333343,143.515152 96.969697,143.515152 C99.1060596,143.515152 100.848485,141.772726 100.848485,139.636364 L108.606061,139.636364 C108.606061,141.772726 110.348486,143.515152 112.484848,143.515152 C114.621211,143.515152 116.363636,141.772726 116.363636,139.636364 L124.121212,139.636364 C124.121212,141.772726 125.863637,143.515152 128,143.515152 C130.136363,143.515152 131.878788,141.772726 131.878788,139.636364 L139.636364,139.636364 C139.636364,141.772726 141.378789,143.515152 143.515152,143.515152 C145.651514,143.515152 147.393939,141.772726 147.393939,139.636364 L155.151515,139.636364 C155.151515,141.772726 156.89394,143.515152 159.030303,143.515152 C161.166666,143.515152 162.909091,141.772726 162.909091,139.636364 L170.666667,139.636364 C170.666667,141.772726 172.409092,143.515152 174.545455,143.515152 C176.681817,143.515152 178.424242,141.772726 178.424242,139.636364 L186.181818,139.636364 C186.181818,141.772726 187.924243,143.515152 190.060606,143.515152 C192.196969,143.515152 193.939394,141.772726 193.939394,139.636364 L201.69697,139.636364 C201.69697,141.772726 203.439395,143.515152 205.575758,143.515152 C207.71212,143.515152 209.454545,141.772726 209.454545,139.636364 L217.212121,139.636364 C217.212121,141.772726 218.954546,143.515152 221.090909,143.515152 C223.227272,143.515152 224.969697,141.772726 224.969697,139.636364 L232.727273,139.636364 C232.727273,141.772726 234.469698,143.515152 236.606061,143.515152 C238.742423,143.515152 240.484848,141.772726 240.484848,139.636364 C249.015152,139.636364 256,132.651516 256,124.121212 L256,15.5151515 C256,6.98484752 249.015152,0 240.484848,0 L15.5151515,0 Z M15.5151515,7.75757576 L240.484848,7.75757576 C244.818184,7.75757576 248.242424,11.1818201 248.242424,15.5151515 L248.242424,124.121212 C248.242424,128.454547 244.818184,131.878788 240.484848,131.878788 L15.5151515,131.878788 C11.1818201,131.878788 7.75757576,128.454547 7.75757576,124.121212 L7.75757576,15.5151515 C7.75757576,11.1818201 11.1818201,7.75757576 15.5151515,7.75757576 Z M42.6666667,19.3939394 C40.530304,19.3939394 38.7878788,21.1363646 38.7878788,23.2727273 C38.7878788,25.4090899 40.530304,27.1515152 42.6666667,27.1515152 C44.8030293,27.1515152 46.5454545,25.4090899 46.5454545,23.2727273 C46.5454545,21.1363646 44.8030293,19.3939394 42.6666667,19.3939394 Z M58.1818182,19.3939394 C56.0454555,19.3939394 54.3030303,21.1363646 54.3030303,23.2727273 C54.3030303,25.4090899 56.0454555,27.1515152 58.1818182,27.1515152 C60.3181808,27.1515152 62.0606061,25.4090899 62.0606061,23.2727273 C62.0606061,21.1363646 60.3181808,19.3939394 58.1818182,19.3939394 Z M73.6969697,19.3939394 C71.560607,19.3939394 69.8181818,21.1363646 69.8181818,23.2727273 C69.8181818,25.4090899 71.560607,27.1515152 73.6969697,27.1515152 C75.8333324,27.1515152 77.5757576,25.4090899 77.5757576,23.2727273 C77.5757576,21.1363646 75.8333324,19.3939394 73.6969697,19.3939394 Z M89.2121212,19.3939394 C87.0757585,19.3939394 85.3333333,21.1363646 85.3333333,23.2727273 C85.3333333,25.4090899 87.0757585,27.1515152 89.2121212,27.1515152 C91.3484839,27.1515152 93.0909091,25.4090899 93.0909091,23.2727273 C93.0909091,21.1363646 91.3484839,19.3939394 89.2121212,19.3939394 Z M104.727273,19.3939394 C102.59091,19.3939394 100.848485,21.1363646 100.848485,23.2727273 C100.848485,25.4090899 102.59091,27.1515152 104.727273,27.1515152 C106.863635,27.1515152 108.606061,25.4090899 108.606061,23.2727273 C108.606061,21.1363646 106.863635,19.3939394 104.727273,19.3939394 Z M120.242424,19.3939394 C118.106062,19.3939394 116.363636,21.1363646 116.363636,23.2727273 C116.363636,25.4090899 118.106062,27.1515152 120.242424,27.1515152 C122.378787,27.1515152 124.121212,25.4090899 124.121212,23.2727273 C124.121212,21.1363646 122.378787,19.3939394 120.242424,19.3939394 Z M135.757576,19.3939394 C133.621213,19.3939394 131.878788,21.1363646 131.878788,23.2727273 C131.878788,25.4090899 133.621213,27.1515152 135.757576,27.1515152 C137.893938,27.1515152 139.636364,25.4090899 139.636364,23.2727273 C139.636364,21.1363646 137.893938,19.3939394 135.757576,19.3939394 Z M151.272727,19.3939394 C149.136365,19.3939394 147.393939,21.1363646 147.393939,23.2727273 C147.393939,25.4090899 149.136365,27.1515152 151.272727,27.1515152 C153.40909,27.1515152 155.151515,25.4090899 155.151515,23.2727273 C155.151515,21.1363646 153.40909,19.3939394 151.272727,19.3939394 Z M166.787879,19.3939394 C164.651516,19.3939394 162.909091,21.1363646 162.909091,23.2727273 C162.909091,25.4090899 164.651516,27.1515152 166.787879,27.1515152 C168.924241,27.1515152 170.666667,25.4090899 170.666667,23.2727273 C170.666667,21.1363646 168.924241,19.3939394 166.787879,19.3939394 Z M182.30303,19.3939394 C180.166668,19.3939394 178.424242,21.1363646 178.424242,23.2727273 C178.424242,25.4090899 180.166668,27.1515152 182.30303,27.1515152 C184.439393,27.1515152 186.181818,25.4090899 186.181818,23.2727273 C186.181818,21.1363646 184.439393,19.3939394 182.30303,19.3939394 Z M197.818182,19.3939394 C195.681819,19.3939394 193.939394,21.1363646 193.939394,23.2727273 C193.939394,25.4090899 195.681819,27.1515152 197.818182,27.1515152 C199.954544,27.1515152 201.69697,25.4090899 201.69697,23.2727273 C201.69697,21.1363646 199.954544,19.3939394 197.818182,19.3939394 Z M213.333333,19.3939394 C211.196971,19.3939394 209.454545,21.1363646 209.454545,23.2727273 C209.454545,25.4090899 211.196971,27.1515152 213.333333,27.1515152 C215.469696,27.1515152 217.212121,25.4090899 217.212121,23.2727273 C217.212121,21.1363646 215.469696,19.3939394 213.333333,19.3939394 Z M170.30303,55.4090899 C162.106062,55.4090899 156.818184,60.9242415 156.818184,69.8181818 C156.818184,78.7121222 162.045456,84.2272737 170.30303,84.2272737 C178.515153,84.2272737 183.757576,78.7121222 183.757576,69.8181818 C183.757576,60.9242415 178.515153,55.4090899 170.30303,55.4090899 Z M41.2727273,56.1515171 L41.2727273,83.4848504 L54.4090919,83.4848504 C60.2575748,83.4848504 63.9393939,80.3939413 63.9393939,75.6060625 C63.9393939,72.1212121 61.1818201,69.3333333 57.6060625,69.1515152 L57.6060625,68.7878788 C60.499999,68.3939413 62.6969716,65.9090928 62.6969716,62.969697 C62.6969716,58.7272727 59.469696,56.1515171 54.0151505,56.1515171 L41.2727273,56.1515171 Z M70.8636354,56.1515171 L70.8636354,74.0606061 C70.8636354,80.1818182 75.5454565,84.2272737 82.6515161,84.2272737 C89.7424252,84.2272737 94.4090919,80.1818182 94.4090919,74.0606061 L94.4090919,56.1515171 L87.4545455,56.1515171 L87.4545455,73.3181828 C87.4545455,76.499999 85.7272747,78.3636364 82.6515161,78.3636364 C79.560607,78.3636364 77.8181818,76.4848485 77.8181818,73.3181828 L77.8181818,56.1515171 L70.8636354,56.1515171 Z M190.848485,56.1515171 L190.848485,83.4848504 L197.439395,83.4848504 L197.439395,67.9545445 L197.803031,67.9545445 L209.212121,83.4848504 L214.727273,83.4848504 L214.727273,56.1515171 L208.136363,56.1515171 L208.136363,71.5303021 L207.772726,71.5303021 L196.393941,56.1515171 L190.848485,56.1515171 Z M101.318183,56.1666676 L101.318183,61.7424252 L109.196971,61.7424252 L109.196971,83.4848504 L116.121212,83.4848504 L116.121212,61.7424252 L124.015151,61.7424252 L124.015151,56.1666676 L101.318183,56.1666676 Z M129.40909,56.1666676 L129.40909,61.7424252 L137.287878,61.7424252 L137.287878,83.4848504 L144.227274,83.4848504 L144.227274,61.7424252 L152.121212,61.7424252 L152.121212,56.1666676 L129.40909,56.1666676 Z M48.2272737,61.0454536 L52.1666676,61.0454536 C54.530304,61.0454536 55.9242434,62.2272737 55.9242434,64.1818182 C55.9242434,66.1060616 54.439393,67.2878778 51.8939384,67.2878778 L48.2272737,67.2878778 L48.2272737,61.0454536 Z M170.30303,61.1666657 C174.136363,61.1666657 176.681817,64.5454545 176.681817,69.8181818 C176.681817,75.0909091 174.151517,78.4696979 170.30303,78.4696979 C166.424242,78.4696979 163.893938,75.0909091 163.893938,69.8181818 C163.893938,64.5454545 166.454547,61.1666657 170.30303,61.1666657 Z M48.2272737,71.5151515 L52.3939413,71.5151515 C55.2727273,71.5151515 56.8787898,72.7727282 56.8787898,75.0000019 C56.8787898,77.3181828 55.3030322,78.5757595 52.4242424,78.5757595 L48.2272737,78.5757595 L48.2272737,71.5151515 Z M42.6666667,112.484848 C40.530304,112.484848 38.7878788,114.227274 38.7878788,116.363636 C38.7878788,118.499999 40.530304,120.242424 42.6666667,120.242424 C44.8030293,120.242424 46.5454545,118.499999 46.5454545,116.363636 C46.5454545,114.227274 44.8030293,112.484848 42.6666667,112.484848 Z M58.1818182,112.484848 C56.0454555,112.484848 54.3030303,114.227274 54.3030303,116.363636 C54.3030303,118.499999 56.0454555,120.242424 58.1818182,120.242424 C60.3181808,120.242424 62.0606061,118.499999 62.0606061,116.363636 C62.0606061,114.227274 60.3181808,112.484848 58.1818182,112.484848 Z M73.6969697,112.484848 C71.560607,112.484848 69.8181818,114.227274 69.8181818,116.363636 C69.8181818,118.499999 71.560607,120.242424 73.6969697,120.242424 C75.8333324,120.242424 77.5757576,118.499999 77.5757576,116.363636 C77.5757576,114.227274 75.8333324,112.484848 73.6969697,112.484848 Z M89.2121212,112.484848 C87.0757585,112.484848 85.3333333,114.227274 85.3333333,116.363636 C85.3333333,118.499999 87.0757585,120.242424 89.2121212,120.242424 C91.3484839,120.242424 93.0909091,118.499999 93.0909091,116.363636 C93.0909091,114.227274 91.3484839,112.484848 89.2121212,112.484848 Z M104.727273,112.484848 C102.59091,112.484848 100.848485,114.227274 100.848485,116.363636 C100.848485,118.499999 102.59091,120.242424 104.727273,120.242424 C106.863635,120.242424 108.606061,118.499999 108.606061,116.363636 C108.606061,114.227274 106.863635,112.484848 104.727273,112.484848 Z M120.242424,112.484848 C118.106062,112.484848 116.363636,114.227274 116.363636,116.363636 C116.363636,118.499999 118.106062,120.242424 120.242424,120.242424 C122.378787,120.242424 124.121212,118.499999 124.121212,116.363636 C124.121212,114.227274 122.378787,112.484848 120.242424,112.484848 Z M135.757576,112.484848 C133.621213,112.484848 131.878788,114.227274 131.878788,116.363636 C131.878788,118.499999 133.621213,120.242424 135.757576,120.242424 C137.893938,120.242424 139.636364,118.499999 139.636364,116.363636 C139.636364,114.227274 137.893938,112.484848 135.757576,112.484848 Z M151.272727,112.484848 C149.136365,112.484848 147.393939,114.227274 147.393939,116.363636 C147.393939,118.499999 149.136365,120.242424 151.272727,120.242424 C153.40909,120.242424 155.151515,118.499999 155.151515,116.363636 C155.151515,114.227274 153.40909,112.484848 151.272727,112.484848 Z M166.787879,112.484848 C164.651516,112.484848 162.909091,114.227274 162.909091,116.363636 C162.909091,118.499999 164.651516,120.242424 166.787879,120.242424 C168.924241,120.242424 170.666667,118.499999 170.666667,116.363636 C170.666667,114.227274 168.924241,112.484848 166.787879,112.484848 Z M182.30303,112.484848 C180.166668,112.484848 178.424242,114.227274 178.424242,116.363636 C178.424242,118.499999 180.166668,120.242424 182.30303,120.242424 C184.439393,120.242424 186.181818,118.499999 186.181818,116.363636 C186.181818,114.227274 184.439393,112.484848 182.30303,112.484848 Z M197.818182,112.484848 C195.681819,112.484848 193.939394,114.227274 193.939394,116.363636 C193.939394,118.499999 195.681819,120.242424 197.818182,120.242424 C199.954544,120.242424 201.69697,118.499999 201.69697,116.363636 C201.69697,114.227274 199.954544,112.484848 197.818182,112.484848 Z M213.333333,112.484848 C211.196971,112.484848 209.454545,114.227274 209.454545,116.363636 C209.454545,118.499999 211.196971,120.242424 213.333333,120.242424 C215.469696,120.242424 217.212121,118.499999 217.212121,116.363636 C217.212121,114.227274 215.469696,112.484848 213.333333,112.484848 Z M27.1515152,147.393939 C25.0151525,147.393939 23.2727273,149.136365 23.2727273,151.272727 C23.2727273,153.40909 25.0151525,155.151515 27.1515152,155.151515 C29.2878778,155.151515 31.030303,153.40909 31.030303,151.272727 C31.030303,149.136365 29.2878778,147.393939 27.1515152,147.393939 Z M42.6666667,147.393939 C40.530304,147.393939 38.7878788,149.136365 38.7878788,151.272727 C38.7878788,153.40909 40.530304,155.151515 42.6666667,155.151515 C44.8030293,155.151515 46.5454545,153.40909 46.5454545,151.272727 C46.5454545,149.136365 44.8030293,147.393939 42.6666667,147.393939 Z M58.1818182,147.393939 C56.0454555,147.393939 54.3030303,149.136365 54.3030303,151.272727 C54.3030303,153.40909 56.0454555,155.151515 58.1818182,155.151515 C60.3181808,155.151515 62.0606061,153.40909 62.0606061,151.272727 C62.0606061,149.136365 60.3181808,147.393939 58.1818182,147.393939 Z M73.6969697,147.393939 C71.560607,147.393939 69.8181818,149.136365 69.8181818,151.272727 C69.8181818,153.40909 71.560607,155.151515 73.6969697,155.151515 C75.8333324,155.151515 77.5757576,153.40909 77.5757576,151.272727 C77.5757576,149.136365 75.8333324,147.393939 73.6969697,147.393939 Z M89.2121212,147.393939 C87.0757585,147.393939 85.3333333,149.136365 85.3333333,151.272727 C85.3333333,153.40909 87.0757585,155.151515 89.2121212,155.151515 C91.3484839,155.151515 93.0909091,153.40909 93.0909091,151.272727 C93.0909091,149.136365 91.3484839,147.393939 89.2121212,147.393939 Z M104.727273,147.393939 C102.59091,147.393939 100.848485,149.136365 100.848485,151.272727 C100.848485,153.40909 102.59091,155.151515 104.727273,155.151515 C106.863635,155.151515 108.606061,153.40909 108.606061,151.272727 C108.606061,149.136365 106.863635,147.393939 104.727273,147.393939 Z M120.242424,147.393939 C118.106062,147.393939 116.363636,149.136365 116.363636,151.272727 C116.363636,153.40909 118.106062,155.151515 120.242424,155.151515 C122.378787,155.151515 124.121212,153.40909 124.121212,151.272727 C124.121212,149.136365 122.378787,147.393939 120.242424,147.393939 Z M135.757576,147.393939 C133.621213,147.393939 131.878788,149.136365 131.878788,151.272727 C131.878788,153.40909 133.621213,155.151515 135.757576,155.151515 C137.893938,155.151515 139.636364,153.40909 139.636364,151.272727 C139.636364,149.136365 137.893938,147.393939 135.757576,147.393939 Z M151.272727,147.393939 C149.136365,147.393939 147.393939,149.136365 147.393939,151.272727 C147.393939,153.40909 149.136365,155.151515 151.272727,155.151515 C153.40909,155.151515 155.151515,153.40909 155.151515,151.272727 C155.151515,149.136365 153.40909,147.393939 151.272727,147.393939 Z M166.787879,147.393939 C164.651516,147.393939 162.909091,149.136365 162.909091,151.272727 C162.909091,153.40909 164.651516,155.151515 166.787879,155.151515 C168.924241,155.151515 170.666667,153.40909 170.666667,151.272727 C170.666667,149.136365 168.924241,147.393939 166.787879,147.393939 Z M182.30303,147.393939 C180.166668,147.393939 178.424242,149.136365 178.424242,151.272727 C178.424242,153.40909 180.166668,155.151515 182.30303,155.151515 C184.439393,155.151515 186.181818,153.40909 186.181818,151.272727 C186.181818,149.136365 184.439393,147.393939 182.30303,147.393939 Z M197.818182,147.393939 C195.681819,147.393939 193.939394,149.136365 193.939394,151.272727 C193.939394,153.40909 195.681819,155.151515 197.818182,155.151515 C199.954544,155.151515 201.69697,153.40909 201.69697,151.272727 C201.69697,149.136365 199.954544,147.393939 197.818182,147.393939 Z M213.333333,147.393939 C211.196971,147.393939 209.454545,149.136365 209.454545,151.272727 C209.454545,153.40909 211.196971,155.151515 213.333333,155.151515 C215.469696,155.151515 217.212121,153.40909 217.212121,151.272727 C217.212121,149.136365 215.469696,147.393939 213.333333,147.393939 Z M228.848485,147.393939 C226.712122,147.393939 224.969697,149.136365 224.969697,151.272727 C224.969697,153.40909 226.712122,155.151515 228.848485,155.151515 C230.984848,155.151515 232.727273,153.40909 232.727273,151.272727 C232.727273,149.136365 230.984848,147.393939 228.848485,147.393939 Z",
    id: "Shape"
  }))));
};
var CountdownIcon = function CountdownIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-countdown",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "30",
    y1: "33",
    x2: "30",
    y2: "38.875",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "36",
    r: "4",
    fill: "url(#SVGID_1__43666)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "30",
    y1: "5.5",
    x2: "30",
    y2: "59.058",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M30,18c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S39.925,18,30,18z M45.949,37 c-0.228,3.658-1.683,6.98-3.968,9.567l-1.375-1.375l-1.414,1.414l1.375,1.375c-2.587,2.285-5.91,3.74-9.568,3.968V50h-2v1.949 c-3.658-0.228-6.981-1.683-9.568-3.968l1.375-1.375l-1.414-1.414l-1.375,1.375c-2.284-2.587-3.74-5.91-3.968-9.567H16v-2h-1.949 c0.228-3.658,1.683-6.98,3.968-9.567l1.375,1.375l1.414-1.414l-1.375-1.375c2.587-2.285,5.91-3.74,9.568-3.968V22h2v-1.949 c3.658,0.228,6.981,1.683,9.568,3.968l-1.375,1.375l1.414,1.414l1.375-1.375c2.284,2.587,3.74,5.91,3.968,9.567H44v2H45.949z",
    fill: "url(#SVGID_2__43666)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "5.5",
    x2: "32",
    y2: "59.058",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M31,31.101V27h-2v4.101c-2.279,0.465-4,2.484-4,4.899c0,2.757,2.243,5,5,5 c2.415,0,4.434-1.721,4.899-4H39v-2h-4.101C34.5,33.044,32.956,31.5,31,31.101z M30,39c-1.654,0-3-1.346-3-3s1.346-3,3-3 s3,1.346,3,3S31.654,39,30,39z",
    fill: "url(#SVGID_3__43666)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "5.5",
    x2: "32",
    y2: "59.058",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M54,33h-2.21C50.366,22.607,41.661,14.505,31,14.025v-0.167c1.72-0.447,3-1.999,3-3.858 c0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.859,1.28,3.411,3,3.858v0.167C17.332,14.55,8,24.205,8,36c0,12.131,9.869,22,22,22 c11.113,0,20.322-8.284,21.79-19H54c1.103,0,2-0.897,2-2v-2C56,33.897,55.103,33,54,33z M28,10c0-1.103,0.897-2,2-2s2,0.897,2,2 s-0.897,2-2,2S28,11.103,28,10z M30,56c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S41.028,56,30,56z M54,37h-2.025 C51.99,36.668,52,36.335,52,36s-0.01-0.668-0.025-1H54V37z",
    fill: "url(#SVGID_4__43666)"
  }));
};
var CounterIcon = function CounterIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 66 70",
    version: "1.1",
    viewBox: "0 0 66 70",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_1_",
    x1: "-0.125",
    x2: "64.866",
    y1: "35",
    y2: "35",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#COUNTER_SVGID_1_)",
    d: "M60.7 61.1H5.3c-2.9 0-5.3-2.4-5.3-5.3V14.2c0-2.9 2.4-5.3 5.3-5.3h55.4c2.9 0 5.3 2.4 5.3 5.3v41.6c0 2.9-2.4 5.3-5.3 5.3zM5.3 11.8c-1.3 0-2.4 1.1-2.4 2.4v41.6c0 1.3 1.1 2.4 2.4 2.4h55.4c1.3 0 2.4-1.1 2.4-2.4V14.2c0-1.3-1.1-2.4-2.4-2.4H5.3z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_2_",
    x1: "-0.125",
    x2: "64.866",
    y1: "16.62",
    y2: "16.62",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_2_)",
    cx: "21.5",
    cy: "16.6",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_3_",
    x1: "-0.125",
    x2: "64.866",
    y1: "22.572",
    y2: "22.572",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_3_)",
    cx: "21.5",
    cy: "22.6",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_4_",
    x1: "-0.125",
    x2: "64.866",
    y1: "28.525",
    y2: "28.525",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_4_)",
    cx: "21.5",
    cy: "28.5",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_5_",
    x1: "-0.125",
    x2: "64.866",
    y1: "34.477",
    y2: "34.477",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_5_)",
    cx: "21.5",
    cy: "34.5",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_6_",
    x1: "-0.125",
    x2: "64.866",
    y1: "40.43",
    y2: "40.43",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_6_)",
    cx: "21.5",
    cy: "40.4",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_7_",
    x1: "-0.125",
    x2: "64.866",
    y1: "46.382",
    y2: "46.382",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_7_)",
    cx: "21.5",
    cy: "46.4",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_8_",
    x1: "-0.125",
    x2: "64.866",
    y1: "52.335",
    y2: "52.335",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_8_)",
    cx: "21.5",
    cy: "52.3",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_9_",
    x1: "-0.125",
    x2: "64.866",
    y1: "16.62",
    y2: "16.62",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_9_)",
    cx: "43.7",
    cy: "16.6",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_10_",
    x1: "-0.125",
    x2: "64.866",
    y1: "22.572",
    y2: "22.572",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_10_)",
    cx: "43.7",
    cy: "22.6",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_11_",
    x1: "-0.125",
    x2: "64.866",
    y1: "28.525",
    y2: "28.525",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_11_)",
    cx: "43.7",
    cy: "28.5",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_12_",
    x1: "-0.125",
    x2: "64.866",
    y1: "34.477",
    y2: "34.477",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_12_)",
    cx: "43.7",
    cy: "34.5",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_13_",
    x1: "-0.125",
    x2: "64.866",
    y1: "40.43",
    y2: "40.43",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_13_)",
    cx: "43.7",
    cy: "40.4",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_14_",
    x1: "-0.125",
    x2: "64.866",
    y1: "46.382",
    y2: "46.382",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_14_)",
    cx: "43.7",
    cy: "46.4",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_15_",
    x1: "-0.125",
    x2: "64.866",
    y1: "52.335",
    y2: "52.335",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_15_)",
    cx: "43.7",
    cy: "52.3",
    r: "1.3"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_16_",
    x1: "-0.125",
    x2: "64.866",
    y1: "35.766",
    y2: "35.766",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#COUNTER_SVGID_16_)",
    d: "M55.9 28.7h-6v-1.8h8v1.7l-4.5 15.9h-2l4.5-15.8z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_17_",
    x1: "-0.125",
    x2: "64.866",
    y1: "35.766",
    y2: "35.766",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#COUNTER_SVGID_17_)",
    d: "M33.1 43.2h-1.2c-.2 0-.3-.2-.3-.3V28.7c0-.2.2-.3.3-.3h1.2c.2 0 .3.2.3.3v14.2c.1.2-.1.3-.3.3z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_18_",
    x1: "-0.125",
    x2: "64.866",
    y1: "35.766",
    y2: "35.766",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#COUNTER_SVGID_18_)",
    d: "M12.5 43.2h-1.2c-.2 0-.3-.2-.3-.3V28.7c0-.2.2-.3.3-.3h1.2c.2 0 .3.2.3.3v14.2c.1.2-.1.3-.3.3z"
  }));
};
var CallToActionIcon = function CallToActionIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-cta",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "12",
    x2: "32",
    y2: "20.876",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M36,16.911c0,1.36-0.68,2.56-1.712,3.288c-0.296-0.984-1.208-1.688-2.288-1.688 c-1.08,0-1.992,0.704-2.288,1.688C28.68,19.471,28,18.271,28,16.911c0-2.208,1.792-4,4-4S36,14.703,36,16.911z",
    fill: "url(#SVGID_1__52516)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "4",
    x2: "32",
    y2: "59.752",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "31",
    y: "6",
    width: "2",
    height: "4",
    fill: "url(#SVGID_2__52516)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "41",
    y1: "4",
    x2: "41",
    y2: "59.752",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "39",
    y: "16",
    width: "4",
    height: "2",
    fill: "url(#SVGID_3__52516)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "23",
    y1: "4",
    x2: "23",
    y2: "59.752",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "21",
    y: "16",
    width: "4",
    height: "2",
    fill: "url(#SVGID_4__52516)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "38.364",
    y1: "4",
    x2: "38.364",
    y2: "59.752",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("polygon", {
    points: "37.657,12.758 36.243,11.344 39.071,8.515 40.485,9.929",
    fill: "url(#SVGID_5__52516)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "25.637",
    y1: "4",
    x2: "25.637",
    y2: "59.752",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("polygon", {
    points: "26.344,12.758 23.515,9.929 24.929,8.515 27.758,11.344",
    fill: "url(#SVGID_6__52516)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_7__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "4",
    x2: "32",
    y2: "59.752",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M34,58h-4c-1.103,0-2-0.897-2-2V44h-9.013c-0.711,0-1.351-0.369-1.711-0.987 c-0.365-0.627-0.371-1.38-0.013-2.012l12.168-21.493C29.966,18.564,30.926,18.001,32,18c1.074,0,2.035,0.563,2.569,1.507 l12.168,21.494c0.357,0.632,0.353,1.384-0.014,2.012C46.363,43.631,45.724,44,45.013,44H36v12C36,57.103,35.103,58,34,58z M32.001,20c-0.166,0-0.577,0.049-0.829,0.493L19.003,41.986L30,42v14h4V42h11.013l0.854-0.507l-0.87,0.492L32.829,20.492 C32.577,20.048,32.166,20,32.001,20z",
    fill: "url(#SVGID_7__52516)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_8__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "25.25",
    x2: "32",
    y2: "40.053",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M38.28,39H25.72c-0.766,0-1.247-0.828-0.867-1.493l6.28-10.99c0.383-0.671,1.35-0.671,1.733,0 l6.28,10.99C39.527,38.172,39.047,39,38.28,39z",
    fill: "url(#SVGID_8__52516)"
  }));
};
var FlipboxIcon = function FlipboxIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "600",
    height: "672",
    viewBox: "0 0 600 672",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Artboard",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-flipbox"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M410,0 L393.55469,13.82812 L301.36719,91.48437 L0,91.48437 L0,671.48437 L308.63281,671.48437 L410,586.13281 L410,0 Z M390,42.96875 L390,576.83593 L301.36719,651.48437 L20,651.48437 L20,111.48437 L308.63281,111.48437 L390,42.96875 Z M430,91.48437 C424.49219,91.48437 420,95.97656 420,101.48437 C420,106.99218 424.49219,111.48437 430,111.48437 C435.50781,111.48437 440,106.99218 440,101.48437 C440,95.97656 435.50781,91.48437 430,91.48437 Z M470,91.48437 C464.49219,91.48437 460,95.97656 460,101.48437 C460,106.99218 464.49219,111.48437 470,111.48437 C475.50781,111.48437 480,106.99218 480,101.48437 C480,95.97656 475.50781,91.48437 470,91.48437 Z M510,91.48437 C504.49219,91.48437 500,95.97656 500,101.48437 C500,106.99218 504.49219,111.48437 510,111.48437 C515.50781,111.48437 520,106.99218 520,101.48437 C520,95.97656 515.50781,91.48437 510,91.48437 Z M550,91.48437 C544.49219,91.48437 540,95.97656 540,101.48437 C540,106.99218 544.49219,111.48437 550,111.48437 C555.50781,111.48437 560,106.99218 560,101.48437 C560,95.97656 555.50781,91.48437 550,91.48437 Z M590,91.48437 C584.49219,91.48437 580,95.97656 580,101.48437 C580,106.99218 584.49219,111.48437 590,111.48437 C595.50781,111.48437 600,106.99218 600,101.48437 C600,95.97656 595.50781,91.48437 590,91.48437 Z M300,131.48437 C294.49219,131.48437 290,135.97656 290,141.48437 C290,146.99218 294.49219,151.48437 300,151.48437 C305.50781,151.48437 310,146.99218 310,141.48437 C310,135.97656 305.50781,131.48437 300,131.48437 Z M590,131.48437 C584.49219,131.48437 580,135.97656 580,141.48437 C580,146.99218 584.49219,151.48437 590,151.48437 C595.50781,151.48437 600,146.99218 600,141.48437 C600,135.97656 595.50781,131.48437 590,131.48437 Z M300,171.48437 C294.49219,171.48437 290,175.97656 290,181.48437 C290,186.99218 294.49219,191.48437 300,191.48437 C305.50781,191.48437 310,186.99218 310,181.48437 C310,175.97656 305.50781,171.48437 300,171.48437 Z M590,171.48437 C584.49219,171.48437 580,175.97656 580,181.48437 C580,186.99218 584.49219,191.48437 590,191.48437 C595.50781,191.48437 600,186.99218 600,181.48437 C600,175.97656 595.50781,171.48437 590,171.48437 Z M300,211.48437 C294.49219,211.48437 290,215.97656 290,221.48437 C290,226.99218 294.49219,231.48437 300,231.48437 C305.50781,231.48437 310,226.99218 310,221.48437 C310,215.97656 305.50781,211.48437 300,211.48437 Z M590,211.48437 C584.49219,211.48437 580,215.97656 580,221.48437 C580,226.99218 584.49219,231.48437 590,231.48437 C595.50781,231.48437 600,226.99218 600,221.48437 C600,215.97656 595.50781,211.48437 590,211.48437 Z M300,251.48437 C294.49219,251.48437 290,255.97656 290,261.48437 C290,266.99218 294.49219,271.48437 300,271.48437 C305.50781,271.48437 310,266.99218 310,261.48437 C310,255.97656 305.50781,251.48437 300,251.48437 Z M590,251.48437 C584.49219,251.48437 580,255.97656 580,261.48437 C580,266.99218 584.49219,271.48437 590,271.48437 C595.50781,271.48437 600,266.99218 600,261.48437 C600,255.97656 595.50781,251.48437 590,251.48437 Z M270,291.48437 L270,331.48437 L220,331.48437 C181.44531,331.48437 150,362.92968 150,401.48437 L150,491.48437 L170,491.48437 L170,401.48437 C170,373.75 192.26563,351.48437 220,351.48437 L270,351.48437 L270,391.48437 L330,341.48437 L270,291.48437 Z M590,291.48437 C584.49219,291.48437 580,295.97656 580,301.48437 C580,306.99218 584.49219,311.48437 590,311.48437 C595.50781,311.48437 600,306.99218 600,301.48437 C600,295.97656 595.50781,291.48437 590,291.48437 Z M590,331.48437 C584.49219,331.48437 580,335.97656 580,341.48437 C580,346.99218 584.49219,351.48437 590,351.48437 C595.50781,351.48437 600,346.99218 600,341.48437 C600,335.97656 595.50781,331.48437 590,331.48437 Z M590,371.48437 C584.49219,371.48437 580,375.97656 580,381.48437 C580,386.99218 584.49219,391.48437 590,391.48437 C595.50781,391.48437 600,386.99218 600,381.48437 C600,375.97656 595.50781,371.48437 590,371.48437 Z M300,411.48437 C294.49219,411.48437 290,415.97656 290,421.48437 C290,426.99218 294.49219,431.48437 300,431.48437 C305.50781,431.48437 310,426.99218 310,421.48437 C310,415.97656 305.50781,411.48437 300,411.48437 Z M590,411.48437 C584.49219,411.48437 580,415.97656 580,421.48437 C580,426.99218 584.49219,431.48437 590,431.48437 C595.50781,431.48437 600,426.99218 600,421.48437 C600,415.97656 595.50781,411.48437 590,411.48437 Z M300,451.48437 C294.49219,451.48437 290,455.97656 290,461.48437 C290,466.99218 294.49219,471.48437 300,471.48437 C305.50781,471.48437 310,466.99218 310,461.48437 C310,455.97656 305.50781,451.48437 300,451.48437 Z M590,451.48437 C584.49219,451.48437 580,455.97656 580,461.48437 C580,466.99218 584.49219,471.48437 590,471.48437 C595.50781,471.48437 600,466.99218 600,461.48437 C600,455.97656 595.50781,451.48437 590,451.48437 Z M300,491.48437 C294.49219,491.48437 290,495.97656 290,501.48437 C290,506.99218 294.49219,511.48437 300,511.48437 C305.50781,511.48437 310,506.99218 310,501.48437 C310,495.97656 305.50781,491.48437 300,491.48437 Z M590,491.48437 C584.49219,491.48437 580,495.97656 580,501.48437 C580,506.99218 584.49219,511.48437 590,511.48437 C595.50781,511.48437 600,506.99218 600,501.48437 C600,495.97656 595.50781,491.48437 590,491.48437 Z M300,531.48437 C294.49219,531.48437 290,535.97656 290,541.48437 C290,546.99218 294.49219,551.48437 300,551.48437 C305.50781,551.48437 310,546.99218 310,541.48437 C310,535.97656 305.50781,531.48437 300,531.48437 Z M590,531.48437 C584.49219,531.48437 580,535.97656 580,541.48437 C580,546.99218 584.49219,551.48437 590,551.48437 C595.50781,551.48437 600,546.99218 600,541.48437 C600,535.97656 595.50781,531.48437 590,531.48437 Z M300,571.48437 C294.49219,571.48437 290,575.97656 290,581.48437 C290,586.99218 294.49219,591.48437 300,591.48437 C305.50781,591.48437 310,586.99218 310,581.48437 C310,575.97656 305.50781,571.48437 300,571.48437 Z M590,571.48437 C584.49219,571.48437 580,575.97656 580,581.48437 C580,586.99218 584.49219,591.48437 590,591.48437 C595.50781,591.48437 600,586.99218 600,581.48437 C600,575.97656 595.50781,571.48437 590,571.48437 Z M300,611.48437 C294.49219,611.48437 290,615.97656 290,621.48437 C290,626.99218 294.49219,631.48437 300,631.48437 C305.50781,631.48437 310,626.99218 310,621.48437 C310,615.97656 305.50781,611.48437 300,611.48437 Z M590,611.48437 C584.49219,611.48437 580,615.97656 580,621.48437 C580,626.99218 584.49219,631.48437 590,631.48437 C595.50781,631.48437 600,626.99218 600,621.48437 C600,615.97656 595.50781,611.48437 590,611.48437 Z M350,651.48437 C344.49219,651.48437 340,655.97656 340,661.48437 C340,666.99218 344.49219,671.48437 350,671.48437 C355.50781,671.48437 360,666.99218 360,661.48437 C360,655.97656 355.50781,651.48437 350,651.48437 Z M390,651.48437 C384.49219,651.48437 380,655.97656 380,661.48437 C380,666.99218 384.49219,671.48437 390,671.48437 C395.50781,671.48437 400,666.99218 400,661.48437 C400,655.97656 395.50781,651.48437 390,651.48437 Z M430,651.48437 C424.49219,651.48437 420,655.97656 420,661.48437 C420,666.99218 424.49219,671.48437 430,671.48437 C435.50781,671.48437 440,666.99218 440,661.48437 C440,655.97656 435.50781,651.48437 430,651.48437 Z M470,651.48437 C464.49219,651.48437 460,655.97656 460,661.48437 C460,666.99218 464.49219,671.48437 470,671.48437 C475.50781,671.48437 480,666.99218 480,661.48437 C480,655.97656 475.50781,651.48437 470,651.48437 Z M510,651.48437 C504.49219,651.48437 500,655.97656 500,661.48437 C500,666.99218 504.49219,671.48437 510,671.48437 C515.50781,671.48437 520,666.99218 520,661.48437 C520,655.97656 515.50781,651.48437 510,651.48437 Z M550,651.48437 C544.49219,651.48437 540,655.97656 540,661.48437 C540,666.99218 544.49219,671.48437 550,671.48437 C555.50781,671.48437 560,666.99218 560,661.48437 C560,655.97656 555.50781,651.48437 550,651.48437 Z M590,651.48437 C584.49219,651.48437 580,655.97656 580,661.48437 C580,666.99218 584.49219,671.48437 590,671.48437 C595.50781,671.48437 600,666.99218 600,661.48437 C600,655.97656 595.50781,651.48437 590,651.48437 Z",
    id: "Shape"
  })))));
};
var InfoboxIcon = function InfoboxIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-info-box",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "19.203",
    x2: "32",
    y2: "45.242",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("polygon", {
    points: "43,19 21,19 21,25 29,25 29,45 35,45 35,25 43,25",
    fill: "url(#SVGID_1__56360)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "9.359",
    x2: "32",
    y2: "55.428",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M54,9H10c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h44c2.757,0,5-2.243,5-5V14 C59,11.243,56.757,9,54,9z M57,50c0,1.654-1.346,3-3,3H10c-1.654,0-3-1.346-3-3V14c0-1.654,1.346-3,3-3h44c1.654,0,3,1.346,3,3V50z",
    fill: "url(#SVGID_2__56360)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "58",
    y1: "26.939",
    x2: "58",
    y2: "61.543",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M58,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S60.206,28,58,28z",
    fill: "url(#SVGID_3__56360)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "58",
    y1: "30.125",
    x2: "58",
    y2: "33.875",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "58",
    cy: "32",
    r: "2",
    fill: "url(#SVGID_4__56360)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "6",
    y1: "26.939",
    x2: "6",
    y2: "61.543",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M6,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S8.206,28,6,28z",
    fill: "url(#SVGID_5__56360)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "6",
    y1: "30.125",
    x2: "6",
    y2: "33.875",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "32",
    r: "2",
    fill: "url(#SVGID_6__56360)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_7__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "21.172",
    x2: "32",
    y2: "43.205",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("polygon", {
    points: "41,21 23,21 23,23 31,23 31,43 33,43 33,23 41,23",
    fill: "url(#SVGID_7__56360)"
  }));
};
var NoticeIcon = function NoticeIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "256",
    height: "359",
    viewBox: "0 0 256 359",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-notice",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M128,0 C111.09568,0 97.28,13.815678 97.28,30.72 L97.28,40.96 L15.36,40.96 C6.9377536,40.96 0,47.8977536 0,56.32 L0,343.04 C0,351.462246 6.9377536,358.4 15.36,358.4 L240.64,358.4 C249.062246,358.4 256,351.462246 256,343.04 L256,56.32 C256,47.8977536 249.062246,40.96 240.64,40.96 L158.72,40.96 L158.72,30.72 C158.72,13.815678 144.90432,0 128,0 Z M128,10.24 C139.36832,10.24 148.48,19.351682 148.48,30.72 L148.48,66.56 C148.48,69.4529536 146.252954,71.68 143.36,71.68 L112.64,71.68 C109.747046,71.68 107.52,69.4529536 107.52,66.56 L107.52,30.72 C107.52,19.351682 116.63168,10.24 128,10.24 Z M128,25.6 C125.172302,25.6 122.88,27.8923021 122.88,30.72 C122.88,33.5476979 125.172302,35.84 128,35.84 C130.827698,35.84 133.12,33.5476979 133.12,30.72 C133.12,27.8923021 130.827698,25.6 128,25.6 Z M15.36,51.2 L97.28,51.2 L97.28,61.44 L92.16,61.44 C80.9096499,61.44 71.68,70.6696499 71.68,81.92 L71.68,87.04 L72.72,87.04 C75.0565325,95.7765786 82.7207987,102.4 92.16,102.4 L163.84,102.4 C173.279201,102.4 180.943468,95.7765786 183.28,87.04 L184.32,87.04 L184.32,81.92 C184.32,70.6696499 175.09035,61.44 163.84,61.44 L158.72,61.44 L158.72,51.2 L240.64,51.2 C243.532954,51.2 245.76,53.4270464 245.76,56.32 L245.76,343.04 C245.76,345.932954 243.532954,348.16 240.64,348.16 L15.36,348.16 C12.4670464,348.16 10.24,345.932954 10.24,343.04 L10.24,56.32 C10.24,53.4270464 12.4670464,51.2 15.36,51.2 Z M35.84,71.68 C33.0123021,71.68 30.72,73.9723021 30.72,76.8 C30.72,79.6276979 33.0123021,81.92 35.84,81.92 C38.6676979,81.92 40.96,79.6276979 40.96,76.8 C40.96,73.9723021 38.6676979,71.68 35.84,71.68 Z M92.16,71.68 L98.24,71.68 C100.376924,77.6054835 106.01919,81.92 112.64,81.92 L143.36,81.92 C149.98081,81.92 155.623076,77.6054835 157.76,71.68 L163.84,71.68 C169.55733,71.68 174.08,76.2026701 174.08,81.92 C174.08,87.6373299 169.55733,92.16 163.84,92.16 L92.16,92.16 C86.4426701,92.16 81.92,87.6373299 81.92,81.92 C81.92,76.2026701 86.4426701,71.68 92.16,71.68 Z M35.84,92.16 C33.0123021,92.16 30.72,94.4523021 30.72,97.28 C30.72,100.107698 33.0123021,102.4 35.84,102.4 C38.6676979,102.4 40.96,100.107698 40.96,97.28 C40.96,94.4523021 38.6676979,92.16 35.84,92.16 Z M35.84,112.64 C33.0123021,112.64 30.72,114.932302 30.72,117.76 C30.72,120.587698 33.0123021,122.88 35.84,122.88 C38.6676979,122.88 40.96,120.587698 40.96,117.76 C40.96,114.932302 38.6676979,112.64 35.84,112.64 Z M35.84,133.12 C33.0123021,133.12 30.72,135.412302 30.72,138.24 C30.72,141.067698 33.0123021,143.36 35.84,143.36 C38.6676979,143.36 40.96,141.067698 40.96,138.24 C40.96,135.412302 38.6676979,133.12 35.84,133.12 Z M35.84,153.6 C33.0123021,153.6 30.72,155.892302 30.72,158.72 C30.72,161.547698 33.0123021,163.84 35.84,163.84 C38.6676979,163.84 40.96,161.547698 40.96,158.72 C40.96,155.892302 38.6676979,153.6 35.84,153.6 Z M117.76,153.6 L121.180001,242.349998 L134.819999,242.349998 L138.24,153.6 L117.76,153.6 Z M35.84,174.08 C33.0123021,174.08 30.72,176.372302 30.72,179.2 C30.72,182.027698 33.0123021,184.32 35.84,184.32 C38.6676979,184.32 40.96,182.027698 40.96,179.2 C40.96,176.372302 38.6676979,174.08 35.84,174.08 Z M35.84,194.56 C33.0123021,194.56 30.72,196.852302 30.72,199.68 C30.72,202.507698 33.0123021,204.8 35.84,204.8 C38.6676979,204.8 40.96,202.507698 40.96,199.68 C40.96,196.852302 38.6676979,194.56 35.84,194.56 Z M35.84,215.04 C33.0123021,215.04 30.72,217.332302 30.72,220.16 C30.72,222.987698 33.0123021,225.28 35.84,225.28 C38.6676979,225.28 40.96,222.987698 40.96,220.16 C40.96,217.332302 38.6676979,215.04 35.84,215.04 Z M35.84,235.52 C33.0123021,235.52 30.72,237.812302 30.72,240.64 C30.72,243.467698 33.0123021,245.76 35.84,245.76 C38.6676979,245.76 40.96,243.467698 40.96,240.64 C40.96,237.812302 38.6676979,235.52 35.84,235.52 Z M35.84,256 C33.0123021,256 30.72,258.292302 30.72,261.12 C30.72,263.947698 33.0123021,266.24 35.84,266.24 C38.6676979,266.24 40.96,263.947698 40.96,261.12 C40.96,258.292302 38.6676979,256 35.84,256 Z M128,256.860001 C122.344604,256.860001 117.76,261.444605 117.76,267.100001 C117.76,272.755397 122.344604,277.340001 128,277.340001 C133.655396,277.340001 138.24,272.755397 138.24,267.100001 C138.24,261.444605 133.655396,256.860001 128,256.860001 Z M35.84,276.48 C33.0123021,276.48 30.72,278.772302 30.72,281.6 C30.72,284.427698 33.0123021,286.72 35.84,286.72 C38.6676979,286.72 40.96,284.427698 40.96,281.6 C40.96,278.772302 38.6676979,276.48 35.84,276.48 Z M35.84,296.96 C33.0123021,296.96 30.72,299.252302 30.72,302.08 C30.72,304.907698 33.0123021,307.2 35.84,307.2 C38.6676979,307.2 40.96,304.907698 40.96,302.08 C40.96,299.252302 38.6676979,296.96 35.84,296.96 Z M35.84,317.44 C33.0123021,317.44 30.72,319.732302 30.72,322.56 C30.72,325.387698 33.0123021,327.68 35.84,327.68 C38.6676979,327.68 40.96,325.387698 40.96,322.56 C40.96,319.732302 38.6676979,317.44 35.84,317.44 Z",
    id: "Shape"
  }))));
};
var PricingTableIcon = function PricingTableIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "256",
    height: "256",
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-pricing-table",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M85.3333333,0 C77.4385707,0 70.8027733,5.47924907 68.8833323,12.8 L17.0666667,12.8 C7.69137493,12.8 0,20.4913749 0,29.8666667 L0,226.133333 C0,235.508625 7.69137493,243.2 17.0666667,243.2 L21.3333333,243.2 C23.6897483,243.2 25.6,241.289748 25.6,238.933333 C25.6,236.576918 23.6897483,234.666667 21.3333333,234.666667 L17.0666667,234.666667 C12.3022251,234.666667 8.53333333,230.897775 8.53333333,226.133333 L8.53333333,29.8666667 C8.53333333,25.1022251 12.3022251,21.3333333 17.0666667,21.3333333 L68.2666667,21.3333333 L68.2666667,51.2 L29.8666667,51.2 L29.8666667,59.7333333 L68.2666667,59.7333333 L68.2666667,76.8 L29.8666667,76.8 L29.8666667,85.3333333 L68.2666667,85.3333333 L68.2666667,136.533333 L51.2,136.533333 L51.2,145.066667 L68.2666667,145.066667 L68.2666667,162.133333 L51.2,162.133333 L51.2,170.666667 L68.2666667,170.666667 L68.2666667,238.933333 C68.2666667,248.308625 75.9580416,256 85.3333333,256 L93.8666667,256 C96.2230816,256 98.1333333,254.089748 98.1333333,251.733333 C98.1333333,249.376918 96.2230816,247.466667 93.8666667,247.466667 L85.3333333,247.466667 C80.5688917,247.466667 76.8,243.697775 76.8,238.933333 L76.8,17.0666667 C76.8,12.3022251 80.5688917,8.53333333 85.3333333,8.53333333 L170.666667,8.53333333 C175.431108,8.53333333 179.2,12.3022251 179.2,17.0666667 L179.2,136.533333 L179.2,145.066667 L179.2,162.133333 L179.2,170.666667 L179.2,187.733333 L179.2,196.266667 L179.2,238.933333 C179.2,243.697775 175.431108,247.466667 170.666667,247.466667 L162.133333,247.466667 C159.776918,247.466667 157.866667,249.376918 157.866667,251.733333 C157.866667,254.089748 159.776918,256 162.133333,256 L170.666667,256 C180.041958,256 187.733333,248.308625 187.733333,238.933333 L187.733333,196.266667 L226.133333,196.266667 L226.133333,187.733333 L187.733333,187.733333 L187.733333,170.666667 L226.133333,170.666667 L226.133333,162.133333 L187.733333,162.133333 L187.733333,145.066667 L226.133333,145.066667 L226.133333,136.533333 L187.733333,136.533333 L187.733333,85.3333333 L226.133333,85.3333333 L226.133333,76.8 L187.733333,76.8 L187.733333,59.7333333 L226.133333,59.7333333 L226.133333,51.2 L187.733333,51.2 L187.733333,21.3333333 L238.933333,21.3333333 C243.697775,21.3333333 247.466667,25.1022251 247.466667,29.8666667 L247.466667,226.133333 C247.466667,230.897775 243.697775,234.666667 238.933333,234.666667 L234.666667,234.666667 C232.310252,234.666667 230.4,236.576918 230.4,238.933333 C230.4,241.289748 232.310252,243.2 234.666667,243.2 L238.933333,243.2 C248.308625,243.2 256,235.508625 256,226.133333 L256,29.8666667 C256,20.4913749 248.308625,12.8 238.933333,12.8 L187.116668,12.8 C185.197227,5.47924907 178.561429,0 170.666667,0 L85.3333333,0 Z M93.8666667,42.6666667 L93.8666667,51.2 L162.133333,51.2 L162.133333,42.6666667 L93.8666667,42.6666667 Z M93.8666667,68.2666667 L93.8666667,76.8 L162.133333,76.8 L162.133333,68.2666667 L93.8666667,68.2666667 Z M98.1333333,128 C95.7769184,128 93.8666667,129.910252 93.8666667,132.266667 C93.8666667,134.623082 95.7769184,136.533333 98.1333333,136.533333 C100.489748,136.533333 102.4,134.623082 102.4,132.266667 C102.4,129.910252 100.489748,128 98.1333333,128 Z M115.2,128 L115.2,136.533333 L162.133333,136.533333 L162.133333,128 L115.2,128 Z M34.1333333,136.533333 C31.7769184,136.533333 29.8666667,138.443585 29.8666667,140.8 C29.8666667,143.156415 31.7769184,145.066667 34.1333333,145.066667 C36.4897483,145.066667 38.4,143.156415 38.4,140.8 C38.4,138.443585 36.4897483,136.533333 34.1333333,136.533333 Z M98.1333333,153.6 C95.7769184,153.6 93.8666667,155.510252 93.8666667,157.866667 C93.8666667,160.223082 95.7769184,162.133333 98.1333333,162.133333 C100.489748,162.133333 102.4,160.223082 102.4,157.866667 C102.4,155.510252 100.489748,153.6 98.1333333,153.6 Z M115.2,153.6 L115.2,162.133333 L162.133333,162.133333 L162.133333,153.6 L115.2,153.6 Z M34.1333333,162.133333 C31.7769184,162.133333 29.8666667,164.043585 29.8666667,166.4 C29.8666667,168.756415 31.7769184,170.666667 34.1333333,170.666667 C36.4897483,170.666667 38.4,168.756415 38.4,166.4 C38.4,164.043585 36.4897483,162.133333 34.1333333,162.133333 Z M98.1333333,179.2 C95.7769184,179.2 93.8666667,181.110252 93.8666667,183.466667 C93.8666667,185.823082 95.7769184,187.733333 98.1333333,187.733333 C100.489748,187.733333 102.4,185.823082 102.4,183.466667 C102.4,181.110252 100.489748,179.2 98.1333333,179.2 Z M115.2,179.2 L115.2,187.733333 L162.133333,187.733333 L162.133333,179.2 L115.2,179.2 Z M98.1333333,204.8 C95.7769184,204.8 93.8666667,206.710252 93.8666667,209.066667 C93.8666667,211.423082 95.7769184,213.333333 98.1333333,213.333333 C100.489748,213.333333 102.4,211.423082 102.4,209.066667 C102.4,206.710252 100.489748,204.8 98.1333333,204.8 Z M115.2,204.8 L115.2,213.333333 L162.133333,213.333333 L162.133333,204.8 L115.2,204.8 Z M38.4,234.666667 C36.0435851,234.666667 34.1333333,236.576918 34.1333333,238.933333 C34.1333333,241.289748 36.0435851,243.2 38.4,243.2 C40.7564149,243.2 42.6666667,241.289748 42.6666667,238.933333 C42.6666667,236.576918 40.7564149,234.666667 38.4,234.666667 Z M55.4666667,234.666667 C53.1102517,234.666667 51.2,236.576918 51.2,238.933333 C51.2,241.289748 53.1102517,243.2 55.4666667,243.2 C57.8230816,243.2 59.7333333,241.289748 59.7333333,238.933333 C59.7333333,236.576918 57.8230816,234.666667 55.4666667,234.666667 Z M200.533333,234.666667 C198.176918,234.666667 196.266667,236.576918 196.266667,238.933333 C196.266667,241.289748 198.176918,243.2 200.533333,243.2 C202.889748,243.2 204.8,241.289748 204.8,238.933333 C204.8,236.576918 202.889748,234.666667 200.533333,234.666667 Z M217.6,234.666667 C215.243585,234.666667 213.333333,236.576918 213.333333,238.933333 C213.333333,241.289748 215.243585,243.2 217.6,243.2 C219.956415,243.2 221.866667,241.289748 221.866667,238.933333 C221.866667,236.576918 219.956415,234.666667 217.6,234.666667 Z M110.933333,247.466667 C108.576918,247.466667 106.666667,249.376918 106.666667,251.733333 C106.666667,254.089748 108.576918,256 110.933333,256 C113.289748,256 115.2,254.089748 115.2,251.733333 C115.2,249.376918 113.289748,247.466667 110.933333,247.466667 Z M128,247.466667 C125.643585,247.466667 123.733333,249.376918 123.733333,251.733333 C123.733333,254.089748 125.643585,256 128,256 C130.356415,256 132.266667,254.089748 132.266667,251.733333 C132.266667,249.376918 130.356415,247.466667 128,247.466667 Z M145.066667,247.466667 C142.710252,247.466667 140.8,249.376918 140.8,251.733333 C140.8,254.089748 142.710252,256 145.066667,256 C147.423082,256 149.333333,254.089748 149.333333,251.733333 C149.333333,249.376918 147.423082,247.466667 145.066667,247.466667 Z",
    id: "Shape"
  }))));
};
var ProgressbarIcon = function ProgressbarIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-progress",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "12.315",
    y1: "4.167",
    x2: "12.315",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M9.8,45.771c1.027,1.637,2.24,3.162,3.606,4.536l1.424-1.408 c-1.261-1.269-2.381-2.678-3.329-4.188L9.8,45.771z",
    fill: "url(#SVGID_1__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "7.592",
    y1: "4.167",
    x2: "7.592",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M6.003,34.906c0.215,1.923,0.646,3.823,1.283,5.646l1.894-0.658 c-0.588-1.682-0.985-3.435-1.183-5.209L6.003,34.906z",
    fill: "url(#SVGID_2__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "7.586",
    y1: "4.167",
    x2: "7.586",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M9.173,24.127l-1.894-0.656C6.643,25.295,6.213,27.196,6,29.121l1.994,0.219 C8.19,27.563,8.587,25.81,9.173,24.127z",
    fill: "url(#SVGID_3__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "12.299",
    y1: "4.167",
    x2: "12.299",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M14.813,15.115l-1.426-1.406c-1.364,1.374-2.576,2.901-3.602,4.538l1.7,1.061 C12.433,17.796,13.552,16.385,14.813,15.115z",
    fill: "url(#SVGID_4__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "20.846",
    y1: "4.167",
    x2: "20.846",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M23.789,9.403l-0.676-1.883c-1.821,0.65-3.574,1.509-5.211,2.551l1.079,1.686 C20.493,10.795,22.11,10.003,23.789,9.403z",
    fill: "url(#SVGID_5__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "20.869",
    y1: "4.167",
    x2: "20.869",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M17.924,53.942c1.64,1.04,3.395,1.896,5.215,2.546l0.676-1.883 c-1.68-0.6-3.3-1.39-4.813-2.351L17.924,53.942z",
    fill: "url(#SVGID_6__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_7__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "43.399",
    y1: "4.167",
    x2: "43.399",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M31.921,6c-1.042,0-2.093,0.063-3.124,0.185l0.237,1.986C29.988,8.058,30.958,8,31.921,8 c13.274,0,24.073,10.767,24.073,24S45.195,56,31.921,56c-0.963,0-1.934-0.058-2.887-0.171l-0.237,1.986 C29.828,57.938,30.879,58,31.921,58C46.302,58,58,46.337,58,32S46.302,6,31.921,6z",
    fill: "url(#SVGID_7__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_8__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "31.921",
    y1: "20.667",
    x2: "31.921",
    y2: "45.235",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M27.908,41.937c-1.028,0-2.056-0.391-2.839-1.171l-7.606-7.583l2.837-2.828l7.606,7.583 l15.636-15.583l2.837,2.828l-15.63,15.583C29.965,41.546,28.937,41.937,27.908,41.937z",
    fill: "url(#SVGID_8__48178)"
  }));
};
var InteractivePromoIcon = function InteractivePromoIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-promo",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "37",
    y1: "16.125",
    x2: "37",
    y2: "22.38",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M42,22H32c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h10c0.552,0,1,0.448,1,1v4 C43,21.552,42.552,22,42,22z",
    fill: "url(#SVGID_1__43971)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "39.5",
    y1: "10",
    x2: "39.5",
    y2: "54.388",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M58,36c0-2.967-2.167-5.431-5-5.91v-7.004c0-0.777-0.435-1.468-1.135-1.805 c-0.7-0.335-1.511-0.244-2.119,0.241l-7.996,6.396c-0.03,0.024-0.052,0.055-0.081,0.081H30c-2.757,0-5,2.243-5,5h-2 c-1.103,0-2,0.897-2,2v2c0,1.103,0.897,2,2,2h2c0,2.757,2.243,5,5,5v6c0,2.206,1.794,4,4,4s4-1.794,4-4v-6h3.669 c0.029,0.026,0.051,0.057,0.082,0.082l7.995,6.396c0.365,0.292,0.804,0.441,1.247,0.441c0.295,0,0.593-0.066,0.872-0.2 C52.565,50.382,53,49.69,53,48.914V41.91C55.833,41.431,58,38.967,58,36z M23,37v-2h2v2H23z M36,50c0,1.103-0.897,2-2,2 s-2-0.897-2-2v-6h4V50z M30,42c-1.654,0-3-1.346-3-3v-6c0-1.654,1.346-3,3-3h11v12h-3H30z M50.996,48.916L43,42.518V29.479l4-3.197 V36h2V24.684l2-1.598l0.002,25.834C51.002,48.92,51,48.919,50.996,48.916z M53,39.858v-7.716c1.72,0.447,3,2,3,3.858 S54.72,39.411,53,39.858z",
    fill: "url(#SVGID_2__43971)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "31",
    y1: "10",
    x2: "31",
    y2: "54.388",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M29,34v2h2v-2h2v-2h-2C29.897,32,29,32.897,29,34z",
    fill: "url(#SVGID_3__43971)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "27.5",
    y1: "10",
    x2: "27.5",
    y2: "54.388",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M8,40V15c0-1.654,1.346-3,3-3h33c1.654,0,3,1.346,3,3v4h2v-4c0-2.757-2.243-5-5-5H11 c-2.757,0-5,2.243-5,5v25c0,2.757,2.243,5,5,5h12v-2H11C9.346,43,8,41.654,8,40z",
    fill: "url(#SVGID_4__43971)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "19",
    y1: "10",
    x2: "19",
    y2: "54.388",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "16",
    width: "14",
    height: "2",
    fill: "url(#SVGID_5__43971)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "19",
    y1: "10",
    x2: "19",
    y2: "54.388",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "20",
    width: "14",
    height: "2",
    fill: "url(#SVGID_6__43971)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_7__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "17",
    y1: "10",
    x2: "17",
    y2: "54.388",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "24",
    width: "10",
    height: "2",
    fill: "url(#SVGID_7__43971)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_8__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "16",
    y1: "10",
    x2: "16",
    y2: "54.388",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "28",
    width: "8",
    height: "2",
    fill: "url(#SVGID_8__43971)"
  }));
};
var SocialIcon = function SocialIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-social",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__44048",
    gradientUnits: "userSpaceOnUse",
    x1: "28",
    y1: "38.167",
    x2: "28",
    y2: "49.844",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "28",
    cy: "44",
    r: "5",
    fill: "url(#SVGID_1__44048)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__44048",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "10",
    x2: "32",
    y2: "56.363",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M49,11c-6.617,0-12,5.383-12,12c0,2.949,1.074,5.649,2.845,7.741l-6.234,6.234 C32.071,35.742,30.122,35,28,35s-4.071,0.742-5.611,1.975l-5.077-5.077C18.366,30.542,19,28.846,19,27c0-4.411-3.589-8-8-8 s-8,3.589-8,8s3.589,8,8,8c1.846,0,3.542-0.634,4.897-1.688l5.077,5.077C19.742,39.929,19,41.878,19,44c0,4.963,4.037,9,9,9 s9-4.037,9-9c0-2.122-0.742-4.071-1.975-5.611l6.234-6.234C43.351,33.926,46.051,35,49,35c6.617,0,12-5.383,12-12S55.617,11,49,11z M11,33c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S14.309,33,11,33z M28,51c-3.859,0-7-3.141-7-7s3.141-7,7-7s7,3.141,7,7 S31.859,51,28,51z M49,33c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S54.514,33,49,33z",
    fill: "url(#SVGID_2__44048)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__44048",
    gradientUnits: "userSpaceOnUse",
    x1: "49",
    y1: "10",
    x2: "49",
    y2: "56.363",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M49,15c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S53.411,15,49,15z M49,29 c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S52.309,29,49,29z",
    fill: "url(#SVGID_3__44048)"
  }));
};
var TeamMembersIcon = function TeamMembersIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-team-members",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "30",
    y1: "30.75",
    x2: "30",
    y2: "35.17",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "33",
    r: "2",
    fill: "url(#SVGID_1__43670)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "22",
    y1: "30.75",
    x2: "22",
    y2: "35.17",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "33",
    r: "2",
    fill: "url(#SVGID_2__43670)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "26",
    y1: "36.833",
    x2: "26",
    y2: "41.25",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M23,38c0,1.657,1.343,3,3,3h0c1.657,0,3-1.343,3-3v-1h-6V38z",
    fill: "url(#SVGID_3__43670)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "6.75",
    x2: "32",
    y2: "57.323",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M51.114,40.344c0.329-0.77,0.569-1.584,0.716-2.428C54.191,37.518,56,35.473,56,33 c0-2.415-1.721-4.434-4-4.899V27h3.5c1.379,0,2.5-1.121,2.5-2.5S56.879,22,55.5,22H52v-3c0-3.859-3.141-7-7-7H33.715 c-0.866-0.477-1.77-0.885-2.715-1.195V7h-2c-1.2,0-2.266,0.542-3,1.382C25.266,7.542,24.2,7,23,7h-2v3.811 C14.621,12.917,10,18.925,10,26v2h0.026C9.391,28.838,9,29.87,9,31c0,2.533,1.894,4.632,4.339,4.956 c0.165,0.706,0.389,1.389,0.664,2.046C8.968,41.773,6,47.648,6,54v3h40h12v-3C58,48.6,55.436,43.548,51.114,40.344z M54,33 c0,1.302-0.838,2.402-2,2.816v-5.631C53.162,30.598,54,31.698,54,33z M55.5,24c0.275,0,0.5,0.225,0.5,0.5S55.775,25,55.5,25H42 c0-0.333-0.012-0.667-0.033-1H55.5z M43.789,44.874c-1.369-2.668-3.341-5.025-5.794-6.868c0.278-0.664,0.493-1.358,0.659-2.072 C41.1,35.61,43,33.533,43,31c0-1.13-0.391-2.162-1.026-3H42v-1h6v4c0,1.302,0.838,2.402,2,2.816V36c0,3.954-2.532,7.405-6.301,8.588 L43.789,44.874z M35.203,26H36c0.34,0,0.672-0.033,1-0.08v2.792C36.345,28.374,35.563,27.626,35.203,26z M37,30.823V33 c0,6.065-4.935,11-11,11s-11-4.935-11-11v-2.177c1.238-0.356,3.247-1.46,3.83-4.823H33.17C33.753,29.363,35.762,30.466,37,30.823z M36,24h-1h-2H19.101c0.465-2.279,2.484-4,4.899-4h16.899C40.435,22.279,38.415,24,36,24z M41,31c0,1.317-0.859,2.427-2.042,2.829 C38.976,33.553,39,33.28,39,33v-4.816C40.162,28.598,41,29.698,41,31z M39,26.101v-0.786c0.347-0.166,0.679-0.355,0.992-0.573 C39.993,24.828,40,24.914,40,25v1.424C39.682,26.284,39.349,26.172,39,26.101z M45,14c2.757,0,5,2.243,5,5v3h-7.685 C42.75,21.089,43,20.074,43,19v-1h-3.152c-0.881-1.525-1.988-2.87-3.269-4H45z M29,9v1.289c-0.575-0.109-1.159-0.19-1.75-0.236 C27.589,9.429,28.242,9,29,9z M23,9c0.762,0,1.418,0.434,1.756,1.063c-0.595,0.046-1.181,0.119-1.756,0.229V9z M11,31 c0-1.304,0.836-2.416,2-2.829V33c0,0.281,0.009,0.562,0.026,0.838C11.849,33.433,11,32.313,11,31z M14,26 c-0.712,0-1.386,0.155-2,0.424V26c0-7.72,6.28-14,14-14c4.626,0,8.885,2.264,11.486,6H24c-3.519,0-6.432,2.614-6.92,6H17 c0,3.078-1.119,4.258-2,4.713V26H14z M14.937,39.81C17.229,43.52,21.328,46,26,46c4.672,0,8.765-2.486,11.056-6.197 c0.541,0.422,1.053,0.873,1.537,1.349C35.839,45.401,31.104,48,26,48c-5.086,0-9.84-2.612-12.594-6.858 C13.888,40.672,14.399,40.228,14.937,39.81z M44,55h-4v-2h-2v2H14v-2h-2v2H8v-1c0-4.207,1.447-8.182,4.016-11.342 C15.173,47.216,20.41,50,26,50c5.608,0,10.815-2.774,13.972-7.33C42.54,45.843,44,49.835,44,54V55z M56,55h-4v-2h-2v2h-4v-1 c0-2.631-0.53-5.198-1.504-7.574c2.377-0.795,4.334-2.333,5.654-4.311C53.828,44.949,56,49.328,56,54V55z",
    fill: "url(#SVGID_4__43670)"
  }));
};
var TestimonialIcon = function TestimonialIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-testimonials",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "8",
    y1: "22.938",
    x2: "8",
    y2: "27.125",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M10,26c0,0.552-0.448,1-1,1H7c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_1__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "14",
    y1: "22.938",
    x2: "14",
    y2: "27.125",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M16,26c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_2__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "20",
    y1: "22.938",
    x2: "20",
    y2: "27.125",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22,26c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_3__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "26",
    y1: "22.938",
    x2: "26",
    y2: "27.125",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M28,26c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_4__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "8",
    y1: "28.813",
    x2: "8",
    y2: "33.448",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M10,32c0,0.552-0.448,1-1,1H7c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V32z",
    fill: "url(#SVGID_5__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "17",
    y1: "28.813",
    x2: "17",
    y2: "33.448",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22,32c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h8 c0.552,0,1,0.448,1,1V32z",
    fill: "url(#SVGID_6__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_7__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "26",
    y1: "28.813",
    x2: "26",
    y2: "33.448",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M28,32c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V32z",
    fill: "url(#SVGID_7__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_8__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "28",
    y1: "9.5",
    x2: "28",
    y2: "55.566",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M49,9H19c-2.757,0-5,2.241-5,4.998V17H5c-1.654,0-3,1.344-3,2.998v16C2,37.653,3.346,39,5,39 h9v2.998C14,44.755,16.243,47,19,47h11c0.552,0,1,0.447,1,0.998v4.1c0,1.132,0.658,2.135,1.717,2.617 c0.422,0.193,0.865,0.287,1.302,0.287c0.721,0,1.425-0.256,1.995-0.751l8.077-7.007C44.272,47.086,44.506,47,44.748,47H49 c2.757,0,5-2.245,5-5.002v-28C54,11.241,51.757,9,49,9z M14,35c-1.103,0-2,1-2,2H5c-0.552,0-1-0.45-1-1.002v-16 C4,19.447,4.448,19,5,19h24c0.552,0,1,0.447,1,0.998v16C30,36.55,29.552,37,29,37h-7c0-1-0.897-2-2-2H14z M52,41.998 C52,43.653,50.654,45,49,45h-4.252c-0.724,0-1.424,0.26-1.969,0.734l-8.076,7.007c-0.381,0.328-0.846,0.296-1.156,0.154 C33.383,52.821,33,52.593,33,52.098v-4.1C33,46.344,31.654,45,30,45H19c-1.654,0-3-1.347-3-3.002V39h13c1.654,0,3-1.347,3-3.002v-16 C32,18.344,30.654,17,29,17H16v-3.002C16,12.344,17.346,11,19,11h30c1.654,0,3,1.344,3,2.998V41.998z",
    fill: "url(#SVGID_8__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_9__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "42",
    y1: "9.5",
    x2: "42",
    y2: "55.568",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "37",
    y: "17",
    width: "10",
    height: "2",
    fill: "url(#SVGID_9__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_10__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "42",
    y1: "9.5",
    x2: "42",
    y2: "55.568",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "37",
    y: "21",
    width: "10",
    height: "2",
    fill: "url(#SVGID_10__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_11__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "42",
    y1: "9.5",
    x2: "42",
    y2: "55.568",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M44,25h-4c-1.654,0-3,1.344-3,2.998V39h2v-5h6v5h2V27.998C47,26.344,45.654,25,44,25z M45,32 h-6v-4.002C39,27.447,39.448,27,40,27h4c0.552,0,1,0.447,1,0.998V32z",
    fill: "url(#SVGID_11__43982)"
  }));
};
var ImageComparisonIcon = function ImageComparisonIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-img-comparison",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__56353",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "7",
    x2: "32",
    y2: "56.807",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M52,7H12c-2.757,0-5,2.243-5,5v40c0,2.757,2.243,5,5,5h40c2.757,0,5-2.243,5-5V12 C57,9.243,54.757,7,52,7z M9,12c0-1.654,1.346-3,3-3h40c0.462,0,0.894,0.113,1.285,0.301L41.154,21.432C38.697,19.3,35.501,18,32,18 c-7.72,0-14,6.28-14,14c0,3.501,1.3,6.697,3.432,9.154L9.301,53.285C9.113,52.894,9,52.462,9,52V12z M22.845,39.741 C21.074,37.649,20,34.949,20,32c0-6.617,5.383-12,12-12c2.949,0,5.649,1.074,7.741,2.845L22.845,39.741z M41.155,24.259 C42.926,26.351,44,29.051,44,32c0,6.617-5.383,12-12,12c-2.949,0-5.649-1.074-7.741-2.845L41.155,24.259z M55,52 c0,1.654-1.346,3-3,3H12c-0.462,0-0.894-0.113-1.285-0.301l12.131-12.131C25.303,44.7,28.499,46,32,46c7.72,0,14-6.28,14-14 c0-3.501-1.3-6.697-3.432-9.154l12.131-12.131C54.887,11.106,55,11.538,55,12V52z",
    fill: "url(#SVGID_1__56353)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__56353",
    gradientUnits: "userSpaceOnUse",
    x1: "34.691",
    y1: "27.618",
    x2: "34.691",
    y2: "41.826",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M32,42c-1.614,0-3.199-0.397-4.618-1.139l13.479-13.479C41.603,28.801,42,30.386,42,32 C42,37.514,37.514,42,32,42z",
    fill: "url(#SVGID_2__56353)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__56353",
    gradientUnits: "userSpaceOnUse",
    x1: "29.879",
    y1: "11.097",
    x2: "29.879",
    y2: "48.982",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M40.98,18.777C38.336,16.976,35.209,16,32,16c-8.822,0-16,7.178-16,16 c0,3.209,0.976,6.336,2.777,8.98L11,48.758V12c0-0.551,0.449-1,1-1h36.758L40.98,18.777z",
    fill: "url(#SVGID_3__56353)"
  }));
};
var TestIcon = function TestIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    className: "eb-category-icon",
    viewBox: "0 0 453 446",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2460FF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#B80AFF",
    offset: "100%"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M110.214843,146.445312 L165.730468,146.445312 L165.996093,146.578125 L166.195312,146.578125 C169.515641,146.578125 172.216135,148.282535 174.296875,151.691406 C175.005211,153.10808 175.359375,154.569003 175.359375,156.074219 C175.359375,159.748716 173.544288,162.582021 169.914062,164.574219 C168.674472,165.149742 167.434902,165.4375 166.195312,165.4375 L109.617187,165.4375 C106.960924,165.4375 104.614593,164.220064 102.578125,161.785156 C101.249993,160.014314 100.585937,158.199228 100.585937,156.339844 L100.585937,155.542969 C100.585937,152.621079 102.04686,150.119802 104.96875,148.039062 C106.562507,147.065099 108.134106,146.578125 109.683593,146.578125 L109.949218,146.578125 L110.214843,146.445312 Z M110.082031,193.925781 L138.703125,194.058594 C140.60678,194.058594 142.643218,195.032542 144.8125,196.980469 C146.539071,198.972666 147.402343,201.141915 147.402343,203.488281 C147.402343,206.764339 145.875015,209.442698 142.820312,211.523438 C141.315096,212.408859 139.854173,212.851562 138.4375,212.851562 L109.484375,212.851562 C106.651027,212.851562 104.19402,211.43491 102.113281,208.601562 C101.095046,207.007805 100.585937,205.41407 100.585937,203.820312 L100.585937,203.023438 C100.585937,200.013006 102.157536,197.423188 105.300781,195.253906 C106.894539,194.457027 108.399732,194.058594 109.816406,194.058594 L109.949218,194.058594 C110.03776,194.058594 110.082031,194.014323 110.082031,193.925781 Z M165.664062,194.058594 L166.128906,194.058594 C169.714861,194.058594 172.526031,195.91795 174.5625,199.636719 C175.093752,200.96485 175.359375,202.248692 175.359375,203.488281 C175.359375,207.20705 173.522153,210.06249 169.847656,212.054688 C168.519524,212.58594 167.346359,212.851562 166.328125,212.851562 L165.398437,212.851562 C162.388005,212.851562 159.820323,211.279964 157.695312,208.136719 C156.854162,206.542961 156.433593,204.971362 156.433593,203.421875 C156.433593,199.791649 158.248679,196.958344 161.878906,194.921875 C163.251308,194.346351 164.513015,194.058594 165.664062,194.058594 Z M110.214843,241.207031 L165.730468,241.207031 C165.730468,241.295573 166.416659,241.406249 167.789062,241.539062 C170.091157,242.114586 171.839837,243.15494 173.035156,244.660156 C174.584643,246.475269 175.359375,248.555978 175.359375,250.902344 C175.359375,254.488299 173.544288,257.321604 169.914062,259.402344 C168.807286,259.800783 168.054689,260 167.65625,260 L108.289062,260 C106.739575,260 104.880219,258.959646 102.710937,256.878906 C101.294263,254.975251 100.585937,253.049489 100.585937,251.101562 L100.585937,250.503906 C100.585937,247.227848 102.246077,244.54949 105.566406,242.46875 C106.540369,241.893226 108.045562,241.494793 110.082031,241.273438 C110.082031,241.229166 110.126301,241.207031 110.214843,241.207031 Z M200.175781,145.582031 L242.609375,145.582031 C252.216194,145.582031 260.494757,149.256474 267.445312,156.605469 C273.156279,163.113314 276.011719,170.528604 276.011719,178.851562 C276.011719,188.104213 272.669304,196.050748 265.984375,202.691406 C272.669304,209.022167 276.011719,216.968702 276.011719,226.53125 C276.011719,236.713593 271.783896,245.390589 263.328125,252.5625 C260.539049,254.598969 257.882825,256.148432 255.359375,257.210938 C251.37498,258.716153 248.253918,259.46875 245.996094,259.46875 L203.628906,259.46875 C202.212232,259.46875 200.485687,258.561207 198.449219,256.746094 C196.678377,254.753896 195.792969,252.606782 195.792969,250.304688 L195.792969,202.425781 C195.792969,198.884097 197.608055,196.072927 201.238281,193.992188 C202.787768,193.372393 204.093745,193.0625 205.15625,193.0625 C206.572924,193.106771 207.436196,193.128906 207.746094,193.128906 C214.696649,193.128906 226.649655,193.151041 243.605469,193.195312 C245.951835,193.195312 248.630193,192.199229 251.640625,190.207031 C255.270851,186.930973 257.085938,183.101584 257.085938,178.71875 C257.085938,175.265608 255.735691,171.989599 253.035156,168.890625 C250.290351,166.057277 246.881531,164.640625 242.808594,164.640625 L200.175781,164.640625 C195.881489,164.640625 192.804697,162.559917 190.945312,158.398438 C190.591144,157.24739 190.414062,156.207036 190.414062,155.277344 L190.414062,154.945312 C190.414062,151.713526 191.919256,149.079437 194.929688,147.042969 C196.434903,146.069006 198.183584,145.582031 200.175781,145.582031 Z M217.441406,212.652344 L217.441406,241.140625 L245,241.140625 C251.817742,241.140625 256.466133,237.776075 258.945312,231.046875 C259.388023,229.453117 259.609375,228.10287 259.609375,226.996094 C259.609375,223.365867 258.170587,219.979182 255.292969,216.835938 C252.636705,214.046861 249.028669,212.652344 244.46875,212.652344 L217.441406,212.652344 Z",
    id: "path-2"
  }), /*#__PURE__*/React.createElement("filter", {
    x: "-23.1%",
    y: "-22.3%",
    width: "146.2%",
    height: "170.8%",
    filterUnits: "objectBoundingBox",
    id: "filter-3"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dy: "15",
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "11",
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
    "in": "shadowBlurOuter1"
  })), /*#__PURE__*/React.createElement("circle", {
    id: "path-4",
    cx: "318.5",
    cy: "60.5",
    r: "55.5"
  }), /*#__PURE__*/React.createElement("filter", {
    x: "-65.8%",
    y: "-44.1%",
    width: "222.5%",
    height: "222.5%",
    filterUnits: "objectBoundingBox",
    id: "filter-5"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dx: "-5",
    dy: "19",
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "19.5",
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28161798 0",
    "in": "shadowBlurOuter1"
  })), /*#__PURE__*/React.createElement("circle", {
    id: "path-6",
    cx: "319",
    cy: "61",
    r: "17"
  }), /*#__PURE__*/React.createElement("filter", {
    x: "-152.9%",
    y: "-111.8%",
    width: "388.2%",
    height: "388.2%",
    filterUnits: "objectBoundingBox",
    id: "filter-7"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dx: "-3",
    dy: "11",
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "14.5",
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0.382304935 0 0 0 0 0.0324290316 0 0 0 0 0.516581633 0 0 0 0.654381793 0",
    "in": "shadowBlurOuter1"
  })), /*#__PURE__*/React.createElement("circle", {
    id: "path-8",
    cx: "63.5",
    cy: "348.5",
    r: "9.5"
  }), /*#__PURE__*/React.createElement("filter", {
    x: "-147.4%",
    y: "-89.5%",
    width: "363.2%",
    height: "363.2%",
    filterUnits: "objectBoundingBox",
    id: "filter-9"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dx: "-3",
    dy: "8",
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "7",
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28161798 0",
    "in": "shadowBlurOuter1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "79.408%",
    y1: "0%",
    x2: "6.263%",
    y2: "100%",
    id: "linearGradient-10"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FF710F",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#CB16A9",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "EB-Logo",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group-5",
    transform: "translate(29 19)"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "Oval-2",
    fill: "url(#linearGradient-1)",
    cx: "187",
    cy: "208",
    r: "187"
  }), /*#__PURE__*/React.createElement("g", {
    id: "EB"
  }, /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    filter: "url(#filter-3)",
    xlinkHref: "#path-2"
  }), /*#__PURE__*/React.createElement("use", {
    fill: "#FFF",
    xlinkHref: "#path-2"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Oval-3",
    opacity: "0.913"
  }, /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    filter: "url(#filter-5)",
    xlinkHref: "#path-4"
  }), /*#__PURE__*/React.createElement("use", {
    fill: "#FFF",
    xlinkHref: "#path-4"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Oval-3"
  }, /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    filter: "url(#filter-7)",
    xlinkHref: "#path-6"
  }), /*#__PURE__*/React.createElement("use", {
    fill: "#A43DFF",
    xlinkHref: "#path-6"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Oval-3-Copy-2",
    opacity: "0.913",
    transform: "rotate(-7 63.5 348.5)"
  }, /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    filter: "url(#filter-9)",
    xlinkHref: "#path-8"
  }), /*#__PURE__*/React.createElement("use", {
    fill: "#FFF",
    xlinkHref: "#path-8"
  })), /*#__PURE__*/React.createElement("circle", {
    id: "Oval-3-Copy-4",
    fill: "#F5A623",
    cx: "385",
    cy: "117",
    r: "12"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "Oval-3-Copy-5",
    fill: "#D8D8D8",
    cx: "257",
    cy: "9",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M145.182623,334.548531 C139.966285,339.764869 137.156925,346.476118 136.753323,353.300766 C136.311922,360.746058 133.113592,367.759704 127.839945,373.033351 C122.604098,378.270418 115.653858,381.543128 108.259778,381.941852 C100.95349,382.335699 93.769137,385.480378 88.3930654,391.383204 C83.408402,396.856823 80.9099736,403.833889 80.8989995,410.813393 L80.8989995,410.914598 C80.9111929,417.89898 83.4144987,424.878484 88.4064781,430.352103 C99.6170933,442.645492 118.683918,442.977153 130.316425,431.343426 C135.532764,426.127088 138.340904,419.418278 138.745725,412.591191 C139.185907,405.144679 142.384237,398.132253 147.659103,392.857387 C152.894951,387.62032 159.843972,384.350049 167.239271,383.951325 C174.544339,383.557478 181.729912,380.41036 187.104764,374.508753 C192.077234,369.048547 194.575662,362.093429 194.59883,355.130996 L194.59883,354.934682 C194.575662,347.964933 192.073576,341.002499 187.092571,335.541074 C181.332407,329.223671 173.498145,326.06558 165.663883,326.06558 C158.251513,326.06558 150.839143,328.89323 145.182623,334.548531",
    id: "Fill-1",
    fill: "url(#linearGradient-10)",
    opacity: "0.898",
    transform: "rotate(34 137.749 382.946)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M220.972652,42 C213.584652,42.035 207.609652,48.035 207.609652,55.43 C207.609652,58.85 208.887652,61.971 210.992652,64.341 C213.289652,66.927 214.540652,70.274 214.540652,73.732 L214.539652,73.732 C214.539652,76.922 213.499652,80.038 211.513652,82.514 C209.037652,84.5 205.920652,85.541 202.731652,85.541 C199.272652,85.541 195.925652,84.29 193.340652,81.994 C190.969652,79.888 187.849652,78.609 184.429652,78.609 C176.801652,78.609 170.659652,84.969 171.014652,92.675 C171.330652,99.551 176.908652,105.132 183.784652,105.454 C187.483652,105.627 190.869652,104.303 193.393652,102.036 C195.949652,99.743 199.300652,98.537 202.733652,98.537 C206.191652,98.537 209.539652,99.788 212.125652,102.085 C214.494652,104.189 217.614652,105.469 221.035652,105.469 C222.732652,105.469 224.354652,105.152 225.849652,104.578 C225.856652,104.576 225.863652,104.574 225.869652,104.57 C226.071652,104.492 226.271652,104.411 226.467652,104.323 C226.485652,104.315 226.501652,104.307 226.519652,104.299 C226.705652,104.216 226.888652,104.13 227.070652,104.038 C227.097652,104.024 227.125652,104.009 227.152652,103.995 C227.322652,103.908 227.489652,103.818 227.656652,103.725 C227.693652,103.704 227.729652,103.681 227.765652,103.659 C227.920652,103.569 228.073652,103.479 228.223652,103.384 C228.270652,103.355 228.315652,103.323 228.361652,103.292 C228.499652,103.202 228.637652,103.111 228.772652,103.017 C228.828652,102.977 228.882652,102.936 228.936652,102.896 C229.058652,102.806 229.181652,102.717 229.301652,102.623 C229.366652,102.572 229.427652,102.52 229.491652,102.468 C229.598652,102.381 229.705652,102.295 229.809652,102.205 C229.882652,102.143 229.952652,102.077 230.023652,102.013 C230.115652,101.931 230.207652,101.848 230.296652,101.763 C230.377652,101.687 230.452652,101.608 230.530652,101.531 C230.608652,101.454 230.686652,101.377 230.762652,101.298 C230.847652,101.208 230.929652,101.116 231.012652,101.024 C231.076652,100.952 231.141652,100.883 231.204652,100.811 C231.294652,100.706 231.380652,100.599 231.467652,100.492 C231.518652,100.429 231.572652,100.366 231.621652,100.302 C231.715652,100.182 231.805652,100.06 231.894652,99.938 C231.934652,99.882 231.976652,99.829 232.015652,99.774 C232.110652,99.639 232.201652,99.501 232.291652,99.362 C232.321652,99.317 232.353652,99.271 232.383652,99.224 C232.478652,99.074 232.569652,98.921 232.658652,98.767 C232.679652,98.73 232.702652,98.694 232.723652,98.656 C232.818652,98.491 232.906652,98.322 232.994652,98.152 C233.008652,98.125 233.022652,98.099 233.037652,98.071 C233.129652,97.89 233.214652,97.707 233.298652,97.519 C233.305652,97.503 233.314652,97.486 233.321652,97.469 C233.409652,97.272 233.491652,97.072 233.569652,96.871 L233.578652,96.851 C234.152652,95.356 234.467652,93.733 234.467652,92.037 C234.467652,88.617 233.189652,85.496 231.083652,83.125 C228.787652,80.54 227.536652,77.191 227.536652,73.733 C227.536652,70.301 228.741652,66.949 231.035652,64.395 C233.302652,61.87 234.625652,58.484 234.453652,54.786 C234.131652,47.91 228.550652,42.332 221.673652,42.015 C221.486652,42.006 221.299652,42.001 221.113652,42 L220.972652,42 Z",
    id: "Fill-1",
    fill: "#FFF",
    opacity: "0.097"
  }))));
};
var WrapperIcon = function WrapperIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 42",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-wrapper",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3,0 C1.347656,0 0,1.347656 0,3 L0,27 C0,28.652344 1.347656,30 3,30 L20.050781,30 C20.566406,36.699219 26.171875,42 33,42 C39.828125,42 45.433594,36.699219 45.949219,30 L61,30 C62.652344,30 64,28.652344 64,27 L64,3 C64,1.347656 62.652344,0 61,0 L3,0 Z M3,2 L61,2 C61.550781,2 62,2.449219 62,3 L62,27 C62,27.550781 61.550781,28 61,28 L45.949219,28 C45.460938,21.628906 40.371094,16.539063 34,16.050781 L34,5 C34,4.449219 33.554688,4 33,4 C32.445313,4 32,4.449219 32,5 L32,16.050781 C25.628906,16.539063 20.539063,21.628906 20.050781,28 L3,28 C2.449219,28 2,27.550781 2,27 L2,3 C2,2.449219 2.449219,2 3,2 Z M5,4 C4.445313,4 4,4.449219 4,5 C4,5.550781 4.445313,6 5,6 L7,6 C7.554688,6 8,5.550781 8,5 C8,4.449219 7.554688,4 7,4 L5,4 Z M17,4 C16.445313,4 16,4.449219 16,5 L16,25 C16,25.550781 16.445313,26 17,26 C17.554688,26 18,25.550781 18,25 L18,5 C18,4.449219 17.554688,4 17,4 Z M49,4 C48.445313,4 48,4.449219 48,5 L48,25 C48,25.550781 48.445313,26 49,26 C49.554688,26 50,25.550781 50,25 L50,5 C50,4.449219 49.554688,4 49,4 Z M5,9 C4.445313,9 4,9.449219 4,10 C4,10.550781 4.445313,11 5,11 L7,11 C7.554688,11 8,10.550781 8,10 C8,9.449219 7.554688,9 7,9 L5,9 Z M5,14 C4.445313,14 4,14.449219 4,15 C4,15.550781 4.445313,16 5,16 L7,16 C7.554688,16 8,15.550781 8,15 C8,14.449219 7.554688,14 7,14 L5,14 Z M33,18 C39.066406,18 44,22.933594 44,29 C44,35.066406 39.066406,40 33,40 C26.933594,40 22,35.066406 22,29 C22,22.933594 26.933594,18 33,18 Z M5,19 C4.445313,19 4,19.449219 4,20 C4,20.550781 4.445313,21 5,21 L7,21 C7.554688,21 8,20.550781 8,20 C8,19.449219 7.554688,19 7,19 L5,19 Z M33,22 C32.445313,22 32,22.449219 32,23 L32,28 L27,28 C26.445313,28 26,28.449219 26,29 C26,29.550781 26.445313,30 27,30 L32,30 L32,35 C32,35.550781 32.445313,36 33,36 C33.554688,36 34,35.550781 34,35 L34,30 L39,30 C39.554688,30 40,29.550781 40,29 C40,28.449219 39.554688,28 39,28 L34,28 L34,23 C34,22.449219 33.554688,22 33,22 Z M5,24 C4.445313,24 4,24.449219 4,25 C4,25.550781 4.445313,26 5,26 L7,26 C7.554688,26 8,25.550781 8,25 C8,24.449219 7.554688,24 7,24 L5,24 Z",
    id: "Shape"
  }))));
};
var InstagramIcon = function InstagramIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "\u0421\u043B\u043E\u0439_1",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__43625",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "6.667",
    x2: "32",
    y2: "57.872",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z",
    fill: "url(#SVGID_1__43625)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__43625",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "18.167",
    x2: "32",
    y2: "45.679",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z",
    fill: "url(#SVGID_2__43625)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__43625",
    gradientUnits: "userSpaceOnUse",
    x1: "46",
    y1: "12.75",
    x2: "46",
    y2: "23.049",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "46",
    cy: "18",
    r: "3",
    fill: "url(#SVGID_3__43625)"
  }));
};
var ImageGalleryIcon = function ImageGalleryIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 66 70"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "35.1",
    x2: "79.881",
    y2: "35.1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    className: "st0g",
    d: "M66.1,2.1H-0.1c-0.9,0-1.6,0.7-1.6,1.6v31.4v31.4c0,0.9,0.7,1.6,1.6,1.6h66.2c0.9,0.2,1.6-0.5,1.6-1.4V35.3 V3.7C67.7,2.8,67,2.1,66.1,2.1z M64.6,36.9v5.8v22.5H1.5V33.8V23.5v-18h63.1V36.9z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "25.217",
    x2: "79.881",
    y2: "25.217"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    className: "st1g",
    d: "M12.4,33.2h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H12.4c-1.7,0-3,1.4-3,3v10C9.4,31.9,10.8,33.2,12.4,33.2z M12,20.2c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4H12.4c-0.2,0-0.4-0.2-0.4-0.4V20.2z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "43.836",
    x2: "79.881",
    y2: "43.836"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    className: "st2g",
    d: "M12.4,51.8h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H12.4c-1.7,0-3,1.4-3,3v10C9.4,50.5,10.8,51.8,12.4,51.8z M12,38.9c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4H12.4c-0.2,0-0.4-0.2-0.4-0.4V38.9z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "43.836",
    x2: "79.881",
    y2: "43.836"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    className: "st3g",
    d: "M37.5,51.8h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H37.5c-1.7,0-3,1.4-3,3v10C34.5,50.5,35.9,51.8,37.5,51.8 z M37.1,38.9c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4H37.5c-0.2,0-0.4-0.2-0.4-0.4V38.9z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "25.217",
    x2: "79.881",
    y2: "25.217"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    className: "st4g",
    d: "M37.5,33.2h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H37.5c-1.7,0-3,1.4-3,3v10C34.5,31.9,35.9,33.2,37.5,33.2 z M37.1,20.2c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4h0l-4.7-4.9h-0.1l-2.5,2.2l-3.2-4 c0,0,0,0-0.1,0c0,0,0,0-0.1,0l-5,6.7c-0.2-0.1-0.3-0.2-0.3-0.4V20.2z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "22.534",
    x2: "79.881",
    y2: "22.534"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    className: "st5g",
    d: "M48.1,23.8c0.7,0,1.2-0.6,1.2-1.2s-0.6-1.2-1.2-1.2s-1.2,0.6-1.2,1.2C46.8,23.1,47.3,23.8,48.1,23.8z"
  }));
};
var HeadingIcon = function HeadingIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 83 63"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "a",
    x1: "50%",
    x2: "50%",
    y1: ".781%",
    y2: "100.93%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#6DC7FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#E6ABFF"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "b",
    x1: "50%",
    x2: "50%",
    y1: "-13.261%",
    y2: "419.291%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "c",
    x1: "50%",
    x2: "50%",
    y1: "3.125%",
    y2: "96.88%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#6DC7FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#E6ABFF"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "d",
    x1: "50%",
    x2: "50%",
    y1: ".781%",
    y2: "100.93%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#6DC7FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#E6ABFF"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "e",
    x1: "50%",
    x2: "50%",
    y1: ".782%",
    y2: "100.93%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#C822FF"
  }))), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "url(#a)",
    fillRule: "nonzero",
    d: "M72.056 0H10.944C7.115 0 4 3.072 4 6.848v49.304C4 59.928 7.115 63 10.944 63h61.112C75.885 63 79 59.928 79 56.152V6.848C79 3.072 75.885 0 72.056 0zm4.166 56.152c0 2.265-1.87 4.109-4.166 4.109H10.944c-2.297 0-4.166-1.844-4.166-4.109V6.848c0-2.265 1.87-4.109 4.166-4.109h61.112c2.297 0 4.166 1.844 4.166 4.109v49.304z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#b)",
    d: "M77.5 26a5.506 5.506 0 00-5.5 5.5c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5-2.467-5.5-5.5-5.5z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "77.5",
    cy: "31.5",
    r: "2.5",
    fill: "url(#c)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#b)",
    d: "M5.5 26A5.506 5.506 0 000 31.5C0 34.533 2.467 37 5.5 37s5.5-2.467 5.5-5.5S8.533 26 5.5 26z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5.5",
    cy: "31.5",
    r: "2.5",
    fill: "url(#c)"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    fill: "url(#d)",
    d: "M3 12.667h14.452V19H3v-6.333zm30.968-4.223l-6.194 4.223H25.71V6.333L33.968 0H35v8.444h-1.032z",
    transform: "translate(22 17)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#e)",
    d: "M0 0h6v30H0V0zm16 0h6v30h-6V0zm18 0h6v30h-6V0z",
    transform: "translate(22 17)"
  }))));
};
var SliderIcon = function SliderIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 70 70",
    version: "1.1",
    viewBox: "0 0 70 70",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "-68.872",
    x2: "-62.187",
    y1: "35.19",
    y2: "35.19",
    gradientTransform: "matrix(-1 0 0 1 1.128 0)",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_1_SLIDER"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#SVGID_1_SLIDER)",
    d: "M64.8 40.6c-.4 0-.7-.1-1-.4-.6-.6-.6-1.5 0-2.1l2.4-2.5-2.3-3.4c-.5-.7-.3-1.6.4-2.1s1.6-.3 2.1.4l3.6 5.4-4.1 4.3c-.3.2-.7.4-1.1.4z"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "-132.008",
    x2: "-125.322",
    y1: "35.19",
    y2: "35.19",
    gradientTransform: "translate(132.008)",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_2_SLIDER"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#SVGID_2_SLIDER)",
    d: "M5.2 40.6c-.4 0-.8-.2-1.1-.5L0 35.8l3.6-5.4c.5-.7 1.4-.9 2.1-.4.7.5.9 1.4.4 2.1l-2.3 3.4L6.3 38c.6.6.6 1.5 0 2.1-.4.3-.7.5-1.1.5z"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "10.48",
    x2: "59.603",
    y1: "35",
    y2: "35",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_3_SLIDER"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#SVGID_3_SLIDER)",
    d: "M53 65.2H17.1c-3.6 0-6.6-3-6.6-6.6V11.4c0-3.6 3-6.6 6.6-6.6H53c3.6 0 6.6 3 6.6 6.6v47.2c0 3.6-3 6.6-6.6 6.6zM17.1 7.8c-2 0-3.6 1.6-3.6 3.6v47.2c0 2 1.6 3.6 3.6 3.6H53c2 0 3.6-1.6 3.6-3.6V11.4c0-2-1.6-3.6-3.6-3.6H17.1z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "10.809",
    x2: "59.152",
    y1: "40.508",
    y2: "40.508",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_4_SLIDER"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#SVGID_4_SLIDER)",
    d: "M33.2 53.8L23 41.3 13.2 53.7 10.8 51.8 23 36.6 33.5 49.4 57.1 27.2 59.2 29.4z"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "39.404",
    x2: "49.259",
    y1: "21.195",
    y2: "21.195",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_5_SLIDER"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#SVGID_5_SLIDER)",
    d: "M44.3 26.1c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9c.1 2.7-2.2 4.9-4.9 4.9zm0-7c-1.2 0-2.1 1-2.1 2.1 0 1.2 1 2.1 2.1 2.1s2.1-1 2.1-2.1c.1-1.2-.9-2.1-2.1-2.1z"
  }))));
};
var TypingTextIcon = function TypingTextIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 70 70",
    version: "1.1",
    viewBox: "0 0 70 70",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "-16.082",
    x2: "86.557",
    y1: "32.808",
    y2: "37.212",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_1_TYPED"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M63.4 0H6.6C3 0 0 3 0 6.6v56.8C0 67 3 70 6.6 70h56.8c3.6 0 6.6-3 6.6-6.6V6.6C70 3 67 0 63.4 0zM67 63.4c0 2-1.6 3.6-3.6 3.6H6.6c-2 0-3.6-1.6-3.6-3.6V6.6C3 4.6 4.6 3 6.6 3h56.8c2 0 3.6 1.6 3.6 3.6v56.8z",
    className: "st0t"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "-16.763",
    x2: "85.875",
    y1: "48.693",
    y2: "53.097",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_2_TYPED"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M58.8 50.1H44.9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h13.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z",
    className: "st1t"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "-16.087",
    x2: "86.551",
    y1: "32.94",
    y2: "37.344",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_3_TYPED"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M45.4 25.2v-6.1c0-1.3-1.2-2.2-2.2-2.2H11.9c-1.3 0-2.2 1.2-2.2 2.2v6.1c0 .7.3 1.3.7 1.6.4.4 1.1.7 1.6.7h2.7c1.3 0 2.2-1.2 2.2-2.2v-.8H24V46h-3.2c-1.3 0-2.2 1.2-2.2 2.2v2.7c0 1.3 1.2 2.2 2.2 2.2H35c1.3 0 2.2-1.2 2.2-2.2v-2.6c.1-.5-.1-1-.5-1.4-.4-.5-1-.8-1.7-.8h-3.8V24.4h7.1v.8c0 1.3 1.2 2.2 2.2 2.2h2.7c1.3 0 2.2-1.1 2.2-2.2zm-5.9-3.3H30c-.7 0-1.2.5-1.2 1.2v24.1c0 .7.5 1.2 1.2 1.2h4.8v2.2H21.1v-2.2h4.2c.7 0 1.2-.5 1.2-1.2v-24c0-.7-.5-1.2-1.2-1.2h-9.6c-.7 0-1.2.5-1.2 1.2V25h-2.4v-5.7H43v5.6h-2.2v-1.8c-.1-.6-.6-1.2-1.3-1.2z",
    className: "st2t"
  }));
};
var InstagramOriginalIcon = function InstagramOriginalIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    id: "SVG_INS_ORG"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "a",
    x1: "-46.004",
    x2: "-32.933",
    y1: "634.121",
    y2: "647.192",
    gradientTransform: "matrix(32 0 0 -32 1519 20757)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FFC107"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.507",
    stopColor: "#F44336"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.99",
    stopColor: "#9C27B0"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#a)",
    d: "M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "b",
    x1: "-42.297",
    x2: "-36.64",
    y1: "637.828",
    y2: "643.485",
    gradientTransform: "matrix(32 0 0 -32 1519 20757)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FFC107"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.507",
    stopColor: "#F44336"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.99",
    stopColor: "#9C27B0"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#b)",
    d: "M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "c",
    x1: "-35.546",
    x2: "-34.792",
    y1: "644.579",
    y2: "645.333",
    gradientTransform: "matrix(32 0 0 -32 1519 20757)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FFC107"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.507",
    stopColor: "#F44336"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.99",
    stopColor: "#9C27B0"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "393.6",
    cy: "118.4",
    r: "17.056",
    fill: "url(#c)"
  }));
};
var SaveIcon = function SaveIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 500 500",
    version: "1.1",
    viewBox: "0 0 500 500",
    xmlSpace: "preserve",
    className: "eb-instagram-save-icon"
  }, /*#__PURE__*/React.createElement("path", {
    id: "INS_SAVE",
    d: "M156.4 348c-2.1 0-4.2-.4-6.1-1.4-5.1-2.4-8.4-7.6-8.4-13.2V101.3c0-10.8 8.8-19.7 19.7-19.7h190.6c10.8 0 19.6 8.8 19.6 19.7v232.1c0 5.6-3.3 10.8-8.4 13.2-5.1 2.4-11.2 1.6-15.5-2.1l-91-76.4-91 76.4c-2.8 2.3-6.1 3.5-9.5 3.5zm-6.4-22.3zm213.6 0zm-106.8-85.3c3.4 0 6.7 1.2 9.5 3.5l80.8 67.9V106.3H166.5v205.5l80.9-67.9c2.7-2.3 6-3.5 9.4-3.5zm-6.4 22.3zm12.8 0z",
    className: "st0"
  }));
};
var ParallaxSliderIcon = function ParallaxSliderIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 66 70",
    version: "1.1",
    viewBox: "0 0 66 70",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_1",
    x1: "-16.218",
    x2: "89.025",
    y1: "15.344",
    y2: "18.043",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M68.4 13c-.3-.4-.7-.6-1.1-.6-.3 0-.5.1-.8.2-.6.5-.8 1.3-.4 1.9l2.3 3.3-2.4 2.5c-.5.5-.5 1.3 0 1.9.2.2.6.4.9.4.3 0 .7-.2 1-.5l3.9-4.1-3.4-5z",
    className: "parallax-st0"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_2",
    x1: "-17.074",
    x2: "88.169",
    y1: "48.75",
    y2: "51.448",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 49.7l2.3-3.3c.4-.6.3-1.4-.4-1.9-.2-.2-.5-.2-.8-.2-.4 0-.9.2-1.1.6l-3.4 5 3.9 4c.3.3.6.5 1 .5.3 0 .7-.1.9-.4.5-.5.5-1.3 0-1.9l-2.4-2.4z",
    className: "parallax-st1"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_3",
    x1: "-16.667",
    x2: "88.576",
    y1: "32.874",
    y2: "35.573",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M58 2L17.4.3c-2.7 0-4.8 2.2-4.8 4.8L10 62.3c0 2.7 2.2 4.8 4.8 4.8h.1l35.8-2.8h.1c2.5-.4 4.1-2 4.6-4.6L61 19l.5-3.6L62.7 7v-.2C62.7 4.1 60.6 2 58 2zm-7.6 59.5l-35.6 2.8c-1.1 0-1.9-.9-1.9-1.9l.7-15.9L26 32l9.5 16.6 21.9-24.2-3.6 26.1-1.2 8.8c-.3 1.3-.9 1.9-2.2 2.2zM36 43.7L26.5 27 13.8 41.8l1.6-36.7c0-1.1.9-2 1.9-2l40.6 1.7c1 0 1.9.8 1.9 1.9L58 19.3 36 43.7z",
    className: "parallax-st2"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_4",
    x1: "-17.353",
    x2: "87.89",
    y1: "59.614",
    y2: "62.312",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M60.5 52.9c-.6-.1-1.3.4-1.4 1l-1.6 10.8c-.2 1-1 1.8-2.1 1.9l-9.8.9c-.7.1-1.1.6-1.1 1.3.1.6.6 1.1 1.2 1.1h.1l9.8-.9c2.2-.2 3.9-1.8 4.2-4l1.6-10.8c.2-.6-.3-1.2-.9-1.3z",
    className: "parallax-st3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_5",
    x1: "-16.284",
    x2: "88.959",
    y1: "17.925",
    y2: "20.623",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M42.8 17.1c-.1-.3-.3-.5-.5-.8-.2-.2-.3-.4-.5-.5-.2-.1-.3-.3-.5-.4-.2-.1-.3-.2-.5-.3-.2-.1-.3-.2-.5-.2-.2-.1-.3-.1-.5-.1-.1 0-.2-.1-.3-.1h-.7c-.2 0-.4 0-.5.1-.2 0-.4.1-.5.2-.2.1-.4.2-.5.3-.2.1-.4.2-.5.4-.2.2-.4.3-.5.5-.2.2-.4.5-.6.8-.3.5-.5 1-.6 1.6 0 .2-.1.5-.1.7v1.1c.1.6.2 1.1.5 1.5.1.3.3.5.5.8.2.2.3.4.5.5.2.1.3.2.5.4.2.1.3.2.5.3.2.1.3.1.5.2h1.1c.2 0 .4 0 .5-.1.2 0 .4-.1.5-.1.2-.1.4-.1.5-.2.2-.1.4-.2.5-.3.2-.1.4-.3.5-.4.2-.2.4-.3.5-.5.2-.2.4-.5.6-.8.3-.4.5-.9.6-1.4 0-.2.1-.4.1-.6v-1c-.2-.7-.4-1.2-.6-1.6zM40.5 20c-.1.3-.3.5-.6.7-.2.1-.3.2-.5.3-.2.1-.3.1-.5.1h-.1c-.2 0-.3 0-.5-.1s-.4-.2-.5-.3c-.2-.2-.4-.5-.5-.8-.1-.2-.1-.5-.1-.8 0-.2.1-.4.2-.6.1-.3.3-.6.6-.8.2-.1.3-.3.5-.3.2-.1.3-.1.5-.1h.1c.2 0 .3 0 .4.1.2.1.4.2.5.3.2.2.4.4.5.7.1.2.1.5.1.8.1.3 0 .6-.1.8z",
    className: "parallax-st4"
  }));
};
var CategoryIcon = function CategoryIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "eb-category-icon",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "20",
    height: "20",
    viewBox: "0 0 374 374"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "a",
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#2460FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#B80AFF"
  })), /*#__PURE__*/React.createElement("path", {
    id: "c",
    d: "M135.028 96h103.944l.497.21h.373c6.217 0 11.273 2.692 15.169 8.077 1.326 2.237 1.989 4.545 1.989 6.923 0 5.804-3.398 10.28-10.195 13.426-2.321.91-4.642 1.364-6.963 1.364H133.909c-4.973 0-9.366-1.923-13.179-5.77-2.487-2.796-3.73-5.664-3.73-8.6v-1.26c0-4.615 2.735-8.566 8.206-11.853 2.984-1.538 5.927-2.307 8.828-2.307h.497l.497-.21zm1.242 77l58.078.214c3.862 0 7.995 1.568 12.397 4.705 3.503 3.208 5.255 6.701 5.255 10.48 0 5.275-3.1 9.588-9.298 12.939-3.054 1.425-6.019 2.138-8.893 2.138h-58.752c-5.75 0-10.735-2.281-14.958-6.844-2.066-2.566-3.099-5.132-3.099-7.699v-1.283c0-4.848 3.19-9.018 9.567-12.511 3.234-1.284 6.289-1.925 9.163-1.925h.27c.18 0 .27-.071.27-.214zm105.362 0h.736c5.685 0 10.14 2.968 13.369 8.905.842 2.12 1.263 4.17 1.263 6.148 0 5.936-2.912 10.495-8.737 13.675-2.105.848-3.965 1.272-5.579 1.272h-1.473c-4.772 0-8.843-2.509-12.211-7.527-1.333-2.544-2-5.052-2-7.526 0-5.795 2.877-10.318 8.632-13.569 2.175-.919 4.175-1.378 6-1.378zm-106.604 75h103.944c0 .141 1.284.318 3.854.53 4.31.919 7.584 2.58 9.822 4.982 2.901 2.898 4.352 6.22 4.352 9.965 0 5.724-3.398 10.247-10.195 13.569-2.073.636-3.482.954-4.228.954H131.423c-2.901 0-6.383-1.66-10.444-4.982-2.653-3.04-3.979-6.113-3.979-9.223v-.954c0-5.23 3.108-9.505 9.325-12.827 1.824-.919 4.642-1.555 8.455-1.908 0-.07.083-.106.248-.106z"
  }), /*#__PURE__*/React.createElement("filter", {
    id: "b",
    width: "157.9%",
    height: "144.5%",
    x: "-28.9%",
    y: "-14%",
    filterUnits: "objectBoundingBox"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dy: "15",
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1",
    stdDeviation: "11"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "shadowBlurOuter1",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  }))), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(-69 -69)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(69 69)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "187",
    cy: "187",
    r: "187",
    fill: "url(#a)"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    filter: "url(#b)",
    xlinkHref: "#c"
  }), /*#__PURE__*/React.createElement("use", {
    fill: "#FFF",
    xlinkHref: "#c"
  }))))));
};
var ToggleContentIcon = function ToggleContentIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 66 70"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "a"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "toggle-b",
    x1: "1.959",
    x2: "68.382",
    y1: "47.1",
    y2: "47.1",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "toggle-c",
    x1: "1.959",
    x2: "68.382",
    y1: "47.15",
    y2: "47.15",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "d",
    x1: "1.959",
    x2: "68.382",
    y1: "7.5",
    y2: "7.5",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "e",
    x1: "1.959",
    x2: "68.382",
    y1: "7.6",
    y2: "7.6",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "f",
    x1: "1.959",
    x2: "68.382",
    y1: "36.6",
    y2: "36.6",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "g",
    x1: "1.959",
    x2: "68.382",
    y1: "43.3",
    y2: "43.3",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "h",
    x1: "1.959",
    x2: "68.382",
    y1: "49.95",
    y2: "49.95",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#toggle-b)",
    d: "M26.5 24.2H4.6c-2.1 0-3.7 1.6-3.7 3.7v38.5c0 2 1.6 3.6 3.7 3.6h21.9c2.1 0 3.7-1.6 3.7-3.7V28.1c-.1-2.3-1.7-3.9-3.7-3.9zm.9 42.1c0 .5-.5.9-.9.9H4.6c-.5 0-.9-.5-.9-.9V28.1c0-.5.5-.9.9-.9h21.9c.5 0 .9.5.9.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#toggle-c)",
    d: "M61.5 24.2H39.6c-2.1 0-3.7 1.6-3.7 3.7v38.5c0 2.1 1.6 3.7 3.7 3.7h21.9c2.1 0 3.7-1.6 3.7-3.7V28.1c.2-2.3-1.7-3.9-3.7-3.9zm.9 42.1c0 .5-.5.9-.9.9H39.6c-.5 0-.9-.5-.9-.9V28.1c0-.5.5-.9.9-.9h21.9c.5 0 .9.5.9.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#d)",
    d: "M24.8 15h18.9c2.1 0 3.9-1.6 3.9-3.9V3.9C47.6 1.8 46 0 43.7 0H24.8c-2 0-3.9 1.6-3.9 3.9V11c0 2.4 1.6 4 3.9 4zM23.7 4.1c0-.5.5-.9.9-.9h18.9c.5 0 .9.5.9.9v7.1c0 .5-.5.9-.9.9H24.6c-.5 0-.9-.5-.9-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#e)",
    d: "M36.8 10.4H42.3V4.8H36.8V9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#f)",
    d: "M56.6 35.2H44.4V38H56.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#g)",
    d: "M56.6 41.9H44.4v2.8H56.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#h)",
    d: "M56.6 48.6H44.4v2.7H56.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#f)",
    d: "M21.4 35.2H9.2V38H21.6v-2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#g)",
    d: "M21.4 41.9H9.2v2.8H21.6v-2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#h)",
    d: "M21.4 48.6H9.2v2.7H21.6v-2.7z"
  }));
};
var TypographyIcon = function TypographyIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    style: {
      width: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M92.6 431.3c5.1 0 6.1-.5 10.7-1.5l91.9-18.4c9.7-2.5 19.4-7.1 27.1-14.8L444.9 174c34.2-34.2 34.2-92.9 0-127.1L426 27c-34.2-34.2-93.4-34.2-127.6 0L75.8 250.1c-7.2 7.1-12.3 17.4-14.8 27.1l-19.4 92.9c-2.5 17.4 2.6 34.2 14.8 46.5 9.7 9.6 24 14.7 36.2 14.7zM110 286.9L332.6 63.8c14.8-14.8 41.9-14.8 56.2 0l19.4 19.4c17.4 17.4 17.4 41.9 0 58.7L186.1 365l-94.4 15.8 18.3-93.9zm0 0M442.8 463H66.1c-14.8 0-24.5 9.7-24.5 24.5S53.9 512 66.1 512h374.7c14.8 0 27.1-9.7 27.1-24.5-.6-14.8-12.8-24.5-25.1-24.5zm0 0",
    className: "eb-typography-icon"
  }));
};
var UserIcon = function UserIcon(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    style: {
      width: 24
    },
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("path", {
    fill: color || "#b7b7b7",
    d: "M175.4 249c22.6 16.5 50.5 26.1 80.6 26.1 73.5 0 137.6-63.6 137.6-137.6C393.6 61.7 331.9 0 256 0S118.4 61.7 118.4 137.6c0 45.7 22.4 86.4 57 111.4zm0 0M407.4 285.6c-38.9 39.8-92.8 64.9-151.4 64.9-45.3 0-88.5-14-124.8-40.5-9.9-7.2-19.1-15.1-27.5-23.7C41.2 332.9.5 407.4.5 491.3c0 10.8 8.8 19.7 19.7 19.7h471.6c10.8 0 19.7-8.8 19.7-19.7 0-84.3-41-159.2-104.1-205.7z"
  }));
};
var LeftAlignIcon = function LeftAlignIcon(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M224.9 72.9H36.3C16.3 72.9 0 89.2 0 109.2c0 19.9 16.3 36.3 36.3 36.3h188.6c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0M372.5 205.9H36.3c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h336.2c19.9 0 36.3-16.3 36.3-36.3 0-19.9-16.4-36.3-36.3-36.3zm0 0M475.7 339H36.3C16.3 339 0 355.3 0 375.3c0 20 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0",
    fill: color || "#a9a9a9"
  }));
};
var RightAlignIcon = function RightAlignIcon(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M475.7 78.1H235.1c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h240.6c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0M475.7 211.2H115.9c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h359.8c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0M475.7 344.2H36.3c-20 0-36.3 16.3-36.3 36.3 0 20 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-19.9-16.3-36.3-36.3-36.3zm0 0",
    fill: color || "#a9a9a9"
  }));
};
var CenterAlignIcon = function CenterAlignIcon(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M350.3 86.6H161.7c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h188.6c19.9 0 36.3-16.3 36.3-36.3 0-19.9-16.3-36.3-36.3-36.3zm0 0M424.1 219.7H87.9c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h336.2c19.9 0 36.3-16.3 36.3-36.3 0-20-16.4-36.3-36.3-36.3zm0 0M475.7 352.8H36.3c-20 0-36.3 16.3-36.3 36.3 0 20 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0",
    fill: color || "#a9a9a9"
  }));
};
var JustifyAlignIcon = function JustifyAlignIcon(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M475.7 86.6H36.3C16.3 86.6 0 103 0 122.9s16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-19.9-16.3-36.3-36.3-36.3zm0 0M475.7 219.7H36.3C16.3 219.7 0 236 0 256c0 19.9 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0M475.7 352.8H36.3c-20 0-36.3 16.3-36.3 36.3 0 20 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0",
    fill: color || "#a9a9a9"
  }));
};

/***/ }),

/***/ "./util/image-avatar/index.js":
/*!************************************!*\
  !*** ./util/image-avatar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = wp.element.useState;

var ImageAvatar = function ImageAvatar(_ref) {
  var imageUrl = _ref.imageUrl,
      onDeleteImage = _ref.onDeleteImage;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      deleteHover = _useState4[0],
      setDeleteHover = _useState4[1];

  var deleteButtonStyle = {
    visibility: hover ? "visible" : "hidden",
    backgroundColor: deleteHover ? "white" : "#64666a",
    color: "#b4b5b7",
    position: "absolute",
    right: 34,
    fontSize: 16,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    cursor: "pointer"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "image-avatar",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    },
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "image-avatar-delete dashicons dashicons-trash",
    onMouseEnter: function onMouseEnter() {
      return setDeleteHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setDeleteHover(false);
    },
    style: deleteButtonStyle,
    onClick: function onClick() {
      return onDeleteImage();
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageAvatar);

/***/ }),

/***/ "./util/reset-control/index.js":
/*!*************************************!*\
  !*** ./util/reset-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ResetControl = function ResetControl(_ref) {
  var onReset = _ref.onReset,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "eb-range-controller-container"
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "eb-range-reset-button",
    onClick: onReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "dashicon dashicons dashicons-image-rotate"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ResetControl);

/***/ }),

/***/ "./util/responsive-range-control/index.js":
/*!************************************************!*\
  !*** ./util/responsive-range-control/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _responsive_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responsive-btn */ "./util/responsive-range-control/responsive-btn.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var RangeControl = wp.components.RangeControl;



var ResponsiveRangeController = function ResponsiveRangeController(_ref) {
  var baseLabel = _ref.baseLabel,
      controlName = _ref.controlName,
      resRequiredProps = _ref.resRequiredProps,
      units = _ref.units,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      noUnits = _ref.noUnits;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var desktopSizeUnit;
  var TABsizeUnit;
  var MOBsizeUnit;
  var defaultUnits;
  var desktopRange = attributes["".concat(controlName, "Range")],
      TABrange = attributes["TAB".concat(controlName, "Range")],
      MOBrange = attributes["MOB".concat(controlName, "Range")];

  if (!noUnits) {
    desktopSizeUnit = attributes["".concat(controlName, "Unit")];
    TABsizeUnit = attributes["TAB".concat(controlName, "Unit")];
    MOBsizeUnit = attributes["MOB".concat(controlName, "Unit")];
    defaultUnits = [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }];
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "responsiveRangeControllerWrapper"
  }, noUnits ? /*#__PURE__*/React.createElement(React.Fragment, null, resOption == "Desktop" && /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    noUnits: noUnits,
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: desktopRange,
    onChange: function onChange(desktopRange) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "Range"), desktopRange));
    },
    step: step || 1,
    min: min || 0,
    max: max || 100
  })), resOption == "Tablet" && /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    noUnits: noUnits,
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABrange,
    onChange: function onChange(TABrange) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "Range"), TABrange));
    },
    step: step || 1,
    min: min || 0,
    max: max || 100
  })), resOption == "Mobile" && /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    noUnits: noUnits,
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBrange,
    onChange: function onChange(MOBrange) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "Range"), MOBrange));
    },
    step: step || 1,
    min: min || 0,
    max: max || 100
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, resOption == "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: desktopSizeUnit,
    unitTypes: units || defaultUnits,
    onClick: function onClick(desktopSizeUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "Unit"), desktopSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: desktopRange,
    onChange: function onChange(desktopRange) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "Range"), desktopRange));
    },
    step: desktopSizeUnit === "em" ? 0.1 : step,
    min: desktopSizeUnit === "px" ? min : 0,
    max: desktopSizeUnit === "px" ? max : 100
  }))), resOption == "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABsizeUnit,
    unitTypes: units || defaultUnits,
    onClick: function onClick(TABsizeUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "Unit"), TABsizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABrange,
    onChange: function onChange(TABrange) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "Range"), TABrange));
    },
    step: TABsizeUnit === "em" ? 0.1 : step,
    min: TABsizeUnit === "px" ? min : 0,
    max: TABsizeUnit === "px" ? max : 100
  }))), resOption == "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBsizeUnit,
    unitTypes: units || defaultUnits,
    onClick: function onClick(MOBsizeUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "Unit"), MOBsizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBrange,
    onChange: function onChange(MOBrange) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "Range"), MOBrange));
    },
    step: MOBsizeUnit === "em" ? 0.1 : step,
    min: MOBsizeUnit === "px" ? min : 0,
    max: MOBsizeUnit === "px" ? max : 100
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResponsiveRangeController);

/***/ }),

/***/ "./util/responsive-range-control/responsive-btn.js":
/*!*********************************************************!*\
  !*** ./util/responsive-range-control/responsive-btn.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResBtns; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./util/helpers/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dispatch = wp.data.dispatch;

function WithResBtns(_ref) {
  var children = _ref.children,
      resRequiredProps = _ref.resRequiredProps,
      label = _ref.label,
      controlName = _ref.controlName,
      onReset = _ref.onReset,
      noUnits = _ref.noUnits;
  var setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption,
      objAttributes = resRequiredProps.objAttributes;

  onReset = function onReset() {
    if (noUnits) {
      resOption == "Desktop" ? setAttributes(_defineProperty({}, "".concat(controlName, "Range"), objAttributes["".concat(controlName, "Range")]["default"])) : "";
      resOption == "Tablet" ? setAttributes(_defineProperty({}, "TAB".concat(controlName, "Range"), objAttributes["TAB".concat(controlName, "Range")]["default"])) : "";
      resOption == "Mobile" ? setAttributes(_defineProperty({}, "MOB".concat(controlName, "Range"), objAttributes["MOB".concat(controlName, "Range")]["default"])) : "";
    } else {
      var _setAttributes4, _setAttributes5, _setAttributes6;

      resOption == "Desktop" ? setAttributes((_setAttributes4 = {}, _defineProperty(_setAttributes4, "".concat(controlName, "Range"), objAttributes["".concat(controlName, "Range")]["default"]), _defineProperty(_setAttributes4, "".concat(controlName, "Unit"), objAttributes["".concat(controlName, "Unit")]["default"] || "px"), _setAttributes4)) : "";
      resOption == "Tablet" ? setAttributes((_setAttributes5 = {}, _defineProperty(_setAttributes5, "TAB".concat(controlName, "Range"), objAttributes["TAB".concat(controlName, "Range")]["default"]), _defineProperty(_setAttributes5, "TAB".concat(controlName, "Unit"), objAttributes["TAB".concat(controlName, "Unit")]["default"] || "px"), _setAttributes5)) : "";
      resOption == "Mobile" ? setAttributes((_setAttributes6 = {}, _defineProperty(_setAttributes6, "MOB".concat(controlName, "Range"), objAttributes["MOB".concat(controlName, "Range")]["default"]), _defineProperty(_setAttributes6, "MOB".concat(controlName, "Unit"), objAttributes["MOB".concat(controlName, "Unit")]["default"] || "px"), _setAttributes6)) : "";
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "responsive-btn-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "responsive-btn"
  }, /*#__PURE__*/React.createElement("span", {
    className: "responsive-btn-label"
  }, label), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleDesktopBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "Desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleTabBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "Tablet" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleMobileBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "Mobile" ? "active" : " ")
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-component-wrapper"
  }, children, /*#__PURE__*/React.createElement("button", {
    className: "eb-range-reset-button",
    onClick: onReset
  }, /*#__PURE__*/React.createElement("span", {
    className: "dashicon dashicons dashicons-image-rotate"
  }))));
}

/***/ }),

/***/ "./util/toggle-button/index.js":
/*!*************************************!*\
  !*** ./util/toggle-button/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;

var ToggleButton = function ToggleButton(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      defaultSelected = _ref.defaultSelected;

  var _useState = useState(defaultSelected || options[0]),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  useEffect(function () {
    onChange(selected.value);
  }, [selected]);
  useEffect(function () {
    if (defaultSelected) {
      setSelected(defaultSelected);
    }
  }, [defaultSelected]);
  return /*#__PURE__*/React.createElement("div", {
    id: "switch",
    className: "eb-switch-control"
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "gh",
      placeholder: "name",
      onChange: function onChange() {
        return setSelected(option);
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: selected.value === option.value ? "white" : "black"
      }
    }, option.label));
  }), /*#__PURE__*/React.createElement("span", {
    className: "slideBg",
    style: {
      backgroundColor: "#551ef7",
      transform: selected == options[0] ? "translateX(0)" : "translateX(100%)"
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleButton);

/***/ }),

/***/ "./util/typography-control-v2/constants.js":
/*!*************************************************!*\
  !*** ./util/typography-control-v2/constants.js ***!
  \*************************************************/
/*! exports provided: sizeUnitTypes, optionsFontWeights, optionsTextTransforms, optionsTextDecorations, optionsFontStyles, optionsLhLsp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeUnitTypes", function() { return sizeUnitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsFontWeights", function() { return optionsFontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTextTransforms", function() { return optionsTextTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTextDecorations", function() { return optionsTextDecorations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsFontStyles", function() { return optionsFontStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsLhLsp", function() { return optionsLhLsp; });
var __ = wp.i18n.__;
var sizeUnitTypes = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var optionsFontWeights = [{
  label: __("Default"),
  value: ""
}, {
  label: __("100"),
  value: "100"
}, {
  label: __("200"),
  value: "200"
}, {
  label: __("300"),
  value: "300"
}, {
  label: __("400"),
  value: "400"
}, {
  label: __("500"),
  value: "500"
}, {
  label: __("600"),
  value: "600"
}, {
  label: __("700"),
  value: "700"
}, {
  label: __("800"),
  value: "800"
}, {
  label: __("900"),
  value: "900"
}];
var optionsTextTransforms = [{
  label: __("Default"),
  value: ""
}, {
  label: __("None"),
  value: "none"
}, {
  label: __("Lowercase"),
  value: "lowercase"
}, {
  label: __("Capitalize"),
  value: "capitalize"
}, {
  label: __("Uppercase"),
  value: "uppercase"
}];
var optionsTextDecorations = [{
  label: __("Default"),
  value: ""
}, {
  label: __("None"),
  value: "initial"
}, {
  label: __("Overline"),
  value: "overline"
}, {
  label: __("Line Through"),
  value: "line-through"
}, {
  label: __("Underline"),
  value: "underline"
}, {
  label: __("Underline Oveline"),
  value: "underline overline"
}];
var optionsFontStyles = [{
  label: __("Default"),
  value: ""
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Italic"),
  value: "italic"
}, {
  label: __("Oblique"),
  value: "oblique"
}];
var optionsLhLsp = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];

/***/ }),

/***/ "./util/typography-control-v2/index.js":
/*!*********************************************!*\
  !*** ./util/typography-control-v2/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _fontPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fontPicker */ "./util/fontPicker/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./util/icons.js");
/* harmony import */ var _withResButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../withResButtons */ "./util/withResButtons/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./util/typography-control-v2/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button,
    Dropdown = _wp$components.Dropdown,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl;






function TypographyDropdown(_ref) {
  var baseLabel = _ref.baseLabel,
      typographyPrefixConstant = _ref.typographyPrefixConstant,
      resRequiredProps = _ref.resRequiredProps;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var fontFamily = attributes["".concat(typographyPrefixConstant, "FontFamily")],
      fontWeight = attributes["".concat(typographyPrefixConstant, "FontWeight")],
      fontStyle = attributes["".concat(typographyPrefixConstant, "FontStyle")],
      textTransform = attributes["".concat(typographyPrefixConstant, "TextTransform")],
      textDecoration = attributes["".concat(typographyPrefixConstant, "TextDecoration")],
      fontSize = attributes["".concat(typographyPrefixConstant, "FontSize")],
      sizeUnit = attributes["".concat(typographyPrefixConstant, "SizeUnit")],
      letterSpacing = attributes["".concat(typographyPrefixConstant, "LetterSpacing")],
      letterSpacingUnit = attributes["".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      lineHeight = attributes["".concat(typographyPrefixConstant, "LineHeight")],
      lineHeightUnit = attributes["".concat(typographyPrefixConstant, "LineHeightUnit")],
      TABsizeUnit = attributes["TAB".concat(typographyPrefixConstant, "SizeUnit")],
      TABletterSpacingUnit = attributes["TAB".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      TABlineHeightUnit = attributes["TAB".concat(typographyPrefixConstant, "LineHeightUnit")],
      TABfontSize = attributes["TAB".concat(typographyPrefixConstant, "FontSize")],
      TABletterSpacing = attributes["TAB".concat(typographyPrefixConstant, "LetterSpacing")],
      TABlineHeight = attributes["TAB".concat(typographyPrefixConstant, "LineHeight")],
      MOBsizeUnit = attributes["MOB".concat(typographyPrefixConstant, "SizeUnit")],
      MOBletterSpacingUnit = attributes["MOB".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      MOBlineHeightUnit = attributes["MOB".concat(typographyPrefixConstant, "LineHeightUnit")],
      MOBfontSize = attributes["MOB".concat(typographyPrefixConstant, "FontSize")],
      MOBletterSpacing = attributes["MOB".concat(typographyPrefixConstant, "LetterSpacing")],
      MOBlineHeight = attributes["MOB".concat(typographyPrefixConstant, "LineHeight")];
  return /*#__PURE__*/React.createElement(BaseControl, {
    label: __(baseLabel),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__["TypographyIcon"], null));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "eb-panel-control eb-typography-component-panel",
        style: {
          padding: "0.2rem"
        }
      }, /*#__PURE__*/React.createElement(_fontPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: __("Font Family"),
        value: fontFamily,
        onChange: function onChange(FontFamily) {
          setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontFamily"), FontFamily));
        }
      }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "forFontSize",
        resRequiredProps: resRequiredProps
      }, resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: sizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["sizeUnitTypes"],
        onClick: function onClick(sizeUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "SizeUnit"), sizeUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: fontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: sizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: sizeUnit === "em" ? 10 : 300
      })), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: TABsizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["sizeUnitTypes"],
        onClick: function onClick(TABsizeUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "SizeUnit"), TABsizeUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: TABfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: TABsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: TABsizeUnit === "em" ? 10 : 300
      })), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: MOBsizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["sizeUnitTypes"],
        onClick: function onClick(MOBsizeUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "SizeUnit"), MOBsizeUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: MOBfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: MOBsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: MOBsizeUnit === "em" ? 10 : 300
      }))), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Font Weight"),
        value: fontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsFontWeights"],
        onChange: function onChange(FontWeight) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontWeight"), FontWeight));
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Font Style"),
        value: fontStyle,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsFontStyles"],
        onChange: function onChange(fontStyle) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontStyle"), fontStyle));
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Transform"),
        value: textTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsTextTransforms"],
        onChange: function onChange(TextTransform) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "TextTransform"), TextTransform));
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Decoration"),
        value: textDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsTextDecorations"],
        onChange: function onChange(TextDecoration) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "TextDecoration"), TextDecoration));
        }
      }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "forLetterSpacing",
        resRequiredProps: resRequiredProps
      }, resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: letterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(LetterSpacingUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LetterSpacingUnit"), LetterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: letterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: letterSpacingUnit === "em" ? 10 : 100,
        step: letterSpacingUnit === "em" ? 0.1 : 1
      })), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: TABletterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(TABletterSpacingUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LetterSpacingUnit"), TABletterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: TABletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: TABletterSpacingUnit === "em" ? 10 : 100,
        step: TABletterSpacingUnit === "em" ? 0.1 : 1
      })), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: MOBletterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(MOBletterSpacingUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LetterSpacingUnit"), MOBletterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: MOBletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: MOBletterSpacingUnit === "em" ? 10 : 100,
        step: MOBletterSpacingUnit === "em" ? 0.1 : 1
      }))), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "forLineHeight",
        resRequiredProps: resRequiredProps
      }, resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: lineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(LineHeightUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LineHeightUnit"), LineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: lineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: lineHeightUnit === "em" ? 10 : 600,
        step: lineHeightUnit === "em" ? 0.1 : 1
      })), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: TABlineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(TABlineHeightUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LineHeightUnit"), TABlineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: TABlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: TABlineHeightUnit === "em" ? 10 : 600,
        step: TABlineHeightUnit === "em" ? 0.1 : 1
      })), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: MOBlineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(MOBlineHeightUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LineHeightUnit"), MOBlineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: MOBlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: MOBlineHeightUnit === "em" ? 10 : 600,
        step: MOBlineHeightUnit === "em" ? 0.1 : 1
      }))));
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TypographyDropdown);

/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/React.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "./util/withResButtons/index.js":
/*!**************************************!*\
  !*** ./util/withResButtons/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResButtons; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./util/helpers/index.js");
var dispatch = wp.data.dispatch;

function WithResButtons(_ref) {
  var className = _ref.className,
      children = _ref.children,
      resRequiredProps = _ref.resRequiredProps,
      label = _ref.label;
  var setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap_res ".concat(className || " ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(label ? "resBtns" : "resIcons")
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingRight: "5px"
    },
    className: "resLabel"
  }, label), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleDesktopBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "Desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleTabBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "Tablet" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleMobileBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "Mobile" ? "active" : " ")
  })), children);
}

/***/ }),

/***/ "@wordpress/escape-html":
/*!************************************!*\
  !*** external ["wp","escapeHtml"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["escapeHtml"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map