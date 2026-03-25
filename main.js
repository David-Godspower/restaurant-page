/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Define the default (Light) colors */\r\n  :root {\r\n    --bg-color: #f8f8f8;\r\n    --text-color: #333;\r\n    --card-bg: white;\r\n    --nav-bg: #333;\r\n  }\r\n\r\n/* Define the Dark Mode colors */\r\n.dark-theme {\r\n  --bg-color: #121212;\r\n  --text-color: #f8f8f8;\r\n  --card-bg: #1e1e1e;\r\n  --nav-bg: #000;\r\n}\r\n\r\n/* Apply variables and add a smooth transition */\r\nbody {\r\n  font-family: Arial, sans-serif;\r\n  margin: 0;\r\n  background-color: var(--bg-color);\r\n  color: var(--text-color);\r\n  transition: background-color 0.3s ease, color 0.3s ease;\r\n}\r\n\r\nheader {\r\n  background-color: var(--nav-bg);\r\n  padding: 15px;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n  color: white;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  color: #f39c12;\r\n}\r\n\r\nbutton.active {\r\n  background-color: #555; /* Slightly lighter than nav-bg so it shows up in both modes */\r\n  color: white;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n}\r\n\r\n/* Hero Section */\r\n.hero {\r\n  width: 100%;\r\n  height: 600px;\r\n  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(\"https://images.unsplash.com/photo-1555992336-03a23c7b20ee\")center/cover no-repeat;\r\n  display: flex;\r\n  flex-direction: column;\r\n  top: 0;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n.hero h1 {\r\n  font-size: 48px;\r\n  margin-bottom: 10px;\r\n  text-shadow: 3px 4px 8px rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.hero p {\r\n  font-size: 20px;\r\n  max-width: 600px;\r\n  text-shadow: 2px 3px 6px rgba(0, 0, 0, 0.9);\r\n} \r\n\r\n/* Content & Grid */\r\n#content {\r\n  text-align: center;\r\n  padding: 40px;\r\n  margin-bottom: 100px; /* Bumper for the fixed footer */\r\n}\r\n\r\n#content h1 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.menu-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  gap: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.menu-item {\r\n  background-color: var(--card-bg);\r\n  color: var(--text-color);\r\n  padding: 20px;\r\n  border-radius: 12px;\r\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\r\n  text-align: center;\r\n  font-size: 18px;\r\n  transition: transform 0.2s ease, background-color 0.3s ease, color 0.3s ease;\r\n}\r\n\r\n.menu-item:hover {\r\n  transform: scale(1.05);\r\n  cursor: pointer;\r\n}\r\n\r\n.menu-item img {\r\n  width: 100%;\r\n  height: 200px;\r\n  object-fit: cover;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Footer styles*/\r\nfooter {\r\n  background-color: var(--nav-bg);\r\n  color: white;\r\n  text-align: center;\r\n  padding: 15px;\r\n  position: fixed;\r\n  width: 100%;\r\n  bottom: 0;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\nfooter a {\r\n  color: #f39c12;\r\n  text-decoration: none;\r\n}\r\n\r\nfooter a:hover {\r\n  text-decoration: underline;\r\n  font-size: 18px;\r\n}\r\n\r\nfooter p {\r\n  margin: 0;\r\n}\r\n\r\nfooter .icons {\r\n  margin-top: 10px;\r\n}\r\n\r\nfooter .icons a {\r\n  margin: 0 10px;\r\n  font-size: 20px;\r\n}\r\n\r\nfooter .icons a:hover {\r\n  color: #f39c12;\r\n}\r\n\r\n\r\n/* --- Home Page Specific Styles --- */\r\n\r\n.cta-btn {\r\n  margin-top: 20px;\r\n  padding: 15px 30px;\r\n  background-color: #f39c12;\r\n  color: white;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  border-radius: 8px;\r\n  transition: background-color 0.3s ease, transform 0.2s ease;\r\n}\r\n\r\n.cta-btn:hover {\r\n  background-color: #e67e22;\r\n  transform: translateY(-3px); /* Gives it a slight \"lift\" when hovered */\r\n  color: white;\r\n}\r\n\r\n.info-section {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 40px;\r\n  margin-top: 50px;\r\n  padding: 0 20px;\r\n  flex-wrap: wrap; /* Ensures it stacks on mobile */\r\n}\r\n\r\n.info-card {\r\n  background-color: var(--card-bg); /* Uses your dark mode variable! */\r\n  color: var(--text-color);\r\n  padding: 30px;\r\n  border-radius: 12px;\r\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\r\n  min-width: 250px;\r\n  text-align: center;\r\n  transition: background-color 0.3s ease, color 0.3s ease;\r\n}\r\n\r\n.info-card h3 {\r\n  margin-top: 0;\r\n  color: #f39c12; /* Matches the CTA button */\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact */ \"./src/pages/contact.js\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about */ \"./src/pages/about.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction clearContent() {\r\n  const content = document.getElementById(\"content\");\r\n  content.textContent = \"\";\r\n}\r\n\r\nconst pages = {\r\n  home: _pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n  menu: _pages_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n  contact: _pages_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n  about: _pages_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\r\n};\r\n\r\nconst nav = document.querySelector(\"nav\");\r\nnav.addEventListener(\"click\", (e) => {\r\n  if (e.target.tagName !== \"BUTTON\") return;\r\n\r\n  const page = e.target.id;\r\n\r\n  document.querySelectorAll(\"button\").forEach(btn => {\r\n    btn.classList.remove(\"active\");\r\n  });\r\n\r\n  e.target.classList.add(\"active\");\r\n\r\n  if (pages[page]) {\r\n    clearContent();\r\n    pages[page]();\r\n  }\r\n});\r\n// footer year\r\ndocument.getElementById(\"year\").textContent = new Date().getFullYear();\r\n\r\n// Load default page\r\n(0,_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n\r\n\r\n// --- Dark Mode Toggle Feature ---\r\nconst themeBtn = document.createElement(\"button\");\r\nthemeBtn.id = \"theme-toggle\";\r\nthemeBtn.style.marginLeft = \"auto\"; // Pushes it to the right of the nav\r\n\r\n// Check local storage to see if they visited before and set the right icon\r\nif (localStorage.getItem(\"theme\") === \"dark\") {\r\n  document.body.classList.add(\"dark-theme\");\r\n  themeBtn.textContent = \"☀️ Light\";\r\n} else {\r\n  themeBtn.textContent = \"🌙 Dark\";\r\n}\r\n\r\n// Attach it to the nav\r\nconst navBar = document.querySelector(\"nav\");\r\nnavBar.appendChild(themeBtn);\r\n\r\n// Handle the click\r\nthemeBtn.addEventListener(\"click\", () => {\r\n  document.body.classList.toggle(\"dark-theme\");\r\n  \r\n  if (document.body.classList.contains(\"dark-theme\")) {\r\n    localStorage.setItem(\"theme\", \"dark\");\r\n    themeBtn.textContent = \"☀️ Light\";\r\n  } else {\r\n    localStorage.setItem(\"theme\", \"light\");\r\n    themeBtn.textContent = \"🌙 Dark\";\r\n  }\r\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/pages/about.js"
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout(){\r\n    const content = document.getElementById(\"content\");\r\n    const container = document.createElement(\"div\")\r\n\r\n    const title = document.createElement(\"h1\");\r\n    title.textContent = \"About Us\";\r\n\r\n    container.appendChild(title);\r\n\r\n    const aboutDetails = document.createElement(\"p\");\r\n    aboutDetails.textContent = \"We are a team of passionate food enthusiasts dedicated to providing the best dining experience.\";\r\n\r\n    container.appendChild(aboutDetails);\r\n\r\n    content.appendChild(container);\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/about.js?\n}");

/***/ },

/***/ "./src/pages/contact.js"
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact(){\r\n    const content = document.getElementById(\"content\");\r\n    const container = document.createElement(\"div\")\r\n\r\n    const title = document.createElement(\"h1\");\r\n    title.textContent = \"Contact\";\r\n\r\n    content.appendChild(title);\r\n\r\n\r\n    const infoSection = document.createElement(\"div\");\r\n    infoSection.classList.add(\"info-section\");\r\n\r\n\r\n\r\n  const hoursDiv = document.createElement(\"div\");\r\n  hoursDiv.classList.add(\"info-card\");\r\n  hoursDiv.innerHTML = `\r\n    <h3>🕒 Hours</h3>\r\n    <p>Mon - Fri: 8am - 10pm</p>\r\n    <p>Sat - Sun: 9am - 11pm</p>\r\n  `;\r\n\r\n  const locationDiv = document.createElement(\"div\");\r\n  locationDiv.classList.add(\"info-card\");\r\n  locationDiv.innerHTML = `\r\n    <h3>📍 Location</h3>\r\n    <p>123 Secretariat Road</p>\r\n    <p>Ibadan, Oyo State</p>\r\n  `;\r\n\r\n  const contactDetails = document.createElement(\"div\");\r\n  contactDetails.classList.add(\"info-card\");\r\n  contactDetails.innerHTML = `\r\n    <h3> Contact Details</h3>\r\n    <p>Whatsapp - +2347026111130</p>\r\n    `;\r\n\r\n  infoSection.appendChild(hoursDiv);\r\n  infoSection.appendChild(locationDiv);\r\n  infoSection.appendChild(contactDetails);\r\n\r\n\r\n  content.appendChild(infoSection);\r\n\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact.js?\n}");

/***/ },

/***/ "./src/pages/home.js"
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  // --- 1. HERO SECTION ---\r\n  const hero = document.createElement(\"div\");\r\n  hero.classList.add(\"hero\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.textContent = \"David's Restaurant\";\r\n\r\n  const description = document.createElement(\"p\");\r\n  description.textContent =\r\n    \"Welcome! Enjoy the best meals in town. Fresh food, great taste, unforgettable experience.\";\r\n\r\n  const ctaBtn = document.createElement(\"button\");\r\n  ctaBtn.textContent = \"View Our Menu\";\r\n  ctaBtn.classList.add(\"cta-btn\");\r\n  \r\n  // This cleverly triggers your existing navbar routing!\r\n  ctaBtn.addEventListener(\"click\", () => {\r\n    document.getElementById(\"menu\").click(); \r\n  });\r\n\r\n  hero.appendChild(title);\r\n  hero.appendChild(description);\r\n  hero.appendChild(ctaBtn);\r\n\r\n  // --- 2. INFO SECTION (Hours & Location) ---\r\n  const infoSection = document.createElement(\"div\");\r\n  infoSection.classList.add(\"info-section\");\r\n\r\n  const hoursDiv = document.createElement(\"div\");\r\n  hoursDiv.classList.add(\"info-card\");\r\n  hoursDiv.innerHTML = `\r\n    <h3>🕒 Hours</h3>\r\n    <p>Mon - Fri: 8am - 10pm</p>\r\n    <p>Sat - Sun: 9am - 11pm</p>\r\n  `;\r\n\r\n  const locationDiv = document.createElement(\"div\");\r\n  locationDiv.classList.add(\"info-card\");\r\n  locationDiv.innerHTML = `\r\n    <h3>📍 Location</h3>\r\n    <p>123 Secretariat Road</p>\r\n    <p>Ibadan, Oyo State</p>\r\n  `;\r\n\r\n  infoSection.appendChild(hoursDiv);\r\n  infoSection.appendChild(locationDiv);\r\n\r\n  // --- APPEND EVERYTHING ---\r\n  content.appendChild(hero);\r\n  content.appendChild(infoSection);\r\n}              \n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?\n}");

/***/ },

