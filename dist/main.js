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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg-black: #0c0e1a;\n    --blue-ac: #2c249c;\n    --copper-ac: #cb7469;\n    --font-family: \"Roboto\", sans-serf;\n    --normal-font: 400;\n    --bold-font: 700;\n    --bolder-font: 900;\n    --bg-color: #fcfcfc;\n    --primary-color: #4756df;\n    --secondary-color: #ff7235;\n    --primary-shadow: #8b8eaf;\n    --secondary-shadow: #a17a69;\n    --bottom-margin: 0.5rem;\n    --bottom-margin-2: 1rem;\n    --line-height: 1.7rem;\n    --transition: 0.3s;\n  }\n\n  .shape{\n    position:absolute;\n    top:40px;\n    left:-650px;\n    width:800px;\n    height:800px;\n    background-color:rgb(203, 116, 105, .5);\n    border-radius:190px 50% 90px 50%;\n    animation-name: rotate;\n    animation-duration: 15000ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n  @keyframes rotate{\n    0%{transform:rotate(0deg)}\n    50%{transform:rotate(180deg)}\n    100%{transform:rotate(360deg)}\n  }\n  .second{\n    left:-700px;\n    animation-duration: 18000ms;\n    background-color:rgb(203, 116, 105, .5);\n    background-color:rgb(44, 36, 156, .5);\n  }\n  \n  .third{\n    left:calc(100vw - 150px);\n    animation-duration: 15000ms;\n    background-color:rgb(203, 116, 105, .5);\n  \n  }\n  .fourth{\n    left:calc(100vw - 100px);\n    animation-duration: 18000ms;\n    background-color:rgb(203, 116, 105, .5);\n    background-color:rgb(44, 36, 156, .5);\n  \n  }\n\n.hero{\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--bg-black);\n  padding-top: 1px;\n}\n\n.text-container{\n  text-align:center;\n  height: 90%;\n  width: 90%;\n  margin:  5vh auto;\n  padding-top: 10%;\n  background-color: whitesmoke;\n  padding: 1px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  position: relative;\n}\n.text{\n  color:whitesmoke;\n  font-family: 'Righteous', cursive;\n  font-size: calc(32px + 4vw);\n  animation-name: float;\n  -webkit-transition: text-shadow 1s linear;\n  -moz-transition: text-shadow 1s linear;\n  -ms-transition: text-shadow 1s linear;\n  -o-transition: text-shadow 1s linear;\n  transition: text-shadow 1s linear;\n}\n\n\n.floating{\n  text-shadow: 2px 4px 4px black;\n}\n\n.project-header{\n  padding-top: calc(20px + 2vw);\n  background-color: var(--bg-black);\n  font-size: calc(32px + 1vw);\n  text-align: center;\n  width: 100vw;\n  font-family: 'Ubuntu', sans-serif;\n}\n\n.project{\n  width:100vw;\n  height:100vh;\n  background-color:whitesmoke;\n  display:flex;\n  z-index: 1;\n  position: relative;\n  padding: 10px 0;\n}\n\n.dark{\n  background-color: var(--bg-black);\n  color: white;\n}\n\n.dark .project-img .img-container img{\n  box-shadow: 15px 10px 4px rgb(220, 127, 115, .5)\n}\n\n\n.project-img{\n  flex: 1 1 0%;\n  display: flex;\n  justify-content:center;\n  align-items:center;\n}\n.img-container{\n  width:80%;\n  height:auto;\n  \n}\n\n.img-container img{\n  width:100%;\n  box-shadow: -15px 10px 4px rgb(44, 36, 156, .5)\n}\n\n.details{\n  flex: 1 1 0%;\n  gap:4.5vh;\n  display: flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n}\n\n.desc{\n  width: 90%;\n  font-size: calc(12px + .6vw);\n  line-height: calc(16px + 1vw);\n  box-shadow: 0px 6px 6px gray;\n  padding: .9vw;\n  font-style: italic;\n}\n\n.project-title{\n  font-size: calc(16px + 2vw);\n}\n\n.icon-container{\n  display: flex;\n  gap: 2vw;\n}\n.icon{\n  width:50px;\n}\n.icon img{\n  width:100%\n}\n\n.tools{\n  font-size: calc(16px + .5vw);\n}\n.tool-container{\n  display: flex;\n  gap: 2vw;\n}\n\n.contact {\n  display: inline-block;\n  width: 100vw;\n  padding-top: 2rem;\n  background-color: white;\n  height: 85vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.contact h2 {\ntext-align: center;\nmargin-bottom: var(--bottom-margin-2);\nfont-size: calc(16px + 2vw);\n}\n\n.contact-form-container {\n  max-width: 40.75rem;\n  margin: 0 auto;\n  padding: 0.938rem;\n  border-radius: 5px;\n  box-shadow: 0 3px 10px var(--secondary-shadow);\n  background-color: var(--bg-black);\n  color: white;\n}\n.form-control {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-weight: 600;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n}\n\n.input-field {\n  height: 30px;\n}\n\n#message {\n  height: 150px;\n}\n\n\n.submit-btn:hover {\nbackground-color: var(--primary-color);\nborder: 2px solid var(--primary-color);\ncursor: pointer;\n}\n\nfooter{\n  background-color: var(--bg-black);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 15vh;\n  gap:15px;\n  padding: 10px 0;\n  \n}\n\nfooter p {\n  padding: 10px;\n  text-align: center;\n}\n\n\n\n\n@media (max-width: 480px) {\n  .text-container{\n    height: 100%;\n    width: 100%;\n    margin:  auto;\n    padding-top: 0;\n  }\n  .shape{\n    display: none;\n  }\n  .project{\n    height: 85vh;\n  }\n  .dark{\n    flex-direction: column-reverse;\n  }\n  .details{\n    flex: 2 1 0%;\n  }\n  .img-container{\n    width: 90%;\n  }\n  .contact-form-container {\n    width: 20rem;\n  }\n}\n@media (max-width: 1024px) {\n  .project{\n    flex-direction: column;\n  }\n  .dark{\n    flex-direction: column-reverse;\n  }\n  .details{\n    flex: 1 1 0%;\n  }\n  .desc{\n    font-size: calc(12px + 1.6vw);\n    line-height: calc(16px + 1.6vw);\n  }\n  .img-container{\n    width: 80%;\n  }\n  .img-container img{\n    box-shadow: -10px 5px 4px rgb(44, 36, 156, .5)\n  }\n  .dark .project-img .img-container img{\n    box-shadow: -10px 5px 4px rgb(220, 127, 115, .5)\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');\n\n\n:root {\n    --bg-black: #0c0e1a;\n    --blue-ac: #2c249c;\n    --copper-ac: #cb7469;\n    --font-family: \"Roboto\", sans-serf;\n    --normal-font: 400;\n    --bold-font: 700;\n    --bolder-font: 900;\n    --bg-color: #fcfcfc;\n    --primary-color: #4756df;\n    --secondary-color: #ff7235;\n    --primary-shadow: #8b8eaf;\n    --secondary-shadow: #a17a69;\n    --bottom-margin: 0.5rem;\n    --bottom-margin-2: 1rem;\n    --line-height: 1.7rem;\n    --transition: 0.3s;\n  }\n\n  .shape{\n    position:absolute;\n    top:40px;\n    left:-650px;\n    width:800px;\n    height:800px;\n    background-color:rgb(203, 116, 105, .5);\n    border-radius:190px 50% 90px 50%;\n    animation-name: rotate;\n    animation-duration: 15000ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n  @keyframes rotate{\n    0%{transform:rotate(0deg)}\n    50%{transform:rotate(180deg)}\n    100%{transform:rotate(360deg)}\n  }\n  .second{\n    left:-700px;\n    animation-duration: 18000ms;\n    background-color:rgb(203, 116, 105, .5);\n    background-color:rgb(44, 36, 156, .5);\n  }\n  \n  .third{\n    left:calc(100vw - 150px);\n    animation-duration: 15000ms;\n    background-color:rgb(203, 116, 105, .5);\n  \n  }\n  .fourth{\n    left:calc(100vw - 100px);\n    animation-duration: 18000ms;\n    background-color:rgb(203, 116, 105, .5);\n    background-color:rgb(44, 36, 156, .5);\n  \n  }\n\n.hero{\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--bg-black);\n  padding-top: 1px;\n}\n\n.text-container{\n  text-align:center;\n  height: 90%;\n  width: 90%;\n  margin:  5vh auto;\n  padding-top: 10%;\n  background-color: whitesmoke;\n  padding: 1px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  position: relative;\n}\n.text{\n  color:whitesmoke;\n  font-family: 'Righteous', cursive;\n  font-size: calc(32px + 4vw);\n  animation-name: float;\n  -webkit-transition: text-shadow 1s linear;\n  -moz-transition: text-shadow 1s linear;\n  -ms-transition: text-shadow 1s linear;\n  -o-transition: text-shadow 1s linear;\n  transition: text-shadow 1s linear;\n}\n\n\n.floating{\n  text-shadow: 2px 4px 4px black;\n}\n\n.project-header{\n  padding-top: calc(20px + 2vw);\n  background-color: var(--bg-black);\n  font-size: calc(32px + 1vw);\n  text-align: center;\n  width: 100vw;\n  font-family: 'Ubuntu', sans-serif;\n}\n\n.project{\n  width:100vw;\n  height:100vh;\n  background-color:whitesmoke;\n  display:flex;\n  z-index: 1;\n  position: relative;\n  padding: 10px 0;\n}\n\n.dark{\n  background-color: var(--bg-black);\n  color: white;\n}\n\n.dark .project-img .img-container img{\n  box-shadow: 15px 10px 4px rgb(220, 127, 115, .5)\n}\n\n\n.project-img{\n  flex: 1 1 0%;\n  display: flex;\n  justify-content:center;\n  align-items:center;\n}\n.img-container{\n  width:80%;\n  height:auto;\n  \n}\n\n.img-container img{\n  width:100%;\n  box-shadow: -15px 10px 4px rgb(44, 36, 156, .5)\n}\n\n.details{\n  flex: 1 1 0%;\n  gap:4.5vh;\n  display: flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n}\n\n.desc{\n  width: 90%;\n  font-size: calc(12px + .6vw);\n  line-height: calc(16px + 1vw);\n  box-shadow: 0px 6px 6px gray;\n  padding: .9vw;\n  font-style: italic;\n}\n\n.project-title{\n  font-size: calc(16px + 2vw);\n}\n\n.icon-container{\n  display: flex;\n  gap: 2vw;\n}\n.icon{\n  width:50px;\n}\n.icon img{\n  width:100%\n}\n\n.tools{\n  font-size: calc(16px + .5vw);\n}\n.tool-container{\n  display: flex;\n  gap: 2vw;\n}\n\n.contact {\n  display: inline-block;\n  width: 100vw;\n  padding-top: 2rem;\n  background-color: white;\n  height: 85vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.contact h2 {\ntext-align: center;\nmargin-bottom: var(--bottom-margin-2);\nfont-size: calc(16px + 2vw);\n}\n\n.contact-form-container {\n  max-width: 40.75rem;\n  margin: 0 auto;\n  padding: 0.938rem;\n  border-radius: 5px;\n  box-shadow: 0 3px 10px var(--secondary-shadow);\n  background-color: var(--bg-black);\n  color: white;\n}\n.form-control {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-weight: 600;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n}\n\n.input-field {\n  height: 30px;\n}\n\n#message {\n  height: 150px;\n}\n\n\n.submit-btn:hover {\nbackground-color: var(--primary-color);\nborder: 2px solid var(--primary-color);\ncursor: pointer;\n}\n\nfooter{\n  background-color: var(--bg-black);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 15vh;\n  gap:15px;\n  padding: 10px 0;\n  \n}\n\nfooter p {\n  padding: 10px;\n  text-align: center;\n}\n\n\n\n\n@media (max-width: 480px) {\n  .text-container{\n    height: 100%;\n    width: 100%;\n    margin:  auto;\n    padding-top: 0;\n  }\n  .shape{\n    display: none;\n  }\n  .project{\n    height: 85vh;\n  }\n  .dark{\n    flex-direction: column-reverse;\n  }\n  .details{\n    flex: 2 1 0%;\n  }\n  .img-container{\n    width: 90%;\n  }\n  .contact-form-container {\n    width: 20rem;\n  }\n}\n@media (max-width: 1024px) {\n  .project{\n    flex-direction: column;\n  }\n  .dark{\n    flex-direction: column-reverse;\n  }\n  .details{\n    flex: 1 1 0%;\n  }\n  .desc{\n    font-size: calc(12px + 1.6vw);\n    line-height: calc(16px + 1.6vw);\n  }\n  .img-container{\n    width: 80%;\n  }\n  .img-container img{\n    box-shadow: -10px 5px 4px rgb(44, 36, 156, .5)\n  }\n  .dark .project-img .img-container img{\n    box-shadow: -10px 5px 4px rgb(220, 127, 115, .5)\n  }\n}"],"sourceRoot":""}]);
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
    <img src="https://img.icons8.com/color/344/nodejs.png" alt="Node">
