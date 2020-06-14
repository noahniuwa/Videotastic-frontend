(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/adduser.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@hapi/joi/dist/joi-browser.min.js":
/*!********************************************************!*\
  !*** ./node_modules/@hapi/joi/dist/joi-browser.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";const s=r(12);e.exports=function(e,...t){if(!e){if(1===t.length&&t[0]instanceof Error)throw t[0];throw new s(t)}}},function(e,t,r){"use strict";const s=r(0),n=r(12),o=r(29);let a,i;const l={isoDate:/^(?:[-+]\d{2})?(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/};t.version=o.version,t.defaults={abortEarly:!0,allowUnknown:!1,cache:!0,context:null,convert:!0,dateFormat:"iso",errors:{escapeHtml:!1,label:"path",language:null,render:!0,stack:!1,wrap:{label:'"',array:"[]"}},externals:!0,messages:{},nonEnumerables:!1,noDefaults:!1,presence:"optional",skipFunctions:!1,stripUnknown:!1,warnings:!1},t.symbols={any:Symbol.for("@hapi/joi/schema"),arraySingle:Symbol("arraySingle"),deepDefault:Symbol("deepDefault"),literal:Symbol("literal"),override:Symbol("override"),prefs:Symbol("prefs"),ref:Symbol("ref"),values:Symbol("values"),template:Symbol("template")},t.assertOptions=function(e,t,r="Options"){s(e&&"object"==typeof e&&!Array.isArray(e),"Options must be of type object");const n=Object.keys(e).filter(e=>!t.includes(e));s(0===n.length,"".concat(r," contain unknown keys: ").concat(n))},t.checkPreferences=function(e){i=i||r(16);const t=i.preferences.validate(e);if(t.error)throw new n([t.error.details[0].message])},t.compare=function(e,t,r){switch(r){case"=":return e===t;case">":return e>t;case"<":return e<t;case">=":return e>=t;case"<=":return e<=t}},t.default=function(e,t){return void 0===e?t:e},t.isIsoDate=function(e){return l.isoDate.test(e)},t.isNumber=function(e){return"number"==typeof e&&!isNaN(e)},t.isResolvable=function(e){return!!e&&(e[t.symbols.ref]||e[t.symbols.template])},t.isSchema=function(e,r={}){const n=e&&e[t.symbols.any];return!!n&&(s(r.legacy||n.version===t.version,"Cannot mix different versions of joi schemas"),!0)},t.isValues=function(e){return e[t.symbols.values]},t.limit=function(e){return Number.isSafeInteger(e)&&e>=0},t.preferences=function(e,s){a=a||r(9),e=e||{},s=s||{};const n=Object.assign({},e,s);return s.errors&&e.errors&&(n.errors=Object.assign({},e.errors,s.errors),n.errors.wrap=Object.assign({},e.errors.wrap,s.errors.wrap)),s.messages&&(n.messages=a.compile(s.messages,e.messages)),delete n[t.symbols.prefs],n},t.tryWithPath=function(e,t,r={}){try{return e()}catch(e){throw void 0!==e.path?e.path=t+"."+e.path:e.path=t,r.append&&(e.message="".concat(e.message," (").concat(e.path,")")),e}},t.validateArg=function(e,r,{assert:s,message:n}){if(t.isSchema(s)){const t=s.validate(e);if(!t.error)return;return t.error.message}if(!s(e))return r?"".concat(r," ").concat(n):n},t.verifyFlat=function(e,t){for(const r of e)s(!Array.isArray(r),"Method no longer accepts array arguments:",t)}},function(e,t,r){"use strict";const s=r(6),n=r(13),o=r(14),a={needsProtoHack:new Set([n.set,n.map,n.weakSet,n.weakMap])};e.exports=a.clone=function(e,t={},r=null){if("object"!=typeof e||null===e)return e;let s=a.clone,i=r;if(t.shallow){if(!0!==t.shallow)return a.cloneWithShallow(e,t);s=e=>e}else if(i){const t=i.get(e);if(t)return t}else i=new Map;const l=n.getInternalProto(e);if(l===n.buffer)return!1;if(l===n.date)return new Date(e.getTime());if(l===n.regex)return new RegExp(e);const c=a.base(e,l,t);if(c===e)return e;if(i&&i.set(e,c),l===n.set)for(const r of e)c.add(s(r,t,i));else if(l===n.map)for(const[r,n]of e)c.set(r,s(n,t,i));const u=o.keys(e,t);for(const r of u){if("__proto__"===r)continue;if(l===n.array&&"length"===r){c.length=e.length;continue}const o=Object.getOwnPropertyDescriptor(e,r);o?o.get||o.set?Object.defineProperty(c,r,o):o.enumerable?c[r]=s(e[r],t,i):Object.defineProperty(c,r,{enumerable:!1,writable:!0,configurable:!0,value:s(e[r],t,i)}):Object.defineProperty(c,r,{enumerable:!0,writable:!0,configurable:!0,value:s(e[r],t,i)})}return c},a.cloneWithShallow=function(e,t){const r=t.shallow;(t=Object.assign({},t)).shallow=!1;const n=new Map;for(const t of r){const r=s(e,t);"object"!=typeof r&&"function"!=typeof r||n.set(r,r)}return a.clone(e,t,n)},a.base=function(e,t,r){if(!1===r.prototype)return a.needsProtoHack.has(t)?new t.constructor:t===n.array?[]:{};const s=Object.getPrototypeOf(e);if(s&&s.isImmutable)return e;if(t===n.array){const e=[];return s!==t&&Object.setPrototypeOf(e,s),e}if(a.needsProtoHack.has(t)){const e=new s.constructor;return s!==t&&Object.setPrototypeOf(e,s),e}return Object.create(s)}},function(e,t,r){"use strict";const s=r(0),n=r(34),o=r(1),a=r(9);e.exports=n.extend({type:"any",flags:{only:{default:!1}},terms:{alterations:{init:null},examples:{init:null},externals:{init:null},metas:{init:[]},notes:{init:[]},shared:{init:null},tags:{init:[]},whens:{init:null}},rules:{custom:{method(e,t){return s("function"==typeof e,"Method must be a function"),s(void 0===t||t&&"string"==typeof t,"Description must be a non-empty string"),this.$_addRule({name:"custom",args:{method:e,description:t}})},validate(e,t,{method:r}){try{return r(e,t)}catch(e){return t.error("any.custom",{error:e})}},args:["method","description"],multi:!0},messages:{method(e){return this.prefs({messages:e})}},shared:{method(e){s(o.isSchema(e)&&e._flags.id,"Schema must be a schema with an id");const t=this.clone();return t.$_terms.shared=t.$_terms.shared||[],t.$_terms.shared.push(e),t.$_mutateRegister(e),t}},warning:{method(e,t){return s(e&&"string"==typeof e,"Invalid warning code"),this.$_addRule({name:"warning",args:{code:e,local:t},warn:!0})},validate:(e,t,{code:r,local:s})=>t.error(r,s),args:["code","local"],multi:!0}},modifiers:{keep(e,t=!0){e.keep=t},message(e,t){e.message=a.compile(t)},warn(e,t=!0){e.warn=t}},manifest:{build(e,t){for(const r in t){const s=t[r];if(["examples","externals","metas","notes","tags"].includes(r))for(const t of s)e=e[r.slice(0,-1)](t);else if("alterations"!==r)if("whens"!==r){if("shared"===r)for(const t of s)e=e.shared(t)}else for(const t of s){const{ref:r,is:s,not:n,then:o,otherwise:a,concat:i}=t;e=i?e.concat(i):r?e.when(r,{is:s,not:n,then:o,otherwise:a,switch:t.switch,break:t.break}):e.when(s,{then:o,otherwise:a,break:t.break})}else{const t={};for(const{target:e,adjuster:r}of s)t[e]=r;e=e.alter(t)}}return e}},messages:{"any.custom":"{{#label}} failed custom validation because {{#error.message}}","any.default":"{{#label}} threw an error when running default method","any.failover":"{{#label}} threw an error when running failover method","any.invalid":"{{#label}} contains an invalid value","any.only":'{{#label}} must be {if(#valids.length == 1, "", "one of ")}{{#valids}}',"any.ref":'{{#label}} {{#arg}} references "{{#ref}}" which {{#reason}}',"any.required":"{{#label}} is required","any.unknown":"{{#label}} is not allowed"}})},function(e,t,r){"use strict";const s=r(32),n=r(1),o=r(7);t.Report=class{constructor(e,r,s,n,o,a,i){if(this.code=e,this.flags=n,this.messages=o,this.path=a.path,this.prefs=i,this.state=a,this.value=r,this.message=null,this.template=null,this.local=s||{},this.local.label=t.label(this.flags,this.state,this.prefs,this.messages),void 0===this.value||this.local.hasOwnProperty("value")||(this.local.value=this.value),this.path.length){const e=this.path[this.path.length-1];"object"!=typeof e&&(this.local.key=e)}}_setTemplate(e){if(this.template=e,!this.flags.label&&0===this.path.length){const e=this._template(this.template,"root");e&&(this.local.label=e)}}toString(){if(this.message)return this.message;const e=this.code;if(!this.prefs.errors.render)return this.code;const t=this._template(this.template)||this._template(this.prefs.messages)||this._template(this.messages);return void 0===t?'Error code "'.concat(e,'" is not defined, your custom type is missing the correct messages definition'):(this.message=t.render(this.value,this.state,this.prefs,this.local,{errors:this.prefs.errors,messages:[this.prefs.messages,this.messages]}),this.prefs.errors.label||(this.message=this.message.replace(/^"" /,"").trim()),this.message)}_template(e,r){return t.template(this.value,e,r||this.code,this.state,this.prefs)}},t.path=function(e){let t="";for(const r of e)"object"!=typeof r&&("string"==typeof r?(t&&(t+="."),t+=r):t+="[".concat(r,"]"));return t},t.template=function(e,t,r,s,a){if(!t)return;if(o.isTemplate(t))return"root"!==r?t:null;let i=a.errors.language;return n.isResolvable(i)&&(i=i.resolve(e,s,a)),i&&t[i]&&void 0!==t[i][r]?t[i][r]:t[r]},t.label=function(e,r,s,n){if(e.label)return e.label;if(!s.errors.label)return"";let o=r.path;"key"===s.errors.label&&r.path.length>1&&(o=r.path.slice(-1));const a=t.path(o);return a||(t.template(null,s.messages,"root",r,s)||n&&t.template(null,n,"root",r,s)||"value")},t.process=function(e,r,s){if(!e)return null;const{override:n,message:o,details:a}=t.details(e);if(n)return n;if(s.errors.stack)return new t.ValidationError(o,a,r);const i=Error.stackTraceLimit;Error.stackTraceLimit=0;const l=new t.ValidationError(o,a,r);return Error.stackTraceLimit=i,l},t.details=function(e,t={}){let r=[];const s=[];for(const n of e){if(n instanceof Error){if(!1!==t.override)return{override:n};const e=n.toString();r.push(e),s.push({message:e,type:"override",context:{error:n}});continue}const e=n.toString();r.push(e),s.push({message:e,path:n.path.filter(e=>"object"!=typeof e),type:n.code,context:n.local})}return r.length>1&&(r=[...new Set(r)]),{message:r.join(". "),details:s}},t.ValidationError=class extends Error{constructor(e,t,r){super(e),this._original=r,this.details=t}static isError(e){return e instanceof t.ValidationError}},t.ValidationError.prototype.isJoi=!0,t.ValidationError.prototype.name="ValidationError",t.ValidationError.prototype.annotate=s.error},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(6),a=r(1);let i;const l={symbol:Symbol("ref"),defaults:{adjust:null,in:!1,iterables:null,map:null,separator:".",type:"value"}};t.create=function(e,t={}){s("string"==typeof e,"Invalid reference key:",e),a.assertOptions(t,["adjust","ancestor","in","iterables","map","prefix","separator"]),s(!t.prefix||"object"==typeof t.prefix,"options.prefix must be of type object");const r=Object.assign({},l.defaults,t);delete r.prefix;const n=r.separator,o=l.context(e,n,t.prefix);if(r.type=o.type,e=o.key,"value"===r.type)if(o.root&&(s(!n||e[0]!==n,"Cannot specify relative path with root prefix"),r.ancestor="root",e||(e=null)),n&&n===e)e=null,r.ancestor=0;else if(void 0!==r.ancestor)s(!n||!e||e[0]!==n,"Cannot combine prefix with ancestor option");else{const[t,s]=l.ancestor(e,n);s&&""===(e=e.slice(s))&&(e=null),r.ancestor=t}return r.path=n?null===e?[]:e.split(n):[e],new l.Ref(r)},t.in=function(e,r={}){return t.create(e,Object.assign({},r,{in:!0}))},t.isRef=function(e){return!!e&&!!e[a.symbols.ref]},l.Ref=class{constructor(e){s("object"==typeof e,"Invalid reference construction"),a.assertOptions(e,["adjust","ancestor","in","iterables","map","path","separator","type","depth","key","root","display"]),s([!1,void 0].includes(e.separator)||"string"==typeof e.separator&&1===e.separator.length,"Invalid separator"),s(!e.adjust||"function"==typeof e.adjust,"options.adjust must be a function"),s(!e.map||Array.isArray(e.map),"options.map must be an array"),s(!e.map||!e.adjust,"Cannot set both map and adjust options"),Object.assign(this,l.defaults,e),s("value"===this.type||void 0===this.ancestor,"Non-value references cannot reference ancestors"),Array.isArray(this.map)&&(this.map=new Map(this.map)),this.depth=this.path.length,this.key=this.path.length?this.path.join(this.separator):null,this.root=this.path[0],this.updateDisplay()}resolve(e,t,r,n,o={}){return s(!this.in||o.in,"Invalid in() reference usage"),"global"===this.type?this._resolve(r.context,t,o):"local"===this.type?this._resolve(n,t,o):this.ancestor?"root"===this.ancestor?this._resolve(t.ancestors[t.ancestors.length-1],t,o):(s(this.ancestor<=t.ancestors.length,"Invalid reference exceeds the schema root:",this.display),this._resolve(t.ancestors[this.ancestor-1],t,o)):this._resolve(e,t,o)}_resolve(e,t,r){let s;if("value"===this.type&&t.mainstay.shadow&&!1!==r.shadow&&(s=t.mainstay.shadow.get(this.absolute(t))),void 0===s&&(s=o(e,this.path,{iterables:this.iterables,functions:!0})),this.adjust&&(s=this.adjust(s)),this.map){const e=this.map.get(s);void 0!==e&&(s=e)}return t.mainstay&&t.mainstay.tracer.resolve(t,this,s),s}toString(){return this.display}absolute(e){return[...e.path.slice(0,-this.ancestor),...this.path]}clone(){return new l.Ref(this)}describe(){const e={path:this.path};"value"!==this.type&&(e.type=this.type),"."!==this.separator&&(e.separator=this.separator),"value"===this.type&&1!==this.ancestor&&(e.ancestor=this.ancestor),this.map&&(e.map=[...this.map]);for(const t of["adjust","iterables"])null!==this[t]&&(e[t]=this[t]);return!1!==this.in&&(e.in=!0),{ref:e}}updateDisplay(){const e=null!==this.key?this.key:"";if("value"!==this.type)return void(this.display="ref:".concat(this.type,":").concat(e));if(!this.separator)return void(this.display="ref:".concat(e));if(!this.ancestor)return void(this.display="ref:".concat(this.separator).concat(e));if("root"===this.ancestor)return void(this.display="ref:root:".concat(e));if(1===this.ancestor)return void(this.display="ref:".concat(e||".."));const t=new Array(this.ancestor+1).fill(this.separator).join("");this.display="ref:".concat(t).concat(e||"")}},l.Ref.prototype[a.symbols.ref]=!0,t.build=function(e){return"value"===(e=Object.assign({},l.defaults,e)).type&&void 0===e.ancestor&&(e.ancestor=1),new l.Ref(e)},l.context=function(e,t,r={}){if(e=e.trim(),r){const s=void 0===r.global?"$":r.global;if(s!==t&&e.startsWith(s))return{key:e.slice(s.length),type:"global"};const n=void 0===r.local?"#":r.local;if(n!==t&&e.startsWith(n))return{key:e.slice(n.length),type:"local"};const o=void 0===r.root?"/":r.root;if(o!==t&&e.startsWith(o))return{key:e.slice(o.length),type:"value",root:!0}}return{key:e,type:"value"}},l.ancestor=function(e,t){if(!t)return[1,0];if(e[0]!==t)return[1,0];if(e[1]!==t)return[0,1];let r=2;for(;e[r]===t;)++r;return[r-1,r]},t.toSibling=0,t.toParent=1,t.Manager=class{constructor(){this.refs=[]}register(e,s){if(e)if(s=void 0===s?t.toParent:s,Array.isArray(e))for(const t of e)this.register(t,s);else if(a.isSchema(e))for(const t of e._refs.refs)t.ancestor-s>=0&&this.refs.push({ancestor:t.ancestor-s,root:t.root});else t.isRef(e)&&"value"===e.type&&e.ancestor-s>=0&&this.refs.push({ancestor:e.ancestor-s,root:e.root}),i=i||r(7),i.isTemplate(e)&&this.register(e.refs(),s)}get length(){return this.refs.length}clone(){const e=new t.Manager;return e.refs=n(this.refs),e}reset(){this.refs=[]}roots(){return this.refs.filter(e=>!e.ancestor).map(e=>e.root)}}},function(e,t,r){"use strict";const s=r(0),n={};e.exports=function(e,t,r){if(!1===t||null==t)return e;"string"==typeof(r=r||{})&&(r={separator:r});const o=Array.isArray(t);s(!o||!r.separator,"Separator option no valid for array-based chain");const a=o?t:t.split(r.separator||".");let i=e;for(let e=0;e<a.length;++e){let o=a[e];const l=r.iterables&&n.iterables(i);if(Array.isArray(i)||"set"===l){const e=Number(o);Number.isInteger(e)&&(o=e<0?i.length+e:e)}if(!i||"function"==typeof i&&!1===r.functions||!l&&void 0===i[o]){s(!r.strict||e+1===a.length,"Missing segment",o,"in reach path ",t),s("object"==typeof i||!0===r.functions||"function"!=typeof i,"Invalid segment",o,"in reach path ",t),i=r.default;break}i=l?"set"===l?[...i][o]:i.get(o):i[o]}return i},n.iterables=function(e){return e instanceof Set?"set":e instanceof Map?"map":void 0}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(30),a=r(31),i=r(1),l=r(4),c=r(5),u={symbol:Symbol("template"),opens:new Array(1e3).join("\0"),closes:new Array(1e3).join(""),dateFormat:{date:Date.prototype.toDateString,iso:Date.prototype.toISOString,string:Date.prototype.toString,time:Date.prototype.toTimeString,utc:Date.prototype.toUTCString}};e.exports=u.Template=class{constructor(e,t){s("string"==typeof e,"Template source must be a string"),s(!e.includes("\0")&&!e.includes(""),"Template source cannot contain reserved control characters"),this.source=e,this.rendered=e,this._template=null,this._settings=n(t),this._parse()}_parse(){if(!this.source.includes("{"))return;const e=u.encode(this.source),t=u.split(e);let r=!1;const s=[],n=t.shift();n&&s.push(n);for(const e of t){const t="{"!==e[0],n=t?"}":"}}",o=e.indexOf(n);if(-1===o||"{"===e[1]){s.push("{".concat(u.decode(e)));continue}const a=e.slice(t?0:1,o),i=this._ref(u.decode(a),t);s.push(i),"string"!=typeof i&&(r=!0);const l=e.slice(o+n.length);l&&s.push(u.decode(l))}r?this._template=s:this.rendered=s.join("")}static date(e,t){return u.dateFormat[t.dateFormat].call(e)}describe(e={}){if(!this._settings&&e.compact)return this.source;const t={template:this.source};return this._settings&&(t.options=this._settings),t}static build(e){return new u.Template(e.template,e.options)}isDynamic(){return!!this._template}static isTemplate(e){return!!e&&!!e[i.symbols.template]}refs(){if(!this._template)return;const e=[];for(const t of this._template)"string"!=typeof t&&e.push(...t.refs);return e}resolve(e,t,r,s){return this._template&&1===this._template.length?this._part(this._template[0],e,t,r,s,{}):this.render(e,t,r,s)}_part(e,...t){return e.ref?e.ref.resolve(...t):e.formula.evaluate(t)}render(e,t,r,s,n={}){if(!this.isDynamic())return this.rendered;const a=[];for(const i of this._template)if("string"==typeof i)a.push(i);else{const l=this._part(i,e,t,r,s,n),c=u.stringify(l,r,n.errors);if(void 0!==c){const e=i.raw||!1===(n.errors&&n.errors.escapeHtml)?c:o(c),t=i.ref&&"local"===i.ref.type&&"label"===i.ref.key&&r.errors.wrap.label;a.push(u.wrap(e,t))}}return a.join("")}_ref(e,t){const r=[],s=e=>{const t=c.create(e,this._settings);return r.push(t),e=>t.resolve(...e)};try{var n=new a.Parser(e,{reference:s,functions:u.functions,constants:u.constants})}catch(t){throw t.message='Invalid template variable "'.concat(e,'" fails due to: ').concat(t.message),t}return n.single?"reference"===n.single.type?{ref:r[0],raw:t,refs:r}:u.stringify(n.single.value):{formula:n,raw:t,refs:r}}toString(){return this.source}},u.Template.prototype[i.symbols.template]=!0,u.Template.prototype.isImmutable=!0,u.encode=function(e){return e.replace(/\\(\{+)/g,(e,t)=>u.opens.slice(0,t.length)).replace(/\\(\}+)/g,(e,t)=>u.closes.slice(0,t.length))},u.decode=function(e){return e.replace(/\u0000/g,"{").replace(/\u0001/g,"}")},u.split=function(e){const t=[];let r="";for(let s=0;s<e.length;++s){const n=e[s];if("{"===n){let n="";for(;s+1<e.length&&"{"===e[s+1];)n+="{",++s;t.push(r),r=n}else r+=n}return t.push(r),t},u.wrap=function(e,t){return t?1===t.length?"".concat(t).concat(e).concat(t):"".concat(t[0]).concat(e).concat(t[1]):e},u.stringify=function(e,t,r){const s=typeof e;if(null===e)return"null";if("string"===s)return e;if("number"===s||"function"===s||"symbol"===s)return e.toString();if("object"!==s)return JSON.stringify(e);if(e instanceof Date)return u.Template.date(e,t);if(e instanceof Map){const t=[];for(const[r,s]of e.entries())t.push("".concat(r.toString()," -> ").concat(s.toString()));e=t}if(!Array.isArray(e))return e.toString();let n="";for(const s of e)n=n+(n.length?", ":"")+u.stringify(s,t,r);return u.wrap(n,t.errors.wrap.array)},u.constants={true:!0,false:!1,null:null,second:1e3,minute:6e4,hour:36e5,day:864e5},u.functions={if:(e,t,r)=>e?t:r,msg(e){const[t,r,s,n,o]=this,a=o.messages;if(!a)return"";const i=l.template(t,a[0],e,r,s)||l.template(t,a[1],e,r,s);return i?i.render(t,r,s,n,o):""},number:e=>"number"==typeof e?e:"string"==typeof e?parseFloat(e):"boolean"==typeof e?e?1:0:e instanceof Date?e.getTime():null}},function(e,t,r){"use strict";const s=r(0),n=r(1),o=r(5),a={};t.schema=function(e,t,r={}){n.assertOptions(r,["appendPath","override"]);try{return a.schema(e,t,r)}catch(e){throw r.appendPath&&void 0!==e.path&&(e.message="".concat(e.message," (").concat(e.path,")")),e}},a.schema=function(e,t,r){s(void 0!==t,"Invalid undefined schema"),Array.isArray(t)&&(s(t.length,"Invalid empty array schema"),1===t.length&&(t=t[0]));const o=(t,...s)=>!1!==r.override?t.valid(e.override,...s):t.valid(...s);if(a.simple(t))return o(e,t);if("function"==typeof t)return e.custom(t);if(s("object"==typeof t,"Invalid schema content:",typeof t),n.isResolvable(t))return o(e,t);if(n.isSchema(t))return t;if(Array.isArray(t)){for(const r of t)if(!a.simple(r))return e.alternatives().try(...t);return o(e,...t)}return t instanceof RegExp?e.string().regex(t):t instanceof Date?o(e.date(),t):(s(Object.getPrototypeOf(t)===Object.getPrototypeOf({}),"Schema can only contain plain objects"),e.object().keys(t))},t.ref=function(e,t){return o.isRef(e)?e:o.create(e,t)},t.compile=function(e,r,o={}){n.assertOptions(o,["legacy"]);const i=r&&r[n.symbols.any];if(i)return s(o.legacy||i.version===n.version,"Cannot mix different versions of joi schemas:",i.version,n.version),r;if("object"!=typeof r||!o.legacy)return t.schema(e,r,{appendPath:!0});const l=a.walk(r);return l?l.compile(l.root,r):t.schema(e,r,{appendPath:!0})},a.walk=function(e){if("object"!=typeof e)return null;if(Array.isArray(e)){for(const t of e){const e=a.walk(t);if(e)return e}return null}const t=e[n.symbols.any];if(t)return{root:e[t.root],compile:t.compile};s(Object.getPrototypeOf(e)===Object.getPrototypeOf({}),"Schema can only contain plain objects");for(const t in e){const r=a.walk(e[t]);if(r)return r}return null},a.simple=function(e){return null===e||["boolean","string","number"].includes(typeof e)},t.when=function(e,r,i){if(void 0===i&&(s(r&&"object"==typeof r,"Missing options"),i=r,r=o.create(".")),Array.isArray(i)&&(i={switch:i}),n.assertOptions(i,["is","not","then","otherwise","switch","break"]),n.isSchema(r))return s(void 0===i.is,'"is" can not be used with a schema condition'),s(void 0===i.not,'"not" can not be used with a schema condition'),s(void 0===i.switch,'"switch" can not be used with a schema condition'),a.condition(e,{is:r,then:i.then,otherwise:i.otherwise,break:i.break});if(s(o.isRef(r)||"string"==typeof r,"Invalid condition:",r),s(void 0===i.not||void 0===i.is,'Cannot combine "is" with "not"'),void 0===i.switch){let l=i;void 0!==i.not&&(l={is:i.not,then:i.otherwise,otherwise:i.then,break:i.break});let c=void 0!==l.is?e.$_compile(l.is):e.$_root.invalid(null,!1,0,"").required();return s(void 0!==l.then||void 0!==l.otherwise,'options must have at least one of "then", "otherwise", or "switch"'),s(void 0===l.break||void 0===l.then||void 0===l.otherwise,"Cannot specify then, otherwise, and break all together"),void 0===i.is||o.isRef(i.is)||n.isSchema(i.is)||(c=c.required()),a.condition(e,{ref:t.ref(r),is:c,then:l.then,otherwise:l.otherwise,break:l.break})}s(Array.isArray(i.switch),'"switch" must be an array'),s(void 0===i.is,'Cannot combine "switch" with "is"'),s(void 0===i.not,'Cannot combine "switch" with "not"'),s(void 0===i.then,'Cannot combine "switch" with "then"');const l={ref:t.ref(r),switch:[],break:i.break};for(let t=0;t<i.switch.length;++t){const r=i.switch[t],a=t===i.switch.length-1;n.assertOptions(r,a?["is","then","otherwise"]:["is","then"]),s(void 0!==r.is,'Switch statement missing "is"'),s(void 0!==r.then,'Switch statement missing "then"');const c={is:e.$_compile(r.is),then:e.$_compile(r.then)};if(o.isRef(r.is)||n.isSchema(r.is)||(c.is=c.is.required()),a){s(void 0===i.otherwise||void 0===r.otherwise,'Cannot specify "otherwise" inside and outside a "switch"');const t=void 0!==i.otherwise?i.otherwise:r.otherwise;void 0!==t&&(s(void 0===l.break,"Cannot specify both otherwise and break"),c.otherwise=e.$_compile(t))}l.switch.push(c)}return l},a.condition=function(e,t){for(const r of["then","otherwise"])void 0===t[r]?delete t[r]:t[r]=e.$_compile(t[r]);return t}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(7);t.compile=function(e,t){if("string"==typeof e)return s(!t,"Cannot set single message string"),new o(e);if(o.isTemplate(e))return s(!t,"Cannot set single message template"),e;s("object"==typeof e&&!Array.isArray(e),"Invalid message options"),t=t?n(t):{};for(let r in e){const n=e[r];if("root"===r||o.isTemplate(n)){t[r]=n;continue}if("string"==typeof n){t[r]=new o(n);continue}s("object"==typeof n&&!Array.isArray(n),"Invalid message for",r);const a=r;for(r in t[a]=t[a]||{},n){const e=n[r];"root"===r||o.isTemplate(e)?t[a][r]=e:(s("string"==typeof e,"Invalid message for",r,"in",a),t[a][r]=new o(e))}}return t},t.decompile=function(e){const t={};for(let r in e){const s=e[r];if("root"===r){t[r]=s;continue}if(o.isTemplate(s)){t[r]=s.describe({compact:!0});continue}const n=r;for(r in t[n]={},s){const e=s[r];"root"!==r?t[n][r]=e.describe({compact:!0}):t[n][r]=e}}return t},t.merge=function(e,r){if(!e)return t.compile(r);if(!r)return e;if("string"==typeof r)return new o(r);if(o.isTemplate(r))return r;const a=n(e);for(let e in r){const t=r[e];if("root"===e||o.isTemplate(t)){a[e]=t;continue}if("string"==typeof t){a[e]=new o(t);continue}s("object"==typeof t&&!Array.isArray(t),"Invalid message for",e);const n=e;for(e in a[n]=a[n]||{},t){const r=t[e];"root"===e||o.isTemplate(r)?a[n][e]=r:(s("string"==typeof r,"Invalid message for",e,"in",n),a[n][e]=new o(r))}}return a}},function(e,t,r){"use strict";const s=r(13),n={mismatched:null};e.exports=function(e,t,r){return r=Object.assign({prototype:!0},r),!!n.isDeepEqual(e,t,r,[])},n.isDeepEqual=function(e,t,r,o){if(e===t)return 0!==e||1/e==1/t;const a=typeof e;if(a!==typeof t)return!1;if(null===e||null===t)return!1;if("function"===a){if(!r.deepFunction||e.toString()!==t.toString())return!1}else if("object"!==a)return e!=e&&t!=t;const i=n.getSharedType(e,t,!!r.prototype);switch(i){case s.buffer:return!1;case s.promise:return e===t;case s.regex:return e.toString()===t.toString();case n.mismatched:return!1}for(let r=o.length-1;r>=0;--r)if(o[r].isSame(e,t))return!0;o.push(new n.SeenEntry(e,t));try{return!!n.isDeepEqualObj(i,e,t,r,o)}finally{o.pop()}},n.getSharedType=function(e,t,r){if(r)return Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?n.mismatched:s.getInternalProto(e);const o=s.getInternalProto(e);return o!==s.getInternalProto(t)?n.mismatched:o},n.valueOf=function(e){const t=e.valueOf;if(void 0===t)return e;try{return t.call(e)}catch(e){return e}},n.hasOwnEnumerableProperty=function(e,t){return Object.prototype.propertyIsEnumerable.call(e,t)},n.isSetSimpleEqual=function(e,t){for(const r of e)if(!t.has(r))return!1;return!0},n.isDeepEqualObj=function(e,t,r,o,a){const{isDeepEqual:i,valueOf:l,hasOwnEnumerableProperty:c}=n,{keys:u,getOwnPropertySymbols:f}=Object;if(e===s.array){if(!o.part){if(t.length!==r.length)return!1;for(let e=0;e<t.length;++e)if(!i(t[e],r[e],o,a))return!1;return!0}for(const e of t)for(const t of r)if(i(e,t,o,a))return!0}else if(e===s.set){if(t.size!==r.size)return!1;if(!n.isSetSimpleEqual(t,r)){const e=new Set(r);for(const r of t){if(e.delete(r))continue;let t=!1;for(const s of e)if(i(r,s,o,a)){e.delete(s),t=!0;break}if(!t)return!1}}}else if(e===s.map){if(t.size!==r.size)return!1;for(const[e,s]of t){if(void 0===s&&!r.has(e))return!1;if(!i(s,r.get(e),o,a))return!1}}else if(e===s.error&&(t.name!==r.name||t.message!==r.message))return!1;const m=l(t),h=l(r);if((t!==m||r!==h)&&!i(m,h,o,a))return!1;const d=u(t);if(!o.part&&d.length!==u(r).length&&!o.skip)return!1;let p=0;for(const e of d)if(o.skip&&o.skip.includes(e))void 0===r[e]&&++p;else{if(!c(r,e))return!1;if(!i(t[e],r[e],o,a))return!1}if(!o.part&&d.length-p!==u(r).length)return!1;if(!1!==o.symbols){const e=f(t),s=new Set(f(r));for(const n of e){if(!o.skip||!o.skip.includes(n))if(c(t,n)){if(!c(r,n))return!1;if(!i(t[n],r[n],o,a))return!1}else if(c(r,n))return!1;s.delete(n)}for(const e of s)if(c(r,e))return!1}return!0},n.SeenEntry=class{constructor(e,t){this.obj=e,this.ref=t}isSame(e,t){return this.obj===e&&this.ref===t}}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(15),a=r(1),i=r(8),l=r(4),c=r(17),u=r(18),f=r(5),m=r(7),h=r(19);let d;const p={types:{alternatives:r(33),any:r(3),array:r(39),boolean:r(40),date:r(41),function:r(42),link:r(45),number:r(46),object:r(47),string:r(48),symbol:r(52)},aliases:{alt:"alternatives",bool:"boolean",func:"function"}};p.root=function(){const e={_types:new Set(Object.keys(p.types))};for(const t of e._types)e[t]=function(...e){return s(!e.length||["alternatives","link","object"].includes(t),"The",t,"type does not allow arguments"),p.generate(this,p.types[t],e)};for(const t of["allow","custom","disallow","equal","exist","forbidden","invalid","not","only","optional","options","prefs","preferences","required","strip","valid","when"])e[t]=function(...e){return this.any()[t](...e)};Object.assign(e,p.methods);for(const t in p.aliases){const r=p.aliases[t];e[t]=e[r]}return e.x=e.expression,h.setup&&h.setup(e),e},p.methods={ValidationError:l.ValidationError,version:a.version,cache:o.provider,assert(e,t,...r){p.assert(e,t,!0,r)},attempt:(e,t,...r)=>p.assert(e,t,!1,r),build(e){return s("function"==typeof u.build,"Manifest functionality disabled"),u.build(this,e)},checkPreferences(e){a.checkPreferences(e)},compile(e,t){return i.compile(this,e,t)},defaults(e){s("function"==typeof e,"modifier must be a function");const t=Object.assign({},this);for(const r of t._types){const n=e(t[r]());s(a.isSchema(n),"modifier must return a valid schema object"),t[r]=function(...e){return p.generate(this,n,e)}}return t},expression:(...e)=>new m(...e),extend(...e){a.verifyFlat(e,"extend"),d=d||r(16),s(e.length,"You need to provide at least one extension"),this.assert(e,d.extensions);const t=Object.assign({},this);t._types=new Set(t._types);for(let r of e){"function"==typeof r&&(r=r(t)),this.assert(r,d.extension);const e=p.expandExtension(r,t);for(const r of e){s(void 0===t[r.type]||t._types.has(r.type),"Cannot override name",r.type);const e=r.base||this.any(),n=c.type(e,r);t._types.add(r.type),t[r.type]=function(...e){return p.generate(this,n,e)}}}return t},isError:l.ValidationError.isError,isExpression:m.isTemplate,isRef:f.isRef,isSchema:a.isSchema,in:(...e)=>f.in(...e),override:a.symbols.override,ref:(...e)=>f.create(...e),types(){const e={};for(const t of this._types)e[t]=this[t]();for(const t in p.aliases)e[t]=this[t]();return e}},p.assert=function(e,t,r,s){const o=s[0]instanceof Error||"string"==typeof s[0]?s[0]:null,i=o?s[1]:s[0],c=t.validate(e,a.preferences({errors:{stack:!0}},i||{}));let u=c.error;if(!u)return c.value;if(o instanceof Error)throw o;const f=r&&"function"==typeof u.annotate?u.annotate():u.message;throw u instanceof l.ValidationError==!1&&(u=n(u)),u.message=o?"".concat(o," ").concat(f):f,u},p.generate=function(e,t,r){return s(e,"Must be invoked on a Joi instance."),t.$_root=e,t._definition.args&&r.length?t._definition.args(t,...r):t},p.expandExtension=function(e,t){if("string"==typeof e.type)return[e];const r=[];for(const s of t._types)if(e.type.test(s)){const n=Object.assign({},e);n.type=s,n.base=t[s](),r.push(n)}return r},e.exports=p.root()},function(e,t,r){"use strict";const s=r(28);e.exports=class extends Error{constructor(e){super(e.filter(e=>""!==e).map(e=>"string"==typeof e?e:e instanceof Error?e.message:s(e)).join(" ")||"Unknown error"),"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t.assert)}}},function(e,t,r){"use strict";const s={};t=e.exports={array:Array.prototype,buffer:!1,date:Date.prototype,error:Error.prototype,generic:Object.prototype,map:Map.prototype,promise:Promise.prototype,regex:RegExp.prototype,set:Set.prototype,weakMap:WeakMap.prototype,weakSet:WeakSet.prototype},s.typeMap=new Map([["[object Error]",t.error],["[object Map]",t.map],["[object Promise]",t.promise],["[object Set]",t.set],["[object WeakMap]",t.weakMap],["[object WeakSet]",t.weakSet]]),t.getInternalProto=function(e){if(Array.isArray(e))return t.array;if(e instanceof Date)return t.date;if(e instanceof RegExp)return t.regex;if(e instanceof Error)return t.error;const r=Object.prototype.toString.call(e);return s.typeMap.get(r)||t.generic}},function(e,t,r){"use strict";t.keys=function(e,t={}){return!1!==t.symbols?Reflect.ownKeys(e):Object.getOwnPropertyNames(e)}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(1),a={max:1e3,supported:new Set(["undefined","boolean","number","string"])};t.provider={provision:e=>new a.Cache(e)},a.Cache=class{constructor(e={}){o.assertOptions(e,["max"]),s(void 0===e.max||e.max&&e.max>0&&isFinite(e.max),"Invalid max cache size"),this._max=e.max||a.max,this._map=new Map,this._list=new a.List}get length(){return this._map.size}set(e,t){if(null!==e&&!a.supported.has(typeof e))return;let r=this._map.get(e);if(r)return r.value=t,void this._list.first(r);r=this._list.unshift({key:e,value:t}),this._map.set(e,r),this._compact()}get(e){const t=this._map.get(e);if(t)return this._list.first(t),n(t.value)}_compact(){if(this._map.size>this._max){const e=this._list.pop();this._map.delete(e.key)}}},a.List=class{constructor(){this.tail=null,this.head=null}unshift(e){return e.next=null,e.prev=this.head,this.head&&(this.head.next=e),this.head=e,this.tail||(this.tail=e),e}first(e){e!==this.head&&(this._remove(e),this.unshift(e))}pop(){return this._remove(this.tail)}_remove(e){const{next:t,prev:r}=e;return t.prev=r,r&&(r.next=t),e===this.tail&&(this.tail=t),e.prev=null,e.next=null,e}}},function(e,t,r){"use strict";const s=r(11),n={};n.wrap=s.string().min(1).max(2).allow(!1),t.preferences=s.object({allowUnknown:s.boolean(),abortEarly:s.boolean(),cache:s.boolean(),context:s.object(),convert:s.boolean(),dateFormat:s.valid("date","iso","string","time","utc"),debug:s.boolean(),errors:{escapeHtml:s.boolean(),label:s.valid("path","key",!1),language:[s.string(),s.object().ref()],render:s.boolean(),stack:s.boolean(),wrap:{label:n.wrap,array:n.wrap}},externals:s.boolean(),messages:s.object(),noDefaults:s.boolean(),nonEnumerables:s.boolean(),presence:s.valid("required","optional","forbidden"),skipFunctions:s.boolean(),stripUnknown:s.object({arrays:s.boolean(),objects:s.boolean()}).or("arrays","objects").allow(!0,!1),warnings:s.boolean()}).strict(),n.nameRx=/^[a-zA-Z0-9]\w*$/,n.rule=s.object({alias:s.array().items(s.string().pattern(n.nameRx)).single(),args:s.array().items(s.string(),s.object({name:s.string().pattern(n.nameRx).required(),ref:s.boolean(),assert:s.alternatives([s.function(),s.object().schema()]).conditional("ref",{is:!0,then:s.required()}),normalize:s.function(),message:s.string().when("assert",{is:s.function(),then:s.required()})})),convert:s.boolean(),manifest:s.boolean(),method:s.function().allow(!1),multi:s.boolean(),validate:s.function()}),t.extension=s.object({type:s.alternatives([s.string(),s.object().regex()]).required(),args:s.function(),base:s.object().schema().when("type",{is:s.object().regex(),then:s.forbidden()}),coerce:[s.function().maxArity(3),s.object({method:s.function().maxArity(3).required(),from:s.array().items(s.string()).single()})],flags:s.object().pattern(n.nameRx,s.object({setter:s.string(),default:s.any()})),manifest:{build:s.function().arity(2)},messages:[s.object(),s.string()],modifiers:s.object().pattern(n.nameRx,s.function().minArity(1).maxArity(2)),overrides:s.object().pattern(n.nameRx,s.function()),prepare:s.function().maxArity(3),rebuild:s.function().arity(1),rules:s.object().pattern(n.nameRx,n.rule),terms:s.object().pattern(n.nameRx,s.object({init:s.array().allow(null).required(),manifest:s.object().pattern(/.+/,[s.valid("schema","single"),s.object({mapped:s.object({from:s.string().required(),to:s.string().required()}).required()})])})),validate:s.function().maxArity(3)}).strict(),t.extensions=s.array().items(s.object(),s.function().arity(1)).strict(),n.desc={buffer:s.object({buffer:s.string()}),func:s.object({function:s.function().required(),options:{literal:!0}}),override:s.object({override:!0}),ref:s.object({ref:s.object({type:s.valid("value","global","local"),path:s.array().required(),separator:s.string().length(1).allow(!1),ancestor:s.number().min(0).integer().allow("root"),map:s.array().items(s.array().length(2)).min(1),adjust:s.function(),iterables:s.boolean(),in:s.boolean()}).required()}),regex:s.object({regex:s.string().min(3)}),special:s.object({special:s.valid("deep").required()}),template:s.object({template:s.string().required(),options:s.object()}),value:s.object({value:s.alternatives([s.object(),s.array()]).required()})},n.desc.entity=s.alternatives([s.array().items(s.link("...")),s.boolean(),s.function(),s.number(),s.string(),n.desc.buffer,n.desc.func,n.desc.ref,n.desc.regex,n.desc.special,n.desc.template,n.desc.value,s.link("/")]),n.desc.values=s.array().items(null,s.boolean(),s.function(),s.number().allow(1/0,-1/0),s.string().allow(""),s.symbol(),n.desc.buffer,n.desc.func,n.desc.override,n.desc.ref,n.desc.regex,n.desc.template,n.desc.value),n.desc.messages=s.object().pattern(/.+/,[s.string(),n.desc.template,s.object().pattern(/.+/,[s.string(),n.desc.template])]),t.description=s.object({type:s.string().required(),flags:s.object({cast:s.string(),default:s.any(),description:s.string(),empty:s.link("/"),failover:n.desc.entity,id:s.string(),label:s.string(),only:!0,presence:["optional","required","forbidden"],result:["raw","strip"],strip:s.boolean(),unit:s.string()}).unknown(),preferences:{allowUnknown:s.boolean(),abortEarly:s.boolean(),cache:s.boolean(),convert:s.boolean(),dateFormat:["date","iso","string","time","utc"],errors:{escapeHtml:s.boolean(),label:["path","key"],language:[s.string(),n.desc.ref],wrap:{label:n.wrap,array:n.wrap}},externals:s.boolean(),messages:n.desc.messages,noDefaults:s.boolean(),nonEnumerables:s.boolean(),presence:["required","optional","forbidden"],skipFunctions:s.boolean(),stripUnknown:s.object({arrays:s.boolean(),objects:s.boolean()}).or("arrays","objects").allow(!0,!1),warnings:s.boolean()},allow:n.desc.values,invalid:n.desc.values,rules:s.array().min(1).items({name:s.string().required(),args:s.object().min(1),keep:s.boolean(),message:[s.string(),n.desc.messages],warn:s.boolean()}),keys:s.object().pattern(/.*/,s.link("/")),link:n.desc.ref}).pattern(/^[a-z]\w*$/,s.any())},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(1),a=r(9),i={};t.type=function(e,t){const r=Object.getPrototypeOf(e),l=n(r),c=e._assign(Object.create(l)),u=Object.assign({},t);delete u.base,l._definition=u;const f=r._definition||{};u.messages=a.merge(f.messages,u.messages),u.properties=Object.assign({},f.properties,u.properties),c.type=u.type,u.flags=Object.assign({},f.flags,u.flags);const m=Object.assign({},f.terms);if(u.terms)for(const e in u.terms){const t=u.terms[e];s(void 0===c.$_terms[e],"Invalid term override for",u.type,e),c.$_terms[e]=t.init,m[e]=t}u.terms=m,u.args||(u.args=f.args),u.prepare=i.prepare(u.prepare,f.prepare),u.coerce&&("function"==typeof u.coerce&&(u.coerce={method:u.coerce}),u.coerce.from&&!Array.isArray(u.coerce.from)&&(u.coerce={method:u.coerce.method,from:[].concat(u.coerce.from)})),u.coerce=i.coerce(u.coerce,f.coerce),u.validate=i.validate(u.validate,f.validate);const h=Object.assign({},f.rules);if(u.rules)for(const e in u.rules){const t=u.rules[e];s("object"==typeof t,"Invalid rule definition for",u.type,e);let r=t.method;if(void 0===r&&(r=function(){return this.$_addRule(e)}),r&&(s(!l[e],"Rule conflict in",u.type,e),l[e]=r),s(!h[e],"Rule conflict in",u.type,e),h[e]=t,t.alias){const e=[].concat(t.alias);for(const r of e)l[r]=t.method}t.args&&(t.argsByName=new Map,t.args=t.args.map(e=>("string"==typeof e&&(e={name:e}),s(!t.argsByName.has(e.name),"Duplicated argument name",e.name),o.isSchema(e.assert)&&(e.assert=e.assert.strict().label(e.name)),t.argsByName.set(e.name,e),e)))}u.rules=h;const d=Object.assign({},f.modifiers);if(u.modifiers)for(const e in u.modifiers){s(!l[e],"Rule conflict in",u.type,e);const t=u.modifiers[e];s("function"==typeof t,"Invalid modifier definition for",u.type,e);const r=function(t){return this.rule({[e]:t})};l[e]=r,d[e]=t}if(u.modifiers=d,u.overrides){l._super=r,c.$_super={};for(const e in u.overrides)s(r[e],"Cannot override missing",e),c.$_super[e]=r[e].bind(c);Object.assign(l,u.overrides)}u.cast=Object.assign({},f.cast,u.cast);const p=Object.assign({},f.manifest,u.manifest);return p.build=i.build(u.manifest&&u.manifest.build,f.manifest&&f.manifest.build),u.manifest=p,u.rebuild=i.rebuild(u.rebuild,f.rebuild),c},i.build=function(e,t){return e&&t?function(r,s){return t(e(r,s),s)}:e||t},i.coerce=function(e,t){return e&&t?{from:e.from&&t.from?[...new Set([...e.from,...t.from])]:null,method(r,s){let n;if((!t.from||t.from.includes(typeof r))&&(n=t.method(r,s),n)){if(n.errors||void 0===n.value)return n;r=n.value}if(!e.from||e.from.includes(typeof r)){const t=e.method(r,s);if(t)return t}return n}}:e||t},i.prepare=function(e,t){return e&&t?function(r,s){const n=e(r,s);if(n){if(n.errors||void 0===n.value)return n;r=n.value}return t(r,s)||n}:e||t},i.rebuild=function(e,t){return e&&t?function(r){t(r),e(r)}:e||t},i.validate=function(e,t){return e&&t?function(r,s){const n=t(r,s);if(n){if(n.errors&&(!Array.isArray(n.errors)||n.errors.length))return n;r=n.value}return e(r,s)||n}:e||t}},function(e,t){},function(e,t){},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(14),a={};e.exports=a.merge=function(e,t,r){if(s(e&&"object"==typeof e,"Invalid target value: must be an object"),s(null==t||"object"==typeof t,"Invalid source value: must be null, undefined, or an object"),!t)return e;if(r=Object.assign({nullOverride:!0,mergeArrays:!0},r),Array.isArray(t)){s(Array.isArray(e),"Cannot merge array onto an object"),r.mergeArrays||(e.length=0);for(let s=0;s<t.length;++s)e.push(n(t[s],{symbols:r.symbols}));return e}const i=o.keys(t,r);for(let s=0;s<i.length;++s){const o=i[s];if("__proto__"===o||!Object.prototype.propertyIsEnumerable.call(t,o))continue;const l=t[o];if(l&&"object"==typeof l){if(e[o]===l)continue;!e[o]||"object"!=typeof e[o]||Array.isArray(e[o])!==Array.isArray(l)||l instanceof Date||l instanceof RegExp?e[o]=n(l,{symbols:r.symbols}):a.merge(e[o],l,r)}else null!=l?e[o]=l:r.nullOverride&&(e[o]=l)}return e}},function(e,t,r){"use strict";const s=r(0),n=r(10),o=r(1),a={};e.exports=a.Values=class{constructor(e,t){this._values=new Set(e),this._refs=new Set(t),this._lowercase=a.lowercases(e),this._override=!1}get length(){return this._values.size+this._refs.size}add(e,t){o.isResolvable(e)?this._refs.has(e)||(this._refs.add(e),t&&t.register(e)):this.has(e,null,null,!1)||(this._values.add(e),"string"==typeof e&&this._lowercase.set(e.toLowerCase(),e))}static merge(e,t,r){if(e=e||new a.Values,t){if(t._override)return t.clone();for(const r of[...t._values,...t._refs])e.add(r)}if(r)for(const t of[...r._values,...r._refs])e.remove(t);return e.length?e:null}remove(e){o.isResolvable(e)?this._refs.delete(e):(this._values.delete(e),"string"==typeof e&&this._lowercase.delete(e.toLowerCase()))}has(e,t,r,s){return!!this.get(e,t,r,s)}get(e,t,r,s){if(!this.length)return!1;if(this._values.has(e))return{value:e};if("string"==typeof e&&e&&s){const t=this._lowercase.get(e.toLowerCase());if(t)return{value:t}}if(!this._refs.size&&"object"!=typeof e)return!1;if("object"==typeof e)for(const t of this._values)if(n(t,e))return{value:t};if(t)for(const o of this._refs){const a=o.resolve(e,t,r,null,{in:!0});if(void 0===a)continue;const i=o.in&&"object"==typeof a?Array.isArray(a)?a:Object.keys(a):[a];for(const t of i)if(typeof t==typeof e)if(s&&e&&"string"==typeof e){if(t.toLowerCase()===e.toLowerCase())return{value:t,ref:o}}else if(n(t,e))return{value:t,ref:o}}return!1}override(){this._override=!0}values(e){if(e&&e.display){const e=[];for(const t of[...this._values,...this._refs])void 0!==t&&e.push(t);return e}return Array.from([...this._values,...this._refs])}clone(){const e=new a.Values(this._values,this._refs);return e._override=this._override,e}concat(e){s(!e._override,"Cannot concat override set of values");const t=new a.Values([...this._values,...e._values],[...this._refs,...e._refs]);return t._override=this._override,t}describe(){const e=[];this._override&&e.push({override:!0});for(const t of this._values.values())e.push(t&&"object"==typeof t?{value:t}:t);for(const t of this._refs.values())e.push(t.describe());return e}},a.Values.prototype[o.symbols.values]=!0,a.Values.prototype.slice=a.Values.prototype.clone,a.lowercases=function(e){const t=new Map;if(e)for(const r of e)"string"==typeof r&&t.set(r.toLowerCase(),r);return t}},function(e,t,r){"use strict";const s=r(43),n=r(0),o=r(2),a=r(44),i=r(3),l=r(1),c=r(8),u=r(4),f=r(5),m=r(7),h={renameDefaults:{alias:!1,multiple:!1,override:!1}};e.exports=i.extend({type:"_keys",properties:{typeof:"object"},flags:{unknown:{default:!1}},terms:{dependencies:{init:null},keys:{init:null,manifest:{mapped:{from:"schema",to:"key"}}},patterns:{init:null},renames:{init:null}},args:(e,t)=>e.keys(t),validate(e,{schema:t,error:r,state:s,prefs:n}){if(!e||typeof e!==t.$_property("typeof")||Array.isArray(e))return{value:e,errors:r("object.base",{type:t.$_property("typeof")})};if(!(t.$_terms.renames||t.$_terms.dependencies||t.$_terms.keys||t.$_terms.patterns||t.$_terms.externals))return;e=h.clone(e,n);const o=[];if(t.$_terms.renames&&!h.rename(t,e,s,n,o))return{value:e,errors:o};if(!t.$_terms.keys&&!t.$_terms.patterns&&!t.$_terms.dependencies)return{value:e,errors:o};const a=new Set(Object.keys(e));if(t.$_terms.keys){const r=[e,...s.ancestors];for(const i of t.$_terms.keys){const t=i.key,l=e[t];a.delete(t);const c=s.localize([...s.path,t],r,i),u=i.schema.$_validate(l,c,n);if(u.errors){if(n.abortEarly)return{value:e,errors:u.errors};o.push(...u.errors)}else"strip"===i.schema._flags.result||void 0===u.value&&void 0!==l?delete e[t]:void 0!==u.value&&(e[t]=u.value)}}if(a.size||t._flags._hasPatternMatch){const r=h.unknown(t,e,a,o,s,n);if(r)return r}if(t.$_terms.dependencies)for(const r of t.$_terms.dependencies){if(r.key&&void 0===r.key.resolve(e,s,n,null,{shadow:!1}))continue;const a=h.dependencies[r.rel](t,r,e,s,n);if(a){const r=t.$_createError(a.code,e,a.context,s,n);if(n.abortEarly)return{value:e,errors:r};o.push(r)}}return{value:e,errors:o}},rules:{and:{method(...e){return l.verifyFlat(e,"and"),h.dependency(this,"and",null,e)}},append:{method(e){return null==e||0===Object.keys(e).length?this:this.keys(e)}},assert:{method(e,t,r){m.isTemplate(e)||(e=c.ref(e)),n(void 0===r||"string"==typeof r,"Message must be a string"),t=this.$_compile(t,{appendPath:!0});const s=this.$_addRule({name:"assert",args:{subject:e,schema:t,message:r}});return s.$_mutateRegister(e),s.$_mutateRegister(t),s},validate(e,{error:t,prefs:r,state:s},{subject:n,schema:o,message:a}){const i=n.resolve(e,s,r),l=f.isRef(n)?n.absolute(s):[];return o.$_match(i,s.localize(l,[e,...s.ancestors],o),r)?e:t("object.assert",{subject:n,message:a})},args:["subject","schema","message"],multi:!0},instance:{method(e,t){return n("function"==typeof e,"constructor must be a function"),t=t||e.name,this.$_addRule({name:"instance",args:{constructor:e,name:t}})},validate:(e,t,{constructor:r,name:s})=>e instanceof r?e:t.error("object.instance",{type:s,value:e}),args:["constructor","name"]},keys:{method(e){n(void 0===e||"object"==typeof e,"Object schema must be a valid object"),n(!l.isSchema(e),"Object schema cannot be a joi schema");const t=this.clone();if(e)if(Object.keys(e).length){t.$_terms.keys=t.$_terms.keys?t.$_terms.keys.filter(t=>!e.hasOwnProperty(t.key)):new h.Keys;for(const r in e)l.tryWithPath(()=>t.$_terms.keys.push({key:r,schema:this.$_compile(e[r])}),r)}else t.$_terms.keys=new h.Keys;else t.$_terms.keys=null;return t.$_mutateRebuild()}},length:{method(e){return this.$_addRule({name:"length",args:{limit:e},operator:"="})},validate:(e,t,{limit:r},{name:s,operator:n,args:o})=>l.compare(Object.keys(e).length,r,n)?e:t.error("object."+s,{limit:o.limit,value:e}),args:[{name:"limit",ref:!0,assert:l.limit,message:"must be a positive integer"}]},max:{method(e){return this.$_addRule({name:"max",method:"length",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"length",args:{limit:e},operator:">="})}},nand:{method(...e){return l.verifyFlat(e,"nand"),h.dependency(this,"nand",null,e)}},or:{method(...e){return l.verifyFlat(e,"or"),h.dependency(this,"or",null,e)}},oxor:{method(...e){return h.dependency(this,"oxor",null,e)}},pattern:{method(e,t,r={}){const s=e instanceof RegExp;s||(e=this.$_compile(e,{appendPath:!0})),n(void 0!==t,"Invalid rule"),l.assertOptions(r,["fallthrough","matches"]),s&&n(!e.flags.includes("g")&&!e.flags.includes("y"),"pattern should not use global or sticky mode"),t=this.$_compile(t,{appendPath:!0});const o=this.clone();o.$_terms.patterns=o.$_terms.patterns||[];const a={[s?"regex":"schema"]:e,rule:t};return r.matches&&(a.matches=this.$_compile(r.matches),"array"!==a.matches.type&&(a.matches=a.matches.$_root.array().items(a.matches)),o.$_mutateRegister(a.matches),o.$_setFlag("_hasPatternMatch",!0,{clone:!1})),r.fallthrough&&(a.fallthrough=!0),o.$_terms.patterns.push(a),o.$_mutateRegister(t),o}},ref:{method(){return this.$_addRule("ref")},validate:(e,t)=>f.isRef(e)?e:t.error("object.refType",{value:e})},regex:{method(){return this.$_addRule("regex")},validate:(e,t)=>e instanceof RegExp?e:t.error("object.regex",{value:e})},rename:{method(e,t,r={}){n("string"==typeof e||e instanceof RegExp,"Rename missing the from argument"),n("string"==typeof t||t instanceof m,"Invalid rename to argument"),n(t!==e,"Cannot rename key to same name:",e),l.assertOptions(r,["alias","ignoreUndefined","override","multiple"]);const o=this.clone();o.$_terms.renames=o.$_terms.renames||[];for(const t of o.$_terms.renames)n(t.from!==e,"Cannot rename the same key multiple times");return t instanceof m&&o.$_mutateRegister(t),o.$_terms.renames.push({from:e,to:t,options:s(h.renameDefaults,r)}),o}},schema:{method(e="any"){return this.$_addRule({name:"schema",args:{type:e}})},validate:(e,t,{type:r})=>!l.isSchema(e)||"any"!==r&&e.type!==r?t.error("object.schema",{type:r}):e},unknown:{method(e){return this.$_setFlag("unknown",!1!==e)}},with:{method(e,t,r={}){return h.dependency(this,"with",e,t,r)}},without:{method(e,t,r={}){return h.dependency(this,"without",e,t,r)}},xor:{method(...e){return l.verifyFlat(e,"xor"),h.dependency(this,"xor",null,e)}}},overrides:{default(e,t){return void 0===e&&(e=l.symbols.deepDefault),this.$_super.default(e,t)}},rebuild(e){if(e.$_terms.keys){const t=new a.Sorter;for(const r of e.$_terms.keys)l.tryWithPath(()=>t.add(r,{after:r.schema.$_rootReferences(),group:r.key}),r.key);e.$_terms.keys=new h.Keys(...t.nodes)}},manifest:{build(e,t){if(t.keys&&(e=e.keys(t.keys)),t.dependencies)for(const{rel:r,key:s=null,peers:n,options:o}of t.dependencies)e=h.dependency(e,r,s,n,o);if(t.patterns)for(const{regex:r,schema:s,rule:n,fallthrough:o,matches:a}of t.patterns)e=e.pattern(r||s,n,{fallthrough:o,matches:a});if(t.renames)for(const{from:r,to:s,options:n}of t.renames)e=e.rename(r,s,n);return e}},messages:{"object.and":"{{#label}} contains {{#presentWithLabels}} without its required peers {{#missingWithLabels}}","object.assert":'{{#label}} is invalid because {if(#subject.key, `"` + #subject.key + `" failed to ` + (#message || "pass the assertion test"), #message || "the assertion failed")}',"object.base":"{{#label}} must be of type {{#type}}","object.instance":'{{#label}} must be an instance of "{{#type}}"',"object.length":'{{#label}} must have {{#limit}} key{if(#limit == 1, "", "s")}',"object.max":'{{#label}} must have less than or equal to {{#limit}} key{if(#limit == 1, "", "s")}',"object.min":'{{#label}} must have at least {{#limit}} key{if(#limit == 1, "", "s")}',"object.missing":"{{#label}} must contain at least one of {{#peersWithLabels}}","object.nand":'"{{#mainWithLabel}}" must not exist simultaneously with {{#peersWithLabels}}',"object.oxor":"{{#label}} contains a conflict between optional exclusive peers {{#peersWithLabels}}","object.pattern.match":"{{#label}} keys failed to match pattern requirements","object.refType":"{{#label}} must be a Joi reference","object.regex":"{{#label}} must be a RegExp object","object.rename.multiple":'{{#label}} cannot rename "{{#from}}" because multiple renames are disabled and another key was already renamed to "{{#to}}"',"object.rename.override":'{{#label}} cannot rename "{{#from}}" because override is disabled and target "{{#to}}" exists',"object.schema":"{{#label}} must be a Joi schema of {{#type}} type","object.unknown":"{{#label}} is not allowed","object.with":'"{{#mainWithLabel}}" missing required peer "{{#peerWithLabel}}"',"object.without":'"{{#mainWithLabel}}" conflict with forbidden peer "{{#peerWithLabel}}"',"object.xor":"{{#label}} contains a conflict between exclusive peers {{#peersWithLabels}}"}}),h.clone=function(e,t){if("object"==typeof e){if(t.nonEnumerables)return o(e,{shallow:!0});const r=Object.create(Object.getPrototypeOf(e));return Object.assign(r,e),r}const r=function(...t){return e.apply(this,t)};return r.prototype=o(e.prototype),Object.defineProperty(r,"name",{value:e.name,writable:!1}),Object.defineProperty(r,"length",{value:e.length,writable:!1}),Object.assign(r,e),r},h.dependency=function(e,t,r,s,o){n(null===r||"string"==typeof r,t,"key must be a strings"),o||(o=s.length>1&&"object"==typeof s[s.length-1]?s.pop():{}),l.assertOptions(o,["separator"]),s=[].concat(s);const a=l.default(o.separator,"."),i=[];for(const e of s)n("string"==typeof e,t,"peers must be a string or a reference"),i.push(c.ref(e,{separator:a,ancestor:0,prefix:!1}));null!==r&&(r=c.ref(r,{separator:a,ancestor:0,prefix:!1}));const u=e.clone();return u.$_terms.dependencies=u.$_terms.dependencies||[],u.$_terms.dependencies.push(new h.Dependency(t,r,i,s)),u},h.dependencies={and(e,t,r,s,n){const o=[],a=[],i=t.peers.length;for(const e of t.peers)void 0===e.resolve(r,s,n,null,{shadow:!1})?o.push(e.key):a.push(e.key);if(o.length!==i&&a.length!==i)return{code:"object.and",context:{present:a,presentWithLabels:h.keysToLabels(e,a),missing:o,missingWithLabels:h.keysToLabels(e,o)}}},nand(e,t,r,s,n){const o=[];for(const e of t.peers)void 0!==e.resolve(r,s,n,null,{shadow:!1})&&o.push(e.key);if(o.length!==t.peers.length)return;const a=t.paths[0],i=t.paths.slice(1);return{code:"object.nand",context:{main:a,mainWithLabel:h.keysToLabels(e,a),peers:i,peersWithLabels:h.keysToLabels(e,i)}}},or(e,t,r,s,n){for(const e of t.peers)if(void 0!==e.resolve(r,s,n,null,{shadow:!1}))return;return{code:"object.missing",context:{peers:t.paths,peersWithLabels:h.keysToLabels(e,t.paths)}}},oxor(e,t,r,s,n){const o=[];for(const e of t.peers)void 0!==e.resolve(r,s,n,null,{shadow:!1})&&o.push(e.key);if(!o.length||1===o.length)return;const a={peers:t.paths,peersWithLabels:h.keysToLabels(e,t.paths)};return a.present=o,a.presentWithLabels=h.keysToLabels(e,o),{code:"object.oxor",context:a}},with(e,t,r,s,n){for(const o of t.peers)if(void 0===o.resolve(r,s,n,null,{shadow:!1}))return{code:"object.with",context:{main:t.key.key,mainWithLabel:h.keysToLabels(e,t.key.key),peer:o.key,peerWithLabel:h.keysToLabels(e,o.key)}}},without(e,t,r,s,n){for(const o of t.peers)if(void 0!==o.resolve(r,s,n,null,{shadow:!1}))return{code:"object.without",context:{main:t.key.key,mainWithLabel:h.keysToLabels(e,t.key.key),peer:o.key,peerWithLabel:h.keysToLabels(e,o.key)}}},xor(e,t,r,s,n){const o=[];for(const e of t.peers)void 0!==e.resolve(r,s,n,null,{shadow:!1})&&o.push(e.key);if(1===o.length)return;const a={peers:t.paths,peersWithLabels:h.keysToLabels(e,t.paths)};return 0===o.length?{code:"object.missing",context:a}:(a.present=o,a.presentWithLabels=h.keysToLabels(e,o),{code:"object.xor",context:a})}},h.keysToLabels=function(e,t){return Array.isArray(t)?t.map(t=>e.$_mapLabels(t)):e.$_mapLabels(t)},h.rename=function(e,t,r,s,n){const o={};for(const a of e.$_terms.renames){const i=[],l="string"!=typeof a.from;if(l)for(const e in t){if(void 0===t[e]&&a.options.ignoreUndefined)continue;if(e===a.to)continue;const r=a.from.exec(e);r&&i.push({from:e,to:a.to,match:r})}else!Object.prototype.hasOwnProperty.call(t,a.from)||void 0===t[a.from]&&a.options.ignoreUndefined||i.push(a);for(const c of i){const i=c.from;let u=c.to;if(u instanceof m&&(u=u.render(t,r,s,c.match)),i!==u){if(!a.options.multiple&&o[u]&&(n.push(e.$_createError("object.rename.multiple",t,{from:i,to:u,pattern:l},r,s)),s.abortEarly))return!1;if(Object.prototype.hasOwnProperty.call(t,u)&&!a.options.override&&!o[u]&&(n.push(e.$_createError("object.rename.override",t,{from:i,to:u,pattern:l},r,s)),s.abortEarly))return!1;void 0===t[i]?delete t[u]:t[u]=t[i],o[u]=!0,a.options.alias||delete t[i]}}}return!0},h.unknown=function(e,t,r,s,n,o){if(e.$_terms.patterns){let a=!1;const i=e.$_terms.patterns.map(e=>{if(e.matches)return a=!0,[]}),l=[t,...n.ancestors];for(const a of r){const c=t[a],u=[...n.path,a];for(let f=0;f<e.$_terms.patterns.length;++f){const m=e.$_terms.patterns[f];if(m.regex){const e=m.regex.test(a);if(n.mainstay.tracer.debug(n,"rule","pattern.".concat(f),e?"pass":"error"),!e)continue}else if(!m.schema.$_match(a,n.nest(m.schema,"pattern.".concat(f)),o))continue;r.delete(a);const h=n.localize(u,l,{schema:m.rule,key:a}),d=m.rule.$_validate(c,h,o);if(d.errors){if(o.abortEarly)return{value:t,errors:d.errors};s.push(...d.errors)}if(m.matches&&i[f].push(a),t[a]=d.value,!m.fallthrough)break}}if(a)for(let r=0;r<i.length;++r){const a=i[r];if(!a)continue;const c=e.$_terms.patterns[r].matches,f=n.localize(n.path,l,c),m=c.$_validate(a,f,o);if(m.errors){const r=u.details(m.errors,{override:!1});r.matches=a;const i=e.$_createError("object.pattern.match",t,r,n,o);if(o.abortEarly)return{value:t,errors:i};s.push(i)}}}if(!r.size||!e.$_terms.keys&&!e.$_terms.patterns)return;if(o.stripUnknown&&!e._flags.unknown||o.skipFunctions){const e=!!o.stripUnknown&&(!0===o.stripUnknown||!!o.stripUnknown.objects);for(const s of r)e?(delete t[s],r.delete(s)):"function"==typeof t[s]&&r.delete(s)}if(!l.default(e._flags.unknown,o.allowUnknown))for(const a of r){const r=n.localize([...n.path,a],[]),i=e.$_createError("object.unknown",t[a],{child:a},r,o,{flags:!1});if(o.abortEarly)return{value:t,errors:i};s.push(i)}},h.Dependency=class{constructor(e,t,r,s){this.rel=e,this.key=t,this.peers=r,this.paths=s}describe(){const e={rel:this.rel,peers:this.paths};return null!==this.key&&(e.key=this.key.key),"."!==this.peers[0].separator&&(e.options={separator:this.peers[0].separator}),e}},h.Keys=class extends Array{concat(e){const t=this.slice(),r=new Map;for(let e=0;e<t.length;++e)r.set(t[e].key,e);for(const s of e){const e=s.key,n=r.get(e);void 0!==n?t[n]={key:e,schema:t[n].schema.concat(s.schema)}:t.push(s)}return t}}},function(e,t,r){"use strict";const s=r(24),n=r(25),o={minDomainSegments:2,nonAsciiRx:/[^\x00-\x7f]/,domainControlRx:/[\x00-\x20@\:\/]/,tldSegmentRx:/^[a-zA-Z](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,domainSegmentRx:/^[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,URL:s.URL||URL};t.analyze=function(e,t={}){if("string"!=typeof e)throw new Error("Invalid input: domain must be a string");if(!e)return n.code("DOMAIN_NON_EMPTY_STRING");if(e.length>256)return n.code("DOMAIN_TOO_LONG");if(!!o.nonAsciiRx.test(e)){if(!1===t.allowUnicode)return n.code("DOMAIN_INVALID_UNICODE_CHARS");e=e.normalize("NFC")}if(o.domainControlRx.test(e))return n.code("DOMAIN_INVALID_CHARS");e=o.punycode(e);const r=t.minDomainSegments||o.minDomainSegments,s=e.split(".");if(s.length<r)return n.code("DOMAIN_SEGMENTS_COUNT");const a=t.tlds;if(a){const e=s[s.length-1].toLowerCase();if(a.deny&&a.deny.has(e)||a.allow&&!a.allow.has(e))return n.code("DOMAIN_FORBIDDEN_TLDS")}for(let e=0;e<s.length;++e){const t=s[e];if(!t.length)return n.code("DOMAIN_EMPTY_SEGMENT");if(t.length>63)return n.code("DOMAIN_LONG_SEGMENT");if(e<s.length-1){if(!o.domainSegmentRx.test(t))return n.code("DOMAIN_INVALID_CHARS")}else if(!o.tldSegmentRx.test(t))return n.code("DOMAIN_INVALID_TLDS_CHARS")}return null},t.isValid=function(e,r){return!t.analyze(e,r)},o.punycode=function(e){try{return new o.URL("http://".concat(e)).host}catch(t){return e}}},function(e,t){},function(e,t,r){"use strict";t.codes={EMPTY_STRING:"Address must be a non-empty string",FORBIDDEN_UNICODE:"Address contains forbidden Unicode characters",MULTIPLE_AT_CHAR:"Address cannot contain more than one @ character",MISSING_AT_CHAR:"Address must contain one @ character",EMPTY_LOCAL:"Address local part cannot be empty",ADDRESS_TOO_LONG:"Address too long",LOCAL_TOO_LONG:"Address local part too long",EMPTY_LOCAL_SEGMENT:"Address local part contains empty dot-separated segment",INVALID_LOCAL_CHARS:"Address local part contains invalid character",DOMAIN_NON_EMPTY_STRING:"Domain must be a non-empty string",DOMAIN_TOO_LONG:"Domain too long",DOMAIN_INVALID_UNICODE_CHARS:"Domain contains forbidden Unicode characters",DOMAIN_INVALID_CHARS:"Domain contains invalid character",DOMAIN_INVALID_TLDS_CHARS:"Domain contains invalid tld character",DOMAIN_SEGMENTS_COUNT:"Domain lacks the minimum required number of segments",DOMAIN_FORBIDDEN_TLDS:"Domain uses forbidden TLD",DOMAIN_EMPTY_SEGMENT:"Domain contains empty dot-separated segment",DOMAIN_LONG_SEGMENT:"Domain contains dot-separated segment that is too long"},t.code=function(e){return{code:e,error:t.codes[e]}}},function(e,t,r){"use strict";const s=r(0),n=r(27),o={generate:function(){const e={},t="!\\$&'\\(\\)\\*\\+,;=",r="\\w-\\.~%\\dA-Fa-f"+t+":@",s="["+r+"]",n="(?:0{0,2}\\d|0?[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])";e.ipv4address="(?:"+n+"\\.){3}"+n;const o="[\\dA-Fa-f]{1,4}",a="(?:"+o+":"+o+"|"+e.ipv4address+")",i="(?:"+o+":){6}"+a,l="::(?:"+o+":){5}"+a,c="(?:"+o+")?::(?:"+o+":){4}"+a,u="(?:(?:"+o+":){0,1}"+o+")?::(?:"+o+":){3}"+a,f="(?:(?:"+o+":){0,2}"+o+")?::(?:"+o+":){2}"+a,m="(?:(?:"+o+":){0,3}"+o+")?::"+o+":"+a,h="(?:(?:"+o+":){0,4}"+o+")?::"+a;e.ipv4Cidr="(?:\\d|[1-2]\\d|3[0-2])",e.ipv6Cidr="(?:0{0,2}\\d|0?[1-9]\\d|1[01]\\d|12[0-8])",e.ipv6address="(?:"+i+"|"+l+"|"+c+"|"+u+"|"+f+"|"+m+"|"+h+"|(?:(?:[\\dA-Fa-f]{1,4}:){0,5}[\\dA-Fa-f]{1,4})?::[\\dA-Fa-f]{1,4}|(?:(?:[\\dA-Fa-f]{1,4}:){0,6}[\\dA-Fa-f]{1,4})?::)",e.ipvFuture="v[\\dA-Fa-f]+\\.[\\w-\\.~"+t+":]+",e.scheme="[a-zA-Z][a-zA-Z\\d+-\\.]*",e.schemeRegex=new RegExp(e.scheme);const d="[\\w-\\.~%\\dA-Fa-f"+t+":]*",p="(?:"+("\\[(?:"+e.ipv6address+"|"+e.ipvFuture+")\\]")+"|"+e.ipv4address+"|[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=]{1,255})",g="(?:"+d+"@)?"+p+"(?::\\d*)?",y="(?:"+d+"@)?("+p+")(?::\\d*)?",b=s+"*",v=s+"+",_="(?:\\/"+b+")*",w="\\/(?:"+v+_+")?",$=v+_,x="[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=@]+"+_;return e.hierPart="(?:(?:\\/\\/"+g+_+")|"+w+"|"+$+"|(?:\\/\\/\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*(?:\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*))",e.hierPartCapture="(?:(?:\\/\\/"+y+_+")|"+w+"|"+$+")",e.relativeRef="(?:(?:\\/\\/"+g+_+")|"+w+"|"+x+"|)",e.relativeRefCapture="(?:(?:\\/\\/"+y+_+")|"+w+"|"+x+"|)",e.query="["+r+"\\/\\?]*(?=#|$)",e.queryWithSquareBrackets="["+r+"\\[\\]\\/\\?]*(?=#|$)",e.fragment="["+r+"\\/\\?]*",e}};o.rfc3986=o.generate(),t.ip={v4Cidr:o.rfc3986.ipv4Cidr,v6Cidr:o.rfc3986.ipv6Cidr,ipv4:o.rfc3986.ipv4address,ipv6:o.rfc3986.ipv6address,ipvfuture:o.rfc3986.ipvFuture},o.createRegex=function(e){const t=o.rfc3986,r="(?:\\?"+(e.allowQuerySquareBrackets?t.queryWithSquareBrackets:t.query)+")?(?:#"+t.fragment+")?",a=e.domain?t.relativeRefCapture:t.relativeRef;if(e.relativeOnly)return o.wrap(a+r);let i="";if(e.scheme){s(e.scheme instanceof RegExp||"string"==typeof e.scheme||Array.isArray(e.scheme),"scheme must be a RegExp, String, or Array");const r=[].concat(e.scheme);s(r.length>=1,"scheme must have at least 1 scheme specified");const o=[];for(let e=0;e<r.length;++e){const a=r[e];s(a instanceof RegExp||"string"==typeof a,"scheme at position "+e+" must be a RegExp or String"),a instanceof RegExp?o.push(a.source.toString()):(s(t.schemeRegex.test(a),"scheme at position "+e+" must be a valid scheme"),o.push(n(a)))}i=o.join("|")}const l="(?:"+(i?"(?:"+i+")":t.scheme)+":"+(e.domain?t.hierPartCapture:t.hierPart)+")",c=e.allowRelative?"(?:"+l+"|"+a+")":l;return o.wrap(c+r,i)},o.wrap=function(e,t){return{raw:e="(?=.)(?!https?:/$)".concat(e),regex:new RegExp("^".concat(e,"$")),scheme:t}},o.uriRegex=o.createRegex({}),t.regex=function(e={}){return e.scheme||e.allowRelative||e.relativeOnly||e.allowQuerySquareBrackets||e.domain?o.createRegex(e):o.uriRegex}},function(e,t,r){"use strict";e.exports=function(e){return e.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g,"\\$&")}},function(e,t,r){"use strict";e.exports=function(...e){try{return JSON.stringify.apply(null,e)}catch(e){return"[Cannot display object: "+e.message+"]"}}},function(e){e.exports=JSON.parse('{"version":"17.1.1"}')},function(e,t,r){"use strict";const s={};e.exports=function(e){if(!e)return"";let t="";for(let r=0;r<e.length;++r){const n=e.charCodeAt(r);s.isSafe(n)?t+=e[r]:t+=s.escapeHtmlChar(n)}return t},s.escapeHtmlChar=function(e){const t=s.namedHtml[e];if(void 0!==t)return t;if(e>=256)return"&#"+e+";";const r=e.toString(16).padStart(2,"0");return"&#x".concat(r,";")},s.isSafe=function(e){return void 0!==s.safeCharCodes[e]},s.namedHtml={38:"&amp;",60:"&lt;",62:"&gt;",34:"&quot;",160:"&nbsp;",162:"&cent;",163:"&pound;",164:"&curren;",169:"&copy;",174:"&reg;"},s.safeCharCodes=function(){const e={};for(let t=32;t<123;++t)(t>=97||t>=65&&t<=90||t>=48&&t<=57||32===t||46===t||44===t||45===t||58===t||95===t)&&(e[t]=null);return e}()},function(e,t,r){"use strict";const s={operators:["!","^","*","/","%","+","-","<","<=",">",">=","==","!=","&&","||","??"],operatorCharacters:["!","^","*","/","%","+","-","<","=",">","&","|","?"],operatorsOrder:[["^"],["*","/","%"],["+","-"],["<","<=",">",">="],["==","!="],["&&"],["||","??"]],operatorsPrefix:["!","n"],literals:{'"':'"',"`":"`","'":"'","[":"]"},numberRx:/^(?:[0-9]*\.?[0-9]*){1}$/,tokenRx:/^[\w\$\#\.\@\:\{\}]+$/,symbol:Symbol("formula"),settings:Symbol("settings")};t.Parser=class{constructor(e,t={}){if(!t[s.settings]&&t.constants)for(const e in t.constants){const r=t.constants[e];if(null!==r&&!["boolean","number","string"].includes(typeof r))throw new Error("Formula constant ".concat(e," contains invalid ").concat(typeof r," value type"))}this.settings=t[s.settings]?t:Object.assign({[s.settings]:!0,constants:{},functions:{}},t),this.single=null,this._parts=null,this._parse(e)}_parse(e){let r=[],n="",o=0,a=!1;const i=e=>{if(o)throw new Error("Formula missing closing parenthesis");const i=r.length?r[r.length-1]:null;if(a||n||e){if(i&&"reference"===i.type&&")"===e)return i.type="function",i.value=this._subFormula(n,i.value),void(n="");if(")"===e){const e=new t.Parser(n,this.settings);r.push({type:"segment",value:e})}else if(a){if("]"===a)return r.push({type:"reference",value:n}),void(n="");r.push({type:"literal",value:n})}else if(s.operatorCharacters.includes(n))i&&"operator"===i.type&&s.operators.includes(i.value+n)?i.value+=n:r.push({type:"operator",value:n});else if(n.match(s.numberRx))r.push({type:"constant",value:parseFloat(n)});else if(void 0!==this.settings.constants[n])r.push({type:"constant",value:this.settings.constants[n]});else{if(!n.match(s.tokenRx))throw new Error("Formula contains invalid token: ".concat(n));r.push({type:"reference",value:n})}n=""}};for(const t of e)a?t===a?(i(),a=!1):n+=t:o?"("===t?(n+=t,++o):")"===t?(--o,o?n+=t:i(t)):n+=t:t in s.literals?a=s.literals[t]:"("===t?(i(),++o):s.operatorCharacters.includes(t)?(i(),n=t,i()):" "!==t?n+=t:i();i(),r=r.map((e,t)=>"operator"!==e.type||"-"!==e.value||t&&"operator"!==r[t-1].type?e:{type:"operator",value:"n"});let l=!1;for(const e of r){if("operator"===e.type){if(s.operatorsPrefix.includes(e.value))continue;if(!l)throw new Error("Formula contains an operator in invalid position");if(!s.operators.includes(e.value))throw new Error("Formula contains an unknown operator ".concat(e.value))}else if(l)throw new Error("Formula missing expected operator");l=!l}if(!l)throw new Error("Formula contains invalid trailing operator");1===r.length&&["reference","literal","constant"].includes(r[0].type)&&(this.single={type:"reference"===r[0].type?"reference":"value",value:r[0].value}),this._parts=r.map(e=>{if("operator"===e.type)return s.operatorsPrefix.includes(e.value)?e:e.value;if("reference"!==e.type)return e.value;if(this.settings.tokenRx&&!this.settings.tokenRx.test(e.value))throw new Error("Formula contains invalid reference ".concat(e.value));return this.settings.reference?this.settings.reference(e.value):s.reference(e.value)})}_subFormula(e,r){const n=this.settings.functions[r];if("function"!=typeof n)throw new Error("Formula contains unknown function ".concat(r));let o=[];if(e){let t="",n=0,a=!1;const i=()=>{if(!t)throw new Error("Formula contains function ".concat(r," with invalid arguments ").concat(e));o.push(t),t=""};for(let r=0;r<e.length;++r){const o=e[r];a?(t+=o,o===a&&(a=!1)):o in s.literals&&!n?(t+=o,a=s.literals[o]):","!==o||n?(t+=o,"("===o?++n:")"===o&&--n):i()}i()}return o=o.map(e=>new t.Parser(e,this.settings)),function(e){const t=[];for(const r of o)t.push(r.evaluate(e));return n.call(e,...t)}}evaluate(e){const t=this._parts.slice();for(let r=t.length-2;r>=0;--r){const n=t[r];if(n&&"operator"===n.type){const o=t[r+1];t.splice(r+1,1);const a=s.evaluate(o,e);t[r]=s.single(n.value,a)}}return s.operatorsOrder.forEach(r=>{for(let n=1;n<t.length-1;)if(r.includes(t[n])){const r=t[n],o=s.evaluate(t[n-1],e),a=s.evaluate(t[n+1],e);t.splice(n,2);const i=s.calculate(r,o,a);t[n-1]=0===i?0:i}else n+=2}),s.evaluate(t[0],e)}},t.Parser.prototype[s.symbol]=!0,s.reference=function(e){return function(t){return t&&void 0!==t[e]?t[e]:null}},s.evaluate=function(e,t){return null===e?null:"function"==typeof e?e(t):e[s.symbol]?e.evaluate(t):e},s.single=function(e,t){if("!"===e)return!t;const r=-t;return 0===r?0:r},s.calculate=function(e,t,r){if("??"===e)return s.exists(t)?t:r;if("string"==typeof t||"string"==typeof r){if("+"===e)return(t=s.exists(t)?t:"")+(r=s.exists(r)?r:"")}else switch(e){case"^":return Math.pow(t,r);case"*":return t*r;case"/":return t/r;case"%":return t%r;case"+":return t+r;case"-":return t-r}switch(e){case"<":return t<r;case"<=":return t<=r;case">":return t>r;case">=":return t>=r;case"==":return t===r;case"!=":return t!==r;case"&&":return t&&r;case"||":return t||r}return null},s.exists=function(e){return null!=e}},function(e,t){},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a=r(8),i=r(4),l=r(5),c={};e.exports=n.extend({type:"alternatives",flags:{match:{default:"any"}},terms:{matches:{init:[],register:l.toSibling}},args:(e,...t)=>1===t.length&&Array.isArray(t[0])?e.try(...t[0]):e.try(...t),validate(e,t){const{schema:r,error:s,state:n,prefs:o}=t;if(r._flags.match){let t,a=0;for(let s=0;s<r.$_terms.matches.length;++s){const i=r.$_terms.matches[s],l=n.nest(i.schema,"match.".concat(s));l.snapshot();const c=i.schema.$_validate(e,l,o);c.errors?l.restore():(++a,t=c.value)}return a?"one"===r._flags.match?1===a?{value:t}:{errors:s("alternatives.one")}:a===r.$_terms.matches.length?{value:e}:{errors:s("alternatives.all")}:{errors:s("alternatives.any")}}const a=[];for(let t=0;t<r.$_terms.matches.length;++t){const s=r.$_terms.matches[t];if(s.schema){const r=n.nest(s.schema,"match.".concat(t));r.snapshot();const i=s.schema.$_validate(e,r,o);if(!i.errors)return i;r.restore(),a.push({schema:s.schema,reports:i.errors});continue}const i=s.ref?s.ref.resolve(e,n,o):e,l=s.is?[s]:s.switch;for(let r=0;r<l.length;++r){const a=l[r],{is:c,then:u,otherwise:f}=a,m="match.".concat(t).concat(s.switch?"."+r:"");if(c.$_match(i,n.nest(c,"".concat(m,".is")),o)){if(u)return u.$_validate(e,n.nest(u,"".concat(m,".then")),o)}else if(f)return f.$_validate(e,n.nest(f,"".concat(m,".otherwise")),o)}}return c.errors(a,t)},rules:{conditional:{method(e,t){s(!this._flags._endedSwitch,"Unreachable condition"),s(!this._flags.match,"Cannot combine match mode",this._flags.match,"with conditional rule"),s(void 0===t.break,"Cannot use break option with alternatives conditional");const r=this.clone(),n=a.when(r,e,t),o=n.is?[n]:n.switch;for(const e of o)if(e.then&&e.otherwise){r.$_setFlag("_endedSwitch",!0,{clone:!1});break}return r.$_terms.matches.push(n),r.$_mutateRebuild()}},match:{method(e){if(s(["any","one","all"].includes(e),"Invalid alternatives match mode",e),"any"!==e)for(const t of this.$_terms.matches)s(t.schema,"Cannot combine match mode",e,"with conditional rules");return this.$_setFlag("match",e)}},try:{method(...e){s(e.length,"Missing alternative schemas"),o.verifyFlat(e,"try"),s(!this._flags._endedSwitch,"Unreachable condition");const t=this.clone();for(const r of e)t.$_terms.matches.push({schema:t.$_compile(r)});return t.$_mutateRebuild()}}},overrides:{label(e){return this.$_super.label(e).$_modify({each:(t,r)=>"is"!==r.path[0]?t.label(e):void 0,ref:!1})}},rebuild(e){e.$_modify({each:t=>{o.isSchema(t)&&"array"===t.type&&e.$_setFlag("_arrayItems",!0,{clone:!1})}})},manifest:{build(e,t){if(t.matches)for(const r of t.matches){const{schema:t,ref:s,is:n,not:o,then:a,otherwise:i}=r;e=t?e.try(t):s?e.conditional(s,{is:n,then:a,not:o,otherwise:i,switch:r.switch}):e.conditional(n,{then:a,otherwise:i})}return e}},messages:{"alternatives.all":"{{#label}} does not match all of the required types","alternatives.any":"{{#label}} does not match any of the allowed types","alternatives.match":"{{#label}} does not match any of the allowed types","alternatives.one":"{{#label}} matches more than one allowed type","alternatives.types":"{{#label}} must be one of {{#types}}"}}),c.errors=function(e,{error:t,state:r}){if(!e.length)return{errors:t("alternatives.any")};if(1===e.length)return{errors:e[0].reports};const s=new Set,n=[];for(const{reports:o,schema:a}of e){if(o.length>1)return c.unmatched(e,t);const l=o[0];if(l instanceof i.Report==!1)return c.unmatched(e,t);if(l.state.path.length!==r.path.length){n.push({type:a.type,report:l});continue}if("any.only"===l.code){for(const e of l.local.valids)s.add(e);continue}const[u,f]=l.code.split(".");"base"===f?s.add(u):n.push({type:a.type,report:l})}return n.length?1===n.length?{errors:n[0].report}:c.unmatched(e,t):{errors:t("alternatives.types",{types:[...s]})}},c.unmatched=function(e,t){const r=[];for(const t of e)r.push(...t.reports);return{errors:t("alternatives.match",i.details(r,{override:!1}))}}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(10),a=r(20),i=r(15),l=r(1),c=r(8),u=r(4),f=r(17),m=r(18),h=r(9),d=r(35),p=r(5),g=r(19),y=r(36),b=r(21),v={Base:class{constructor(e){this.type=e,this.$_root=null,this._definition={},this._ids=new d.Ids,this._preferences=null,this._refs=new p.Manager,this._cache=null,this._valids=null,this._invalids=null,this._flags={},this._rules=[],this._singleRules=new Map,this.$_terms={},this.$_temp={ruleset:null,whens:{}}}describe(){return s("function"==typeof m.describe,"Manifest functionality disabled"),m.describe(this)}allow(...e){return l.verifyFlat(e,"allow"),this._values(e,"_valids")}alter(e){s(e&&"object"==typeof e&&!Array.isArray(e),"Invalid targets argument"),s(!this._inRuleset(),"Cannot set alterations inside a ruleset");const t=this.clone();t.$_terms.alterations=t.$_terms.alterations||[];for(const r in e){const n=e[r];s("function"==typeof n,"Alteration adjuster for",r,"must be a function"),t.$_terms.alterations.push({target:r,adjuster:n})}return t.$_temp.ruleset=!1,t}cast(e){return s(!1===e||"string"==typeof e,"Invalid to value"),s(!1===e||this._definition.cast[e],"Type",this.type,"does not support casting to",e),this.$_setFlag("cast",!1===e?void 0:e)}default(e,t){return this._default("default",e,t)}description(e){return s(e&&"string"==typeof e,"Description must be a non-empty string"),this.$_setFlag("description",e)}empty(e){const t=this.clone();return void 0!==e&&(e=t.$_compile(e,{override:!1})),t.$_setFlag("empty",e,{clone:!1})}error(e){return s(e,"Missing error"),s(e instanceof Error||"function"==typeof e,"Must provide a valid Error object or a function"),this.$_setFlag("error",e)}example(e,t={}){return s(void 0!==e,"Missing example"),l.assertOptions(t,["override"]),this._inner("examples",e,{single:!0,override:t.override})}external(e,t){return"object"==typeof e&&(s(!t,"Cannot combine options with description"),t=e.description,e=e.method),s("function"==typeof e,"Method must be a function"),s(void 0===t||t&&"string"==typeof t,"Description must be a non-empty string"),this._inner("externals",{method:e,description:t},{single:!0})}failover(e,t){return this._default("failover",e,t)}forbidden(){return this.presence("forbidden")}id(e){return e?(s("string"==typeof e,"id must be a non-empty string"),s(/^[^\.]+$/.test(e),"id cannot contain period character"),this.$_setFlag("id",e)):this.$_setFlag("id",void 0)}invalid(...e){return this._values(e,"_invalids")}label(e){return s(e&&"string"==typeof e,"Label name must be a non-empty string"),this.$_setFlag("label",e)}meta(e){return s(void 0!==e,"Meta cannot be undefined"),this._inner("metas",e,{single:!0})}note(...e){s(e.length,"Missing notes");for(const t of e)s(t&&"string"==typeof t,"Notes must be non-empty strings");return this._inner("notes",e)}only(e=!0){return s("boolean"==typeof e,"Invalid mode:",e),this.$_setFlag("only",e)}optional(){return this.presence("optional")}prefs(e){s(e,"Missing preferences"),s(void 0===e.context,"Cannot override context"),s(void 0===e.externals,"Cannot override externals"),s(void 0===e.warnings,"Cannot override warnings"),s(void 0===e.debug,"Cannot override debug"),l.checkPreferences(e);const t=this.clone();return t._preferences=l.preferences(t._preferences,e),t}presence(e){return s(["optional","required","forbidden"].includes(e),"Unknown presence mode",e),this.$_setFlag("presence",e)}raw(e=!0){return this.$_setFlag("result",e?"raw":void 0)}result(e){return s(["raw","strip"].includes(e),"Unknown result mode",e),this.$_setFlag("result",e)}required(){return this.presence("required")}strict(e){const t=this.clone(),r=void 0!==e&&!e;return t._preferences=l.preferences(t._preferences,{convert:r}),t}strip(e=!0){return this.$_setFlag("result",e?"strip":void 0)}tag(...e){s(e.length,"Missing tags");for(const t of e)s(t&&"string"==typeof t,"Tags must be non-empty strings");return this._inner("tags",e)}unit(e){return s(e&&"string"==typeof e,"Unit name must be a non-empty string"),this.$_setFlag("unit",e)}valid(...e){l.verifyFlat(e,"valid");const t=this.allow(...e);return t.$_setFlag("only",!!t._valids,{clone:!1}),t}when(e,t){const r=this.clone();r.$_terms.whens||(r.$_terms.whens=[]);const n=c.when(r,e,t);if(!["any","link"].includes(r.type)){const e=n.is?[n]:n.switch;for(const t of e)s(!t.then||"any"===t.then.type||t.then.type===r.type,"Cannot combine",r.type,"with",t.then&&t.then.type),s(!t.otherwise||"any"===t.otherwise.type||t.otherwise.type===r.type,"Cannot combine",r.type,"with",t.otherwise&&t.otherwise.type)}return r.$_terms.whens.push(n),r.$_mutateRebuild()}cache(e){s(!this._inRuleset(),"Cannot set caching inside a ruleset"),s(!this._cache,"Cannot override schema cache");const t=this.clone();return t._cache=e||i.provider.provision(),t.$_temp.ruleset=!1,t}clone(){const e=Object.create(Object.getPrototypeOf(this));return this._assign(e)}concat(e){s(l.isSchema(e),"Invalid schema object"),s("any"===this.type||"any"===e.type||e.type===this.type,"Cannot merge type",this.type,"with another type:",e.type),s(!this._inRuleset(),"Cannot concatenate onto a schema with open ruleset"),s(!e._inRuleset(),"Cannot concatenate a schema with open ruleset");let t=this.clone();if("any"===this.type&&"any"!==e.type){const r=e.clone();for(const e of Object.keys(t))"type"!==e&&(r[e]=t[e]);t=r}t._ids.concat(e._ids),t._refs.register(e,p.toSibling),t._preferences=t._preferences?l.preferences(t._preferences,e._preferences):e._preferences,t._valids=b.merge(t._valids,e._valids,e._invalids),t._invalids=b.merge(t._invalids,e._invalids,e._valids);for(const r of e._singleRules.keys())t._singleRules.has(r)&&(t._rules=t._rules.filter(e=>e.keep||e.name!==r),t._singleRules.delete(r));for(const r of e._rules)e._definition.rules[r.method].multi||t._singleRules.set(r.name,r),t._rules.push(r);if(t._flags.empty&&e._flags.empty){t._flags.empty=t._flags.empty.concat(e._flags.empty);const r=Object.assign({},e._flags);delete r.empty,a(t._flags,r)}else if(e._flags.empty){t._flags.empty=e._flags.empty;const r=Object.assign({},e._flags);delete r.empty,a(t._flags,r)}else a(t._flags,e._flags);for(const r in e.$_terms){const s=e.$_terms[r];s?t.$_terms[r]?t.$_terms[r]=t.$_terms[r].concat(s):t.$_terms[r]=s.slice():t.$_terms[r]||(t.$_terms[r]=s)}return this.$_root._tracer&&this.$_root._tracer._combine(t,[this,e]),t.$_mutateRebuild()}extend(e){return s(!e.base,"Cannot extend type with another base"),f.type(this,e)}extract(e){return e=Array.isArray(e)?e:e.split("."),this._ids.reach(e)}fork(e,t){s(!this._inRuleset(),"Cannot fork inside a ruleset");let r=this;for(let s of[].concat(e))s=Array.isArray(s)?s:s.split("."),r=r._ids.fork(s,t,r);return r.$_temp.ruleset=!1,r}rule(e){const t=this._definition;l.assertOptions(e,Object.keys(t.modifiers)),s(!1!==this.$_temp.ruleset,"Cannot apply rules to empty ruleset or the last rule added does not support rule properties");const r=null===this.$_temp.ruleset?this._rules.length-1:this.$_temp.ruleset;s(r>=0&&r<this._rules.length,"Cannot apply rules to empty ruleset");const o=this.clone();for(let a=r;a<o._rules.length;++a){const r=o._rules[a],i=n(r);for(const n in e)t.modifiers[n](i,e[n]),s(i.name===r.name,"Cannot change rule name");o._rules[a]=i,o._singleRules.get(i.name)===r&&o._singleRules.set(i.name,i)}return o.$_temp.ruleset=!1,o.$_mutateRebuild()}get ruleset(){s(!this._inRuleset(),"Cannot start a new ruleset without closing the previous one");const e=this.clone();return e.$_temp.ruleset=e._rules.length,e}get $(){return this.ruleset}tailor(e){e=[].concat(e),s(!this._inRuleset(),"Cannot tailor inside a ruleset");let t=this;if(this.$_terms.alterations)for(const{target:r,adjuster:n}of this.$_terms.alterations)e.includes(r)&&(t=n(t),s(l.isSchema(t),"Alteration adjuster for",r,"failed to return a schema object"));return t=t.$_modify({each:t=>t.tailor(e),ref:!1}),t.$_temp.ruleset=!1,t.$_mutateRebuild()}tracer(){return g.location?g.location(this):this}validate(e,t){return y.entry(e,this,t)}validateAsync(e,t){return y.entryAsync(e,this,t)}$_addRule(e){"string"==typeof e&&(e={name:e}),s(e&&"object"==typeof e,"Invalid options"),s(e.name&&"string"==typeof e.name,"Invalid rule name");for(const t in e)s("_"!==t[0],"Cannot set private rule properties");const t=Object.assign({},e);t._resolve=[],t.method=t.method||t.name;const r=this._definition.rules[t.method],n=t.args;s(r,"Unknown rule",t.method);const o=this.clone();if(n){s(1===Object.keys(n).length||Object.keys(n).length===this._definition.rules[t.name].args.length,"Invalid rule definition for",this.type,t.name);for(const e in n){let a=n[e];if(void 0!==a){if(r.argsByName){const i=r.argsByName.get(e);if(i.ref&&l.isResolvable(a))t._resolve.push(e),o.$_mutateRegister(a);else if(i.normalize&&(a=i.normalize(a),n[e]=a),i.assert){const t=l.validateArg(a,e,i);s(!t,t,"or reference")}}n[e]=a}else delete n[e]}}return r.multi||(o._ruleRemove(t.name,{clone:!1}),o._singleRules.set(t.name,t)),!1===o.$_temp.ruleset&&(o.$_temp.ruleset=null),r.priority?o._rules.unshift(t):o._rules.push(t),o}$_compile(e,t){return c.schema(this.$_root,e,t)}$_createError(e,t,r,s,n,o={}){const a=!1!==o.flags?this._flags:{},i=o.messages?h.merge(this._definition.messages,o.messages):this._definition.messages;return new u.Report(e,t,r,a,i,s,n)}$_getFlag(e){return this._flags[e]}$_getRule(e){return this._singleRules.get(e)}$_mapLabels(e){return e=Array.isArray(e)?e:e.split("."),this._ids.labels(e)}$_match(e,t,r,s){(r=Object.assign({},r)).abortEarly=!0,r._externals=!1,t.snapshot();const n=!y.validate(e,this,t,r,s).errors;return t.restore(),n}$_modify(e){return l.assertOptions(e,["each","once","ref","schema"]),d.schema(this,e)||this}$_mutateRebuild(){s(!this._inRuleset(),"Cannot add this rule inside a ruleset"),this._refs.reset(),this._ids.reset();return this.$_modify({each:(e,{source:t,name:r,path:s,key:n})=>{const o=this._definition[t][r]&&this._definition[t][r].register;!1!==o&&this.$_mutateRegister(e,{family:o,key:n})}}),this._definition.rebuild&&this._definition.rebuild(this),this.$_temp.ruleset=!1,this}$_mutateRegister(e,{family:t,key:r}={}){this._refs.register(e,t),this._ids.register(e,{key:r})}$_property(e){return this._definition.properties[e]}$_reach(e){return this._ids.reach(e)}$_rootReferences(){return this._refs.roots()}$_setFlag(e,t,r={}){s("_"===e[0]||!this._inRuleset(),"Cannot set flag inside a ruleset");const n=this._definition.flags[e]||{};if(o(t,n.default)&&(t=void 0),o(t,this._flags[e]))return this;const a=!1!==r.clone?this.clone():this;return void 0!==t?(a._flags[e]=t,a.$_mutateRegister(t)):delete a._flags[e],"_"!==e[0]&&(a.$_temp.ruleset=!1),a}$_validate(e,t,r){return y.validate(e,this,t,r)}_assign(e){e.type=this.type,e.$_root=this.$_root,e.$_temp=Object.assign({},this.$_temp),e.$_temp.whens={},e._ids=this._ids.clone(),e._preferences=this._preferences,e._valids=this._valids&&this._valids.clone(),e._invalids=this._invalids&&this._invalids.clone(),e._rules=this._rules.slice(),e._singleRules=n(this._singleRules,{shallow:!0}),e._refs=this._refs.clone(),e._flags=Object.assign({},this._flags),e._cache=null,e.$_terms={};for(const t in this.$_terms)e.$_terms[t]=this.$_terms[t]?this.$_terms[t].slice():null;e.$_super={};for(const t in this.$_super)e.$_super[t]=this._super[t].bind(e);return e}_default(e,t,r={}){return l.assertOptions(r,"literal"),s(void 0!==t,"Missing",e,"value"),s("function"==typeof t||!r.literal,"Only function value supports literal option"),"function"==typeof t&&r.literal&&(t={[l.symbols.literal]:!0,literal:t}),this.$_setFlag(e,t)}_generate(e,t,r){if(!this.$_terms.whens)return{schema:this};const s=[],n=[];for(let o=0;o<this.$_terms.whens.length;++o){const a=this.$_terms.whens[o];if(a.concat){s.push(a.concat),n.push("".concat(o,".concat"));continue}const i=a.ref?a.ref.resolve(e,t,r):e,l=a.is?[a]:a.switch,c=n.length;for(let c=0;c<l.length;++c){const{is:u,then:f,otherwise:m}=l[c],h="".concat(o).concat(a.switch?"."+c:"");if(u.$_match(i,t.nest(u,"".concat(h,".is")),r)){if(f){const o=t.localize([...t.path,"".concat(h,".then")],t.ancestors,t.schemas),{schema:a,id:i}=f._generate(e,o,r);s.push(a),n.push("".concat(h,".then").concat(i?"(".concat(i,")"):""));break}}else if(m){const o=t.localize([...t.path,"".concat(h,".otherwise")],t.ancestors,t.schemas),{schema:a,id:i}=m._generate(e,o,r);s.push(a),n.push("".concat(h,".otherwise").concat(i?"(".concat(i,")"):""));break}}if(a.break&&n.length>c)break}const o=n.join(", ");if(t.mainstay.tracer.debug(t,"rule","when",o),!o)return{schema:this};if(!t.mainstay.tracer.active&&this.$_temp.whens[o])return{schema:this.$_temp.whens[o],id:o};let a=this;this._definition.generate&&(a=this._definition.generate(this,e,t,r));for(const e of s)a=a.concat(e);return this.$_root._tracer&&this.$_root._tracer._combine(a,[this,...s]),this.$_temp.whens[o]=a,{schema:a,id:o}}_inner(e,t,r={}){s(!this._inRuleset(),"Cannot set ".concat(e," inside a ruleset"));const n=this.clone();return n.$_terms[e]&&!r.override||(n.$_terms[e]=[]),r.single?n.$_terms[e].push(t):n.$_terms[e].push(...t),n.$_temp.ruleset=!1,n}_inRuleset(){return null!==this.$_temp.ruleset&&!1!==this.$_temp.ruleset}_ruleRemove(e,t={}){if(!this._singleRules.has(e))return this;const r=!1!==t.clone?this.clone():this;r._singleRules.delete(e);const s=[];for(let t=0;t<r._rules.length;++t){const n=r._rules[t];n.name!==e||n.keep?s.push(n):r._inRuleset()&&t<r.$_temp.ruleset&&--r.$_temp.ruleset}return r._rules=s,r}_values(e,t){l.verifyFlat(e,t.slice(1,-1));const r=this.clone(),n=e[0]===l.symbols.override;if(n&&(e=e.slice(1)),!r[t]&&e.length?r[t]=new b:n&&(r[t]=e.length?new b:null,r.$_mutateRebuild()),!r[t])return r;n&&r[t].override();for(const n of e){s(void 0!==n,"Cannot call allow/valid/invalid with undefined"),s(n!==l.symbols.override,"Override must be the first value");const e="_invalids"===t?"_valids":"_invalids";r[e]&&(r[e].remove(n),r[e].length||(s("_valids"===t||!r._flags.only,"Setting invalid value",n,"leaves schema rejecting all values due to previous valid rule"),r[e]=null)),r[t].add(n,r._refs)}return r}}};v.Base.prototype[l.symbols.any]={version:l.version,compile:c.compile,root:"$_root"},v.Base.prototype.isImmutable=!0,v.Base.prototype.deny=v.Base.prototype.invalid,v.Base.prototype.disallow=v.Base.prototype.invalid,v.Base.prototype.equal=v.Base.prototype.valid,v.Base.prototype.exist=v.Base.prototype.required,v.Base.prototype.not=v.Base.prototype.invalid,v.Base.prototype.options=v.Base.prototype.prefs,v.Base.prototype.preferences=v.Base.prototype.prefs,e.exports=new v.Base},function(e,t,r){"use strict";function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const o=r(0),a=r(1),i=r(5),l={};t.Ids=l.Ids=class{constructor(){this._byId=new Map,this._byKey=new Map,this._schemaChain=!1}clone(){const e=new l.Ids;return e._byId=new Map(this._byId),e._byKey=new Map(this._byKey),e._schemaChain=this._schemaChain,e}concat(e){e._schemaChain&&(this._schemaChain=!0);for(const[t,r]of e._byId.entries())o(!this._byKey.has(t),"Schema id conflicts with existing key:",t),this._byId.set(t,r);for(const[t,r]of e._byKey.entries())o(!this._byId.has(t),"Schema key conflicts with existing id:",t),this._byKey.set(t,r)}fork(e,t,r){const s=this._collect(e);s.push({schema:r});const n=s.shift();let i={id:n.id,schema:t(n.schema)};o(a.isSchema(i.schema),"adjuster function failed to return a joi schema type");for(const e of s)i={id:e.id,schema:l.fork(e.schema,i.id,i.schema)};return i.schema}labels(e,t=[]){const r=e[0],s=this._get(r);if(!s)return[...t,...e].join(".");const n=e.slice(1);return t=[...t,s.schema._flags.label||r],n.length?s.schema._ids.labels(n,t):t.join(".")}reach(e,t=[]){const r=e[0],s=this._get(r);o(s,"Schema does not contain path",[...t,...e].join("."));const n=e.slice(1);return n.length?s.schema._ids.reach(n,[...t,r]):s.schema}register(e,{key:t}={}){if(!e||!a.isSchema(e))return;(e.$_property("schemaChain")||e._ids._schemaChain)&&(this._schemaChain=!0);const r=e._flags.id;if(r){const t=this._byId.get(r);o(!t||t.schema===e,"Cannot add different schemas with the same id:",r),o(!this._byKey.has(r),"Schema id conflicts with existing key:",r),this._byId.set(r,{schema:e,id:r})}t&&(o(!this._byKey.has(t),"Schema already contains key:",t),o(!this._byId.has(t),"Schema key conflicts with existing id:",t),this._byKey.set(t,{schema:e,id:t}))}reset(){this._byId=new Map,this._byKey=new Map,this._schemaChain=!1}_collect(e,t=[],r=[]){const s=e[0],n=this._get(s);o(n,"Schema does not contain path",[...t,...e].join(".")),r=[n,...r];const a=e.slice(1);return a.length?n.schema._ids._collect(a,[...t,s],r):r}_get(e){return this._byId.get(e)||this._byKey.get(e)}},l.fork=function(e,r,s){const n=t.schema(e,{each:(e,{key:t})=>{if(r===(e._flags.id||t))return s},ref:!1});return n?n.$_mutateRebuild():e},t.schema=function(e,t){let r;for(const s in e._flags){if("_"===s[0])continue;const n=l.scan(e._flags[s],{source:"flags",name:s},t);void 0!==n&&(r=r||e.clone(),r._flags[s]=n)}for(let s=0;s<e._rules.length;++s){const n=e._rules[s],o=l.scan(n.args,{source:"rules",name:n.name},t);if(void 0!==o){r=r||e.clone();const t=Object.assign({},n);t.args=o,r._rules[s]=t,r._singleRules.get(n.name)===n&&r._singleRules.set(n.name,t)}}for(const s in e.$_terms){if("_"===s[0])continue;const n=l.scan(e.$_terms[s],{source:"terms",name:s},t);void 0!==n&&(r=r||e.clone(),r.$_terms[s]=n)}return r},l.scan=function(e,t,r,o,c){const u=o||[];if(null===e||"object"!=typeof e)return;let f;if(Array.isArray(e)){for(let s=0;s<e.length;++s){const n="terms"===t.source&&"keys"===t.name&&e[s].key,o=l.scan(e[s],t,r,[s,...u],n);void 0!==o&&(f=f||e.slice(),f[s]=o)}return f}if(!1!==r.schema&&a.isSchema(e)||!1!==r.ref&&i.isRef(e)){const o=r.each(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{path:u,key:c}));if(o===e)return;return o}for(const s in e){if("_"===s[0])continue;const n=l.scan(e[s],t,r,[s,...u],c);void 0!==n&&(f=f||Object.assign({},e),f[s]=n)}return f}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(37),a=r(6),i=r(1),l=r(4),c=r(38),u={result:Symbol("result")};t.entry=function(e,t,r){let n=i.defaults;r&&(s(void 0===r.warnings,"Cannot override warnings preference in synchronous validation"),n=i.preferences(i.defaults,r));const o=u.entry(e,t,n);s(!o.mainstay.externals.length,"Schema with external rules must use validateAsync()");const a={value:o.value};return o.error&&(a.error=o.error),o.mainstay.warnings.length&&(a.warning=l.details(o.mainstay.warnings)),o.mainstay.debug&&(a.debug=o.mainstay.debug),a},t.entryAsync=async function(e,t,r){let s=i.defaults;r&&(s=i.preferences(i.defaults,r));const n=u.entry(e,t,s),o=n.mainstay;if(n.error)throw o.debug&&(n.error.debug=o.debug),n.error;if(o.externals.length){let e=n.value;for(const{method:t,path:r,label:s}of o.externals){let n,o,i=e;r.length&&(n=r[r.length-1],o=a(e,r.slice(0,-1)),i=o[n]);try{const r=await t(i);if(void 0===r||r===i)continue;o?o[n]=r:e=r}catch(e){throw e.message+=" (".concat(s,")"),e}}n.value=e}if(!s.warnings&&!s.debug)return n.value;const c={value:n.value};return o.warnings.length&&(c.warning=l.details(o.warnings)),o.debug&&(c.debug=o.debug),c},u.entry=function(e,r,s){const{tracer:n,cleanup:o}=u.tracer(r,s),a={externals:[],warnings:[],tracer:n,debug:s.debug?[]:null,links:r._ids._schemaChain?new Map:null},i=r._ids._schemaChain?[{schema:r}]:null,f=new c([],[],{mainstay:a,schemas:i}),m=t.validate(e,r,f,s);o&&r.$_root.untrace();const h=l.process(m.errors,e,s);return{value:m.value,error:h,mainstay:a}},u.tracer=function(e,t){return e.$_root._tracer?{tracer:e.$_root._tracer._register(e)}:t.debug?(s(e.$_root.trace,"Debug mode not supported"),{tracer:e.$_root.trace()._register(e),cleanup:!0}):{tracer:u.ignore}},t.validate=function(e,t,r,s,n={}){if(t.$_terms.whens&&(t=t._generate(e,r,s).schema),t._preferences&&(s=u.prefs(t,s)),t._cache&&s.cache){const s=t._cache.get(e);if(r.mainstay.tracer.debug(r,"validate","cached",!!s),s)return s}const o=(n,o,a)=>t.$_createError(n,e,o,a||r,s),a={original:e,prefs:s,schema:t,state:r,error:o,warn:(e,t,s)=>r.mainstay.warnings.push(o(e,t,s)),message:(n,o)=>t.$_createError("custom",e,o,r,s,{messages:n})};r.mainstay.tracer.entry(t,r);const l=t._definition;if(l.prepare&&void 0!==e&&s.convert){const t=l.prepare(e,a);if(t){if(r.mainstay.tracer.value(r,"prepare",e,t.value),t.errors)return u.finalize(t.value,[].concat(t.errors),a);e=t.value}}if(l.coerce&&void 0!==e&&s.convert&&(!l.coerce.from||l.coerce.from.includes(typeof e))){const t=l.coerce.method(e,a);if(t){if(r.mainstay.tracer.value(r,"coerced",e,t.value),t.errors)return u.finalize(t.value,[].concat(t.errors),a);e=t.value}}const c=t._flags.empty;c&&c.$_match(u.trim(e,t),r.nest(c),i.defaults)&&(r.mainstay.tracer.value(r,"empty",e,void 0),e=void 0);const f=n.presence||t._flags.presence||(t._flags._endedSwitch?"ignore":s.presence);if(void 0===e){if("forbidden"===f)return u.finalize(e,null,a);if("required"===f)return u.finalize(e,[t.$_createError("any.required",e,null,r,s)],a);if("optional"===f){if(t._flags.default!==i.symbols.deepDefault)return u.finalize(e,null,a);r.mainstay.tracer.value(r,"default",e,{}),e={}}}else if("forbidden"===f)return u.finalize(e,[t.$_createError("any.unknown",e,null,r,s)],a);const m=[];if(t._valids){const n=t._valids.get(e,r,s,t._flags.insensitive);if(n)return s.convert&&(r.mainstay.tracer.value(r,"valids",e,n.value),e=n.value),r.mainstay.tracer.filter(t,r,"valid",n),u.finalize(e,null,a);if(t._flags.only){const n=t.$_createError("any.only",e,{valids:t._valids.values({display:!0})},r,s);if(s.abortEarly)return u.finalize(e,[n],a);m.push(n)}}if(t._invalids){const n=t._invalids.get(e,r,s,t._flags.insensitive);if(n){r.mainstay.tracer.filter(t,r,"invalid",n);const o=t.$_createError("any.invalid",e,{invalids:t._invalids.values({display:!0})},r,s);if(s.abortEarly)return u.finalize(e,[o],a);m.push(o)}}if(l.validate){const t=l.validate(e,a);if(t&&(r.mainstay.tracer.value(r,"base",e,t.value),e=t.value,t.errors)){if(!Array.isArray(t.errors))return m.push(t.errors),u.finalize(e,m,a);if(t.errors.length)return m.push(...t.errors),u.finalize(e,m,a)}}return t._rules.length?u.rules(e,m,a):u.finalize(e,m,a)},u.rules=function(e,t,r){const{schema:s,state:n,prefs:o}=r;for(const a of s._rules){const l=s._definition.rules[a.method];if(l.convert&&o.convert){n.mainstay.tracer.log(s,n,"rule",a.name,"full");continue}let c,f=a.args;if(a._resolve.length){f=Object.assign({},f);for(const t of a._resolve){const r=l.argsByName.get(t),a=f[t].resolve(e,n,o),u=r.normalize?r.normalize(a):a,m=i.validateArg(u,null,r);if(m){c=s.$_createError("any.ref",a,{arg:t,ref:f[t],reason:m},n,o);break}f[t]=u}}c=c||l.validate(e,r,f,a);const m=u.rule(c,a);if(m.errors){if(n.mainstay.tracer.log(s,n,"rule",a.name,"error"),a.warn){n.mainstay.warnings.push(...m.errors);continue}if(o.abortEarly)return u.finalize(e,m.errors,r);t.push(...m.errors)}else n.mainstay.tracer.log(s,n,"rule",a.name,"pass"),n.mainstay.tracer.value(n,"rule",e,m.value,a.name),e=m.value}return u.finalize(e,t,r)},u.rule=function(e,t){return e instanceof l.Report?(u.error(e,t),{errors:[e],value:null}):Array.isArray(e)&&(e[0]instanceof l.Report||e[0]instanceof Error)?(e.forEach(e=>u.error(e,t)),{errors:e,value:null}):{errors:null,value:e}},u.error=function(e,t){return t.message&&e._setTemplate(t.message),e},u.finalize=function(e,t,r){t=t||[];const{schema:n,state:o,prefs:a}=r;if(t.length){const s=u.default("failover",void 0,t,r);void 0!==s&&(o.mainstay.tracer.value(o,"failover",e,s),e=s,t=[])}if(t.length&&n._flags.error)if("function"==typeof n._flags.error){t=n._flags.error(t),Array.isArray(t)||(t=[t]);for(const e of t)s(e instanceof Error||e instanceof l.Report,"error() must return an Error object")}else t=[n._flags.error];if(void 0===e){const s=u.default("default",e,t,r);o.mainstay.tracer.value(o,"default",e,s),e=s}if(n._flags.cast&&void 0!==e){const t=n._definition.cast[n._flags.cast];if(t.from(e)){const s=t.to(e,r);o.mainstay.tracer.value(o,"cast",e,s,n._flags.cast),e=s}}if(n.$_terms.externals&&a.externals&&!1!==a._externals)for(const{method:e}of n.$_terms.externals)o.mainstay.externals.push({method:e,path:o.path,label:l.label(n._flags,o,a)});const i={value:e,errors:t.length?t:null};return n._flags.result&&(i.value="strip"===n._flags.result?void 0:r.original,o.mainstay.tracer.value(o,n._flags.result,e,i.value),o.shadow(e,n._flags.result)),n._cache&&!1!==a.cache&&!n._refs.length&&n._cache.set(r.original,i),i},u.prefs=function(e,t){const r=t===i.defaults;return r&&e._preferences[i.symbols.prefs]?e._preferences[i.symbols.prefs]:(t=i.preferences(t,e._preferences),r&&(e._preferences[i.symbols.prefs]=t),t)},u.default=function(e,t,r,s){const{schema:o,state:a,prefs:l}=s,c=o._flags[e];if(l.noDefaults||void 0===c)return t;if(a.mainstay.tracer.log(o,a,"rule",e,"full"),!c)return c;if("function"==typeof c){const t=c.length?[n(a.ancestors[0]),s]:[];try{return c(...t)}catch(t){return void r.push(o.$_createError("any.".concat(e),null,{error:t},a,l))}}return"object"!=typeof c?c:c[i.symbols.literal]?c.literal:i.isResolvable(c)?c.resolve(t,a,l):n(c)},u.trim=function(e,t){if("string"!=typeof e)return e;const r=t.$_getRule("trim");return r&&r.args.enabled?e.trim():e},u.ignore={active:!1,debug:o,entry:o,filter:o,log:o,resolve:o,value:o}},function(e,t,r){"use strict";e.exports=function(){}},function(e,t,r){"use strict";const s=r(2),n=r(6),o=r(1),a={value:Symbol("value")};e.exports=a.State=class{constructor(e,t,r){this.path=e,this.ancestors=t,this.mainstay=r.mainstay,this.schemas=r.schemas,this.debug=null}localize(e,t=null,r=null){const s=new a.State(e,t,this);return r&&s.schemas&&(s.schemas=[a.schemas(r),...s.schemas]),s}nest(e,t){const r=new a.State(this.path,this.ancestors,this);return r.schemas=r.schemas&&[a.schemas(e),...r.schemas],r.debug=t,r}shadow(e,t){this.mainstay.shadow=this.mainstay.shadow||new a.Shadow,this.mainstay.shadow.set(this.path,e,t)}snapshot(){this.mainstay.shadow&&(this._snapshot=s(this.mainstay.shadow.node(this.path)))}restore(){this.mainstay.shadow&&(this.mainstay.shadow.override(this.path,this._snapshot),this._snapshot=void 0)}},a.schemas=function(e){return o.isSchema(e)?{schema:e}:e},a.Shadow=class{constructor(){this._values=null}set(e,t,r){if(!e.length)return;if("strip"===r&&"number"==typeof e[e.length-1])return;this._values=this._values||new Map;let s=this._values;for(let t=0;t<e.length;++t){const r=e[t];let n=s.get(r);n||(n=new Map,s.set(r,n)),s=n}s[a.value]=t}get(e){const t=this.node(e);if(t)return t[a.value]}node(e){if(this._values)return n(this._values,e,{iterables:!0})}override(e,t){if(!this._values)return;const r=e.slice(0,-1),s=e[e.length-1],o=n(this._values,r,{iterables:!0});t?o.set(s,t):o&&o.delete(s)}}},function(e,t,r){"use strict";const s=r(0),n=r(10),o=r(6),a=r(3),i=r(1),l=r(8),c={};e.exports=a.extend({type:"array",flags:{single:{default:!1},sparse:{default:!1}},terms:{items:{init:[],manifest:"schema"},ordered:{init:[],manifest:"schema"},_exclusions:{init:[]},_inclusions:{init:[]},_requireds:{init:[]}},coerce:{from:"object",method(e,{schema:t,state:r,prefs:s}){if(!Array.isArray(e))return;const n=t.$_getRule("sort");return n?c.sort(t,e,n.args.options,r,s):void 0}},validate(e,{schema:t,error:r}){if(!Array.isArray(e)){if(t._flags.single){const t=[e];return t[i.symbols.arraySingle]=!0,{value:t}}return{errors:r("array.base")}}if(t.$_getRule("items")||t.$_terms.externals)return{value:e.slice()}},rules:{has:{method(e){e=this.$_compile(e,{appendPath:!0});const t=this.$_addRule({name:"has",args:{schema:e}});return t.$_mutateRegister(e),t},validate(e,{state:t,prefs:r,error:s},{schema:n}){const o=[e,...t.ancestors];for(let s=0;s<e.length;++s){const a=t.localize([...t.path,s],o,n);if(n.$_match(e[s],a,r))return e}const a=n._flags.label;return a?s("array.hasKnown",{patternLabel:a}):s("array.hasUnknown",null)},multi:!0},items:{method(...e){i.verifyFlat(e,"items");const t=this.$_addRule("items");for(let r=0;r<e.length;++r){const s=i.tryWithPath(()=>this.$_compile(e[r]),r,{append:!0});t.$_terms.items.push(s)}return t.$_mutateRebuild()},validate(e,{schema:t,error:r,state:s,prefs:n}){const o=t.$_terms._requireds.slice(),a=t.$_terms.ordered.slice(),l=[...t.$_terms._inclusions,...o],u=!e[i.symbols.arraySingle];delete e[i.symbols.arraySingle];const f=[];let m=e.length;for(let i=0;i<m;++i){const h=e[i];let d=!1,p=!1;const g=u?i:new Number(i),y=[...s.path,g];if(!t._flags.sparse&&void 0===h){if(f.push(r("array.sparse",{key:g,path:y,pos:i,value:void 0},s.localize(y))),n.abortEarly)return f;a.shift();continue}const b=[e,...s.ancestors];for(const e of t.$_terms._exclusions)if(e.$_match(h,s.localize(y,b,e),n,{presence:"ignore"})){if(f.push(r("array.excludes",{pos:i,value:h},s.localize(y))),n.abortEarly)return f;d=!0,a.shift();break}if(d)continue;if(t.$_terms.ordered.length){if(a.length){const o=a.shift(),l=o.$_validate(h,s.localize(y,b,o),n);if(l.errors){if(f.push(...l.errors),n.abortEarly)return f}else if("strip"===o._flags.result)c.fastSplice(e,i),--i,--m;else{if(!t._flags.sparse&&void 0===l.value){if(f.push(r("array.sparse",{key:g,path:y,pos:i,value:void 0},s.localize(y))),n.abortEarly)return f;continue}e[i]=l.value}continue}if(!t.$_terms.items.length){if(f.push(r("array.orderedLength",{pos:i,limit:t.$_terms.ordered.length})),n.abortEarly)return f;break}}const v=[];let _=o.length;for(let a=0;a<_;++a){const l=s.localize(y,b,o[a]);l.snapshot();const u=o[a].$_validate(h,l,n);if(v[a]=u,!u.errors){if(e[i]=u.value,p=!0,c.fastSplice(o,a),--a,--_,!t._flags.sparse&&void 0===u.value&&(f.push(r("array.sparse",{key:g,path:y,pos:i,value:void 0},s.localize(y))),n.abortEarly))return f;break}l.restore()}if(p)continue;const w=n.stripUnknown&&!!n.stripUnknown.arrays||!1;_=l.length;for(const a of l){let l;const u=o.indexOf(a);if(-1!==u)l=v[u];else{const o=s.localize(y,b,a);if(o.snapshot(),l=a.$_validate(h,o,n),!l.errors){"strip"===a._flags.result?(c.fastSplice(e,i),--i,--m):t._flags.sparse||void 0!==l.value?e[i]=l.value:(f.push(r("array.sparse",{key:g,path:y,pos:i,value:void 0},s.localize(y))),d=!0),p=!0;break}o.restore()}if(1===_){if(w){c.fastSplice(e,i),--i,--m,p=!0;break}if(f.push(...l.errors),n.abortEarly)return f;d=!0;break}}if(!d&&(t.$_terms._inclusions.length&&!p)){if(w){c.fastSplice(e,i),--i,--m;continue}if(f.push(r("array.includes",{pos:i,value:h},s.localize(y))),n.abortEarly)return f}}return o.length&&c.fillMissedErrors(t,f,o,e,s,n),a.length&&c.fillOrderedErrors(t,f,a,e,s,n),f.length?f:e},priority:!0,manifest:!1},length:{method(e){return this.$_addRule({name:"length",args:{limit:e},operator:"="})},validate:(e,t,{limit:r},{name:s,operator:n,args:o})=>i.compare(e.length,r,n)?e:t.error("array."+s,{limit:o.limit,value:e}),args:[{name:"limit",ref:!0,assert:i.limit,message:"must be a positive integer"}]},max:{method(e){return this.$_addRule({name:"max",method:"length",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"length",args:{limit:e},operator:">="})}},ordered:{method(...e){i.verifyFlat(e,"ordered");const t=this.$_addRule("items");for(let r=0;r<e.length;++r){const s=i.tryWithPath(()=>this.$_compile(e[r]),r,{append:!0});c.validateSingle(s,t),t.$_mutateRegister(s),t.$_terms.ordered.push(s)}return t.$_mutateRebuild()}},single:{method(e){const t=void 0===e||!!e;return s(!t||!this._flags._arrayItems,"Cannot specify single rule when array has array items"),this.$_setFlag("single",t)}},sort:{method(e={}){i.assertOptions(e,["by","order"]);const t={order:e.order||"ascending"};return e.by&&(t.by=l.ref(e.by,{ancestor:0}),s(!t.by.ancestor,"Cannot sort by ancestor")),this.$_addRule({name:"sort",args:{options:t}})},validate(e,{error:t,state:r,prefs:s,schema:n},{options:o}){const{value:a,errors:i}=c.sort(n,e,o,r,s);if(i)return i;for(let r=0;r<e.length;++r)if(e[r]!==a[r])return t("array.sort",{order:o.order,by:o.by?o.by.key:"value"});return e},convert:!0},sparse:{method(e){const t=void 0===e||!!e;return this._flags.sparse===t?this:(t?this.clone():this.$_addRule("items")).$_setFlag("sparse",t,{clone:!1})}},unique:{method(e,t={}){s(!e||"function"==typeof e||"string"==typeof e,"comparator must be a function or a string"),i.assertOptions(t,["ignoreUndefined","separator"]);const r={name:"unique",args:{options:t,comparator:e}};if(e)if("string"==typeof e){const s=i.default(t.separator,".");r.path=s?e.split(s):[e]}else r.comparator=e;return this.$_addRule(r)},validate(e,{state:t,error:r,schema:a},{comparator:i,options:l},{comparator:c,path:u}){const f={string:Object.create(null),number:Object.create(null),undefined:Object.create(null),boolean:Object.create(null),object:new Map,function:new Map,custom:new Map},m=c||n,h=l.ignoreUndefined;for(let n=0;n<e.length;++n){const a=u?o(e[n],u):e[n],l=c?f.custom:f[typeof a];if(s(l,"Failed to find unique map container for type",typeof a),l instanceof Map){const s=l.entries();let o;for(;!(o=s.next()).done;)if(m(o.value[0],a)){const s=t.localize([...t.path,n],[e,...t.ancestors]),a={pos:n,value:e[n],dupePos:o.value[1],dupeValue:e[o.value[1]]};return u&&(a.path=i),r("array.unique",a,s)}l.set(a,n)}else{if((!h||void 0!==a)&&void 0!==l[a]){const s={pos:n,value:e[n],dupePos:l[a],dupeValue:e[l[a]]};return u&&(s.path=i),r("array.unique",s,t.localize([...t.path,n],[e,...t.ancestors]))}l[a]=n}}return e},args:["comparator","options"],multi:!0}},cast:{set:{from:Array.isArray,to:(e,t)=>new Set(e)}},rebuild(e){e.$_terms._inclusions=[],e.$_terms._exclusions=[],e.$_terms._requireds=[];for(const t of e.$_terms.items)c.validateSingle(t,e),"required"===t._flags.presence?e.$_terms._requireds.push(t):"forbidden"===t._flags.presence?e.$_terms._exclusions.push(t):e.$_terms._inclusions.push(t);for(const t of e.$_terms.ordered)c.validateSingle(t,e)},manifest:{build:(e,t)=>(t.items&&(e=e.items(...t.items)),t.ordered&&(e=e.ordered(...t.ordered)),e)},messages:{"array.base":"{{#label}} must be an array","array.excludes":"{{#label}} contains an excluded value","array.hasKnown":'{{#label}} does not contain at least one required match for type "{#patternLabel}"',"array.hasUnknown":"{{#label}} does not contain at least one required match","array.includes":"{{#label}} does not match any of the allowed types","array.includesRequiredBoth":"{{#label}} does not contain {{#knownMisses}} and {{#unknownMisses}} other required value(s)","array.includesRequiredKnowns":"{{#label}} does not contain {{#knownMisses}}","array.includesRequiredUnknowns":"{{#label}} does not contain {{#unknownMisses}} required value(s)","array.length":"{{#label}} must contain {{#limit}} items","array.max":"{{#label}} must contain less than or equal to {{#limit}} items","array.min":"{{#label}} must contain at least {{#limit}} items","array.orderedLength":"{{#label}} must contain at most {{#limit}} items","array.sort":"{{#label}} must be sorted in {#order} order by {{#by}}","array.sort.mismatching":"{{#label}} cannot be sorted due to mismatching types","array.sort.unsupported":"{{#label}} cannot be sorted due to unsupported type {#type}","array.sparse":"{{#label}} must not be a sparse array item","array.unique":"{{#label}} contains a duplicate value"}}),c.fillMissedErrors=function(e,t,r,s,n,o){const a=[];let i=0;for(const e of r){const t=e._flags.label;t?a.push(t):++i}a.length?i?t.push(e.$_createError("array.includesRequiredBoth",s,{knownMisses:a,unknownMisses:i},n,o)):t.push(e.$_createError("array.includesRequiredKnowns",s,{knownMisses:a},n,o)):t.push(e.$_createError("array.includesRequiredUnknowns",s,{unknownMisses:i},n,o))},c.fillOrderedErrors=function(e,t,r,s,n,o){const a=[];for(const e of r)"required"===e._flags.presence&&a.push(e);a.length&&c.fillMissedErrors(e,t,a,s,n,o)},c.fastSplice=function(e,t){let r=t;for(;r<e.length;)e[r++]=e[r];--e.length},c.validateSingle=function(e,t){("array"===e.type||e._flags._arrayItems)&&(s(!t._flags.single,"Cannot specify array item with single rule enabled"),t.$_setFlag("_arrayItems",!0,{clone:!1}))},c.sort=function(e,t,r,s,n){const o="ascending"===r.order?1:-1,a=-1*o,i=o,l=(l,u)=>{let f=c.compare(l,u,a,i);if(null!==f)return f;if(r.by&&(l=r.by.resolve(l,s,n),u=r.by.resolve(u,s,n)),f=c.compare(l,u,a,i),null!==f)return f;const m=typeof l;if(m!==typeof u)throw e.$_createError("array.sort.mismatching",t,null,s,n);if("number"!==m&&"string"!==m)throw e.$_createError("array.sort.unsupported",t,{type:m},s,n);return"number"===m?(l-u)*o:l<u?a:i};try{return{value:t.slice().sort(l)}}catch(e){return{errors:e}}},c.compare=function(e,t,r,s){return e===t?0:void 0===e?1:void 0===t?-1:null===e?s:null===t?r:null}},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a=r(21),i={isBool:function(e){return"boolean"==typeof e}};e.exports=n.extend({type:"boolean",flags:{sensitive:{default:!1}},terms:{falsy:{init:null,manifest:"values"},truthy:{init:null,manifest:"values"}},coerce(e,{schema:t}){if("boolean"!=typeof e){if("string"==typeof e){const r=t._flags.sensitive?e:e.toLowerCase();e="true"===r||"false"!==r&&e}return"boolean"!=typeof e&&(e=t.$_terms.truthy&&t.$_terms.truthy.has(e,null,null,!t._flags.sensitive)||(!t.$_terms.falsy||!t.$_terms.falsy.has(e,null,null,!t._flags.sensitive))&&e),{value:e}}},validate(e,{error:t}){if("boolean"!=typeof e)return{value:e,errors:t("boolean.base")}},rules:{truthy:{method(...e){o.verifyFlat(e,"truthy");const t=this.clone();t.$_terms.truthy=t.$_terms.truthy||new a;for(let r=0;r<e.length;++r){const n=e[r];s(void 0!==n,"Cannot call truthy with undefined"),t.$_terms.truthy.add(n)}return t}},falsy:{method(...e){o.verifyFlat(e,"falsy");const t=this.clone();t.$_terms.falsy=t.$_terms.falsy||new a;for(let r=0;r<e.length;++r){const n=e[r];s(void 0!==n,"Cannot call falsy with undefined"),t.$_terms.falsy.add(n)}return t}},sensitive:{method(e=!0){return this.$_setFlag("sensitive",e)}}},cast:{number:{from:i.isBool,to:(e,t)=>e?1:0},string:{from:i.isBool,to:(e,t)=>e?"true":"false"}},manifest:{build:(e,t)=>(t.truthy&&(e=e.truthy(...t.truthy)),t.falsy&&(e=e.falsy(...t.falsy)),e)},messages:{"boolean.base":"{{#label}} must be a boolean"}})},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a=r(7),i={isDate:function(e){return e instanceof Date}};e.exports=n.extend({type:"date",coerce:{from:["number","string"],method:(e,{schema:t})=>({value:i.parse(e,t._flags.format)||e})},validate(e,{schema:t,error:r,prefs:s}){if(e instanceof Date&&!isNaN(e.getTime()))return;const n=t._flags.format;return s.convert&&n&&"string"==typeof e?{value:e,errors:r("date.format",{format:n})}:{value:e,errors:r("date.base")}},rules:{compare:{method:!1,validate(e,t,{date:r},{name:s,operator:n,args:a}){const i="now"===r?Date.now():r.getTime();return o.compare(e.getTime(),i,n)?e:t.error("date."+s,{limit:a.date,value:e})},args:[{name:"date",ref:!0,normalize:e=>"now"===e?e:i.parse(e),assert:e=>null!==e,message:"must have a valid date format"}]},format:{method(e){return s(["iso","javascript","unix"].includes(e),"Unknown date format",e),this.$_setFlag("format",e)}},greater:{method(e){return this.$_addRule({name:"greater",method:"compare",args:{date:e},operator:">"})}},iso:{method(){return this.format("iso")}},less:{method(e){return this.$_addRule({name:"less",method:"compare",args:{date:e},operator:"<"})}},max:{method(e){return this.$_addRule({name:"max",method:"compare",args:{date:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"compare",args:{date:e},operator:">="})}},timestamp:{method(e="javascript"){return s(["javascript","unix"].includes(e),'"type" must be one of "javascript, unix"'),this.format(e)}}},cast:{number:{from:i.isDate,to:(e,t)=>e.getTime()},string:{from:i.isDate,to:(e,{prefs:t})=>a.date(e,t)}},messages:{"date.base":"{{#label}} must be a valid date","date.format":'{{#label}} must be in {msg("date.format." + #format) || #format} format',"date.greater":'{{#label}} must be greater than "{{#limit}}"',"date.less":'{{#label}} must be less than "{{#limit}}"',"date.max":'{{#label}} must be less than or equal to "{{#limit}}"',"date.min":'{{#label}} must be larger than or equal to "{{#limit}}"',"date.format.iso":"ISO 8601 date","date.format.javascript":"timestamp or number of milliseconds","date.format.unix":"timestamp or number of seconds"}}),i.parse=function(e,t){if(e instanceof Date)return e;if("string"!=typeof e&&(isNaN(e)||!isFinite(e)))return null;if(/^\s*$/.test(e))return null;if("iso"===t)return o.isIsoDate(e)?i.date(e.toString()):null;const r=e;if("string"==typeof e&&/^[+-]?\d+(\.\d+)?$/.test(e)&&(e=parseFloat(e)),t){if("javascript"===t)return i.date(1*e);if("unix"===t)return i.date(1e3*e);if("string"==typeof r)return null}return i.date(e)},i.date=function(e){const t=new Date(e);return isNaN(t.getTime())?null:t}},function(e,t,r){"use strict";const s=r(0),n=r(22);e.exports=n.extend({type:"function",properties:{typeof:"function"},rules:{arity:{method(e){return s(Number.isSafeInteger(e)&&e>=0,"n must be a positive integer"),this.$_addRule({name:"arity",args:{n:e}})},validate:(e,t,{n:r})=>e.length===r?e:t.error("function.arity",{n:r})},class:{method(){return this.$_addRule("class")},validate:(e,t)=>/^\s*class\s/.test(e.toString())?e:t.error("function.class",{value:e})},minArity:{method(e){return s(Number.isSafeInteger(e)&&e>0,"n must be a strict positive integer"),this.$_addRule({name:"minArity",args:{n:e}})},validate:(e,t,{n:r})=>e.length>=r?e:t.error("function.minArity",{n:r})},maxArity:{method(e){return s(Number.isSafeInteger(e)&&e>=0,"n must be a positive integer"),this.$_addRule({name:"maxArity",args:{n:e}})},validate:(e,t,{n:r})=>e.length<=r?e:t.error("function.maxArity",{n:r})}},messages:{"function.arity":"{{#label}} must have an arity of {{#n}}","function.class":"{{#label}} must be a class","function.maxArity":"{{#label}} must have an arity lesser or equal to {{#n}}","function.minArity":"{{#label}} must have an arity greater or equal to {{#n}}"}})},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(20),a=r(6),i={};e.exports=function(e,t,r={}){if(s(e&&"object"==typeof e,"Invalid defaults value: must be an object"),s(!t||!0===t||"object"==typeof t,"Invalid source value: must be true, falsy or an object"),s("object"==typeof r,"Invalid options: must be an object"),!t)return null;if(r.shallow)return i.applyToDefaultsWithShallow(e,t,r);const a=n(e);if(!0===t)return a;const l=void 0!==r.nullOverride&&r.nullOverride;return o(a,t,{nullOverride:l,mergeArrays:!1})},i.applyToDefaultsWithShallow=function(e,t,r){const l=r.shallow;s(Array.isArray(l),"Invalid keys");const c=new Map,u=!0===t?null:new Set;for(let r of l){r=Array.isArray(r)?r:r.split(".");const s=a(e,r);s&&"object"==typeof s?c.set(s,u&&a(t,r)||s):u&&u.add(r)}const f=n(e,{},c);if(!u)return f;for(const e of u)i.reachCopy(f,t,e);return o(f,t,{mergeArrays:!1,nullOverride:!1})},i.reachCopy=function(e,t,r){for(const e of r){if(!(e in t))return;t=t[e]}const s=t;let n=e;for(let e=0;e<r.length-1;++e){const t=r[e];"object"!=typeof n[t]&&(n[t]={}),n=n[t]}n[r[r.length-1]]=s}},function(e,t,r){"use strict";const s=r(0),n={};t.Sorter=class{constructor(){this._items=[],this.nodes=[]}add(e,t){const r=[].concat((t=t||{}).before||[]),n=[].concat(t.after||[]),o=t.group||"?",a=t.sort||0;s(!r.includes(o),"Item cannot come before itself: ".concat(o)),s(!r.includes("?"),"Item cannot come before unassociated items"),s(!n.includes(o),"Item cannot come after itself: ".concat(o)),s(!n.includes("?"),"Item cannot come after unassociated items"),Array.isArray(e)||(e=[e]);for(const t of e){const e={seq:this._items.length,sort:a,before:r,after:n,group:o,node:t};this._items.push(e)}const i=this._sort();return s(i,"item","?"!==o?"added into group ".concat(o):"","created a dependencies error"),this.nodes}merge(e){Array.isArray(e)||(e=[e]);for(const t of e)if(t)for(const e of t._items)this._items.push(Object.assign({},e));this._items.sort(n.mergeSort);for(let e=0;e<this._items.length;++e)this._items[e].seq=e;const t=this._sort();return s(t,"merge created a dependencies error"),this.nodes}_sort(){const e={},t=Object.create(null),r=Object.create(null);for(const s of this._items){const n=s.seq,o=s.group;r[o]=r[o]||[],r[o].push(n),e[n]=s.before;for(const e of s.after)t[e]=t[e]||[],t[e].push(n)}for(const t in e){const s=[];for(const n in e[t]){const o=e[t][n];r[o]=r[o]||[],s.push(...r[o])}e[t]=s}for(const s in t)if(r[s])for(const n of r[s])e[n].push(...t[s]);const s={};for(const t in e){const r=e[t];for(const e of r)s[e]=s[e]||[],s[e].push(t)}const n={},o=[];for(let e=0;e<this._items.length;++e){let t=e;if(s[e]){t=null;for(let e=0;e<this._items.length;++e){if(!0===n[e])continue;s[e]||(s[e]=[]);const r=s[e].length;let o=0;for(let t=0;t<r;++t)n[s[e][t]]&&++o;if(o===r){t=e;break}}}null!==t&&(n[t]=!0,o.push(t))}if(o.length!==this._items.length)return!1;const a={};for(const e of this._items)a[e.seq]=e;this._items=[],this.nodes=[];for(const e of o){const t=a[e];this.nodes.push(t.node),this._items.push(t)}return!0}},n.mergeSort=(e,t)=>e.sort===t.sort?0:e.sort<t.sort?-1:1},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a=r(8),i=r(4),l={};e.exports=n.extend({type:"link",properties:{schemaChain:!0},terms:{link:{init:null,manifest:"single",register:!1}},args:(e,t)=>e.ref(t),validate(e,{schema:t,state:r,prefs:n}){s(t.$_terms.link,"Uninitialized link schema");const o=l.generate(t,e,r,n),a=t.$_terms.link[0].ref;return o.$_validate(e,r.nest(o,"link:".concat(a.display,":").concat(o.type)),n)},generate:(e,t,r,s)=>l.generate(e,t,r,s),rules:{ref:{method(e){s(!this.$_terms.link,"Cannot reinitialize schema"),e=a.ref(e),s("value"===e.type||"local"===e.type,"Invalid reference type:",e.type),s("local"===e.type||"root"===e.ancestor||e.ancestor>0,"Link cannot reference itself");const t=this.clone();return t.$_terms.link=[{ref:e}],t}},relative:{method(e=!0){return this.$_setFlag("relative",e)}}},overrides:{concat(e){s(this.$_terms.link,"Uninitialized link schema"),s(o.isSchema(e),"Invalid schema object"),s("link"!==e.type,"Cannot merge type link with another link");const t=this.clone();return t.$_terms.whens||(t.$_terms.whens=[]),t.$_terms.whens.push({concat:e}),t.$_mutateRebuild()}},manifest:{build:(e,t)=>(s(t.link,"Invalid link description missing link"),e.ref(t.link))}}),l.generate=function(e,t,r,s){let n=r.mainstay.links.get(e);if(n)return n._generate(t,r,s).schema;const o=e.$_terms.link[0].ref,{perspective:a,path:i}=l.perspective(o,r);l.assert(a,"which is outside of schema boundaries",o,e,r,s);try{n=i.length?a.$_reach(i):a}catch(t){l.assert(!1,"to non-existing schema",o,e,r,s)}return l.assert("link"!==n.type,"which is another link",o,e,r,s),e._flags.relative||r.mainstay.links.set(e,n),n._generate(t,r,s).schema},l.perspective=function(e,t){if("local"===e.type){for(const{schema:r,key:s}of t.schemas){if((r._flags.id||s)===e.path[0])return{perspective:r,path:e.path.slice(1)};if(r.$_terms.shared)for(const t of r.$_terms.shared)if(t._flags.id===e.path[0])return{perspective:t,path:e.path.slice(1)}}return{perspective:null,path:null}}return"root"===e.ancestor?{perspective:t.schemas[t.schemas.length-1].schema,path:e.path}:{perspective:t.schemas[e.ancestor]&&t.schemas[e.ancestor].schema,path:e.path}},l.assert=function(e,t,r,n,o,a){e||s(!1,'"'.concat(i.label(n._flags,o,a),'" contains link reference "').concat(r.display,'" ').concat(t))}},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a={numberRx:/^\s*[+-]?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+))(?:e([+-]?\d+))?\s*$/i,precisionRx:/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/};e.exports=n.extend({type:"number",flags:{unsafe:{default:!1}},coerce:{from:"string",method(e,{schema:t,error:r}){const s=e.match(a.numberRx);if(!s)return;e=e.trim();const n={value:parseFloat(e)};if(0===n.value&&(n.value=0),!t._flags.unsafe)if(e.match(/e/i)){if(a.normalizeExponent("".concat(n.value/Math.pow(10,s[1]),"e").concat(s[1]))!==a.normalizeExponent(e))return n.errors=r("number.unsafe"),n}else{const t=n.value.toString();if(t.match(/e/i))return n;if(t!==a.normalizeDecimal(e))return n.errors=r("number.unsafe"),n}return n}},validate(e,{schema:t,error:r,prefs:s}){if(e===1/0||e===-1/0)return{value:e,errors:r("number.infinity")};if(!o.isNumber(e))return{value:e,errors:r("number.base")};const n={value:e};if(s.convert){const e=t.$_getRule("precision");if(e){const t=Math.pow(10,e.args.limit);n.value=Math.round(n.value*t)/t}}return 0===n.value&&(n.value=0),!t._flags.unsafe&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&(n.errors=r("number.unsafe")),n},rules:{compare:{method:!1,validate:(e,t,{limit:r},{name:s,operator:n,args:a})=>o.compare(e,r,n)?e:t.error("number."+s,{limit:a.limit,value:e}),args:[{name:"limit",ref:!0,assert:o.isNumber,message:"must be a number"}]},greater:{method(e){return this.$_addRule({name:"greater",method:"compare",args:{limit:e},operator:">"})}},integer:{method(){return this.$_addRule("integer")},validate:(e,t)=>Math.trunc(e)-e==0?e:t.error("number.integer")},less:{method(e){return this.$_addRule({name:"less",method:"compare",args:{limit:e},operator:"<"})}},max:{method(e){return this.$_addRule({name:"max",method:"compare",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"compare",args:{limit:e},operator:">="})}},multiple:{method(e){return this.$_addRule({name:"multiple",args:{base:e}})},validate:(e,t,{base:r},s)=>e%r==0?e:t.error("number.multiple",{multiple:s.args.base,value:e}),args:[{name:"base",ref:!0,assert:e=>"number"==typeof e&&isFinite(e)&&e>0,message:"must be a positive number"}],multi:!0},negative:{method(){return this.sign("negative")}},port:{method(){return this.$_addRule("port")},validate:(e,t)=>Number.isSafeInteger(e)&&e>=0&&e<=65535?e:t.error("number.port")},positive:{method(){return this.sign("positive")}},precision:{method(e){return s(Number.isSafeInteger(e),"limit must be an integer"),this.$_addRule({name:"precision",args:{limit:e}})},validate(e,t,{limit:r}){const s=e.toString().match(a.precisionRx);return Math.max((s[1]?s[1].length:0)-(s[2]?parseInt(s[2],10):0),0)<=r?e:t.error("number.precision",{limit:r,value:e})},convert:!0},sign:{method(e){return s(["negative","positive"].includes(e),"Invalid sign",e),this.$_addRule({name:"sign",args:{sign:e}})},validate:(e,t,{sign:r})=>"negative"===r&&e<0||"positive"===r&&e>0?e:t.error("number.".concat(r))},unsafe:{method(e=!0){return s("boolean"==typeof e,"enabled must be a boolean"),this.$_setFlag("unsafe",e)}}},cast:{string:{from:e=>"number"==typeof e,to:(e,t)=>e.toString()}},messages:{"number.base":"{{#label}} must be a number","number.greater":"{{#label}} must be greater than {{#limit}}","number.infinity":"{{#label}} cannot be infinity","number.integer":"{{#label}} must be an integer","number.less":"{{#label}} must be less than {{#limit}}","number.max":"{{#label}} must be less than or equal to {{#limit}}","number.min":"{{#label}} must be larger than or equal to {{#limit}}","number.multiple":"{{#label}} must be a multiple of {{#multiple}}","number.negative":"{{#label}} must be a negative number","number.port":"{{#label}} must be a valid port","number.positive":"{{#label}} must be a positive number","number.precision":"{{#label}} must have no more than {{#limit}} decimal places","number.unsafe":"{{#label}} must be a safe number"}}),a.normalizeExponent=function(e){return e.replace(/E/,"e").replace(/\.(\d*[1-9])?0+e/,".$1e").replace(/\.e/,"e").replace(/e\+/,"e").replace(/^\+/,"").replace(/^(-?)0+([1-9])/,"$1$2")},a.normalizeDecimal=function(e){return(e=e.replace(/^\+/,"").replace(/\.0+$/,"").replace(/^(-?)\.([^\.]*)$/,"$10.$2").replace(/^(-?)0+([1-9])/,"$1$2")).includes(".")&&e.endsWith("0")&&(e=e.replace(/0+$/,"")),"-0"===e?"0":e}},function(e,t,r){"use strict";const s=r(22);e.exports=s.extend({type:"object",cast:{map:{from:e=>e&&"object"==typeof e,to:(e,t)=>new Map(Object.entries(e))}}})},function(e,t,r){"use strict";function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=r(0),i=r(23),l=r(49),c=r(50),u=r(27),f=r(51),m=r(26),h=r(3),d=r(1),p={tlds:f instanceof Set&&{tlds:{allow:f,deny:null}},base64Regex:{true:{true:/^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}==|[\w\-]{3}=)?$/,false:/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/},false:{true:/^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}(==)?|[\w\-]{3}=?)?$/,false:/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/}},dataUriRegex:/^data:[\w+.-]+\/[\w+.-]+;((charset=[\w-]+|base64),)?(.*)$/,hexRegex:/^[a-f0-9]+$/i,ipRegex:c.regex().regex,isoDurationRegex:/^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?$/,guidBrackets:{"{":"}","[":"]","(":")","":""},guidVersions:{uuidv1:"1",uuidv2:"2",uuidv3:"3",uuidv4:"4",uuidv5:"5"},cidrPresences:["required","optional","forbidden"],normalizationForms:["NFC","NFD","NFKC","NFKD"]};e.exports=h.extend({type:"string",flags:{insensitive:{default:!1},truncate:{default:!1}},terms:{replacements:{init:null}},coerce:{from:"string",method(e,{schema:t,state:r,prefs:s}){const n=t.$_getRule("normalize");n&&(e=e.normalize(n.args.form));const o=t.$_getRule("case");o&&(e="upper"===o.args.direction?e.toLocaleUpperCase():e.toLocaleLowerCase());const a=t.$_getRule("trim");if(a&&a.args.enabled&&(e=e.trim()),t.$_terms.replacements)for(const r of t.$_terms.replacements)e=e.replace(r.pattern,r.replacement);const i=t.$_getRule("hex");if(i&&i.args.options.byteAligned&&e.length%2!=0&&(e="0".concat(e)),t.$_getRule("isoDate")){const t=p.isoDate(e);t&&(e=t)}if(t._flags.truncate){const n=t.$_getRule("max");if(n){let o=n.args.limit;if(d.isResolvable(o)&&(o=o.resolve(e,r,s),!d.limit(o)))return{value:e,errors:t.$_createError("any.ref",o,{ref:n.args.limit,arg:"limit",reason:"must be a positive integer"},r,s)};e=e.slice(0,o)}}return{value:e}}},validate:(e,{error:t})=>"string"!=typeof e?{value:e,errors:t("string.base")}:""===e?{value:e,errors:t("string.empty")}:void 0,rules:{alphanum:{method(){return this.$_addRule("alphanum")},validate:(e,t)=>/^[a-zA-Z0-9]+$/.test(e)?e:t.error("string.alphanum")},base64:{method(e={}){return d.assertOptions(e,["paddingRequired","urlSafe"]),e=n({urlSafe:!1,paddingRequired:!0},e),a("boolean"==typeof e.paddingRequired,"paddingRequired must be boolean"),a("boolean"==typeof e.urlSafe,"urlSafe must be boolean"),this.$_addRule({name:"base64",args:{options:e}})},validate:(e,t,{options:r})=>p.base64Regex[r.paddingRequired][r.urlSafe].test(e)?e:t.error("string.base64")},case:{method(e){return a(["lower","upper"].includes(e),"Invalid case:",e),this.$_addRule({name:"case",args:{direction:e}})},validate:(e,t,{direction:r})=>"lower"===r&&e===e.toLocaleLowerCase()||"upper"===r&&e===e.toLocaleUpperCase()?e:t.error("string.".concat(r,"case")),convert:!0},creditCard:{method(){return this.$_addRule("creditCard")},validate(e,t){let r=e.length,s=0,n=1;for(;r--;){const t=e.charAt(r)*n;s+=t-9*(t>9),n^=3}return s>0&&s%10==0?e:t.error("string.creditCard")}},dataUri:{method(e={}){return d.assertOptions(e,["paddingRequired"]),e=n({paddingRequired:!0},e),a("boolean"==typeof e.paddingRequired,"paddingRequired must be boolean"),this.$_addRule({name:"dataUri",args:{options:e}})},validate(e,t,{options:r}){const s=e.match(p.dataUriRegex);if(s){if(!s[2])return e;if("base64"!==s[2])return e;if(p.base64Regex[r.paddingRequired].false.test(s[3]))return e}return t.error("string.dataUri")}},domain:{method(e){e&&d.assertOptions(e,["allowUnicode","minDomainSegments","tlds"]);const t=p.addressOptions(e);return this.$_addRule({name:"domain",args:{options:e},address:t})},validate:(e,t,r,{address:s})=>i.isValid(e,s)?e:t.error("string.domain")},email:{method(e={}){d.assertOptions(e,["allowUnicode","ignoreLength","minDomainSegments","multiple","separator","tlds"]),a(void 0===e.multiple||"boolean"==typeof e.multiple,"multiple option must be an boolean");const t=p.addressOptions(e),r=new RegExp("\\s*[".concat(e.separator?u(e.separator):",","]\\s*"));return this.$_addRule({name:"email",args:{options:e},regex:r,address:t})},validate(e,t,{options:r},{regex:s,address:n}){const o=r.multiple?e.split(s):[e],a=[];for(const e of o)l.isValid(e,n)||a.push(e);return a.length?t.error("string.email",{value:e,invalids:a}):e}},guid:{alias:"uuid",method(e={}){d.assertOptions(e,["version"]);let t="";if(e.version){const r=[].concat(e.version);a(r.length>=1,"version must have at least 1 valid version specified");const s=new Set;for(let e=0;e<r.length;++e){const n=r[e];a("string"==typeof n,"version at position "+e+" must be a string");const o=p.guidVersions[n.toLowerCase()];a(o,"version at position "+e+" must be one of "+Object.keys(p.guidVersions).join(", ")),a(!s.has(o),"version at position "+e+" must not be a duplicate"),t+=o,s.add(o)}}const r=new RegExp("^([\\[{\\(]?)[0-9A-F]{8}([:-]?)[0-9A-F]{4}\\2?[".concat(t||"0-9A-F","][0-9A-F]{3}\\2?[").concat(t?"89AB":"0-9A-F","][0-9A-F]{3}\\2?[0-9A-F]{12}([\\]}\\)]?)$"),"i");return this.$_addRule({name:"guid",args:{options:e},regex:r})},validate(e,t,r,{regex:s}){const n=s.exec(e);return n?p.guidBrackets[n[1]]!==n[n.length-1]?t.error("string.guid"):e:t.error("string.guid")}},hex:{method(e={}){return d.assertOptions(e,["byteAligned"]),e=n({byteAligned:!1},e),a("boolean"==typeof e.byteAligned,"byteAligned must be boolean"),this.$_addRule({name:"hex",args:{options:e}})},validate:(e,t,{options:r})=>p.hexRegex.test(e)?r.byteAligned&&e.length%2!=0?t.error("string.hexAlign"):e:t.error("string.hex")},hostname:{method(){return this.$_addRule("hostname")},validate:(e,t)=>i.isValid(e,{minDomainSegments:1})||p.ipRegex.test(e)?e:t.error("string.hostname")},insensitive:{method(){return this.$_setFlag("insensitive",!0)}},ip:{method(e={}){d.assertOptions(e,["cidr","version"]);const{cidr:t,versions:r,regex:s}=c.regex(e),n=e.version?r:void 0;return this.$_addRule({name:"ip",args:{options:{cidr:t,version:n}},regex:s})},validate:(e,t,{options:r},{regex:s})=>s.test(e)?e:r.version?t.error("string.ipVersion",{value:e,cidr:r.cidr,version:r.version}):t.error("string.ip",{value:e,cidr:r.cidr})},isoDate:{method(){return this.$_addRule("isoDate")},validate:(e,{error:t})=>p.isoDate(e)?e:t("string.isoDate")},isoDuration:{method(){return this.$_addRule("isoDuration")},validate:(e,t)=>p.isoDurationRegex.test(e)?e:t.error("string.isoDuration")},length:{method(e,t){return p.length(this,"length",e,"=",t)},validate(e,t,{limit:r,encoding:s},{name:n,operator:o,args:a}){const i=!s&&e.length;return d.compare(i,r,o)?e:t.error("string."+n,{limit:a.limit,value:e,encoding:s})},args:[{name:"limit",ref:!0,assert:d.limit,message:"must be a positive integer"},"encoding"]},lowercase:{method(){return this.case("lower")}},max:{method(e,t){return p.length(this,"max",e,"<=",t)},args:["limit","encoding"]},min:{method(e,t){return p.length(this,"min",e,">=",t)},args:["limit","encoding"]},normalize:{method(e="NFC"){return a(p.normalizationForms.includes(e),"normalization form must be one of "+p.normalizationForms.join(", ")),this.$_addRule({name:"normalize",args:{form:e}})},validate:(e,{error:t},{form:r})=>e===e.normalize(r)?e:t("string.normalize",{value:e,form:r}),convert:!0},pattern:{alias:"regex",method(e,t={}){a(e instanceof RegExp,"regex must be a RegExp"),a(!e.flags.includes("g")&&!e.flags.includes("y"),"regex should not use global or sticky mode"),"string"==typeof t&&(t={name:t}),d.assertOptions(t,["invert","name"]);const r=["string.pattern",t.invert?".invert":"",t.name?".name":".base"].join("");return this.$_addRule({name:"pattern",args:{regex:e,options:t},errorCode:r})},validate:(e,t,{regex:r,options:s},{errorCode:n})=>r.test(e)^s.invert?e:t.error(n,{name:s.name,regex:r,value:e}),args:["regex","options"],multi:!0},replace:{method(e,t){"string"==typeof e&&(e=new RegExp(u(e),"g")),a(e instanceof RegExp,"pattern must be a RegExp"),a("string"==typeof t,"replacement must be a String");const r=this.clone();return r.$_terms.replacements||(r.$_terms.replacements=[]),r.$_terms.replacements.push({pattern:e,replacement:t}),r}},token:{method(){return this.$_addRule("token")},validate:(e,t)=>/^\w+$/.test(e)?e:t.error("string.token")},trim:{method(e=!0){return a("boolean"==typeof e,"enabled must be a boolean"),this.$_addRule({name:"trim",args:{enabled:e}})},validate:(e,t,{enabled:r})=>r&&e!==e.trim()?t.error("string.trim"):e,convert:!0},truncate:{method(e=!0){return a("boolean"==typeof e,"enabled must be a boolean"),this.$_setFlag("truncate",e)}},uppercase:{method(){return this.case("upper")}},uri:{method(e={}){d.assertOptions(e,["allowRelative","allowQuerySquareBrackets","domain","relativeOnly","scheme"]),e.domain&&d.assertOptions(e.domain,["allowUnicode","minDomainSegments","tlds"]);const{regex:t,scheme:r}=m.regex(e),s=e.domain?p.addressOptions(e.domain):null;return this.$_addRule({name:"uri",args:{options:e},regex:t,domain:s,scheme:r})},validate(e,t,{options:r},{regex:s,domain:n,scheme:o}){if(["http:/","https:/"].includes(e))return t.error("string.uri");const a=s.exec(e);if(a){if(n){const e=a[1]||a[2];if(!i.isValid(e,n))return t.error("string.domain",{value:e})}return e}return r.relativeOnly?t.error("string.uriRelativeOnly"):r.scheme?t.error("string.uriCustomScheme",{scheme:o,value:e}):t.error("string.uri")}}},manifest:{build(e,t){if(t.replacements)for(const{pattern:r,replacement:s}of t.replacements)e=e.replace(r,s);return e}},messages:{"string.alphanum":"{{#label}} must only contain alpha-numeric characters","string.base":"{{#label}} must be a string","string.base64":"{{#label}} must be a valid base64 string","string.creditCard":"{{#label}} must be a credit card","string.dataUri":"{{#label}} must be a valid dataUri string","string.domain":"{{#label}} must contain a valid domain name","string.email":"{{#label}} must be a valid email","string.empty":"{{#label}} is not allowed to be empty","string.guid":"{{#label}} must be a valid GUID","string.hex":"{{#label}} must only contain hexadecimal characters","string.hexAlign":"{{#label}} hex decoded representation must be byte aligned","string.hostname":"{{#label}} must be a valid hostname","string.ip":"{{#label}} must be a valid ip address with a {{#cidr}} CIDR","string.ipVersion":"{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR","string.isoDate":"{{#label}} must be in iso format","string.isoDuration":"{{#label}} must be a valid ISO 8601 duration","string.length":"{{#label}} length must be {{#limit}} characters long","string.lowercase":"{{#label}} must only contain lowercase characters","string.max":"{{#label}} length must be less than or equal to {{#limit}} characters long","string.min":"{{#label}} length must be at least {{#limit}} characters long","string.normalize":"{{#label}} must be unicode normalized in the {{#form}} form","string.token":"{{#label}} must only contain alpha-numeric and underscore characters","string.pattern.base":'{{#label}} with value "{[.]}" fails to match the required pattern: {{#regex}}',"string.pattern.name":'{{#label}} with value "{[.]}" fails to match the {{#name}} pattern',"string.pattern.invert.base":'{{#label}} with value "{[.]}" matches the inverted pattern: {{#regex}}',"string.pattern.invert.name":'{{#label}} with value "{[.]}" matches the inverted {{#name}} pattern',"string.trim":"{{#label}} must not have leading or trailing whitespace","string.uri":"{{#label}} must be a valid uri","string.uriCustomScheme":"{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern","string.uriRelativeOnly":"{{#label}} must be a valid relative uri","string.uppercase":"{{#label}} must only contain uppercase characters"}}),p.addressOptions=function(e){if(!e)return e;if(a(void 0===e.minDomainSegments||Number.isSafeInteger(e.minDomainSegments)&&e.minDomainSegments>0,"minDomainSegments must be a positive integer"),!1===e.tlds)return e;if(!0===e.tlds||void 0===e.tlds)return a(p.tlds,"Built-in TLD list disabled"),Object.assign({},e,p.tlds);a("object"==typeof e.tlds,"tlds must be true, false, or an object");const t=e.tlds.deny;if(t)return Array.isArray(t)&&(e=Object.assign({},e,{tlds:{deny:new Set(t)}})),a(e.tlds.deny instanceof Set,"tlds.deny must be an array, Set, or boolean"),a(!e.tlds.allow,"Cannot specify both tlds.allow and tlds.deny lists"),e;const r=e.tlds.allow;return r?!0===r?(a(p.tlds,"Built-in TLD list disabled"),Object.assign({},e,p.tlds)):(Array.isArray(r)&&(e=Object.assign({},e,{tlds:{allow:new Set(r)}})),a(e.tlds.allow instanceof Set,"tlds.allow must be an array, Set, or boolean"),e):e},p.isoDate=function(e){if(!d.isIsoDate(e))return null;const t=new Date(e);return isNaN(t.getTime())?null:t.toISOString()},p.length=function(e,t,r,s,n){return a(!n||!1,"Invalid encoding:",n),e.$_addRule({name:t,method:"length",args:{limit:r,encoding:n},operator:s})}},function(e,t,r){"use strict";const s=r(24),n=r(23),o=r(25),a={nonAsciiRx:/[^\x00-\x7f]/,encoder:new(s.TextEncoder||TextEncoder)};t.analyze=function(e,t){return a.email(e,t)},t.isValid=function(e,t){return!a.email(e,t)},a.email=function(e,t={}){if("string"!=typeof e)throw new Error("Invalid input: email must be a string");if(!e)return o.code("EMPTY_STRING");const r=!a.nonAsciiRx.test(e);if(!r){if(!1===t.allowUnicode)return o.code("FORBIDDEN_UNICODE");e=e.normalize("NFC")}const s=e.split("@");if(2!==s.length)return s.length>2?o.code("MULTIPLE_AT_CHAR"):o.code("MISSING_AT_CHAR");const[i,l]=s;if(!i)return o.code("EMPTY_LOCAL");if(!t.ignoreLength){if(e.length>254)return o.code("ADDRESS_TOO_LONG");if(a.encoder.encode(i).length>64)return o.code("LOCAL_TOO_LONG")}return a.local(i,r)||n.analyze(l,t)},a.local=function(e,t){const r=e.split(".");for(const e of r){if(!e.length)return o.code("EMPTY_LOCAL_SEGMENT");if(t){if(!a.atextRx.test(e))return o.code("INVALID_LOCAL_CHARS")}else for(const t of e){if(a.atextRx.test(t))continue;const e=a.binary(t);if(!a.atomRx.test(e))return o.code("INVALID_LOCAL_CHARS")}}},a.binary=function(e){return Array.from(a.encoder.encode(e)).map(e=>String.fromCharCode(e)).join("")},a.atextRx=/^[\w!#\$%&'\*\+\-/=\?\^`\{\|\}~]+$/,a.atomRx=new RegExp(["(?:[\\xc2-\\xdf][\\x80-\\xbf])","(?:\\xe0[\\xa0-\\xbf][\\x80-\\xbf])|(?:[\\xe1-\\xec][\\x80-\\xbf]{2})|(?:\\xed[\\x80-\\x9f][\\x80-\\xbf])|(?:[\\xee-\\xef][\\x80-\\xbf]{2})","(?:\\xf0[\\x90-\\xbf][\\x80-\\xbf]{2})|(?:[\\xf1-\\xf3][\\x80-\\xbf]{3})|(?:\\xf4[\\x80-\\x8f][\\x80-\\xbf]{2})"].join("|"))},function(e,t,r){"use strict";const s=r(0),n=r(26);t.regex=function(e={}){s(void 0===e.cidr||"string"==typeof e.cidr,"options.cidr must be a string");const t=e.cidr?e.cidr.toLowerCase():"optional";s(["required","optional","forbidden"].includes(t),"options.cidr must be one of required, optional, forbidden"),s(void 0===e.version||"string"==typeof e.version||Array.isArray(e.version),"options.version must be a string or an array of string");let r=e.version||["ipv4","ipv6","ipvfuture"];Array.isArray(r)||(r=[r]),s(r.length>=1,"options.version must have at least 1 version specified");for(let e=0;e<r.length;++e)s("string"==typeof r[e],"options.version must only contain strings"),r[e]=r[e].toLowerCase(),s(["ipv4","ipv6","ipvfuture"].includes(r[e]),"options.version contains unknown version "+r[e]+" - must be one of ipv4, ipv6, ipvfuture");r=Array.from(new Set(r));const o=r.map(e=>{if("forbidden"===t)return n.ip[e];const r="\\/".concat("ipv4"===e?n.ip.v4Cidr:n.ip.v6Cidr);return"required"===t?"".concat(n.ip[e]).concat(r):"".concat(n.ip[e],"(?:").concat(r,")?")}),a="(?:".concat(o.join("|"),")"),i=new RegExp("^".concat(a,"$"));return{cidr:t,versions:r,regex:i,raw:a}}},function(e,t){},function(e,t,r){"use strict";const s=r(0),n=r(3),o={};o.Map=class extends Map{slice(){return new o.Map(this)}},e.exports=n.extend({type:"symbol",terms:{map:{init:new o.Map}},coerce:{method(e,{schema:t,error:r}){const s=t.$_terms.map.get(e);return s&&(e=s),t._flags.only&&"symbol"!=typeof e?{value:e,errors:r("symbol.map",{map:t.$_terms.map})}:{value:e}}},validate(e,{error:t}){if("symbol"!=typeof e)return{value:e,errors:t("symbol.base")}},rules:{map:{method(e){e&&!e[Symbol.iterator]&&"object"==typeof e&&(e=Object.entries(e)),s(e&&e[Symbol.iterator],"Iterable must be an iterable or object");const t=this.clone(),r=[];for(const n of e){s(n&&n[Symbol.iterator],"Entry must be an iterable");const[e,o]=n;s("object"!=typeof e&&"function"!=typeof e&&"symbol"!=typeof e,"Key must not be of type object, function, or Symbol"),s("symbol"==typeof o,"Value must be a Symbol"),t.$_terms.map.set(e,o),r.push(o)}return t.valid(...r)}}},manifest:{build:(e,t)=>(t.map&&(e=e.map(t.map)),e)},messages:{"symbol.base":"{{#label}} must be a symbol","symbol.map":"{{#label}} must be one of {{#map}}"}})}])}));

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fadduser&absolutePagePath=%2FUsers%2Fnoahmaizels%2FDesktop%2FVideotastic%2Ffrontend%2Fpages%2Fadduser.js&hotRouterUpdates=true!./":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fadduser&absolutePagePath=%2FUsers%2Fnoahmaizels%2FDesktop%2FVideotastic%2Ffrontend%2Fpages%2Fadduser.js&hotRouterUpdates=true ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/adduser",
      function () {
        var mod = __webpack_require__(/*! ./pages/adduser.js */ "./pages/adduser.js");
        if (true) {
          module.hot.accept(/*! ./pages/adduser.js */ "./pages/adduser.js", function () {
            if (!next.router.components["/adduser"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/adduser.js */ "./pages/adduser.js");
            next.router.update("/adduser", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      "/_next/data/".concat(__NEXT_DATA__.buildId).concat(delBasePath(pathname), ".json")),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (as.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: pathname,
          query: query
        }), as);
      }

      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  var namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) {}

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  }, namedParameterizedRoute ? {
    namedRegex: "^".concat(namedParameterizedRoute, "(?:/)?$")
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/adduser.js":
/*!**************************!*\
  !*** ./pages/adduser.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hapi/joi */ "./node_modules/@hapi/joi/dist/joi-browser.min.js");
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/noahmaizels/Desktop/Videotastic/frontend/pages/adduser.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function AddUser() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      newUserInfo = _useState[0],
      setNewUserInfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    username: null
  }),
      currentUser = _useState2[0],
      setCurrentUser = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    node_fetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3000/currentuser', {
      credentials: 'include',
      headers: {
        'Origin': 'http://localhost:3001/'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      setCurrentUser({
        username: json.username
      });
      if (json.username) next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    })["catch"](function (err) {
      console.log(err);
    });
  }, []);

  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    var schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.object({
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

    var _schema$validate = schema.validate(newUserInfo, {
      abortEarly: false
    }),
        value = _schema$validate.value,
        error = _schema$validate.error;

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

      }).then(function (res) {
        return res.json();
      }).then(function (body) {
        console.log(body);
        alert('User registered, taking you to Login page...');
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
      });
      var resetInfo = {};
      Object.keys(newUserInfo).forEach(function (key) {
        return resetInfo[key] = '';
      });
      setNewUserInfo(resetInfo);
    }
  };

  var handleFormChange = function handleFormChange(evt) {
    var newFormInfo = Object.assign({}, newUserInfo);
    newFormInfo[evt.target.name] = evt.target.value;
    setNewUserInfo(newFormInfo);
  };

  var handleLogOut = function handleLogOut() {
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
  }, ".showWhenUser.__jsx-style-dynamic-selector{display:".concat(currentUser.username ? 'inline' : 'none', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL1ZpZGVvdGFzdGljL2Zyb250ZW5kL3BhZ2VzL2FkZHVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0lnQixBQUlNLHFDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL1ZpZGVvdGFzdGljL2Zyb250ZW5kL3BhZ2VzL2FkZHVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcbmltcG9ydCBKb2kgZnJvbSAnQGhhcGkvam9pJ1xuXG5mdW5jdGlvbiBBZGRVc2VyKCkge1xuICBcbiAgY29uc3QgW25ld1VzZXJJbmZvLCBzZXROZXdVc2VySW5mb10gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSh7dXNlcm5hbWU6IG51bGx9KVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2N1cnJlbnR1c2VyJywge1xuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJywgXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdPcmlnaW4nOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxLydcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4ge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgc2V0Q3VycmVudFVzZXIoe3VzZXJuYW1lOiBqc29uLnVzZXJuYW1lfSlcbiAgICAgIGlmIChqc29uLnVzZXJuYW1lKSBSb3V0ZXIucHVzaCgnLycpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KSAgICBcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KHtcbiAgICAgIGlkOiBKb2kuYWxsb3cobnVsbCksXG4gICAgICB1c2VyX25hbWU6IEpvaS5zdHJpbmcoKVxuICAgICAgICAuYWxwaGFudW0oKVxuICAgICAgICAubWluKDMpXG4gICAgICAgIC5tYXgoMzApXG4gICAgICAgIC5yZXF1aXJlZCgpLFxuICAgICAgZmlyc3RfbmFtZTogSm9pLnN0cmluZygpXG4gICAgICAgIC5hbHBoYW51bSgpXG4gICAgICAgIC5taW4oMylcbiAgICAgICAgLm1heCgzMClcbiAgICAgICAgLnJlcXVpcmVkKCksXG4gICAgICBsYXN0X25hbWU6IEpvaS5zdHJpbmcoKVxuICAgICAgICAuYWxwaGFudW0oKVxuICAgICAgICAubWluKDMpXG4gICAgICAgIC5tYXgoMzApXG4gICAgICAgIC5yZXF1aXJlZCgpLFxuICAgICAgYmlydGhfZGF0ZTogSm9pLmRhdGUoKVxuICAgICAgICAucmVxdWlyZWQoKSxcbiAgICAgIHBhc3N3b3JkOiBKb2kuc3RyaW5nKClcbiAgICAgICAgLnBhdHRlcm4obmV3IFJlZ0V4cCgnXlthLXpBLVowLTldezMsMzB9JCcpKVxuICAgICAgICAucmVxdWlyZWQoKSxcbiAgICAgIHJlcGVhdF9wYXNzd29yZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkudmFsaWQoSm9pLnJlZigncGFzc3dvcmQnKSksXG4gICAgICBlbWFpbDogSm9pLnN0cmluZygpXG4gICAgICAgIC5lbWFpbCh7IG1pbkRvbWFpblNlZ21lbnRzOiAyLCB0bGRzOiB7YWxsb3c6IGZhbHNlfSB9KVxuICAgICAgICAucmVxdWlyZWQoKSxcbiAgICB9KVxuICAgIGxldCB7dmFsdWUsIGVycm9yfSA9IHNjaGVtYS52YWxpZGF0ZShuZXdVc2VySW5mbywge2Fib3J0RWFybHk6IGZhbHNlfSlcbiAgICBcbiAgICBpZiAoZXJyb3IpIGFsZXJ0KGVycm9yLm1lc3NhZ2UpXG4gICAgZWxzZSB7XG4gICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsIC8vIGluY2x1ZGUsICpzYW1lLW9yaWdpbiwgb21pdFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIC8vICdPcmlnaW4nOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxLydcbiAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0OiAnZm9sbG93JywgLy8gbWFudWFsLCAqZm9sbG93LCBlcnJvclxuICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsIC8vIG5vLXJlZmVycmVyLCAqbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUsIG9yaWdpbiwgb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCBzYW1lLW9yaWdpbiwgc3RyaWN0LW9yaWdpbiwgc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgdW5zYWZlLXVybFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VXNlckluZm8pIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGJvZHkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYm9keSlcbiAgICAgIGFsZXJ0KCdVc2VyIHJlZ2lzdGVyZWQsIHRha2luZyB5b3UgdG8gTG9naW4gcGFnZS4uLicpXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgfSlcbiAgICBsZXQgcmVzZXRJbmZvID0ge31cbiAgICBPYmplY3Qua2V5cyhuZXdVc2VySW5mbykuZm9yRWFjaChrZXkgPT4gcmVzZXRJbmZvW2tleV0gPSAnJylcbiAgICBzZXROZXdVc2VySW5mbyhyZXNldEluZm8pXG4gICAgfVxuICB9XG4gIFxuICBjb25zdCBoYW5kbGVGb3JtQ2hhbmdlID0gKGV2dCkgPT4ge1xuICAgIGxldCBuZXdGb3JtSW5mbyA9IE9iamVjdC5hc3NpZ24oe30sIG5ld1VzZXJJbmZvKVxuICAgIG5ld0Zvcm1JbmZvW2V2dC50YXJnZXQubmFtZV0gPSBldnQudGFyZ2V0LnZhbHVlXG4gICAgc2V0TmV3VXNlckluZm8obmV3Rm9ybUluZm8pXG4gIH1cblxuICBjb25zdCBoYW5kbGVMb2dPdXQgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuY29va2llID0gXCJqd3Q9XCJcbiAgICBzZXRDdXJyZW50VXNlcih7dXNlcm5hbWU6IG51bGx9KVxuICB9XG4gIHJldHVybiAoXG4gIDxkaXY+XG4gICAgUmVnaXN0ZXIgYSBuZXcgdXNlcjpcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgVXNlcm5hbWU6IFxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJfbmFtZVwiIHZhbHVlPXtuZXdVc2VySW5mby51c2VyX25hbWV9Lz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIEZpcnN0IG5hbWU6IFxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0X25hbWVcIiB2YWx1ZT17bmV3VXNlckluZm8uZmlyc3RfbmFtZX0vPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgTGFzdCBuYW1lOiBcbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0X25hbWVcIiB2YWx1ZT17bmV3VXNlckluZm8ubGFzdF9uYW1lfS8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGxhYmVsPlxuICAgICAgICBCaXJ0aCBkYXRlOiBcbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfSB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJiaXJ0aF9kYXRlXCIgdmFsdWU9e25ld1VzZXJJbmZvLmJpcnRoX2RhdGV9Lz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIEVtYWlsOiBcbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtuZXdVc2VySW5mby5lbWFpbH0vPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgUGFzc3dvcmQ6IFxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2V9IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtuZXdVc2VySW5mby5wYXNzd29yZH0gLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIFJlcGVhdCBwYXNzd29yZDogXG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZX0gdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInJlcGVhdF9wYXNzd29yZFwiIHZhbHVlPXtuZXdVc2VySW5mby5yZXBlYXRfcGFzc3dvcmR9IC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlJlZ2lzdGVyXCIgLz5cbiAgICA8L2Zvcm0+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaG93V2hlblVzZXJcIiBvbkNsaWNrPXtoYW5kbGVMb2dPdXR9IHR5cGU9XCJidXR0b25cIj5Mb2cgb3V0PC9idXR0b24+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNob3dXaGVuVXNlciB7XG4gICAgICAgIGRpc3BsYXk6ICR7Y3VycmVudFVzZXIudXNlcm5hbWUgPyAnaW5saW5lJyA6ICdub25lJ31cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFVzZXIiXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/Videotastic/frontend/pages/adduser.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (AddUser);

/***/ }),

/***/ 2:
/*!****************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fadduser&absolutePagePath=%2FUsers%2Fnoahmaizels%2FDesktop%2FVideotastic%2Ffrontend%2Fpages%2Fadduser.js&hotRouterUpdates=true ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fadduser&absolutePagePath=%2FUsers%2Fnoahmaizels%2FDesktop%2FVideotastic%2Ffrontend%2Fpages%2Fadduser.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fadduser&absolutePagePath=%2FUsers%2Fnoahmaizels%2FDesktop%2FVideotastic%2Ffrontend%2Fpages%2Fadduser.js&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=adduser.js.map