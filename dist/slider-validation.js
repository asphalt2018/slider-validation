(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sliderValidation"] = factory();
	else
		root["sliderValidation"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(3);
var isBuffer = __webpack_require__(18);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(21);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(4);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(4);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(22);
var buildURL = __webpack_require__(24);
var parseHeaders = __webpack_require__(25);
var isURLSameOrigin = __webpack_require__(26);
var createError = __webpack_require__(5);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(27);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(28);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(23);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderValidation", function() { return SliderValidation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_index_scss__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_request__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_utils__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_constants__ = __webpack_require__(37);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var defaultOptions = {
    wrapperId: 'sliderWrapper',
    width: 290
};
var VerifyStatus;
(function (VerifyStatus) {
    VerifyStatus[VerifyStatus["Fail"] = 0] = "Fail";
    VerifyStatus[VerifyStatus["Success"] = 1] = "Success";
    VerifyStatus[VerifyStatus["InitialState"] = 2] = "InitialState";
})(VerifyStatus || (VerifyStatus = {}));
var SliderValidation = /** @class */ (function () {
    function SliderValidation(options) {
        if (options === void 0) { options = defaultOptions; }
        this.startPos = 0;
        this.isMoving = false;
        this.getCaptchaUrl = 'https://captcha.jdcf88.com/api/1/captcha/getCaptcha';
        this.validateUrl = 'https://captcha.jdcf88.com/api/1/captcha/validate';
        this.token = '';
        this.isLoadingCaptcha = false;
        this.verifyStatus = VerifyStatus.InitialState;
        this.isValidating = false;
        this.left = 0;
        this.maxRailDistance = 250;
        document.getElementById(options.wrapperId).innerHTML = __WEBPACK_IMPORTED_MODULE_3__helpers_constants__["a" /* htmlTemplate */];
        this.addEventListeners();
        this.dealDrag();
    }
    SliderValidation.prototype.addEventListeners = function () {
        var _this = this;
        document.getElementsByClassName('drag-wrapper')[0].addEventListener('mouseleave', function () {
            if (!_this.isMoving) {
                _this.toggleCaptcha(false);
            }
        });
        document.getElementById('drag-control').addEventListener('mouseenter', function () {
            if (_this.verifyStatus === VerifyStatus.Success || _this.isValidating) {
                return;
            }
            _this.toggleCaptcha(true);
        });
        document.getElementById('drag-arrow').addEventListener('mousedown', function (event) {
            if (_this.verifyStatus === VerifyStatus.Success || _this.isValidating || _this.isLoadingCaptcha) {
                return;
            }
            _this.startPos = event.pageX;
            _this.toggleMovingState(true);
        });
        document.getElementsByClassName('refresh-icon')[0].addEventListener('click', function (e) {
            _this.getCaptcha();
        });
        this.getCaptcha();
    };
    SliderValidation.prototype.dealDrag = function () {
        var _this = this;
        document.onmousemove = function (event) {
            if (_this.verifyStatus === VerifyStatus.Success || _this.isValidating) {
                return;
            }
            if (_this.isMoving) {
                var travelledDistance = event.pageX - _this.startPos;
                if (travelledDistance > 0 && travelledDistance <= _this.maxRailDistance) {
                    _this.left = travelledDistance;
                    _this.setStyle(_this.left);
                }
            }
        };
        document.onmouseup = function () {
            if (_this.verifyStatus === VerifyStatus.Success || _this.isValidating) {
                return;
            }
            if (_this.isMoving) {
                _this.validateCaptcha({ range: _this.left / 250 * 100, token: _this.token });
            }
        };
    };
    SliderValidation.prototype.toggleCaptcha = function (flag) {
        document.getElementsByClassName('captcha-panel')[0].className = "captcha-panel " + (flag ? 'show-panel' : '');
        document.getElementsByClassName('captcha-image')[0].className = "captcha-image " + (flag ? 'show-captcha' : '');
    };
    SliderValidation.prototype.getCaptcha = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.toggleLoadingCaptcha(true);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__helpers_request__["a" /* default */].get(this.getCaptchaUrl)];
                    case 1:
                        data = (_a.sent()).data;
                        this.toggleLoadingCaptcha(false);
                        if (data.code === 1 && data.data) {
                            document.getElementsByClassName('background-image')[0].setAttribute('src', data.data.bg);
                            document.getElementsByClassName('slider-image')[0].setAttribute('src', data.data.front);
                            this.token = data.data.token;
                        }
                        else {
                            console.warn('get captcha fail');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SliderValidation.prototype.validateCaptcha = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.toggleValidatingState(true);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__helpers_request__["a" /* default */].post(this.validateUrl, params)];
                    case 1:
                        data = (_a.sent()).data;
                        this.toggleMovingState(false);
                        this.toggleValidatingState(false);
                        if (data.code === 1) {
                            this.toggleCaptcha(false);
                            this.toggleVerifyStatus(VerifyStatus.Success);
                        }
                        else {
                            this.toggleVerifyStatus(VerifyStatus.Fail);
                            this.toggleCanAnimate(true);
                            setTimeout(function () {
                                _this.toggleCanAnimate(false);
                            }, 500);
                            setTimeout(function () {
                                _this.toggleVerifyStatus(VerifyStatus.InitialState);
                                _this.left = 0;
                                _this.setStyle(_this.left);
                            }, 300);
                            this.getCaptcha();
                            console.warn('validate captcha fail');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SliderValidation.prototype.toggleMovingState = function (isMoving) {
        this.isMoving = isMoving;
        var options = [
            {
                element: document.getElementsByClassName('slider-left')[0],
                className: 'moving-slider-left'
            },
            {
                element: document.getElementsByClassName('drag-arrow')[0],
                className: 'moving-slider-bg'
            },
            {
                element: document.getElementsByClassName('drag-icon')[0],
                className: 'moving-icon'
            }
        ];
        if (isMoving) {
            __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["a" /* default */].addClass(options);
            document.getElementById('tips-text').style.display = 'none';
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["a" /* default */].removeClass(options);
            document.getElementById('tips-text').style.display = this.verifyStatus === VerifyStatus.InitialState ? '' : 'none';
        }
    };
    SliderValidation.prototype.setStyle = function (left) {
        document.getElementById('slider-image').style.left = left + "px";
        document.getElementById('drag-arrow').style.left = left + "px";
        document.getElementById('slider-left').style.width = left + 2 + "px";
        document.getElementById('is-validating').style.left = left + 43 + "px";
    };
    SliderValidation.prototype.toggleValidatingState = function (isValidating) {
        this.isValidating = isValidating;
        document.getElementById('is-validating').style.display = "" + (isValidating ? 'block' : 'none');
    };
    SliderValidation.prototype.toggleVerifyStatus = function (verifyStatus) {
        this.verifyStatus = verifyStatus;
        var options = [
            {
                element: document.getElementsByClassName('slider-left')[0],
                className: ''
            },
            {
                element: document.getElementsByClassName('drag-arrow')[0],
                className: ''
            },
            {
                element: document.getElementsByClassName('drag-icon')[0],
                className: ''
            }
        ];
        if (this.verifyStatus === VerifyStatus.Success) {
            options[0].className = 'verify-success';
            options[1].className = 'success-slider-bg';
            options[2].className = 'success-icon';
            __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["a" /* default */].addClass(options);
            __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["a" /* default */].removeClass([{
                    element: document.getElementsByClassName('drag-arrow')[0],
                    className: 'drag-arrow-hover'
                }]);
            document.getElementById('tips-text').style.display = 'none';
        }
        else if (this.verifyStatus === VerifyStatus.Fail) {
            options[0].className = 'verify-fail';
            options[1].className = 'fail-slider-bg';
            options[2].className = 'fail-icon';
            __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["a" /* default */].addClass(options);
        }
        else {
            options[0].className = 'verify-fail';
            options[1].className = 'fail-slider-bg';
            options[2].className = 'fail-icon';
            __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["a" /* default */].removeClass(options);
        }
    };
    SliderValidation.prototype.toggleCanAnimate = function (canAnimate) {
        var options = [{
                element: document.getElementsByClassName('drag-arrow')[0],
                className: 'can-animate'
            }];
        if (canAnimate) {
            __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["a" /* default */].addClass(options);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["a" /* default */].removeClass(options);
        }
    };
    SliderValidation.prototype.toggleLoadingCaptcha = function (isLoadingCaptcha) {
        this.isLoadingCaptcha = isLoadingCaptcha;
        if (isLoadingCaptcha) {
            document.getElementById('loading-captcha').style.display = '';
            document.getElementById('background-image').style.display = 'none';
            document.getElementById('slider-image').style.display = 'none';
        }
        else {
            document.getElementById('loading-captcha').style.display = 'none';
            document.getElementById('background-image').style.display = '';
            document.getElementById('slider-image').style.display = '';
        }
    };
    return SliderValidation;
}());



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(10);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(13)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(11);
exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, ".drag-wrapper {\n  width: 290px;\n  min-width: 220px;\n  height: 40px;\n  margin-left: 54px;\n  margin-top: 21px;\n  position: relative;\n  display: inline-block; }\n\n.drag-control {\n  position: relative;\n  height: 40px;\n  border-radius: 2px;\n  border: 1px solid #e4e7eb;\n  background-color: #f7f9fa; }\n\n.drag-arrow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 100%;\n  border-radius: 2px;\n  background-color: #fff;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  transition: background .2s linear; }\n\n.drag-arrow-hover:hover {\n  background-color: #1991fa; }\n\n.moving-slider-bg {\n  background-color: #1991fa; }\n\n.drag-arrow-hover:hover .drag-icon {\n  background: url(" + escape(__webpack_require__(1)) + ") 0 -13px;\n  background-size: 34px 471px; }\n\n.drag-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -6px;\n  left: 50%;\n  margin-left: -6px;\n  width: 14px;\n  height: 10px;\n  background: url(" + escape(__webpack_require__(1)) + ") 0 -26px;\n  background-size: 34px 471px; }\n\n.moving-icon {\n  background: url(" + escape(__webpack_require__(1)) + ") 0 -13px;\n  background-size: 34px 471px; }\n\n.success-icon {\n  background: url(" + escape(__webpack_require__(1)) + ") 0 0;\n  background-size: 34px 471px; }\n\n.fail-icon {\n  background: url(" + escape(__webpack_require__(1)) + ") 0 -83px;\n  background-size: 34px 471px; }\n\n.drag-tips {\n  text-align: center;\n  color: #45494c;\n  line-height: 40px;\n  font-size: 14px; }\n\n.captcha-wrapper {\n  position: relative;\n  padding-top: 50%; }\n\n.background-image {\n  width: 290px; }\n\n.captcha-panel {\n  position: absolute;\n  bottom: 40px;\n  left: 0;\n  width: 100%;\n  padding-bottom: 15px;\n  z-index: 999;\n  transition: visibility 0.35s;\n  visibility: hidden; }\n\n.captcha-image {\n  position: absolute;\n  margin-top: -115px;\n  transition: all 0.35s;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(0); }\n\n.show-panel {\n  visibility: visible; }\n\n.show-captcha {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(-25px); }\n\n.slider-image {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: auto;\n  height: 100%;\n  user-select: none; }\n\nimg {\n  vertical-align: middle;\n  user-select: none; }\n\n.slider-left {\n  position: absolute;\n  width: 0;\n  left: 0;\n  height: 38px;\n  border-radius: 2px;\n  border: 1px solid transparent; }\n\n.moving-slider-left {\n  border-color: #1991fa;\n  border-right: none;\n  background-color: #d1e9fe; }\n\n.verify-success {\n  border-color: #52ccba;\n  background-color: #d2f4ef; }\n\n.success-slider-bg {\n  background-color: #52ccba; }\n\n.fail-slider-bg {\n  background-color: #f7797a; }\n\n.verify-fail {\n  border-color: #f7797a;\n  background-color: #fde1e1; }\n\n.can-animate {\n  transition: left 0.2s ease-out; }\n\n.refresh-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 34px;\n  height: 34px;\n  cursor: pointer;\n  background: url(" + escape(__webpack_require__(1)) + ") 0 -437px;\n  background-size: 34px 471px; }\n\n.refresh-icon:hover {\n  background: url(" + escape(__webpack_require__(1)) + ") 0 -400px;\n  background-size: 34px 471px; }\n\n.is-validating {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 34px;\n  height: 34px;\n  cursor: pointer;\n  background: url(" + escape(__webpack_require__(1)) + ") 0 -182px;\n  background-size: 34px 471px;\n  animation-name: rotate;\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite; }\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n.loading-captcha {\n  background-color: #dedede;\n  width: 290px;\n  height: 145px; }\n\n.captcha-loading-text {\n  top: 52%;\n  position: absolute;\n  left: 50%;\n  margin-left: -35px;\n  font-size: 14px; }\n", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(14);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.timeout = 30 * 1000;
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
var Request = /** @class */ (function () {
    function Request() {
    }
    Request.get = function (url, params) {
        return __awaiter(this, void 0, void 0, function () {
            var urlStr, parameters;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlStr = url;
                        if (Object.prototype.toString.call(params) === '[object Object]') {
                            urlStr = url + (Object.keys(params).length ? '?' : '') + this.translateParams(params);
                        }
                        parameters = {
                            url: urlStr,
                            method: 'get'
                        };
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0_axios___default.a.request(parameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Request.post = function (url, params, isFormData) {
        return __awaiter(this, void 0, void 0, function () {
            var parameters;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parameters = {
                            url: url,
                            method: 'post',
                            data: isFormData ? params : this.translateParams(params)
                        };
                        if (isFormData) {
                            parameters.headers = { 'Content-Type': 'multipart/form-data' };
                        }
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0_axios___default.a.request(parameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Request.translateParams = function (params) {
        var url = '';
        for (var _i = 0, _a = Object.keys(params); _i < _a.length; _i++) {
            var key = _a[_i];
            url += key + "=" + params[key] + "&";
        }
        return url.substring(0, url.length - 1);
    };
    return Request;
}());
/* harmony default export */ __webpack_exports__["a"] = (Request);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(3);
var Axios = __webpack_require__(19);
var defaults = __webpack_require__(2);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(7);
axios.CancelToken = __webpack_require__(34);
axios.isCancel = __webpack_require__(6);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(35);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(2);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(29);
var dispatchRequest = __webpack_require__(30);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(5);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(31);
var isCancel = __webpack_require__(6);
var defaults = __webpack_require__(2);
var isAbsoluteURL = __webpack_require__(32);
var combineURLs = __webpack_require__(33);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(7);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.addClass = function (options) {
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option = options_1[_i];
            if (!this.hasClass(option.element, option.className)) {
                option.element.className += " " + option.className;
            }
        }
    };
    Util.removeClass = function (options) {
        for (var _i = 0, options_2 = options; _i < options_2.length; _i++) {
            var option = options_2[_i];
            if (this.hasClass(option.element, option.className)) {
                var reg = new RegExp("(\\s|^)" + option.className + "(\\s|$)");
                option.element.className = option.element.className.replace(reg, ' ');
            }
        }
    };
    Util.hasClass = function (element, className) {
        return !!element.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
    };
    return Util;
}());
/* harmony default export */ __webpack_exports__["a"] = (Util);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return htmlTemplate; });
var htmlTemplate = '<div class="drag-wrapper">' +
    '<div class="captcha-panel">' +
    '<div class="captcha-wrapper">' +
    '<div class="captcha-image">' +
    '<img id="background-image" class="background-image">' +
    '<img id="slider-image" class="slider-image" style="left: 0;">' +
    '<div class="refresh-icon"></div>' +
    '<div id="loading-captcha" class="loading-captcha" style="display: none">' +
    '<div class="is-validating" style="left: 50%;top: 50%;margin-left: -17px;margin-top: -34px"></div>' +
    '<div class="captcha-loading-text">图片加载中..</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div id="drag-control" class="drag-control animated">' +
    '<div id="slider-left" class="slider-left" style="width: 2px;"></div> ' +
    '<div id="drag-arrow" class="drag-arrow drag-arrow-hover" style="left: 0;">' +
    '<i class="drag-icon"></i>' +
    '</div>' +
    '<div id="is-validating" class="is-validating" style="display: none"></div>' +
    '<div class="drag-tips">' +
    '<span id="tips-text" class="tips-text">向右滑动滑块填充拼图</span>' +
    '</div>' +
    '</div>' +
    '</div>';


/***/ })
/******/ ]);
});