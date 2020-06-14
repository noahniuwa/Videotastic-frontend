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

/***/ "./pages/adduser.js":
/*!**************************!*\
  !*** ./pages/adduser.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hapi/joi */ "@hapi/joi");
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/noahmaizels/Desktop/Videotastic/frontend/pages/adduser.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function AddUser() {
  const {
    0: newUserInfo,
    1: setNewUserInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: currentUser,
    1: setCurrentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    username: null
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    node_fetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3000/currentuser', {
      credentials: 'include',
      headers: {
        'Origin': 'http://localhost:3001/'
      }
    }).then(res => {
      return res.json();
    }).then(json => {
      setCurrentUser({
        username: json.username
      });
      if (json.username) next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const handleSubmit = evt => {
    evt.preventDefault();
    const schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.object({
      id: _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.allow(null),
      user_name: _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.string().alphanum().min(3).max(30).required(),
      first_name: _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.string().alphanum().min(3).max(30).required(),
      last_name: _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.string().alphanum().min(3).max(30).required(),
      birth_date: _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.date().required(),
      password: _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      repeat_password: _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.string().required().valid(_hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.ref('password')),
      email: _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.string().email({
        minDomainSegments: 2,
        tlds: {
          allow: false
        }
      }).required()
    });
    let {
      value,
      error
    } = schema.validate(newUserInfo, {
      abortEarly: false
    });
    if (error) alert(error.message);else {
      node_fetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3000/users', {
        method: 'POST',
        // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        // no-cors, *cors, same-origin
        cache: 'no-cache',
        // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include',
        // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // 'Origin': 'http://localhost:3001/'
          // 'Content-Type': 'application/x-www-form-urlencoded',

        },
        redirect: 'follow',
        // manual, *follow, error
        referrerPolicy: 'no-referrer',
        // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(newUserInfo) // body data type must match "Content-Type" header

      }).then(res => res.json()).then(body => {
        console.log(body);
        alert('User registered, taking you to Login page...');
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
      });
      let resetInfo = {};
      Object.keys(newUserInfo).forEach(key => resetInfo[key] = '');
      setNewUserInfo(resetInfo);
    }
  };

  const handleFormChange = evt => {
    let newFormInfo = Object.assign({}, newUserInfo);
    newFormInfo[evt.target.name] = evt.target.value;
    setNewUserInfo(newFormInfo);
  };

  const handleLogOut = () => {
    document.cookie = "jwt=";
    setCurrentUser({
      username: null
    });
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 3
    }
  }, "Register a new user:", __jsx("form", {
    onSubmit: handleSubmit,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, __jsx("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, "Username:", __jsx("input", {
    onChange: handleFormChange,
    type: "text",
    name: "user_name",
    value: newUserInfo.user_name,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  })), __jsx("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, "First name:", __jsx("input", {
    onChange: handleFormChange,
    type: "text",
    name: "first_name",
    value: newUserInfo.first_name,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  })), __jsx("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, "Last name:", __jsx("input", {
    onChange: handleFormChange,
    type: "text",
    name: "last_name",
    value: newUserInfo.last_name,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  })), __jsx("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, "Birth date:", __jsx("input", {
    onChange: handleFormChange,
    type: "date",
    name: "birth_date",
    value: newUserInfo.birth_date,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  })), __jsx("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, "Email:", __jsx("input", {
    onChange: handleFormChange,
    type: "text",
    name: "email",
    value: newUserInfo.email,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  })), __jsx("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, "Password:", __jsx("input", {
    onChange: handleFormChange,
    type: "password",
    name: "password",
    value: newUserInfo.password,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  })), __jsx("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, "Repeat password:", __jsx("input", {
    onChange: handleFormChange,
    type: "password",
    name: "repeat_password",
    value: newUserInfo.repeat_password,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  })), __jsx("input", {
    type: "submit",
    value: "Register",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  })), __jsx("button", {
    onClick: handleLogOut,
    type: "button",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["513730533", [currentUser.username ? 'inline' : 'none']]]) + " " + "showWhenUser",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, "Log out"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "513730533",
    dynamic: [currentUser.username ? 'inline' : 'none'],
    __self: this
  }, `.showWhenUser.__jsx-style-dynamic-selector{display:${currentUser.username ? 'inline' : 'none'};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL1ZpZGVvdGFzdGljL2Zyb250ZW5kL3BhZ2VzL2FkZHVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0lnQixBQUlNLHFDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL1ZpZGVvdGFzdGljL2Zyb250ZW5kL3BhZ2VzL2FkZHVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcbmltcG9ydCBKb2kgZnJvbSAnQGhhcGkvam9pJ1xuXG5mdW5jdGlvbiBBZGRVc2VyKCkge1xuICBcbiAgY29uc3QgW25ld1VzZXJJbmZvLCBzZXROZXdVc2VySW5mb10gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSh7dXNlcm5hbWU6IG51bGx9KVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2N1cnJlbnR1c2VyJywge1xuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJywgXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdPcmlnaW4nOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxLydcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4ge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgc2V0Q3VycmVudFVzZXIoe3VzZXJuYW1lOiBqc29uLnVzZXJuYW1lfSlcbiAgICAgIGlmIChqc29uLnVzZXJuYW1lKSBSb3V0ZXIucHVzaCgnLycpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KSAgICBcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KHtcbiAgICAgIGlkOiBKb2kuYWxsb3cobnVsbCksXG4gICAgICB1c2VyX25hbWU6IEpvaS5zdHJpbmcoKVxuICAgICAgICAuYWxwaGFudW0oKVxuICAgICAgICAubWluKDMpXG4gICAgICAgIC5tYXgoMzApXG4gICAgICAgIC5yZXF1aXJlZCgpLFxuICAgICAgZmlyc3RfbmFtZTogSm9pLnN0cmluZygpXG4gICAgICAgIC5hbHBoYW51bSgpXG4gICAgICAgIC5taW4oMylcbiAgICAgICAgLm1heCgzMClcbiAgICAgICAgLnJlcXVpcmVkKCksXG4gICAgICBsYXN0X25hbWU6IEpvaS5zdHJpbmcoKVxuICAgICAgICAuYWxwaGFudW0oKVxuICAgICAgICAubWluKDMpXG4gICAgICAgIC5tYXgoMzApXG4gICAgICAgIC5yZXF1aXJlZCgpLFxuICAgICAgYmlydGhfZGF0ZTogSm9pLmRhdGUoKVxuICAgICAgICAucmVxdWlyZWQoKSxcbiAgICAgIHBhc3N3b3JkOiBKb2kuc3RyaW5nKClcbiAgICAgICAgLnBhdHRlcm4obmV3IFJlZ0V4cCgnXlthLXpBLVowLTldezMsMzB9JCcpKVxuICAgICAgICAucmVxdWlyZWQoKSxcbiAgICAgIHJlcGVhdF9wYXNzd29yZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkudmFsaWQoSm9pLnJlZigncGFzc3dvcmQnKSksXG4gICAgICBlbWFpbDogSm9pLnN0cmluZygpXG4gICAgICAgIC5lbWFpbCh7IG1pbkRvbWFpblNlZ21lbnRzOiAyLCB0bGRzOiB7YWxsb3c6IGZhbHNlfSB9KVxuICAgICAgICAucmVxdWlyZWQoKSxcbiAgICB9KVxuICAgIGxldCB7dmFsdWUsIGVycm9yfSA9IHNjaGVtYS52YWxpZGF0ZShuZXdVc2VySW5mbywge2Fib3J0RWFybHk6IGZhbHNlfSlcbiAgICBcbiAgICBpZiAoZXJyb3IpIGFsZXJ0KGVycm9yLm1lc3NhZ2UpXG4gICAgZWxzZSB7XG4gICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsIC8vIGluY2x1ZGUsICpzYW1lLW9yaWdpbiwgb21pdFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIC8vICdPcmlnaW4nOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxLydcbiAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0OiAnZm9sbG93JywgLy8gbWFudWFsLCAqZm9sbG93LCBlcnJvclxuICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsIC8vIG5vLXJlZmVycmVyLCAqbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUsIG9yaWdpbiwgb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCBzYW1lLW9yaWdpbiwgc3RyaWN0LW9yaWdpbiwgc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgdW5zYWZlLXVybFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VXNlckluZm8pIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGJvZHkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYm9keSlcbiAgICAgIGFsZXJ0KCdVc2VyIHJlZ2lzdGVyZWQsIHRha2luZyB5b3UgdG8gTG9naW4gcGFnZS4uLicpXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgfSlcbiAgICBsZXQgcmVzZXRJbmZvID0ge31cbiAgICBPYmplY3Qua2V5cyhuZXdVc2VySW5mbykuZm9yRWFjaChrZXkgPT4gcmVzZXRJbmZvW2tleV0gPSAnJylcbiAgICBzZXROZXdVc2VySW5mbyhyZXNldEluZm8pXG4gICAgfVxuICB9XG4gIFxuICBjb25zdCBoYW5kbGVGb3JtQ2hhbmdlID0gKGV2dCkgPT4ge1xuICAgIGxldCBuZXdGb3JtSW5mbyA9IE9iamVjdC5hc3NpZ24oe30sIG5ld1VzZXJJbmZvKVxuICAgIG5ld0Zvcm1JbmZvW2V2dC50YXJnZXQubmFtZV0gPSBldnQudGFyZ2V0LnZhbHVlXG4gICAgc2V0TmV3VXNlckluZm8obmV3Rm9ybUluZm8pXG4gIH1cblxuICBjb25zdCBoYW5kbGVMb2dPdXQgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuY29va2llID0gXCJqd3Q9XCJcbiAgICBzZXRDdXJyZW50VXNlcih7dXNlcm5hbWU6IG51bGx9KVxuICB9XG4gIHJldHVybiAoXG4gIDxkaXY+XG4gICAgUmVnaXN0ZXIgYSBuZXcgdXNlcjpcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgVXNlcm5hbWU6IFxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJfbmFtZVwiIHZhbHVlPXtuZXdVc2VySW5mby51c2VyX25hbWV9Lz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIEZpcnN0IG5hbWU6IFxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0X25hbWVcIiB2YWx1ZT17bmV3VXNlckluZm8uZmlyc3RfbmFtZX0vPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgTGFzdCBuYW1lOiBcbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0X25hbWVcIiB2YWx1ZT17bmV3VXNlckluZm8ubGFzdF9uYW1lfS8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGxhYmVsPlxuICAgICAgICBCaXJ0aCBkYXRlOiBcbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfSB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJiaXJ0aF9kYXRlXCIgdmFsdWU9e25ld1VzZXJJbmZvLmJpcnRoX2RhdGV9Lz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIEVtYWlsOiBcbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtuZXdVc2VySW5mby5lbWFpbH0vPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgUGFzc3dvcmQ6IFxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2V9IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtuZXdVc2VySW5mby5wYXNzd29yZH0gLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIFJlcGVhdCBwYXNzd29yZDogXG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZX0gdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInJlcGVhdF9wYXNzd29yZFwiIHZhbHVlPXtuZXdVc2VySW5mby5yZXBlYXRfcGFzc3dvcmR9IC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlJlZ2lzdGVyXCIgLz5cbiAgICA8L2Zvcm0+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaG93V2hlblVzZXJcIiBvbkNsaWNrPXtoYW5kbGVMb2dPdXR9IHR5cGU9XCJidXR0b25cIj5Mb2cgb3V0PC9idXR0b24+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNob3dXaGVuVXNlciB7XG4gICAgICAgIGRpc3BsYXk6ICR7Y3VycmVudFVzZXIudXNlcm5hbWUgPyAnaW5saW5lJyA6ICdub25lJ31cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFVzZXIiXX0= */
/*@ sourceURL=/Users/noahmaizels/Desktop/Videotastic/frontend/pages/adduser.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (AddUser);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/adduser.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/noahmaizels/Desktop/Videotastic/frontend/pages/adduser.js */"./pages/adduser.js");


/***/ }),

/***/ "@hapi/joi":
/*!****************************!*\
  !*** external "@hapi/joi" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@hapi/joi");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=adduser.js.map