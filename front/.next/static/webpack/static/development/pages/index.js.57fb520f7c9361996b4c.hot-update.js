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
      userName = _useSelector.userName,
      userMatch = _useSelector.userMatch;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, userName), userMatch.map(function (match) {
    __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      key: match.leagueId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./images sync recursive ^\\.\\/.*\\.PNG$":
false,

/***/ "./images/BRONZE.PNG":
false,

/***/ "./images/CHALLENGER.PNG":
false,

/***/ "./images/DIAMOND.PNG":
false,

/***/ "./images/GOLD.PNG":
false,

/***/ "./images/GRANDMASTER.PNG":
false,

/***/ "./images/IRON.PNG":
false,

/***/ "./images/MASTER.PNG":
false,

/***/ "./images/PLATINUM.PNG":
false,

/***/ "./images/SILVER.PNG":
false

})
//# sourceMappingURL=index.js.57fb520f7c9361996b4c.hot-update.js.map