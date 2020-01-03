webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USER_REQUEST", function() { return SEARCH_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USER_SUCCESS", function() { return SEARCH_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USER_FAILURE", function() { return SEARCH_USER_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");

var initialState = {
  userName: '',
  userRanks: [],
  isLoadedUser: false
};
var SEARCH_USER_REQUEST = "SEARCH_USER_REQUEST";
var SEARCH_USER_SUCCESS = "SEARCH_USER_SUCCESS";
var SEARCH_USER_FAILURE = "SEARCH_USER_FAILURE";

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case SEARCH_USER_REQUEST:
        {
          draft.isLoadedUser = false;
          break;
        }

      case SEARCH_USER_SUCCESS:
        {
          draft.userName = action.data[0];
          draft.userRanks = action.data.filter(function (v, i) {
            return i !== 0;
          }).sort(function (a, b) {
            var queA = a.queueType.toUpperCase();
            var queB = b.queueType.toUpperCase();

            if (queA > queB) {
              return -1;
            }

            if (queA < queB) {
              return 1;
            }

            return 0;
          });
          draft.isLoadedUser = true;
          break;
        }

      case SEARCH_USER_FAILURE:
        {
          draft.isLoadedUser = false;
          break;
        }

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=index.js.9f0f70f0bb1afb16e384.hot-update.js.map