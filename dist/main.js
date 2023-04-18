/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Righteous&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --bg-black: #0c0e1a;\r\n    --blue-ac: #2c249c;\r\n    --copper-ac: #cb7469;\r\n    --font-family: \"Roboto\", sans-serf;\r\n    --normal-font: 400;\r\n    --bold-font: 700;\r\n    --bolder-font: 900;\r\n    --bg-color: #fcfcfc;\r\n    --primary-color: #4756df;\r\n    --secondary-color: #ff7235;\r\n    --primary-shadow: #8b8eaf;\r\n    --secondary-shadow: #a17a69;\r\n    --bottom-margin: 0.5rem;\r\n    --bottom-margin-2: 1rem;\r\n    --line-height: 1.7rem;\r\n    --transition: 0.3s;\r\n  }\r\n\r\n  .shape{\r\n    position:absolute;\r\n    top:40px;\r\n    left:-650px;\r\n    width:800px;\r\n    height:800px;\r\n    background-color:rgb(203, 116, 105, .5);\r\n    border-radius:190px 50% 90px 50%;\r\n    animation-name: rotate;\r\n    animation-duration: 15000ms;\r\n    animation-iteration-count: infinite;\r\n    animation-timing-function: linear;\r\n  }\r\n  @keyframes rotate{\r\n    0%{transform:rotate(0deg)}\r\n    50%{transform:rotate(180deg)}\r\n    100%{transform:rotate(360deg)}\r\n  }\r\n  .second{\r\n    left:-700px;\r\n    animation-duration: 18000ms;\r\n    background-color:rgb(203, 116, 105, .5);\r\n    background-color:rgb(44, 36, 156, .5);\r\n  }\r\n  \r\n  .third{\r\n    left:calc(100vw - 150px);\r\n    animation-duration: 15000ms;\r\n    background-color:rgb(203, 116, 105, .5);\r\n  \r\n  }\r\n  .fourth{\r\n    left:calc(100vw - 100px);\r\n    animation-duration: 18000ms;\r\n    background-color:rgb(203, 116, 105, .5);\r\n    background-color:rgb(44, 36, 156, .5);\r\n  \r\n  }\r\n\r\n.hero{\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: var(--bg-black);\r\n  padding-top: 1px;\r\n}\r\n\r\n.text-container{\r\n  text-align:center;\r\n  height: 90%;\r\n  width: 90%;\r\n  margin:  5vh auto;\r\n  padding-top: 10%;\r\n  background-color: whitesmoke;\r\n  padding: 1px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1;\r\n  position: relative;\r\n}\r\n.text{\r\n  color:whitesmoke;\r\n  font-family: 'Righteous', cursive;\r\n  font-size: calc(32px + 4vw);\r\n  animation-name: float;\r\n  -webkit-transition: text-shadow 1s linear;\r\n  -moz-transition: text-shadow 1s linear;\r\n  -ms-transition: text-shadow 1s linear;\r\n  -o-transition: text-shadow 1s linear;\r\n  transition: text-shadow 1s linear;\r\n}\r\n\r\n\r\n.floating{\r\n  text-shadow: 2px 4px 4px black;\r\n}\r\n\r\n.project-header{\r\n  padding-top: calc(20px + 2vw);\r\n  background-color: var(--bg-black);\r\n  font-size: calc(32px + 1vw);\r\n  text-align: center;\r\n  width: 100vw;\r\n  font-family: 'Ubuntu', sans-serif;\r\n  color:var(--bg-color);\r\n  \r\n}\r\n\r\n.project{\r\n  width:100vw;\r\n  height:100vh;\r\n  background-color:whitesmoke;\r\n  display:flex;\r\n  z-index: 1;\r\n  position: relative;\r\n  padding: 10px 0;\r\n}\r\n\r\n.dark{\r\n  background-color: var(--bg-black);\r\n  color: white;\r\n}\r\n\r\n.dark .project-img .img-container img{\r\n  box-shadow: 15px 10px 4px rgb(220, 127, 115, .5)\r\n}\r\n\r\n\r\n.project-img{\r\n  flex: 1 1 0%;\r\n  display: flex;\r\n  justify-content:center;\r\n  align-items:center;\r\n}\r\n.img-container{\r\n  width:80%;\r\n  height:auto;\r\n  \r\n}\r\n\r\n.img-container img{\r\n  width:100%;\r\n  box-shadow: -15px 10px 4px rgb(44, 36, 156, .5)\r\n}\r\n\r\n.details{\r\n  flex: 1 1 0%;\r\n  gap:4.5vh;\r\n  display: flex;\r\n  flex-direction:column;\r\n  align-items:center;\r\n  justify-content:center;\r\n}\r\n\r\n.desc{\r\n  width: 90%;\r\n  font-size: calc(12px + .6vw);\r\n  line-height: calc(16px + 1vw);\r\n  box-shadow: 0px 6px 6px gray;\r\n  padding: .9vw;\r\n  font-style: italic;\r\n}\r\n\r\n.project-title{\r\n  font-size: calc(16px + 2vw);\r\n}\r\n\r\n.icon-container{\r\n  display: flex;\r\n  gap: 2vw;\r\n}\r\n.icon{\r\n  width:50px;\r\n}\r\n.icon img{\r\n  width:100%\r\n}\r\n\r\n.tools{\r\n  font-size: calc(16px + .5vw);\r\n}\r\n.tool-container{\r\n  display: flex;\r\n  gap: 2vw;\r\n}\r\n\r\n.contact {\r\n  display: inline-block;\r\n  width: 100vw;\r\n  padding-top: 2rem;\r\n  background-color: white;\r\n  height: 85vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.contact h2 {\r\ntext-align: center;\r\nmargin-bottom: var(--bottom-margin-2);\r\nfont-size: calc(16px + 2vw);\r\n}\r\n\r\n.contact-form-container {\r\n  max-width: 40.75rem;\r\n  margin: 0 auto;\r\n  padding: 0.938rem;\r\n  border-radius: 5px;\r\n  box-shadow: 0 3px 10px var(--secondary-shadow);\r\n  background-color: var(--bg-black);\r\n  color: white;\r\n}\r\n.form-control {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n\r\n}\r\n\r\n.input-field {\r\n  height: 30px;\r\n}\r\n\r\n#message {\r\n  height: 150px;\r\n}\r\n\r\n\r\n.submit-btn:hover {\r\nbackground-color: var(--primary-color);\r\nborder: 2px solid var(--primary-color);\r\ncursor: pointer;\r\n}\r\n\r\nfooter{\r\n  background-color: var(--bg-black);\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 15vh;\r\n  gap:15px;\r\n  padding: 10px 0;\r\n  \r\n}\r\n\r\nfooter p {\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width: 480px) {\r\n  .text-container{\r\n    height: 100%;\r\n    width: 100%;\r\n    margin:  auto;\r\n    padding-top: 0;\r\n  }\r\n  .shape{\r\n    display: none;\r\n  }\r\n  .project{\r\n    height: 85vh;\r\n  }\r\n  .dark{\r\n    flex-direction: column-reverse;\r\n  }\r\n  .details{\r\n    flex: 2 1 0%;\r\n  }\r\n  .img-container{\r\n    width: 90%;\r\n  }\r\n  .contact-form-container {\r\n    width: 20rem;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n  .project{\r\n    flex-direction: column;\r\n  }\r\n  .dark{\r\n    flex-direction: column-reverse;\r\n  }\r\n  .details{\r\n    flex: 1 1 0%;\r\n  }\r\n  .desc{\r\n    font-size: calc(12px + 1.6vw);\r\n    line-height: calc(16px + 1.6vw);\r\n  }\r\n  .img-container{\r\n    width: 80%;\r\n  }\r\n  .img-container img{\r\n    box-shadow: -10px 5px 4px rgb(44, 36, 156, .5)\r\n  }\r\n  .dark .project-img .img-container img{\r\n    box-shadow: -10px 5px 4px rgb(220, 127, 115, .5)\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');\r\n\r\n\r\n:root {\r\n    --bg-black: #0c0e1a;\r\n    --blue-ac: #2c249c;\r\n    --copper-ac: #cb7469;\r\n    --font-family: \"Roboto\", sans-serf;\r\n    --normal-font: 400;\r\n    --bold-font: 700;\r\n    --bolder-font: 900;\r\n    --bg-color: #fcfcfc;\r\n    --primary-color: #4756df;\r\n    --secondary-color: #ff7235;\r\n    --primary-shadow: #8b8eaf;\r\n    --secondary-shadow: #a17a69;\r\n    --bottom-margin: 0.5rem;\r\n    --bottom-margin-2: 1rem;\r\n    --line-height: 1.7rem;\r\n    --transition: 0.3s;\r\n  }\r\n\r\n  .shape{\r\n    position:absolute;\r\n    top:40px;\r\n    left:-650px;\r\n    width:800px;\r\n    height:800px;\r\n    background-color:rgb(203, 116, 105, .5);\r\n    border-radius:190px 50% 90px 50%;\r\n    animation-name: rotate;\r\n    animation-duration: 15000ms;\r\n    animation-iteration-count: infinite;\r\n    animation-timing-function: linear;\r\n  }\r\n  @keyframes rotate{\r\n    0%{transform:rotate(0deg)}\r\n    50%{transform:rotate(180deg)}\r\n    100%{transform:rotate(360deg)}\r\n  }\r\n  .second{\r\n    left:-700px;\r\n    animation-duration: 18000ms;\r\n    background-color:rgb(203, 116, 105, .5);\r\n    background-color:rgb(44, 36, 156, .5);\r\n  }\r\n  \r\n  .third{\r\n    left:calc(100vw - 150px);\r\n    animation-duration: 15000ms;\r\n    background-color:rgb(203, 116, 105, .5);\r\n  \r\n  }\r\n  .fourth{\r\n    left:calc(100vw - 100px);\r\n    animation-duration: 18000ms;\r\n    background-color:rgb(203, 116, 105, .5);\r\n    background-color:rgb(44, 36, 156, .5);\r\n  \r\n  }\r\n\r\n.hero{\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: var(--bg-black);\r\n  padding-top: 1px;\r\n}\r\n\r\n.text-container{\r\n  text-align:center;\r\n  height: 90%;\r\n  width: 90%;\r\n  margin:  5vh auto;\r\n  padding-top: 10%;\r\n  background-color: whitesmoke;\r\n  padding: 1px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1;\r\n  position: relative;\r\n}\r\n.text{\r\n  color:whitesmoke;\r\n  font-family: 'Righteous', cursive;\r\n  font-size: calc(32px + 4vw);\r\n  animation-name: float;\r\n  -webkit-transition: text-shadow 1s linear;\r\n  -moz-transition: text-shadow 1s linear;\r\n  -ms-transition: text-shadow 1s linear;\r\n  -o-transition: text-shadow 1s linear;\r\n  transition: text-shadow 1s linear;\r\n}\r\n\r\n\r\n.floating{\r\n  text-shadow: 2px 4px 4px black;\r\n}\r\n\r\n.project-header{\r\n  padding-top: calc(20px + 2vw);\r\n  background-color: var(--bg-black);\r\n  font-size: calc(32px + 1vw);\r\n  text-align: center;\r\n  width: 100vw;\r\n  font-family: 'Ubuntu', sans-serif;\r\n  color:var(--bg-color);\r\n  \r\n}\r\n\r\n.project{\r\n  width:100vw;\r\n  height:100vh;\r\n  background-color:whitesmoke;\r\n  display:flex;\r\n  z-index: 1;\r\n  position: relative;\r\n  padding: 10px 0;\r\n}\r\n\r\n.dark{\r\n  background-color: var(--bg-black);\r\n  color: white;\r\n}\r\n\r\n.dark .project-img .img-container img{\r\n  box-shadow: 15px 10px 4px rgb(220, 127, 115, .5)\r\n}\r\n\r\n\r\n.project-img{\r\n  flex: 1 1 0%;\r\n  display: flex;\r\n  justify-content:center;\r\n  align-items:center;\r\n}\r\n.img-container{\r\n  width:80%;\r\n  height:auto;\r\n  \r\n}\r\n\r\n.img-container img{\r\n  width:100%;\r\n  box-shadow: -15px 10px 4px rgb(44, 36, 156, .5)\r\n}\r\n\r\n.details{\r\n  flex: 1 1 0%;\r\n  gap:4.5vh;\r\n  display: flex;\r\n  flex-direction:column;\r\n  align-items:center;\r\n  justify-content:center;\r\n}\r\n\r\n.desc{\r\n  width: 90%;\r\n  font-size: calc(12px + .6vw);\r\n  line-height: calc(16px + 1vw);\r\n  box-shadow: 0px 6px 6px gray;\r\n  padding: .9vw;\r\n  font-style: italic;\r\n}\r\n\r\n.project-title{\r\n  font-size: calc(16px + 2vw);\r\n}\r\n\r\n.icon-container{\r\n  display: flex;\r\n  gap: 2vw;\r\n}\r\n.icon{\r\n  width:50px;\r\n}\r\n.icon img{\r\n  width:100%\r\n}\r\n\r\n.tools{\r\n  font-size: calc(16px + .5vw);\r\n}\r\n.tool-container{\r\n  display: flex;\r\n  gap: 2vw;\r\n}\r\n\r\n.contact {\r\n  display: inline-block;\r\n  width: 100vw;\r\n  padding-top: 2rem;\r\n  background-color: white;\r\n  height: 85vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.contact h2 {\r\ntext-align: center;\r\nmargin-bottom: var(--bottom-margin-2);\r\nfont-size: calc(16px + 2vw);\r\n}\r\n\r\n.contact-form-container {\r\n  max-width: 40.75rem;\r\n  margin: 0 auto;\r\n  padding: 0.938rem;\r\n  border-radius: 5px;\r\n  box-shadow: 0 3px 10px var(--secondary-shadow);\r\n  background-color: var(--bg-black);\r\n  color: white;\r\n}\r\n.form-control {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n\r\n}\r\n\r\n.input-field {\r\n  height: 30px;\r\n}\r\n\r\n#message {\r\n  height: 150px;\r\n}\r\n\r\n\r\n.submit-btn:hover {\r\nbackground-color: var(--primary-color);\r\nborder: 2px solid var(--primary-color);\r\ncursor: pointer;\r\n}\r\n\r\nfooter{\r\n  background-color: var(--bg-black);\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 15vh;\r\n  gap:15px;\r\n  padding: 10px 0;\r\n  \r\n}\r\n\r\nfooter p {\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width: 480px) {\r\n  .text-container{\r\n    height: 100%;\r\n    width: 100%;\r\n    margin:  auto;\r\n    padding-top: 0;\r\n  }\r\n  .shape{\r\n    display: none;\r\n  }\r\n  .project{\r\n    height: 85vh;\r\n  }\r\n  .dark{\r\n    flex-direction: column-reverse;\r\n  }\r\n  .details{\r\n    flex: 2 1 0%;\r\n  }\r\n  .img-container{\r\n    width: 90%;\r\n  }\r\n  .contact-form-container {\r\n    width: 20rem;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n  .project{\r\n    flex-direction: column;\r\n  }\r\n  .dark{\r\n    flex-direction: column-reverse;\r\n  }\r\n  .details{\r\n    flex: 1 1 0%;\r\n  }\r\n  .desc{\r\n    font-size: calc(12px + 1.6vw);\r\n    line-height: calc(16px + 1.6vw);\r\n  }\r\n  .img-container{\r\n    width: 80%;\r\n  }\r\n  .img-container img{\r\n    box-shadow: -10px 5px 4px rgb(44, 36, 156, .5)\r\n  }\r\n  .dark .project-img .img-container img{\r\n    box-shadow: -10px 5px 4px rgb(220, 127, 115, .5)\r\n  }\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact),
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function contact(){

    const contactForm = document.createElement('div');
    contactForm.classList.add('contact');

    contactForm.innerHTML = `<h2>Get In Touch With Me</h2>
    <div class="contact-form-container">
      <div class="contact-form">
        <form action="https://formspree.io/f/xknkeqzz" method="POST">
          <div class="form-control">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="sender-name"
              placeholder="Enter Your Name"
              class="input-field"
              required
            />
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="sender-email"
              placeholder="Enter Your Email"
              class="input-field"
              required
            />
          </div>
          <div class="form-control">
            <label for="message">Message</label>
            <textarea
              id="message"
              cols="60"
              rows="10"
              placeholder="Enter Your Message"
              name="message"
              class="input-field"
              required
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            id="submit-btn"
            class="submit-btn"
          />
        </form>
      </div>
    </div>`;

    return contactForm;


}

