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
        width: 100,
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
        width: 90,
        padding: "0px",
        margin: "0px",
        fontSize: "10px"
      },
      hoverable: true,
      cover: __jsx("img", {
        style: {
          width: 90
        },
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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\ansej\\\uACF5\uBD80\uD55C\uAC83\uB4E4\\lolMatch\\front\\components\\UserMatches.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const TableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Table"])`
  & .tableRowBlue {
    background : #D4E4FE;
  }
  & .tableRowRed {
    background : #FFEEEE;
  }
`;

const UserMatches = () => {
  const {
    detailInfos
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
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
        lineNumber: 29
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
        lineNumber: 40
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
        lineNumber: 58
      },
      __self: undefined
    }, "평점:" + ((kda[0] + kda[2]) / kda[1]).toFixed(2), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
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
        lineNumber: 70
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    }, __jsx("img", {
      style: {
        width: 40
      },
      src: `http://localhost:3065/spell/${sr[0]}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: undefined
    }), __jsx("img", {
      style: {
        width: 40
      },
      src: `http://localhost:3065/spell/${sr[1]}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    })), __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: undefined
    }, __jsx("img", {
      style: {
        width: 40
      },
      src: `http://localhost:3065/rune/${sr[2]}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }), __jsx("img", {
      style: {
        width: 40
      },
      src: `http://localhost:3065/rune/${sr[3]}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    })))
  }, {
    title: "팀",
    dataIndex: "team",
    key: "team",
    render: team => {
      const team1 = team.slice(0, 5);
      const team2 = team.slice(5);
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: undefined
      }, __jsx("div", {
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: undefined
      }, team1.map(t => __jsx("img", {
        style: {
          width: 30,
          margin: 1
        },
        src: `http://localhost:3065/champ/champ_${t}.png`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: undefined
      }))), __jsx("div", {
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: undefined
      }, team2.map(t => __jsx("img", {
        style: {
          width: 30,
          margin: 1
        },
        src: `http://localhost:3065/champ/champ_${t}.png`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: undefined
      }))));
    }
  }, {
    title: "아이템",
    dataIndex: "item",
    key: "item",
    render: item => __jsx("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        maxWidth: 140,
        minWidth: 140
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: undefined
    }, item.map(t => {
      return __jsx("img", {
        stlye: {
          width: 10,
          height: 10
        },
        src: `http://localhost:3065/item/${t}.png`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
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
        lineNumber: 145
      },
      __self: undefined
    }, "\uB808\uBCA8 : ", lvgcs[0], __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: undefined
    }), "\uACE8\uB4DC : ", lvgcs[1], __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: undefined
    }), "cs : ", lvgcs[2])
  }, {
    title: "플레이",
    dataIndex: "play",
    key: "play",
    render: play => {
      const now = new Date();
      const nowTime = now.getTime();
      const timeBetween = (nowTime - play[1]) / 1000 / 60 / 60 / 24;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: undefined
      }, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(play[0] / 60) + "분 " + play[0] % 60 + "초"), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: undefined
      }, timeBetween >= 1 ? Math.floor(timeBetween) + "일 전" : timeBetween * 10 >= 0.7 ? Math.ceil(timeBetween * 10) + "시간 전" : Math.ceil(timeBetween * 600) + "분 전")); // 일전 0.7 보다 높으면 시간전  아니면 분전.  분전 오차가 좀 있음..
    }
  }];
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, __jsx(TableWrapper, {
    rowClassName: record => {
      console.log(record);
      return record.win ? "tableRowBlue" : "tableRowRed";
    },
    columns: columns,
    dataSource: detailInfos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
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
      lineNumber: 9
    },
    __self: undefined
  }, userRanks.map(match => {
    return match && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\ansej\\\uACF5\uBD80\uD55C\uAC83\uB4E4\\lolMatch\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Home = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    userName,
    isLoadedUser,
    gamingCheck
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const onGamingCheck = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: CHECK_GAMING_REQUEST,
      data: userName
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_InputForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(_components_RotationChamp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), isLoadedUser && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_UserProfile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: onGamingCheck,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "\uC778\uAC8C\uC784 \uC815\uBCF4"), gamingCheck ? __jsx(GameInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }) : null, __jsx(_components_UserMatches__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
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
/*! exports provided: initialState, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE, CHECK_GAMING_REQUEST, CHECK_GAMING_SUCCESS, CHECK_GAMING_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USER_REQUEST", function() { return SEARCH_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USER_SUCCESS", function() { return SEARCH_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USER_FAILURE", function() { return SEARCH_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_GAMING_REQUEST", function() { return CHECK_GAMING_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_GAMING_SUCCESS", function() { return CHECK_GAMING_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_GAMING_FAILURE", function() { return CHECK_GAMING_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  userName: '',
  userRanks: [],
  userMatches: [],
  detailInfos: [],
  isLoadedUser: false,
  gamingCheck: false
};
const SEARCH_USER_REQUEST = "SEARCH_USER_REQUEST";
const SEARCH_USER_SUCCESS = "SEARCH_USER_SUCCESS";
const SEARCH_USER_FAILURE = "SEARCH_USER_FAILURE";
const CHECK_GAMING_REQUEST = "CHECK_GAMING_REQUEST";
const CHECK_GAMING_SUCCESS = "CHECK_GAMING_SUCCESS";
const CHECK_GAMING_FAILURE = "CHECK_GAMING_FAILURE";

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

      case CHECK_GAMING_REQUEST:
        {
          draft.gamingCheck = false;
          break;
        }

      case CHECK_GAMING_SUCCESS:
        {
          draft.gamingCheck = true;
          break;
        }

      case CHECK_GAMING_FAILURE:
        {
          draft.gamingCheck = false;
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

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map