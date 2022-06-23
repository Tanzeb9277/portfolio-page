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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg-black: #0c0e1a;\n    --blue-ac: #2c249c;\n    --copper-ac: #cb7469;\n    --font-family: \"Roboto\", sans-serf;\n    --normal-font: 400;\n    --bold-font: 700;\n    --bolder-font: 900;\n    --bg-color: #fcfcfc;\n    --primary-color: #4756df;\n    --secondary-color: #ff7235;\n    --primary-shadow: #8b8eaf;\n    --secondary-shadow: #a17a69;\n    --bottom-margin: 0.5rem;\n    --bottom-margin-2: 1rem;\n    --line-height: 1.7rem;\n    --transition: 0.3s;\n  }\n\n  .shape{\n    position:absolute;\n    top:40px;\n    left:-650px;\n    width:800px;\n    height:800px;\n    background-color:rgb(203, 116, 105, .5);\n    border-radius:190px 50% 90px 50%;\n    animation-name: rotate;\n    animation-duration: 15000ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n  @keyframes rotate{\n    0%{transform:rotate(0deg)}\n    50%{transform:rotate(180deg)}\n    100%{transform:rotate(360deg)}\n  }\n  .second{\n    left:-700px;\n    animation-duration: 18000ms;\n    background-color:rgb(203, 116, 105, .5);\n    background-color:rgb(44, 36, 156, .5);\n  }\n  \n  .third{\n    left:calc(100vw - 150px);\n    animation-duration: 15000ms;\n    background-color:rgb(203, 116, 105, .5);\n  \n  }\n  .fourth{\n    left:calc(100vw - 100px);\n    animation-duration: 18000ms;\n    background-color:rgb(203, 116, 105, .5);\n    background-color:rgb(44, 36, 156, .5);\n  \n  }\n\n.hero{\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--bg-black);\n  padding-top: 1px;\n}\n\n.text-container{\n  text-align:center;\n  height: 90%;\n  width: 90%;\n  margin:  5vh auto;\n  padding-top: 10%;\n  background-color: whitesmoke;\n  padding: 1px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  position: relative;\n}\n.text{\n  color:whitesmoke;\n  font-family: 'Righteous', cursive;\n  font-size: calc(32px + 4vw);\n  animation-name: float;\n  -webkit-transition: text-shadow 1s linear;\n  -moz-transition: text-shadow 1s linear;\n  -ms-transition: text-shadow 1s linear;\n  -o-transition: text-shadow 1s linear;\n  transition: text-shadow 1s linear;\n}\n\n\n.floating{\n  text-shadow: 2px 4px 4px black;\n}\n\n.project-header{\n  padding-top: calc(20px + 2vw);\n  background-color: var(--bg-black);\n  font-size: calc(32px + 1vw);\n  text-align: center;\n  width: 100vw;\n  font-family: 'Ubuntu', sans-serif;\n  color:white;\n  \n}\n\n.project{\n  width:100vw;\n  height:100vh;\n  background-color:whitesmoke;\n  display:flex;\n  z-index: 1;\n  position: relative;\n  padding: 10px 0;\n}\n\n.dark{\n  background-color: var(--bg-black);\n  color: white;\n}\n\n.dark .project-img .img-container img{\n  box-shadow: 15px 10px 4px rgb(220, 127, 115, .5)\n}\n\n\n.project-img{\n  flex: 1 1 0%;\n  display: flex;\n  justify-content:center;\n  align-items:center;\n}\n.img-container{\n  width:80%;\n  height:auto;\n  \n}\n\n.img-container img{\n  width:100%;\n  box-shadow: -15px 10px 4px rgb(44, 36, 156, .5)\n}\n\n.details{\n  flex: 1 1 0%;\n  gap:4.5vh;\n  display: flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n}\n\n.desc{\n  width: 90%;\n  font-size: calc(12px + .6vw);\n  line-height: calc(16px + 1vw);\n  box-shadow: 0px 6px 6px gray;\n  padding: .9vw;\n  font-style: italic;\n}\n\n.project-title{\n  font-size: calc(16px + 2vw);\n}\n\n.icon-container{\n  display: flex;\n  gap: 2vw;\n}\n.icon{\n  width:50px;\n}\n.icon img{\n  width:100%\n}\n\n.tools{\n  font-size: calc(16px + .5vw);\n}\n.tool-container{\n  display: flex;\n  gap: 2vw;\n}\n\n.contact {\n  display: inline-block;\n  width: 100vw;\n  padding-top: 2rem;\n  background-color: white;\n  height: 85vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.contact h2 {\ntext-align: center;\nmargin-bottom: var(--bottom-margin-2);\nfont-size: calc(16px + 2vw);\n}\n\n.contact-form-container {\n  max-width: 40.75rem;\n  margin: 0 auto;\n  padding: 0.938rem;\n  border-radius: 5px;\n  box-shadow: 0 3px 10px var(--secondary-shadow);\n  background-color: var(--bg-black);\n  color: white;\n}\n.form-control {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-weight: 600;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n}\n\n.input-field {\n  height: 30px;\n}\n\n#message {\n  height: 150px;\n}\n\n\n.submit-btn:hover {\nbackground-color: var(--primary-color);\nborder: 2px solid var(--primary-color);\ncursor: pointer;\n}\n\nfooter{\n  background-color: var(--bg-black);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 15vh;\n  gap:15px;\n  padding: 10px 0;\n  \n}\n\nfooter p {\n  padding: 10px;\n  text-align: center;\n}\n\n\n\n\n@media (max-width: 480px) {\n  .text-container{\n    height: 100%;\n    width: 100%;\n    margin:  auto;\n    padding-top: 0;\n  }\n  .shape{\n    display: none;\n  }\n  .project{\n    height: 85vh;\n  }\n  .dark{\n    flex-direction: column-reverse;\n  }\n  .details{\n    flex: 2 1 0%;\n  }\n  .img-container{\n    width: 90%;\n  }\n  .contact-form-container {\n    width: 20rem;\n  }\n}\n@media (max-width: 1024px) {\n  .project{\n    flex-direction: column;\n  }\n  .dark{\n    flex-direction: column-reverse;\n  }\n  .details{\n    flex: 1 1 0%;\n  }\n  .desc{\n    font-size: calc(12px + 1.6vw);\n    line-height: calc(16px + 1.6vw);\n  }\n  .img-container{\n    width: 80%;\n  }\n  .img-container img{\n    box-shadow: -10px 5px 4px rgb(44, 36, 156, .5)\n  }\n  .dark .project-img .img-container img{\n    box-shadow: -10px 5px 4px rgb(220, 127, 115, .5)\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAIA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;IACpB,kCAAkC;IAClC,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,wBAAwB;IACxB,0BAA0B;IAC1B,yBAAyB;IACzB,2BAA2B;IAC3B,uBAAuB;IACvB,uBAAuB;IACvB,qBAAqB;IACrB,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,QAAQ;IACR,WAAW;IACX,WAAW;IACX,YAAY;IACZ,uCAAuC;IACvC,gCAAgC;IAChC,sBAAsB;IACtB,2BAA2B;IAC3B,mCAAmC;IACnC,iCAAiC;EACnC;EACA;IACE,GAAG,sBAAsB;IACzB,IAAI,wBAAwB;IAC5B,KAAK,wBAAwB;EAC/B;EACA;IACE,WAAW;IACX,2BAA2B;IAC3B,uCAAuC;IACvC,qCAAqC;EACvC;;EAEA;IACE,wBAAwB;IACxB,2BAA2B;IAC3B,uCAAuC;;EAEzC;EACA;IACE,wBAAwB;IACxB,2BAA2B;IAC3B,uCAAuC;IACvC,qCAAqC;;EAEvC;;AAEF;EACE,YAAY;EACZ,aAAa;EACb,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,gBAAgB;EAChB,4BAA4B;EAC5B,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,iCAAiC;EACjC,2BAA2B;EAC3B,qBAAqB;EACrB,yCAAyC;EACzC,sCAAsC;EACtC,qCAAqC;EACrC,oCAAoC;EACpC,iCAAiC;AACnC;;;AAGA;EACE,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,iCAAiC;EACjC,2BAA2B;EAC3B,kBAAkB;EAClB,YAAY;EACZ,iCAAiC;EACjC,WAAW;;AAEb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE;AACF;;;AAGA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,SAAS;EACT,WAAW;;AAEb;;AAEA;EACE,UAAU;EACV;AACF;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,aAAa;EACb,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,4BAA4B;EAC5B,6BAA6B;EAC7B,4BAA4B;EAC5B,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,UAAU;AACZ;AACA;EACE;AACF;;AAEA;EACE,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;AACA,kBAAkB;AAClB,qCAAqC;AACrC,2BAA2B;AAC3B;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,8CAA8C;EAC9C,iCAAiC;EACjC,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;;AAEX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;;AAGA;AACA,sCAAsC;AACtC,sCAAsC;AACtC,eAAe;AACf;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,QAAQ;EACR,eAAe;;AAEjB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;;;;AAKA;EACE;IACE,YAAY;IACZ,WAAW;IACX,aAAa;IACb,cAAc;EAChB;EACA;IACE,aAAa;EACf;EACA;IACE,YAAY;EACd;EACA;IACE,8BAA8B;EAChC;EACA;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;EACA;IACE,YAAY;EACd;AACF;AACA;EACE;IACE,sBAAsB;EACxB;EACA;IACE,8BAA8B;EAChC;EACA;IACE,YAAY;EACd;EACA;IACE,6BAA6B;IAC7B,+BAA+B;EACjC;EACA;IACE,UAAU;EACZ;EACA;IACE;EACF;EACA;IACE;EACF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');\n\n\n:root {\n    --bg-black: #0c0e1a;\n    --blue-ac: #2c249c;\n    --copper-ac: #cb7469;\n    --font-family: \"Roboto\", sans-serf;\n    --normal-font: 400;\n    --bold-font: 700;\n    --bolder-font: 900;\n    --bg-color: #fcfcfc;\n    --primary-color: #4756df;\n    --secondary-color: #ff7235;\n    --primary-shadow: #8b8eaf;\n    --secondary-shadow: #a17a69;\n    --bottom-margin: 0.5rem;\n    --bottom-margin-2: 1rem;\n    --line-height: 1.7rem;\n    --transition: 0.3s;\n  }\n\n  .shape{\n    position:absolute;\n    top:40px;\n    left:-650px;\n    width:800px;\n    height:800px;\n    background-color:rgb(203, 116, 105, .5);\n    border-radius:190px 50% 90px 50%;\n    animation-name: rotate;\n    animation-duration: 15000ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n  @keyframes rotate{\n    0%{transform:rotate(0deg)}\n    50%{transform:rotate(180deg)}\n    100%{transform:rotate(360deg)}\n  }\n  .second{\n    left:-700px;\n    animation-duration: 18000ms;\n    background-color:rgb(203, 116, 105, .5);\n    background-color:rgb(44, 36, 156, .5);\n  }\n  \n  .third{\n    left:calc(100vw - 150px);\n    animation-duration: 15000ms;\n    background-color:rgb(203, 116, 105, .5);\n  \n  }\n  .fourth{\n    left:calc(100vw - 100px);\n    animation-duration: 18000ms;\n    background-color:rgb(203, 116, 105, .5);\n    background-color:rgb(44, 36, 156, .5);\n  \n  }\n\n.hero{\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--bg-black);\n  padding-top: 1px;\n}\n\n.text-container{\n  text-align:center;\n  height: 90%;\n  width: 90%;\n  margin:  5vh auto;\n  padding-top: 10%;\n  background-color: whitesmoke;\n  padding: 1px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  position: relative;\n}\n.text{\n  color:whitesmoke;\n  font-family: 'Righteous', cursive;\n  font-size: calc(32px + 4vw);\n  animation-name: float;\n  -webkit-transition: text-shadow 1s linear;\n  -moz-transition: text-shadow 1s linear;\n  -ms-transition: text-shadow 1s linear;\n  -o-transition: text-shadow 1s linear;\n  transition: text-shadow 1s linear;\n}\n\n\n.floating{\n  text-shadow: 2px 4px 4px black;\n}\n\n.project-header{\n  padding-top: calc(20px + 2vw);\n  background-color: var(--bg-black);\n  font-size: calc(32px + 1vw);\n  text-align: center;\n  width: 100vw;\n  font-family: 'Ubuntu', sans-serif;\n  color:white;\n  \n}\n\n.project{\n  width:100vw;\n  height:100vh;\n  background-color:whitesmoke;\n  display:flex;\n  z-index: 1;\n  position: relative;\n  padding: 10px 0;\n}\n\n.dark{\n  background-color: var(--bg-black);\n  color: white;\n}\n\n.dark .project-img .img-container img{\n  box-shadow: 15px 10px 4px rgb(220, 127, 115, .5)\n}\n\n\n.project-img{\n  flex: 1 1 0%;\n  display: flex;\n  justify-content:center;\n  align-items:center;\n}\n.img-container{\n  width:80%;\n  height:auto;\n  \n}\n\n.img-container img{\n  width:100%;\n  box-shadow: -15px 10px 4px rgb(44, 36, 156, .5)\n}\n\n.details{\n  flex: 1 1 0%;\n  gap:4.5vh;\n  display: flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n}\n\n.desc{\n  width: 90%;\n  font-size: calc(12px + .6vw);\n  line-height: calc(16px + 1vw);\n  box-shadow: 0px 6px 6px gray;\n  padding: .9vw;\n  font-style: italic;\n}\n\n.project-title{\n  font-size: calc(16px + 2vw);\n}\n\n.icon-container{\n  display: flex;\n  gap: 2vw;\n}\n.icon{\n  width:50px;\n}\n.icon img{\n  width:100%\n}\n\n.tools{\n  font-size: calc(16px + .5vw);\n}\n.tool-container{\n  display: flex;\n  gap: 2vw;\n}\n\n.contact {\n  display: inline-block;\n  width: 100vw;\n  padding-top: 2rem;\n  background-color: white;\n  height: 85vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.contact h2 {\ntext-align: center;\nmargin-bottom: var(--bottom-margin-2);\nfont-size: calc(16px + 2vw);\n}\n\n.contact-form-container {\n  max-width: 40.75rem;\n  margin: 0 auto;\n  padding: 0.938rem;\n  border-radius: 5px;\n  box-shadow: 0 3px 10px var(--secondary-shadow);\n  background-color: var(--bg-black);\n  color: white;\n}\n.form-control {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-weight: 600;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n}\n\n.input-field {\n  height: 30px;\n}\n\n#message {\n  height: 150px;\n}\n\n\n.submit-btn:hover {\nbackground-color: var(--primary-color);\nborder: 2px solid var(--primary-color);\ncursor: pointer;\n}\n\nfooter{\n  background-color: var(--bg-black);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 15vh;\n  gap:15px;\n  padding: 10px 0;\n  \n}\n\nfooter p {\n  padding: 10px;\n  text-align: center;\n}\n\n\n\n\n@media (max-width: 480px) {\n  .text-container{\n    height: 100%;\n    width: 100%;\n    margin:  auto;\n    padding-top: 0;\n  }\n  .shape{\n    display: none;\n  }\n  .project{\n    height: 85vh;\n  }\n  .dark{\n    flex-direction: column-reverse;\n  }\n  .details{\n    flex: 2 1 0%;\n  }\n  .img-container{\n    width: 90%;\n  }\n  .contact-form-container {\n    width: 20rem;\n  }\n}\n@media (max-width: 1024px) {\n  .project{\n    flex-direction: column;\n  }\n  .dark{\n    flex-direction: column-reverse;\n  }\n  .details{\n    flex: 1 1 0%;\n  }\n  .desc{\n    font-size: calc(12px + 1.6vw);\n    line-height: calc(16px + 1.6vw);\n  }\n  .img-container{\n    width: 80%;\n  }\n  .img-container img{\n    box-shadow: -10px 5px 4px rgb(44, 36, 156, .5)\n  }\n  .dark .project-img .img-container img{\n    box-shadow: -10px 5px 4px rgb(220, 127, 115, .5)\n  }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmb0I7O0FBRXBCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q3FCO0FBQ2U7QUFDSjtBQUNlO0FBQ1g7QUFDRTs7QUFFdEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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cG9ydGZvbGlvLXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL3NyYy9oZWFkLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SaWdodGVvdXMmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1OndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1iZy1ibGFjazogIzBjMGUxYTtcXG4gICAgLS1ibHVlLWFjOiAjMmMyNDljO1xcbiAgICAtLWNvcHBlci1hYzogI2NiNzQ2OTtcXG4gICAgLS1mb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyZjtcXG4gICAgLS1ub3JtYWwtZm9udDogNDAwO1xcbiAgICAtLWJvbGQtZm9udDogNzAwO1xcbiAgICAtLWJvbGRlci1mb250OiA5MDA7XFxuICAgIC0tYmctY29sb3I6ICNmY2ZjZmM7XFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzQ3NTZkZjtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICNmZjcyMzU7XFxuICAgIC0tcHJpbWFyeS1zaGFkb3c6ICM4YjhlYWY7XFxuICAgIC0tc2Vjb25kYXJ5LXNoYWRvdzogI2ExN2E2OTtcXG4gICAgLS1ib3R0b20tbWFyZ2luOiAwLjVyZW07XFxuICAgIC0tYm90dG9tLW1hcmdpbi0yOiAxcmVtO1xcbiAgICAtLWxpbmUtaGVpZ2h0OiAxLjdyZW07XFxuICAgIC0tdHJhbnNpdGlvbjogMC4zcztcXG4gIH1cXG5cXG4gIC5zaGFwZXtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDo0MHB4O1xcbiAgICBsZWZ0Oi02NTBweDtcXG4gICAgd2lkdGg6ODAwcHg7XFxuICAgIGhlaWdodDo4MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAzLCAxMTYsIDEwNSwgLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOjE5MHB4IDUwJSA5MHB4IDUwJTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTAwMG1zO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgfVxcbiAgQGtleWZyYW1lcyByb3RhdGV7XFxuICAgIDAle3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9XFxuICAgIDUwJXt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9XFxuICAgIDEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfVxcbiAgfVxcbiAgLnNlY29uZHtcXG4gICAgbGVmdDotNzAwcHg7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTgwMDBtcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAzLCAxMTYsIDEwNSwgLjUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0NCwgMzYsIDE1NiwgLjUpO1xcbiAgfVxcbiAgXFxuICAudGhpcmR7XFxuICAgIGxlZnQ6Y2FsYygxMDB2dyAtIDE1MHB4KTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTAwMG1zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDMsIDExNiwgMTA1LCAuNSk7XFxuICBcXG4gIH1cXG4gIC5mb3VydGh7XFxuICAgIGxlZnQ6Y2FsYygxMDB2dyAtIDEwMHB4KTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxODAwMG1zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDMsIDExNiwgMTA1LCAuNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQ0LCAzNiwgMTU2LCAuNSk7XFxuICBcXG4gIH1cXG5cXG4uaGVyb3tcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ibGFjayk7XFxuICBwYWRkaW5nLXRvcDogMXB4O1xcbn1cXG5cXG4udGV4dC1jb250YWluZXJ7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogIDV2aCBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBwYWRkaW5nOiAxcHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRleHR7XFxuICBjb2xvcjp3aGl0ZXNtb2tlO1xcbiAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiBjYWxjKDMycHggKyA0dncpO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZsb2F0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAxcyBsaW5lYXI7XFxuICAtbW96LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG4gIC1tcy10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAxcyBsaW5lYXI7XFxuICAtby10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAxcyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAxcyBsaW5lYXI7XFxufVxcblxcblxcbi5mbG9hdGluZ3tcXG4gIHRleHQtc2hhZG93OiAycHggNHB4IDRweCBibGFjaztcXG59XFxuXFxuLnByb2plY3QtaGVhZGVye1xcbiAgcGFkZGluZy10b3A6IGNhbGMoMjBweCArIDJ2dyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ibGFjayk7XFxuICBmb250LXNpemU6IGNhbGMoMzJweCArIDF2dyk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIFxcbn1cXG5cXG4ucHJvamVjdHtcXG4gIHdpZHRoOjEwMHZ3O1xcbiAgaGVpZ2h0OjEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuLmRhcmt7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ibGFjayk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kYXJrIC5wcm9qZWN0LWltZyAuaW1nLWNvbnRhaW5lciBpbWd7XFxuICBib3gtc2hhZG93OiAxNXB4IDEwcHggNHB4IHJnYigyMjAsIDEyNywgMTE1LCAuNSlcXG59XFxuXFxuXFxuLnByb2plY3QtaW1ne1xcbiAgZmxleDogMSAxIDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcbi5pbWctY29udGFpbmVye1xcbiAgd2lkdGg6ODAlO1xcbiAgaGVpZ2h0OmF1dG87XFxuICBcXG59XFxuXFxuLmltZy1jb250YWluZXIgaW1ne1xcbiAgd2lkdGg6MTAwJTtcXG4gIGJveC1zaGFkb3c6IC0xNXB4IDEwcHggNHB4IHJnYig0NCwgMzYsIDE1NiwgLjUpXFxufVxcblxcbi5kZXRhaWxze1xcbiAgZmxleDogMSAxIDAlO1xcbiAgZ2FwOjQuNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcblxcbi5kZXNje1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgLjZ2dyk7XFxuICBsaW5lLWhlaWdodDogY2FsYygxNnB4ICsgMXZ3KTtcXG4gIGJveC1zaGFkb3c6IDBweCA2cHggNnB4IGdyYXk7XFxuICBwYWRkaW5nOiAuOXZ3O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZXtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMnZ3KTtcXG59XFxuXFxuLmljb24tY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnZ3O1xcbn1cXG4uaWNvbntcXG4gIHdpZHRoOjUwcHg7XFxufVxcbi5pY29uIGltZ3tcXG4gIHdpZHRoOjEwMCVcXG59XFxuXFxuLnRvb2xze1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAuNXZ3KTtcXG59XFxuLnRvb2wtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnZ3O1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QgaDIge1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5tYXJnaW4tYm90dG9tOiB2YXIoLS1ib3R0b20tbWFyZ2luLTIpO1xcbmZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMnZ3KTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybS1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA0MC43NXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMC45MzhyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHZhcigtLXNlY29uZGFyeS1zaGFkb3cpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYmxhY2spO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZm9ybS1jb250cm9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG5cXG59XFxuXFxuLmlucHV0LWZpZWxkIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuI21lc3NhZ2Uge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuXFxuLnN1Ym1pdC1idG46aG92ZXIge1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9vdGVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYmxhY2spO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICBnYXA6MTVweDtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIFxcbn1cXG5cXG5mb290ZXIgcCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC50ZXh0LWNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAgYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICB9XFxuICAuc2hhcGV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAucHJvamVjdHtcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgfVxcbiAgLmRhcmt7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG4gIC5kZXRhaWxze1xcbiAgICBmbGV4OiAyIDEgMCU7XFxuICB9XFxuICAuaW1nLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG4gIC5jb250YWN0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAucHJvamVjdHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5kYXJre1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxuICAuZGV0YWlsc3tcXG4gICAgZmxleDogMSAxIDAlO1xcbiAgfVxcbiAgLmRlc2N7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS42dncpO1xcbiAgICBsaW5lLWhlaWdodDogY2FsYygxNnB4ICsgMS42dncpO1xcbiAgfVxcbiAgLmltZy1jb250YWluZXJ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuICAuaW1nLWNvbnRhaW5lciBpbWd7XFxuICAgIGJveC1zaGFkb3c6IC0xMHB4IDVweCA0cHggcmdiKDQ0LCAzNiwgMTU2LCAuNSlcXG4gIH1cXG4gIC5kYXJrIC5wcm9qZWN0LWltZyAuaW1nLWNvbnRhaW5lciBpbWd7XFxuICAgIGJveC1zaGFkb3c6IC0xMHB4IDVweCA0cHggcmdiKDIyMCwgMTI3LCAxMTUsIC41KVxcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMv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Q0FBcUM7QUFDckMsMkJBQTJCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDhDQUE4QztFQUM5QyxpQ0FBaUM7RUFDakMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7O0FBRVg7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBO0FBQ0Esc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxlQUFlO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osUUFBUTtFQUNSLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7Ozs7QUFLQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLDZCQUE2QjtJQUM3QiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0U7RUFDRjtFQUNBO0lBQ0U7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuOnJvb3Qge1xcbiAgICAtLWJnLWJsYWNrOiAjMGMwZTFhO1xcbiAgICAtLWJsdWUtYWM6ICMyYzI0OWM7XFxuICAgIC0tY29wcGVyLWFjOiAjY2I3NDY5O1xcbiAgICAtLWZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJmO1xcbiAgICAtLW5vcm1hbC1mb250OiA0MDA7XFxuICAgIC0tYm9sZC1mb250OiA3MDA7XFxuICAgIC0tYm9sZGVyLWZvbnQ6IDkwMDtcXG4gICAgLS1iZy1jb2xvcjogI2ZjZmNmYztcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjNDc1NmRmO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogI2ZmNzIzNTtcXG4gICAgLS1wcmltYXJ5LXNoYWRvdzogIzhiOGVhZjtcXG4gICAgLS1zZWNvbmRhcnktc2hhZG93OiAjYTE3YTY5O1xcbiAgICAtLWJvdHRvbS1tYXJnaW46IDAuNXJlbTtcXG4gICAgLS1ib3R0b20tbWFyZ2luLTI6IDFyZW07XFxuICAgIC0tbGluZS1oZWlnaHQ6IDEuN3JlbTtcXG4gICAgLS10cmFuc2l0aW9uOiAwLjNzO1xcbiAgfVxcblxcbiAgLnNoYXBle1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOjQwcHg7XFxuICAgIGxlZnQ6LTY1MHB4O1xcbiAgICB3aWR0aDo4MDBweDtcXG4gICAgaGVpZ2h0OjgwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDMsIDExNiwgMTA1LCAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6MTkwcHggNTAlIDkwcHggNTAlO1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDAwbXM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICB9XFxuICBAa2V5ZnJhbWVzIHJvdGF0ZXtcXG4gICAgMCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX1cXG4gICAgNTAle3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX1cXG4gICAgMTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9XFxuICB9XFxuICAuc2Vjb25ke1xcbiAgICBsZWZ0Oi03MDBweDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxODAwMG1zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDMsIDExNiwgMTA1LCAuNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQ0LCAzNiwgMTU2LCAuNSk7XFxuICB9XFxuICBcXG4gIC50aGlyZHtcXG4gICAgbGVmdDpjYWxjKDEwMHZ3IC0gMTUwcHgpO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDAwbXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMywgMTE2LCAxMDUsIC41KTtcXG4gIFxcbiAgfVxcbiAgLmZvdXJ0aHtcXG4gICAgbGVmdDpjYWxjKDEwMHZ3IC0gMTAwcHgpO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE4MDAwbXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMywgMTE2LCAxMDUsIC41KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDQsIDM2LCAxNTYsIC41KTtcXG4gIFxcbiAgfVxcblxcbi5oZXJve1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWJsYWNrKTtcXG4gIHBhZGRpbmctdG9wOiAxcHg7XFxufVxcblxcbi50ZXh0LWNvbnRhaW5lcntcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAgNXZoIGF1dG87XFxuICBwYWRkaW5nLXRvcDogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGV4dHtcXG4gIGNvbG9yOndoaXRlc21va2U7XFxuICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IGNhbGMoMzJweCArIDR2dyk7XFxuICBhbmltYXRpb24tbmFtZTogZmxvYXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG4gIC1tb3otdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMXMgbGluZWFyO1xcbiAgLW1zLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG4gIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDFzIGxpbmVhcjtcXG59XFxuXFxuXFxuLmZsb2F0aW5ne1xcbiAgdGV4dC1zaGFkb3c6IDJweCA0cHggNHB4IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXJ7XFxuICBwYWRkaW5nLXRvcDogY2FsYygyMHB4ICsgMnZ3KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWJsYWNrKTtcXG4gIGZvbnQtc2l6ZTogY2FsYygzMnB4ICsgMXZ3KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOndoaXRlO1xcbiAgXFxufVxcblxcbi5wcm9qZWN0e1xcbiAgd2lkdGg6MTAwdnc7XFxuICBoZWlnaHQ6MTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XFxuICBkaXNwbGF5OmZsZXg7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG4uZGFya3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWJsYWNrKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRhcmsgLnByb2plY3QtaW1nIC5pbWctY29udGFpbmVyIGltZ3tcXG4gIGJveC1zaGFkb3c6IDE1cHggMTBweCA0cHggcmdiKDIyMCwgMTI3LCAxMTUsIC41KVxcbn1cXG5cXG5cXG4ucHJvamVjdC1pbWd7XFxuICBmbGV4OiAxIDEgMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuLmltZy1jb250YWluZXJ7XFxuICB3aWR0aDo4MCU7XFxuICBoZWlnaHQ6YXV0bztcXG4gIFxcbn1cXG5cXG4uaW1nLWNvbnRhaW5lciBpbWd7XFxuICB3aWR0aDoxMDAlO1xcbiAgYm94LXNoYWRvdzogLTE1cHggMTBweCA0cHggcmdiKDQ0LCAzNiwgMTU2LCAuNSlcXG59XFxuXFxuLmRldGFpbHN7XFxuICBmbGV4OiAxIDEgMCU7XFxuICBnYXA6NC41dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG59XFxuXFxuLmRlc2N7XFxuICB3aWR0aDogOTAlO1xcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAuNnZ3KTtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDE2cHggKyAxdncpO1xcbiAgYm94LXNoYWRvdzogMHB4IDZweCA2cHggZ3JheTtcXG4gIHBhZGRpbmc6IC45dnc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxle1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAydncpO1xcbn1cXG5cXG4uaWNvbi1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAydnc7XFxufVxcbi5pY29ue1xcbiAgd2lkdGg6NTBweDtcXG59XFxuLmljb24gaW1ne1xcbiAgd2lkdGg6MTAwJVxcbn1cXG5cXG4udG9vbHN7XFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIC41dncpO1xcbn1cXG4udG9vbC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAydnc7XFxufVxcblxcbi5jb250YWN0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDg1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdCBoMiB7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbm1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4tMik7XFxuZm9udC1zaXplOiBjYWxjKDE2cHggKyAydncpO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDQwLjc1cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwLjkzOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdmFyKC0tc2Vjb25kYXJ5LXNoYWRvdyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ibGFjayk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5mb3JtLWNvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcblxcbn1cXG5cXG4uaW5wdXQtZmllbGQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jbWVzc2FnZSB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG5cXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ibGFjayk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTV2aDtcXG4gIGdhcDoxNXB4O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgXFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLnRleHQtY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46ICBhdXRvO1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gIH1cXG4gIC5zaGFwZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5wcm9qZWN0e1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICB9XFxuICAuZGFya3tcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcbiAgLmRldGFpbHN7XFxuICAgIGZsZXg6IDIgMSAwJTtcXG4gIH1cXG4gIC5pbWctY29udGFpbmVye1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbiAgLmNvbnRhY3QtZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjByZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5wcm9qZWN0e1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmRhcmt7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG4gIC5kZXRhaWxze1xcbiAgICBmbGV4OiAxIDEgMCU7XFxuICB9XFxuICAuZGVzY3tcXG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjZ2dyk7XFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDE2cHggKyAxLjZ2dyk7XFxuICB9XFxuICAuaW1nLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG4gIC5pbWctY29udGFpbmVyIGltZ3tcXG4gICAgYm94LXNoYWRvdzogLTEwcHggNXB4IDRweCByZ2IoNDQsIDM2LCAxNTYsIC41KVxcbiAgfVxcbiAgLmRhcmsgLnByb2plY3QtaW1nIC5pbWctY29udGFpbmVyIGltZ3tcXG4gICAgYm94LXNoYWRvdzogLTEwcHggNXB4IDRweCByZ2IoMjIwLCAxMjcsIDExNSwgLjUpXFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuZnVuY3Rpb24gY29udGFjdCgpe1xuXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBjb250YWN0Rm9ybS5pbm5lckhUTUwgPSBgPGgyPkdldCBJbiBUb3VjaCBXaXRoIE1lPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZm9ybVwiPlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby9mL3hrbmtlcXp6XCIgbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwic2VuZGVyLW5hbWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgTmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtZmllbGRcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJzZW5kZXItZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRW1haWxcIlxuICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWZpZWxkXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICBjb2xzPVwiNjBcIlxuICAgICAgICAgICAgICByb3dzPVwiMTBcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgTWVzc2FnZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1maWVsZFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxuICAgICAgICAgICAgaWQ9XCJzdWJtaXQtYnRuXCJcbiAgICAgICAgICAgIGNsYXNzPVwic3VibWl0LWJ0blwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcblxuICAgIHJldHVybiBjb250YWN0Rm9ybTtcblxuXG59XG5cbmZ1bmN0aW9uIGZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImljb24tY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVGFuemViOTI3N1wiIHRhcmdldD0nX2JsYW5rJz5cbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLWZpbGxlZC8zNDQvZmZmZmZmL2dpdGh1Yi5wbmdcIiBhbHQ9XCJHaXRodWJcIj5cbiAgPC9hPlxuICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdGFuemViLWNob3VkaHVyeS03MjI5MDIxNDAvXCIgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLWZpbGxlZC8zNDQvZmZmZmZmL2xpbmtlZGluLnBuZ1wiIGFsdD1cIkxpbmtlZEluXCI+XG4gICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPHA+RGVzaWduZWQgYW5kIERldmVsb3BlZCBieSBUYW56ZWVtIFhoaWRvcmkgJmNvcHk7IENvcHlyaWdodCAyMDIyPC9wPlxuICBgO1xuICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZXhwb3J0ICB7Y29udGFjdCwgZm9vdGVyfTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcblxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJzaGFwZSBmaXJzdFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzaGFwZSBzZWNvbmRcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2hhcGUgdGhpcmRcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2hhcGUgZm91cnRoXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCIgaWQ9XCJpbnRyb1wiPkhpIEknbTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiIGlkPVwiZnVsbE5hbWVcIj5UYW56ZWIgQ2hvdWRodXJ5PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiPldlYiBEZXZlbG9wZXI8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuXG4gICAgXG5cbiAgICByZXR1cm4gZWxlbWVudDtcblxufVxuXG5mdW5jdGlvbiBhZGRBbmltYXRpb24oKXtcbiAgICBsZXQgaW50cm8gPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludHJvJyk7XG4gICAgbGV0IGZ1bGxOYW1lID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsTmFtZScpO1xuICAgIGxldCB0aXRsZSA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICBsZXQgZmxvYXRJbnRybyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgaW50cm8uY2xhc3NMaXN0LmFkZCgnZmxvYXRpbmcnKTtcbiAgICB9LCAxMDAwKTtcbiAgICBcbiAgICBsZXQgZmxvYXROYW1lID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBmdWxsTmFtZS5jbGFzc0xpc3QuYWRkKCdmbG9hdGluZycpXG4gICAgfSwgMTkwMCk7XG4gICAgbGV0IGZsb2F0VGl0bGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0aW5nJylcbiAgICAgICAgIFxuICAgIH0sIDI4MDApO1xufVxuXG5leHBvcnQgIHtoZWFkZXIsIGFkZEFuaW1hdGlvbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBBZXR0aWRJbWcgZnJvbSAnLi9hZXR0aWQucG5nJ1xuaW1wb3J0IEJsb2dJbWcgZnJvbSAnLi9ibG9nLnBuZydcbmltcG9ydCBFdGNoYVNrZXRjaEltZyBmcm9tICcuL2V0Y2hhLXNrZXRjaC5wbmcnXG5pbXBvcnQgRXllU3B5SW1nIGZyb20gJy4vZXllc3B5LnBuZydcbmltcG9ydCBNYWVkaXR0SW1nIGZyb20gJy4vbWFlZGl0dC5wbmcnXG5cbmZ1bmN0aW9uIHByb2plY3RIZWFkZXIoKXtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWhlYWRlcicpO1xuXG4gIGhlYWRlci5pbm5lckhUTUwgPSBgPGgxPlByb2plY3RzPC9oMT5gO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGV0Y2hhU2tldGNoKCl7XG4gIGNvbnN0IGV5ZVNweSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBleWVTcHkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdkYXJrJyk7XG5cbiAgZXllU3B5LmlubmVySFRNTD1gICBcbiAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgPGgxIGNsYXNzPSdwcm9qZWN0LXRpdGxlJz5FdGNoLWEtc2tldGNoPC9oMT5cbiAgPGRpdiBjbGFzcz1cImljb24tY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVGFuemViOTI3Ny9ldGNoLWEtc2tldGNoXCIgdGFyZ2V0PSdfYmxhbmsnPlxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MtZmlsbGVkLzM0NC9mZmZmZmYvZ2l0aHViLnBuZ1wiIGFsdD1cIkdpdGh1YlwiPlxuICA8L2E+XG4gICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGFuemViOTI3Ny5naXRodWIuaW8vZXRjaC1hLXNrZXRjaC9cIiAgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzM0NC9mZmZmZmYvZG9tYWluLnBuZ1wiIGFsdD1cIldlYnNpdGVcIj5cbiAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3M9XCJkZXNjXCI+RGVzY3JpcHRpb246QSBicm93c2VyIHZlcnNpb24gb2Ygc29tZXRoaW5nIGJldHdlZW4gYSBza2V0Y2hwYWQgYW5kIGFuIEV0Y2gtQS1Ta2V0Y2guPC9wPlxuICAgICAgPHAgY2xhc3M9XCJ0b29sc1wiPlRvb2xzIFVzZWQ6PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cInRvb2wtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2h0bWwtNS0tdjEucG5nXCIgYWx0PVwiSFRNTFwiPiBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2NzczMucG5nXCIgYWx0PVwiQ1NTXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9qYXZhc2NyaXB0LS12MS5wbmdcIiBhbHQ9XCJKYXZhU2NyaXB0XCI+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbWdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBzcmM9XCIke0V0Y2hhU2tldGNoSW1nfVwiIGFsdD1cIlwiPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmBcblxucmV0dXJuIGV5ZVNweTtcbn1cblxuXG5cbmZ1bmN0aW9uIGV5ZVNweSgpe1xuICAgIGNvbnN0IGV5ZVNweSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGV5ZVNweS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cbiAgICBleWVTcHkuaW5uZXJIVE1MPWAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7RXllU3B5SW1nfVwiIGFsdD1cIlwiPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgICA8aDEgY2xhc3M9J3Byb2plY3QtdGl0bGUnPkV5ZSBTcHk8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9UYW56ZWI5Mjc3L2V5ZS1zcHlcIiB0YXJnZXQ9J19ibGFuayc+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLWZpbGxlZC8zNDQvZ2l0aHViLnBuZ1wiIGFsdD1cIkdpdGh1YlwiPlxuICAgIDwvYT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vdGFuemViOTI3Ny5naXRodWIuaW8vZXllLXNweS9cIiB0YXJnZXQ9J19ibGFuayc+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzM0NC9kb21haW4ucG5nXCIgYWx0PVwiV2Vic2l0ZVwiPlxuICAgIDwvYT5cbiAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3M9XCJkZXNjXCI+RGVzY3JpcHRpb246IFBob3RvIHRhZ2dpbmcgZ2FtZSBmZWF0dXJpbmcgdGhlIGZpbmFsIGltYWdlIGZyb20gPGEgaHJlZj1cImh0dHBzOi8vd3d3LnJlZGRpdC5jb20vci9wbGFjZS9jb21tZW50cy90d2Z0MXEvZnVsbF9zY3JlZW5zaG90X29mX3JwbGFjZV8yMDIyL1wiPnIvUGxhY2U8L2E+PC9wPlxuICAgIDxwIGNsYXNzPVwidG9vbHNcIj5Ub29scyBVc2VkOjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwidG9vbC1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvY3NzMy5wbmdcIiBhbHQ9XCJDU1NcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2phdmFzY3JpcHQtLXYxLnBuZ1wiIGFsdD1cIkphdmFTY3JpcHRcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L3dlYnBhY2sucG5nXCIgYWx0PVwiV2VicGFja1wiPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvZ29vZ2xlLWZpcmViYXNlLWNvbnNvbGUucG5nXCIgYWx0PVwiRmlyZWJhc2VcIj5cbiAgPC9kaXY+XG4gIDwvZGl2PmBcblxuICByZXR1cm4gZXllU3B5O1xufVxuXG5mdW5jdGlvbiBhZXR0aWQoKXtcbiAgY29uc3QgZXllU3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV5ZVNweS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ2RhcmsnKTtcblxuICBleWVTcHkuaW5uZXJIVE1MPWAgIFxuICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxuICA8aDEgY2xhc3M9J3Byb2plY3QtdGl0bGUnPkFldHRpZDwvaDE+XG4gIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1RhbnplYjkyNzcvYWV0dGlkLXdlYnNpdGVcIiB0YXJnZXQ9J19ibGFuayc+XG4gICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1maWxsZWQvMzQ0L2ZmZmZmZi9naXRodWIucG5nXCIgYWx0PVwiR2l0aHViXCI+XG4gIDwvYT5cbiAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly90YW56ZWI5Mjc3LmdpdGh1Yi5pby9hZXR0aWQtd2Vic2l0ZS9cIiB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMzQ0L2ZmZmZmZi9kb21haW4ucG5nXCIgYWx0PVwiV2Vic2l0ZVwiPlxuICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICA8cCBjbGFzcz1cImRlc2NcIj5EZXNjcmlwdGlvbjogU29jaWFsIE1lZGlhIHNpdGUgZm9yIHBob3RvcyBvZiBmb29kLCBkaXNoZXMsIGFuZCByZWNpcGVzPC9wPlxuICAgICAgPHAgY2xhc3M9XCJ0b29sc1wiPlRvb2xzIFVzZWQ6PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cInRvb2wtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9jc3MzLnBuZ1wiIGFsdD1cIkNTU1wiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvamF2YXNjcmlwdC0tdjEucG5nXCIgYWx0PVwiSmF2YVNjcmlwdFwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9vZmZpY2UvMzQ0L3JlYWN0LnBuZ1wiIGFsdD1cIlJlYWN0XCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9nb29nbGUtZmlyZWJhc2UtY29uc29sZS5wbmdcIiBhbHQ9XCJGaXJlYmFzZVwiPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInByb2plY3QtaW1nXCI+XG4gICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtBZXR0aWRJbWd9XCIgYWx0PVwiXCI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYFxuXG5yZXR1cm4gZXllU3B5O1xufVxuXG5cbmZ1bmN0aW9uIGJsb2coKXtcbiAgY29uc3QgZXllU3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV5ZVNweS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cbiAgZXllU3B5LmlubmVySFRNTD1gICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbWdcIj5cbiAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cbiAgICA8aW1nIHNyYz1cIiR7QmxvZ0ltZ31cIiBhbHQ9XCJcIj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XG4gIDxoMSBjbGFzcz0ncHJvamVjdC10aXRsZSc+QmxvZyBBcHA8L2gxPlxuICA8ZGl2IGNsYXNzPVwiaWNvbi1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9UYW56ZWI5Mjc3L2Jsb2ctYXBwXCIgdGFyZ2V0PSdfYmxhbmsnPlxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MtZmlsbGVkLzM0NC9naXRodWIucG5nXCIgYWx0PVwiR2l0aHViXCI+XG4gIDwvYT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImljb25cIj5cbiAgPGEgaHJlZj1cImh0dHBzOi8vdGFuemViOTI3Ny5naXRodWIuaW8vYmxvZy1hcHAvXCIgdGFyZ2V0PSdfYmxhbmsnPlxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMzQ0L2RvbWFpbi5wbmdcIiBhbHQ9XCJXZWJzaXRlXCI+XG4gIDwvYT5cbjwvZGl2PlxuICA8L2Rpdj5cbiAgPHAgY2xhc3M9XCJkZXNjXCI+RGVzY3JpcHRpb246IFRoZSBCbG9nIGFwcCBpcyBhIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYmxvZyBhcGkgd29ya2luZyBhcyBpbnRlbmRlZCwgYWxsb3dpbmcgdXNlcnMgdG8gdmlldyBhbmQgY29tbWVudCBvbiBwdWJsaXNoZWQgcG9zdHMuPC9wPlxuICA8cCBjbGFzcz1cInRvb2xzXCI+VG9vbHMgVXNlZDo8L3A+XG4gIDxkaXYgY2xhc3M9XCJ0b29sLWNvbnRhaW5lclwiPlxuPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2NzczMucG5nXCIgYWx0PVwiQ1NTXCI+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9qYXZhc2NyaXB0LS12MS5wbmdcIiBhbHQ9XCJKYXZhU2NyaXB0XCI+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9vZmZpY2UvMzQ0L3JlYWN0LnBuZ1wiIGFsdD1cIlJlYWN0XCI+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9ub2RlanMucG5nXCIgYWx0PVwiTm9kZVwiPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvbW9uZ29kYi5wbmdcIiBhbHQ9XCJNb25nb1wiPlxuPC9kaXY+XG48L2Rpdj5gXG5cbnJldHVybiBleWVTcHk7XG59XG5mdW5jdGlvbiBtYWVkaXR0KCl7XG4gIGNvbnN0IGV5ZVNweSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBleWVTcHkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdkYXJrJyk7XG5cbiAgZXllU3B5LmlubmVySFRNTD1gICBcbiAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgPGgxIGNsYXNzPSdwcm9qZWN0LXRpdGxlJz5NYWVkaXR0PC9oMT5cbiAgPGRpdiBjbGFzcz1cImljb24tY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVGFuemViOTI3Ny9tYWVkaXR0LWFwcFwiIHRhcmdldD0nX2JsYW5rJz5cbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLWZpbGxlZC8zNDQvZmZmZmZmL2dpdGh1Yi5wbmdcIiBhbHQ9XCJHaXRodWJcIj5cbiAgPC9hPlxuICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3RhbnplYjkyNzcuZ2l0aHViLmlvL21hZWRpdHQtYXBwL1wiIHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8zNDQvZmZmZmZmL2RvbWFpbi5wbmdcIiBhbHQ9XCJXZWJzaXRlXCI+XG4gICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzPVwiZGVzY1wiPkRlc2NyaXB0aW9uOiBTb2NpYWwgTWVkaWEgc2l0ZSB0aGF0IGFsbG93cyB1c2VycyB0byBzaWduIHVwLCBzaWduIGluLCBzdWJtaXQgcG9zdHMsIGxpa2UgcG9zdHMsIGNvbW1lbnQgb24gcG9zdHMsIGFuZCBhZGQgZnJpZW5kczwvcD5cbiAgICAgIDxwIGNsYXNzPVwidG9vbHNcIj5Ub29scyBVc2VkOjwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b29sLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zNDQvY3NzMy5wbmdcIiBhbHQ9XCJDU1NcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L2phdmFzY3JpcHQtLXYxLnBuZ1wiIGFsdD1cIkphdmFTY3JpcHRcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL29mZmljZS8zNDQvcmVhY3QucG5nXCIgYWx0PVwiUmVhY3RcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzQ0L25vZGVqcy5wbmdcIiBhbHQ9XCJOb2RlXCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM0NC9tb25nb2RiLnBuZ1wiIGFsdD1cIk1vbmdvXCI+XG4gIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInByb2plY3QtaW1nXCI+XG4gICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtNYWVkaXR0SW1nfVwiIGFsdD1cIlwiPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmBcblxucmV0dXJuIGV5ZVNweTtcbn1cblxuZXhwb3J0IHtleWVTcHksIGFldHRpZCwgcHJvamVjdEhlYWRlciwgZXRjaGFTa2V0Y2gsIGJsb2csIG1hZWRpdHR9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7aGVhZGVyLCBhZGRBbmltYXRpb259IGZyb20gXCIuL2hlYWRcIjtcbmltcG9ydCB7IGV5ZVNweSwgYWV0dGlkLCBwcm9qZWN0SGVhZGVyLCBldGNoYVNrZXRjaCwgYmxvZywgbWFlZGl0dCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQge2NvbnRhY3QsIGZvb3Rlcn0gZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykuYXBwZW5kKGhlYWRlcigpLCBwcm9qZWN0SGVhZGVyKCksIGV0Y2hhU2tldGNoKCksIGV5ZVNweSgpLCBhZXR0aWQoKSwgYmxvZygpLCBtYWVkaXR0KCksIGNvbnRhY3QoKSwgZm9vdGVyKCkpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKF9ldmVudCkgPT4ge1xuICAgIGFkZEFuaW1hdGlvbigpO1xuICB9KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=