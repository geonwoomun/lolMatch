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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/GameInfo.js":
/*!********************************!*\
  !*** ./components/GameInfo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ansej\\\uACF5\uBD80\uD55C\uAC83\uB4E4\\lolMatch\\front\\components\\GameInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const GameInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "GameInfo__GameInfoWrapper",
  componentId: "r3c2sd-0"
})(["display:flex;align-items:center;flex-direction:column;margin:10px 10px;padding:10px 10px;border:1px solid #b2bec3;border-radius:5px;background:#b2bec3;& > div{display:flex;width:500px;justify-content:space-between;}& > div > img{width:20px;height:20px;}& > .banBox{border:1px solid grey;}"]);
const GameInfoBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "GameInfo__GameInfoBox",
  componentId: "r3c2sd-1"
})(["display:flex;flex-direction:column;align-content:space-between;& .oneBox{display:flex;justify-content:space-between;margin-bottom:10px;border:1px solid grey;border-radius:5px;}& .blueTeam{background:#D4E4FE;}& .redTeam{background:#FFEEEE;}& .runeBox{display:flex;flex-direction:column;}& .runeBox > img{width:25px;height:25px;}& .summonerBox{display:flex;justify-content:center;align-content:center;font-weight:bold;}& .summonerBox > span{line-height:45px;}& .summonerBox > .spellBox{display:flex;flex-direction:column;}& .summonerBox > .spellBox > img{width:25px;height:25px;}& .summonerBox > img{width:50px;height:50px;}"]);

const GameInfo = () => {
  const {
    gameInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const nowTime = new Date();
  const gameTime = (nowTime.getTime() - gameInfo.gameStartTime) / 1000 / 60 - 3;
  return __jsx(GameInfoWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, gameInfo.gameType, " ", Math.floor(gameTime) + "분 " + (gameTime % 1 * 60).toFixed() + "초"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx(GameInfoBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, [...gameInfo.participants].slice(0, 5).map(v => {
    return __jsx("div", {
      className: "oneBox blueTeam",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    }, __jsx("div", {
      className: "runeBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: undefined
    }, __jsx("img", {
      src: `http://localhost:3065/rune/${v.perks.perkIds[0]}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }), __jsx("img", {
      src: `http://localhost:3065/rune/${v.perks.perkSubStyle}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    })), __jsx("div", {
      className: "summonerBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: undefined
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }, v.summonerName), __jsx("div", {
      className: "spellBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: undefined
    }, __jsx("img", {
      src: `http://localhost:3065/spell/${v.spell1Id}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }), __jsx("img", {
      src: `http://localhost:3065/spell/${v.spell2Id}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    })), __jsx("img", {
      src: `http://localhost:3065/champ/champ_${v.championId}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: undefined
    })));
  })), __jsx(GameInfoBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, [...gameInfo.participants].slice(5).map(v => {
    return __jsx("div", {
      className: "oneBox redTeam",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: undefined
    }, __jsx("div", {
      className: "summonerBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: undefined
    }, __jsx("img", {
      src: `http://localhost:3065/champ/champ_${v.championId}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: undefined
    }), __jsx("div", {
      className: "spellBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: undefined
    }, __jsx("img", {
      src: `http://localhost:3065/spell/${v.spell1Id}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: undefined
    }), __jsx("img", {
      src: `http://localhost:3065/spell/${v.spell2Id}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: undefined
    })), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: undefined
    }, v.summonerName)), __jsx("div", {
      className: "runeBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: undefined
    }, __jsx("img", {
      src: `http://localhost:3065/rune/${v.perks.perkIds[0]}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: undefined
    }), __jsx("img", {
      src: `http://localhost:3065/rune/${v.perks.perkSubStyle}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: undefined
    })));
  }))), __jsx("div", {
    className: "banBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, [...gameInfo.bannedChampions].slice(0, 5).map(v => __jsx("img", {
    src: `http://localhost:3065/champ/champ_${v.championId}.png`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  })), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, "\uAE08\uC9C0"), [...gameInfo.bannedChampions].slice(5).map(v => __jsx("img", {
    src: `http://localhost:3065/champ/champ_${v.championId}.png`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (GameInfo);

/***/ }),

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
    style: {
      marginBottom: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    style: {
      width: 400
    },
    placeholder: "\uC18C\uD658\uC0AC\uBA85 \uAC80\uC0C9",
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
/* harmony import */ var _reducers_champ__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/champ */ "./reducers/champ.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\ansej\\\uACF5\uBD80\uD55C\uAC83\uB4E4\\lolMatch\\front\\components\\RotationChamp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // 새로고침을 했을 때 styled-components 가 적용 되지 않는 문제가 있었는데
// .babelrc 파일 추가하고 ~~ 적어주고
// package.json에 밑의 내용 추가해서 npm i 하고 나니 성공!!
// "devDependencies": {
//  "babel-plugin-styled-components": "^1.8.0"
//}

const ChampionUl = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ul.withConfig({
  displayName: "RotationChamp__ChampionUl",
  componentId: "sc-1yh42k6-0"
})(["list-style:none;display:flex;flex-flow:wrap;border:1px solid #1890FF;border-radius:5px;justify-content:center;align-items:center;min-width:300px;& li{flex:1;text-align:center;}"]);

const RotationChamp = () => {
  const {
    rotationChampion
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.champ);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _reducers_champ__WEBPACK_IMPORTED_MODULE_2__["ROTATION_CHAMPION_REQUEST"]
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "\uB85C\uD14C\uC774\uC158 \uCC54\uD53C\uC5B8"), __jsx(ChampionUl, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, rotationChampion.map(r => {
    return __jsx("li", {
      key: r.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, __jsx("img", {
      src: `http://localhost:3065/champ/champ_${r.id}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, r.championName.length < 5 ? r.championName : r.championName.slice(0, 4)));
  })));
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




const TableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Table"]).withConfig({
  displayName: "UserMatches__TableWrapper",
  componentId: "u3o19f-0"
})(["& .tableRowBlue{background:#D4E4FE;}& .tableRowRed{background:#FFEEEE;}"]);

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
    }, type)
  }, {
    title: "KDA",
    dataIndex: "KDA",
    key: "KDA",
    render: kda => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, "평점:" + ((kda[0] + kda[2]) / kda[1]).toFixed(2), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
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
        lineNumber: 62
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: undefined
    }, __jsx("img", {
      style: {
        width: 40
      },
      src: `http://localhost:3065/spell/${sr[0]}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }), __jsx("img", {
      style: {
        width: 40
      },
      src: `http://localhost:3065/spell/${sr[1]}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    })), __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }, __jsx("img", {
      style: {
        width: 40
      },
      src: `http://localhost:3065/rune/${sr[2]}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }), __jsx("img", {
      style: {
        width: 40
      },
      src: `http://localhost:3065/rune/${sr[3]}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
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
          lineNumber: 94
        },
        __self: undefined
      }, __jsx("div", {
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
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
          lineNumber: 97
        },
        __self: undefined
      }))), __jsx("div", {
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
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
          lineNumber: 105
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
        lineNumber: 120
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
          lineNumber: 123
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
        lineNumber: 137
      },
      __self: undefined
    }, "\uB808\uBCA8 : ", lvgcs[0], __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: undefined
    }), "\uACE8\uB4DC : ", lvgcs[1], __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
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
          lineNumber: 154
        },
        __self: undefined
      }, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(play[0] / 60) + "분 " + play[0] % 60 + "초"), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: undefined
      }, timeBetween >= 1 ? Math.floor(timeBetween) + "일 전" : timeBetween * 24 >= 1 ? Math.floor(timeBetween * 24) + "시간 전" : Math.floor(timeBetween * 24 * 60) + "분 전")); // 일전 0.7 보다 높으면 시간전  아니면 분전.  분전 오차가 좀 있음..
    }
  }];
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
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
      lineNumber: 164
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\ansej\\\uACF5\uBD80\uD55C\uAC83\uB4E4\\lolMatch\\front\\components\\UserProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ProfileBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "UserProfile__ProfileBox",
  componentId: "jio3qa-0"
})(["display:flex;border:1px solid grey;border-radius:5px;margin-top:20px;margin-bottom:10px;& > img{width:100px;height:100px;}& .level{border:1px solid grey;width:80px;display:flex;justify-content:center;margin-left:5px;background:#FAFAFA;border-radius:3px;box-shadow:1px 1px grey;}"]);

const UserProfile = () => {
  const {
    userName,
    userProfile,
    userLevel,
    userRanks
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ProfileBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("img", {
    src: `http://localhost:3065/icon/${userProfile}.png`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, userName), __jsx("div", {
    className: "level",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "\uB808\uBCA8 : ", userLevel))), __jsx("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
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
          lineNumber: 61
        },
        __self: undefined
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
      title: __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: undefined
      }, match.queueType === "RANKED_FLEX_SR" ? "자유랭크 5x5" : "솔로랭크5x5", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: undefined
      }), match.tier + " " + match.rank, " \uB4F1\uAE09", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: undefined
      }), match.leaguePoints, " points"),
      description: __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: undefined
      }, match.wins + match.losses, "\uC804 ", match.wins, "\uC2B9", " ", match.losses, "\uD328 (", (match.wins / (match.wins + match.losses) * 100).toFixed(2), "%)"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
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
/* harmony import */ var _components_GameInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GameInfo */ "./components/GameInfo.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_RotationChamp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/RotationChamp */ "./components/RotationChamp.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\Users\\ansej\\\uACF5\uBD80\uD55C\uAC83\uB4E4\\lolMatch\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Home = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    userName,
    isLoadedUser,
    gamingCheck,
    gamingCheckMessage
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.user);
  const {
    seeRotationChampion
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.champ);
  const onGamingCheck = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!gamingCheck) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["CHECK_GAMING_REQUEST"],
        data: userName
      });
    } else {
      dispatch({
        // 게이밍체크를 false로 만들자.
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["GAMING_FALSE"]
      });
    }
  }, [userName, gamingCheck]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_InputForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), seeRotationChampion && __jsx(_components_RotationChamp__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), isLoadedUser && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_UserProfile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: onGamingCheck,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "\uC778\uAC8C\uC784 \uC815\uBCF4"), gamingCheck && __jsx(_components_GameInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), gamingCheckMessage, __jsx(_components_UserMatches__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
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
/*! exports provided: initialState, ROTATION_CHAMPION_REQUEST, ROTATION_CHAMPION_SUCCESS, ROTATION_CHAMPION_FAILURE, SEE_ROTATION_REQUEST, SEE_ROTATION_SUCCESS, DONT_SEE_ROTATION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION_CHAMPION_REQUEST", function() { return ROTATION_CHAMPION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION_CHAMPION_SUCCESS", function() { return ROTATION_CHAMPION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION_CHAMPION_FAILURE", function() { return ROTATION_CHAMPION_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEE_ROTATION_REQUEST", function() { return SEE_ROTATION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEE_ROTATION_SUCCESS", function() { return SEE_ROTATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DONT_SEE_ROTATION", function() { return DONT_SEE_ROTATION; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  seeRotationChampion: true,
  rotationChampion: [],
  rotationError: ""
};
const ROTATION_CHAMPION_REQUEST = "ROTATION_CHAMPION_REQUEST";
const ROTATION_CHAMPION_SUCCESS = "ROTATION_CHAMPION_SUCCESS";
const ROTATION_CHAMPION_FAILURE = "ROTATION_CHAMPION_FAILURE";
const SEE_ROTATION_REQUEST = "SEE_ROTATION_REQUEST";
const SEE_ROTATION_SUCCESS = "SEE_ROTATION_REQUEST";
const DONT_SEE_ROTATION = "DONT_SEE_ROTATION";

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

      case SEE_ROTATION_REQUEST:
        {
          break;
        }

      case SEE_ROTATION_SUCCESS:
        {
          draft.seeRotationChampion = true;
        }

      case DONT_SEE_ROTATION:
        {
          draft.seeRotationChampion = false;
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
/*! exports provided: initialState, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE, CHECK_GAMING_REQUEST, CHECK_GAMING_SUCCESS, CHECK_GAMING_FAILURE, GAMING_FALSE, INIT_PROFILE, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAMING_FALSE", function() { return GAMING_FALSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_PROFILE", function() { return INIT_PROFILE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  userName: "",
  userLevel: 0,
  userProfile: "",
  userRanks: [],
  userMatches: [],
  detailInfos: [],
  isLoadedUser: false,
  gamingCheck: false,
  gameInfo: {},
  gamingCheckMessage: ""
};
const SEARCH_USER_REQUEST = "SEARCH_USER_REQUEST";
const SEARCH_USER_SUCCESS = "SEARCH_USER_SUCCESS";
const SEARCH_USER_FAILURE = "SEARCH_USER_FAILURE";
const CHECK_GAMING_REQUEST = "CHECK_GAMING_REQUEST";
const CHECK_GAMING_SUCCESS = "CHECK_GAMING_SUCCESS";
const CHECK_GAMING_FAILURE = "CHECK_GAMING_FAILURE";
const GAMING_FALSE = "GAMING_FALSE";
const INIT_PROFILE = "INIT_PROFILE";

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case INIT_PROFILE:
        {
          draft.userName = "";
          draft.userLevel = 0;
          draft.userProfile = "";
          draft.userRanks = [];
          draft.userMatches = [];
          draft.detailInfos = [];
          draft.isLoadedUser = false;
          draft.gamingCheck = false;
          draft.gameInfo = {};
          draft.gamingCheckMessage = "";
        }

      case SEARCH_USER_REQUEST:
        {
          draft.userRanks = [];
          draft.userLevel = 0;
          draft.userProfile = "";
          draft.userMatches = [];
          draft.detailsInfos = [];
          draft.isLoadedUser = false;
          draft.gamingCheckMessage = "";
          break;
        }

      case SEARCH_USER_SUCCESS:
        {
          draft.userName = action.data.name;
          draft.userLevel = action.data.summonerLevel;
          draft.userProfile = action.data.profileIcon;
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
          draft.gamingCheckMessage = "";
          break;
        }

      case CHECK_GAMING_SUCCESS:
        {
          draft.gamingCheck = true;
          draft.gameInfo = action.data;
          break;
        }

      case CHECK_GAMING_FAILURE:
        {
          draft.gamingCheck = false;
          draft.gamingCheckMessage = "게임을 진행중이지 않습니다.";
          break;
        }

      case GAMING_FALSE:
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

/***/ 4:
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