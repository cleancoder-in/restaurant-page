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

/* common styles */

h1 {
  color: #52071b;
  text-align: center;
  text-transform: capitalize;
  text-decoration: underline;
  font-size: 36px;
}

.logo {
  width: 100px;
  height: 100px;
  cursor: pointer;
}
.logo img {
  width: 100%;
  object-fit: cover;
  border-radius: 3px;
}

.contact-info p {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
}
.contact-info p span {
  display: inline-block;
  width: 12px;
}

.contact-social {
  display: flex;
  gap: 30px;
}

.contact-social p {
  display: inline-block;
  width: 17px;
}

.contact-social p:hover {
  cursor: pointer;
  fill: #52071b;
  transform: scale(1.1);
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
  margin: 60px auto;
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

/****************** contact page styles *****************/

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
  color: rgb(82, 7, 27);
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

/******************* footer styles *****************/

footer .primary-footer {
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: #dedede;
}

footer .primary-footer .logo {
  mix-blend-mode: multiply;
}

footer .secondary-footer {
  background-color: #52071b;
  color: #fff;
  text-align: center;
  letter-spacing: 1px;
  padding: 10px;
  /* font-family: Arial, Helvetica, sans-serif; */
}
footer .secondary-footer p a {
  margin-left: 10px;
}
footer .secondary-footer p a span {
  display: inline-block;
  width: 18px;
  fill: #fff;
  transition: transform 0.3s ease-in-out;
}

footer .secondary-footer p a span:hover {
  cursor: pointer;
  transform: scale(1.1);
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: cursive;\r\n  font-size: 16px;\r\n  line-height: 1.6;\r\n}\r\n\r\n/* common styles */\r\n\r\nh1 {\r\n  color: #52071b;\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n  text-decoration: underline;\r\n  font-size: 36px;\r\n}\r\n\r\n.logo {\r\n  width: 100px;\r\n  height: 100px;\r\n  cursor: pointer;\r\n}\r\n.logo img {\r\n  width: 100%;\r\n  object-fit: cover;\r\n  border-radius: 3px;\r\n}\r\n\r\n.contact-info p {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n.contact-info p span {\r\n  display: inline-block;\r\n  width: 12px;\r\n}\r\n\r\n.contact-social {\r\n  display: flex;\r\n  gap: 30px;\r\n}\r\n\r\n.contact-social p {\r\n  display: inline-block;\r\n  width: 17px;\r\n}\r\n\r\n.contact-social p:hover {\r\n  cursor: pointer;\r\n  fill: #52071b;\r\n  transform: scale(1.1);\r\n}\r\n\r\n/*************** header styles ***************/\r\nheader {\r\n  width: 100%;\r\n  padding: 20px;\r\n  background-color: #52071b;\r\n}\r\n\r\nheader nav {\r\n  padding: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nheader nav .btn-tab {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\nheader nav .btn-tab .nav-btn {\r\n  border: 1px solid #efefef;\r\n  padding: 8px 16px;\r\n  border-radius: 3px;\r\n  font-size: 18px;\r\n}\r\n\r\nheader nav .btn-tab .nav-btn:hover,\r\nheader nav .btn-tab .nav-btn.active {\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n  color: #fff;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n\r\n/***************** homepage styles ******************/\r\n.home-div {\r\n  width: 100%;\r\n  height: auto;\r\n  background-image: url(./images/red-bamboo-bgImage.jpeg);\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  background-position: center;\r\n  padding: 30px;\r\n}\r\n\r\n.home-div .card-div {\r\n  width: 60%;\r\n  margin: 30px auto;\r\n  box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.9);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.home-div .card-div .cardImg-div {\r\n  width: 30%;\r\n  height: 30%;\r\n  margin: 0 auto;\r\n  mix-blend-mode: multiply;\r\n}\r\n\r\n.home-div .card-div .cardImg-div img {\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.home-div .card-div p {\r\n  font-size: 1.5rem;\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n  letter-spacing: 1.2px;\r\n  margin-top: -10px;\r\n  margin-bottom: 20px;\r\n  padding: 10px;\r\n  color: #fff;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  border-radius: 5px;\r\n}\r\n\r\n.home-div .card-div .btn {\r\n  border: 1px solid black;\r\n  border-radius: 7px;\r\n  padding: 10px 30px;\r\n  background-color: rgb(218, 165, 32);\r\n  font-size: 18px;\r\n  margin-bottom: 20px;\r\n  box-shadow: 2px 2px 6px rgb(0 0 0);\r\n  transition: transform 0.3s ease-in-out;\r\n}\r\n\r\n.home-div .card-div .btn:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.05);\r\n}\r\n\r\n/*************** menu styles ****************/\r\n\r\n.menu {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  margin: 60px auto;\r\n  box-shadow: 0 0 16px rgba(0, 0, 0, 0.9);\r\n  padding: 10px;\r\n}\r\n\r\n.menu .menu-item {\r\n  border: 1px solid #505050;\r\n  border-radius: 5px;\r\n  flex-basis: 49%;\r\n  flex-grow: 1;\r\n  display: flex;\r\n  padding: 20px;\r\n}\r\n\r\n.menu .menu-item .info-div {\r\n  flex-basis: 100%;\r\n}\r\n.menu .menu-item .info-div .name {\r\n  font-weight: 500;\r\n  font-size: 18px;\r\n}\r\n.menu .menu-item .info-div .desc {\r\n  font-size: 14px;\r\n}\r\n\r\n.menu .menu-item .img-div {\r\n  width: 150px;\r\n  height: 130px;\r\n  align-self: center;\r\n}\r\n\r\n.menu .menu-item .img-div img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  border-radius: 5px;\r\n}\r\n\r\n/***************** about page styles ***************/\r\n\r\n.about-page .section {\r\n  /* height: 500px; */\r\n}\r\n\r\n.about-page .section .text-div {\r\n  padding: 60px;\r\n  box-shadow: 0 0 12px 6px #52071b inset;\r\n}\r\n.about-page .section .text-div .p-head {\r\n  text-align: center;\r\n  font-size: 22px;\r\n  margin-bottom: 20px;\r\n  text-decoration: underline;\r\n  color: #52071b;\r\n}\r\n.about-page .section .text-div .p-text {\r\n  font-size: 20px;\r\n}\r\n\r\n.about-page .section .img-div {\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-attachment: fixed;\r\n  height: 250px;\r\n}\r\n\r\n.about-page .section:nth-child(1) .img-div {\r\n  background-image: url(./images/about-pg-img1.jpg);\r\n}\r\n\r\n.about-page .section:nth-child(2) .img-div {\r\n  background-image: url(./images/about-pg-img2.jpg);\r\n}\r\n\r\n/****************** contact page styles *****************/\r\n\r\n.contact-page .section {\r\n  display: flex;\r\n  min-height: 450px;\r\n}\r\n\r\n.contact-page .section .img-box {\r\n  flex-basis: 50%;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.contact-page .section:nth-child(1) .img-box {\r\n  background-image: url(./images/contact-pg-img1.jpg);\r\n}\r\n\r\n.contact-page .section .text-box {\r\n  flex-basis: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 30px;\r\n}\r\n\r\n.contact-page .section .text-box .pTitle {\r\n  color: rgb(82, 7, 27);\r\n  text-decoration: underline;\r\n  text-transform: uppercase;\r\n  font-size: 18px;\r\n  margin: 30px 0;\r\n}\r\n\r\n.contact-page .section .text-box .contact-info {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.contact-page .section .text-box .contact-info p {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.contact-page .section .text-box .contact-info p span {\r\n  display: inline-block;\r\n  width: 12px;\r\n}\r\n\r\n.contact-page .section:nth-child(2) .img-box {\r\n  background-image: url(./images/contact-pg-img2.jpg);\r\n  background-position: bottom;\r\n}\r\n\r\n.contact-page .section .text-box .hours-info .day {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 20px;\r\n}\r\n\r\n/******************* footer styles *****************/\r\n\r\nfooter .primary-footer {\r\n  padding: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n  background-color: #dedede;\r\n}\r\n\r\nfooter .primary-footer .logo {\r\n  mix-blend-mode: multiply;\r\n}\r\n\r\nfooter .secondary-footer {\r\n  background-color: #52071b;\r\n  color: #fff;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  padding: 10px;\r\n  /* font-family: Arial, Helvetica, sans-serif; */\r\n}\r\nfooter .secondary-footer p a {\r\n  margin-left: 10px;\r\n}\r\nfooter .secondary-footer p a span {\r\n  display: inline-block;\r\n  width: 18px;\r\n  fill: #fff;\r\n  transition: transform 0.3s ease-in-out;\r\n}\r\n\r\nfooter .secondary-footer p a span:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.1);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderAbout() {
  const mainContent = document.getElementById("content");
  mainContent.textContent = "";
  mainContent.appendChild(createAbout());
}

function createAbout() {
  const aboutPage = document.createElement("div");
  aboutPage.classList.add("about-page");

  const sectionOne = createSection(
    "VEGAN",
    "Since opening in 2002 we at Red Bamboo have strived to redefine what it means to be vegan by creating innovative mock meat and seafood dishes. "
  );

  const sectionTwo = createSection(
    "GLOBAL CUISINE",
    "Every year we add new vegan dishes from around the word. Newest dishes include: Portobello Fritters, Salmon Teriyaki, Pasta Carbonara, Rigatoni Bolognese, Caesar, Greek and Cobb Salad."
  );

  aboutPage.append(sectionOne, sectionTwo);

  return aboutPage;
}

function createSection(header, text) {
  const section = document.createElement("div");
  section.classList.add("section");

  const textDiv = document.createElement("div");
  textDiv.classList.add("text-div");

  const pHead = document.createElement("p");
  pHead.classList.add("p-head");
  pHead.textContent = header;

  const pText = document.createElement("p");
  pText.classList.add("p-text");
  pText.textContent = text;

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-div");

  textDiv.append(pHead, pText);
  section.append(textDiv, imgDiv);

  return section;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAbout);


/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderContact() {
  const mainContent = document.getElementById("content");
  mainContent.textContent = "";
  mainContent.appendChild(createContact());
}

function createContact() {
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact-page");

  const sectionOne = createSectionOne();
  const sectionTwo = createSectionTwo();

  contactPage.append(sectionOne, sectionTwo);

  return contactPage;
}

function createSectionOne() {
  const section = document.createElement("div");
  section.classList.add("section");

  const imgBox = document.createElement("div");
  imgBox.classList.add("img-box");

  const textBox = document.createElement("div");
  textBox.classList.add("text-box");

  textBox.innerHTML = `<p class="pTitle">contact us!</p>
                        <div class="contact-info">
                            <p class="address"><span><svg xmlns="http://www.w3.org/2000/svg" fill ="#52071b" viewBox="0 0 384 512"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg></span> 140 West 4th Street NY, NY 10012</p>
                            <p class="phone"><span><svg xmlns="http://www.w3.org/2000/svg" fill ="#52071b" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></span> 212-260-7049</p>
                            <p class="email"><span><svg xmlns="http://www.w3.org/2000/svg" fill ="#52071b" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></span>redbamboonyc@gmail.com</p>
                        </div>
                        
                        <div class="location-map">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3982922728082!2d-74.00495792464828!3d40.73126067322389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599166ac45c1%3A0xd2bb7efe730dd284!2sRed%20Bamboo!5e0!3m2!1sen!2sin!4v1722015161592!5m2!1sen!2sin" width="350" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>`;

  section.append(imgBox, textBox);

  return section;
}

function createSectionTwo() {
  const section = document.createElement("div");
  section.classList.add("section");

  const textBox = document.createElement("div");
  textBox.classList.add("text-box");

  textBox.innerHTML = `<p class="pTitle">opening hours!</p>
                        <div class="hours-info">
                            <div class="day">
                              <p>MONDAY</p>
                              <p>12pm - 9pm</p>
                            </div>
                            <div class="day">
                              <p>TUESDAY</p>
                              <p>12pm - 9pm</p>
                            </div>
                            <div class="day">
                              <p>WEDNESDAY</p>
                              <p>12pm - 10pm</p>
                            </div>
                            <div class="day">
                              <p>THURSDAY</p>
                              <p>12pm - 10pm</p>
                            </div>
                            <div class="day">
                              <p>FRIDAY</p>
                              <p>12pm - 10pm</p>
                            </div>
                            <div class="day">
                              <p>SATURDAY</p>
                              <p>12pm - 10pm</p>
                            </div>
                            <div class="day">
                              <p>SUNDAY</p>
                              <p>12pm - 10pm</p>
                            </div>
                        </div>
                        <p class="pTitle">Follow us on social!</p>
                            <div class="contact-social">
                              <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></p>
                              <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></p>
                              <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></p>
                            </div>`;

  const imgBox = document.createElement("div");
  imgBox.classList.add("img-box");
  section.append(textBox, imgBox);

  return section;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);


/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_red_bamboo_logo_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/red-bamboo-logo.jpeg */ "./src/images/red-bamboo-logo.jpeg");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/components/menu.js");



