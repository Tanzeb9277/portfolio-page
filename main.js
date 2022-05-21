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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg-black: #0c0e1a;\n    --blue-ac: #2c249c;\n    --copper-ac: #cb7469;\n    --font-family: \"Roboto\", sans-serf;\n    --normal-font: 400;\n    --bold-font: 700;\n    --bolder-font: 900;\n    --bg-color: #fcfcfc;\n    --primary-color: #4756df;\n    --secondary-color: #ff7235;\n    --primary-shadow: #8b8eaf;\n    --secondary-shadow: #a17a69;\n    --bottom-margin: 0.5rem;\n    --bottom-margin-2: 1rem;\n    --line-height: 1.7rem;\n    --transition: 0.3s;\n  }\n\n  .shape{\n    position:absolute;\n    top:40px;\n    left:-650px;\n    width:800px;\n    height:800px;\n    background-color:rgb(203, 116, 105, .5);\n    border-radius:190px 50% 90px 50%;\n    animation-name: rotate;\n    animation-duration: 15000ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n  @keyframes rotate{\n    0%{transform:rotate(0deg)}\n    50%{transform:rotate(180deg)}\n    100%{transform:rotate(360deg)}\n  }\n  .second{\n    left:-700px;\n    animation-duration: 18000ms;\n    background-color:rgb(203, 116, 105, .5);\n    background-color:rgb(44, 36, 156, .5);\n  }\n  \n  .third{\n    left:calc(100vw - 150px);\n    animation-duration: 15000ms;\n    background-color:rgb(203, 116, 105, .5);\n  \n  }\n  .fourth{\n    left:calc(100vw - 100px);\n    animation-duration: 18000ms;\n    background-color:rgb(203, 116, 105, .5);\n    background-color:rgb(44, 36, 156, .5);\n  \n  }\n\n.hero{\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--bg-black);\n  padding-top: 1px;\n}\n\n.text-container{\n  text-align:center;\n  height: 90%;\n  width: 90%;\n  margin:  5vh auto;\n  padding-top: 10%;\n  background-color: whitesmoke;\n  padding: 1px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  position: relative;\n}\n.text{\n  color:whitesmoke;\n  font-family: 'Righteous', cursive;\n  font-size: calc(32px + 4vw);\n  animation-name: float;\n  -webkit-transition: text-shadow 1s linear;\n  -moz-transition: text-shadow 1s linear;\n  -ms-transition: text-shadow 1s linear;\n  -o-transition: text-shadow 1s linear;\n  transition: text-shadow 1s linear;\n}\n\n\n.floating{\n  text-shadow: 2px 4px 4px black;\n}\n\n.project-header{\n  padding-top: calc(20px + 2vw);\n  background-color: whitesmoke;\n  font-size: calc(32px + 1vw);\n  text-align: center;\n  width: 100vw;\n  font-family: 'Ubuntu', sans-serif;\n}\n\n.project{\n  width:100vw;\n  height:100vh;\n  background-color:whitesmoke;\n  display:flex;\n  z-index: 1;\n  position: relative;\n  padding: 10px 0;\n}\n\n.dark{\n  background-color: var(--bg-black);\n  color: white;\n}\n\n.dark .project-img .img-container img{\n  box-shadow: 15px 10px 4px rgb(220, 127, 115, .5)\n}\n\n\n.project-img{\n  flex: 1 1 0%;\n  display: flex;\n  justify-content:center;\n  align-items:center;\n}\n.img-container{\n  width:80%;\n  height:auto;\n  \n}\n\n.img-container img{\n  width:100%;\n  box-shadow: -15px 10px 4px rgb(44, 36, 156, .5)\n}\n\n.details{\n  flex: 1 1 0%;\n  gap:4.5vh;\n  display: flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n}\n\n.desc{\n  width: 90%;\n  font-size: calc(12px + .6vw);\n  line-height: calc(16px + 1vw);\n  box-shadow: 0px 6px 6px gray;\n  padding: .9vw;\n  font-style: italic;\n}\n\n.project-title{\n  font-size: calc(16px + 2vw);\n}\n\n.icon-container{\n  display: flex;\n  gap: 2vw;\n}\n.icon{\n  width:50px;\n}\n.icon img{\n  width:100%\n}\n\n.tools{\n  font-size: calc(16px + .5vw);\n}\n.tool-container{\n  display: flex;\n  gap: 2vw;\n}\n\n.contact {\n  display: inline-block;\n  width: 100vw;\n  padding-top: 2rem;\n  background-color: white;\n  height: 85vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.contact h2 {\ntext-align: center;\nmargin-bottom: var(--bottom-margin-2);\nfont-size: calc(16px + 2vw);\n}\n\n.contact-form-container {\n  max-width: 40.75rem;\n  margin: 0 auto;\n  padding: 0.938rem;\n  border-radius: 5px;\n  box-shadow: 0 3px 10px var(--secondary-shadow);\n  background-color: var(--bg-black);\n  color: white;\n}\n.form-control {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-weight: 600;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n}\n\n.input-field {\n  height: 30px;\n}\n\n#message {\n  height: 150px;\n}\n\n\n.submit-btn:hover {\nbackground-color: var(--primary-color);\nborder: 2px solid var(--primary-color);\ncursor: pointer;\n}\n\nfooter{\n  background-color: var(--bg-black);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 15vh;\n  gap:15px;\n  padding: 10px 0;\n  \n}\n\nfooter p {\n  padding: 10px;\n  text-align: center;\n}\n\n\n\n\n@media (max-width: 480px) {\n  .text-container{\n    height: 100%;\n    width: 100%;\n    margin:  auto;\n    padding-top: 0;\n  }\n  .shape{\n    display: none;\n  }\n  .project{\n    height: 85vh;\n  }\n  .dark{\n    flex-direction: column-reverse;\n  }\n  .details{\n    flex: 2 1 0%;\n  }\n  .img-container{\n    width: 90%;\n  }\n  .contact-form-container {\n    width: 20rem;\n  }\n}\n@media (max-width: 1024px) {\n  .project{\n    flex-direction: column;\n  }\n  .dark{\n    flex-direction: column-reverse;\n  }\n  .details{\n    flex: 1 1 0%;\n  }\n  .desc{\n    font-size: calc(12px + 1.6vw);\n    line-height: calc(16px + 1.6vw);\n  }\n  .img-container{\n    width: 80%;\n  }\n  .img-container img{\n    box-shadow: -10px 5px 4px rgb(44, 36, 156, .5)\n  }\n  .dark .project-img .img-container img{\n    box-shadow: -10px 5px 4px rgb(220, 127, 115, .5)\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAIA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;IACpB,kCAAkC;IAClC,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,wBAAwB;IACxB,0BAA0B;IAC1B,yBAAyB;IACzB,2BAA2B;IAC3B,uBAAuB;IACvB,uBAAuB;IACvB,qBAAqB;IACrB,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,QAAQ;IACR,WAAW;IACX,WAAW;IACX,YAAY;IACZ,uCAAuC;IACvC,gCAAgC;IAChC,sBAAsB;IACtB,2BAA2B;IAC3B,mCAAmC;IACnC,iCAAiC;EACnC;EACA;IACE,GAAG,sBAAsB;IACzB,IAAI,wBAAwB;IAC5B,KAAK,wBAAwB;EAC/B;EACA;IACE,WAAW;IACX,2BAA2B;IAC3B,uCAAuC;IACvC,qCAAqC;EACvC;;EAEA;IACE,wBAAwB;IACxB,2BAA2B;IAC3B,uCAAuC;;EAEzC;EACA;IACE,wBAAwB;IACxB,2BAA2B;IAC3B,uCAAuC;IACvC,qCAAqC;;EAEvC;;AAEF;EACE,YAAY;EACZ,aAAa;EACb,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,gBAAgB;EAChB,4BAA4B;EAC5B,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,iCAAiC;EACjC,2BAA2B;EAC3B,qBAAqB;EACrB,yCAAyC;EACzC,sCAAsC;EACtC,qCAAqC;EACrC,oCAAoC;EACpC,iCAAiC;AACnC;;;AAGA;EACE,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,4BAA4B;EAC5B,2BAA2B;EAC3B,kBAAkB;EAClB,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE;AACF;;;AAGA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,SAAS;EACT,WAAW;;AAEb;;AAEA;EACE,UAAU;EACV;AACF;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,aAAa;EACb,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,4BAA4B;EAC5B,6BAA6B;EAC7B,4BAA4B;EAC5B,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,UAAU;AACZ;AACA;EACE;AACF;;AAEA;EACE,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;AACA,kBAAkB;AAClB,qCAAqC;AACrC,2BAA2B;AAC3B;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,8CAA8C;EAC9C,iCAAiC;EACjC,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;;AAEX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;;AAGA;AACA,sCAAsC;AACtC,sCAAsC;AACtC,eAAe;AACf;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,QAAQ;EACR,eAAe;;AAEjB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;;;;AAKA;EACE;IACE,YAAY;IACZ,WAAW;IACX,aAAa;IACb,cAAc;EAChB;EACA;IACE,aAAa;EACf;EACA;IACE,YAAY;EACd;EACA;IACE,8BAA8B;EAChC;EACA;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;EACA;IACE,YAAY;EACd;AACF;AACA;EACE;IACE,sBAAsB;EACxB;EACA;IACE,8BAA8B;EAChC;EACA;IACE,YAAY;EACd;EACA;IACE,6BAA6B;IAC7B,+BAA+B;EACjC;EACA;IACE,UAAU;EACZ;EACA;IACE;EACF;EACA;IACE;EACF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');\n\n\n:root {\n    --bg-black: #0c0e1a;\n    --blue-ac: #2c249c;\n    --copper-ac: #cb7469;\n    --font-family: \"Roboto\", sans-serf;\n    --normal-font: 400;\n    --bold-font: 700;\n    --bolder-font: 900;\n    --bg-color: #fcfcfc;\n    --primary-color: #4756df;\n    --secondary-color: #ff7235;\n    --primary-shadow: #8b8eaf;\n    --secondary-shadow: #a17a69;\n    --bottom-margin: 0.5rem;\n    --bottom-margin-2: 1rem;\n    --line-height: 1.7rem;\n    --transition: 0.3s;\n  }\n\n  .shape{\n    position:absolute;\n    top:40px;\n    left:-650px;\n    width:800px;\n    height:800px;\n    background-color:rgb(203, 116, 105, .5);\n    border-radius:190px 50% 90px 50%;\n    animation-name: rotate;\n    animation-duration: 15000ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n  @keyframes rotate{\n    0%{transform:rotate(0deg)}\n    50%{transform:rotate(180deg)}\n    100%{transform:rotate(360deg)}\n  }\n  .second{\n    left:-700px;\n    animation-duration: 18000ms;\n    background-color:rgb(203, 116, 105, .5);\n    background-color:rgb(44, 36, 156, .5);\n  }\n  \n  .third{\n    left:calc(100vw - 150px);\n    animation-duration: 15000ms;\n    background-color:rgb(203, 116, 105, .5);\n  \n  }\n  .fourth{\n    left:calc(100vw - 100px);\n    animation-duration: 18000ms;\n    background-color:rgb(203, 116, 105, .5);\n    background-color:rgb(44, 36, 156, .5);\n  \n  }\n\n.hero{\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--bg-black);\n  padding-top: 1px;\n}\n\n.text-container{\n  text-align:center;\n  height: 90%;\n  width: 90%;\n  margin:  5vh auto;\n  padding-top: 10%;\n  background-color: whitesmoke;\n  padding: 1px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  position: relative;\n}\n.text{\n  color:whitesmoke;\n  font-family: 'Righteous', cursive;\n  font-size: calc(32px + 4vw);\n  animation-name: float;\n  -webkit-transition: text-shadow 1s linear;\n  -moz-transition: text-shadow 1s linear;\n  -ms-transition: text-shadow 1s linear;\n  -o-transition: text-shadow 1s linear;\n  transition: text-shadow 1s linear;\n}\n\n\n.floating{\n  text-shadow: 2px 4px 4px black;\n}\n\n.project-header{\n  padding-top: calc(20px + 2vw);\n  background-color: whitesmoke;\n  font-size: calc(32px + 1vw);\n  text-align: center;\n  width: 100vw;\n  font-family: 'Ubuntu', sans-serif;\n}\n\n.project{\n  width:100vw;\n  height:100vh;\n  background-color:whitesmoke;\n  display:flex;\n  z-index: 1;\n  position: relative;\n  padding: 10px 0;\n}\n\n.dark{\n  background-color: var(--bg-black);\n  color: white;\n}\n\n.dark .project-img .img-container img{\n  box-shadow: 15px 10px 4px rgb(220, 127, 115, .5)\n}\n\n\n.project-img{\n  flex: 1 1 0%;\n  display: flex;\n  justify-content:center;\n  align-items:center;\n}\n.img-container{\n  width:80%;\n  height:auto;\n  \n}\n\n.img-container img{\n  width:100%;\n  box-shadow: -15px 10px 4px rgb(44, 36, 156, .5)\n}\n\n.details{\n  flex: 1 1 0%;\n  gap:4.5vh;\n  display: flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n}\n\n.desc{\n  width: 90%;\n  font-size: calc(12px + .6vw);\n  line-height: calc(16px + 1vw);\n  box-shadow: 0px 6px 6px gray;\n  padding: .9vw;\n  font-style: italic;\n}\n\n.project-title{\n  font-size: calc(16px + 2vw);\n}\n\n.icon-container{\n  display: flex;\n  gap: 2vw;\n}\n.icon{\n  width:50px;\n}\n.icon img{\n  width:100%\n}\n\n.tools{\n  font-size: calc(16px + .5vw);\n}\n.tool-container{\n  display: flex;\n  gap: 2vw;\n}\n\n.contact {\n  display: inline-block;\n  width: 100vw;\n  padding-top: 2rem;\n  background-color: white;\n  height: 85vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.contact h2 {\ntext-align: center;\nmargin-bottom: var(--bottom-margin-2);\nfont-size: calc(16px + 2vw);\n}\n\n.contact-form-container {\n  max-width: 40.75rem;\n  margin: 0 auto;\n  padding: 0.938rem;\n  border-radius: 5px;\n  box-shadow: 0 3px 10px var(--secondary-shadow);\n  background-color: var(--bg-black);\n  color: white;\n}\n.form-control {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-weight: 600;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n}\n\n.input-field {\n  height: 30px;\n}\n\n#message {\n  height: 150px;\n}\n\n\n.submit-btn:hover {\nbackground-color: var(--primary-color);\nborder: 2px solid var(--primary-color);\ncursor: pointer;\n}\n\nfooter{\n  background-color: var(--bg-black);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 15vh;\n  gap:15px;\n  padding: 10px 0;\n  \n}\n\nfooter p {\n  padding: 10px;\n  text-align: center;\n}\n\n\n\n\n@media (max-width: 480px) {\n  .text-container{\n    height: 100%;\n    width: 100%;\n    margin:  auto;\n    padding-top: 0;\n  }\n  .shape{\n    display: none;\n  }\n  .project{\n    height: 85vh;\n  }\n  .dark{\n    flex-direction: column-reverse;\n  }\n  .details{\n    flex: 2 1 0%;\n  }\n  .img-container{\n    width: 90%;\n  }\n  .contact-form-container {\n    width: 20rem;\n  }\n}\n@media (max-width: 1024px) {\n  .project{\n    flex-direction: column;\n  }\n  .dark{\n    flex-direction: column-reverse;\n  }\n  .details{\n    flex: 1 1 0%;\n  }\n  .desc{\n    font-size: calc(12px + 1.6vw);\n    line-height: calc(16px + 1.6vw);\n  }\n  .img-container{\n    width: 80%;\n  }\n  .img-container img{\n    box-shadow: -10px 5px 4px rgb(44, 36, 156, .5)\n  }\n  .dark .project-img .img-container img{\n    box-shadow: -10px 5px 4px rgb(220, 127, 115, .5)\n  }\n}"],"sourceRoot":""}]);
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
  <a href="">
    <img src="https://img.icons8.com/ios-filled/344/ffffff/github.png" alt="Github">
  </a>
    </div>
      <div class="icon">
      <a href="">
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
        <div class="text" id="fullName">Tanzeem Xhidori</div>
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
/* harmony export */   "eyeSpy": () => (/* binding */ eyeSpy),
/* harmony export */   "projectHeader": () => (/* binding */ projectHeader)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function projectHeader(){
  const header = document.createElement('div');
  header.classList.add('project-header');

  header.innerHTML = `<h1>Projects</h1>`;

  return header;
}

