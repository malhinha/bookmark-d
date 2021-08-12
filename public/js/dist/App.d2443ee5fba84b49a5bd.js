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
/******/ 		"App": 0
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Main */ \"./src/pages/Main.js\");\n/* harmony import */ var _pages_Show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Show */ \"./src/pages/Show.js\");\n // Import React route, switch\n\n // Import page components\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Switch */ \"c\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Route */ \"a\"], {\n    exact: true,\n    path: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Main__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Route */ \"a\"], {\n    path: '/:id',\n    render: routerProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Show__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], routerProps)\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (App);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/AddBookmark.js":
/*!***************************************!*\
  !*** ./src/components/AddBookmark.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return AddBookmark; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nfunction AddBookmark(_ref) {\n  let {\n    handleData\n  } = _ref;\n  // set single bookmark state\n  const [singleBookmark, setBookmark] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    title: '',\n    url: 'http://',\n    tags: ['']\n  }); // capture data in textfields\n\n  const handleChange = e => {\n    if (e.target.id == 'tags') {\n      // let tagsArray = e.target.value.split(' ');\n      setBookmark(_objectSpread(_objectSpread({}, singleBookmark), {}, {\n        [e.target.id]: e.target.value.split(',')\n      }));\n    } else {\n      setBookmark(_objectSpread(_objectSpread({}, singleBookmark), {}, {\n        [e.target.id]: e.target.value\n      }));\n    }\n  }; // send data capture back to Main\n\n\n  const handleSubmit = e => {\n    e.preventDefault(); // error handling\n\n    if (!singleBookmark.title) {\n      alert('Please add a title before saving.');\n      return;\n    }\n\n    if (!singleBookmark.url) {\n      alert('Please add a URL before saving.');\n      return;\n    } // send form data to postBookmark function in App\n\n\n    handleData(singleBookmark); // clear out state\n\n    setBookmark({\n      title: '',\n      url: '',\n      tags: ['']\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-12 col-md-5 col-lg-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card mt-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n    className: \"card-title\"\n  }, \"Add a new bookmark:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control mb-3\",\n    id: \"title\",\n    placeholder: \"Website\",\n    value: singleBookmark.title,\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control mb-3\",\n    id: \"url\",\n    placeholder: \"URL\",\n    value: singleBookmark.url,\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    rows: \"5\",\n    className: \"form-control mb-3\",\n    id: \"tags\",\n    placeholder: \"Tags (comma separated)\",\n    value: singleBookmark.tags,\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Add Bookmark\",\n    className: \"btn btn-primary\"\n  }))))));\n}\n\n//# sourceURL=webpack:///./src/components/AddBookmark.js?");

/***/ }),

/***/ "./src/components/BookmarkDate.js":
/*!****************************************!*\
  !*** ./src/components/BookmarkDate.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BookmarkDate; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction BookmarkDate(_ref) {\n  let {\n    bookmark\n  } = _ref;\n  // months array\n  const monthsList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];\n  const year = parseInt(\"\".concat(bookmark.updatedAt).slice(2, 4), 10);\n  const month = monthsList[parseInt(\"\".concat(bookmark.updatedAt).slice(5, 7), 10) - 1];\n  const day = parseInt(\"\".concat(bookmark.updatedAt).slice(8, 10), 10);\n  const shortDate = \"\".concat(day, \" \").concat(month, \" \").concat(year);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"date text-black-50 mr-3\"\n  }, shortDate);\n}\n\n//# sourceURL=webpack:///./src/components/BookmarkDate.js?");

/***/ }),

/***/ "./src/components/BookmarkDetail.js":
/*!******************************************!*\
  !*** ./src/components/BookmarkDetail.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BookmarkDetail; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BookmarkUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookmarkUrl */ \"./src/components/BookmarkUrl.js\");\n/* harmony import */ var _BookmarkTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookmarkTags */ \"./src/components/BookmarkTags.js\");\n\n\n\nfunction BookmarkDetail(_ref) {\n  let {\n    bookmark,\n    toggleForm,\n    handleDelete\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row bg-white pt-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, bookmark.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookmarkUrl__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    url: bookmark.url\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookmarkTags__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    tags: bookmark.tags\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row bg-white pt-3 pb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn btn-outline-secondary mr-2\",\n    onClick: toggleForm\n  }, \"Edit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn btn-outline-secondary\",\n    onClick: handleDelete\n  }, \"Delete\"))));\n}\n\n//# sourceURL=webpack:///./src/components/BookmarkDetail.js?");

