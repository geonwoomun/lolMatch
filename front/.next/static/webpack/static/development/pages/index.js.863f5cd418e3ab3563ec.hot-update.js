webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "C:\\Users\\ansej\\\uACF5\uBD80\uD55C\uAC83\uB4E4\\lolMatch\\front\\components\\UserProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var UserProfile = function UserProfile() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      user = _useSelector.user;

  var userMatch = user.slice(1);
  console.log(z);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, user[0]), userMatch.map(function (match) {
    __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      key: match.leagueId,
      cover: __jsx("img", {
        src: __webpack_require__("./images sync recursive ^\\.\\/.*\\.PNG$")("./".concat(match.tier, ".PNG")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./images sync recursive ^\\.\\/.*\\.PNG$":
/*!***********************************!*\
  !*** ./images sync ^\.\/.*\.PNG$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./BRONZE.PNG": "./images/BRONZE.PNG",
	"./CHALLENGER.PNG": "./images/CHALLENGER.PNG",
	"./DIAMOND.PNG": "./images/DIAMOND.PNG",
	"./GOLD.PNG": "./images/GOLD.PNG",
	"./GRANDMASTER.PNG": "./images/GRANDMASTER.PNG",
	"./IRON.PNG": "./images/IRON.PNG",
	"./MASTER.PNG": "./images/MASTER.PNG",
	"./PLATINUM.PNG": "./images/PLATINUM.PNG",
	"./SILVER.PNG": "./images/SILVER.PNG"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./images sync recursive ^\\.\\/.*\\.PNG$";

/***/ }),

/***/ "./images/BRONZE.PNG":
/*!***************************!*\
  !*** ./images/BRONZE.PNG ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./images/CHALLENGER.PNG":
/*!*******************************!*\
  !*** ./images/CHALLENGER.PNG ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./images/DIAMOND.PNG":
/*!****************************!*\
  !*** ./images/DIAMOND.PNG ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./images/GOLD.PNG":
/*!*************************!*\
  !*** ./images/GOLD.PNG ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./images/GRANDMASTER.PNG":
/*!********************************!*\
  !*** ./images/GRANDMASTER.PNG ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./images/IRON.PNG":
/*!*************************!*\
  !*** ./images/IRON.PNG ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./images/MASTER.PNG":
/*!***************************!*\
  !*** ./images/MASTER.PNG ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./images/PLATINUM.PNG":
/*!*****************************!*\
  !*** ./images/PLATINUM.PNG ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./images/SILVER.PNG":
/*!***************************!*\
  !*** ./images/SILVER.PNG ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ })

})
//# sourceMappingURL=index.js.863f5cd418e3ab3563ec.hot-update.js.map