function footer(){
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <div class="icon-container">
  <div class="icon">
  <a href="https://github.com/Tanzeb9277" target='_blank'>
    <img src="https://img.icons8.com/ios-filled/344/ffffff/github.png" alt="Github">
  </a>
    </div>
      <div class="icon">
      <a href="https://www.linkedin.com/in/tanzeb-choudhury-722902140/" target='_blank'>
        <img src="https://img.icons8.com/ios-filled/344/ffffff/linkedin.png" alt="LinkedIn">
      </a>
      </div>
    </div>
  <p>Designed and Developed by Tanzeem Xhidori &copy; Copyright 2022</p>
  `;
   return footer;
}



/***/ }),

/***/ "./src/head.js":
/*!*********************!*\
  !*** ./src/head.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAnimation": () => (/* binding */ addAnimation),
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function header() {
    const element = document.createElement('div');
    element.classList.add('hero');

    element.innerHTML = `
    <div class="shape first"></div>
    <div class="shape second"></div>
    <div class="shape third"></div>
    <div class="shape fourth"></div>
    <div class="text-container">
        <div class="text" id="intro">Hi I'm</div>
        <div class="text" id="fullName">Tanzeb Choudhury</div>
        <div class="text" id="title">Web Developer</div>
    </div>`;

    

    return element;

}

function addAnimation(){
    let intro =  document.getElementById('intro');
    let fullName =  document.getElementById('fullName');
    let title =  document.getElementById('title');
    let floatIntro = setTimeout(function(){
        intro.classList.add('floating');
    }, 1000);
    
    let floatName = setTimeout(function(){
        fullName.classList.add('floating')
    }, 1900);
    let floatTitle = setTimeout(function(){
        title.classList.add('floating')
         
    }, 2800);
}



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aettid": () => (/* binding */ aettid),
/* harmony export */   "blog": () => (/* binding */ blog),
/* harmony export */   "etchaSketch": () => (/* binding */ etchaSketch),
/* harmony export */   "eyeSpy": () => (/* binding */ eyeSpy),
/* harmony export */   "maeditt": () => (/* binding */ maeditt),
/* harmony export */   "projectHeader": () => (/* binding */ projectHeader)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _aettid_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aettid.png */ "./src/aettid.png");
/* harmony import */ var _blog_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.png */ "./src/blog.png");
/* harmony import */ var _etcha_sketch_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./etcha-sketch.png */ "./src/etcha-sketch.png");
/* harmony import */ var _eyespy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eyespy.png */ "./src/eyespy.png");
/* harmony import */ var _maeditt_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maeditt.png */ "./src/maeditt.png");







function projectHeader(){
  const header = document.createElement('div');
  header.classList.add('project-header');

  header.innerHTML = `<h1>Projects</h1>`;

  return header;
}

function etchaSketch(){
  const eyeSpy = document.createElement('div');
  eyeSpy.classList.add('project', 'dark');

  eyeSpy.innerHTML=`  
  <div class="details">
  <h1 class='project-title'>Etch-a-sketch</h1>
  <div class="icon-container">
  <div class="icon">
  <a href="https://github.com/Tanzeb9277/etch-a-sketch" target='_blank'>
    <img src="https://img.icons8.com/ios-filled/344/ffffff/github.png" alt="Github">
  </a>
    </div>
      <div class="icon">
      <a href="https://tanzeb9277.github.io/etch-a-sketch/"  target='_blank'>
        <img src="https://img.icons8.com/ios/344/ffffff/domain.png" alt="Website">
      </a>
      </div>
    </div>
      <p class="desc">Description:A browser version of something between a sketchpad and an Etch-A-Sketch.</p>
      <p class="tools">Tools Used:</p>
      <div class="tool-container">
      <div class="icon">
        <img src="https://img.icons8.com/color/344/html-5--v1.png" alt="HTML"> 
    </div>
    <div class="icon">
        <img src="https://img.icons8.com/color/344/css3.png" alt="CSS">
    </div>
    <div class="icon">
        <img src="https://img.icons8.com/color/344/javascript--v1.png" alt="JavaScript">
    </div>
    </div>
  </div>
  <div class="project-img">
    <div class="img-container">
      <img src="${_etcha_sketch_png__WEBPACK_IMPORTED_MODULE_3__}" alt="">
    </div>
  </div>
`

return eyeSpy;
}



function eyeSpy(){
    const eyeSpy = document.createElement('div');
    eyeSpy.classList.add('project');

    eyeSpy.innerHTML=`  <div class="project-img">
    <div class="img-container">
      <img src="${_eyespy_png__WEBPACK_IMPORTED_MODULE_4__}" alt="">
    </div>
  </div>
  <div class="details">
    <h1 class='project-title'>Eye Spy</h1>
    <div class="icon-container">
    <div class="icon">
    <a href="https://github.com/Tanzeb9277/eye-spy" target='_blank'>
      <img src="https://img.icons8.com/ios-filled/344/github.png" alt="Github">
    </a>
  </div>
  <div class="icon">
    <a href="https://tanzeb9277.github.io/eye-spy/" target='_blank'>
      <img src="https://img.icons8.com/ios/344/domain.png" alt="Website">
    </a>
  </div>
    </div>
    <p class="desc">Description: Photo tagging game featuring the final image from <a href="https://www.reddit.com/r/place/comments/twft1q/full_screenshot_of_rplace_2022/">r/Place</a></p>
    <p class="tools">Tools Used:</p>
    <div class="tool-container">
  <div class="icon">
      <img src="https://img.icons8.com/color/344/css3.png" alt="CSS">
  </div>
  <div class="icon">
      <img src="https://img.icons8.com/color/344/javascript--v1.png" alt="JavaScript">
  </div>
  <div class="icon">
      <img src="https://img.icons8.com/color/344/webpack.png" alt="Webpack">
  </div>
  <div class="icon">
      <img src="https://img.icons8.com/color/344/google-firebase-console.png" alt="Firebase">
  </div>
  </div>`

  return eyeSpy;
}

function aettid(){
  const eyeSpy = document.createElement('div');
  eyeSpy.classList.add('project', 'dark');

  eyeSpy.innerHTML=`  
  <div class="details">
  <h1 class='project-title'>Aettid</h1>
  <div class="icon-container">
  <div class="icon">
  <a href="https://github.com/Tanzeb9277/aettid-website" target='_blank'>
    <img src="https://img.icons8.com/ios-filled/344/ffffff/github.png" alt="Github">
  </a>
    </div>
      <div class="icon">
      <a href="https://tanzeb9277.github.io/aettid-website/" target='_blank'>
        <img src="https://img.icons8.com/ios/344/ffffff/domain.png" alt="Website">
      </a>
      </div>
    </div>
      <p class="desc">Description: Social Media site for photos of food, dishes, and recipes</p>
      <p class="tools">Tools Used:</p>
      <div class="tool-container">
    <div class="icon">
        <img src="https://img.icons8.com/color/344/css3.png" alt="CSS">
    </div>
    <div class="icon">
        <img src="https://img.icons8.com/color/344/javascript--v1.png" alt="JavaScript">
    </div>
    <div class="icon">
        <img src="https://img.icons8.com/office/344/react.png" alt="React">
    </div>
    <div class="icon">
        <img src="https://img.icons8.com/color/344/google-firebase-console.png" alt="Firebase">
    </div>
    </div>
  </div>
  <div class="project-img">
    <div class="img-container">
      <img src="${_aettid_png__WEBPACK_IMPORTED_MODULE_1__}" alt="">
    </div>
  </div>
`

return eyeSpy;
}


function blog(){
  const eyeSpy = document.createElement('div');
  eyeSpy.classList.add('project');

  eyeSpy.innerHTML=`  <div class="project-img">
  <div class="img-container">
    <img src="${_blog_png__WEBPACK_IMPORTED_MODULE_2__}" alt="">
  </div>
</div>
<div class="details">
  <h1 class='project-title'>Blog App</h1>
  <div class="icon-container">
  <div class="icon">
  <a href="https://github.com/Tanzeb9277/blog-app" target='_blank'>
    <img src="https://img.icons8.com/ios-filled/344/github.png" alt="Github">
  </a>
</div>
<div class="icon">
  <a href="https://tanzeb9277.github.io/blog-app/" target='_blank'>
    <img src="https://img.icons8.com/ios/344/domain.png" alt="Website">
  </a>
</div>
  </div>
  <p class="desc">Description: The Blog app is a visual representation of the blog api working as intended, allowing users to view and comment on published posts.</p>
  <p class="tools">Tools Used:</p>
  <div class="tool-container">
<div class="icon">
    <img src="https://img.icons8.com/color/344/css3.png" alt="CSS">
</div>
<div class="icon">
    <img src="https://img.icons8.com/color/344/javascript--v1.png" alt="JavaScript">
</div>
<div class="icon">
        <img src="https://img.icons8.com/office/344/react.png" alt="React">
</div>
<div class="icon">
    <img src="https://img.icons8.com/color/256/django.png" alt="Node">
</div>
<div class="icon">
    <img src="https://img.icons8.com/color/256/postgreesql.png" alt="Mongo">
</div>
</div>`

return eyeSpy;
}
function maeditt(){
  const eyeSpy = document.createElement('div');
  eyeSpy.classList.add('project', 'dark');

  eyeSpy.innerHTML=`  
  <div class="details">
  <h1 class='project-title'>Maeditt</h1>
  <div class="icon-container">
  <div class="icon">
  <a href="https://github.com/Tanzeb9277/maeditt-app" target='_blank'>
    <img src="https://img.icons8.com/ios-filled/344/ffffff/github.png" alt="Github">
  </a>
    </div>
      <div class="icon">
      <a href="https://tanzeb9277.github.io/maeditt-app/" target='_blank'>
        <img src="https://img.icons8.com/ios/344/ffffff/domain.png" alt="Website">
      </a>
      </div>
    </div>
      <p class="desc">Description: Social Media site that allows users to sign up, sign in, submit posts, like posts, comment on posts, and add friends</p>
      <p class="tools">Tools Used:</p>
      <div class="tool-container">
      <div class="icon">
      <img src="https://img.icons8.com/color/344/css3.png" alt="CSS">
  </div>
  <div class="icon">
      <img src="https://img.icons8.com/color/344/javascript--v1.png" alt="JavaScript">
  </div>
  <div class="icon">
          <img src="https://img.icons8.com/office/344/react.png" alt="React">
  </div>
  <div class="icon">
      <img src="https://img.icons8.com/color/344/nodejs.png" alt="Node">
  </div>
  <div class="icon">
      <img src="https://img.icons8.com/color/344/mongodb.png" alt="Mongo">
  </div>
    </div>
  </div>
  <div class="project-img">
    <div class="img-container">
      <img src="${_maeditt_png__WEBPACK_IMPORTED_MODULE_5__}" alt="">
    </div>
  </div>
`

return eyeSpy;
}



/***/ }),

/***/ "./src/aettid.png":
/*!************************!*\
  !*** ./src/aettid.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93bf062f3e77d8d11f54.png";

/***/ }),

/***/ "./src/blog.png":
/*!**********************!*\
  !*** ./src/blog.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b85ac4bcf442b3db9bfc.png";

/***/ }),

/***/ "./src/etcha-sketch.png":
/*!******************************!*\
  !*** ./src/etcha-sketch.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4208002e5075b9448f3.png";

/***/ }),

/***/ "./src/eyespy.png":
/*!************************!*\
  !*** ./src/eyespy.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1eba98bb896ebd8f07c.png";

/***/ }),

/***/ "./src/maeditt.png":
/*!*************************!*\
  !*** ./src/maeditt.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6685c6444fc6f0dcf590.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head */ "./src/head.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





  document.getElementById('root').append((0,_head__WEBPACK_IMPORTED_MODULE_0__.header)(), (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectHeader)(), (0,_projects__WEBPACK_IMPORTED_MODULE_1__.etchaSketch)(), (0,_projects__WEBPACK_IMPORTED_MODULE_1__.eyeSpy)(), (0,_projects__WEBPACK_IMPORTED_MODULE_1__.aettid)(), (0,_projects__WEBPACK_IMPORTED_MODULE_1__.blog)(), (0,_projects__WEBPACK_IMPORTED_MODULE_1__.maeditt)(), (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)(), (0,_contact__WEBPACK_IMPORTED_MODULE_2__.footer)());

  window.addEventListener('DOMContentLoaded', (_event) => {
    (0,_head__WEBPACK_IMPORTED_MODULE_0__.addAnimation)();
  });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SDtBQUN2SCw2SEFBNkg7QUFDN0g7QUFDQSxpREFBaUQsNEJBQTRCLDJCQUEyQiw2QkFBNkIsNkNBQTZDLDJCQUEyQix5QkFBeUIsMkJBQTJCLDRCQUE0QixpQ0FBaUMsbUNBQW1DLGtDQUFrQyxvQ0FBb0MsZ0NBQWdDLGdDQUFnQyw4QkFBOEIsMkJBQTJCLE9BQU8saUJBQWlCLDBCQUEwQixpQkFBaUIsb0JBQW9CLG9CQUFvQixxQkFBcUIsZ0RBQWdELHlDQUF5QywrQkFBK0Isb0NBQW9DLDRDQUE0QywwQ0FBMEMsT0FBTyx3QkFBd0IsV0FBVyx1QkFBdUIsWUFBWSx5QkFBeUIsYUFBYSx5QkFBeUIsT0FBTyxjQUFjLG9CQUFvQixvQ0FBb0MsZ0RBQWdELDhDQUE4QyxPQUFPLG1CQUFtQixpQ0FBaUMsb0NBQW9DLGdEQUFnRCxhQUFhLGNBQWMsaUNBQWlDLG9DQUFvQyxnREFBZ0QsOENBQThDLGFBQWEsY0FBYyxtQkFBbUIsb0JBQW9CLHdDQUF3Qyx1QkFBdUIsS0FBSyx3QkFBd0Isd0JBQXdCLGtCQUFrQixpQkFBaUIsd0JBQXdCLHVCQUF1QixtQ0FBbUMscUJBQXFCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixpQkFBaUIseUJBQXlCLEtBQUssVUFBVSx1QkFBdUIsd0NBQXdDLGtDQUFrQyw0QkFBNEIsZ0RBQWdELDZDQUE2Qyw0Q0FBNEMsMkNBQTJDLHdDQUF3QyxLQUFLLHNCQUFzQixxQ0FBcUMsS0FBSyx3QkFBd0Isb0NBQW9DLHdDQUF3QyxrQ0FBa0MseUJBQXlCLG1CQUFtQix3Q0FBd0MsNEJBQTRCLFdBQVcsaUJBQWlCLGtCQUFrQixtQkFBbUIsa0NBQWtDLG1CQUFtQixpQkFBaUIseUJBQXlCLHNCQUFzQixLQUFLLGNBQWMsd0NBQXdDLG1CQUFtQixLQUFLLDhDQUE4QywyREFBMkQseUJBQXlCLG1CQUFtQixvQkFBb0IsNkJBQTZCLHlCQUF5QixLQUFLLG1CQUFtQixnQkFBZ0Isa0JBQWtCLFdBQVcsMkJBQTJCLGlCQUFpQiwwREFBMEQsaUJBQWlCLG1CQUFtQixnQkFBZ0Isb0JBQW9CLDRCQUE0Qix5QkFBeUIsNkJBQTZCLEtBQUssY0FBYyxpQkFBaUIsbUNBQW1DLG9DQUFvQyxtQ0FBbUMsb0JBQW9CLHlCQUF5QixLQUFLLHVCQUF1QixrQ0FBa0MsS0FBSyx3QkFBd0Isb0JBQW9CLGVBQWUsS0FBSyxVQUFVLGlCQUFpQixLQUFLLGNBQWMscUJBQXFCLGVBQWUsbUNBQW1DLEtBQUssb0JBQW9CLG9CQUFvQixlQUFlLEtBQUssa0JBQWtCLDRCQUE0QixtQkFBbUIsd0JBQXdCLDhCQUE4QixtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsS0FBSyxxQkFBcUIsdUJBQXVCLDBDQUEwQyxnQ0FBZ0MsS0FBSyxpQ0FBaUMsMEJBQTBCLHFCQUFxQix3QkFBd0IseUJBQXlCLHFEQUFxRCx3Q0FBd0MsbUJBQW1CLEtBQUssbUJBQW1CLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLHVCQUF1QixLQUFLLGNBQWMsb0JBQW9CLDZCQUE2QixnQkFBZ0IsU0FBUyxzQkFBc0IsbUJBQW1CLEtBQUssa0JBQWtCLG9CQUFvQixLQUFLLCtCQUErQiwyQ0FBMkMsMkNBQTJDLG9CQUFvQixLQUFLLGVBQWUsd0NBQXdDLG1CQUFtQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsbUJBQW1CLGVBQWUsc0JBQXNCLFdBQVcsa0JBQWtCLG9CQUFvQix5QkFBeUIsS0FBSywrQ0FBK0Msc0JBQXNCLHFCQUFxQixvQkFBb0Isc0JBQXNCLHVCQUF1QixPQUFPLGFBQWEsc0JBQXNCLE9BQU8sZUFBZSxxQkFBcUIsT0FBTyxZQUFZLHVDQUF1QyxPQUFPLGVBQWUscUJBQXFCLE9BQU8scUJBQXFCLG1CQUFtQixPQUFPLCtCQUErQixxQkFBcUIsT0FBTyxLQUFLLGdDQUFnQyxlQUFlLCtCQUErQixPQUFPLFlBQVksdUNBQXVDLE9BQU8sZUFBZSxxQkFBcUIsT0FBTyxZQUFZLHNDQUFzQyx3Q0FBd0MsT0FBTyxxQkFBcUIsbUJBQW1CLE9BQU8seUJBQXlCLDZEQUE2RCw0Q0FBNEMsK0RBQStELEtBQUssT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxpQkFBaUIsa0JBQWtCLGtCQUFrQixNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLHdHQUF3Ryx5RkFBeUYsbUJBQW1CLDRCQUE0QiwyQkFBMkIsNkJBQTZCLDZDQUE2QywyQkFBMkIseUJBQXlCLDJCQUEyQiw0QkFBNEIsaUNBQWlDLG1DQUFtQyxrQ0FBa0Msb0NBQW9DLGdDQUFnQyxnQ0FBZ0MsOEJBQThCLDJCQUEyQixPQUFPLGlCQUFpQiwwQkFBMEIsaUJBQWlCLG9CQUFvQixvQkFBb0IscUJBQXFCLGdEQUFnRCx5Q0FBeUMsK0JBQStCLG9DQUFvQyw0Q0FBNEMsMENBQTBDLE9BQU8sd0JBQXdCLFdBQVcsdUJBQXVCLFlBQVkseUJBQXlCLGFBQWEseUJBQXlCLE9BQU8sY0FBYyxvQkFBb0Isb0NBQW9DLGdEQUFnRCw4Q0FBOEMsT0FBTyxtQkFBbUIsaUNBQWlDLG9DQUFvQyxnREFBZ0QsYUFBYSxjQUFjLGlDQUFpQyxvQ0FBb0MsZ0RBQWdELDhDQUE4QyxhQUFhLGNBQWMsbUJBQW1CLG9CQUFvQix3Q0FBd0MsdUJBQXVCLEtBQUssd0JBQXdCLHdCQUF3QixrQkFBa0IsaUJBQWlCLHdCQUF3Qix1QkFBdUIsbUNBQW1DLHFCQUFxQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsaUJBQWlCLHlCQUF5QixLQUFLLFVBQVUsdUJBQXVCLHdDQUF3QyxrQ0FBa0MsNEJBQTRCLGdEQUFnRCw2Q0FBNkMsNENBQTRDLDJDQUEyQyx3Q0FBd0MsS0FBSyxzQkFBc0IscUNBQXFDLEtBQUssd0JBQXdCLG9DQUFvQyx3Q0FBd0Msa0NBQWtDLHlCQUF5QixtQkFBbUIsd0NBQXdDLDRCQUE0QixXQUFXLGlCQUFpQixrQkFBa0IsbUJBQW1CLGtDQUFrQyxtQkFBbUIsaUJBQWlCLHlCQUF5QixzQkFBc0IsS0FBSyxjQUFjLHdDQUF3QyxtQkFBbUIsS0FBSyw4Q0FBOEMsMkRBQTJELHlCQUF5QixtQkFBbUIsb0JBQW9CLDZCQUE2Qix5QkFBeUIsS0FBSyxtQkFBbUIsZ0JBQWdCLGtCQUFrQixXQUFXLDJCQUEyQixpQkFBaUIsMERBQTBELGlCQUFpQixtQkFBbUIsZ0JBQWdCLG9CQUFvQiw0QkFBNEIseUJBQXlCLDZCQUE2QixLQUFLLGNBQWMsaUJBQWlCLG1DQUFtQyxvQ0FBb0MsbUNBQW1DLG9CQUFvQix5QkFBeUIsS0FBSyx1QkFBdUIsa0NBQWtDLEtBQUssd0JBQXdCLG9CQUFvQixlQUFlLEtBQUssVUFBVSxpQkFBaUIsS0FBSyxjQUFjLHFCQUFxQixlQUFlLG1DQUFtQyxLQUFLLG9CQUFvQixvQkFBb0IsZUFBZSxLQUFLLGtCQUFrQiw0QkFBNEIsbUJBQW1CLHdCQUF3Qiw4QkFBOEIsbUJBQW1CLG9CQUFvQiw2QkFBNkIsOEJBQThCLEtBQUsscUJBQXFCLHVCQUF1QiwwQ0FBMEMsZ0NBQWdDLEtBQUssaUNBQWlDLDBCQUEwQixxQkFBcUIsd0JBQXdCLHlCQUF5QixxREFBcUQsd0NBQXdDLG1CQUFtQixLQUFLLG1CQUFtQixvQkFBb0IsNkJBQTZCLGdCQUFnQix1QkFBdUIsS0FBSyxjQUFjLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLFNBQVMsc0JBQXNCLG1CQUFtQixLQUFLLGtCQUFrQixvQkFBb0IsS0FBSywrQkFBK0IsMkNBQTJDLDJDQUEyQyxvQkFBb0IsS0FBSyxlQUFlLHdDQUF3QyxtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLG1CQUFtQixlQUFlLHNCQUFzQixXQUFXLGtCQUFrQixvQkFBb0IseUJBQXlCLEtBQUssK0NBQStDLHNCQUFzQixxQkFBcUIsb0JBQW9CLHNCQUFzQix1QkFBdUIsT0FBTyxhQUFhLHNCQUFzQixPQUFPLGVBQWUscUJBQXFCLE9BQU8sWUFBWSx1Q0FBdUMsT0FBTyxlQUFlLHFCQUFxQixPQUFPLHFCQUFxQixtQkFBbUIsT0FBTywrQkFBK0IscUJBQXFCLE9BQU8sS0FBSyxnQ0FBZ0MsZUFBZSwrQkFBK0IsT0FBTyxZQUFZLHVDQUF1QyxPQUFPLGVBQWUscUJBQXFCLE9BQU8sWUFBWSxzQ0FBc0Msd0NBQXdDLE9BQU8scUJBQXFCLG1CQUFtQixPQUFPLHlCQUF5Qiw2REFBNkQsNENBQTRDLCtEQUErRCxLQUFLLG1CQUFtQjtBQUNocGU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNUMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9FcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDcUI7QUFD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QUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEM7QUFDMkM7QUFDN0M7QUFDdEI7QUFDcEI7QUFDQSx5Q0FBeUMsNkNBQU0sSUFBSSx3REFBYSxJQUFJLHNEQUFXLElBQUksaURBQU0sSUFBSSxpREFBTSxJQUFJLCtDQUFJLElBQUksa0RBQU8sSUFBSSxpREFBTyxJQUFJLGdEQUFNO0FBQzNJO0FBQ0E7QUFDQSxJQUFJLG1EQUFZO0FBQ2hCLEdBQUcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9zcmMvaGVhZC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmlnaHRlb3VzJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0tYmctYmxhY2s6ICMwYzBlMWE7XFxyXFxuICAgIC0tYmx1ZS1hYzogIzJjMjQ5YztcXHJcXG4gICAgLS1jb3BwZXItYWM6ICNjYjc0Njk7XFxyXFxuICAgIC0tZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmY7XFxyXFxuICAgIC0tbm9ybWFsLWZvbnQ6IDQwMDtcXHJcXG4gICAgLS1ib2xkLWZvbnQ6IDcwMDtcXHJcXG4gICAgLS1ib2xkZXItZm9udDogOTAwO1xcclxcbiAgICAtLWJnLWNvbG9yOiAjZmNmY2ZjO1xcclxcbiAgICAtLXByaW1hcnktY29sb3I6ICM0NzU2ZGY7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZmY3MjM1O1xcclxcbiAgICAtLXByaW1hcnktc2hhZG93OiAjOGI4ZWFmO1xcclxcbiAgICAtLXNlY29uZGFyeS1zaGFkb3c6ICNhMTdhNjk7XFxyXFxuICAgIC0tYm90dG9tLW1hcmdpbjogMC41cmVtO1xcclxcbiAgICAtLWJvdHRvbS1tYXJnaW4tMjogMXJlbTtcXHJcXG4gICAgLS1saW5lLWhlaWdodDogMS43cmVtO1xcclxcbiAgICAtLXRyYW5zaXRpb246IDAuM3M7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2hhcGV7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICB0b3A6NDBweDtcXHJcXG4gICAgbGVmdDotNjUwcHg7XFxyXFxuICAgIHdpZHRoOjgwMHB4O1xcclxcbiAgICBoZWlnaHQ6ODAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMywgMTE2LCAxMDUsIC41KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoxOTBweCA1MCUgOTBweCA1MCU7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGU7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTUwMDBtcztcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgcm90YXRle1xcclxcbiAgICAwJXt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfVxcclxcbiAgICA1MCV7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfVxcclxcbiAgICAxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX1cXHJcXG4gIH1cXHJcXG4gIC5zZWNvbmR7XFxyXFxuICAgIGxlZnQ6LTcwMHB4O1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE4MDAwbXM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMywgMTE2LCAxMDUsIC41KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDQsIDM2LCAxNTYsIC41KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRoaXJke1xcclxcbiAgICBsZWZ0OmNhbGMoMTAwdncgLSAxNTBweCk7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTUwMDBtcztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAzLCAxMTYsIDEwNSwgLjUpO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICAuZm91cnRoe1xcclxcbiAgICBsZWZ0OmNhbGMoMTAwdncgLSAxMDBweCk7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTgwMDBtcztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAzLCAxMTYsIDEwNSwgLjUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0NCwgMzYsIDE1NiwgLjUpO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuXFxyXFxuLmhlcm97XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYmxhY2spO1xcclxcbiAgcGFkZGluZy10b3A6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY29udGFpbmVye1xcclxcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46ICA1dmggYXV0bztcXHJcXG4gIHBhZGRpbmctdG9wOiAxMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgcGFkZGluZzogMXB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi50ZXh0e1xcclxcbiAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygzMnB4ICsgNHZ3KTtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBmbG9hdDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAxcyBsaW5lYXI7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcclxcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZmxvYXRpbmd7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDRweCA0cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlcntcXHJcXG4gIHBhZGRpbmctdG9wOiBjYWxjKDIwcHggKyAydncpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYmxhY2spO1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDMycHggKyAxdncpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6dmFyKC0tYmctY29sb3IpO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0e1xcclxcbiAgd2lkdGg6MTAwdnc7XFxyXFxuICBoZWlnaHQ6MTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFya3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWJsYWNrKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsgLnByb2plY3QtaW1nIC5pbWctY29udGFpbmVyIGltZ3tcXHJcXG4gIGJveC1zaGFkb3c6IDE1cHggMTBweCA0cHggcmdiKDIyMCwgMTI3LCAxMTUsIC41KVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdC1pbWd7XFxyXFxuICBmbGV4OiAxIDEgMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG59XFxyXFxuLmltZy1jb250YWluZXJ7XFxyXFxuICB3aWR0aDo4MCU7XFxyXFxuICBoZWlnaHQ6YXV0bztcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciBpbWd7XFxyXFxuICB3aWR0aDoxMDAlO1xcclxcbiAgYm94LXNoYWRvdzogLTE1cHggMTBweCA0cHggcmdiKDQ0LCAzNiwgMTU2LCAuNSlcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHN7XFxyXFxuICBmbGV4OiAxIDEgMCU7XFxyXFxuICBnYXA6NC41dmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2N7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAuNnZ3KTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDE2cHggKyAxdncpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDZweCA2cHggZ3JheTtcXHJcXG4gIHBhZGRpbmc6IC45dnc7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxle1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAydncpO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1jb250YWluZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAydnc7XFxyXFxufVxcclxcbi5pY29ue1xcclxcbiAgd2lkdGg6NTBweDtcXHJcXG59XFxyXFxuLmljb24gaW1ne1xcclxcbiAgd2lkdGg6MTAwJVxcclxcbn1cXHJcXG5cXHJcXG4udG9vbHN7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIC41dncpO1xcclxcbn1cXHJcXG4udG9vbC1jb250YWluZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAydnc7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDg1dmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBoMiB7XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbm1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4tMik7XFxyXFxuZm9udC1zaXplOiBjYWxjKDE2cHggKyAydncpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDQwLjc1cmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAwLjkzOHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdmFyKC0tc2Vjb25kYXJ5LXNoYWRvdyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ibGFjayk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5mb3JtLWNvbnRyb2wge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZmllbGQge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVzc2FnZSB7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxyXFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ibGFjayk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTV2aDtcXHJcXG4gIGdhcDoxNXB4O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgLnRleHQtY29udGFpbmVye1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46ICBhdXRvO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gIH1cXHJcXG4gIC5zaGFwZXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5wcm9qZWN0e1xcclxcbiAgICBoZWlnaHQ6IDg1dmg7XFxyXFxuICB9XFxyXFxuICAuZGFya3tcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgfVxcclxcbiAgLmRldGFpbHN7XFxyXFxuICAgIGZsZXg6IDIgMSAwJTtcXHJcXG4gIH1cXHJcXG4gIC5pbWctY29udGFpbmVye1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcbiAgLmNvbnRhY3QtZm9ybS1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gIC5wcm9qZWN0e1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbiAgLmRhcmt7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gIH1cXHJcXG4gIC5kZXRhaWxze1xcclxcbiAgICBmbGV4OiAxIDEgMCU7XFxyXFxuICB9XFxyXFxuICAuZGVzY3tcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjZ2dyk7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDE2cHggKyAxLjZ2dyk7XFxyXFxuICB9XFxyXFxuICAuaW1nLWNvbnRhaW5lcntcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG4gIC5pbWctY29udGFpbmVyIGltZ3tcXHJcXG4gICAgYm94LXNoYWRvdzogLTEwcHggNXB4IDRweCByZ2IoNDQsIDM2LCAxNTYsIC41KVxcclxcbiAgfVxcclxcbiAgLmRhcmsgLnByb2plY3QtaW1nIC5pbWctY29udGFpbmVyIGltZ3tcXHJcXG4gICAgYm94LXNoYWRvdzogLTEwcHggNXB4IDRweCByZ2IoMjIwLCAxMjcsIDExNSwgLjUpXFxyXFxuICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxHQUFHLHNCQUFzQjtJQUN6QixJQUFJLHdCQUF3QjtJQUM1QixLQUFLLHdCQUF3QjtFQUMvQjtFQUNBO0lBQ0UsV0FBVztJQUNYLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQix1Q0FBdUM7O0VBRXpDO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLHVDQUF1QztJQUN2QyxxQ0FBcUM7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O0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmlnaHRlb3VzJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tYmctYmxhY2s6ICMwYzBlMWE7XFxyXFxuICAgIC0tYmx1ZS1hYzogIzJjMjQ5YztcXHJcXG4gICAgLS1jb3BwZXItYWM6ICNjYjc0Njk7XFxyXFxuICAgIC0tZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmY7XFxyXFxuICAgIC0tbm9ybWFsLWZvbnQ6IDQwMDtcXHJcXG4gICAgLS1ib2xkLWZvbnQ6IDcwMDtcXHJcXG4gICAgLS1ib2xkZXItZm9udDogOTAwO1xcclxcbiAgICAtLWJnLWNvbG9yOiAjZmNmY2ZjO1xcclxcbiAgICAtLXByaW1hcnktY29sb3I6ICM0NzU2ZGY7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZmY3MjM1O1xcclxcbiAgICAtLXByaW1hcnktc2hhZG93OiAjOGI4ZWFmO1xcclxcbiAgICAtLXNlY29uZGFyeS1zaGFkb3c6ICNhMTdhNjk7XFxyXFxuICAgIC0tYm90dG9tLW1hcmdpbjogMC41cmVtO1xcclxcbiAgICAtLWJvdHRvbS1tYXJnaW4tMjogMXJlbTtcXHJcXG4gICAgLS1saW5lLWhlaWdodDogMS43cmVtO1xcclxcbiAgICAtLXRyYW5zaXRpb246IDAuM3M7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2hhcGV7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICB0b3A6NDBweDtcXHJcXG4gICAgbGVmdDotNjUwcHg7XFxyXFxuICAgIHdpZHRoOjgwMHB4O1xcclxcbiAgICBoZWlnaHQ6ODAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMywgMTE2LCAxMDUsIC41KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoxOTBweCA1MCUgOTBweCA1MCU7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGU7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTUwMDBtcztcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgcm90YXRle1xcclxcbiAgICAwJXt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfVxcclxcbiAgICA1MCV7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfVxcclxcbiAgICAxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX1cXHJcXG4gIH1cXHJcXG4gIC5zZWNvbmR7XFxyXFxuICAgIGxlZnQ6LTcwMHB4O1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE4MDAwbXM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMywgMTE2LCAxMDUsIC41KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDQsIDM2LCAxNTYsIC41KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRoaXJke1xcclxcbiAgICBsZWZ0OmNhbGMoMTAwdncgLSAxNTBweCk7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTUwMDBtcztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAzLCAxMTYsIDEwNSwgLjUpO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICAuZm91cnRoe1xcclxcbiAgICBsZWZ0OmNhbGMoMTAwdncgLSAxMDBweCk7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTgwMDBtcztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAzLCAxMTYsIDEwNSwgLjUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0NCwgMzYsIDE1NiwgLjUpO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuXFxyXFxuLmhlcm97XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYmxhY2spO1xcclxcbiAgcGFkZGluZy10b3A6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY29udGFpbmVye1xcclxcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46ICA1dmggYXV0bztcXHJcXG4gIHBhZGRpbmctdG9wOiAxMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgcGFkZGluZzogMXB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi50ZXh0e1xcclxcbiAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygzMnB4ICsgNHZ3KTtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBmbG9hdDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAxcyBsaW5lYXI7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcclxcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZmxvYXRpbmd7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDRweCA0cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlcntcXHJcXG4gIHBhZGRpbmctdG9wOiBjYWxjKDIwcHggKyAydncpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYmxhY2spO1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDMycHggKyAxdncpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6dmFyKC0tYmctY29sb3IpO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0e1xcclxcbiAgd2lkdGg6MTAwdnc7XFxyXFxuICBoZWlnaHQ6MTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFya3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWJsYWNrKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsgLnByb2plY3QtaW1nIC5pbWctY29udGFpbmVyIGltZ3tcXHJcXG4gIGJveC1zaGFkb3c6IDE1cHggMTBweCA0cHggcmdiKDIyMCwgMTI3LCAxMTUsIC41KVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdC1pbWd7XFxyXFxuICBmbGV4OiAxIDEgMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG59XFxyXFxuLmltZy1jb250YWluZXJ7XFxyXFxuICB3aWR0aDo4MCU7XFxyXFxuICBoZWlnaHQ6YXV0bztcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciBpbWd7XFxyXFxuICB3aWR0aDoxMDAlO1xcclxcbiAgYm94LXNoYWRvdzogLTE1cHggMTBweCA0cHggcmdiKDQ0LCAzNiwgMTU2LCAuNSlcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHN7XFxyXFxuICBmbGV4OiAxIDEgMCU7XFxyXFxuICBnYXA6NC41dmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2N7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAuNnZ3KTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDE2cHggKyAxdncpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDZweCA2cHggZ3JheTtcXHJcXG4gIHBhZGRpbmc6IC45dnc7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxle1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAydncpO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1jb250YWluZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAydnc7XFxyXFxufVxcclxcbi5pY29ue1xcclxcbiAgd2lkdGg6NTBweDtcXHJcXG59XFxyXFxuLmljb24gaW1ne1xcclxcbiAgd2lkdGg6MTAwJVxcclxcbn1cXHJcXG5cXHJcXG4udG9vbHN7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIC41dncpO1xcclxcbn1cXHJcXG4udG9vbC1jb250YWluZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAydnc7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDg1dmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBoMiB7XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbm1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4tMik7XFxyXFxuZm9udC1zaXplOiBjYWxjKDE2cHggKyAydncpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDQwLjc1cmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAwLjkzOHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdmFyKC0tc2Vjb25kYXJ5LXNoYWRvdyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ibGFjayk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5mb3JtLWNvbnRyb2wge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZmllbGQge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVzc2FnZSB7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxyXFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ibGFjayk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTV2aDtcXHJcXG4gIGdhcDoxNXB4O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgLnRleHQtY29udGFpbmVye1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46ICBhdXRvO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gIH1cXHJcXG4gIC5zaGFwZXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5wcm9qZWN0e1xcclxcbiAgICBoZWlnaHQ6IDg1dmg7XFxyXFxuICB9XFxyXFxuICAuZGFya3tcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgfVxcclxcbiAgLmRldGFpbHN7XFxyXFxuICAgIGZsZXg6IDIgMSAwJTtcXHJcXG4gIH1cXHJcXG4gIC5pbWctY29udGFpbmVye1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcbiAgLmNvbnRhY3QtZm9ybS1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gIC5wcm9qZWN0e1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbiAgLmRhcmt7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gIH1cXHJcXG4gIC5kZXRhaWxze1xcclxcbiAgICBmbGV4OiAxIDEgMCU7XFxyXFxuICB9XFxyXFxuICAuZGVzY3tcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjZ2dyk7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDE2cHggKyAxLjZ2dyk7XFxyXFxuICB9XFxyXFxuICAuaW1nLWNvbnRhaW5lcntcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG4gIC5pbWctY29udGFpbmVyIGltZ3tcXHJcXG4gICAgYm94LXNoYWRvdzogLTEwcHggNXB4IDRweCByZ2IoNDQsIDM2LCAxNTYsIC41KVxcclxcbiAgfVxcclxcbiAgLmRhcmsgLnByb2plY3QtaW1nIC5pbWctY29udGFpbmVyIGltZ3tcXHJcXG4gICAgYm94LXNoYWRvdzogLTEwcHggNXB4IDRweCByZ2IoMjIwLCAxMjcsIDExNSwgLjUpXFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3QoKXtcclxuXHJcbiAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdEZvcm0uY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG5cclxuICAgIGNvbnRhY3RGb3JtLmlubmVySFRNTCA9IGA8aDI+R2V0IEluIFRvdWNoIFdpdGggTWU8L2gyPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZm9ybVwiPlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vZm9ybXNwcmVlLmlvL2YveGtua2VxenpcIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzZW5kZXItbmFtZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIE5hbWVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtZmllbGRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzZW5kZXItZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1maWVsZFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIGNvbHM9XCI2MFwiXHJcbiAgICAgICAgICAgICAgcm93cz1cIjEwXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtZmllbGRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgaWQ9XCJzdWJtaXQtYnRuXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJzdWJtaXQtYnRuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3RGb3JtO1xyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvb3Rlcigpe1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImljb24tY29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1RhbnplYjkyNzdcIiB0YXJnZXQ9J19ibGFuayc+XHJcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLWZpbGxlZC8zNDQvZmZmZmZmL2dpdGh1Yi5wbmdcIiBhbHQ9XCJHaXRodWJcIj5cclxuICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi90YW56ZWItY2hvdWRodXJ5LTcyMjkwMjE0MC9cIiB0YXJnZXQ9J19ibGFuayc+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1maWxsZWQvMzQ0L2ZmZmZmZi9saW5rZWRpbi5wbmdcIiBhbHQ9XCJMaW5rZWRJblwiPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPHA+RGVzaWduZWQgYW5kIERldmVsb3BlZCBieSBUYW56ZWVtIFhoaWRvcmkgJmNvcHk7IENvcHlyaWdodCAyMDIyPC9wPlxyXG4gIGA7XHJcbiAgIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCAge2NvbnRhY3QsIGZvb3Rlcn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBoZWFkZXIoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcclxuXHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJzaGFwZSBmaXJzdFwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNoYXBlIHNlY29uZFwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNoYXBlIHRoaXJkXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2hhcGUgZm91cnRoXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiIGlkPVwiaW50cm9cIj5IaSBJJ208L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiIGlkPVwiZnVsbE5hbWVcIj5UYW56ZWIgQ2hvdWRodXJ5PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIiBpZD1cInRpdGxlXCI+V2ViIERldmVsb3BlcjwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEFuaW1hdGlvbigpe1xyXG4gICAgbGV0IGludHJvID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnRybycpO1xyXG4gICAgbGV0IGZ1bGxOYW1lID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsTmFtZScpO1xyXG4gICAgbGV0IHRpdGxlID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG4gICAgbGV0IGZsb2F0SW50cm8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaW50cm8uY2xhc3NMaXN0LmFkZCgnZmxvYXRpbmcnKTtcclxuICAgIH0sIDEwMDApO1xyXG4gICAgXHJcbiAgICBsZXQgZmxvYXROYW1lID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgIGZ1bGxOYW1lLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0aW5nJylcclxuICAgIH0sIDE5MDApO1xyXG4gICAgbGV0IGZsb2F0VGl0bGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnZmxvYXRpbmcnKVxyXG4gICAgICAgICBcclxuICAgIH0sIDI4MDApO1xyXG59XHJcblxyXG5leHBvcnQgIHtoZWFkZXIsIGFkZEFuaW1hdGlvbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IEFldHRpZEltZyBmcm9tICcuL2FldHRpZC5wbmcnXHJcbmltcG9ydCBCbG9nSW1nIGZyb20gJy4vYmxvZy5wbmcnXHJcbmltcG9ydCBFdGNoYVNrZXRjaEltZyBmcm9tICcuL2V0Y2hhLXNrZXRjaC5wbmcnXHJcbmltcG9ydCBFeWVTcHlJbWcgZnJvbSAnLi9leWVzcHkucG5nJ1xyXG5pbXBvcnQgTWFlZGl0dEltZyBmcm9tICcuL21hZWRpdHQucG5nJ1xyXG5cclxuZnVuY3Rpb24gcHJvamVjdEhlYWRlcigpe1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWhlYWRlcicpO1xyXG5cclxuICBoZWFkZXIuaW5uZXJIVE1MID0gYDxoMT5Qcm9qZWN0czwvaDE+YDtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZXRjaGFTa2V0Y2goKXtcclxuICBjb25zdCBleWVTcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBleWVTcHkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdkYXJrJyk7XHJcblxyXG4gIGV5ZVNweS5pbm5lckhUTUw9YCAgXHJcbiAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cclxuICA8aDEgY2xhc3M9J3Byb2plY3QtdGl0bGUnPkV0Y2gtYS1za2V0Y2g8L2gxPlxyXG4gIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9UYW56ZWI5Mjc3L2V0Y2gtYS1za2V0Y2hcIiB0YXJnZXQ9J19ibGFuayc+XHJcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLWZpbGxlZC8zNDQvZmZmZmZmL2dpdGh1Yi5wbmdcIiBhbHQ9XCJHaXRodWJcIj5cclxuICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGFuemViOTI3Ny5naXRodWIuaW8vZXRjaC1hLXNrZXRjaC9cIiAgdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMzQ0L2ZmZmZmZi9kb21haW4ucG5nXCIgYWx0PVwiV2Vic2l0ZVwiPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIDxwIGNsYXNzPVwiZGVzY1wiPkRlc2NyaXB0aW9uOkEgYnJvd3NlciB2ZXJzaW9uIG9mIHNvbWV0aGluZyBiZXR3ZWVuIGEgc2tldGNocGFkIGFuZCBhbiBFdGNoLUEtU2tldGNoLjwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJ0b29sc1wiPlRvb2xzIFVzZWQ6PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbC1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2h0bWwtNS0tdjEucG5nXCIgYWx0PVwiSFRNTFwiPiBcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2NzczMucG5nXCIgYWx0PVwiQ1NTXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9qYXZhc2NyaXB0LS12MS5wbmdcIiBhbHQ9XCJKYXZhU2NyaXB0XCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltZ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgPGltZyBzcmM9XCIke0V0Y2hhU2tldGNoSW1nfVwiIGFsdD1cIlwiPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbmBcclxuXHJcbnJldHVybiBleWVTcHk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZXllU3B5KCl7XHJcbiAgICBjb25zdCBleWVTcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGV5ZVNweS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcblxyXG4gICAgZXllU3B5LmlubmVySFRNTD1gICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbWdcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiJHtFeWVTcHlJbWd9XCIgYWx0PVwiXCI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxyXG4gICAgPGgxIGNsYXNzPSdwcm9qZWN0LXRpdGxlJz5FeWUgU3B5PC9oMT5cclxuICAgIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVGFuemViOTI3Ny9leWUtc3B5XCIgdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLWZpbGxlZC8zNDQvZ2l0aHViLnBuZ1wiIGFsdD1cIkdpdGh1YlwiPlxyXG4gICAgPC9hPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly90YW56ZWI5Mjc3LmdpdGh1Yi5pby9leWUtc3B5L1wiIHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8zNDQvZG9tYWluLnBuZ1wiIGFsdD1cIldlYnNpdGVcIj5cclxuICAgIDwvYT5cclxuICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJkZXNjXCI+RGVzY3JpcHRpb246IFBob3RvIHRhZ2dpbmcgZ2FtZSBmZWF0dXJpbmcgdGhlIGZpbmFsIGltYWdlIGZyb20gPGEgaHJlZj1cImh0dHBzOi8vd3d3LnJlZGRpdC5jb20vci9wbGFjZS9jb21tZW50cy90d2Z0MXEvZnVsbF9zY3JlZW5zaG90X29mX3JwbGFjZV8yMDIyL1wiPnIvUGxhY2U8L2E+PC9wPlxyXG4gICAgPHAgY2xhc3M9XCJ0b29sc1wiPlRvb2xzIFVzZWQ6PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cInRvb2wtY29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9jc3MzLnBuZ1wiIGFsdD1cIkNTU1wiPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvamF2YXNjcmlwdC0tdjEucG5nXCIgYWx0PVwiSmF2YVNjcmlwdFwiPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvd2VicGFjay5wbmdcIiBhbHQ9XCJXZWJwYWNrXCI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9nb29nbGUtZmlyZWJhc2UtY29uc29sZS5wbmdcIiBhbHQ9XCJGaXJlYmFzZVwiPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PmBcclxuXHJcbiAgcmV0dXJuIGV5ZVNweTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWV0dGlkKCl7XHJcbiAgY29uc3QgZXllU3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZXllU3B5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnLCAnZGFyaycpO1xyXG5cclxuICBleWVTcHkuaW5uZXJIVE1MPWAgIFxyXG4gIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgPGgxIGNsYXNzPSdwcm9qZWN0LXRpdGxlJz5BZXR0aWQ8L2gxPlxyXG4gIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9UYW56ZWI5Mjc3L2FldHRpZC13ZWJzaXRlXCIgdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1maWxsZWQvMzQ0L2ZmZmZmZi9naXRodWIucG5nXCIgYWx0PVwiR2l0aHViXCI+XHJcbiAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3RhbnplYjkyNzcuZ2l0aHViLmlvL2FldHRpZC13ZWJzaXRlL1wiIHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzM0NC9mZmZmZmYvZG9tYWluLnBuZ1wiIGFsdD1cIldlYnNpdGVcIj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8cCBjbGFzcz1cImRlc2NcIj5EZXNjcmlwdGlvbjogU29jaWFsIE1lZGlhIHNpdGUgZm9yIHBob3RvcyBvZiBmb29kLCBkaXNoZXMsIGFuZCByZWNpcGVzPC9wPlxyXG4gICAgICA8cCBjbGFzcz1cInRvb2xzXCI+VG9vbHMgVXNlZDo8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0b29sLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2NzczMucG5nXCIgYWx0PVwiQ1NTXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9qYXZhc2NyaXB0LS12MS5wbmdcIiBhbHQ9XCJKYXZhU2NyaXB0XCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL29mZmljZS8zNDQvcmVhY3QucG5nXCIgYWx0PVwiUmVhY3RcIj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2dvb2dsZS1maXJlYmFzZS1jb25zb2xlLnBuZ1wiIGFsdD1cIkZpcmViYXNlXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltZ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgPGltZyBzcmM9XCIke0FldHRpZEltZ31cIiBhbHQ9XCJcIj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5gXHJcblxyXG5yZXR1cm4gZXllU3B5O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYmxvZygpe1xyXG4gIGNvbnN0IGV5ZVNweSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGV5ZVNweS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcblxyXG4gIGV5ZVNweS5pbm5lckhUTUw9YCAgPGRpdiBjbGFzcz1cInByb2plY3QtaW1nXCI+XHJcbiAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cclxuICAgIDxpbWcgc3JjPVwiJHtCbG9nSW1nfVwiIGFsdD1cIlwiPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cclxuICA8aDEgY2xhc3M9J3Byb2plY3QtdGl0bGUnPkJsb2cgQXBwPC9oMT5cclxuICA8ZGl2IGNsYXNzPVwiaWNvbi1jb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxyXG4gIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVGFuemViOTI3Ny9ibG9nLWFwcFwiIHRhcmdldD0nX2JsYW5rJz5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MtZmlsbGVkLzM0NC9naXRodWIucG5nXCIgYWx0PVwiR2l0aHViXCI+XHJcbiAgPC9hPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImljb25cIj5cclxuICA8YSBocmVmPVwiaHR0cHM6Ly90YW56ZWI5Mjc3LmdpdGh1Yi5pby9ibG9nLWFwcC9cIiB0YXJnZXQ9J19ibGFuayc+XHJcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzM0NC9kb21haW4ucG5nXCIgYWx0PVwiV2Vic2l0ZVwiPlxyXG4gIDwvYT5cclxuPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPHAgY2xhc3M9XCJkZXNjXCI+RGVzY3JpcHRpb246IFRoZSBCbG9nIGFwcCBpcyBhIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYmxvZyBhcGkgd29ya2luZyBhcyBpbnRlbmRlZCwgYWxsb3dpbmcgdXNlcnMgdG8gdmlldyBhbmQgY29tbWVudCBvbiBwdWJsaXNoZWQgcG9zdHMuPC9wPlxyXG4gIDxwIGNsYXNzPVwidG9vbHNcIj5Ub29scyBVc2VkOjwvcD5cclxuICA8ZGl2IGNsYXNzPVwidG9vbC1jb250YWluZXJcIj5cclxuPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvY3NzMy5wbmdcIiBhbHQ9XCJDU1NcIj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2phdmFzY3JpcHQtLXYxLnBuZ1wiIGFsdD1cIkphdmFTY3JpcHRcIj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL29mZmljZS8zNDQvcmVhY3QucG5nXCIgYWx0PVwiUmVhY3RcIj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMjU2L2RqYW5nby5wbmdcIiBhbHQ9XCJOb2RlXCI+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiaWNvblwiPlxyXG4gICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzI1Ni9wb3N0Z3JlZXNxbC5wbmdcIiBhbHQ9XCJNb25nb1wiPlxyXG48L2Rpdj5cclxuPC9kaXY+YFxyXG5cclxucmV0dXJuIGV5ZVNweTtcclxufVxyXG5mdW5jdGlvbiBtYWVkaXR0KCl7XHJcbiAgY29uc3QgZXllU3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZXllU3B5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnLCAnZGFyaycpO1xyXG5cclxuICBleWVTcHkuaW5uZXJIVE1MPWAgIFxyXG4gIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgPGgxIGNsYXNzPSdwcm9qZWN0LXRpdGxlJz5NYWVkaXR0PC9oMT5cclxuICA8ZGl2IGNsYXNzPVwiaWNvbi1jb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxyXG4gIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVGFuemViOTI3Ny9tYWVkaXR0LWFwcFwiIHRhcmdldD0nX2JsYW5rJz5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MtZmlsbGVkLzM0NC9mZmZmZmYvZ2l0aHViLnBuZ1wiIGFsdD1cIkdpdGh1YlwiPlxyXG4gIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly90YW56ZWI5Mjc3LmdpdGh1Yi5pby9tYWVkaXR0LWFwcC9cIiB0YXJnZXQ9J19ibGFuayc+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8zNDQvZmZmZmZmL2RvbWFpbi5wbmdcIiBhbHQ9XCJXZWJzaXRlXCI+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3M9XCJkZXNjXCI+RGVzY3JpcHRpb246IFNvY2lhbCBNZWRpYSBzaXRlIHRoYXQgYWxsb3dzIHVzZXJzIHRvIHNpZ24gdXAsIHNpZ24gaW4sIHN1Ym1pdCBwb3N0cywgbGlrZSBwb3N0cywgY29tbWVudCBvbiBwb3N0cywgYW5kIGFkZCBmcmllbmRzPC9wPlxyXG4gICAgICA8cCBjbGFzcz1cInRvb2xzXCI+VG9vbHMgVXNlZDo8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0b29sLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2NzczMucG5nXCIgYWx0PVwiQ1NTXCI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9qYXZhc2NyaXB0LS12MS5wbmdcIiBhbHQ9XCJKYXZhU2NyaXB0XCI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9vZmZpY2UvMzQ0L3JlYWN0LnBuZ1wiIGFsdD1cIlJlYWN0XCI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9ub2RlanMucG5nXCIgYWx0PVwiTm9kZVwiPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvbW9uZ29kYi5wbmdcIiBhbHQ9XCJNb25nb1wiPlxyXG4gIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3QtaW1nXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICA8aW1nIHNyYz1cIiR7TWFlZGl0dEltZ31cIiBhbHQ9XCJcIj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5gXHJcblxyXG5yZXR1cm4gZXllU3B5O1xyXG59XHJcblxyXG5leHBvcnQge2V5ZVNweSwgYWV0dGlkLCBwcm9qZWN0SGVhZGVyLCBldGNoYVNrZXRjaCwgYmxvZywgbWFlZGl0dH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtoZWFkZXIsIGFkZEFuaW1hdGlvbn0gZnJvbSBcIi4vaGVhZFwiO1xyXG5pbXBvcnQgeyBleWVTcHksIGFldHRpZCwgcHJvamVjdEhlYWRlciwgZXRjaGFTa2V0Y2gsIGJsb2csIG1hZWRpdHQgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQge2NvbnRhY3QsIGZvb3Rlcn0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykuYXBwZW5kKGhlYWRlcigpLCBwcm9qZWN0SGVhZGVyKCksIGV0Y2hhU2tldGNoKCksIGV5ZVNweSgpLCBhZXR0aWQoKSwgYmxvZygpLCBtYWVkaXR0KCksIGNvbnRhY3QoKSwgZm9vdGVyKCkpO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChfZXZlbnQpID0+IHtcclxuICAgIGFkZEFuaW1hdGlvbigpO1xyXG4gIH0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==