/***/ "./src/pages/menu.js"
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  const container = document.createElement(\"div\");\r\n\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.textContent = \"Menu\";\r\n\r\n  container.appendChild(title);\r\n\r\n  const menuItems = [\r\n    { name: \"Spaghetti Carbonara\", \r\n      price: \"$12\",\r\n      description: \"Classic Italian pasta with eggs, cheese, pancetta, and pepper.\",\r\n      image: \"https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhZ2hldHRpfGVufDB8fDB8fHww\"},\r\n    { name: \"Margherita Pizza\", \r\n      price: \"$10\", \r\n      description: \"Classic pizza with tomato sauce, mozzarella, and basil.\", \r\n      image: \"https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenphfGVufDB8MHwwfHx8MA%3D%3D\" },\r\n    { name: \"Caesar Salad\", \r\n      price: \"$8\", \r\n      description: \"Romaine lettuce with Caesar dressing, croutons, and parmesan cheese.\", \r\n      image: \"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWR8ZW58MHwwfDB8fHww\" },\r\n    { name: \"Grilled Salmon\", \r\n      price: \"$15\", \r\n      description: \"Fresh salmon fillet grilled to perfection with lemon and herbs.\", \r\n      image: \"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FsbW9uJTIwZmlsbGV0fGVufDB8fDB8fHww\" },\r\n    { name: \"Tiramisu\", \r\n      price: \"$6\", \r\n      description: \"Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.\", \r\n      image: \"https://images.unsplash.com/photo-1712262582593-e13609aaf12b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRpcmFtaXN1fGVufDB8MHwwfHx8MA%3D%3D\" }\r\n  ];\r\n\r\n\r\nconst grid = document.createElement(\"div\");\r\ngrid.classList.add(\"menu-grid\");\r\n\r\nmenuItems.forEach((item) => {\r\n  const food = document.createElement(\"div\");\r\n  food.classList.add(\"menu-item\");\r\n\r\n  const foodImage = document.createElement(\"img\");\r\n  foodImage.src = item.image;\r\n  foodImage.alt = item.name;\r\n\r\n  const foodInfo = document.createElement(\"div\");\r\n  foodInfo.classList.add(\"food-info\");\r\n\r\n  const nameLabel = document.createElement(\"h3\");\r\n  nameLabel.textContent = item.name;\r\n\r\n  const priceLabel = document.createElement(\"p\");\r\n  priceLabel.classList.add(\"price\");\r\n  priceLabel.textContent = item.price;\r\n\r\n  const descriptionLabel = document.createElement(\"p\");\r\n  descriptionLabel.classList.add(\"description\");\r\n  descriptionLabel.textContent = item.description;\r\n\r\n  foodInfo.appendChild(nameLabel);\r\n  foodInfo.appendChild(priceLabel);\r\n  foodInfo.appendChild(descriptionLabel);\r\n\r\n  food.appendChild(foodImage);\r\n  food.appendChild(foodInfo);\r\n\r\n  grid.appendChild(food); \r\n});\r\n\r\ncontainer.appendChild(grid);\r\ncontent.appendChild(container);\r\n}                                                                           \r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;