function renderHome() {
  const mainContent = document.getElementById("content");
  mainContent.textContent = "";
  mainContent.appendChild(createHome());
}

function createHome() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-div");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card-div");

  const h1 = document.createElement("h1");
  h1.textContent = "red bamboo cafe";

  const cardImgDiv = document.createElement("div");
  cardImgDiv.classList.add("cardImg-div");

  const cardImg = document.createElement("img");
  cardImg.src = _images_red_bamboo_logo_jpeg__WEBPACK_IMPORTED_MODULE_0__;
  cardImg.alt = "card-image";

  const p = document.createElement("p");
  p.textContent = "Your culinary adventure awaits.";

  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = "Explore!";
  btn.onclick = _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  cardImgDiv.appendChild(cardImg);
  cardDiv.append(h1, cardImgDiv, p, btn);
  homeDiv.appendChild(cardDiv);

  return homeDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);


/***/ }),

/***/ "./src/components/initFooter.js":
/*!**************************************!*\
  !*** ./src/components/initFooter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _initNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initNav.js */ "./src/components/initNav.js");
// import Logo from "../images/red-bamboo-logo.jpeg";


function createFooter() {
  const footer = document.createElement("footer");
  footer.appendChild(primaryFooter());
  footer.appendChild(secondaryFooter());

  return footer;
}

function primaryFooter() {
  const primaryFooter = document.createElement("div");
  primaryFooter.classList.add("primary-footer");

  const logo = (0,_initNav_js__WEBPACK_IMPORTED_MODULE_0__.createLogo)();

  const contactBox = document.createElement("div");
  contactBox.classList.add("contact-info");
  contactBox.innerHTML = `<p class="address"><span><svg xmlns="http://www.w3.org/2000/svg" fill ="#52071b" viewBox="0 0 384 512"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg></span> 140 West 4th Street NY, NY 10012</p>
                            <p class="phone"><span><svg xmlns="http://www.w3.org/2000/svg" fill ="#52071b" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></span> 212-260-7049</p>
                            <p class="email"><span><svg xmlns="http://www.w3.org/2000/svg" fill ="#52071b" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></span>redbamboonyc@gmail.com</p>`;

  const timingsBox = document.createElement("div");
  timingsBox.classList.add("timings-info");

  const hoursInfo = document.createElement("div");
  hoursInfo.classList.add("hours-info");
  hoursInfo.innerHTML = `<p><span>Mon-Tue</span>  <span>12pm-9pm</span></p>
                        <p><span>Wed-Sun</span>  <span>12pm-10pm</span></p>`;

  const socialLinks = document.createElement("div");
  socialLinks.classList.add("contact-social");
  socialLinks.innerHTML = `<p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></p>
                              <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></p>
                              <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></p>`;

  timingsBox.append(hoursInfo, socialLinks);
  primaryFooter.append(logo, contactBox, timingsBox);

  return primaryFooter;
}

