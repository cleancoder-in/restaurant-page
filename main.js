/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/red-bamboo-bgImage.jpeg */ "./src/images/red-bamboo-bgImage.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/about-pg-img1.jpg */ "./src/images/about-pg-img1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/about-pg-img2.jpg */ "./src/images/about-pg-img2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/contact-pg-img1.jpg */ "./src/images/contact-pg-img1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/contact-pg-img2.jpg */ "./src/images/contact-pg-img2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: cursive;
  font-size: 16px;
  line-height: 1.6;
}

h1 {
  color: #52071b;
  text-align: center;
  text-transform: capitalize;
  text-decoration: underline;
  font-size: 36px;
}

/*************** header styles ***************/
header {
  width: 100%;
  padding: 20px;
  background-color: #52071b;
}

header nav {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header nav .logo {
  width: 100px;
  height: 100px;
  cursor: pointer;
}

header nav .logo img {
  width: 100%;
  object-fit: cover;
  border-radius: 3px;
}

header nav .btn-tab {
  display: flex;
  gap: 10px;
}

header nav .btn-tab .nav-btn {
  border: 1px solid #efefef;
  padding: 8px 16px;
  border-radius: 3px;
  font-size: 18px;
}

header nav .btn-tab .nav-btn:hover,
header nav .btn-tab .nav-btn.active {
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
}

/***************** homepage styles ******************/
.home-div {
  width: 100%;
  height: auto;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 30px;
}

.home-div .card-div {
  width: 60%;
  margin: 30px auto;
  box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-div .card-div .cardImg-div {
  width: 30%;
  height: 30%;
  margin: 0 auto;
  mix-blend-mode: multiply;
}

.home-div .card-div .cardImg-div img {
  width: 100%;
  object-fit: cover;
}

.home-div .card-div p {
  font-size: 1.5rem;
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 1.2px;
  margin-top: -10px;
  margin-bottom: 20px;
  padding: 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.home-div .card-div .btn {
  border: 1px solid black;
  border-radius: 7px;
  padding: 10px 30px;
  background-color: rgb(218, 165, 32);
  font-size: 18px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 6px rgb(0 0 0);
  transition: transform 0.3s ease-in-out;
}

.home-div .card-div .btn:hover {
  cursor: pointer;
  transform: scale(1.05);
}

/*************** menu styles ****************/

.menu {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 auto;
  margin-top: 60px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.9);
  padding: 10px;
}

.menu .menu-item {
  border: 1px solid #505050;
  border-radius: 5px;
  flex-basis: 49%;
  flex-grow: 1;
  display: flex;
  padding: 20px;
}

.menu .menu-item .info-div {
  flex-basis: 100%;
}
.menu .menu-item .info-div .name {
  font-weight: 500;
  font-size: 18px;
}
.menu .menu-item .info-div .desc {
  font-size: 14px;
}

.menu .menu-item .img-div {
  width: 150px;
  height: 130px;
  align-self: center;
}

.menu .menu-item .img-div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

/***************** about page styles ***************/

.about-page .section {
  /* height: 500px; */
}

.about-page .section .text-div {
  padding: 60px;
  box-shadow: 0 0 12px 6px #52071b inset;
}
.about-page .section .text-div .p-head {
  text-align: center;
  font-size: 22px;
  margin-bottom: 20px;
  text-decoration: underline;
  color: #52071b;
}
.about-page .section .text-div .p-text {
  font-size: 20px;
}

.about-page .section .img-div {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 250px;
}

.about-page .section:nth-child(1) .img-div {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.about-page .section:nth-child(2) .img-div {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

/****************** contact page styles **************/

.contact-page .section {
  display: flex;
  min-height: 450px;
}

.contact-page .section .img-box {
  flex-basis: 50%;
  background-position: center;
  background-size: cover;
}

.contact-page .section:nth-child(1) .img-box {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.contact-page .section .text-box {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}

.contact-page .section .text-box .pTitle {
  color: #52071b;
  text-decoration: underline;
  text-transform: uppercase;
  font-size: 18px;
  margin: 30px 0;
}

.contact-page .section .text-box .contact-info {
  margin-bottom: 30px;
}

.contact-page .section .text-box .contact-info p {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
}

.contact-page .section .text-box .contact-info p span {
  display: inline-block;
  width: 12px;
}

.contact-page .section:nth-child(2) .img-box {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-position: bottom;
}

.contact-page .section .text-box .hours-info .day {
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
}

.contact-page .section .text-box .contact-social {
  display: flex;
  gap: 30px;
}

.contact-page .section .text-box .contact-social p {
  display: inline-block;
  width: 17px;
}

.contact-page .section .text-box .contact-social p:hover {
  cursor: pointer;
  fill: #52071b;
  transform: scale(1.1);
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: cursive;\r\n  font-size: 16px;\r\n  line-height: 1.6;\r\n}\r\n\r\nh1 {\r\n  color: #52071b;\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n  text-decoration: underline;\r\n  font-size: 36px;\r\n}\r\n\r\n/*************** header styles ***************/\r\nheader {\r\n  width: 100%;\r\n  padding: 20px;\r\n  background-color: #52071b;\r\n}\r\n\r\nheader nav {\r\n  padding: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nheader nav .logo {\r\n  width: 100px;\r\n  height: 100px;\r\n  cursor: pointer;\r\n}\r\n\r\nheader nav .logo img {\r\n  width: 100%;\r\n  object-fit: cover;\r\n  border-radius: 3px;\r\n}\r\n\r\nheader nav .btn-tab {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\nheader nav .btn-tab .nav-btn {\r\n  border: 1px solid #efefef;\r\n  padding: 8px 16px;\r\n  border-radius: 3px;\r\n  font-size: 18px;\r\n}\r\n\r\nheader nav .btn-tab .nav-btn:hover,\r\nheader nav .btn-tab .nav-btn.active {\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n  color: #fff;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n\r\n/***************** homepage styles ******************/\r\n.home-div {\r\n  width: 100%;\r\n  height: auto;\r\n  background-image: url(./images/red-bamboo-bgImage.jpeg);\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  background-position: center;\r\n  padding: 30px;\r\n}\r\n\r\n.home-div .card-div {\r\n  width: 60%;\r\n  margin: 30px auto;\r\n  box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.9);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.home-div .card-div .cardImg-div {\r\n  width: 30%;\r\n  height: 30%;\r\n  margin: 0 auto;\r\n  mix-blend-mode: multiply;\r\n}\r\n\r\n.home-div .card-div .cardImg-div img {\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.home-div .card-div p {\r\n  font-size: 1.5rem;\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n  letter-spacing: 1.2px;\r\n  margin-top: -10px;\r\n  margin-bottom: 20px;\r\n  padding: 10px;\r\n  color: #fff;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  border-radius: 5px;\r\n}\r\n\r\n.home-div .card-div .btn {\r\n  border: 1px solid black;\r\n  border-radius: 7px;\r\n  padding: 10px 30px;\r\n  background-color: rgb(218, 165, 32);\r\n  font-size: 18px;\r\n  margin-bottom: 20px;\r\n  box-shadow: 2px 2px 6px rgb(0 0 0);\r\n  transition: transform 0.3s ease-in-out;\r\n}\r\n\r\n.home-div .card-div .btn:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.05);\r\n}\r\n\r\n/*************** menu styles ****************/\r\n\r\n.menu {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  margin: 0 auto;\r\n  margin-top: 60px;\r\n  box-shadow: 0 0 16px rgba(0, 0, 0, 0.9);\r\n  padding: 10px;\r\n}\r\n\r\n.menu .menu-item {\r\n  border: 1px solid #505050;\r\n  border-radius: 5px;\r\n  flex-basis: 49%;\r\n  flex-grow: 1;\r\n  display: flex;\r\n  padding: 20px;\r\n}\r\n\r\n.menu .menu-item .info-div {\r\n  flex-basis: 100%;\r\n}\r\n.menu .menu-item .info-div .name {\r\n  font-weight: 500;\r\n  font-size: 18px;\r\n}\r\n.menu .menu-item .info-div .desc {\r\n  font-size: 14px;\r\n}\r\n\r\n.menu .menu-item .img-div {\r\n  width: 150px;\r\n  height: 130px;\r\n  align-self: center;\r\n}\r\n\r\n.menu .menu-item .img-div img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  border-radius: 5px;\r\n}\r\n\r\n/***************** about page styles ***************/\r\n\r\n.about-page .section {\r\n  /* height: 500px; */\r\n}\r\n\r\n.about-page .section .text-div {\r\n  padding: 60px;\r\n  box-shadow: 0 0 12px 6px #52071b inset;\r\n}\r\n.about-page .section .text-div .p-head {\r\n  text-align: center;\r\n  font-size: 22px;\r\n  margin-bottom: 20px;\r\n  text-decoration: underline;\r\n  color: #52071b;\r\n}\r\n.about-page .section .text-div .p-text {\r\n  font-size: 20px;\r\n}\r\n\r\n.about-page .section .img-div {\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-attachment: fixed;\r\n  height: 250px;\r\n}\r\n\r\n.about-page .section:nth-child(1) .img-div {\r\n  background-image: url(./images/about-pg-img1.jpg);\r\n}\r\n\r\n.about-page .section:nth-child(2) .img-div {\r\n  background-image: url(./images/about-pg-img2.jpg);\r\n}\r\n\r\n/****************** contact page styles **************/\r\n\r\n.contact-page .section {\r\n  display: flex;\r\n  min-height: 450px;\r\n}\r\n\r\n.contact-page .section .img-box {\r\n  flex-basis: 50%;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.contact-page .section:nth-child(1) .img-box {\r\n  background-image: url(./images/contact-pg-img1.jpg);\r\n}\r\n\r\n.contact-page .section .text-box {\r\n  flex-basis: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 30px;\r\n}\r\n\r\n.contact-page .section .text-box .pTitle {\r\n  color: #52071b;\r\n  text-decoration: underline;\r\n  text-transform: uppercase;\r\n  font-size: 18px;\r\n  margin: 30px 0;\r\n}\r\n\r\n.contact-page .section .text-box .contact-info {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.contact-page .section .text-box .contact-info p {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.contact-page .section .text-box .contact-info p span {\r\n  display: inline-block;\r\n  width: 12px;\r\n}\r\n\r\n.contact-page .section:nth-child(2) .img-box {\r\n  background-image: url(./images/contact-pg-img2.jpg);\r\n  background-position: bottom;\r\n}\r\n\r\n.contact-page .section .text-box .hours-info .day {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 20px;\r\n}\r\n\r\n.contact-page .section .text-box .contact-social {\r\n  display: flex;\r\n  gap: 30px;\r\n}\r\n\r\n.contact-page .section .text-box .contact-social p {\r\n  display: inline-block;\r\n  width: 17px;\r\n}\r\n\r\n.contact-page .section .text-box .contact-social p:hover {\r\n  cursor: pointer;\r\n  fill: #52071b;\r\n  transform: scale(1.1);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/about-pg-img1.jpg":
/*!**************************************!*\
  !*** ./src/images/about-pg-img1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a9b82ee12e5e09b89d6.jpg";

/***/ }),

/***/ "./src/images/about-pg-img2.jpg":
/*!**************************************!*\
  !*** ./src/images/about-pg-img2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "934d02140d929e35ac5c.jpg";

/***/ }),

/***/ "./src/images/contact-pg-img1.jpg":
/*!****************************************!*\
  !*** ./src/images/contact-pg-img1.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10878a794e4e4695284f.jpg";

/***/ }),

