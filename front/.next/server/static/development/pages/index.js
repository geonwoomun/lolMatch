module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/InputForm.js":
/*!*********************************!*\
  !*** ./components/InputForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\Users\\ansej\\\uACF5\uBD80\uD55C\uAC83\uB4E4\\lolMatch\\front\\components\\InputForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const InputForm = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: userName,
    1: setUsernName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async e => {
    e.preventDefault();
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SEARCH_USER_REQUEST"],
      data: userName
    });
  }, [userName]);
  const onChangeName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setUsernName(e.target.value);
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: userName,
    onChange: onChangeName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "\uAC80\uC0C9"));
};

/* harmony default export */ __webpack_exports__["default"] = (InputForm);

/***/ }),

/***/ "./components/RotationChamp.js":
/*!*************************************!*\
  !*** ./components/RotationChamp.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_champ__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/champ */ "./reducers/champ.js");
var _jsxFileName = "C:\\Users\\ansej\\\uACF5\uBD80\uD55C\uAC83\uB4E4\\lolMatch\\front\\components\\RotationChamp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const RotationChamp = () => {
  const {
    rotationChampion
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.champ);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _reducers_champ__WEBPACK_IMPORTED_MODULE_3__["ROTATION_CHAMPION_REQUEST"]
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "\uB85C\uD14C\uC774\uC158 \uCC54\uD53C\uC5B8"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: {
      width: 600
    },
    grid: {
      gutter: 4,
      column: 5,
      padding: "0px",
      margin: "0px"
    },
    itemLayout: "horizontal",
    size: "small",
    dataSource: rotationChampion,
    renderItem: item => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
      style: {
        width: 50,
        padding: "0px",
        margin: "0px"
      },
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: {
        padding: "0px",
        margin: "0px"
      },
      hoverable: true,
      style: {
        width: 100
      },
      cover: __jsx("img", {
        alt: "champ",
        src: `http://localhost:3065/champ/champ_${item.id}.png`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: undefined
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, item.championName)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RotationChamp);

/***/ }),