function secondaryFooter() {
  const secondaryFooter = document.createElement("div");
  secondaryFooter.classList.add("secondary-footer");

  const pEl = document.createElement("p");
  pEl.textContent = `Copyright © ${new Date().getFullYear()}`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/cleancoder-in";

  const githubIcon = document.createElement("span");
  githubIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>`;

  githubLink.appendChild(githubIcon);
  pEl.appendChild(githubLink);

  secondaryFooter.appendChild(pEl);

  return secondaryFooter;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);


/***/ }),

/***/ "./src/components/initHeader.js":
/*!**************************************!*\
  !*** ./src/components/initHeader.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _initNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initNav.js */ "./src/components/initNav.js");


function createHeader() {
  const header = document.createElement("header");
  header.appendChild((0,_initNav_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

  return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);


/***/ }),

/***/ "./src/components/initMain.js":
/*!************************************!*\
  !*** ./src/components/initMain.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initMain() {
  const main = document.createElement("main");
  main.setAttribute("id", "content");
  return main;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMain);


/***/ }),

/***/ "./src/components/initNav.js":
/*!***********************************!*\
  !*** ./src/components/initNav.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLogo: () => (/* binding */ createLogo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_red_bamboo_logo_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/red-bamboo-logo.jpeg */ "./src/images/red-bamboo-logo.jpeg");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/components/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/components/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/components/about.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/components/contact.js");






function createNav() {
  const nav = document.createElement("nav");
  nav.appendChild(createLogo());
  nav.appendChild(createButtonTab());
  return nav;
}

function createLogo() {
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.onclick = () => {
    setCurrentTabActive(null);
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  };

  const logoImg = document.createElement("img");
  logoImg.src = _images_red_bamboo_logo_jpeg__WEBPACK_IMPORTED_MODULE_0__;
  logoImg.classList.add("logo-img");
  logoImg.alt = "logo";

  logo.appendChild(logoImg);

  return logo;
}

function createButtonTab() {
  const buttonTab = document.createElement("div");
  buttonTab.classList.add("btn-tab");

  const menuButton = document.createElement("button");
  menuButton.classList.add("nav-btn");
  menuButton.textContent = "Menu";
  menuButton.setAttribute("data-name", "menu");

  const aboutButton = document.createElement("button");
  aboutButton.classList.add("nav-btn");
  aboutButton.textContent = "About";
  aboutButton.setAttribute("data-name", "about");

  const contactButton = document.createElement("button");
  contactButton.classList.add("nav-btn");
  contactButton.textContent = "Contact";
  contactButton.setAttribute("data-name", "contact");

  buttonTab.append(menuButton, aboutButton, contactButton);
  buttonTab.addEventListener("click", btnClickHandler);
  return buttonTab;
}

function btnClickHandler(e) {
  const btns = document.querySelectorAll(".nav-btn");
  btns.forEach((btn) => {
    if (e.target.dataset.name === "menu" && btn.textContent === "Menu") {
      if (e.target.classList.contains("active")) return;
      setCurrentTabActive(btn);
      (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
    if (e.target.dataset.name === "about" && btn.textContent === "About") {
      if (e.target.classList.contains("active")) return;
      setCurrentTabActive(btn);
      (0,_about_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
    if (e.target.dataset.name === "contact" && btn.textContent === "Contact") {
      if (e.target.classList.contains("active")) return;
      setCurrentTabActive(btn);
      (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    }
  });
}

function setCurrentTabActive(clickedBtn) {
  const btns = document.querySelectorAll(".nav-btn");
  btns.forEach((btn) => {
    if (btn !== clickedBtn) {
      btn.classList.remove("active");
    }
  });
  if (clickedBtn !== null) {
    clickedBtn.classList.add("active");
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);



/***/ }),

/***/ "./src/components/initWebsite.js":
/*!***************************************!*\
  !*** ./src/components/initWebsite.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _initHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initHeader.js */ "./src/components/initHeader.js");
/* harmony import */ var _initMain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initMain.js */ "./src/components/initMain.js");
/* harmony import */ var _initFooter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initFooter.js */ "./src/components/initFooter.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/components/home.js");





function initWebsite() {
  document.body.appendChild((0,_initHeader_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
  document.body.appendChild((0,_initMain_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  document.body.appendChild((0,_initFooter_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  (0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initWebsite);


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_menuItemPics_menuPicsIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/menuItemPics/menuPicsIndex.js */ "./src/images/menuItemPics/menuPicsIndex.js");


function renderMenu() {
  const mainContent = document.getElementById("content");
  mainContent.textContent = "";
  console.log(_images_menuItemPics_menuPicsIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  mainContent.appendChild(createMenu());
}

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Creole Soul Chicken",
      "Our signature soy chicken nuggets panko-breaded with Cajun and rosemary seasoning and fried. Served with our hickory-smoked vidalia dressing.",
      "$12.00",
      _images_menuItemPics_menuPicsIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"].pic1
    )
  );

  menu.appendChild(
    createMenuItem(
      "Broccoli and Sweet Potato Tempura",
      "Deep-fried in a traditional Japanese tempura batter. Served with soy-lime ginger dressing.",
      "$12.00",
      _images_menuItemPics_menuPicsIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"].pic2
    )
  );

  menu.appendChild(
    createMenuItem(
      "Caribbean Jerk-Spiced Seitan",
      "Grilled seitan skewers marinated in a spiced lime citrus dressing.",
      "$10.00",
      _images_menuItemPics_menuPicsIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"].pic3
    )
  );

  menu.appendChild(
    createMenuItem(
      "Collard Green Rolls",
      "Three fried rolls stuffed with sautéed collard greens and soy ham. Served with sweet chili dipping sauce.",
      "$11.00",
      _images_menuItemPics_menuPicsIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"].pic4
    )
  );

  menu.appendChild(
    createMenuItem(
      "Almond Coconut Chicken",
      "Crispy soy chicken strips breaded with toasted almonds and shaved coconut. Served with sweet chili dipping sauce.",
      "$14.00",
      _images_menuItemPics_menuPicsIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"].pic5
    )
  );

  menu.appendChild(
    createMenuItem(
      "Chicken Satay",
      "Skewered soy chicken charbroiled and marinated in coconut curry seasoning. Served with peanut chili dressing.",
      "$12.00",
      _images_menuItemPics_menuPicsIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"].pic6
    )
  );

  menu.appendChild(
    createMenuItem(
      "Bamboo Nuggets",
      "Garlic soy chicken nuggets fried and served with vidalia onion sauce.",
      "$12.00",
      _images_menuItemPics_menuPicsIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"].pic7
    )
  );

  menu.appendChild(
    createMenuItem(
      "Popcorn Chicken",
      "Fried soy chicken nuggets served with our homemade BBQ sauce.",
      "$11.00",
      _images_menuItemPics_menuPicsIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"].pic8
    )
  );

  menu.appendChild(
    createMenuItem(
      "Spring Rolls",
      "Two fried vegan rolls filled with cabbage, carrots and mushroom. Served with vegan duck sauce.",
      "$7.00",
      _images_menuItemPics_menuPicsIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"].pic9
    )
  );

  menu.appendChild(
    createMenuItem(
      "Dragonfly Dumplings",
      "Three fried rice dumplings filled with shredded soy protein, carrots and cabbage. Served over mixed greens and soy-lime ginger dressing.",
      "$12.00",
      _images_menuItemPics_menuPicsIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"].pic10
    )
  );

  menu.appendChild(
    createMenuItem(
      "Roti Canai",
      "Indian crepe served with a soy chicken and potato coconut curry dipping sauce.",
      "$9.00",
      _images_menuItemPics_menuPicsIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"].pic11
    )
  );

  menu.appendChild(
    createMenuItem(
      "Popcorn Shrimp",
      "Fried bite-sized soy shrimp. Served with Sriracha mayo.",
      "$11.00",
      _images_menuItemPics_menuPicsIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"].pic12
    )
  );

  return menu;
}

function createMenuItem(name, description, price, img) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info-div");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-div");

  const nameEl = document.createElement("p");
  nameEl.classList.add("name");
  nameEl.textContent = name;

  const descEl = document.createElement("p");
  descEl.classList.add("desc");
  descEl.textContent = description;

  const priceEl = document.createElement("p");
  priceEl.classList.add("price");
  priceEl.textContent = price;

  const imgEl = document.createElement("img");
  imgEl.src = img;
  imgEl.alt = `${name} pic`;

  infoDiv.append(nameEl, descEl, priceEl);
  imgDiv.appendChild(imgEl);

  menuItem.append(infoDiv, imgDiv);

  return menuItem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);


/***/ }),

/***/ "./src/images/menuItemPics/menuPicsIndex.js":
/*!**************************************************!*\
  !*** ./src/images/menuItemPics/menuPicsIndex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menuPics = {
  pic1: __webpack_require__(/*! ./menu-item1.jpeg */ "./src/images/menuItemPics/menu-item1.jpeg"),
  pic2: __webpack_require__(/*! ./menu-item2.jpeg */ "./src/images/menuItemPics/menu-item2.jpeg"),
  pic3: __webpack_require__(/*! ./menu-item3.jpeg */ "./src/images/menuItemPics/menu-item3.jpeg"),
  pic4: __webpack_require__(/*! ./menu-item4.jpeg */ "./src/images/menuItemPics/menu-item4.jpeg"),
  pic5: __webpack_require__(/*! ./menu-item5.jpeg */ "./src/images/menuItemPics/menu-item5.jpeg"),
  pic6: __webpack_require__(/*! ./menu-item6.jpeg */ "./src/images/menuItemPics/menu-item6.jpeg"),
  pic7: __webpack_require__(/*! ./menu-item7.jpeg */ "./src/images/menuItemPics/menu-item7.jpeg"),
  pic8: __webpack_require__(/*! ./menu-item8.jpeg */ "./src/images/menuItemPics/menu-item8.jpeg"),
  pic9: __webpack_require__(/*! ./menu-item9.jpeg */ "./src/images/menuItemPics/menu-item9.jpeg"),
  pic10: __webpack_require__(/*! ./menu-item10.jpeg */ "./src/images/menuItemPics/menu-item10.jpeg"),
  pic11: __webpack_require__(/*! ./menu-item11.jpeg */ "./src/images/menuItemPics/menu-item11.jpeg"),
  pic12: __webpack_require__(/*! ./menu-item12.jpeg */ "./src/images/menuItemPics/menu-item12.jpeg"),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPics);


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

/***/ "./src/images/menuItemPics/menu-item1.jpeg":
/*!*************************************************!*\
  !*** ./src/images/menuItemPics/menu-item1.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "395f25822e55e91b3a0d.jpeg";

/***/ }),

/***/ "./src/images/menuItemPics/menu-item10.jpeg":
/*!**************************************************!*\
  !*** ./src/images/menuItemPics/menu-item10.jpeg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "278f4e9d4d4b2af8ee3c.jpeg";

/***/ }),

/***/ "./src/images/menuItemPics/menu-item11.jpeg":
/*!**************************************************!*\
  !*** ./src/images/menuItemPics/menu-item11.jpeg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e24c30de351d30b89dee.jpeg";

/***/ }),

/***/ "./src/images/menuItemPics/menu-item12.jpeg":
/*!**************************************************!*\
  !*** ./src/images/menuItemPics/menu-item12.jpeg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "778f8ed4e75329a03bf4.jpeg";

/***/ }),

/***/ "./src/images/menuItemPics/menu-item2.jpeg":
/*!*************************************************!*\
  !*** ./src/images/menuItemPics/menu-item2.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01bdbf5dc8da167c52e2.jpeg";

/***/ }),

/***/ "./src/images/menuItemPics/menu-item3.jpeg":
/*!*************************************************!*\
  !*** ./src/images/menuItemPics/menu-item3.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d80981cc31265c3c2d2b.jpeg";

/***/ }),

/***/ "./src/images/menuItemPics/menu-item4.jpeg":
/*!*************************************************!*\
  !*** ./src/images/menuItemPics/menu-item4.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb8debcc9792b6f584dd.jpeg";

/***/ }),

/***/ "./src/images/menuItemPics/menu-item5.jpeg":
/*!*************************************************!*\
  !*** ./src/images/menuItemPics/menu-item5.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d1c8bd9f527a9b1a74e.jpeg";

/***/ }),

/***/ "./src/images/menuItemPics/menu-item6.jpeg":
/*!*************************************************!*\
  !*** ./src/images/menuItemPics/menu-item6.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b805d32256ebf264e79.jpeg";

/***/ }),

/***/ "./src/images/menuItemPics/menu-item7.jpeg":
/*!*************************************************!*\
  !*** ./src/images/menuItemPics/menu-item7.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63de7ab2301a3fcc3039.jpeg";

/***/ }),

/***/ "./src/images/menuItemPics/menu-item8.jpeg":
/*!*************************************************!*\
  !*** ./src/images/menuItemPics/menu-item8.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c38c9b1bdf32b429892.jpeg";

/***/ }),

/***/ "./src/images/menuItemPics/menu-item9.jpeg":
/*!*************************************************!*\
  !*** ./src/images/menuItemPics/menu-item9.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c4c180b6ea4a49bf613.jpeg";

/***/ }),

/***/ "./src/images/red-bamboo-bgImage.jpeg":
/*!********************************************!*\
  !*** ./src/images/red-bamboo-bgImage.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ae8db8efc87c64af236.jpeg";

/***/ }),

/***/ "./src/images/red-bamboo-logo.jpeg":
/*!*****************************************!*\
  !*** ./src/images/red-bamboo-logo.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a7761e103505e726664.jpeg";

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
/* harmony import */ var _components_initWebsite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/initWebsite.js */ "./src/components/initWebsite.js");



(0,_components_initWebsite_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2SUFBbUQ7QUFDL0YsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDRDQUE0QyxxSUFBK0M7QUFDM0YsNENBQTRDLHFJQUErQztBQUMzRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSw2QkFBNkIsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsS0FBSyxjQUFjLDJCQUEyQixzQkFBc0IsdUJBQXVCLEtBQUssdUNBQXVDLHFCQUFxQix5QkFBeUIsaUNBQWlDLGlDQUFpQyxzQkFBc0IsS0FBSyxlQUFlLG1CQUFtQixvQkFBb0Isc0JBQXNCLEtBQUssZUFBZSxrQkFBa0Isd0JBQXdCLHlCQUF5QixLQUFLLHlCQUF5QixvQkFBb0IsZ0JBQWdCLDBCQUEwQixrQ0FBa0MsS0FBSywwQkFBMEIsNEJBQTRCLGtCQUFrQixLQUFLLHlCQUF5QixvQkFBb0IsZ0JBQWdCLEtBQUssMkJBQTJCLDRCQUE0QixrQkFBa0IsS0FBSyxpQ0FBaUMsc0JBQXNCLG9CQUFvQiw0QkFBNEIsS0FBSyxtRUFBbUUsa0JBQWtCLG9CQUFvQixnQ0FBZ0MsS0FBSyxvQkFBb0Isb0JBQW9CLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEtBQUssNkJBQTZCLG9CQUFvQixnQkFBZ0IsS0FBSyxzQ0FBc0MsZ0NBQWdDLHdCQUF3Qix5QkFBeUIsc0JBQXNCLEtBQUssb0ZBQW9GLDJDQUEyQyxrQkFBa0IseUJBQXlCLHNCQUFzQixLQUFLLDZFQUE2RSxrQkFBa0IsbUJBQW1CLDhEQUE4RCxtQ0FBbUMsNkJBQTZCLGtDQUFrQyxvQkFBb0IsS0FBSyw2QkFBNkIsaUJBQWlCLHdCQUF3QixrREFBa0Qsb0JBQW9CLDZCQUE2QiwwQkFBMEIsS0FBSywwQ0FBMEMsaUJBQWlCLGtCQUFrQixxQkFBcUIsK0JBQStCLEtBQUssOENBQThDLGtCQUFrQix3QkFBd0IsS0FBSywrQkFBK0Isd0JBQXdCLGlDQUFpQyx5QkFBeUIsNEJBQTRCLHdCQUF3QiwwQkFBMEIsb0JBQW9CLGtCQUFrQiwyQ0FBMkMseUJBQXlCLEtBQUssa0NBQWtDLDhCQUE4Qix5QkFBeUIseUJBQXlCLDBDQUEwQyxzQkFBc0IsMEJBQTBCLHlDQUF5Qyw2Q0FBNkMsS0FBSyx3Q0FBd0Msc0JBQXNCLDZCQUE2QixLQUFLLHFFQUFxRSxpQkFBaUIsb0JBQW9CLHNCQUFzQixnQkFBZ0Isd0JBQXdCLDhDQUE4QyxvQkFBb0IsS0FBSywwQkFBMEIsZ0NBQWdDLHlCQUF5QixzQkFBc0IsbUJBQW1CLG9CQUFvQixvQkFBb0IsS0FBSyxvQ0FBb0MsdUJBQXVCLEtBQUssc0NBQXNDLHVCQUF1QixzQkFBc0IsS0FBSyxzQ0FBc0Msc0JBQXNCLEtBQUssbUNBQW1DLG1CQUFtQixvQkFBb0IseUJBQXlCLEtBQUssdUNBQXVDLGtCQUFrQixtQkFBbUIsd0JBQXdCLHlCQUF5QixLQUFLLDJGQUEyRix3QkFBd0IsT0FBTyx3Q0FBd0Msb0JBQW9CLDZDQUE2QyxLQUFLLDRDQUE0Qyx5QkFBeUIsc0JBQXNCLDBCQUEwQixpQ0FBaUMscUJBQXFCLEtBQUssNENBQTRDLHNCQUFzQixLQUFLLHVDQUF1Qyw2QkFBNkIsa0NBQWtDLG1DQUFtQyxvQkFBb0IsS0FBSyxvREFBb0Qsd0RBQXdELEtBQUssb0RBQW9ELHdEQUF3RCxLQUFLLGtHQUFrRyxvQkFBb0Isd0JBQXdCLEtBQUsseUNBQXlDLHNCQUFzQixrQ0FBa0MsNkJBQTZCLEtBQUssc0RBQXNELDBEQUEwRCxLQUFLLDBDQUEwQyxzQkFBc0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsb0JBQW9CLEtBQUssa0RBQWtELDRCQUE0QixpQ0FBaUMsZ0NBQWdDLHNCQUFzQixxQkFBcUIsS0FBSyx3REFBd0QsMEJBQTBCLEtBQUssMERBQTBELG9CQUFvQixnQkFBZ0IsMEJBQTBCLGtDQUFrQyxLQUFLLCtEQUErRCw0QkFBNEIsa0JBQWtCLEtBQUssc0RBQXNELDBEQUEwRCxrQ0FBa0MsS0FBSywyREFBMkQsb0JBQW9CLG9DQUFvQyxnQkFBZ0IsS0FBSyw2RkFBNkYsb0JBQW9CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGdCQUFnQixnQ0FBZ0MsS0FBSyxzQ0FBc0MsK0JBQStCLEtBQUssa0NBQWtDLGdDQUFnQyxrQkFBa0IseUJBQXlCLDBCQUEwQixvQkFBb0Isb0RBQW9ELE9BQU8sa0NBQWtDLHdCQUF3QixLQUFLLHVDQUF1Qyw0QkFBNEIsa0JBQWtCLGlCQUFpQiw2Q0FBNkMsS0FBSyxpREFBaUQsc0JBQXNCLDRCQUE0QixLQUFLLHVCQUF1QjtBQUNsblQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMvVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pEM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNFZBQTRWO0FBQzVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEd3QjtBQUNsQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseURBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnREFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekMxQjtBQUMwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx5QkFBeUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFUztBQUNyQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdURBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1Q1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNmO0FBQ0E7QUFDRTtBQUNJO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5REFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvREFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0scURBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFhO0FBQ25CO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZxQjtBQUNOO0FBQ007QUFDUjtBQUNuQztBQUNBO0FBQ0EsNEJBQTRCLDBEQUFZO0FBQ3hDLDRCQUE0Qix3REFBUTtBQUNwQyw0QkFBNEIsMERBQVk7QUFDeEMsRUFBRSxvREFBVTtBQUNaO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNab0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZFQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkVBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2RUFBUTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZFQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkVBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2RUFBUTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZFQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkVBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2RUFBUTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZFQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkVBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2RUFBUTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZFQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM5SjFCO0FBQ0EsUUFBUSxtQkFBTyxDQUFDLG9FQUFtQjtBQUNuQyxRQUFRLG1CQUFPLENBQUMsb0VBQW1CO0FBQ25DLFFBQVEsbUJBQU8sQ0FBQyxvRUFBbUI7QUFDbkMsUUFBUSxtQkFBTyxDQUFDLG9FQUFtQjtBQUNuQyxRQUFRLG1CQUFPLENBQUMsb0VBQW1CO0FBQ25DLFFBQVEsbUJBQU8sQ0FBQyxvRUFBbUI7QUFDbkMsUUFBUSxtQkFBTyxDQUFDLG9FQUFtQjtBQUNuQyxRQUFRLG1CQUFPLENBQUMsb0VBQW1CO0FBQ25DLFFBQVEsbUJBQU8sQ0FBQyxvRUFBbUI7QUFDbkMsU0FBUyxtQkFBTyxDQUFDLHNFQUFvQjtBQUNyQyxTQUFTLG1CQUFPLENBQUMsc0VBQW9CO0FBQ3JDLFNBQVMsbUJBQU8sQ0FBQyxzRUFBb0I7QUFDckM7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2Z4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7OztBQ0FxQjtBQUNpQztBQUN0RDtBQUNBLHNFQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2luaXRGb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaW5pdEhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9pbml0TWFpbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9pbml0TmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2luaXRXZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9tZW51SXRlbVBpY3MvbWVudVBpY3NJbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcmVkLWJhbWJvby1iZ0ltYWdlLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9hYm91dC1wZy1pbWcxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Fib3V0LXBnLWltZzIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY29udGFjdC1wZy1pbWcxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NvbnRhY3QtcGctaW1nMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLyogY29tbW9uIHN0eWxlcyAqL1xyXG5cclxuaDEge1xyXG4gIGNvbG9yOiAjNTIwNzFiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxvZ28gaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWluZm8gcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLmNvbnRhY3QtaW5mbyBwIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTJweDtcclxufVxyXG5cclxuLmNvbnRhY3Qtc29jaWFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMzBweDtcclxufVxyXG5cclxuLmNvbnRhY3Qtc29jaWFsIHAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTdweDtcclxufVxyXG5cclxuLmNvbnRhY3Qtc29jaWFsIHA6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmaWxsOiAjNTIwNzFiO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKiBoZWFkZXIgc3R5bGVzICoqKioqKioqKioqKioqKi9cclxuaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjA3MWI7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaGVhZGVyIG5hdiAuYnRuLXRhYiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYgLmJ0bi10YWIgLm5hdi1idG4ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuaGVhZGVyIG5hdiAuYnRuLXRhYiAubmF2LWJ0bjpob3ZlcixcclxuaGVhZGVyIG5hdiAuYnRuLXRhYiAubmF2LWJ0bi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKiogaG9tZXBhZ2Ugc3R5bGVzICoqKioqKioqKioqKioqKioqKi9cclxuLmhvbWUtZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmhvbWUtZGl2IC5jYXJkLWRpdiB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IDMwcHggYXV0bztcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaG9tZS1kaXYgLmNhcmQtZGl2IC5jYXJkSW1nLWRpdiB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDMwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XHJcbn1cclxuXHJcbi5ob21lLWRpdiAuY2FyZC1kaXYgLmNhcmRJbWctZGl2IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5ob21lLWRpdiAuY2FyZC1kaXYgcCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmhvbWUtZGl2IC5jYXJkLWRpdiAuYnRuIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE2NSwgMzIpO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwIDAgMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5ob21lLWRpdiAuY2FyZC1kaXYgLmJ0bjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKiogbWVudSBzdHlsZXMgKioqKioqKioqKioqKioqKi9cclxuXHJcbi5tZW51IHtcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW46IDYwcHggYXV0bztcclxuICBib3gtc2hhZG93OiAwIDAgMTZweCByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1lbnUgLm1lbnUtaXRlbSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzUwNTA1MDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZmxleC1iYXNpczogNDklO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5tZW51IC5tZW51LWl0ZW0gLmluZm8tZGl2IHtcclxuICBmbGV4LWJhc2lzOiAxMDAlO1xyXG59XHJcbi5tZW51IC5tZW51LWl0ZW0gLmluZm8tZGl2IC5uYW1lIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ubWVudSAubWVudS1pdGVtIC5pbmZvLWRpdiAuZGVzYyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubWVudSAubWVudS1pdGVtIC5pbWctZGl2IHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW51IC5tZW51LWl0ZW0gLmltZy1kaXYgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKiogYWJvdXQgcGFnZSBzdHlsZXMgKioqKioqKioqKioqKioqL1xyXG5cclxuLmFib3V0LXBhZ2UgLnNlY3Rpb24ge1xyXG4gIC8qIGhlaWdodDogNTAwcHg7ICovXHJcbn1cclxuXHJcbi5hYm91dC1wYWdlIC5zZWN0aW9uIC50ZXh0LWRpdiB7XHJcbiAgcGFkZGluZzogNjBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTJweCA2cHggIzUyMDcxYiBpbnNldDtcclxufVxyXG4uYWJvdXQtcGFnZSAuc2VjdGlvbiAudGV4dC1kaXYgLnAtaGVhZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiAjNTIwNzFiO1xyXG59XHJcbi5hYm91dC1wYWdlIC5zZWN0aW9uIC50ZXh0LWRpdiAucC10ZXh0IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5hYm91dC1wYWdlIC5zZWN0aW9uIC5pbWctZGl2IHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5hYm91dC1wYWdlIC5zZWN0aW9uOm50aC1jaGlsZCgxKSAuaW1nLWRpdiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG59XHJcblxyXG4uYWJvdXQtcGFnZSAuc2VjdGlvbjpudGgtY2hpbGQoMikgLmltZy1kaXYge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKiBjb250YWN0IHBhZ2Ugc3R5bGVzICoqKioqKioqKioqKioqKioqL1xyXG5cclxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiA0NTBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbiAuaW1nLWJveCB7XHJcbiAgZmxleC1iYXNpczogNTAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uOm50aC1jaGlsZCgxKSAuaW1nLWJveCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG59XHJcblxyXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uIC50ZXh0LWJveCB7XHJcbiAgZmxleC1iYXNpczogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LXBhZ2UgLnNlY3Rpb24gLnRleHQtYm94IC5wVGl0bGUge1xyXG4gIGNvbG9yOiByZ2IoODIsIDcsIDI3KTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW46IDMwcHggMDtcclxufVxyXG5cclxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbiAudGV4dC1ib3ggLmNvbnRhY3QtaW5mbyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbiAudGV4dC1ib3ggLmNvbnRhY3QtaW5mbyBwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbiAudGV4dC1ib3ggLmNvbnRhY3QtaW5mbyBwIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTJweDtcclxufVxyXG5cclxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbjpudGgtY2hpbGQoMikgLmltZy1ib3gge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbn1cclxuXHJcbi5jb250YWN0LXBhZ2UgLnNlY3Rpb24gLnRleHQtYm94IC5ob3Vycy1pbmZvIC5kYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKiBmb290ZXIgc3R5bGVzICoqKioqKioqKioqKioqKioqL1xyXG5cclxuZm9vdGVyIC5wcmltYXJ5LWZvb3RlciB7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XHJcbn1cclxuXHJcbmZvb3RlciAucHJpbWFyeS1mb290ZXIgLmxvZ28ge1xyXG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcclxufVxyXG5cclxuZm9vdGVyIC5zZWNvbmRhcnktZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTIwNzFiO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLyogZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7ICovXHJcbn1cclxuZm9vdGVyIC5zZWNvbmRhcnktZm9vdGVyIHAgYSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuZm9vdGVyIC5zZWNvbmRhcnktZm9vdGVyIHAgYSBzcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgZmlsbDogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuZm9vdGVyIC5zZWNvbmRhcnktZm9vdGVyIHAgYSBzcGFuOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFD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LGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5REFBbUQ7RUFDbkQsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixTQUFTO0FBQ1g7O0FBRUEsb0RBQW9EOztBQUVwRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG59XFxyXFxuXFxyXFxuLyogY29tbW9uIHN0eWxlcyAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gIGNvbG9yOiAjNTIwNzFiO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGZvbnQtc2l6ZTogMzZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWluZm8gcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuLmNvbnRhY3QtaW5mbyBwIHNwYW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXNvY2lhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1zb2NpYWwgcCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3Qtc29jaWFsIHA6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZmlsbDogIzUyMDcxYjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiBoZWFkZXIgc3R5bGVzICoqKioqKioqKioqKioqKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyMDcxYjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgLmJ0bi10YWIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiAuYnRuLXRhYiAubmF2LWJ0biB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgLmJ0bi10YWIgLm5hdi1idG46aG92ZXIsXFxyXFxuaGVhZGVyIG5hdiAuYnRuLXRhYiAubmF2LWJ0bi5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKiBob21lcGFnZSBzdHlsZXMgKioqKioqKioqKioqKioqKioqL1xcclxcbi5ob21lLWRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9yZWQtYmFtYm9vLWJnSW1hZ2UuanBlZyk7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWRpdiAuY2FyZC1kaXYge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtZGl2IC5jYXJkLWRpdiAuY2FyZEltZy1kaXYge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGhlaWdodDogMzAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWRpdiAuY2FyZC1kaXYgLmNhcmRJbWctZGl2IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1kaXYgLmNhcmQtZGl2IHAge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcXHJcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtZGl2IC5jYXJkLWRpdiAuYnRuIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTY1LCAzMik7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAgMCAwKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1kaXYgLmNhcmQtZGl2IC5idG46aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiBtZW51IHN0eWxlcyAqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWFyZ2luOiA2MHB4IGF1dG87XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTZweCByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSAubWVudS1pdGVtIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MDUwNTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmbGV4LWJhc2lzOiA0OSU7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLm1lbnUtaXRlbSAuaW5mby1kaXYge1xcclxcbiAgZmxleC1iYXNpczogMTAwJTtcXHJcXG59XFxyXFxuLm1lbnUgLm1lbnUtaXRlbSAuaW5mby1kaXYgLm5hbWUge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuLm1lbnUgLm1lbnUtaXRlbSAuaW5mby1kaXYgLmRlc2Mge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSAubWVudS1pdGVtIC5pbWctZGl2IHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMTMwcHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51IC5tZW51LWl0ZW0gLmltZy1kaXYgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKiBhYm91dCBwYWdlIHN0eWxlcyAqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLmFib3V0LXBhZ2UgLnNlY3Rpb24ge1xcclxcbiAgLyogaGVpZ2h0OiA1MDBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXBhZ2UgLnNlY3Rpb24gLnRleHQtZGl2IHtcXHJcXG4gIHBhZGRpbmc6IDYwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTJweCA2cHggIzUyMDcxYiBpbnNldDtcXHJcXG59XFxyXFxuLmFib3V0LXBhZ2UgLnNlY3Rpb24gLnRleHQtZGl2IC5wLWhlYWQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY29sb3I6ICM1MjA3MWI7XFxyXFxufVxcclxcbi5hYm91dC1wYWdlIC5zZWN0aW9uIC50ZXh0LWRpdiAucC10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXBhZ2UgLnNlY3Rpb24gLmltZy1kaXYge1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcGFnZSAuc2VjdGlvbjpudGgtY2hpbGQoMSkgLmltZy1kaXYge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2Fib3V0LXBnLWltZzEuanBnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXBhZ2UgLnNlY3Rpb246bnRoLWNoaWxkKDIpIC5pbWctZGl2IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9hYm91dC1wZy1pbWcyLmpwZyk7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKiogY29udGFjdCBwYWdlIHN0eWxlcyAqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtaW4taGVpZ2h0OiA0NTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbiAuaW1nLWJveCB7XFxyXFxuICBmbGV4LWJhc2lzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uOm50aC1jaGlsZCgxKSAuaW1nLWJveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvY29udGFjdC1wZy1pbWcxLmpwZyk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXBhZ2UgLnNlY3Rpb24gLnRleHQtYm94IHtcXHJcXG4gIGZsZXgtYmFzaXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXBhZ2UgLnNlY3Rpb24gLnRleHQtYm94IC5wVGl0bGUge1xcclxcbiAgY29sb3I6IHJnYig4MiwgNywgMjcpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luOiAzMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXBhZ2UgLnNlY3Rpb24gLnRleHQtYm94IC5jb250YWN0LWluZm8ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbiAudGV4dC1ib3ggLmNvbnRhY3QtaW5mbyBwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uIC50ZXh0LWJveCAuY29udGFjdC1pbmZvIHAgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtcGFnZSAuc2VjdGlvbjpudGgtY2hpbGQoMikgLmltZy1ib3gge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2NvbnRhY3QtcGctaW1nMi5qcGcpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1wYWdlIC5zZWN0aW9uIC50ZXh0LWJveCAuaG91cnMtaW5mbyAuZGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKiogZm9vdGVyIHN0eWxlcyAqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG5mb290ZXIgLnByaW1hcnktZm9vdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5wcmltYXJ5LWZvb3RlciAubG9nbyB7XFxyXFxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuc2Vjb25kYXJ5LWZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTIwNzFiO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIC8qIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyAqL1xcclxcbn1cXHJcXG5mb290ZXIgLnNlY29uZGFyeS1mb290ZXIgcCBhIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5mb290ZXIgLnNlY29uZGFyeS1mb290ZXIgcCBhIHNwYW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDE4cHg7XFxyXFxuICBmaWxsOiAjZmZmO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuc2Vjb25kYXJ5LWZvb3RlciBwIGEgc3Bhbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHJlbmRlckFib3V0KCkge1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIG1haW5Db250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVBYm91dCgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XHJcbiAgY29uc3QgYWJvdXRQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhYm91dFBhZ2UuY2xhc3NMaXN0LmFkZChcImFib3V0LXBhZ2VcIik7XHJcblxyXG4gIGNvbnN0IHNlY3Rpb25PbmUgPSBjcmVhdGVTZWN0aW9uKFxyXG4gICAgXCJWRUdBTlwiLFxyXG4gICAgXCJTaW5jZSBvcGVuaW5nIGluIDIwMDIgd2UgYXQgUmVkIEJhbWJvbyBoYXZlIHN0cml2ZWQgdG8gcmVkZWZpbmUgd2hhdCBpdCBtZWFucyB0byBiZSB2ZWdhbiBieSBjcmVhdGluZyBpbm5vdmF0aXZlIG1vY2sgbWVhdCBhbmQgc2VhZm9vZCBkaXNoZXMuIFwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgc2VjdGlvblR3byA9IGNyZWF0ZVNlY3Rpb24oXHJcbiAgICBcIkdMT0JBTCBDVUlTSU5FXCIsXHJcbiAgICBcIkV2ZXJ5IHllYXIgd2UgYWRkIG5ldyB2ZWdhbiBkaXNoZXMgZnJvbSBhcm91bmQgdGhlIHdvcmQuIE5ld2VzdCBkaXNoZXMgaW5jbHVkZTogUG9ydG9iZWxsbyBGcml0dGVycywgU2FsbW9uIFRlcml5YWtpLCBQYXN0YSBDYXJib25hcmEsIFJpZ2F0b25pIEJvbG9nbmVzZSwgQ2Flc2FyLCBHcmVlayBhbmQgQ29iYiBTYWxhZC5cIlxyXG4gICk7XHJcblxyXG4gIGFib3V0UGFnZS5hcHBlbmQoc2VjdGlvbk9uZSwgc2VjdGlvblR3byk7XHJcblxyXG4gIHJldHVybiBhYm91dFBhZ2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24oaGVhZGVyLCB0ZXh0KSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiKTtcclxuXHJcbiAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKFwidGV4dC1kaXZcIik7XHJcblxyXG4gIGNvbnN0IHBIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcEhlYWQuY2xhc3NMaXN0LmFkZChcInAtaGVhZFwiKTtcclxuICBwSGVhZC50ZXh0Q29udGVudCA9IGhlYWRlcjtcclxuXHJcbiAgY29uc3QgcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwVGV4dC5jbGFzc0xpc3QuYWRkKFwicC10ZXh0XCIpO1xyXG4gIHBUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgY29uc3QgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbWdEaXYuY2xhc3NMaXN0LmFkZChcImltZy1kaXZcIik7XHJcblxyXG4gIHRleHREaXYuYXBwZW5kKHBIZWFkLCBwVGV4dCk7XHJcbiAgc2VjdGlvbi5hcHBlbmQodGV4dERpdiwgaW1nRGl2KTtcclxuXHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckFib3V0O1xyXG4iLCJmdW5jdGlvbiByZW5kZXJDb250YWN0KCkge1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIG1haW5Db250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xyXG4gIGNvbnN0IGNvbnRhY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWN0UGFnZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1wYWdlXCIpO1xyXG5cclxuICBjb25zdCBzZWN0aW9uT25lID0gY3JlYXRlU2VjdGlvbk9uZSgpO1xyXG4gIGNvbnN0IHNlY3Rpb25Ud28gPSBjcmVhdGVTZWN0aW9uVHdvKCk7XHJcblxyXG4gIGNvbnRhY3RQYWdlLmFwcGVuZChzZWN0aW9uT25lLCBzZWN0aW9uVHdvKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhY3RQYWdlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTZWN0aW9uT25lKCkge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XHJcblxyXG4gIGNvbnN0IGltZ0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW1nQm94LmNsYXNzTGlzdC5hZGQoXCJpbWctYm94XCIpO1xyXG5cclxuICBjb25zdCB0ZXh0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0Qm94LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWJveFwiKTtcclxuXHJcbiAgdGV4dEJveC5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJwVGl0bGVcIj5jb250YWN0IHVzITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZGRyZXNzXCI+PHNwYW4+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbCA9XCIjNTIwNzFiXCIgdmlld0JveD1cIjAgMCAzODQgNTEyXCI+PHBhdGggZD1cIk0zODQgMTkyYzAgODcuNC0xMTcgMjQzLTE2OC4zIDMwNy4yYy0xMi4zIDE1LjMtMzUuMSAxNS4zLTQ3LjQgMEMxMTcgNDM1IDAgMjc5LjQgMCAxOTJDMCA4NiA4NiAwIDE5MiAwUzM4NCA4NiAzODQgMTkyelwiLz48L3N2Zz48L3NwYW4+IDE0MCBXZXN0IDR0aCBTdHJlZXQgTlksIE5ZIDEwMDEyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwaG9uZVwiPjxzcGFuPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGwgPVwiIzUyMDcxYlwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGQ9XCJNMTY0LjkgMjQuNmMtNy43LTE4LjYtMjgtMjguNS00Ny40LTIzLjJsLTg4IDI0QzEyLjEgMzAuMiAwIDQ2IDAgNjRDMCAzMTEuNCAyMDAuNiA1MTIgNDQ4IDUxMmMxOCAwIDMzLjgtMTIuMSAzOC42LTI5LjVsMjQtODhjNS4zLTE5LjQtNC42LTM5LjctMjMuMi00Ny40bC05Ni00MGMtMTYuMy02LjgtMzUuMi0yLjEtNDYuMyAxMS42TDMwNC43IDM2OEMyMzQuMyAzMzQuNyAxNzcuMyAyNzcuNyAxNDQgMjA3LjNMMTkzLjMgMTY3YzEzLjctMTEuMiAxOC40LTMwIDExLjYtNDYuM2wtNDAtOTZ6XCIvPjwvc3ZnPjwvc3Bhbj4gMjEyLTI2MC03MDQ5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJlbWFpbFwiPjxzcGFuPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGwgPVwiIzUyMDcxYlwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGQ9XCJNNDggNjRDMjEuNSA2NCAwIDg1LjUgMCAxMTJjMCAxNS4xIDcuMSAyOS4zIDE5LjIgMzguNEwyMzYuOCAzMTMuNmMxMS40IDguNSAyNyA4LjUgMzguNCAwTDQ5Mi44IDE1MC40YzEyLjEtOS4xIDE5LjItMjMuMyAxOS4yLTM4LjRjMC0yNi41LTIxLjUtNDgtNDgtNDhMNDggNjR6TTAgMTc2TDAgMzg0YzAgMzUuMyAyOC43IDY0IDY0IDY0bDM4NCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMjA4TDI5NC40IDMzOS4yYy0yMi44IDE3LjEtNTQgMTcuMS03Ni44IDBMMCAxNzZ6XCIvPjwvc3ZnPjwvc3Bhbj5yZWRiYW1ib29ueWNAZ21haWwuY29tPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvbi1tYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDMwMjMuMzk4MjkyMjcyODA4MiEyZC03NC4wMDQ5NTc5MjQ2NDgyOCEzZDQwLjczMTI2MDY3MzIyMzg5ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4OWMyNTk5MTY2YWM0NWMxJTNBMHhkMmJiN2VmZTczMGRkMjg0ITJzUmVkJTIwQmFtYm9vITVlMCEzbTIhMXNlbiEyc2luITR2MTcyMjAxNTE2MTU5MiE1bTIhMXNlbiEyc2luXCIgd2lkdGg9XCIzNTBcIiBoZWlnaHQ9XCIyMDBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICBzZWN0aW9uLmFwcGVuZChpbWdCb3gsIHRleHRCb3gpO1xyXG5cclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2VjdGlvblR3bygpIHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xyXG5cclxuICBjb25zdCB0ZXh0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0Qm94LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWJveFwiKTtcclxuXHJcbiAgdGV4dEJveC5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJwVGl0bGVcIj5vcGVuaW5nIGhvdXJzITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJzLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TU9OREFZPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4xMnBtIC0gOXBtPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRVRVNEQVk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjEycG0gLSA5cG08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V0VETkVTREFZPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4xMnBtIC0gMTBwbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5USFVSU0RBWTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+MTJwbSAtIDEwcG08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RlJJREFZPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4xMnBtIC0gMTBwbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TQVRVUkRBWTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+MTJwbSAtIDEwcG08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U1VOREFZPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4xMnBtIC0gMTBwbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwVGl0bGVcIj5Gb2xsb3cgdXMgb24gc29jaWFsITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LXNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj4gPHBhdGggZD1cIk01MTIgMjU2QzUxMiAxMTQuNiAzOTcuNCAwIDI1NiAwUzAgMTE0LjYgMCAyNTZDMCAzNzYgODIuNyA0NzYuOCAxOTQuMiA1MDQuNVYzMzQuMkgxNDEuNFYyNTZoNTIuOFYyMjIuM2MwLTg3LjEgMzkuNC0xMjcuNSAxMjUtMTI3LjVjMTYuMiAwIDQ0LjIgMy4yIDU1LjcgNi40VjE3MmMtNi0uNi0xNi41LTEtMjkuNi0xYy00MiAwLTU4LjIgMTUuOS01OC4yIDU3LjJWMjU2aDgzLjZsLTE0LjQgNzguMkgyODdWNTEwLjFDNDEzLjggNDk0LjggNTEyIDM4Ni45IDUxMiAyNTZoMHpcIi8+PC9zdmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj4gPHBhdGggZD1cIk0yMjQuMSAxNDFjLTYzLjYgMC0xMTQuOSA1MS4zLTExNC45IDExNC45czUxLjMgMTE0LjkgMTE0LjkgMTE0LjlTMzM5IDMxOS41IDMzOSAyNTUuOSAyODcuNyAxNDEgMjI0LjEgMTQxem0wIDE4OS42Yy00MS4xIDAtNzQuNy0zMy41LTc0LjctNzQuN3MzMy41LTc0LjcgNzQuNy03NC43IDc0LjcgMzMuNSA3NC43IDc0LjctMzMuNiA3NC43LTc0LjcgNzQuN3ptMTQ2LjQtMTk0LjNjMCAxNC45LTEyIDI2LjgtMjYuOCAyNi44LTE0LjkgMC0yNi44LTEyLTI2LjgtMjYuOHMxMi0yNi44IDI2LjgtMjYuOCAyNi44IDEyIDI2LjggMjYuOHptNzYuMSAyNy4yYy0xLjctMzUuOS05LjktNjcuNy0zNi4yLTkzLjktMjYuMi0yNi4yLTU4LTM0LjQtOTMuOS0zNi4yLTM3LTIuMS0xNDcuOS0yLjEtMTg0LjkgMC0zNS44IDEuNy02Ny42IDkuOS05My45IDM2LjFzLTM0LjQgNTgtMzYuMiA5My45Yy0yLjEgMzctMi4xIDE0Ny45IDAgMTg0LjkgMS43IDM1LjkgOS45IDY3LjcgMzYuMiA5My45czU4IDM0LjQgOTMuOSAzNi4yYzM3IDIuMSAxNDcuOSAyLjEgMTg0LjkgMCAzNS45LTEuNyA2Ny43LTkuOSA5My45LTM2LjIgMjYuMi0yNi4yIDM0LjQtNTggMzYuMi05My45IDIuMS0zNyAyLjEtMTQ3LjggMC0xODQuOHpNMzk4LjggMzg4Yy03LjggMTkuNi0yMi45IDM0LjctNDIuNiA0Mi42LTI5LjUgMTEuNy05OS41IDktMTMyLjEgOXMtMTAyLjcgMi42LTEzMi4xLTljLTE5LjYtNy44LTM0LjctMjIuOS00Mi42LTQyLjYtMTEuNy0yOS41LTktOTkuNS05LTEzMi4xcy0yLjYtMTAyLjcgOS0xMzIuMWM3LjgtMTkuNiAyMi45LTM0LjcgNDIuNi00Mi42IDI5LjUtMTEuNyA5OS41LTkgMTMyLjEtOXMxMDIuNy0yLjYgMTMyLjEgOWMxOS42IDcuOCAzNC43IDIyLjkgNDIuNiA0Mi42IDExLjcgMjkuNSA5IDk5LjUgOSAxMzIuMXMyLjcgMTAyLjctOSAxMzIuMXpcIi8+PC9zdmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj4gPHBhdGggZD1cIk0zODkuMiA0OGg3MC42TDMwNS42IDIyNC4yIDQ4NyA0NjRIMzQ1TDIzMy43IDMxOC42IDEwNi41IDQ2NEgzNS44TDIwMC43IDI3NS41IDI2LjggNDhIMTcyLjRMMjcyLjkgMTgwLjkgMzg5LjIgNDh6TTM2NC40IDQyMS44aDM5LjFMMTUxLjEgODhoLTQyTDM2NC40IDQyMS44elwiLz48L3N2Zz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICBjb25zdCBpbWdCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGltZ0JveC5jbGFzc0xpc3QuYWRkKFwiaW1nLWJveFwiKTtcclxuICBzZWN0aW9uLmFwcGVuZCh0ZXh0Qm94LCBpbWdCb3gpO1xyXG5cclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ29udGFjdDtcclxuIiwiaW1wb3J0IENhcmRJbWcgZnJvbSBcIi4uL2ltYWdlcy9yZWQtYmFtYm9vLWxvZ28uanBlZ1wiO1xyXG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJIb21lKCkge1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIG1haW5Db250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xyXG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWVEaXYuY2xhc3NMaXN0LmFkZChcImhvbWUtZGl2XCIpO1xyXG5cclxuICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWRpdlwiKTtcclxuXHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaDEudGV4dENvbnRlbnQgPSBcInJlZCBiYW1ib28gY2FmZVwiO1xyXG5cclxuICBjb25zdCBjYXJkSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYXJkSW1nRGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJkSW1nLWRpdlwiKTtcclxuXHJcbiAgY29uc3QgY2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY2FyZEltZy5zcmMgPSBDYXJkSW1nO1xyXG4gIGNhcmRJbWcuYWx0ID0gXCJjYXJkLWltYWdlXCI7XHJcblxyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwLnRleHRDb250ZW50ID0gXCJZb3VyIGN1bGluYXJ5IGFkdmVudHVyZSBhd2FpdHMuXCI7XHJcblxyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XHJcbiAgYnRuLnRleHRDb250ZW50ID0gXCJFeHBsb3JlIVwiO1xyXG4gIGJ0bi5vbmNsaWNrID0gcmVuZGVyTWVudTtcclxuXHJcbiAgY2FyZEltZ0Rpdi5hcHBlbmRDaGlsZChjYXJkSW1nKTtcclxuICBjYXJkRGl2LmFwcGVuZChoMSwgY2FyZEltZ0RpdiwgcCwgYnRuKTtcclxuICBob21lRGl2LmFwcGVuZENoaWxkKGNhcmREaXYpO1xyXG5cclxuICByZXR1cm4gaG9tZURpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZTtcclxuIiwiLy8gaW1wb3J0IExvZ28gZnJvbSBcIi4uL2ltYWdlcy9yZWQtYmFtYm9vLWxvZ28uanBlZ1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVMb2dvIH0gZnJvbSBcIi4vaW5pdE5hdi5qc1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHByaW1hcnlGb290ZXIoKSk7XHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHNlY29uZGFyeUZvb3RlcigpKTtcclxuXHJcbiAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbWFyeUZvb3RlcigpIHtcclxuICBjb25zdCBwcmltYXJ5Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcmltYXJ5Rm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJwcmltYXJ5LWZvb3RlclwiKTtcclxuXHJcbiAgY29uc3QgbG9nbyA9IGNyZWF0ZUxvZ28oKTtcclxuXHJcbiAgY29uc3QgY29udGFjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFjdEJveC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbmZvXCIpO1xyXG4gIGNvbnRhY3RCb3guaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwiYWRkcmVzc1wiPjxzcGFuPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGwgPVwiIzUyMDcxYlwiIHZpZXdCb3g9XCIwIDAgMzg0IDUxMlwiPjxwYXRoIGQ9XCJNMzg0IDE5MmMwIDg3LjQtMTE3IDI0My0xNjguMyAzMDcuMmMtMTIuMyAxNS4zLTM1LjEgMTUuMy00Ny40IDBDMTE3IDQzNSAwIDI3OS40IDAgMTkyQzAgODYgODYgMCAxOTIgMFMzODQgODYgMzg0IDE5MnpcIi8+PC9zdmc+PC9zcGFuPiAxNDAgV2VzdCA0dGggU3RyZWV0IE5ZLCBOWSAxMDAxMjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGhvbmVcIj48c3Bhbj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsID1cIiM1MjA3MWJcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBkPVwiTTE2NC45IDI0LjZjLTcuNy0xOC42LTI4LTI4LjUtNDcuNC0yMy4ybC04OCAyNEMxMi4xIDMwLjIgMCA0NiAwIDY0QzAgMzExLjQgMjAwLjYgNTEyIDQ0OCA1MTJjMTggMCAzMy44LTEyLjEgMzguNi0yOS41bDI0LTg4YzUuMy0xOS40LTQuNi0zOS43LTIzLjItNDcuNGwtOTYtNDBjLTE2LjMtNi44LTM1LjItMi4xLTQ2LjMgMTEuNkwzMDQuNyAzNjhDMjM0LjMgMzM0LjcgMTc3LjMgMjc3LjcgMTQ0IDIwNy4zTDE5My4zIDE2N2MxMy43LTExLjIgMTguNC0zMCAxMS42LTQ2LjNsLTQwLTk2elwiLz48L3N2Zz48L3NwYW4+IDIxMi0yNjAtNzA0OTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZW1haWxcIj48c3Bhbj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsID1cIiM1MjA3MWJcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBkPVwiTTQ4IDY0QzIxLjUgNjQgMCA4NS41IDAgMTEyYzAgMTUuMSA3LjEgMjkuMyAxOS4yIDM4LjRMMjM2LjggMzEzLjZjMTEuNCA4LjUgMjcgOC41IDM4LjQgMEw0OTIuOCAxNTAuNGMxMi4xLTkuMSAxOS4yLTIzLjMgMTkuMi0zOC40YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4TDQ4IDY0ek0wIDE3NkwwIDM4NGMwIDM1LjMgMjguNyA2NCA2NCA2NGwzODQgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTIwOEwyOTQuNCAzMzkuMmMtMjIuOCAxNy4xLTU0IDE3LjEtNzYuOCAwTDAgMTc2elwiLz48L3N2Zz48L3NwYW4+cmVkYmFtYm9vbnljQGdtYWlsLmNvbTwvcD5gO1xyXG5cclxuICBjb25zdCB0aW1pbmdzQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0aW1pbmdzQm94LmNsYXNzTGlzdC5hZGQoXCJ0aW1pbmdzLWluZm9cIik7XHJcblxyXG4gIGNvbnN0IGhvdXJzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG91cnNJbmZvLmNsYXNzTGlzdC5hZGQoXCJob3Vycy1pbmZvXCIpO1xyXG4gIGhvdXJzSW5mby5pbm5lckhUTUwgPSBgPHA+PHNwYW4+TW9uLVR1ZTwvc3Bhbj4gIDxzcGFuPjEycG0tOXBtPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+V2VkLVN1bjwvc3Bhbj4gIDxzcGFuPjEycG0tMTBwbTwvc3Bhbj48L3A+YDtcclxuXHJcbiAgY29uc3Qgc29jaWFsTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNvY2lhbExpbmtzLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXNvY2lhbFwiKTtcclxuICBzb2NpYWxMaW5rcy5pbm5lckhUTUwgPSBgPHA+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+IDxwYXRoIGQ9XCJNNTEyIDI1NkM1MTIgMTE0LjYgMzk3LjQgMCAyNTYgMFMwIDExNC42IDAgMjU2QzAgMzc2IDgyLjcgNDc2LjggMTk0LjIgNTA0LjVWMzM0LjJIMTQxLjRWMjU2aDUyLjhWMjIyLjNjMC04Ny4xIDM5LjQtMTI3LjUgMTI1LTEyNy41YzE2LjIgMCA0NC4yIDMuMiA1NS43IDYuNFYxNzJjLTYtLjYtMTYuNS0xLTI5LjYtMWMtNDIgMC01OC4yIDE1LjktNTguMiA1Ny4yVjI1Nmg4My42bC0xNC40IDc4LjJIMjg3VjUxMC4xQzQxMy44IDQ5NC44IDUxMiAzODYuOSA1MTIgMjU2aDB6XCIvPjwvc3ZnPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+IDxwYXRoIGQ9XCJNMjI0LjEgMTQxYy02My42IDAtMTE0LjkgNTEuMy0xMTQuOSAxMTQuOXM1MS4zIDExNC45IDExNC45IDExNC45UzMzOSAzMTkuNSAzMzkgMjU1LjkgMjg3LjcgMTQxIDIyNC4xIDE0MXptMCAxODkuNmMtNDEuMSAwLTc0LjctMzMuNS03NC43LTc0LjdzMzMuNS03NC43IDc0LjctNzQuNyA3NC43IDMzLjUgNzQuNyA3NC43LTMzLjYgNzQuNy03NC43IDc0Ljd6bTE0Ni40LTE5NC4zYzAgMTQuOS0xMiAyNi44LTI2LjggMjYuOC0xNC45IDAtMjYuOC0xMi0yNi44LTI2LjhzMTItMjYuOCAyNi44LTI2LjggMjYuOCAxMiAyNi44IDI2Ljh6bTc2LjEgMjcuMmMtMS43LTM1LjktOS45LTY3LjctMzYuMi05My45LTI2LjItMjYuMi01OC0zNC40LTkzLjktMzYuMi0zNy0yLjEtMTQ3LjktMi4xLTE4NC45IDAtMzUuOCAxLjctNjcuNiA5LjktOTMuOSAzNi4xcy0zNC40IDU4LTM2LjIgOTMuOWMtMi4xIDM3LTIuMSAxNDcuOSAwIDE4NC45IDEuNyAzNS45IDkuOSA2Ny43IDM2LjIgOTMuOXM1OCAzNC40IDkzLjkgMzYuMmMzNyAyLjEgMTQ3LjkgMi4xIDE4NC45IDAgMzUuOS0xLjcgNjcuNy05LjkgOTMuOS0zNi4yIDI2LjItMjYuMiAzNC40LTU4IDM2LjItOTMuOSAyLjEtMzcgMi4xLTE0Ny44IDAtMTg0Ljh6TTM5OC44IDM4OGMtNy44IDE5LjYtMjIuOSAzNC43LTQyLjYgNDIuNi0yOS41IDExLjctOTkuNSA5LTEzMi4xIDlzLTEwMi43IDIuNi0xMzIuMS05Yy0xOS42LTcuOC0zNC43LTIyLjktNDIuNi00Mi42LTExLjctMjkuNS05LTk5LjUtOS0xMzIuMXMtMi42LTEwMi43IDktMTMyLjFjNy44LTE5LjYgMjIuOS0zNC43IDQyLjYtNDIuNiAyOS41LTExLjcgOTkuNS05IDEzMi4xLTlzMTAyLjctMi42IDEzMi4xIDljMTkuNiA3LjggMzQuNyAyMi45IDQyLjYgNDIuNiAxMS43IDI5LjUgOSA5OS41IDkgMTMyLjFzMi43IDEwMi43LTkgMTMyLjF6XCIvPjwvc3ZnPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+IDxwYXRoIGQ9XCJNMzg5LjIgNDhoNzAuNkwzMDUuNiAyMjQuMiA0ODcgNDY0SDM0NUwyMzMuNyAzMTguNiAxMDYuNSA0NjRIMzUuOEwyMDAuNyAyNzUuNSAyNi44IDQ4SDE3Mi40TDI3Mi45IDE4MC45IDM4OS4yIDQ4ek0zNjQuNCA0MjEuOGgzOS4xTDE1MS4xIDg4aC00MkwzNjQuNCA0MjEuOHpcIi8+PC9zdmc+PC9wPmA7XHJcblxyXG4gIHRpbWluZ3NCb3guYXBwZW5kKGhvdXJzSW5mbywgc29jaWFsTGlua3MpO1xyXG4gIHByaW1hcnlGb290ZXIuYXBwZW5kKGxvZ28sIGNvbnRhY3RCb3gsIHRpbWluZ3NCb3gpO1xyXG5cclxuICByZXR1cm4gcHJpbWFyeUZvb3RlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2Vjb25kYXJ5Rm9vdGVyKCkge1xyXG4gIGNvbnN0IHNlY29uZGFyeUZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2Vjb25kYXJ5Rm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmRhcnktZm9vdGVyXCIpO1xyXG5cclxuICBjb25zdCBwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwRWwudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWA7XHJcblxyXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9jbGVhbmNvZGVyLWluXCI7XHJcblxyXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBnaXRodWJJY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ5NiA1MTJcIj5cclxuICAgICAgPHBhdGggZD1cIk0xNjUuOSAzOTcuNGMwIDItMi4zIDMuNi01LjIgMy42LTMuMyAuMy01LjYtMS4zLTUuNi0zLjYgMC0yIDIuMy0zLjYgNS4yLTMuNiAzLS4zIDUuNiAxLjMgNS42IDMuNnptLTMxLjEtNC41Yy0uNyAyIDEuMyA0LjMgNC4zIDQuOSAyLjYgMSA1LjYgMCA2LjItMnMtMS4zLTQuMy00LjMtNS4yYy0yLjYtLjctNS41IC4zLTYuMiAyLjN6bTQ0LjItMS43Yy0yLjkgLjctNC45IDIuNi00LjYgNC45IC4zIDIgMi45IDMuMyA1LjkgMi42IDIuOS0uNyA0LjktMi42IDQuNi00LjYtLjMtMS45LTMtMy4yLTUuOS0yLjl6TTI0NC44IDhDMTA2LjEgOCAwIDExMy4zIDAgMjUyYzAgMTEwLjkgNjkuOCAyMDUuOCAxNjkuNSAyMzkuMiAxMi44IDIuMyAxNy4zLTUuNiAxNy4zLTEyLjEgMC02LjItLjMtNDAuNC0uMy02MS40IDAgMC03MCAxNS04NC43LTI5LjggMCAwLTExLjQtMjkuMS0yNy44LTM2LjYgMCAwLTIyLjktMTUuNyAxLjYtMTUuNCAwIDAgMjQuOSAyIDM4LjYgMjUuOCAyMS45IDM4LjYgNTguNiAyNy41IDcyLjkgMjAuOSAyLjMtMTYgOC44LTI3LjEgMTYtMzMuNy01NS45LTYuMi0xMTIuMy0xNC4zLTExMi4zLTExMC41IDAtMjcuNSA3LjYtNDEuMyAyMy42LTU4LjktMi42LTYuNS0xMS4xLTMzLjMgMi42LTY3LjkgMjAuOS02LjUgNjkgMjcgNjkgMjcgMjAtNS42IDQxLjUtOC41IDYyLjgtOC41czQyLjggMi45IDYyLjggOC41YzAgMCA0OC4xLTMzLjYgNjktMjcgMTMuNyAzNC43IDUuMiA2MS40IDIuNiA2Ny45IDE2IDE3LjcgMjUuOCAzMS41IDI1LjggNTguOSAwIDk2LjUtNTguOSAxMDQuMi0xMTQuOCAxMTAuNSA5LjIgNy45IDE3IDIyLjkgMTcgNDYuNCAwIDMzLjctLjMgNzUuNC0uMyA4My42IDAgNi41IDQuNiAxNC40IDE3LjMgMTIuMUM0MjguMiA0NTcuOCA0OTYgMzYyLjkgNDk2IDI1MiA0OTYgMTEzLjMgMzgzLjUgOCAyNDQuOCA4ek05Ny4yIDM1Mi45Yy0xLjMgMS0xIDMuMyAuNyA1LjIgMS42IDEuNiAzLjkgMi4zIDUuMiAxIDEuMy0xIDEtMy4zLS43LTUuMi0xLjYtMS42LTMuOS0yLjMtNS4yLTF6bS0xMC44LTguMWMtLjcgMS4zIC4zIDIuOSAyLjMgMy45IDEuNiAxIDMuNiAuNyA0LjMtLjcgLjctMS4zLS4zLTIuOS0yLjMtMy45LTItLjYtMy42LS4zLTQuMyAuN3ptMzIuNCAzNS42Yy0xLjYgMS4zLTEgNC4zIDEuMyA2LjIgMi4zIDIuMyA1LjIgMi42IDYuNSAxIDEuMy0xLjMgLjctNC4zLTEuMy02LjItMi4yLTIuMy01LjItMi42LTYuNS0xem0tMTEuNC0xNC43Yy0xLjYgMS0xLjYgMy42IDAgNS45IDEuNiAyLjMgNC4zIDMuMyA1LjYgMi4zIDEuNi0xLjMgMS42LTMuOSAwLTYuMi0xLjQtMi4zLTQtMy4zLTUuNi0yelwiIC8+XHJcbiAgICA8L3N2Zz5gO1xyXG5cclxuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xyXG4gIHBFbC5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcclxuXHJcbiAgc2Vjb25kYXJ5Rm9vdGVyLmFwcGVuZENoaWxkKHBFbCk7XHJcblxyXG4gIHJldHVybiBzZWNvbmRhcnlGb290ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjtcclxuIiwiaW1wb3J0IGNyZWF0ZU5hdiBmcm9tIFwiLi9pbml0TmF2LmpzXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7XHJcbiIsImZ1bmN0aW9uIGluaXRNYWluKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcclxuICByZXR1cm4gbWFpbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdE1haW47XHJcbiIsImltcG9ydCBMb2dvIGZyb20gXCIuLi9pbWFnZXMvcmVkLWJhbWJvby1sb2dvLmpwZWdcIjtcclxuaW1wb3J0IHJlbmRlckhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCByZW5kZXJBYm91dCBmcm9tIFwiLi9hYm91dC5qc1wiO1xyXG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlTG9nbygpKTtcclxuICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uVGFiKCkpO1xyXG4gIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxvZ28oKSB7XHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuICBsb2dvLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50VGFiQWN0aXZlKG51bGwpO1xyXG4gICAgcmVuZGVySG9tZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGxvZ29JbWcuc3JjID0gTG9nbztcclxuICBsb2dvSW1nLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWltZ1wiKTtcclxuICBsb2dvSW1nLmFsdCA9IFwibG9nb1wiO1xyXG5cclxuICBsb2dvLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG5cclxuICByZXR1cm4gbG9nbztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uVGFiKCkge1xyXG4gIGNvbnN0IGJ1dHRvblRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnV0dG9uVGFiLmNsYXNzTGlzdC5hZGQoXCJidG4tdGFiXCIpO1xyXG5cclxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuXCIpO1xyXG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCBcIm1lbnVcIik7XHJcblxyXG4gIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhYm91dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcclxuICBhYm91dEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcclxuICBhYm91dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgXCJhYm91dFwiKTtcclxuXHJcbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcclxuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgY29udGFjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgXCJjb250YWN0XCIpO1xyXG5cclxuICBidXR0b25UYWIuYXBwZW5kKG1lbnVCdXR0b24sIGFib3V0QnV0dG9uLCBjb250YWN0QnV0dG9uKTtcclxuICBidXR0b25UYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ0bkNsaWNrSGFuZGxlcik7XHJcbiAgcmV0dXJuIGJ1dHRvblRhYjtcclxufVxyXG5cclxuZnVuY3Rpb24gYnRuQ2xpY2tIYW5kbGVyKGUpIHtcclxuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnRuXCIpO1xyXG4gIGJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5uYW1lID09PSBcIm1lbnVcIiAmJiBidG4udGV4dENvbnRlbnQgPT09IFwiTWVudVwiKSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICAgICAgc2V0Q3VycmVudFRhYkFjdGl2ZShidG4pO1xyXG4gICAgICByZW5kZXJNZW51KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5uYW1lID09PSBcImFib3V0XCIgJiYgYnRuLnRleHRDb250ZW50ID09PSBcIkFib3V0XCIpIHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gICAgICBzZXRDdXJyZW50VGFiQWN0aXZlKGJ0bik7XHJcbiAgICAgIHJlbmRlckFib3V0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5uYW1lID09PSBcImNvbnRhY3RcIiAmJiBidG4udGV4dENvbnRlbnQgPT09IFwiQ29udGFjdFwiKSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICAgICAgc2V0Q3VycmVudFRhYkFjdGl2ZShidG4pO1xyXG4gICAgICByZW5kZXJDb250YWN0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRUYWJBY3RpdmUoY2xpY2tlZEJ0bikge1xyXG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1idG5cIik7XHJcbiAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGlmIChidG4gIT09IGNsaWNrZWRCdG4pIHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKGNsaWNrZWRCdG4gIT09IG51bGwpIHtcclxuICAgIGNsaWNrZWRCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdjtcclxuZXhwb3J0IHsgY3JlYXRlTG9nbyB9O1xyXG4iLCJpbXBvcnQgcmVuZGVySGVhZGVyIGZyb20gXCIuL2luaXRIZWFkZXIuanNcIjtcclxuaW1wb3J0IGluaXRNYWluIGZyb20gXCIuL2luaXRNYWluLmpzXCI7XHJcbmltcG9ydCByZW5kZXJGb290ZXIgZnJvbSBcIi4vaW5pdEZvb3Rlci5qc1wiO1xyXG5pbXBvcnQgcmVuZGVySG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBpbml0V2Vic2l0ZSgpIHtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlckhlYWRlcigpKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluaXRNYWluKCkpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyRm9vdGVyKCkpO1xyXG4gIHJlbmRlckhvbWUoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdFdlYnNpdGU7XHJcbiIsImltcG9ydCBtZW51UGljcyBmcm9tIFwiLi4vaW1hZ2VzL21lbnVJdGVtUGljcy9tZW51UGljc0luZGV4LmpzXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJNZW51KCkge1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIG1haW5Db250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBjb25zb2xlLmxvZyhtZW51UGljcyk7XHJcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiQ3Jlb2xlIFNvdWwgQ2hpY2tlblwiLFxyXG4gICAgICBcIk91ciBzaWduYXR1cmUgc295IGNoaWNrZW4gbnVnZ2V0cyBwYW5rby1icmVhZGVkIHdpdGggQ2FqdW4gYW5kIHJvc2VtYXJ5IHNlYXNvbmluZyBhbmQgZnJpZWQuIFNlcnZlZCB3aXRoIG91ciBoaWNrb3J5LXNtb2tlZCB2aWRhbGlhIGRyZXNzaW5nLlwiLFxyXG4gICAgICBcIiQxMi4wMFwiLFxyXG4gICAgICBtZW51UGljcy5waWMxXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIkJyb2Njb2xpIGFuZCBTd2VldCBQb3RhdG8gVGVtcHVyYVwiLFxyXG4gICAgICBcIkRlZXAtZnJpZWQgaW4gYSB0cmFkaXRpb25hbCBKYXBhbmVzZSB0ZW1wdXJhIGJhdHRlci4gU2VydmVkIHdpdGggc295LWxpbWUgZ2luZ2VyIGRyZXNzaW5nLlwiLFxyXG4gICAgICBcIiQxMi4wMFwiLFxyXG4gICAgICBtZW51UGljcy5waWMyXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIkNhcmliYmVhbiBKZXJrLVNwaWNlZCBTZWl0YW5cIixcclxuICAgICAgXCJHcmlsbGVkIHNlaXRhbiBza2V3ZXJzIG1hcmluYXRlZCBpbiBhIHNwaWNlZCBsaW1lIGNpdHJ1cyBkcmVzc2luZy5cIixcclxuICAgICAgXCIkMTAuMDBcIixcclxuICAgICAgbWVudVBpY3MucGljM1xyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgXCJDb2xsYXJkIEdyZWVuIFJvbGxzXCIsXHJcbiAgICAgIFwiVGhyZWUgZnJpZWQgcm9sbHMgc3R1ZmZlZCB3aXRoIHNhdXTDqWVkIGNvbGxhcmQgZ3JlZW5zIGFuZCBzb3kgaGFtLiBTZXJ2ZWQgd2l0aCBzd2VldCBjaGlsaSBkaXBwaW5nIHNhdWNlLlwiLFxyXG4gICAgICBcIiQxMS4wMFwiLFxyXG4gICAgICBtZW51UGljcy5waWM0XHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIkFsbW9uZCBDb2NvbnV0IENoaWNrZW5cIixcclxuICAgICAgXCJDcmlzcHkgc295IGNoaWNrZW4gc3RyaXBzIGJyZWFkZWQgd2l0aCB0b2FzdGVkIGFsbW9uZHMgYW5kIHNoYXZlZCBjb2NvbnV0LiBTZXJ2ZWQgd2l0aCBzd2VldCBjaGlsaSBkaXBwaW5nIHNhdWNlLlwiLFxyXG4gICAgICBcIiQxNC4wMFwiLFxyXG4gICAgICBtZW51UGljcy5waWM1XHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIkNoaWNrZW4gU2F0YXlcIixcclxuICAgICAgXCJTa2V3ZXJlZCBzb3kgY2hpY2tlbiBjaGFyYnJvaWxlZCBhbmQgbWFyaW5hdGVkIGluIGNvY29udXQgY3Vycnkgc2Vhc29uaW5nLiBTZXJ2ZWQgd2l0aCBwZWFudXQgY2hpbGkgZHJlc3NpbmcuXCIsXHJcbiAgICAgIFwiJDEyLjAwXCIsXHJcbiAgICAgIG1lbnVQaWNzLnBpYzZcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiQmFtYm9vIE51Z2dldHNcIixcclxuICAgICAgXCJHYXJsaWMgc295IGNoaWNrZW4gbnVnZ2V0cyBmcmllZCBhbmQgc2VydmVkIHdpdGggdmlkYWxpYSBvbmlvbiBzYXVjZS5cIixcclxuICAgICAgXCIkMTIuMDBcIixcclxuICAgICAgbWVudVBpY3MucGljN1xyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgXCJQb3Bjb3JuIENoaWNrZW5cIixcclxuICAgICAgXCJGcmllZCBzb3kgY2hpY2tlbiBudWdnZXRzIHNlcnZlZCB3aXRoIG91ciBob21lbWFkZSBCQlEgc2F1Y2UuXCIsXHJcbiAgICAgIFwiJDExLjAwXCIsXHJcbiAgICAgIG1lbnVQaWNzLnBpYzhcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiU3ByaW5nIFJvbGxzXCIsXHJcbiAgICAgIFwiVHdvIGZyaWVkIHZlZ2FuIHJvbGxzIGZpbGxlZCB3aXRoIGNhYmJhZ2UsIGNhcnJvdHMgYW5kIG11c2hyb29tLiBTZXJ2ZWQgd2l0aCB2ZWdhbiBkdWNrIHNhdWNlLlwiLFxyXG4gICAgICBcIiQ3LjAwXCIsXHJcbiAgICAgIG1lbnVQaWNzLnBpYzlcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiRHJhZ29uZmx5IER1bXBsaW5nc1wiLFxyXG4gICAgICBcIlRocmVlIGZyaWVkIHJpY2UgZHVtcGxpbmdzIGZpbGxlZCB3aXRoIHNocmVkZGVkIHNveSBwcm90ZWluLCBjYXJyb3RzIGFuZCBjYWJiYWdlLiBTZXJ2ZWQgb3ZlciBtaXhlZCBncmVlbnMgYW5kIHNveS1saW1lIGdpbmdlciBkcmVzc2luZy5cIixcclxuICAgICAgXCIkMTIuMDBcIixcclxuICAgICAgbWVudVBpY3MucGljMTBcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiUm90aSBDYW5haVwiLFxyXG4gICAgICBcIkluZGlhbiBjcmVwZSBzZXJ2ZWQgd2l0aCBhIHNveSBjaGlja2VuIGFuZCBwb3RhdG8gY29jb251dCBjdXJyeSBkaXBwaW5nIHNhdWNlLlwiLFxyXG4gICAgICBcIiQ5LjAwXCIsXHJcbiAgICAgIG1lbnVQaWNzLnBpYzExXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIlBvcGNvcm4gU2hyaW1wXCIsXHJcbiAgICAgIFwiRnJpZWQgYml0ZS1zaXplZCBzb3kgc2hyaW1wLiBTZXJ2ZWQgd2l0aCBTcmlyYWNoYSBtYXlvLlwiLFxyXG4gICAgICBcIiQxMS4wMFwiLFxyXG4gICAgICBtZW51UGljcy5waWMxMlxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBtZW51O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltZykge1xyXG4gIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG5cclxuICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoXCJpbmZvLWRpdlwiKTtcclxuXHJcbiAgY29uc3QgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbWdEaXYuY2xhc3NMaXN0LmFkZChcImltZy1kaXZcIik7XHJcblxyXG4gIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIG5hbWVFbC5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICBuYW1lRWwudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICBjb25zdCBkZXNjRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBkZXNjRWwuY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XHJcbiAgZGVzY0VsLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0IHByaWNlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwcmljZUVsLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcclxuICBwcmljZUVsLnRleHRDb250ZW50ID0gcHJpY2U7XHJcblxyXG4gIGNvbnN0IGltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbWdFbC5zcmMgPSBpbWc7XHJcbiAgaW1nRWwuYWx0ID0gYCR7bmFtZX0gcGljYDtcclxuXHJcbiAgaW5mb0Rpdi5hcHBlbmQobmFtZUVsLCBkZXNjRWwsIHByaWNlRWwpO1xyXG4gIGltZ0Rpdi5hcHBlbmRDaGlsZChpbWdFbCk7XHJcblxyXG4gIG1lbnVJdGVtLmFwcGVuZChpbmZvRGl2LCBpbWdEaXYpO1xyXG5cclxuICByZXR1cm4gbWVudUl0ZW07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1lbnU7XHJcbiIsImNvbnN0IG1lbnVQaWNzID0ge1xyXG4gIHBpYzE6IHJlcXVpcmUoXCIuL21lbnUtaXRlbTEuanBlZ1wiKSxcclxuICBwaWMyOiByZXF1aXJlKFwiLi9tZW51LWl0ZW0yLmpwZWdcIiksXHJcbiAgcGljMzogcmVxdWlyZShcIi4vbWVudS1pdGVtMy5qcGVnXCIpLFxyXG4gIHBpYzQ6IHJlcXVpcmUoXCIuL21lbnUtaXRlbTQuanBlZ1wiKSxcclxuICBwaWM1OiByZXF1aXJlKFwiLi9tZW51LWl0ZW01LmpwZWdcIiksXHJcbiAgcGljNjogcmVxdWlyZShcIi4vbWVudS1pdGVtNi5qcGVnXCIpLFxyXG4gIHBpYzc6IHJlcXVpcmUoXCIuL21lbnUtaXRlbTcuanBlZ1wiKSxcclxuICBwaWM4OiByZXF1aXJlKFwiLi9tZW51LWl0ZW04LmpwZWdcIiksXHJcbiAgcGljOTogcmVxdWlyZShcIi4vbWVudS1pdGVtOS5qcGVnXCIpLFxyXG4gIHBpYzEwOiByZXF1aXJlKFwiLi9tZW51LWl0ZW0xMC5qcGVnXCIpLFxyXG4gIHBpYzExOiByZXF1aXJlKFwiLi9tZW51LWl0ZW0xMS5qcGVnXCIpLFxyXG4gIHBpYzEyOiByZXF1aXJlKFwiLi9tZW51LWl0ZW0xMi5qcGVnXCIpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudVBpY3M7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgaW5pdFdlYnNpdGUgZnJvbSBcIi4vY29tcG9uZW50cy9pbml0V2Vic2l0ZS5qc1wiO1xyXG5cclxuaW5pdFdlYnNpdGUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9