/***/ "./src/images/contact-pg-img2.jpg":
/*!****************************************!*\
  !*** ./src/images/contact-pg-img2.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f6b306bb8ef55c8b80f.jpg";

/***/ }),

/***/ "./src/images/red-bamboo-bgImage.jpeg":
/*!********************************************!*\
  !*** ./src/images/red-bamboo-bgImage.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ae8db8efc87c64af236.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/initWebsite.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/initWebsite.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZJQUFtRDtBQUMvRiw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDRDQUE0QyxpSUFBNkM7QUFDekYsNENBQTRDLHFJQUErQztBQUMzRiw0Q0FBNEMscUlBQStDO0FBQzNGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFB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QTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7QUNBcUI7QUFDa0M7QUFDdkQ7QUFDQSwySkFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9yZWQtYmFtYm9vLWJnSW1hZ2UuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Fib3V0LXBnLWltZzEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYWJvdXQtcGctaW1nMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jb250YWN0LXBnLWltZzEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY29udGFjdC1wZy1pbWcyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICM1MjA3MWI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKiBoZWFkZXIgc3R5bGVzICoqKioqKioqKioqKioqKi9cclxuaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjA3MWI7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaGVhZGVyIG5hdiAubG9nbyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IC5sb2dvIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IC5idG4tdGFiIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuaGVhZGVyIG5hdiAuYnRuLXRhYiAubmF2LWJ0biB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IC5idG4tdGFiIC5uYXYtYnRuOmhvdmVyLFxyXG5oZWFkZXIgbmF2IC5idG4tdGFiIC5uYXYtYnRuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKiBob21lcGFnZSBzdHlsZXMgKioqKioqKioqKioqKioqKioqL1xyXG4uaG9tZS1kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uaG9tZS1kaXYgLmNhcmQtZGl2IHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ob21lLWRpdiAuY2FyZC1kaXYgLmNhcmRJbWctZGl2IHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcclxufVxyXG5cclxuLmhvbWUtZGl2IC5jYXJkLWRpdiAuY2FyZEltZy1kaXYgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmhvbWUtZGl2IC5jYXJkLWRpdiBwIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaG9tZS1kaXYgLmNhcmQtZGl2IC5idG4ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTY1LCAzMik7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAgMCAwKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhvbWUtZGl2IC5jYXJkLWRpdiAuYnRuOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKiBtZW51IHN0eWxlcyAqKioqKioqKioqKioqKioqL1xyXG5cclxuLm1lbnUge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDE2cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tZW51IC5tZW51LWl0ZW0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MDUwNTA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZsZXgtYmFzaXM6IDQ5JTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubWVudSAubWVudS1pdGVtIC5pbmZvLWRpdiB7XHJcbiAgZmxleC1iYXNpczogMTAwJTtcclxufVxyXG4ubWVudSAubWVudS1pdGVtIC5pbmZvLWRpdiAubmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLm1lbnUgLm1lbnUtaXRlbSAuaW5mby1kaXYgLmRlc2Mge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm1lbnUgLm1lbnUtaXRlbSAuaW1nLWRpdiB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4ubWVudSAubWVudS1pdGVtIC5pbWctZGl2IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqIGFib3V0IHBhZ2Ugc3R5bGVzICoqKioqKioqKioqKioqKi9cclxuXHJcbi5hYm91dC1wYWdlIC5zZWN0aW9uIHtcclxuICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xyXG59XHJcblxyXG4uYWJvdXQtcGFnZSAuc2VjdGlvbiAudGV4dC1kaXYge1xyXG4gIHBhZGRpbmc6IDYwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEycHggNnB4ICM1MjA3MWIgaW5zZXQ7XHJcbn1cclxuLmFib3V0LXBhZ2UgLnNlY3Rpb24gLnRleHQtZGl2IC5wLWhlYWQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjb2xvcjogIzUyMDcxYjtcclxufVxyXG4uYWJvdXQtcGFnZSAuc2VjdGlvbiAudGV4dC1kaXYgLnAtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYWJvdXQtcGFnZSAuc2VjdGlvbiAuaW1nLWRpdiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4uYWJvdXQtcGFnZSAuc2VjdGlvbjpudGgtY2hpbGQoMSkgLmltZy1kaXYge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuLmFib3V0LXBhZ2UgLnNlY3Rpb246bnRoLWNoaWxkKDIpIC5pbWctZGl2IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKiogY29udGFjdCBwYWdlIHN0eWxlcyAqKioqKioqKioqKioqKi9cclxuXHJcbi5jb250YWN0LXBhZ2UgLnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogNDUwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LXBhZ2UgLnNlY3Rpb24gLmltZy1ib3gge1xyXG4gIGZsZXgtYmFzaXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbjpudGgtY2hpbGQoMSkgLmltZy1ib3gge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxufVxyXG5cclxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbiAudGV4dC1ib3gge1xyXG4gIGZsZXgtYmFzaXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uIC50ZXh0LWJveCAucFRpdGxlIHtcclxuICBjb2xvcjogIzUyMDcxYjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW46IDMwcHggMDtcclxufVxyXG5cclxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbiAudGV4dC1ib3ggLmNvbnRhY3QtaW5mbyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbiAudGV4dC1ib3ggLmNvbnRhY3QtaW5mbyBwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbiAudGV4dC1ib3ggLmNvbnRhY3QtaW5mbyBwIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTJweDtcclxufVxyXG5cclxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbjpudGgtY2hpbGQoMikgLmltZy1ib3gge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbn1cclxuXHJcbi5jb250YWN0LXBhZ2UgLnNlY3Rpb24gLnRleHQtYm94IC5ob3Vycy1pbmZvIC5kYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uIC50ZXh0LWJveCAuY29udGFjdC1zb2NpYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uIC50ZXh0LWJveCAuY29udGFjdC1zb2NpYWwgcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxN3B4O1xyXG59XHJcblxyXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uIC50ZXh0LWJveCAuY29udGFjdC1zb2NpYWwgcDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZpbGw6ICM1MjA3MWI7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQSw4Q0FBOEM7QUFDOUM7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7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MkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlEQUFtRDtFQUNuRCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGNvbG9yOiAjNTIwNzFiO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGZvbnQtc2l6ZTogMzZweDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiBoZWFkZXIgc3R5bGVzICoqKioqKioqKioqKioqKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyMDcxYjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgLmxvZ28ge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiAubG9nbyBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiAuYnRuLXRhYiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IC5idG4tdGFiIC5uYXYtYnRuIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XFxyXFxuICBwYWRkaW5nOiA4cHggMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiAuYnRuLXRhYiAubmF2LWJ0bjpob3ZlcixcXHJcXG5oZWFkZXIgbmF2IC5idG4tdGFiIC5uYXYtYnRuLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqIGhvbWVwYWdlIHN0eWxlcyAqKioqKioqKioqKioqKioqKiovXFxyXFxuLmhvbWUtZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3JlZC1iYW1ib28tYmdJbWFnZS5qcGVnKTtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtZGl2IC5jYXJkLWRpdiB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiAzMHB4IGF1dG87XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1kaXYgLmNhcmQtZGl2IC5jYXJkSW1nLWRpdiB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgaGVpZ2h0OiAzMCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtZGl2IC5jYXJkLWRpdiAuY2FyZEltZy1kaXYgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWRpdiAuY2FyZC1kaXYgcCB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1kaXYgLmNhcmQtZGl2IC5idG4ge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNjUsIDMyKTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCAwIDApO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWRpdiAuY2FyZC1kaXYgLmJ0bjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqIG1lbnUgc3R5bGVzICoqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTZweCByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSAubWVudS1pdGVtIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MDUwNTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmbGV4LWJhc2lzOiA0OSU7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLm1lbnUtaXRlbSAuaW5mby1kaXYge1xcclxcbiAgZmxleC1iYXNpczogMTAwJTtcXHJcXG59XFxyXFxuLm1lbnUgLm1lbnUtaXRlbSAuaW5mby1kaXYgLm5hbWUge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuLm1lbnUgLm1lbnUtaXRlbSAuaW5mby1kaXYgLmRlc2Mge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSAubWVudS1pdGVtIC5pbWctZGl2IHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMTMwcHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51IC5tZW51LWl0ZW0gLmltZy1kaXYgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKiBhYm91dCBwYWdlIHN0eWxlcyAqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLmFib3V0LXBhZ2UgLnNlY3Rpb24ge1xcclxcbiAgLyogaGVpZ2h0OiA1MDBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXBhZ2UgLnNlY3Rpb24gLnRleHQtZGl2IHtcXHJcXG4gIHBhZGRpbmc6IDYwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTJweCA2cHggIzUyMDcxYiBpbnNldDtcXHJcXG59XFxyXFxuLmFib3V0LXBhZ2UgLnNlY3Rpb24gLnRleHQtZGl2IC5wLWhlYWQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY29sb3I6ICM1MjA3MWI7XFxyXFxufVxcclxcbi5hYm91dC1wYWdlIC5zZWN0aW9uIC50ZXh0LWRpdiAucC10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXBhZ2UgLnNlY3Rpb24gLmltZy1kaXYge1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcGFnZSAuc2VjdGlvbjpudGgtY2hpbGQoMSkgLmltZy1kaXYge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2Fib3V0LXBnLWltZzEuanBnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXBhZ2UgLnNlY3Rpb246bnRoLWNoaWxkKDIpIC5pbWctZGl2IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9hYm91dC1wZy1pbWcyLmpwZyk7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKiogY29udGFjdCBwYWdlIHN0eWxlcyAqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtaW4taGVpZ2h0OiA0NTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbiAuaW1nLWJveCB7XFxyXFxuICBmbGV4LWJhc2lzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uOm50aC1jaGlsZCgxKSAuaW1nLWJveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvY29udGFjdC1wZy1pbWcxLmpwZyk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXBhZ2UgLnNlY3Rpb24gLnRleHQtYm94IHtcXHJcXG4gIGZsZXgtYmFzaXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXBhZ2UgLnNlY3Rpb24gLnRleHQtYm94IC5wVGl0bGUge1xcclxcbiAgY29sb3I6ICM1MjA3MWI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW46IDMwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbiAudGV4dC1ib3ggLmNvbnRhY3QtaW5mbyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uIC50ZXh0LWJveCAuY29udGFjdC1pbmZvIHAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXBhZ2UgLnNlY3Rpb24gLnRleHQtYm94IC5jb250YWN0LWluZm8gcCBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uOm50aC1jaGlsZCgyKSAuaW1nLWJveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvY29udGFjdC1wZy1pbWcyLmpwZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXBhZ2UgLnNlY3Rpb24gLnRleHQtYm94IC5ob3Vycy1pbmZvIC5kYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uIC50ZXh0LWJveCAuY29udGFjdC1zb2NpYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbiAudGV4dC1ib3ggLmNvbnRhY3Qtc29jaWFsIHAge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXBhZ2UgLnNlY3Rpb24gLnRleHQtYm94IC5jb250YWN0LXNvY2lhbCBwOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZpbGw6ICM1MjA3MWI7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgaW5pdFdlYnNpdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5pdFdlYnNpdGUuanNcIjtcclxuXHJcbmluaXRXZWJzaXRlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==