/***/ }),

/***/ "./src/components/BookmarkList.js":
/*!****************************************!*\
  !*** ./src/components/BookmarkList.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BookmarkList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BookmarkDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookmarkDate */ \"./src/components/BookmarkDate.js\");\n/* harmony import */ var _BookmarkListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookmarkListItem */ \"./src/components/BookmarkListItem.js\");\n\n\n\nfunction BookmarkList(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-12 col-md-7 col-lg-8\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"pb-3 pt-3\",\n    fontWeight: \"600\"\n  }, \"John's \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Bookmarks\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"list-group list-group-flush bg-white pt-2\"\n  }, props.bookmarks.map((bookmark, i) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: bookmark._id,\n      className: \"list-group-item\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"listItem\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookmarkDate__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n      bookmark: bookmark\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookmarkListItem__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n      bookmark: bookmark\n    })));\n  }))))));\n}\n\n//# sourceURL=webpack:///./src/components/BookmarkList.js?");

/***/ }),

/***/ "./src/components/BookmarkListItem.js":
/*!********************************************!*\
  !*** ./src/components/BookmarkListItem.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BookmarkListItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _BookmarkUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookmarkUrl */ \"./src/components/BookmarkUrl.js\");\n/* harmony import */ var _BookmarkTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookmarkTags */ \"./src/components/BookmarkTags.js\");\n\n\n\n\nfunction BookmarkListItem(_ref) {\n  let {\n    bookmark\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"listDetail\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n    to: \"/\".concat(bookmark._id)\n  }, bookmark.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookmarkUrl__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    url: bookmark.url\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookmarkTags__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    tags: bookmark.tags\n  })));\n}\n\n//# sourceURL=webpack:///./src/components/BookmarkListItem.js?");

/***/ }),

/***/ "./src/components/BookmarkTags.js":
/*!****************************************!*\
  !*** ./src/components/BookmarkTags.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BookmarkTags; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction BookmarkTags(_ref) {\n  let {\n    tags\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"tags mt-3\"\n  }, tags.map((tag, i) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: i,\n      className: \"badge badge-pill badge-light mr-1 p-2\"\n    }, tag);\n  })));\n}\n\n//# sourceURL=webpack:///./src/components/BookmarkTags.js?");

/***/ }),