</div>
<div class="icon">
    <img src="https://img.icons8.com/color/344/mongodb.png" alt="Mongo">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvQjs7QUFFcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RXFCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDcUI7QUFDZTtBQUNKO0FBQ2U7QUFDWDtBQUNFOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsOENBQWMsQ0FBQztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHdDQUFTLENBQUM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3Q0FBUyxDQUFDO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixzQ0FBTyxDQUFDO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5Q0FBVSxDQUFDO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDblBBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEM7QUFDMkM7QUFDN0M7QUFDdEI7O0FBRXBCLHlDQUF5Qyw2Q0FBTSxJQUFJLHdEQUFhLElBQUksc0RBQVcsSUFBSSxpREFBTSxJQUFJLGlEQUFNLElBQUksK0NBQUksSUFBSSxrREFBTyxJQUFJLGlEQUFPLElBQUksZ0RBQU07O0FBRTNJO0FBQ0EsSUFBSSxtREFBWTtBQUNoQixHQUFHLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vc3JjL2hlYWQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJnLWJsYWNrOiAjMGMwZTFhO1xcbiAgICAtLWJsdWUtYWM6ICMyYzI0OWM7XFxuICAgIC0tY29wcGVyLWFjOiAjY2I3NDY5O1xcbiAgICAtLWZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJmO1xcbiAgICAtLW5vcm1hbC1mb250OiA0MDA7XFxuICAgIC0tYm9sZC1mb250OiA3MDA7XFxuICAgIC0tYm9sZGVyLWZvbnQ6IDkwMDtcXG4gICAgLS1iZy1jb2xvcjogI2ZjZmNmYztcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjNDc1NmRmO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogI2ZmNzIzNTtcXG4gICAgLS1wcmltYXJ5LXNoYWRvdzogIzhiOGVhZjtcXG4gICAgLS1zZWNvbmRhcnktc2hhZG93OiAjYTE3YTY5O1xcbiAgICAtLWJvdHRvbS1tYXJnaW46IDAuNXJlbTtcXG4gICAgLS1ib3R0b20tbWFyZ2luLTI6IDFyZW07XFxuICAgIC0tbGluZS1oZWlnaHQ6IDEuN3JlbTtcXG4gICAgLS10cmFuc2l0aW9uOiAwLjNzO1xcbiAgfVxcblxcbiAgLnNoYXBle1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOjQwcHg7XFxuICAgIGxlZnQ6LTY1MHB4O1xcbiAgICB3aWR0aDo4MDBweDtcXG4gICAgaGVpZ2h0OjgwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDMsIDExNiwgMTA1LCAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6MTkwcHggNTAlIDkwcHggNTAlO1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDAwbXM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICB9XFxuICBAa2V5ZnJhbWVzIHJvdGF0ZXtcXG4gICAgMCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX1cXG4gICAgNTAle3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX1cXG4gICAgMTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9XFxuICB9XFxuICAuc2Vjb25ke1xcbiAgICBsZWZ0Oi03MDBweDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxODAwMG1zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDMsIDExNiwgMTA1LCAuNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQ0LCAzNiwgMTU2LCAuNSk7XFxuICB9XFxuICBcXG4gIC50aGlyZHtcXG4gICAgbGVmdDpjYWxjKDEwMHZ3IC0gMTUwcHgpO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDAwbXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMywgMTE2LCAxMDUsIC41KTtcXG4gIFxcbiAgfVxcbiAgLmZvdXJ0aHtcXG4gICAgbGVmdDpjYWxjKDEwMHZ3IC0gMTAwcHgpO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE4MDAwbXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMywgMTE2LCAxMDUsIC41KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDQsIDM2LCAxNTYsIC41KTtcXG4gIFxcbiAgfVxcblxcbi5oZXJve1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWJsYWNrKTtcXG4gIHBhZGRpbmctdG9wOiAxcHg7XFxufVxcblxcbi50ZXh0LWNvbnRhaW5lcntcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAgNXZoIGF1dG87XFxuICBwYWRkaW5nLXRvcDogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGV4dHtcXG4gIGNvbG9yOndoaXRlc21va2U7XFxuICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IGNhbGMoMzJweCArIDR2dyk7XFxuICBhbmltYXRpb24tbmFtZTogZmxvYXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG4gIC1tb3otdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcbiAgLW1zLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG4gIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG59XFxuXFxuXFxuLmZsb2F0aW5ne1xcbiAgdGV4dC1zaGFkb3c6IDJweCA0cHggNHB4IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXJ7XFxuICBwYWRkaW5nLXRvcDogY2FsYygyMHB4ICsgMnZ3KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWJsYWNrKTtcXG4gIGZvbnQtc2l6ZTogY2FsYygzMnB4ICsgMXZ3KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnByb2plY3R7XFxuICB3aWR0aDoxMDB2dztcXG4gIGhlaWdodDoxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcblxcbi5kYXJre1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYmxhY2spO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGFyayAucHJvamVjdC1pbWcgLmltZy1jb250YWluZXIgaW1ne1xcbiAgYm94LXNoYWRvdzogMTVweCAxMHB4IDRweCByZ2IoMjIwLCAxMjcsIDExNSwgLjUpXFxufVxcblxcblxcbi5wcm9qZWN0LWltZ3tcXG4gIGZsZXg6IDEgMSAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbn1cXG4uaW1nLWNvbnRhaW5lcntcXG4gIHdpZHRoOjgwJTtcXG4gIGhlaWdodDphdXRvO1xcbiAgXFxufVxcblxcbi5pbWctY29udGFpbmVyIGltZ3tcXG4gIHdpZHRoOjEwMCU7XFxuICBib3gtc2hhZG93OiAtMTVweCAxMHB4IDRweCByZ2IoNDQsIDM2LCAxNTYsIC41KVxcbn1cXG5cXG4uZGV0YWlsc3tcXG4gIGZsZXg6IDEgMSAwJTtcXG4gIGdhcDo0LjV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbn1cXG5cXG4uZGVzY3tcXG4gIHdpZHRoOiA5MCU7XFxuICBmb250LXNpemU6IGNhbGMoMTJweCArIC42dncpO1xcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMTZweCArIDF2dyk7XFxuICBib3gtc2hhZG93OiAwcHggNnB4IDZweCBncmF5O1xcbiAgcGFkZGluZzogLjl2dztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnByb2plY3QtdGl0bGV7XFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIDJ2dyk7XFxufVxcblxcbi5pY29uLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJ2dztcXG59XFxuLmljb257XFxuICB3aWR0aDo1MHB4O1xcbn1cXG4uaWNvbiBpbWd7XFxuICB3aWR0aDoxMDAlXFxufVxcblxcbi50b29sc3tcXG4gIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgLjV2dyk7XFxufVxcbi50b29sLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJ2dztcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogODV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0IGgyIHtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxubWFyZ2luLWJvdHRvbTogdmFyKC0tYm90dG9tLW1hcmdpbi0yKTtcXG5mb250LXNpemU6IGNhbGMoMTZweCArIDJ2dyk7XFxufVxcblxcbi5jb250YWN0LWZvcm0tY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNDAuNzVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAuOTM4cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCB2YXIoLS1zZWNvbmRhcnktc2hhZG93KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWJsYWNrKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmZvcm0tY29udHJvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuXFxufVxcblxcbi5pbnB1dC1maWVsZCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbiNtZXNzYWdlIHtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcblxcbi5zdWJtaXQtYnRuOmhvdmVyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvb3RlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWJsYWNrKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgZ2FwOjE1cHg7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAudGV4dC1jb250YWluZXJ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogIGF1dG87XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgfVxcbiAgLnNoYXBle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLnByb2plY3R7XFxuICAgIGhlaWdodDogODV2aDtcXG4gIH1cXG4gIC5kYXJre1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxuICAuZGV0YWlsc3tcXG4gICAgZmxleDogMiAxIDAlO1xcbiAgfVxcbiAgLmltZy1jb250YWluZXJ7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuICAuY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLnByb2plY3R7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZGFya3tcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcbiAgLmRldGFpbHN7XFxuICAgIGZsZXg6IDEgMSAwJTtcXG4gIH1cXG4gIC5kZXNje1xcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuNnZ3KTtcXG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoMTZweCArIDEuNnZ3KTtcXG4gIH1cXG4gIC5pbWctY29udGFpbmVye1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbiAgLmltZy1jb250YWluZXIgaW1ne1xcbiAgICBib3gtc2hhZG93OiAtMTBweCA1cHggNHB4IHJnYig0NCwgMzYsIDE1NiwgLjUpXFxuICB9XFxuICAuZGFyayAucHJvamVjdC1pbWcgLmltZy1jb250YWluZXIgaW1ne1xcbiAgICBib3gtc2hhZG93OiAtMTBweCA1cHggNHB4IHJnYigyMjAsIDEyNywgMTE1LCAuNSlcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwi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YztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsOENBQThDO0VBQzlDLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUzs7QUFFWDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7O0FBR0E7QUFDQSxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLGVBQWU7QUFDZjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixRQUFRO0VBQ1IsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOzs7OztBQUtBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmlnaHRlb3VzJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG46cm9vdCB7XFxuICAgIC0tYmctYmxhY2s6ICMwYzBlMWE7XFxuICAgIC0tYmx1ZS1hYzogIzJjMjQ5YztcXG4gICAgLS1jb3BwZXItYWM6ICNjYjc0Njk7XFxuICAgIC0tZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmY7XFxuICAgIC0tbm9ybWFsLWZvbnQ6IDQwMDtcXG4gICAgLS1ib2xkLWZvbnQ6IDcwMDtcXG4gICAgLS1ib2xkZXItZm9udDogOTAwO1xcbiAgICAtLWJnLWNvbG9yOiAjZmNmY2ZjO1xcbiAgICAtLXByaW1hcnktY29sb3I6ICM0NzU2ZGY7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZmY3MjM1O1xcbiAgICAtLXByaW1hcnktc2hhZG93OiAjOGI4ZWFmO1xcbiAgICAtLXNlY29uZGFyeS1zaGFkb3c6ICNhMTdhNjk7XFxuICAgIC0tYm90dG9tLW1hcmdpbjogMC41cmVtO1xcbiAgICAtLWJvdHRvbS1tYXJnaW4tMjogMXJlbTtcXG4gICAgLS1saW5lLWhlaWdodDogMS43cmVtO1xcbiAgICAtLXRyYW5zaXRpb246IDAuM3M7XFxuICB9XFxuXFxuICAuc2hhcGV7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6NDBweDtcXG4gICAgbGVmdDotNjUwcHg7XFxuICAgIHdpZHRoOjgwMHB4O1xcbiAgICBoZWlnaHQ6ODAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMywgMTE2LCAxMDUsIC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czoxOTBweCA1MCUgOTBweCA1MCU7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTUwMDBtcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gIH1cXG4gIEBrZXlmcmFtZXMgcm90YXRle1xcbiAgICAwJXt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfVxcbiAgICA1MCV7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfVxcbiAgICAxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX1cXG4gIH1cXG4gIC5zZWNvbmR7XFxuICAgIGxlZnQ6LTcwMHB4O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE4MDAwbXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMywgMTE2LCAxMDUsIC41KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDQsIDM2LCAxNTYsIC41KTtcXG4gIH1cXG4gIFxcbiAgLnRoaXJke1xcbiAgICBsZWZ0OmNhbGMoMTAwdncgLSAxNTBweCk7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTUwMDBtcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAzLCAxMTYsIDEwNSwgLjUpO1xcbiAgXFxuICB9XFxuICAuZm91cnRoe1xcbiAgICBsZWZ0OmNhbGMoMTAwdncgLSAxMDBweCk7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTgwMDBtcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAzLCAxMTYsIDEwNSwgLjUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0NCwgMzYsIDE1NiwgLjUpO1xcbiAgXFxuICB9XFxuXFxuLmhlcm97XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYmxhY2spO1xcbiAgcGFkZGluZy10b3A6IDFweDtcXG59XFxuXFxuLnRleHQtY29udGFpbmVye1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46ICA1dmggYXV0bztcXG4gIHBhZGRpbmctdG9wOiAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogMXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZXh0e1xcbiAgY29sb3I6d2hpdGVzbW9rZTtcXG4gIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogY2FsYygzMnB4ICsgNHZ3KTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmbG9hdDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcbiAgLW1vei10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAxcyBsaW5lYXI7XFxuICAtbXMtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcbiAgLW8tdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcbn1cXG5cXG5cXG4uZmxvYXRpbmd7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDRweCA0cHggYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcntcXG4gIHBhZGRpbmctdG9wOiBjYWxjKDIwcHggKyAydncpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYmxhY2spO1xcbiAgZm9udC1zaXplOiBjYWxjKDMycHggKyAxdncpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gIHdpZHRoOjEwMHZ3O1xcbiAgaGVpZ2h0OjEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuLmRhcmt7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ibGFjayk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kYXJrIC5wcm9qZWN0LWltZyAuaW1nLWNvbnRhaW5lciBpbWd7XFxuICBib3gtc2hhZG93OiAxNXB4IDEwcHggNHB4IHJnYigyMjAsIDEyNywgMTE1LCAuNSlcXG59XFxuXFxuXFxuLnByb2plY3QtaW1ne1xcbiAgZmxleDogMSAxIDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcbi5pbWctY29udGFpbmVye1xcbiAgd2lkdGg6ODAlO1xcbiAgaGVpZ2h0OmF1dG87XFxuICBcXG59XFxuXFxuLmltZy1jb250YWluZXIgaW1ne1xcbiAgd2lkdGg6MTAwJTtcXG4gIGJveC1zaGFkb3c6IC0xNXB4IDEwcHggNHB4IHJnYig0NCwgMzYsIDE1NiwgLjUpXFxufVxcblxcbi5kZXRhaWxze1xcbiAgZmxleDogMSAxIDAlO1xcbiAgZ2FwOjQuNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcblxcbi5kZXNje1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgLjZ2dyk7XFxuICBsaW5lLWhlaWdodDogY2FsYygxNnB4ICsgMXZ3KTtcXG4gIGJveC1zaGFkb3c6IDBweCA2cHggNnB4IGdyYXk7XFxuICBwYWRkaW5nOiAuOXZ3O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZXtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMnZ3KTtcXG59XFxuXFxuLmljb24tY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnZ3O1xcbn1cXG4uaWNvbntcXG4gIHdpZHRoOjUwcHg7XFxufVxcbi5pY29uIGltZ3tcXG4gIHdpZHRoOjEwMCVcXG59XFxuXFxuLnRvb2xze1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAuNXZ3KTtcXG59XFxuLnRvb2wtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnZ3O1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QgaDIge1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5tYXJnaW4tYm90dG9tOiB2YXIoLS1ib3R0b20tbWFyZ2luLTIpO1xcbmZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMnZ3KTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybS1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA0MC43NXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMC45MzhyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHZhcigtLXNlY29uZGFyeS1zaGFkb3cpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYmxhY2spO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZm9ybS1jb250cm9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG5cXG59XFxuXFxuLmlucHV0LWZpZWxkIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuI21lc3NhZ2Uge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuXFxuLnN1Ym1pdC1idG46aG92ZXIge1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9vdGVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYmxhY2spO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICBnYXA6MTVweDtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIFxcbn1cXG5cXG5mb290ZXIgcCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC50ZXh0LWNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAgYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICB9XFxuICAuc2hhcGV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAucHJvamVjdHtcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgfVxcbiAgLmRhcmt7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG4gIC5kZXRhaWxze1xcbiAgICBmbGV4OiAyIDEgMCU7XFxuICB9XFxuICAuaW1nLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG4gIC5jb250YWN0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAucHJvamVjdHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5kYXJre1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxuICAuZGV0YWlsc3tcXG4gICAgZmxleDogMSAxIDAlO1xcbiAgfVxcbiAgLmRlc2N7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS42dncpO1xcbiAgICBsaW5lLWhlaWdodDogY2FsYygxNnB4ICsgMS42dncpO1xcbiAgfVxcbiAgLmltZy1jb250YWluZXJ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuICAuaW1nLWNvbnRhaW5lciBpbWd7XFxuICAgIGJveC1zaGFkb3c6IC0xMHB4IDVweCA0cHggcmdiKDQ0LCAzNiwgMTU2LCAuNSlcXG4gIH1cXG4gIC5kYXJrIC5wcm9qZWN0LWltZyAuaW1nLWNvbnRhaW5lciBpbWd7XFxuICAgIGJveC1zaGFkb3c6IC0xMHB4IDVweCA0cHggcmdiKDIyMCwgMTI3LCAxMTUsIC41KVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmZ1bmN0aW9uIGNvbnRhY3QoKXtcblxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEZvcm0uY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgY29udGFjdEZvcm0uaW5uZXJIVE1MID0gYDxoMj5HZXQgSW4gVG91Y2ggV2l0aCBNZTwvaDI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZm9ybS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZvcm1cIj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9mb3Jtc3ByZWUuaW8vZi94a25rZXF6elwiIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgbmFtZT1cInNlbmRlci1uYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIE5hbWVcIlxuICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWZpZWxkXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwic2VuZGVyLWVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIEVtYWlsXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1maWVsZFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgY29scz1cIjYwXCJcbiAgICAgICAgICAgICAgcm93cz1cIjEwXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIE1lc3NhZ2VcIlxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtZmllbGRcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcbiAgICAgICAgICAgIGlkPVwic3VibWl0LWJ0blwiXG4gICAgICAgICAgICBjbGFzcz1cInN1Ym1pdC1idG5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG5cbiAgICByZXR1cm4gY29udGFjdEZvcm07XG5cblxufVxuXG5mdW5jdGlvbiBmb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1RhbnplYjkyNzdcIiB0YXJnZXQ9J19ibGFuayc+XG4gICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1maWxsZWQvMzQ0L2ZmZmZmZi9naXRodWIucG5nXCIgYWx0PVwiR2l0aHViXCI+XG4gIDwvYT5cbiAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3RhbnplYi1jaG91ZGh1cnktNzIyOTAyMTQwL1wiIHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1maWxsZWQvMzQ0L2ZmZmZmZi9saW5rZWRpbi5wbmdcIiBhbHQ9XCJMaW5rZWRJblwiPlxuICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDxwPkRlc2lnbmVkIGFuZCBEZXZlbG9wZWQgYnkgVGFuemVlbSBYaGlkb3JpICZjb3B5OyBDb3B5cmlnaHQgMjAyMjwvcD5cbiAgYDtcbiAgIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCAge2NvbnRhY3QsIGZvb3Rlcn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwic2hhcGUgZmlyc3RcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2hhcGUgc2Vjb25kXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNoYXBlIHRoaXJkXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNoYXBlIGZvdXJ0aFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiIGlkPVwiaW50cm9cIj5IaSBJJ208L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIiBpZD1cImZ1bGxOYW1lXCI+VGFuemViIENob3VkaHVyeTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiIGlkPVwidGl0bGVcIj5XZWIgRGV2ZWxvcGVyPC9kaXY+XG4gICAgPC9kaXY+YDtcblxuICAgIFxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG5cbn1cblxuZnVuY3Rpb24gYWRkQW5pbWF0aW9uKCl7XG4gICAgbGV0IGludHJvID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnRybycpO1xuICAgIGxldCBmdWxsTmFtZSA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbE5hbWUnKTtcbiAgICBsZXQgdGl0bGUgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG4gICAgbGV0IGZsb2F0SW50cm8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIGludHJvLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0aW5nJyk7XG4gICAgfSwgMTAwMCk7XG4gICAgXG4gICAgbGV0IGZsb2F0TmFtZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgZnVsbE5hbWUuY2xhc3NMaXN0LmFkZCgnZmxvYXRpbmcnKVxuICAgIH0sIDE5MDApO1xuICAgIGxldCBmbG9hdFRpdGxlID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdmbG9hdGluZycpXG4gICAgICAgICBcbiAgICB9LCAyODAwKTtcbn1cblxuZXhwb3J0ICB7aGVhZGVyLCBhZGRBbmltYXRpb259IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgQWV0dGlkSW1nIGZyb20gJy4vYWV0dGlkLnBuZydcbmltcG9ydCBCbG9nSW1nIGZyb20gJy4vYmxvZy5wbmcnXG5pbXBvcnQgRXRjaGFTa2V0Y2hJbWcgZnJvbSAnLi9ldGNoYS1za2V0Y2gucG5nJ1xuaW1wb3J0IEV5ZVNweUltZyBmcm9tICcuL2V5ZXNweS5wbmcnXG5pbXBvcnQgTWFlZGl0dEltZyBmcm9tICcuL21hZWRpdHQucG5nJ1xuXG5mdW5jdGlvbiBwcm9qZWN0SGVhZGVyKCl7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkZXInKTtcblxuICBoZWFkZXIuaW5uZXJIVE1MID0gYDxoMT5Qcm9qZWN0czwvaDE+YDtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBldGNoYVNrZXRjaCgpe1xuICBjb25zdCBleWVTcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXllU3B5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnLCAnZGFyaycpO1xuXG4gIGV5ZVNweS5pbm5lckhUTUw9YCAgXG4gIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XG4gIDxoMSBjbGFzcz0ncHJvamVjdC10aXRsZSc+RXRjaC1hLXNrZXRjaDwvaDE+XG4gIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1RhbnplYjkyNzcvZXRjaC1hLXNrZXRjaFwiIHRhcmdldD0nX2JsYW5rJz5cbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLWZpbGxlZC8zNDQvZmZmZmZmL2dpdGh1Yi5wbmdcIiBhbHQ9XCJHaXRodWJcIj5cbiAgPC9hPlxuICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3RhbnplYjkyNzcuZ2l0aHViLmlvL2V0Y2gtYS1za2V0Y2gvXCIgIHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8zNDQvZmZmZmZmL2RvbWFpbi5wbmdcIiBhbHQ9XCJXZWJzaXRlXCI+XG4gICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzPVwiZGVzY1wiPkRlc2NyaXB0aW9uOkEgYnJvd3NlciB2ZXJzaW9uIG9mIHNvbWV0aGluZyBiZXR3ZWVuIGEgc2tldGNocGFkIGFuZCBhbiBFdGNoLUEtU2tldGNoLjwvcD5cbiAgICAgIDxwIGNsYXNzPVwidG9vbHNcIj5Ub29scyBVc2VkOjwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b29sLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9odG1sLTUtLXYxLnBuZ1wiIGFsdD1cIkhUTUxcIj4gXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9jc3MzLnBuZ1wiIGFsdD1cIkNTU1wiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvamF2YXNjcmlwdC0tdjEucG5nXCIgYWx0PVwiSmF2YVNjcmlwdFwiPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInByb2plY3QtaW1nXCI+XG4gICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtFdGNoYVNrZXRjaEltZ31cIiBhbHQ9XCJcIj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gXG5cbnJldHVybiBleWVTcHk7XG59XG5cblxuXG5mdW5jdGlvbiBleWVTcHkoKXtcbiAgICBjb25zdCBleWVTcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBleWVTcHkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gICAgZXllU3B5LmlubmVySFRNTD1gICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbWdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBzcmM9XCIke0V5ZVNweUltZ31cIiBhbHQ9XCJcIj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XG4gICAgPGgxIGNsYXNzPSdwcm9qZWN0LXRpdGxlJz5FeWUgU3B5PC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiaWNvbi1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVGFuemViOTI3Ny9leWUtc3B5XCIgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1maWxsZWQvMzQ0L2dpdGh1Yi5wbmdcIiBhbHQ9XCJHaXRodWJcIj5cbiAgICA8L2E+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3RhbnplYjkyNzcuZ2l0aHViLmlvL2V5ZS1zcHkvXCIgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8zNDQvZG9tYWluLnBuZ1wiIGFsdD1cIldlYnNpdGVcIj5cbiAgICA8L2E+XG4gIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzPVwiZGVzY1wiPkRlc2NyaXB0aW9uOiBQaG90byB0YWdnaW5nIGdhbWUgZmVhdHVyaW5nIHRoZSBmaW5hbCBpbWFnZSBmcm9tIDxhIGhyZWY9XCJodHRwczovL3d3dy5yZWRkaXQuY29tL3IvcGxhY2UvY29tbWVudHMvdHdmdDFxL2Z1bGxfc2NyZWVuc2hvdF9vZl9ycGxhY2VfMjAyMi9cIj5yL1BsYWNlPC9hPjwvcD5cbiAgICA8cCBjbGFzcz1cInRvb2xzXCI+VG9vbHMgVXNlZDo8L3A+XG4gICAgPGRpdiBjbGFzcz1cInRvb2wtY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2NzczMucG5nXCIgYWx0PVwiQ1NTXCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9qYXZhc2NyaXB0LS12MS5wbmdcIiBhbHQ9XCJKYXZhU2NyaXB0XCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC93ZWJwYWNrLnBuZ1wiIGFsdD1cIldlYnBhY2tcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2dvb2dsZS1maXJlYmFzZS1jb25zb2xlLnBuZ1wiIGFsdD1cIkZpcmViYXNlXCI+XG4gIDwvZGl2PlxuICA8L2Rpdj5gXG5cbiAgcmV0dXJuIGV5ZVNweTtcbn1cblxuZnVuY3Rpb24gYWV0dGlkKCl7XG4gIGNvbnN0IGV5ZVNweSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBleWVTcHkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdkYXJrJyk7XG5cbiAgZXllU3B5LmlubmVySFRNTD1gICBcbiAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgPGgxIGNsYXNzPSdwcm9qZWN0LXRpdGxlJz5BZXR0aWQ8L2gxPlxuICA8ZGl2IGNsYXNzPVwiaWNvbi1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9UYW56ZWI5Mjc3L2FldHRpZC13ZWJzaXRlXCIgdGFyZ2V0PSdfYmxhbmsnPlxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MtZmlsbGVkLzM0NC9mZmZmZmYvZ2l0aHViLnBuZ1wiIGFsdD1cIkdpdGh1YlwiPlxuICA8L2E+XG4gICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGFuemViOTI3Ny5naXRodWIuaW8vYWV0dGlkLXdlYnNpdGUvXCIgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzM0NC9mZmZmZmYvZG9tYWluLnBuZ1wiIGFsdD1cIldlYnNpdGVcIj5cbiAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3M9XCJkZXNjXCI+RGVzY3JpcHRpb246IFNvY2lhbCBNZWRpYSBzaXRlIGZvciBwaG90b3Mgb2YgZm9vZCwgZGlzaGVzLCBhbmQgcmVjaXBlczwvcD5cbiAgICAgIDxwIGNsYXNzPVwidG9vbHNcIj5Ub29scyBVc2VkOjwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b29sLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvY3NzMy5wbmdcIiBhbHQ9XCJDU1NcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2phdmFzY3JpcHQtLXYxLnBuZ1wiIGFsdD1cIkphdmFTY3JpcHRcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vb2ZmaWNlLzM0NC9yZWFjdC5wbmdcIiBhbHQ9XCJSZWFjdFwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvZ29vZ2xlLWZpcmViYXNlLWNvbnNvbGUucG5nXCIgYWx0PVwiRmlyZWJhc2VcIj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7QWV0dGlkSW1nfVwiIGFsdD1cIlwiPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmBcblxucmV0dXJuIGV5ZVNweTtcbn1cblxuXG5mdW5jdGlvbiBibG9nKCl7XG4gIGNvbnN0IGV5ZVNweSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBleWVTcHkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gIGV5ZVNweS5pbm5lckhUTUw9YCAgPGRpdiBjbGFzcz1cInByb2plY3QtaW1nXCI+XG4gIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgPGltZyBzcmM9XCIke0Jsb2dJbWd9XCIgYWx0PVwiXCI+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxuICA8aDEgY2xhc3M9J3Byb2plY3QtdGl0bGUnPkJsb2cgQXBwPC9oMT5cbiAgPGRpdiBjbGFzcz1cImljb24tY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVGFuemViOTI3Ny9ibG9nLWFwcFwiIHRhcmdldD0nX2JsYW5rJz5cbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLWZpbGxlZC8zNDQvZ2l0aHViLnBuZ1wiIGFsdD1cIkdpdGh1YlwiPlxuICA8L2E+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJpY29uXCI+XG4gIDxhIGhyZWY9XCJodHRwczovL3RhbnplYjkyNzcuZ2l0aHViLmlvL2Jsb2ctYXBwL1wiIHRhcmdldD0nX2JsYW5rJz5cbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzM0NC9kb21haW4ucG5nXCIgYWx0PVwiV2Vic2l0ZVwiPlxuICA8L2E+XG48L2Rpdj5cbiAgPC9kaXY+XG4gIDxwIGNsYXNzPVwiZGVzY1wiPkRlc2NyaXB0aW9uOiBUaGUgQmxvZyBhcHAgaXMgYSB2aXN1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGJsb2cgYXBpIHdvcmtpbmcgYXMgaW50ZW5kZWQsIGFsbG93aW5nIHVzZXJzIHRvIHZpZXcgYW5kIGNvbW1lbnQgb24gcHVibGlzaGVkIHBvc3RzLjwvcD5cbiAgPHAgY2xhc3M9XCJ0b29sc1wiPlRvb2xzIFVzZWQ6PC9wPlxuICA8ZGl2IGNsYXNzPVwidG9vbC1jb250YWluZXJcIj5cbjxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9jc3MzLnBuZ1wiIGFsdD1cIkNTU1wiPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvamF2YXNjcmlwdC0tdjEucG5nXCIgYWx0PVwiSmF2YVNjcmlwdFwiPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vb2ZmaWNlLzM0NC9yZWFjdC5wbmdcIiBhbHQ9XCJSZWFjdFwiPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvbm9kZWpzLnBuZ1wiIGFsdD1cIk5vZGVcIj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L21vbmdvZGIucG5nXCIgYWx0PVwiTW9uZ29cIj5cbjwvZGl2PlxuPC9kaXY+YFxuXG5yZXR1cm4gZXllU3B5O1xufVxuZnVuY3Rpb24gbWFlZGl0dCgpe1xuICBjb25zdCBleWVTcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXllU3B5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnLCAnZGFyaycpO1xuXG4gIGV5ZVNweS5pbm5lckhUTUw9YCAgXG4gIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XG4gIDxoMSBjbGFzcz0ncHJvamVjdC10aXRsZSc+TWFlZGl0dDwvaDE+XG4gIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1RhbnplYjkyNzcvbWFlZGl0dC1hcHBcIiB0YXJnZXQ9J19ibGFuayc+XG4gICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1maWxsZWQvMzQ0L2ZmZmZmZi9naXRodWIucG5nXCIgYWx0PVwiR2l0aHViXCI+XG4gIDwvYT5cbiAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly90YW56ZWI5Mjc3LmdpdGh1Yi5pby9tYWVkaXR0LWFwcC9cIiB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMzQ0L2ZmZmZmZi9kb21haW4ucG5nXCIgYWx0PVwiV2Vic2l0ZVwiPlxuICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICA8cCBjbGFzcz1cImRlc2NcIj5EZXNjcmlwdGlvbjogU29jaWFsIE1lZGlhIHNpdGUgdGhhdCBhbGxvd3MgdXNlcnMgdG8gc2lnbiB1cCwgc2lnbiBpbiwgc3VibWl0IHBvc3RzLCBsaWtlIHBvc3RzLCBjb21tZW50IG9uIHBvc3RzLCBhbmQgYWRkIGZyaWVuZHM8L3A+XG4gICAgICA8cCBjbGFzcz1cInRvb2xzXCI+VG9vbHMgVXNlZDo8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2NzczMucG5nXCIgYWx0PVwiQ1NTXCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9qYXZhc2NyaXB0LS12MS5wbmdcIiBhbHQ9XCJKYXZhU2NyaXB0XCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9vZmZpY2UvMzQ0L3JlYWN0LnBuZ1wiIGFsdD1cIlJlYWN0XCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9ub2RlanMucG5nXCIgYWx0PVwiTm9kZVwiPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvbW9uZ29kYi5wbmdcIiBhbHQ9XCJNb25nb1wiPlxuICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7TWFlZGl0dEltZ31cIiBhbHQ9XCJcIj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gXG5cbnJldHVybiBleWVTcHk7XG59XG5cbmV4cG9ydCB7ZXllU3B5LCBhZXR0aWQsIHByb2plY3RIZWFkZXIsIGV0Y2hhU2tldGNoLCBibG9nLCBtYWVkaXR0fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge2hlYWRlciwgYWRkQW5pbWF0aW9ufSBmcm9tIFwiLi9oZWFkXCI7XG5pbXBvcnQgeyBleWVTcHksIGFldHRpZCwgcHJvamVjdEhlYWRlciwgZXRjaGFTa2V0Y2gsIGJsb2csIG1hZWRpdHQgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHtjb250YWN0LCBmb290ZXJ9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLmFwcGVuZChoZWFkZXIoKSwgcHJvamVjdEhlYWRlcigpLCBldGNoYVNrZXRjaCgpLCBleWVTcHkoKSwgYWV0dGlkKCksIGJsb2coKSwgbWFlZGl0dCgpLCBjb250YWN0KCksIGZvb3RlcigpKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChfZXZlbnQpID0+IHtcbiAgICBhZGRBbmltYXRpb24oKTtcbiAgfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9