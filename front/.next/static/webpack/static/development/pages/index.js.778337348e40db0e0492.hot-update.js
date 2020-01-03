webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./images sync recursive ^\\.\\/.*\\.PNG$":
/*!***********************************!*\
  !*** ./images sync ^\.\/.*\.PNG$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
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

/***/ "./images/MASTER.PNG":
false

})
//# sourceMappingURL=index.js.778337348e40db0e0492.hot-update.js.map