/***/ "./src/components/BookmarkUrl.js":
/*!***************************************!*\
  !*** ./src/components/BookmarkUrl.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BookmarkUrl; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction BookmarkUrl(_ref) {\n  let {\n    url\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: url,\n    target: \"_blank\"\n  }, url)));\n}\n\n//# sourceURL=webpack:///./src/components/BookmarkUrl.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container mt-5 mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://miro.medium.com/max/256/0*1xhFr-mZLpVLiHVF.png\",\n    id: \"logo\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"col-11\",\n    fontWeight: \"300\"\n  }, \"cheap delicious knock-off\"))));\n}\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/UpdateBookmark.js":
/*!******************************************!*\
  !*** ./src/components/UpdateBookmark.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return UpdateBookmark; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nfunction UpdateBookmark(_ref) {\n  let {\n    bookmark,\n    handleData\n  } = _ref;\n  // reference fields for pre-population\n  const titleInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const urlInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const tagsInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null); // update bookmark\n\n  const handleUpdate = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator(function* (e) {\n      e.preventDefault();\n      handleData(titleInput.current.value, urlInput.current.value, tagsInput.current.value.split(','));\n    });\n\n    return function handleUpdate(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleUpdate\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"mt-3\"\n  }, \"Title: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    ref: titleInput,\n    defaultValue: bookmark.title\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"mt-3\"\n  }, \"URL: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    ref: urlInput,\n    defaultValue: bookmark.url\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"mt-3\"\n  }, \"Tags (comma separated): \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    rows: \"3\",\n    className: \"form-control\",\n    ref: tagsInput,\n    defaultValue: bookmark.tags\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    className: \"btn btn-primary mt-3\",\n    value: \"Update Bookmark\"\n  })))));\n}\n\n//# sourceURL=webpack:///./src/components/UpdateBookmark.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], null))), document.getElementById('app'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/Main.js":
/*!***************************!*\
  !*** ./src/pages/Main.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Main; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_BookmarkList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BookmarkList */ \"./src/components/BookmarkList.js\");\n/* harmony import */ var _components_AddBookmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddBookmark */ \"./src/components/AddBookmark.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nfunction Main() {\n  // set bookmarks state\n  const [bookmarks, setBookmarks] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]); // load API into state\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch('/api/bookmarks');\n        const data = yield response.json(); // sort bookmarks by date, descending\n\n        const resortedData = data.sort(function (a, b) {\n          if (a.updatedAt > b.updatedAt) return -1;\n          if (a.updatedAt < b.updatedAt) return 1;\n          return 0;\n        });\n        setBookmarks(resortedData);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []); // save new bookmark\n\n  const postBookmark = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator(function* (singleBookmark) {\n      try {\n        // aka Postman Query\n        const response = yield fetch('/api/bookmarks', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(singleBookmark)\n        }); // recieve data & turn it into js object/array\n\n        const data = yield response.json(); // sort bookmarks by date, descending\n\n        const resortedData = [...bookmarks, data].sort(function (a, b) {\n          if (a.updatedAt > b.updatedAt) return -1;\n          if (a.updatedAt < b.updatedAt) return 1;\n          return 0;\n        }); // move that js object/array into state & db\n\n        setBookmarks(resortedData);\n      } catch (error) {\n        // display error for backend developer\n        console.error(error); // display error for front end developer\n\n        res.status(404).json({\n          message: error.message\n        });\n      }\n    });\n\n    return function postBookmark(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container mt-3\",\n    id: \"main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BookmarkList__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    bookmarks: bookmarks\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddBookmark__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    handleData: postBookmark\n  }))));\n}\n\n//# sourceURL=webpack:///./src/pages/Main.js?");

/***/ }),

/***/ "./src/pages/Show.js":
/*!***************************!*\
  !*** ./src/pages/Show.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Show; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_UpdateBookmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UpdateBookmark */ \"./src/components/UpdateBookmark.js\");\n/* harmony import */ var _components_BookmarkDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BookmarkDetail */ \"./src/components/BookmarkDetail.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nfunction Show(props) {\n  // set bookmark state\n  const [bookmark, setBookmark] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}); // set show update form state\n\n  const [showForm, setShowForm] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false); // fetch & display\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"/api/bookmarks/\".concat(props.match.params.id));\n        const data = yield response.json();\n        setBookmark(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []); // toggle display of update form\n\n  const toggleForm = () => {\n    if (!showForm) {\n      setShowForm(true);\n    } else {\n      setShowForm(false);\n    }\n  }; // update bookmark\n\n\n  const putBookmark = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator(function* (newTitle, newUrl, newTags) {\n      try {\n        const response = yield fetch(\"/api/bookmarks/\".concat(props.match.params.id), {\n          method: 'PUT',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify({\n            title: newTitle,\n            url: newUrl,\n            tags: newTags\n          })\n        });\n        const data = yield response.json();\n        setBookmark(data);\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    return function putBookmark(_x, _x2, _x3) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // delete bookmark\n\n\n  const handleDelete = /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator(function* (e) {\n      try {\n        const response = yield fetch(\"/api/bookmarks/\".concat(props.match.params.id), {\n          method: 'DELETE',\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n        const deletedBookmark = yield response.json();\n      } catch (error) {\n        console.error(error);\n      } finally {\n        window.location.assign('/');\n      }\n    });\n\n    return function handleDelete(_x4) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-12 mt-4 mb-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n    to: '/'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn btn-outline-primary\"\n  }, \"Back to list\")))), Object.keys(bookmark).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BookmarkDetail__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    bookmark: bookmark,\n    toggleForm: toggleForm,\n    handleDelete: handleDelete\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \" Loading...\")), showForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UpdateBookmark__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    bookmark: bookmark,\n    handleData: putBookmark\n  })));\n}\n\n//# sourceURL=webpack:///./src/pages/Show.js?");

/***/ })

/******/ });