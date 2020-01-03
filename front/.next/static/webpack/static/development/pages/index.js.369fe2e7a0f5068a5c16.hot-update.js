webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./images sync recursive ^\\.\\/.*\\.PNG$":
/*!***********************************!*\
  !*** ./images sync ^\.\/.*\.PNG$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
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

/***/ "./images/CHALLENGER.PNG":
false

})
//# sourceMappingURL=index.js.369fe2e7a0f5068a5c16.hot-update.js.map