/***/ "./components/UserMatches.js":
/*!***********************************!*\
  !*** ./components/UserMatches.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ansej\\\uACF5\uBD80\uD55C\uAC83\uB4E4\\lolMatch\\front\\components\\UserMatches.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const UserMatches = () => {
  const {
    userMatches,
    detailInfos
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const columns = [{
    title: "승",
    dataIndex: "win",
    key: "win",
    render: text => text ? "승" : "패"
  }, {
    title: "챔피언",
    dataIndex: "champion",
    key: "champion",
    render: champ => __jsx("img", {
      style: {
        witdh: 100
      },
      src: `http://localhost:3065/champ/champ_${champ}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    })
  }, {
    title: "타입",
    dataIndex: "type",
    key: "type",
    render: type => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, type === 420 ? "솔로랭크" : type === 430 ? "일반" : type === 440 ? "자유랭" : type === 450 ? "칼바람" : " 포로왕")
  }, {
    title: "KDA",
    dataIndex: "KDA",
    key: "KDA",
    render: kda => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, "평점:" + ((kda[0] + kda[2]) / kda[1]).toFixed(2), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }), `${kda[0]}/${kda[1]}/${kda[2]}`)
  }, {
    title: "S/R",
    dataIndex: "SR",
    key: "SR",
    render: sr => __jsx("div", {
      style: {
        display: "flex"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, __jsx("img", {
      style: {
        width: 50
      },
      src: `http://localhost:3065/spell/${sr[0]}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }), __jsx("img", {
      style: {
        width: 50
      },
      src: `http://localhost:3065/spell/${sr[1]}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    })), __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, __jsx("img", {
      style: {
        width: 50
      },
      src: `http://localhost:3065/rune/${sr[2]}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }), __jsx("img", {
      style: {
        width: 50
      },
      src: `http://localhost:3065/rune/${sr[3]}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    })))
  }, {
    title: "팀",
    dataIndex: "team",
    key: "team"
  }, {
    title: "아이템",
    dataIndex: "item",
    key: "item",
    render: item => __jsx("div", {
      style: {
        display: "flex"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }, item.map(t => {
      return __jsx("img", {
        stlye: {
          width: 20,
          height: 20
        },
        src: `http://localhost:3065/item/${t}.png`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: undefined
      });
    }))
  }, {
    title: "LV/G/CS",
    dataIndex: "LVGCS",
    key: "LVGCS",
    render: lvgcs => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }, "\uB808\uBCA8 : ", lvgcs[0], __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }), "\uACE8\uB4DC : ", lvgcs[1], __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }), "cs : ", lvgcs[2])
  }, {
    title: "플레이",
    dataIndex: "play",
    key: "play"
  }];

  const returnData = () => {
    let matchInfo = []; // 팀 해야함.

    for (let i = 0; i < userMatches.length; i++) {
      matchInfo[i] = {
        champion: '',
        win: '',
        KDA: '',
        item: '',
        type: '',
        SR: '',
        LVGCS: '',
        team: [],
        play: 0
      };
    }

    userMatches.forEach((item, i) => {
      matchInfo[i].champion = item.champion;
      matchInfo[i].type = item.queue;
    });
    detailInfos.forEach((item, i) => {
      matchInfo[i].win = item.stats.win;
      matchInfo[i].KDA = [item.stats.kills, item.stats.deaths, item.stats.assists];
      matchInfo[i].item = [item.stats.item0, item.stats.item1, item.stats.item2, item.stats.item3, item.stats.item4, item.stats.item5, item.stats.item6];
      matchInfo[i].SR = [item.spell1Id, item.spell2Id, item.stats.perk0, item.stats.perkSubStyle];
      matchInfo[i].LVGCS = [item.stats.champLevel, item.stats.goldEarned, item.stats.totalMinionsKilled];
      matchInfo[i].team = [];
      matchInfo[i].play = 0;
    });
    return matchInfo;
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    columns: columns,
    dataSource: returnData(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserMatches);

/***/ }),

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ansej\\\uACF5\uBD80\uD55C\uAC83\uB4E4\\lolMatch\\front\\components\\UserProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const UserProfile = () => {
  const {
    userName,
    userRanks
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  console.log(userRanks);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, userName), __jsx("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, userRanks.map(match => {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: {
        width: 300,
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        border: "1px solid #1890FF"
      },
      key: match.leagueId,
      cover: __jsx("img", {
        style: {
          width: 100,
          height: 100
        },
        src: `http://localhost:3065/tier/${match.tier}.jpg`,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: undefined
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
      title: __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: undefined
      }, match.queueType === 'RANKED_FLEX_SR' ? "자유랭크 5x5" : "솔로랭크5x5", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: undefined
      }), match.tier + " " + match.rank, " \uB4F1\uAE09", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: undefined
      }), match.leaguePoints, " points"),
      description: __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: undefined
      }, match.wins + match.losses, "\uC804 ", " ", match.wins, "\uC2B9", " ", match.losses, "\uD328", " ", "(", (match.wins / (match.wins + match.losses) * 100).toFixed(2), "%)"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InputForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InputForm */ "./components/InputForm.js");
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _components_UserMatches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UserMatches */ "./components/UserMatches.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_RotationChamp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/RotationChamp */ "./components/RotationChamp.js");
var _jsxFileName = "C:\\Users\\ansej\\\uACF5\uBD80\uD55C\uAC83\uB4E4\\lolMatch\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Home = () => {
  const {
    isLoadedUser
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_InputForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx(_components_RotationChamp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), isLoadedUser && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_UserProfile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx(_components_UserMatches__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./reducers/champ.js":
/*!***************************!*\
  !*** ./reducers/champ.js ***!
  \***************************/
/*! exports provided: initialState, ROTATION_CHAMPION_REQUEST, ROTATION_CHAMPION_SUCCESS, ROTATION_CHAMPION_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION_CHAMPION_REQUEST", function() { return ROTATION_CHAMPION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION_CHAMPION_SUCCESS", function() { return ROTATION_CHAMPION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION_CHAMPION_FAILURE", function() { return ROTATION_CHAMPION_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  rotationChampion: [],
  rotationError: ""
};
const ROTATION_CHAMPION_REQUEST = "ROTATION_CHAMPION_REQUEST";
const ROTATION_CHAMPION_SUCCESS = "ROTATION_CHAMPION_SUCCESS";
const ROTATION_CHAMPION_FAILURE = "ROTATION_CHAMPION_FAILURE";

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case ROTATION_CHAMPION_REQUEST:
        {
          draft.rotationChampion = [];
          draft.rotationError = '';
          break;
        }

      case ROTATION_CHAMPION_SUCCESS:
        {
          action.data.forEach(v => {
            draft.rotationChampion.push(v);
          });
          break;
        }

      case ROTATION_CHAMPION_FAILURE:
        {
          draft.rotationError = action.error;
          break;
        }

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  userName: '',
  userRanks: [],
  userMatches: [],
  detailInfos: [],
  isLoadedUser: false
};
const SEARCH_USER_REQUEST = "SEARCH_USER_REQUEST";
const SEARCH_USER_SUCCESS = "SEARCH_USER_SUCCESS";
const SEARCH_USER_FAILURE = "SEARCH_USER_FAILURE";

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case SEARCH_USER_REQUEST:
        {
          draft.userRanks = [];
          draft.userMatches = [];
          draft.detailsInfos = [];
          draft.isLoadedUser = false;
          break;
        }

      case SEARCH_USER_SUCCESS:
        {
          draft.userName = action.data.name;
          draft.userRanks = [action.data["RANKED_SOLO_5x5"], action.data["RANKED_FLEX_SR"]];
          draft.userMatches = action.data.matches;
          draft.detailInfos = action.data.detailInfos;
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

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ansej\공부한것들\lolMatch\front\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map