function eyeSpy(){
    const eyeSpy = document.createElement('div');
    eyeSpy.classList.add('project');

    eyeSpy.innerHTML=`  <div class="project-img">
    <div class="img-container">
      <img src="https://preview.redd.it/7upo1h574o091.jpg?width=640&crop=smart&auto=webp&s=c5db2135237a7243bc59adb02d74027d235980d1" alt="">
    </div>
  </div>
  <div class="details">
    <h1 class='project-title'>Eye Spy</h1>
    <div class="icon-container">
    <div class="icon">
    <a href="">
      <img src="https://img.icons8.com/ios-filled/344/github.png" alt="Github">
    </a>
  </div>
  <div class="icon">
    <a href="">
      <img src="https://img.icons8.com/ios/344/domain.png" alt="Github">
    </a>
  </div>
    </div>
    <p class="desc">Description: Photo tagging game featuring the final image from <a href="">r/Place</a></p>
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
  <a href="">
    <img src="https://img.icons8.com/ios-filled/344/ffffff/github.png" alt="Github">
  </a>
    </div>
      <div class="icon">
      <a href="">
        <img src="https://img.icons8.com/ios/344/ffffff/domain.png" alt="Website">
      </a>
      </div>
    </div>
      <p class="desc">Description: Social Media site for photos of food, dishes, and recipes</p>
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
      <img src="https://preview.redd.it/6qkok2ya9n091.png?width=960&crop=smart&auto=webp&s=1f9965d274243a5bf73e6aa49c72117ce5e2d72f" alt="">
    </div>
  </div>
`

return eyeSpy;
}



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





  document.getElementById('root').append((0,_head__WEBPACK_IMPORTED_MODULE_0__.header)(), (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectHeader)(), (0,_projects__WEBPACK_IMPORTED_MODULE_1__.eyeSpy)(), (0,_projects__WEBPACK_IMPORTED_MODULE_1__.aettid)(), (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)(), (0,_contact__WEBPACK_IMPORTED_MODULE_2__.footer)());

  window.addEventListener('DOMContentLoaded', (_event) => {
    (0,_head__WEBPACK_IMPORTED_MODULE_0__.addAnimation)();
  });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SDtBQUN2SCw2SEFBNkg7QUFDN0g7QUFDQSxpREFBaUQsMEJBQTBCLHlCQUF5QiwyQkFBMkIsMkNBQTJDLHlCQUF5Qix1QkFBdUIseUJBQXlCLDBCQUEwQiwrQkFBK0IsaUNBQWlDLGdDQUFnQyxrQ0FBa0MsOEJBQThCLDhCQUE4Qiw0QkFBNEIseUJBQXlCLEtBQUssYUFBYSx3QkFBd0IsZUFBZSxrQkFBa0Isa0JBQWtCLG1CQUFtQiw4Q0FBOEMsdUNBQXVDLDZCQUE2QixrQ0FBa0MsMENBQTBDLHdDQUF3QyxLQUFLLHNCQUFzQixTQUFTLHVCQUF1QixVQUFVLHlCQUF5QixXQUFXLHlCQUF5QixLQUFLLFlBQVksa0JBQWtCLGtDQUFrQyw4Q0FBOEMsNENBQTRDLEtBQUssZUFBZSwrQkFBK0Isa0NBQWtDLDhDQUE4QyxTQUFTLFlBQVksK0JBQStCLGtDQUFrQyw4Q0FBOEMsNENBQTRDLFNBQVMsVUFBVSxpQkFBaUIsa0JBQWtCLHNDQUFzQyxxQkFBcUIsR0FBRyxvQkFBb0Isc0JBQXNCLGdCQUFnQixlQUFlLHNCQUFzQixxQkFBcUIsaUNBQWlDLG1CQUFtQixrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsZUFBZSx1QkFBdUIsR0FBRyxRQUFRLHFCQUFxQixzQ0FBc0MsZ0NBQWdDLDBCQUEwQiw4Q0FBOEMsMkNBQTJDLDBDQUEwQyx5Q0FBeUMsc0NBQXNDLEdBQUcsZ0JBQWdCLG1DQUFtQyxHQUFHLG9CQUFvQixrQ0FBa0MsaUNBQWlDLGdDQUFnQyx1QkFBdUIsaUJBQWlCLHNDQUFzQyxHQUFHLGFBQWEsZ0JBQWdCLGlCQUFpQixnQ0FBZ0MsaUJBQWlCLGVBQWUsdUJBQXVCLG9CQUFvQixHQUFHLFVBQVUsc0NBQXNDLGlCQUFpQixHQUFHLDBDQUEwQyx1REFBdUQsbUJBQW1CLGlCQUFpQixrQkFBa0IsMkJBQTJCLHVCQUF1QixHQUFHLGlCQUFpQixjQUFjLGdCQUFnQixPQUFPLHVCQUF1QixlQUFlLHNEQUFzRCxhQUFhLGlCQUFpQixjQUFjLGtCQUFrQiwwQkFBMEIsdUJBQXVCLDJCQUEyQixHQUFHLFVBQVUsZUFBZSxpQ0FBaUMsa0NBQWtDLGlDQUFpQyxrQkFBa0IsdUJBQXVCLEdBQUcsbUJBQW1CLGdDQUFnQyxHQUFHLG9CQUFvQixrQkFBa0IsYUFBYSxHQUFHLFFBQVEsZUFBZSxHQUFHLFlBQVksaUJBQWlCLFdBQVcsaUNBQWlDLEdBQUcsa0JBQWtCLGtCQUFrQixhQUFhLEdBQUcsY0FBYywwQkFBMEIsaUJBQWlCLHNCQUFzQiw0QkFBNEIsaUJBQWlCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLEdBQUcsaUJBQWlCLHFCQUFxQix3Q0FBd0MsOEJBQThCLEdBQUcsNkJBQTZCLHdCQUF3QixtQkFBbUIsc0JBQXNCLHVCQUF1QixtREFBbUQsc0NBQXNDLGlCQUFpQixHQUFHLGlCQUFpQixrQkFBa0IsMkJBQTJCLGNBQWMscUJBQXFCLEdBQUcsVUFBVSxrQkFBa0IsMkJBQTJCLGNBQWMsS0FBSyxrQkFBa0IsaUJBQWlCLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyx5QkFBeUIseUNBQXlDLHlDQUF5QyxrQkFBa0IsR0FBRyxXQUFXLHNDQUFzQyxpQkFBaUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGlCQUFpQixhQUFhLG9CQUFvQixPQUFPLGNBQWMsa0JBQWtCLHVCQUF1QixHQUFHLHFDQUFxQyxvQkFBb0IsbUJBQW1CLGtCQUFrQixvQkFBb0IscUJBQXFCLEtBQUssV0FBVyxvQkFBb0IsS0FBSyxhQUFhLG1CQUFtQixLQUFLLFVBQVUscUNBQXFDLEtBQUssYUFBYSxtQkFBbUIsS0FBSyxtQkFBbUIsaUJBQWlCLEtBQUssNkJBQTZCLG1CQUFtQixLQUFLLEdBQUcsOEJBQThCLGFBQWEsNkJBQTZCLEtBQUssVUFBVSxxQ0FBcUMsS0FBSyxhQUFhLG1CQUFtQixLQUFLLFVBQVUsb0NBQW9DLHNDQUFzQyxLQUFLLG1CQUFtQixpQkFBaUIsS0FBSyx1QkFBdUIseURBQXlELDBDQUEwQywyREFBMkQsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLGlCQUFpQixrQkFBa0Isa0JBQWtCLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLHdHQUF3Ryx1RkFBdUYsYUFBYSwwQkFBMEIseUJBQXlCLDJCQUEyQiwyQ0FBMkMseUJBQXlCLHVCQUF1Qix5QkFBeUIsMEJBQTBCLCtCQUErQixpQ0FBaUMsZ0NBQWdDLGtDQUFrQyw4QkFBOEIsOEJBQThCLDRCQUE0Qix5QkFBeUIsS0FBSyxhQUFhLHdCQUF3QixlQUFlLGtCQUFrQixrQkFBa0IsbUJBQW1CLDhDQUE4Qyx1Q0FBdUMsNkJBQTZCLGtDQUFrQywwQ0FBMEMsd0NBQXdDLEtBQUssc0JBQXNCLFNBQVMsdUJBQXVCLFVBQVUseUJBQXlCLFdBQVcseUJBQXlCLEtBQUssWUFBWSxrQkFBa0Isa0NBQWtDLDhDQUE4Qyw0Q0FBNEMsS0FBSyxlQUFlLCtCQUErQixrQ0FBa0MsOENBQThDLFNBQVMsWUFBWSwrQkFBK0Isa0NBQWtDLDhDQUE4Qyw0Q0FBNEMsU0FBUyxVQUFVLGlCQUFpQixrQkFBa0Isc0NBQXNDLHFCQUFxQixHQUFHLG9CQUFvQixzQkFBc0IsZ0JBQWdCLGVBQWUsc0JBQXNCLHFCQUFxQixpQ0FBaUMsbUJBQW1CLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixlQUFlLHVCQUF1QixHQUFHLFFBQVEscUJBQXFCLHNDQUFzQyxnQ0FBZ0MsMEJBQTBCLDhDQUE4QywyQ0FBMkMsMENBQTBDLHlDQUF5QyxzQ0FBc0MsR0FBRyxnQkFBZ0IsbUNBQW1DLEdBQUcsb0JBQW9CLGtDQUFrQyxpQ0FBaUMsZ0NBQWdDLHVCQUF1QixpQkFBaUIsc0NBQXNDLEdBQUcsYUFBYSxnQkFBZ0IsaUJBQWlCLGdDQUFnQyxpQkFBaUIsZUFBZSx1QkFBdUIsb0JBQW9CLEdBQUcsVUFBVSxzQ0FBc0MsaUJBQWlCLEdBQUcsMENBQTBDLHVEQUF1RCxtQkFBbUIsaUJBQWlCLGtCQUFrQiwyQkFBMkIsdUJBQXVCLEdBQUcsaUJBQWlCLGNBQWMsZ0JBQWdCLE9BQU8sdUJBQXVCLGVBQWUsc0RBQXNELGFBQWEsaUJBQWlCLGNBQWMsa0JBQWtCLDBCQUEwQix1QkFBdUIsMkJBQTJCLEdBQUcsVUFBVSxlQUFlLGlDQUFpQyxrQ0FBa0MsaUNBQWlDLGtCQUFrQix1QkFBdUIsR0FBRyxtQkFBbUIsZ0NBQWdDLEdBQUcsb0JBQW9CLGtCQUFrQixhQUFhLEdBQUcsUUFBUSxlQUFlLEdBQUcsWUFBWSxpQkFBaUIsV0FBVyxpQ0FBaUMsR0FBRyxrQkFBa0Isa0JBQWtCLGFBQWEsR0FBRyxjQUFjLDBCQUEwQixpQkFBaUIsc0JBQXNCLDRCQUE0QixpQkFBaUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsR0FBRyxpQkFBaUIscUJBQXFCLHdDQUF3Qyw4QkFBOEIsR0FBRyw2QkFBNkIsd0JBQXdCLG1CQUFtQixzQkFBc0IsdUJBQXVCLG1EQUFtRCxzQ0FBc0MsaUJBQWlCLEdBQUcsaUJBQWlCLGtCQUFrQiwyQkFBMkIsY0FBYyxxQkFBcUIsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsY0FBYyxLQUFLLGtCQUFrQixpQkFBaUIsR0FBRyxjQUFjLGtCQUFrQixHQUFHLHlCQUF5Qix5Q0FBeUMseUNBQXlDLGtCQUFrQixHQUFHLFdBQVcsc0NBQXNDLGlCQUFpQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLGFBQWEsb0JBQW9CLE9BQU8sY0FBYyxrQkFBa0IsdUJBQXVCLEdBQUcscUNBQXFDLG9CQUFvQixtQkFBbUIsa0JBQWtCLG9CQUFvQixxQkFBcUIsS0FBSyxXQUFXLG9CQUFvQixLQUFLLGFBQWEsbUJBQW1CLEtBQUssVUFBVSxxQ0FBcUMsS0FBSyxhQUFhLG1CQUFtQixLQUFLLG1CQUFtQixpQkFBaUIsS0FBSyw2QkFBNkIsbUJBQW1CLEtBQUssR0FBRyw4QkFBOEIsYUFBYSw2QkFBNkIsS0FBSyxVQUFVLHFDQUFxQyxLQUFLLGFBQWEsbUJBQW1CLEtBQUssVUFBVSxvQ0FBb0Msc0NBQXNDLEtBQUssbUJBQW1CLGlCQUFpQixLQUFLLHVCQUF1Qix5REFBeUQsMENBQTBDLDJEQUEyRCxHQUFHLG1CQUFtQjtBQUN4MWI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNUMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvQjs7QUFFcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RXFCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q3FCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDeEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEM7QUFDZTtBQUNqQjtBQUN0Qjs7QUFFcEIseUNBQXlDLDZDQUFNLElBQUksd0RBQWEsSUFBSSxpREFBTSxJQUFJLGlEQUFNLElBQUksaURBQU8sSUFBSSxnREFBTTs7QUFFekc7QUFDQSxJQUFJLG1EQUFZO0FBQ2hCLEdBQUcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9zcmMvaGVhZC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJnLWJsYWNrOiAjMGMwZTFhO1xcbiAgICAtLWJsdWUtYWM6ICMyYzI0OWM7XFxuICAgIC0tY29wcGVyLWFjOiAjY2I3NDY5O1xcbiAgICAtLWZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJmO1xcbiAgICAtLW5vcm1hbC1mb250OiA0MDA7XFxuICAgIC0tYm9sZC1mb250OiA3MDA7XFxuICAgIC0tYm9sZGVyLWZvbnQ6IDkwMDtcXG4gICAgLS1iZy1jb2xvcjogI2ZjZmNmYztcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjNDc1NmRmO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogI2ZmNzIzNTtcXG4gICAgLS1wcmltYXJ5LXNoYWRvdzogIzhiOGVhZjtcXG4gICAgLS1zZWNvbmRhcnktc2hhZG93OiAjYTE3YTY5O1xcbiAgICAtLWJvdHRvbS1tYXJnaW46IDAuNXJlbTtcXG4gICAgLS1ib3R0b20tbWFyZ2luLTI6IDFyZW07XFxuICAgIC0tbGluZS1oZWlnaHQ6IDEuN3JlbTtcXG4gICAgLS10cmFuc2l0aW9uOiAwLjNzO1xcbiAgfVxcblxcbiAgLnNoYXBle1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOjQwcHg7XFxuICAgIGxlZnQ6LTY1MHB4O1xcbiAgICB3aWR0aDo4MDBweDtcXG4gICAgaGVpZ2h0OjgwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDMsIDExNiwgMTA1LCAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6MTkwcHggNTAlIDkwcHggNTAlO1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDAwbXM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICB9XFxuICBAa2V5ZnJhbWVzIHJvdGF0ZXtcXG4gICAgMCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX1cXG4gICAgNTAle3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX1cXG4gICAgMTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9XFxuICB9XFxuICAuc2Vjb25ke1xcbiAgICBsZWZ0Oi03MDBweDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxODAwMG1zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDMsIDExNiwgMTA1LCAuNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQ0LCAzNiwgMTU2LCAuNSk7XFxuICB9XFxuICBcXG4gIC50aGlyZHtcXG4gICAgbGVmdDpjYWxjKDEwMHZ3IC0gMTUwcHgpO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDAwbXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMywgMTE2LCAxMDUsIC41KTtcXG4gIFxcbiAgfVxcbiAgLmZvdXJ0aHtcXG4gICAgbGVmdDpjYWxjKDEwMHZ3IC0gMTAwcHgpO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE4MDAwbXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMywgMTE2LCAxMDUsIC41KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDQsIDM2LCAxNTYsIC41KTtcXG4gIFxcbiAgfVxcblxcbi5oZXJve1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWJsYWNrKTtcXG4gIHBhZGRpbmctdG9wOiAxcHg7XFxufVxcblxcbi50ZXh0LWNvbnRhaW5lcntcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAgNXZoIGF1dG87XFxuICBwYWRkaW5nLXRvcDogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGV4dHtcXG4gIGNvbG9yOndoaXRlc21va2U7XFxuICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IGNhbGMoMzJweCArIDR2dyk7XFxuICBhbmltYXRpb24tbmFtZTogZmxvYXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG4gIC1tb3otdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcbiAgLW1zLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG4gIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG59XFxuXFxuXFxuLmZsb2F0aW5ne1xcbiAgdGV4dC1zaGFkb3c6IDJweCA0cHggNHB4IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXJ7XFxuICBwYWRkaW5nLXRvcDogY2FsYygyMHB4ICsgMnZ3KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IGNhbGMoMzJweCArIDF2dyk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgd2lkdGg6MTAwdnc7XFxuICBoZWlnaHQ6MTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XFxuICBkaXNwbGF5OmZsZXg7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG4uZGFya3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWJsYWNrKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRhcmsgLnByb2plY3QtaW1nIC5pbWctY29udGFpbmVyIGltZ3tcXG4gIGJveC1zaGFkb3c6IDE1cHggMTBweCA0cHggcmdiKDIyMCwgMTI3LCAxMTUsIC41KVxcbn1cXG5cXG5cXG4ucHJvamVjdC1pbWd7XFxuICBmbGV4OiAxIDEgMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuLmltZy1jb250YWluZXJ7XFxuICB3aWR0aDo4MCU7XFxuICBoZWlnaHQ6YXV0bztcXG4gIFxcbn1cXG5cXG4uaW1nLWNvbnRhaW5lciBpbWd7XFxuICB3aWR0aDoxMDAlO1xcbiAgYm94LXNoYWRvdzogLTE1cHggMTBweCA0cHggcmdiKDQ0LCAzNiwgMTU2LCAuNSlcXG59XFxuXFxuLmRldGFpbHN7XFxuICBmbGV4OiAxIDEgMCU7XFxuICBnYXA6NC41dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG59XFxuXFxuLmRlc2N7XFxuICB3aWR0aDogOTAlO1xcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAuNnZ3KTtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDE2cHggKyAxdncpO1xcbiAgYm94LXNoYWRvdzogMHB4IDZweCA2cHggZ3JheTtcXG4gIHBhZGRpbmc6IC45dnc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxle1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAydncpO1xcbn1cXG5cXG4uaWNvbi1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAydnc7XFxufVxcbi5pY29ue1xcbiAgd2lkdGg6NTBweDtcXG59XFxuLmljb24gaW1ne1xcbiAgd2lkdGg6MTAwJVxcbn1cXG5cXG4udG9vbHN7XFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIC41dncpO1xcbn1cXG4udG9vbC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAydnc7XFxufVxcblxcbi5jb250YWN0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDg1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdCBoMiB7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbm1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4tMik7XFxuZm9udC1zaXplOiBjYWxjKDE2cHggKyAydncpO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDQwLjc1cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwLjkzOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdmFyKC0tc2Vjb25kYXJ5LXNoYWRvdyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ibGFjayk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5mb3JtLWNvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcblxcbn1cXG5cXG4uaW5wdXQtZmllbGQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jbWVzc2FnZSB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG5cXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ibGFjayk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTV2aDtcXG4gIGdhcDoxNXB4O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgXFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLnRleHQtY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46ICBhdXRvO1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gIH1cXG4gIC5zaGFwZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5wcm9qZWN0e1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICB9XFxuICAuZGFya3tcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcbiAgLmRldGFpbHN7XFxuICAgIGZsZXg6IDIgMSAwJTtcXG4gIH1cXG4gIC5pbWctY29udGFpbmVye1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbiAgLmNvbnRhY3QtZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjByZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5wcm9qZWN0e1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmRhcmt7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG4gIC5kZXRhaWxze1xcbiAgICBmbGV4OiAxIDEgMCU7XFxuICB9XFxuICAuZGVzY3tcXG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjZ2dyk7XFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDE2cHggKyAxLjZ2dyk7XFxuICB9XFxuICAuaW1nLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG4gIC5pbWctY29udGFpbmVyIGltZ3tcXG4gICAgYm94LXNoYWRvdzogLTEwcHggNXB4IDRweCByZ2IoNDQsIDM2LCAxNTYsIC41KVxcbiAgfVxcbiAgLmRhcmsgLnByb2plY3QtaW1nIC5pbWctY29udGFpbmVyIGltZ3tcXG4gICAgYm94LXNoYWRvdzogLTEwcHggNXB4IDRweCByZ2IoMjIwLCAxMjcsIDExNSwgLjUpXFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsdUJBQXVC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O0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBO0FBQ0Esc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxlQUFlO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osUUFBUTtFQUNSLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7Ozs7QUFLQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLDZCQUE2QjtJQUM3QiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0U7RUFDRjtFQUNBO0lBQ0U7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuOnJvb3Qge1xcbiAgICAtLWJnLWJsYWNrOiAjMGMwZTFhO1xcbiAgICAtLWJsdWUtYWM6ICMyYzI0OWM7XFxuICAgIC0tY29wcGVyLWFjOiAjY2I3NDY5O1xcbiAgICAtLWZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJmO1xcbiAgICAtLW5vcm1hbC1mb250OiA0MDA7XFxuICAgIC0tYm9sZC1mb250OiA3MDA7XFxuICAgIC0tYm9sZGVyLWZvbnQ6IDkwMDtcXG4gICAgLS1iZy1jb2xvcjogI2ZjZmNmYztcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjNDc1NmRmO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogI2ZmNzIzNTtcXG4gICAgLS1wcmltYXJ5LXNoYWRvdzogIzhiOGVhZjtcXG4gICAgLS1zZWNvbmRhcnktc2hhZG93OiAjYTE3YTY5O1xcbiAgICAtLWJvdHRvbS1tYXJnaW46IDAuNXJlbTtcXG4gICAgLS1ib3R0b20tbWFyZ2luLTI6IDFyZW07XFxuICAgIC0tbGluZS1oZWlnaHQ6IDEuN3JlbTtcXG4gICAgLS10cmFuc2l0aW9uOiAwLjNzO1xcbiAgfVxcblxcbiAgLnNoYXBle1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOjQwcHg7XFxuICAgIGxlZnQ6LTY1MHB4O1xcbiAgICB3aWR0aDo4MDBweDtcXG4gICAgaGVpZ2h0OjgwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDMsIDExNiwgMTA1LCAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6MTkwcHggNTAlIDkwcHggNTAlO1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDAwbXM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICB9XFxuICBAa2V5ZnJhbWVzIHJvdGF0ZXtcXG4gICAgMCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX1cXG4gICAgNTAle3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX1cXG4gICAgMTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9XFxuICB9XFxuICAuc2Vjb25ke1xcbiAgICBsZWZ0Oi03MDBweDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxODAwMG1zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDMsIDExNiwgMTA1LCAuNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQ0LCAzNiwgMTU2LCAuNSk7XFxuICB9XFxuICBcXG4gIC50aGlyZHtcXG4gICAgbGVmdDpjYWxjKDEwMHZ3IC0gMTUwcHgpO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDAwbXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMywgMTE2LCAxMDUsIC41KTtcXG4gIFxcbiAgfVxcbiAgLmZvdXJ0aHtcXG4gICAgbGVmdDpjYWxjKDEwMHZ3IC0gMTAwcHgpO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE4MDAwbXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMywgMTE2LCAxMDUsIC41KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDQsIDM2LCAxNTYsIC41KTtcXG4gIFxcbiAgfVxcblxcbi5oZXJve1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWJsYWNrKTtcXG4gIHBhZGRpbmctdG9wOiAxcHg7XFxufVxcblxcbi50ZXh0LWNvbnRhaW5lcntcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAgNXZoIGF1dG87XFxuICBwYWRkaW5nLXRvcDogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGV4dHtcXG4gIGNvbG9yOndoaXRlc21va2U7XFxuICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IGNhbGMoMzJweCArIDR2dyk7XFxuICBhbmltYXRpb24tbmFtZTogZmxvYXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG4gIC1tb3otdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcbiAgLW1zLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG4gIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG59XFxuXFxuXFxuLmZsb2F0aW5ne1xcbiAgdGV4dC1zaGFkb3c6IDJweCA0cHggNHB4IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXJ7XFxuICBwYWRkaW5nLXRvcDogY2FsYygyMHB4ICsgMnZ3KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IGNhbGMoMzJweCArIDF2dyk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgd2lkdGg6MTAwdnc7XFxuICBoZWlnaHQ6MTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XFxuICBkaXNwbGF5OmZsZXg7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG4uZGFya3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWJsYWNrKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRhcmsgLnByb2plY3QtaW1nIC5pbWctY29udGFpbmVyIGltZ3tcXG4gIGJveC1zaGFkb3c6IDE1cHggMTBweCA0cHggcmdiKDIyMCwgMTI3LCAxMTUsIC41KVxcbn1cXG5cXG5cXG4ucHJvamVjdC1pbWd7XFxuICBmbGV4OiAxIDEgMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuLmltZy1jb250YWluZXJ7XFxuICB3aWR0aDo4MCU7XFxuICBoZWlnaHQ6YXV0bztcXG4gIFxcbn1cXG5cXG4uaW1nLWNvbnRhaW5lciBpbWd7XFxuICB3aWR0aDoxMDAlO1xcbiAgYm94LXNoYWRvdzogLTE1cHggMTBweCA0cHggcmdiKDQ0LCAzNiwgMTU2LCAuNSlcXG59XFxuXFxuLmRldGFpbHN7XFxuICBmbGV4OiAxIDEgMCU7XFxuICBnYXA6NC41dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG59XFxuXFxuLmRlc2N7XFxuICB3aWR0aDogOTAlO1xcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAuNnZ3KTtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDE2cHggKyAxdncpO1xcbiAgYm94LXNoYWRvdzogMHB4IDZweCA2cHggZ3JheTtcXG4gIHBhZGRpbmc6IC45dnc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxle1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAydncpO1xcbn1cXG5cXG4uaWNvbi1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAydnc7XFxufVxcbi5pY29ue1xcbiAgd2lkdGg6NTBweDtcXG59XFxuLmljb24gaW1ne1xcbiAgd2lkdGg6MTAwJVxcbn1cXG5cXG4udG9vbHN7XFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIC41dncpO1xcbn1cXG4udG9vbC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAydnc7XFxufVxcblxcbi5jb250YWN0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDg1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdCBoMiB7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbm1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4tMik7XFxuZm9udC1zaXplOiBjYWxjKDE2cHggKyAydncpO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDQwLjc1cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwLjkzOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdmFyKC0tc2Vjb25kYXJ5LXNoYWRvdyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ibGFjayk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5mb3JtLWNvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcblxcbn1cXG5cXG4uaW5wdXQtZmllbGQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jbWVzc2FnZSB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG5cXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ibGFjayk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTV2aDtcXG4gIGdhcDoxNXB4O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgXFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLnRleHQtY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46ICBhdXRvO1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gIH1cXG4gIC5zaGFwZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5wcm9qZWN0e1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICB9XFxuICAuZGFya3tcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcbiAgLmRldGFpbHN7XFxuICAgIGZsZXg6IDIgMSAwJTtcXG4gIH1cXG4gIC5pbWctY29udGFpbmVye1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbiAgLmNvbnRhY3QtZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjByZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5wcm9qZWN0e1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmRhcmt7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG4gIC5kZXRhaWxze1xcbiAgICBmbGV4OiAxIDEgMCU7XFxuICB9XFxuICAuZGVzY3tcXG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjZ2dyk7XFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDE2cHggKyAxLjZ2dyk7XFxuICB9XFxuICAuaW1nLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG4gIC5pbWctY29udGFpbmVyIGltZ3tcXG4gICAgYm94LXNoYWRvdzogLTEwcHggNXB4IDRweCByZ2IoNDQsIDM2LCAxNTYsIC41KVxcbiAgfVxcbiAgLmRhcmsgLnByb2plY3QtaW1nIC5pbWctY29udGFpbmVyIGltZ3tcXG4gICAgYm94LXNoYWRvdzogLTEwcHggNXB4IDRweCByZ2IoMjIwLCAxMjcsIDExNSwgLjUpXFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuZnVuY3Rpb24gY29udGFjdCgpe1xuXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBjb250YWN0Rm9ybS5pbm5lckhUTUwgPSBgPGgyPkdldCBJbiBUb3VjaCBXaXRoIE1lPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZm9ybVwiPlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby9mL3hrbmtlcXp6XCIgbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwic2VuZGVyLW5hbWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgTmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtZmllbGRcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJzZW5kZXItZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRW1haWxcIlxuICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWZpZWxkXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICBjb2xzPVwiNjBcIlxuICAgICAgICAgICAgICByb3dzPVwiMTBcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgTWVzc2FnZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1maWVsZFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxuICAgICAgICAgICAgaWQ9XCJzdWJtaXQtYnRuXCJcbiAgICAgICAgICAgIGNsYXNzPVwic3VibWl0LWJ0blwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcblxuICAgIHJldHVybiBjb250YWN0Rm9ybTtcblxuXG59XG5cbmZ1bmN0aW9uIGZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImljb24tY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gIDxhIGhyZWY9XCJcIj5cbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLWZpbGxlZC8zNDQvZmZmZmZmL2dpdGh1Yi5wbmdcIiBhbHQ9XCJHaXRodWJcIj5cbiAgPC9hPlxuICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1maWxsZWQvMzQ0L2ZmZmZmZi9saW5rZWRpbi5wbmdcIiBhbHQ9XCJMaW5rZWRJblwiPlxuICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDxwPkRlc2lnbmVkIGFuZCBEZXZlbG9wZWQgYnkgVGFuemVlbSBYaGlkb3JpICZjb3B5OyBDb3B5cmlnaHQgMjAyMjwvcD5cbiAgYDtcbiAgIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCAge2NvbnRhY3QsIGZvb3Rlcn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwic2hhcGUgZmlyc3RcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2hhcGUgc2Vjb25kXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNoYXBlIHRoaXJkXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNoYXBlIGZvdXJ0aFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiIGlkPVwiaW50cm9cIj5IaSBJJ208L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIiBpZD1cImZ1bGxOYW1lXCI+VGFuemVlbSBYaGlkb3JpPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiPldlYiBEZXZlbG9wZXI8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuXG4gICAgXG5cbiAgICByZXR1cm4gZWxlbWVudDtcblxufVxuXG5mdW5jdGlvbiBhZGRBbmltYXRpb24oKXtcbiAgICBsZXQgaW50cm8gPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludHJvJyk7XG4gICAgbGV0IGZ1bGxOYW1lID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsTmFtZScpO1xuICAgIGxldCB0aXRsZSA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICBsZXQgZmxvYXRJbnRybyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgaW50cm8uY2xhc3NMaXN0LmFkZCgnZmxvYXRpbmcnKTtcbiAgICB9LCAxMDAwKTtcbiAgICBcbiAgICBsZXQgZmxvYXROYW1lID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBmdWxsTmFtZS5jbGFzc0xpc3QuYWRkKCdmbG9hdGluZycpXG4gICAgfSwgMTkwMCk7XG4gICAgbGV0IGZsb2F0VGl0bGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0aW5nJylcbiAgICAgICAgIFxuICAgIH0sIDI4MDApO1xufVxuXG5leHBvcnQgIHtoZWFkZXIsIGFkZEFuaW1hdGlvbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gcHJvamVjdEhlYWRlcigpe1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGVyJyk7XG5cbiAgaGVhZGVyLmlubmVySFRNTCA9IGA8aDE+UHJvamVjdHM8L2gxPmA7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gZXllU3B5KCl7XG4gICAgY29uc3QgZXllU3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXllU3B5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcblxuICAgIGV5ZVNweS5pbm5lckhUTUw9YCAgPGRpdiBjbGFzcz1cInByb2plY3QtaW1nXCI+XG4gICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wcmV2aWV3LnJlZGQuaXQvN3VwbzFoNTc0bzA5MS5qcGc/d2lkdGg9NjQwJmNyb3A9c21hcnQmYXV0bz13ZWJwJnM9YzVkYjIxMzUyMzdhNzI0M2JjNTlhZGIwMmQ3NDAyN2QyMzU5ODBkMVwiIGFsdD1cIlwiPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgICA8aDEgY2xhc3M9J3Byb2plY3QtdGl0bGUnPkV5ZSBTcHk8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgPGEgaHJlZj1cIlwiPlxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1maWxsZWQvMzQ0L2dpdGh1Yi5wbmdcIiBhbHQ9XCJHaXRodWJcIj5cbiAgICA8L2E+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMzQ0L2RvbWFpbi5wbmdcIiBhbHQ9XCJHaXRodWJcIj5cbiAgICA8L2E+XG4gIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzPVwiZGVzY1wiPkRlc2NyaXB0aW9uOiBQaG90byB0YWdnaW5nIGdhbWUgZmVhdHVyaW5nIHRoZSBmaW5hbCBpbWFnZSBmcm9tIDxhIGhyZWY9XCJcIj5yL1BsYWNlPC9hPjwvcD5cbiAgICA8cCBjbGFzcz1cInRvb2xzXCI+VG9vbHMgVXNlZDo8L3A+XG4gICAgPGRpdiBjbGFzcz1cInRvb2wtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvaHRtbC01LS12MS5wbmdcIiBhbHQ9XCJIVE1MXCI+IFxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvY3NzMy5wbmdcIiBhbHQ9XCJDU1NcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2phdmFzY3JpcHQtLXYxLnBuZ1wiIGFsdD1cIkphdmFTY3JpcHRcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L3dlYnBhY2sucG5nXCIgYWx0PVwiV2VicGFja1wiPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvZ29vZ2xlLWZpcmViYXNlLWNvbnNvbGUucG5nXCIgYWx0PVwiRmlyZWJhc2VcIj5cbiAgPC9kaXY+XG4gIDwvZGl2PmBcblxuICByZXR1cm4gZXllU3B5O1xufVxuXG5mdW5jdGlvbiBhZXR0aWQoKXtcbiAgY29uc3QgZXllU3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV5ZVNweS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ2RhcmsnKTtcblxuICBleWVTcHkuaW5uZXJIVE1MPWAgIFxuICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxuICA8aDEgY2xhc3M9J3Byb2plY3QtdGl0bGUnPkFldHRpZDwvaDE+XG4gIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICA8YSBocmVmPVwiXCI+XG4gICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1maWxsZWQvMzQ0L2ZmZmZmZi9naXRodWIucG5nXCIgYWx0PVwiR2l0aHViXCI+XG4gIDwvYT5cbiAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMzQ0L2ZmZmZmZi9kb21haW4ucG5nXCIgYWx0PVwiV2Vic2l0ZVwiPlxuICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICA8cCBjbGFzcz1cImRlc2NcIj5EZXNjcmlwdGlvbjogU29jaWFsIE1lZGlhIHNpdGUgZm9yIHBob3RvcyBvZiBmb29kLCBkaXNoZXMsIGFuZCByZWNpcGVzPC9wPlxuICAgICAgPHAgY2xhc3M9XCJ0b29sc1wiPlRvb2xzIFVzZWQ6PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cInRvb2wtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2h0bWwtNS0tdjEucG5nXCIgYWx0PVwiSFRNTFwiPiBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2NzczMucG5nXCIgYWx0PVwiQ1NTXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9qYXZhc2NyaXB0LS12MS5wbmdcIiBhbHQ9XCJKYXZhU2NyaXB0XCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL29mZmljZS8zNDQvcmVhY3QucG5nXCIgYWx0PVwiUmVhY3RcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2dvb2dsZS1maXJlYmFzZS1jb25zb2xlLnBuZ1wiIGFsdD1cIkZpcmViYXNlXCI+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbWdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBzcmM9XCJodHRwczovL3ByZXZpZXcucmVkZC5pdC82cWtvazJ5YTluMDkxLnBuZz93aWR0aD05NjAmY3JvcD1zbWFydCZhdXRvPXdlYnAmcz0xZjk5NjVkMjc0MjQzYTViZjczZTZhYTQ5YzcyMTE3Y2U1ZTJkNzJmXCIgYWx0PVwiXCI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYFxuXG5yZXR1cm4gZXllU3B5O1xufVxuXG5leHBvcnQge2V5ZVNweSwgYWV0dGlkLCBwcm9qZWN0SGVhZGVyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7aGVhZGVyLCBhZGRBbmltYXRpb259IGZyb20gXCIuL2hlYWRcIjtcbmltcG9ydCB7IGV5ZVNweSwgYWV0dGlkLCBwcm9qZWN0SGVhZGVyIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7Y29udGFjdCwgZm9vdGVyfSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKS5hcHBlbmQoaGVhZGVyKCksIHByb2plY3RIZWFkZXIoKSwgZXllU3B5KCksIGFldHRpZCgpLCBjb250YWN0KCksIGZvb3RlcigpKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChfZXZlbnQpID0+IHtcbiAgICBhZGRBbmltYXRpb24oKTtcbiAgfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9