/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(7);

	__webpack_require__(9);

	__webpack_require__(11);

	__webpack_require__(14);

	__webpack_require__(13);

	__webpack_require__(16);

	__webpack_require__(17);

	__webpack_require__(19);

	var _vue = __webpack_require__(20);

	var _vue2 = _interopRequireDefault(_vue);

	var _nav = __webpack_require__(22);

	var _nav2 = _interopRequireDefault(_nav);

	var _sideBar = __webpack_require__(26);

	var _sideBar2 = _interopRequireDefault(_sideBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sourceRoot = './source/',
	    distRoot = './dist/';

	//注册组件
	_vue2.default.component('list', _nav2.default);
	_vue2.default.component('side-bar', _sideBar2.default);

	//初始化根元素
	var root = new _vue2.default({
		el: '#vue-root',
		data: {
			listShow: false
		}
	});
	//开场动画
	function showStart() {
		setTimeout(function () {
			root.listShow = true;
		}, 1000);
	}
	window.addEventListener('load', showStart, false);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js!./red.css", function() {
				var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js!./red.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/* iCheck plugin Flat skin, red\n----------------------------------- */\n.icheckbox_flat-red,\n.iradio_flat-red {\n    display: inline-block;\n    *display: inline;\n    vertical-align: middle;\n    margin: 0;\n    padding: 0;\n    width: 20px;\n    height: 20px;\n    background: url(" + __webpack_require__(1) + ") no-repeat;\n    border: none;\n    cursor: pointer;\n}\n\n.icheckbox_flat-red {\n    background-position: 0 0;\n}\n    .icheckbox_flat-red.checked {\n        background-position: -22px 0;\n    }\n    .icheckbox_flat-red.disabled {\n        background-position: -44px 0;\n        cursor: default;\n    }\n    .icheckbox_flat-red.checked.disabled {\n        background-position: -66px 0;\n    }\n\n.iradio_flat-red {\n    background-position: -88px 0;\n}\n    .iradio_flat-red.checked {\n        background-position: -110px 0;\n    }\n    .iradio_flat-red.disabled {\n        background-position: -132px 0;\n        cursor: default;\n    }\n    .iradio_flat-red.checked.disabled {\n        background-position: -154px 0;\n    }\n\n/* HiDPI support */\n@media (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi), (min-resolution: 1.25dppx) {\n    .icheckbox_flat-red,\n    .iradio_flat-red {\n        background-image: url(" + __webpack_require__(5) + ");\n        -webkit-background-size: 176px 22px;\n        background-size: 176px 22px;\n    }\n}", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./animate.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./animate.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2016 Daniel Eden\n */\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n.animated.flipOutX,\n.animated.flipOutY,\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n@-webkit-keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    -webkit-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0,-4px,0);\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n@keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    -webkit-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0,-4px,0);\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n}\n\n@-webkit-keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n@keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n}\n\n@-webkit-keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand;\n}\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.headShake {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-name: headShake;\n  animation-name: headShake;\n}\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n.swing {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n}\n\n@-webkit-keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n}\n\n@-webkit-keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n@keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n.jello {\n  -webkit-animation-name: jello;\n  animation-name: jello;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n}\n\n@-webkit-keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(.97, .97, .97);\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(.97, .97, .97);\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n}\n\n@-webkit-keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown;\n}\n\n@-webkit-keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n\n@-webkit-keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n}\n\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown;\n}\n\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft;\n}\n\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight;\n}\n\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig;\n}\n\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig;\n}\n\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig;\n}\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig;\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig;\n}\n\n@-webkit-keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n}\n\n@-webkit-keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig;\n}\n\n@-webkit-keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n}\n\n@-webkit-keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig;\n}\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig;\n}\n\n@-webkit-keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n@keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip;\n}\n\n@-webkit-keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n}\n\n@-webkit-keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY;\n}\n\n@-webkit-keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@-webkit-keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n}\n\n@-webkit-keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn;\n}\n\n@-webkit-keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft;\n}\n\n@-webkit-keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight;\n}\n\n@-webkit-keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft;\n}\n\n@-webkit-keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight;\n}\n\n@-webkit-keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut;\n}\n\n@-webkit-keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft;\n}\n\n@-webkit-keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight;\n}\n\n@-webkit-keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft;\n}\n\n@-webkit-keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight;\n}\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut;\n}\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n}\n\n@-webkit-keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown;\n}\n\n@-webkit-keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft;\n}\n\n@-webkit-keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInRight {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight;\n}\n\n@-webkit-keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp;\n}\n\n@-webkit-keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut;\n}\n\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown;\n}\n\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n.zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft;\n}\n\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n.zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight;\n}\n\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp;\n}\n\n@-webkit-keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n}\n\n@-webkit-keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft;\n}\n\n@-webkit-keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n\n@-webkit-keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInUp {\n  -webkit-animation-name: slideInUp;\n  animation-name: slideInUp;\n}\n\n@-webkit-keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.slideOutDown {\n  -webkit-animation-name: slideOutDown;\n  animation-name: slideOutDown;\n}\n\n@-webkit-keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft;\n}\n\n@-webkit-keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n\n@-webkit-keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp;\n}\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./reset.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./reset.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box; }\r\n\r\nul, li {\r\n  list-style: none; }\r\n\r\n/*# sourceMappingURL=reset.css.map */\r\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\r\nbody, html {\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: \"Helvetica Neue\", \"Hiragino Sans GB\", \"Segoe UI\", \"Microsoft Yahei\", 微软雅黑, Tahoma, Arial, STHeiti, sans-serif;\r\n  color: white; }\r\n\r\n.container {\r\n  top: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: url(" + __webpack_require__(13) + ");\r\n  background-size: cover; }\r\n  .container::before {\r\n    content: '';\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    background-color: rgba(0, 0, 0, 0.5); }\r\n  .container .list-content {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; }\r\n\r\n.global-title {\r\n  color: white;\r\n  text-align: center;\r\n  height: 100px;\r\n  line-height: 100px;\r\n  letter-spacing: 5px; }\r\n\r\n.list {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0; }\r\n  .list .list-content {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    align-content: center; }\r\n\r\n.list-item {\r\n  width: 250px;\r\n  height: 250px; }\r\n\r\n.list-item-wraper {\r\n  border: 10px solid #3498DB;\r\n  background-color: #3498DB;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 1em rgba(255, 255, 255, 0.5);\r\n  display: block;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  color: white;\r\n  transition: all 0.2s ease-in-out;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 5px solid white;\r\n  z-index: 1; }\r\n  .list-item-wraper .list-item-name {\r\n    display: inline-block;\r\n    font-size: 20px; }\r\n  .list-item-wraper:hover {\r\n    color: black;\r\n    background-color: white;\r\n    animation-name: rubberBand;\r\n    animation-duration: .75s; }\r\n\r\n.list-item-wraper-hover {\r\n  border: 10px solid #3498DB; }\r\n  .list-item-wraper-hover::before {\r\n    content: 'DEMO';\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    text-align: center;\r\n    line-height: 230px;\r\n    transition: all 0.2s ease-in-out;\r\n    font-size: 20px; }\r\n\r\n/*# sourceMappingURL=main.css.map */\r\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QDIRXhpZgAASUkqAAgAAAAFABoBBQABAAAASgAAABsBBQABAAAAUgAAACgBAwABAAAAAgAAAJiCAgAjAAAAWgAAAGmHBAABAAAAfgAAAAAAAABIAAAAAQAAAEgAAAABAAAATWFyc2VsIHZhbiBPb3N0ZW4sIHd3dy5zcXVpdmVyLmNvbQAABQAAkAcABAAAADAyMTAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAALAEAAADoAQAAQAAAKgCAAAAAAAA/+EEJmh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjgwNzBDRUVGNDc0RTE1RjcyNzg1Qzk2OEVCOEE3Qzg5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCNTEzMTA4QUVGNzExRTU5RDIxQTc2RTA2MkU4RDlGIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCNTEzMTA3QUVGNzExRTU5RDIxQTc2RTA2MkU4RDlGIiB4bXA6Q3JlYXRvclRv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8zy5Me5yLe0b5OXbwrOFrXGudes/PV+PY7+53z9vvl+K/P6v1TnP7HZ9RNdu59N1z2tTo7x0ToabMuiaatNFWGqLa05WraTW1pM1oCNM1XcSatmqLmxqcIGa6m1FmTQJmBKI0hDabKqNRj8ffv8A8KDAARElSCgIAAImmDC1DQh4LoeTzWsmpDJQQ9WXMNtGsiWddz5H1Oj8P61/Dtp83arnuvNqyrrs9c143zkwYZzFEKurFE60EUjm4pqUcnFwzWSa8/HkGup14+q642hly87wYvDwyY3y83g43lzp156XzS9jefsnr8/uPTw89rOWoxks4+5x7LVyHJzfJbnDm92s+g1noefpwM9fr1x6jePRaes3jvbz6nc9K1246mprzbjRFy3xMsJJYoO2MzramrVopHbFa2Et8VWJZNWldy4kDVFwkunR3NaQqotVpBBqNn5C/e/hRWgNUgAAojErRKIKyNw9xAPJDHkLJuQEhjJc7K0layJ51u8fr735v70eHXVw62celWLHOtVaePSEczGsNnEi7pnlZl28yNO1caamZoozrn51hIy8nF40bO/PqaZkyy4OGuNm8nnrg41kxbNt2kV4udcbU4+L2dz7T7/Jb15cOuVrnnby1k1nx9vlziS8mXnWdW5+67z8/wCPb2u8fS+mfpvTPvU9tb2WullI2RbW/IAsp2SW2JLrl0ylSVkSzMNJLTMl1y7z2TUy1qDNi1rC4rRBQqSmtE0rAvzYVVZbE1nm/jf+gfhGjEkmkAIINAIKIKADMemQYQ6SvMFcriSyUJDJc9NWsgJS6/P6PQfmvvx8nonjV/n6w56nb1prleTt5fyddVdHrnzXNs78/P5ujrjVrCol0allRIy8rOiXGmdeJi26zy865OGDGozWGXBhjza2bNt+4bZI5hx8b5C7+mPqPs83X68POXWHWfMtYNY8w154wWZre9Z3ZMldjWf0n35+3l9lL6aa9E1qjpZTJGmoVI1ZXatOpozbIsQXRLTZszYga86Rm1nn6zvzrFvLXo407amZNTkouKtHm2NuyCNKtJRbKRDWhm+az3Ls/H3738MwAAQUBGRGogoIHN2rYRDAQEsjOpqElZIeTJZ6NmTQWRZjp6H8399+D21ZXcOmrl07fPpLG8fHfF5a8h59+b8/Tvble5PtzwazZ156dJWtNerCZtsiuPNx1kze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Suet5qfX/te3L0/yz/afPNevFb/n3dH4P7XOLb4r2ixXvGq8y7rjHek9ZtNONcf8r0CsR704DpM6r0p6+a93iv7X/L7r5OlerfFffvmiZMObT7V3uzma68cfquI79VW85f8AMdyMm6+3r/vdr94a3w/isye9c6O/32r4/qvvapv+OOlc4jr81fzEk1a+jnj70rzim0m+eanN8e3WvhOO0VvScCmY/dct74qfvFPpHGq+24qS94n7ap/lTjkyTW8Q6n3+K3wfFet3FfiuvIytH3a5p7y55r2JzXBGak9Cn0NOtW8N5p4xz+K+T3q/TrBmue9vzXiJ4px13Nd5r6d/xXyXisR79q+lq/7j8Vx9ijX3xXtm/SreetcVFvnrV78ua9nvivS0axVr4f8AHePvFecYCnsffNR64p/16V981vmo/VjFRrmsze/29J2tR9lrjjdH7p+rW13rnn6K9pb+iucA1x0d0Y82tXNdc/vir24kxXTbinr+a49651mGumd5r3krn3eetY535ele2P0rvJzXxlax8BXuc1c5OtY8U4+27eaz9y160b55q59966Ya9lrnrNv8x0jivstWtqf7XO+pXTEarjo8Vf0jzX7tX1r8xauOnSpP7W+riupttV/mvXq/5+etfHen+lfCV+fb/J9fhtWv5/mZ2W8/48eOK+kV7T71Y74ivj6iuNVPeCuW16TjzA1Vt9aajHZr8Xv819avzxNR/wBa45MfdUP/AGpicpHpWX2vWeO1J8SeK9Otc+neli+P2rn0j8V7s5qdU/NdI7f9rj7JXPW+Kff+10SeWpvHTGlTrRo/xOOOOK44/tL/AMrmd1OMKao9J5rnixFfe9Pr2a46fqud/NOwvua9zdqjHaueDiuONThXNfQjdccO/ZXb+un+R481811tO2ulprhyaep/K4jVOffv/hHrprrxjoU/9/7XbLGNVzdt79aj+xWW12MUjiYMVH8rjrbNdMlrVHxikfGv87etc5pHEPWs/cKjpYM/e9euMxUYjRnigx7f2o8vM4r72q8cZq/hw0EeCg9q430r37/4/j2r904M5++1FviudTWPHu10+lcxGL0cKSiTOg1CvIsI60pJWLNl9n9owzAu3XiTUT1pUXJ7vbvUKh4HqN5PSnbntRGZ/VBBQiGHiaURsb2daVRiJIB9KBKGXrlsRqL19LZodiZj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6pDEp4461bfFmsvFIcswOIkpmszk4asyb3toqRBM+h4oCblOXntU8BNrSV8AZnmski2prJMx1M1OQXtOVQEyZelTiyBhXdDINba//9oADAMBAAIAAwAAABCAAAAAAAACCAAAAQAAgQCAAAAgEAAAAAAACQAABAAAQAAAAAACEAAAAAAAAAAgAAgCACAAAgACAAAAgAAAAAECAAAAAAAECAAAACAAAACCAAAACQAAgIEAiQAAAAAAAAAQAQAAAAAAQAAAAACAAAAAKAQAAQAAAAASQKAQAAAAQAAAAQAAAAAAAAAAQAAQECAAACEACCAAAAQgAAAAAAAAACAQAARAQAACAAAAAQAAQAkRAAAQAAAAAAAACQAACCQAAAAAASAAAAAACAACAAACIAAAAAABgAAIAAAAAEBAEAAAAAAAAQCAQAACAEAQAAgAAAAgAEAAAAKAABAAAAAQAIQAQAACAIgAADEBgYIvAAAkIJhAAOgAgAAAAAAQAAAAAAAAAAAAAEESAAAAAIAAAEAAAAAAAAAgQCAAAAAAIQQARAEEAAAAAoIIQgAIGAYCAgAAAAAAAACCCQAAAACACkAAQQABAAQAAAAACAAQAAAAACAAAAAACAAAAQAyAAAAAACAAACACQQAAACAQAAAAAQACAAAAACAAASAAAAAQAEBwQAEAAAACAgAAQAACAACAAAEAACAAAAAACACAAAAAAAAAACAAAAAQAgACAAAAEECAAAAAAAAQABMBAmAACAAACAAAACAAACAGQAAAAAAgCiQAAgCAAgAAAAQCCAEIAQACAAAAAAAAAAAQAAQAAgQAIAAAAAAAAQACAAAAAAAAgAAAAAAgQAAACAAAAAAAACAAAAAAAAAAACQEAAACAQABAAAAACgEQAAAAABDQCAAAAAAAAAQACAAAAQAAAAQAAAACAAAAACAAgAQAAAAQAQAAAACACAAAAACAAAACAAAAADAQAQQAAgCAAAAAAQAACACCCQAAAEACACQAAAAQAAACAAQAAAEAAAAAAAAAIAAAAAAAQAAASAAAACSAAAAAAAAAQAgAAAAAAAAAQAAAASEAAACACAEAQAAAAAAAAACgAAASAAASVAAAAAUAgQAAAACAQAQAAAAAAAAAAQACAAAACAAAAAQAAAAAACAAAAAAAAQGAgAAEACAAAAQAACAAAAACUGCAAQAACYBBhBAAABCACAAAECACAAAgAAAEAAAAAAAAAAEQCAAAgAAAEACAAAAAAAAAAACAAACQgAAAAAAAQICAAAACEAAAAAAEAAAAAAAAAgCAgAAEAACQQCAAAAAAgCAAAAAAAAAAAAAAAAACAAAAAARACQAApABgAJAFBAQAAABIQCAQAAAAAAAAAQAAgAAAAAAAAAAAAAAAAAAQCAACAAAAAAAAACAACAAARAAgIAEAAgAAAQAQAIgQCCAAACCAAAAAAAAAAAGAAAAAAAAQUCACAEAAAAQAAAAAAAAGAQAAAQAAIwAAIMBgQKEAASAAAwEgIAEAAAAAgKAAAAAAEAACiAAQAAAAACACAAAAAAQgAAAAAAAAQCAAAASBAgAEAIGUAgAAAAAAIgAgCAQAAQAAEAAQAACAAAAgQAASAAACAIwAAAAAAAAAAAAAAAQAAQCAEAAAAgAAACACEAAACQAAAAAEAEAAABABgAAQACACAQAACAACGQQCgQAQAAACAAACgACQCAEAAAAKAAEEAkAAAAAQCBQgAgAAACCAaCRQAABAAgAQAAAACAAAAAQAGAAQEAAQAAgAAAAAAAAAgQAAQAgBBABhAA4ABAACAAAAASAABAAAAAAAEAAAECKAAAEQQACAAAQAQQCQAAAAAAAAAAAIACAAAAAEAIEgAAGAQCAAACCJAAAAIAAAADAAgAAAAEAAFIACCAAAQAAAAQCAAgQAEAAQAgQAQAAAAQAAAAAAQQJAgAABQAiSQAAaQCAIAAAAACAAAAICAAAgAAAQACSSAAAAEAAAAAACEAAAAAAQgAAgCAEAAAIUBAAAEQAIAACAAAgBgAAAQAgQACAAAAAAEAAYAAAAACAAAAAAECYAECSAQAQAAAAAAAAAACARAAAAEAEEAAQACAACEAAEQADoBAIAAAAAQQAQCAASIAAQAAQAQQiAAAAAEQAAAAAAAAEAAQECAAAAAEAAAAAAKBAAAgIACABgCBAAAAAEAAAAAAIIAABAChxAAAEAAAAAAAAAAAAACAAAAAAAQAAEAgAQAUEaAAAAEAEACAGAAABCAAAARCAACAIBKCAAggAACACQABQAAgACAAgQAEAAAAAAAAAAACAAAMCAAAAAEAAICIAIAAEAAQAAABAAACAEAAACAAYAAAAAAQASACAAAAQAQAAAAAQAAgAAACACQACAgoAAAAAAhBAQAAQAAAEBAAAAEAAAAAABAAAAAABAAAgAQBgCQAgAAAACAAAQAAAAQAAAAACAAgBhKQIwAAIREAAAAiAAAAAEIAAAAABAAEADAAQAAQAAAAwAABUBAAAAAAAAQAAQAAAgACQAAAAAAAUCABIIAQCABAAAACDCBAAEAAAAAAAAQACAAABBAAAAAAIIAAgAACACAAAAACAAAAACACAAAQACCAiCAAAAgIAAAAAAAAAAAQgCAKQACIgAEAAAAEAAAAAAQAAAAAAAwAAAAQAAAAAAAAAAAAQAAICAIQAAAAAABAAAiQEAAAAAQAAIAAAAAAQQAABAAECQCQAgAAgBAQAQEAAAAAQAAAAAAAgQAAQISAIAACAAQUIEAwhoCAAEgAIAIACAAKAAAQAAQAEAQAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAQAAgAmAECAACAAgACAgAABIBAkBAAwAAAAhBEACACAAABAAACBBIBAIAAAAQAAAAACAQAAAAAAAAABAAAggDAAAAAAAAAgAQAAAEAEACANEAAAAAAAAAAAQBAAABIgAAAAAACAiAQQAAAAQAQAACACAAAAcEAOEAAAAIQCAEAIwAABAAQAAAAAAIIAEAAAAAAAASIAAQQAAQAAAAAAAABAQAAAAAAAQCAABggEACAMEAEAAAEIAAAAUAQAAABACAAAJAEAAAAEAAAQAIAABAAAAACAQAAAAAAAQAAAAAAACAAAAAAAABCIAAAQAEpAQAAAAGIAQISAIAQAgAAAhAAIQEAAAAICAAEIAAAQCgQAAEQACAAAAAAAIAAFAEBAIAAQAAAAMAAAAgAAAQIIQABFgAAAAgQADAAYAAAQAACAASIAAAiAAAAQAAACAAAAQAACBiCCBAAIAAEEAAAQABQgMAkFRAAAAABBQAAAAAQAAIAAgg4AAAQQAAACAQAAQEAASAAAAAAAASCCAYgAAEERAAhggACAARAAEAAAmgAEACAIAACAAIgAEACAAAABAAQAAAAAAAAAQQCAAAAAEAQAGQACpCBAAAIFIAABAAIEJAAAABAAAEBCAAAAAAJAICCCAABCACAAAIAAAAAAgCAAgACAAEAAQAQAABAFAIQAQAgIBRAAAJgAAAAACAAIAACAIgAAACAAAAAAAGCAAAAAABAAAAACCAAQAACAAABSAgKCABABAAAAAAAwegIAMAEASkAgAAQCAAACACAAAAAAkAAAAACAAAIAAQACCAAAACCAAAAAAAAQAAAACEAAAAA0AAAAAAACgABAMgAEAAAAAAhAAEAUAQCQACAAAAQKAAQAABIAQAAQAQAAAAAAAQAAAAQExIICABACAIAQAAAIAEAACCAoAAAEAAAAAAAAASAAACAEAAAACAAgAAACCASAQCAACAAABQCAAIAAAAAAIAAAAAAAAAAAAAIAAABAAQEABQAAAABgAIAQAAAEBAAACACgCCAAAAQAAACAAAAAQQACCARAACAggCQIAAEAgAIgAAAgEAhgAAAKBACAABAAAABAIAIAAAAAGAioAAAQAAAAAAAAAQAACEAAAABCIAAEEUIAAoBAAIEAAAAAAAEASQIAAAAAAgQIACCAAAACACCAAgAAAAiAAQAQQAACSCCAQAAAAEBAAgAAAFAgAACEIUAAAAAEAEBhAAIAIAEBABAgKCCAQAAAAYIIEIAQQACQECAABQAACAAAQAACAAAggQIAACBAACgAJQAAKIAEUhgEAAAAAFgEAAABEAIgBAABEAABAEAASgAQAAAgAAAAAgCAKAAEAIAoEAAAAAECGBQAABIAAQUCAACIBAIEAIJAgAIAAAACAIIIAIIAAAACAAQCAAEAiASQAAAAAACAEJAEIAgAAARAAABAIAEA0ACAAbCGSAABABIABAAAKAAAABAKICMAQwAAAwCQAAAAAAAAAQBCABAQARAgAQABQAAgKBAUAAgABAAiAAaAAAAACAAAMAAAACAAAAwAQAACAQACQQCAAASAAAAAAAgEAEIBAAAAABAQAAAAFAAAAgBAwCAQIgAAEAAgiAIBABAgCAACAAIQAAASUCAQAACAAAAASACAQRABxQCAMAEAAElAABCABABBpBIAAAAAAgAABAAAAAAoAqAgARAkAAAAgQAQAAAEAAAAACQGAAIAIAAADBBABEIAAAAUAAARgAgBBBAAAhACoIAIAAAAAACABAAACAQAAAAAAACAQAACAAAAAgAAAIgABAGBBAAAIADAAAIAIkAIAAABAMCAIBAIAMABCgwACoAAAAAAISACQCAAAAAAAAQAAAACCAAAAgQAAAJAEDAAAIAAAEEAEBAAABGAAEEAFICAAAEABAAgAAACAAAAAAAQAAQAAQAAAggAAAAAAAASwSQQkAZAgAAKAiAAQMBAAAAAAgCAIEIAAAAAIBSQAAAAAACAAAAAAAAAACAAAgAQAAACACASAAAAAAAAEBQAAACAAKCoCUAUECEEIAAIAqAESgAIAAYKAAAAAAAACAAAAAAAAAAAAAACCgACAAAAAIEnAABIfAhBAAgRYAEBAAAYAAAAAAAAEAAACkAAABAEAIQEAACIAAAAAACQCAggEAAACAARAAAAAAAAgBKAAqAAIEAAFgQCICABABAgAgCAAAgBAAAAAAAAAAAAEACAICAAAAAGCAEAgCAAAAAAgAACAA8LihBAKCgIgAAECAgAAAAQEEBSAaBAAQACAAAAEAAAAICAAAkAAEGAAACAAAAAAAAABACAEABAABAgQAIAQAQAABABAhBCgBhCAAAEAAIAQABAgAIACAABwQAEEAAEAgAAwAAAAQAIAAAAAgAAASgAAQAAAgANCEAoCkIYEAAAAFQEAAABAEBIAhIAEAAAAJAiAABASIAAQCAAACCCAAAAEgCQAAAAQwSCgAAAAAgAAAgAKEBgQAAAAAAAQByACEBICAAgABgAAAASGAECQAAACAAQAACAAAAAACCAAAUAMIAAACAAAAQAAIgACBQAAAAAAIACSAAAAQAAOAAAEQCAAEAgAEAASAAAAAQAGAQQAAAGUASAAAEAAAABgAACCEAAAAAAAEBAAAAAAAAIAACBEEEQAAQAAAKQAAAQAAAAQAAAAAUAAAAAgQEgAQAQAQCAEEADAAABMgEAAAABCBAAAACCEAACAEQCAACCAAIACAAAAAAAwAAAAEAAAAAKAAAAEAAAAgAQCBgAAAAAAAEAQgAAAAgAYADAAAgBAAAAAAAIUAAgIAgIQAEAAAgAABABAgAAgwAAAgEAQAEAQAAAAQAAIAAokCQGEAAAAAAAAIBQBQCQAISAgAEAUAAAACAAAAAAABgkAAAQAAQAEEACAAACAQwAAMAQAQAAAAAAAgCAACAAAgAgAAAAAEQEABGAAACgAAAAAAkAICgAQAAAAAAAEACAAiCAAACAAEAAAAAABLKAASAAAAQAAAEAABIAAAAEAAAABACAABAQAAAAAAAAQAQAAAAQAAAEAAAgSAAAAAgACSAAAUCEgAAECAAAAAAAAAAAIAiAAgABAAAAAEAAASQGFEIAAgAAAQABAQggAAAAAAAAQAAAAAAEAQQAAAgJAAAAAAAA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"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./VueTransition.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./VueTransition.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fade-transition {\r\n  opacity: 1;\r\n  transition: all 0.2s ease-in-out; }\r\n\r\n.fade-enter,\r\n.fade-leave {\r\n  opacity: 0; }\r\n\r\n.staggered-transition {\r\n  transition: all 0.2s ease-in-out;\r\n  opacity: 1;\r\n  animation-name: pulse;\r\n  animation-duration: .75s; }\r\n\r\n.staggered-enter,\r\n.staggered-leave {\r\n  opacity: 0; }\r\n\r\n/*# sourceMappingURL=VueTransition.css.map */\r\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	$(document).ready(function () {
	  $('input').iCheck({
	    checkboxClass: 'icheckbox_flat-red',
	    radioClass: 'iradio_flat-red'
	  });
	  $('input').on('ifChanged', function (event) {
	    var Event = document.createEvent("MouseEvents");
	    Event.initMouseEvent('change');
	    event.target.dispatchEvent(Event);
	  });
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js!./component.css", function() {
				var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js!./component.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".input {\n\tposition: relative;\n\tz-index: 1;\n\tdisplay: inline-block;\n\tmax-width: 400px;\n\twidth: calc(100% - 2em);\n\tvertical-align: top;\n}\n\n.input__field {\n\tposition: relative;\n\tdisplay: block;\n\tfloat: right;\n\tpadding: 0.8em;\n\twidth: 60%;\n\tborder: none;\n\tborder-radius: 0;\n\tbackground: #f0f0f0;\n\tcolor: #aaa;\n\tfont-weight: bold;\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\t-webkit-appearance: none; /* for box shadows to show on iOS */\n}\n\n.input__field:focus {\n\toutline: none;\n}\n\n.input__label {\n\tdisplay: inline-block;\n\tfloat: right;\n\tpadding: 0 1em;\n\twidth: 40%;\n\tcolor: #6a7989;\n\tfont-weight: bold;\n\tfont-size: 70.25%;\n\t-webkit-touch-callout: none;\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n}\n\n.input__label-content {\n\tposition: relative;\n\tdisplay: block;\n\tpadding: 1.6em 0;\n\twidth: 100%;\n}\n\n.graphic {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tfill: none;\n}\n\n.icon {\n\tcolor: #ddd;\n\tfont-size: 150%;\n}\n\n/* Individual styles */\n\n/* Haruki */\n\n.input--haruki {\n\tmargin: 4em 1em 1em;\n}\n\n.input__field--haruki {\n\tpadding: 0.4em 0.25em;\n\twidth: 100%;\n\tbackground: transparent;\n\tcolor: #AFB5BB;\n\tfont-size: 1.55em;\n}\n\n.input__label--haruki {\n\tposition: absolute;\n\twidth: 100%;\n\ttext-align: left;\n\tpointer-events: none;\n}\n\n.input__label-content--haruki {\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.input__label--haruki::before,\n.input__label--haruki::after {\n\tcontent: '';\n\tposition: absolute;\n\tleft: 0;\n\tz-index: -1;\n\twidth: 100%;\n\theight: 4px;\n\tbackground: #6a7989;\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.input__label--haruki::before {\n\ttop: 0;\n}\n\n.input__label--haruki::after {\n\tbottom: 0;\n}\n\n.input__field--haruki:focus + .input__label--haruki .input__label-content--haruki,\n.input--filled .input__label-content--haruki {\n\t-webkit-transform: translate3d(0, -90%, 0);\n\ttransform: translate3d(0, -90%, 0);\n}\n\n.input__field--haruki:focus + .input__label--haruki::before,\n.input--filled .input__label--haruki::before {\n\t-webkit-transform: translate3d(0, -0.5em, 0);\n\ttransform: translate3d(0, -0.5em, 0);\n}\n\n.input__field--haruki:focus + .input__label--haruki::after,\n.input--filled .input__label--haruki::after {\n\t-webkit-transform: translate3d(0, 0.5em, 0);\n\ttransform: translate3d(0, 0.5em, 0);\n}\n\n/* Hoshi */\n.input--hoshi {\n\toverflow: hidden;\n}\n\n.input__field--hoshi {\n\tmargin-top: 1em;\n\tpadding: 0.85em 0.15em;\n\twidth: 100%;\n\tbackground: transparent;\n\tcolor: #595F6E;\n}\n\n.input__label--hoshi {\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\tpadding: 0 0.25em;\n\twidth: 100%;\n\theight: calc(100% - 1em);\n\ttext-align: left;\n\tpointer-events: none;\n}\n\n.input__label-content--hoshi {\n\tposition: absolute;\n}\n\n.input__label--hoshi::before,\n.input__label--hoshi::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: calc(100% - 10px);\n\tborder-bottom: 1px solid #B9C1CA;\n}\n\n.input__label--hoshi::after {\n\tmargin-top: 2px;\n\tborder-bottom: 4px solid red;\n\t-webkit-transform: translate3d(-100%, 0, 0);\n\ttransform: translate3d(-100%, 0, 0);\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.input__label--hoshi-color-1::after {\n\tborder-color: hsl(200, 100%, 50%);\n}\n\n.input__label--hoshi-color-2::after {\n\tborder-color: hsl(160, 100%, 50%);\n}\n\n.input__label--hoshi-color-3::after {\n\tborder-color: hsl(20, 100%, 50%);\n}\n\n.input__field--hoshi:focus + .input__label--hoshi::after,\n.input--filled .input__label--hoshi::after {\n\t-webkit-transform: translate3d(0, 0, 0);\n\ttransform: translate3d(0, 0, 0);\n}\n\n.input__field--hoshi:focus + .input__label--hoshi .input__label-content--hoshi,\n.input--filled .input__label-content--hoshi {\n\t-webkit-animation: anim-1 0.3s forwards;\n\tanimation: anim-1 0.3s forwards;\n}\n\n@-webkit-keyframes anim-1 {\n\t50% {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(1em, 0, 0);\n\t\ttransform: translate3d(1em, 0, 0);\n\t}\n\t51% {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(-1em, -40%, 0);\n\t\ttransform: translate3d(-1em, -40%, 0);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translate3d(0, -40%, 0);\n\t\ttransform: translate3d(0, -40%, 0);\n\t}\n}\n\n@keyframes anim-1 {\n\t50% {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(1em, 0, 0);\n\t\ttransform: translate3d(1em, 0, 0);\n\t}\n\t51% {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(-1em, -40%, 0);\n\t\ttransform: translate3d(-1em, -40%, 0);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translate3d(0, -40%, 0);\n\t\ttransform: translate3d(0, -40%, 0);\n\t}\n}\n\n/* Kuro */\n.input--kuro {\n\tmax-width: 320px;\n\tmargin-bottom: 3em;\n}\n\n.input__field--kuro {\n\twidth: 100%;\n\tbackground: transparent;\n\tcolor: #9196A1;\n\topacity: 0;\n\ttext-align: center;\n\t-webkit-transition: opacity 0.3s;\n\ttransition: opacity 0.3s;\n}\n\n.input__label--kuro {\n\tposition: absolute;\n\tleft: 0;\n\twidth: 100%;\n\tcolor: #df6589;\n\tpointer-events: none;\n}\n\n.input__label--kuro::before,\n.input__label--kuro::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 50%;\n\theight: 100%;\n\tborder: 4px solid #747981;\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.input__label--kuro::before {\n\tborder-right: none;\n}\n\n.input__label--kuro::after {\n\tleft: 50%;\n\tborder-left: none;\n}\n\n.input__field--kuro:focus,\n.input--filled .input__field--kuro {\n\topacity: 1;\n\t-webkit-transition-delay: 0.3s;\n\ttransition-delay: 0.3s;\n}\n\n.input__field--kuro:focus + .input__label--kuro::before,\n.input--filled .input__label--kuro::before {\n\t-webkit-transform: translate3d(-10%, 0, 0);\n\ttransform: translate3d(-10%, 0, 0);\n}\n\n.input__field--kuro:focus + .input__label--kuro::after,\n.input--filled .input__label--kuro::after {\n\t-webkit-transform: translate3d(10%, 0, 0);\n\ttransform: translate3d(10%, 0, 0);\n}\n\n.input__field--kuro:focus + .input__label--kuro .input__label-content--kuro,\n.input--filled .input__label-content--kuro {\n\t-webkit-animation: anim-2 0.3s forwards;\n\tanimation: anim-2 0.3s forwards;\n}\n\n@-webkit-keyframes anim-2 {\n\t50% {\n\t\topacity: 0;\n\t\t-webkit-transform: scale3d(0.3, 0.3, 1);\n\t\ttransform: scale3d(0.3, 0.3, 1);\n\t}\n\t51% {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0, 3.7em, 0) scale3d(0.3, 0.3, 1);\n\t\ttransform: translate3d(0, 3.7em, 0) scale3d(0.3, 0.3, 1);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translate3d(0, 3.7em, 0);\n\t\ttransform: translate3d(0, 3.7em, 0);\n\t}\n}\n\n@keyframes anim-2 {\n\t50% {\n\t\topacity: 0;\n\t\t-webkit-transform: scale3d(0.3, 0.3, 1);\n\t\ttransform: scale3d(0.3, 0.3, 1);\n\t}\n\t51% {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0, 3.7em, 0) scale3d(0.3, 0.3, 1);\n\t\ttransform: translate3d(0, 3.7em, 0) scale3d(0.3, 0.3, 1);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translate3d(0, 3.7em, 0);\n\t\ttransform: translate3d(0, 3.7em, 0);\n\t}\n}\n\n/* Jiro */\n.input--jiro {\n\tmargin-top: 2em;\n}\n\n.input__field--jiro {\n\tpadding: 0.85em 0.5em;\n\twidth: 100%;\n\tbackground: transparent;\n\tcolor: #DDE2E2;\n\topacity: 0;\n\t-webkit-transition: opacity 0.3s;\n\ttransition: opacity 0.3s;\n}\n\n.input__label--jiro {\n\tposition: absolute;\n\tleft: 0;\n\tpadding: 0 0.85em;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: left;\n\tpointer-events: none;\n}\n\n.input__label-content--jiro {\n\t-webkit-transition: -webkit-transform 0.3s 0.3s;\n\ttransition: transform 0.3s 0.3s;\n}\n\n.input__label--jiro::before,\n.input__label--jiro::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.input__label--jiro::before {\n\tborder-top: 2px solid #6a7989;\n\t-webkit-transform: translate3d(0, 100%, 0) translate3d(0, -2px, 0);\n\ttransform: translate3d(0, 100%, 0) translate3d(0, -2px, 0);\n\t-webkit-transition-delay: 0.3s;\n\ttransition-delay: 0.3s;\n}\n\n.input__label--jiro::after {\n\tz-index: -1;\n\tbackground: #6a7989;\n\t-webkit-transform: scale3d(1, 0, 1);\n\ttransform: scale3d(1, 0, 1);\n\t-webkit-transform-origin: 50% 0%;\n\ttransform-origin: 50% 0%;\n}\n\n.input__field--jiro:focus,\n.input--filled .input__field--jiro {\n\topacity: 1;\n\t-webkit-transition-delay: 0.3s;\n\ttransition-delay: 0.3s;\n}\n\n.input__field--jiro:focus + .input__label--jiro .input__label-content--jiro,\n.input--filled .input__label-content--jiro {\n\t-webkit-transform: translate3d(0, -80%, 0);\n\ttransform: translate3d(0, -80%, 0);\n\t-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n\ttransition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.input__field--jiro:focus + .input__label--jiro::before,\n.input--filled .input__label--jiro::before {\n\t-webkit-transition-delay: 0s;\n\ttransition-delay: 0s;\n}\n\n.input__field--jiro:focus + .input__label--jiro::before,\n.input--filled .input__label--jiro::before {\n\t-webkit-transform: translate3d(0, 0, 0);\n\ttransform: translate3d(0, 0, 0);\n}\n\n.input__field--jiro:focus + .input__label--jiro::after,\n.input--filled .input__label--jiro::after {\n\t-webkit-transform: scale3d(1, 1, 1);\n\ttransform: scale3d(1, 1, 1);\n\t-webkit-transition-delay: 0.3s;\n\ttransition-delay: 0.3s;\n\t-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n\ttransition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n/* Minoru */\n.input__field--minoru {\n\twidth: 100%;\n\tbackground: #fff;\n\tbox-shadow: 0px 0px 0px 2px transparent;\n\tcolor: #eca29b;\n\t-webkit-transition: box-shadow 0.3s;\n\ttransition: box-shadow 0.3s;\n}\n\n.input__label--minoru {\n\tpadding: 0;\n\twidth: 100%;\n\ttext-align: left;\n}\n\n.input__label--minoru::after {\n\tcontent: '';\n  \tposition: absolute;\n  \ttop: 0;\n  \tz-index: -1;\n  \twidth: 100%;\n  \theight: 4em;\n\tbox-shadow: 0px 0px 0px 0px;\n\tcolor: rgba(199,152,157, 0.6);\n}\n\n.input__field--minoru:focus {\n\tbox-shadow: 0px 0px 0px 2px #eca29b;\n}\n\n.input__field--minoru:focus + .input__label--minoru {\n\tpointer-events: none;\n}\n\n.input__field--minoru:focus + .input__label--minoru::after {\n\t-webkit-animation: anim-shadow 0.3s forwards;\n\tanimation: anim-shadow 0.3s forwards;\n}\n\n@-webkit-keyframes anim-shadow {\n\tto {\n\t\tbox-shadow: 0px 0px 100px 50px;\n    \topacity: 0;\n\t}\n}\n\n@keyframes anim-shadow {\n\tto {\n\t\tbox-shadow: 0px 0px 100px 50px;\n    \topacity: 0;\n\t}\n}\n\n.input__label-content--minoru {\n\tpadding: 0.75em 0.15em;\n}\n\n/* Yoko */\n.input__field--yoko {\n\tz-index: 10;\n\twidth: 100%;\n\tbackground: transparent;\n\tcolor: #f5f5f5;\n\topacity: 0;\n\t-webkit-transition: opacity 0.3s;\n\ttransition: opacity 0.3s;\n}\n\n.input__label--yoko {\n\tposition: relative;\n\twidth: 100%;\n\tcolor: #b04b40;\n\ttext-align: left;\n}\n\n.input__label--yoko::before {\n\tcontent: '';\n\tposition: absolute;\n\tbottom: 100%;\n\tleft: 0;\n\twidth: 100%;\n\theight: 4em;\n\tbackground: #c5564a;\n\t-webkit-transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);\n\ttransform: perspective(1000px) rotate3d(1, 0, 0, 90deg);\n\t-webkit-transform-origin: 50% 100%;\n\ttransform-origin: 50% 100%;\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.input__label--yoko::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 0.25em;\n\tbackground: #ad473c;\n\t-webkit-transform-origin: 50% 0%;\n\ttransform-origin: 50% 0%;\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.input__label-content--yoko {\n\tpadding: 0.75em 0;\n}\n\n.input__field--yoko:focus,\n.input--filled .input__field--yoko {\n\topacity: 1;\n\t-webkit-transition-delay: 0.3s;\n\ttransition-delay: 0.3s;\n}\n\n.input__field--yoko:focus + .input__label--yoko::before,\n.input--filled .input__label--yoko::before {\n\t-webkit-transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);\n\ttransform: perspective(1000px) rotate3d(1, 0, 0, 0deg);\n}\n\n.input__field--yoko:focus + .input__label--yoko,\n.input--filled .input__label--yoko {\n\tpointer-events: none;\n}\n\n.input__field--yoko:focus + .input__label--yoko::after,\n.input--filled .input__label--yoko::after {\n\t-webkit-transform: perspective(1000px) rotate3d(1, 0, 0, -90deg);\n\ttransform: perspective(1000px) rotate3d(1, 0, 0, -90deg);\n}\n\n/* Kyo */\n.input--kyo {\n\tz-index: auto;\n}\n\n.input__field--kyo {\n\tpadding: 0.85em 1.5em;\n\twidth: 100%;\n\tborder-radius: 2em;\n\tbackground: #fff;\n\tcolor: #535d92;\n}\n\n.input__label--kyo {\n\tz-index: 0;\n\tpadding: 0 0 0 2em;\n\twidth: 100%;\n\ttext-align: left;\n}\n\n.input__label--kyo::after {\n\tcontent: '';\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1000;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(11, 43, 205, 0.6);\n\topacity: 0;\n\t-webkit-transition: opacity 0.3s;\n\ttransition: opacity 0.3s;\n\tpointer-events: none;\n}\n\n.input__label-content--kyo {\n\tpadding: 0.5em 0;\n}\n\n.input__field--kyo:focus,\n.input__field--kyo:focus +  .input__label--kyo .input__label-content--kyo {\n\tz-index: 10000;\n}\n\n.input__field--kyo:focus + .input__label--kyo {\n\tcolor: #fff;\n}\n\n.input__field--kyo:focus + .input__label--kyo::after {\n\topacity: 1;\n}\n\n/* Akira */\n.input--akira {\n\tmargin-top: 2em;\n}\n\n.input__field--akira {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 10;\n\tdisplay: block;\n\tpadding: 0 1em;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: transparent;\n\ttext-align: center;\n}\n\n.input__label--akira {\n\tpadding: 0;\n\twidth: 100%;\n\tbackground: #696a6e;\n\tcolor: #cc6055;\n\tcursor: text;\n}\n\n.input__label--akira::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #2f3238;\n\t-webkit-transform: scale3d(0.97, 0.85, 1);\n\ttransform: scale3d(0.97, 0.85, 1);\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.input__label-content--akira {\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.input__field--akira:focus + .input__label--akira::before,\n.input--filled .input__label--akira::before {\n\t-webkit-transform: scale3d(0.99, 0.95, 1);\n\ttransform: scale3d(0.99, 0.95, 1);\n}\n\n.input__field--akira:focus + .input__label--akira,\n.input--filled .input__label--akira {\n\tcursor: default;\n\tpointer-events: none;\n}\n\n.input__field--akira:focus + .input__label--akira .input__label-content--akira,\n.input--filled .input__label-content--akira {\n\t-webkit-transform: translate3d(0, -3.5em, 0);\n\ttransform: translate3d(0, -3.5em, 0);\n}\n\n/* Ichiro */\n.input--ichiro {\n\tmargin-top: 2em;\n}\n\n.input__field--ichiro {\n\tposition: absolute;\n\ttop: 4px;\n\tleft: 4px;\n\tz-index: 100;\n\tdisplay: block;\n\tpadding: 0 0.55em;\n\twidth: calc(100% - 8px);\n\theight: calc(100% - 8px);\n\tbackground: #f0f0f0;\n\tcolor: #7F8994;\n\topacity: 0;\n\t-webkit-transform: scale3d(1, 0, 1);\n\ttransform: scale3d(1, 0, 1);\n\t-webkit-transform-origin: 50% 100%;\n\ttransform-origin: 50% 100%;\n\t-webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\n\ttransition: opacity 0.3s, transform 0.3s;\n}\n\n.input__label--ichiro {\n\twidth: 100%;\n\ttext-align: left;\n\tcursor: text;\n}\n\n.input__label--ichiro::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #fff;\n\t-webkit-transform-origin: 50% 100%;\n\ttransform-origin: 50% 100%;\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.input__label-content--ichiro {\n\t-webkit-transform-origin: 0% 50%;\n\ttransform-origin: 0% 50%;\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.input__field--ichiro:focus,\n.input--filled .input__field--ichiro {\n\topacity: 1;\n\t-webkit-transform: scale3d(1, 1, 1);\n\ttransform: scale3d(1, 1, 1);\n}\n\n.input__field--ichiro:focus + .input__label--ichiro,\n.input--filled .input__label--ichiro {\n\tcursor: default;\n\tpointer-events: none;\n}\n\n.input__field--ichiro:focus + .input__label--ichiro::before,\n.input--filled .input__label--ichiro::before {\n\t-webkit-transform: scale3d(1, 1.5, 1);\n\ttransform: scale3d(1, 1.5, 1);\n}\n\n.input__field--ichiro:focus + .input__label--ichiro .input__label-content--ichiro,\n.input--filled .input__label-content--ichiro {\n\t-webkit-transform: translate3d(0, -3.15em, 0) scale3d(0.8, 0.8, 1);\n\ttransform: translate3d(0, -3.15em, 0) scale3d(0.8, 0.8, 1) translateZ(1px);\n}\n\n/* Juro */\n.input--juro {\n\toverflow: hidden;\n}\n\n.input__field--juro {\n\tposition: absolute;\n\tz-index: 100;\n\tpadding: 2.15em 0.75em 0;\n\twidth: 100%;\n\tbackground: transparent;\n\tcolor: #1784cd;\n\tfont-size: 0.85em;\n}\n\n.input__label--juro {\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #fff;\n\ttext-align: left;\n}\n\n.input__label-content--juro {\n\tpadding: 2em 1em;\n\t-webkit-transform-origin: 0% 50%;\n\ttransform-origin: 0% 50%;\n\t-webkit-transition: -webkit-transform 0.3s, color 0.3s;\n\ttransition: transform 0.3s, color 0.3s;\n\n\ttext-rendering: geometricPrecision;\n}\n\n.input__label--juro::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tborder: 0px solid transparent;\n\t-webkit-transition: border-width 0.3s, border-color 0.3s;\n\ttransition: border-width 0.3s, border-color 0.3s;\n}\n\n.input__field--juro:focus + .input__label--juro::before,\n.input--filled .input__label--juro::before {\n\tborder-width: 8px;\n\tborder-color: #1784cd;\n\tborder-top-width: 2em;\n}\n\n.input__field--juro:focus + .input__label--juro .input__label-content--juro,\n.input--filled .input__label--juro .input__label-content--juro {\n\tcolor: #fff;\n\t-webkit-transform: translate3d(0, -1.5em, 0) scale3d(0.75, 0.75, 1);\n\ttransform: translate3d(0, -1.5em, 0) scale3d(0.75, 0.75, 1) translateZ(1px);\n}\n\n/* Hideo */\n.input--hideo {\n\toverflow: hidden;\n\tbackground: #fff;\n}\n\n.input__field--hideo {\n\tpadding: 0.85em 0.85em 0.85em 3em;\n\twidth: 100%;\n\tbackground: transparent;\n\t-webkit-transform: translate3d(1em, 0, 0);\n\ttransform: translate3d(1em, 0, 0);\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.input__label--hideo {\n\tposition: absolute;\n\tpadding: 1.25em 0 0;\n\twidth: 4em;\n\theight: 100%;\n}\n\n.input__label--hideo::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: -1;\n\twidth: 4em;\n\theight: 100%;\n\tbackground: #899dda;\n\t-webkit-transform-origin: 0% 50%;\n\ttransform-origin: 0% 50%;\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.icon--hideo {\n\tcolor: #fff;\n\t-webkit-transform: scale3d(1, 1, 1); /* Needed for Chrome bug */\n\ttransform: scale3d(1, 1, 1);\n\t-webkit-transform-origin: 0% 50%;\n\ttransform-origin: 0% 50%;\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.input__label-content--hideo {\n\tposition: absolute;\n\ttop: 100%;\n}\n\n.input__field--hideo:focus {\n\t-webkit-transform: translate3d(0, 0, 0);\n\ttransform: translate3d(0, 0, 0);\n}\n\n.input__field--hideo:focus + .input__label--hideo::before {\n\t-webkit-transform: scale3d(0.8, 1, 1);\n\ttransform: scale3d(0.8, 1, 1);\n}\n\n.input__field--hideo:focus + .input__label--hideo .icon--hideo {\n\t-webkit-transform: scale3d(0.6, 0.6, 1);\n\ttransform: scale3d(0.6, 0.6, 1);\n}\n\n/* Madoka */\n.input--madoka {\n\tmargin: 1.1em;\n}\n\n.input__field--madoka {\n\twidth: 100%;\n\tbackground: transparent;\n\tcolor: #7A7593;\n}\n\n.input__label--madoka {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tcolor: #7A7593;\n\ttext-align: left;\n\tcursor: text;\n}\n\n.input__label-content--madoka {\n\t-webkit-transform-origin: 0% 50%;\n\ttransform-origin: 0% 50%;\n\t-webkit-transition: -webkit-transform 0.3s;\n\ttransition: transform 0.3s;\n}\n\n.graphic--madoka {\n\t-webkit-transform: scale3d(1, -1, 1);\n\ttransform: scale3d(1, -1, 1);\n\t-webkit-transition: stroke-dashoffset 0.3s;\n\ttransition: stroke-dashoffset 0.3s;\n\tpointer-events: none;\n\n\tstroke: #7A7593;\n\tstroke-width: 4px;\n\tstroke-dasharray: 962;\n\tstroke-dashoffset: 558;\n}\n\n.input__field--madoka:focus + .input__label--madoka,\n.input--filled .input__label--madoka {\n\tcursor: default;\n\tpointer-events: none;\n}\n\n.input__field--madoka:focus + .input__label--madoka .graphic--madoka,\n.input--filled .graphic--madoka {\n\tstroke-dashoffset: 0;\n}\n\n.input__field--madoka:focus + .input__label--madoka .input__label-content--madoka,\n.input--filled .input__label-content--madoka {\n\t-webkit-transform: scale3d(0.81, 0.81, 1) translate3d(0, 4em, 0);\n\ttransform: scale3d(0.81, 0.81, 1) translate3d(0, 4em, 0);\n}\n\n/* Kaede */\n.input--kaede {\n\tdisplay: block;\n\toverflow: hidden;\n\tmargin: 1em auto 2em;\n\tbackground: #EFEEEE;\n}\n\n.input__field--kaede {\n\tposition: absolute;\n\ttop: 0;\n\tright: 100%;\n\twidth: 60%;\n\theight: 100%;\n\tbackground: #fff;\n\tcolor: #9DABBA;\n\t-webkit-transition: -webkit-transform 0.5s;\n\ttransition: transform 0.5s;\n\t-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n\ttransition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.input__label--kaede {\n\tz-index: 10;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: left;\n\tcursor: text;\n\t-webkit-transform-origin: 0% 50%;\n\ttransform-origin: 0% 50%;\n\t-webkit-transition: -webkit-transform 0.5s;\n\ttransition: transform 0.5s;\n\t-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n\ttransition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.input__label-content--kaede {\n\tpadding: 1.5em 0;\n}\n\n.input__field--kaede:focus,\n.input--filled .input__field--kaede {\n\t-webkit-transform: translate3d(100%, 0, 0);\n\ttransform: translate3d(100%, 0, 0);\n\t-webkit-transition-delay: 0.06s;\n\ttransition-delay: 0.06s;\n}\n\n.input__field--kaede:focus + .input__label--kaede,\n.input--filled .input__label--kaede  {\n\t-webkit-transform: translate3d(60%, 0, 0);\n\ttransform: translate3d(60%, 0, 0);\n\tpointer-events: none;\n}\n\n@media screen and (max-width: 34em) {\n\t.input__field--kaede:focus + .input__label--kaede,\n\t.input--filled .input__label--kaede  {\n\t\t-webkit-transform: translate3d(65%, 0, 0) scale3d(0.65, 0.65, 1);\n\t\ttransform: translate3d(65%, 0, 0) scale3d(0.65, 0.65, 1);\n\t\tpointer-events: none;\n\t}\n}\n\n/* Isao */\n.input__field--isao {\n\tz-index: 10;\n\tpadding: 0.75em 0.1em 0.25em;\n\twidth: 100%;\n\tbackground: transparent;\n\tcolor: #afb3b8;\n}\n\n.input__label--isao {\n\tposition: relative;\n\toverflow: hidden;\n\tpadding: 0;\n\twidth: 100%;\n\tcolor: #dadada;\n\ttext-align: left;\n}\n\n.input__label--isao::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\theight: 7px;\n\tbackground: #dadada;\n\t-webkit-transform: scale3d(1, 0.4, 1);\n\ttransform: scale3d(1, 0.4, 1);\n\t-webkit-transform-origin: 50% 100%;\n\ttransform-origin: 50% 100%;\n\t-webkit-transition: -webkit-transform 0.3s, background-color 0.3s;\n\ttransition: transform 0.3s, background-color 0.3s;\n\t-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n\ttransition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.input__label--isao::after {\n\tcontent: attr(data-content);\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tpadding: 0.75em 0.15em;\n\tcolor: #da7071;\n\topacity: 0;\n\t-webkit-transform: translate3d(0, 50%, 0);\n\ttransform: translate3d(0, 50%, 0);\n\t-webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\n\ttransition: opacity 0.3s, transform 0.3s;\n\t-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n\ttransition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n\tpointer-events: none;\n}\n\n.input__field--isao:focus + .input__label--isao::before {\n\tbackground-color: #da7071;\n\t-webkit-transform: scale3d(1, 1, 1);\n\ttransform: scale3d(1, 1, 1);\n}\n\n.input__field--isao:focus + .input__label--isao {\n\tpointer-events: none;\n}\n\n.input__field--isao:focus + .input__label--isao::after {\n\topacity: 1;\n\t-webkit-transform: translate3d(0, 0, 0);\n\ttransform: translate3d(0, 0, 0);\n}\n\n.input__label-content--isao {\n\tpadding: 0.75em 0.15em;\n\t-webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\n\ttransition: opacity 0.3s, transform 0.3s;\n\t-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n\ttransition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.input__field--isao:focus + .input__label--isao .input__label-content--isao {\n\topacity: 0;\n\t-webkit-transform: translate3d(0, -50%, 0);\n\ttransform: translate3d(0, -50%, 0);\n}", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	/*!
	 * classie - class helper functions
	 * from bonzo https://github.com/ded/bonzo
	 * 
	 * classie.has( elem, 'my-class' ) -> true/false
	 * classie.add( elem, 'my-new-class' )
	 * classie.remove( elem, 'my-unwanted-class' )
	 * classie.toggle( elem, 'my-class' )
	 */

	/*jshint browser: true, strict: true, undef: true */
	/*global define: false */

	(function (window) {

	  'use strict';

	  // class helper functions from bonzo https://github.com/ded/bonzo

	  function classReg(className) {
	    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	  }

	  // classList support for class management
	  // altho to be fair, the api sucks because it won't accept multiple classes at once
	  var hasClass, addClass, removeClass;

	  if ('classList' in document.documentElement) {
	    hasClass = function hasClass(elem, c) {
	      return elem.classList.contains(c);
	    };
	    addClass = function addClass(elem, c) {
	      elem.classList.add(c);
	    };
	    removeClass = function removeClass(elem, c) {
	      elem.classList.remove(c);
	    };
	  } else {
	    hasClass = function hasClass(elem, c) {
	      return classReg(c).test(elem.className);
	    };
	    addClass = function addClass(elem, c) {
	      if (!hasClass(elem, c)) {
	        elem.className = elem.className + ' ' + c;
	      }
	    };
	    removeClass = function removeClass(elem, c) {
	      elem.className = elem.className.replace(classReg(c), ' ');
	    };
	  }

	  function toggleClass(elem, c) {
	    var fn = hasClass(elem, c) ? removeClass : addClass;
	    fn(elem, c);
	  }

	  var classie = {
	    // full names
	    hasClass: hasClass,
	    addClass: addClass,
	    removeClass: removeClass,
	    toggleClass: toggleClass,
	    // short names
	    has: hasClass,
	    add: addClass,
	    remove: removeClass,
	    toggle: toggleClass
	  };

	  // transport
	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (classie), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    // browser global
	    window.classie = classie;
	  }
	})(window);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.24
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([a-z\d])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
	var isWechat = UA && UA.indexOf('micromessenger') > 0;

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined' && !(isWechat && isIos)) {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;
	  if (this.size === this.limit) {
	    removed = this.shift();
	  }

	  var entry = this.get(key, true);
	  if (!entry) {
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};

	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }

	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIos: isIos,
		isWechat: isWechat,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var booleanLiteralRE = /^(?:true|false)$/;

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if (isA || isO) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);

	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.value = _toString(value);
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  // coerce is a function
	  return coerce(value);
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.24';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(21)))

/***/ },
/* 21 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(23)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] source\\components\\nav.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Users\\zxr\\Documents\\GitHub\\MyCollections\\albums\\source\\components\\nav.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(24);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Info = function Info(name, desc) {
		(0, _classCallCheck3.default)(this, Info);

		this.name = name;
		this.desc = desc;
		this.hover = false;
		this.nameB = true;
	};

	var puzzle = new Info('Puzzle', '拼图布局'),
	    waterfall = new Info('Waterfall', '瀑布布局'),
	    barrel = new Info('Barrel', '木桶布局');

	exports.default = {
		data: function data() {
			return {
				layouts: [puzzle, waterfall, barrel],
				name: true,
				desc: false
			};
		},

		methods: {
			mouseover: function mouseover(index) {
				this.layouts[index].hover = true;
				this.layouts[index].nameB = false;
			},
			mouseout: function mouseout(index) {
				this.layouts[index].hover = false;
				this.layouts[index].nameB = true;
			}
		},
		props: ['show']

	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"list\" id=\"list\">\n\t<h1 class=\"global-title\">多功能相册</h1>\n\t<ul class=\"list-content\">\n\t\t<li class=\"list-item\" transition=\"staggered\" v-show=\"show\" v-for=\"item in layouts\">\n\t\t\t<a \n\t\t\t\t:class=['list-item-wraper',{'list-item-wraper-hover':item.hover}] \n\t\t\t\t@mouseover=\"mouseover($index)\" \n\t\t\t\t@mouseout=\"mouseout($index)\"\n\t\t\t>\n\t\t\t\t<span v-if=\"item.nameB\" class=\"list-item-name\" transition=\"fade\">{{item.desc}}</span>\n\t\t\t\t<span v-if=\"item.nameB\" class=\"list-item-name\" transition=\"fade\">{{item.name}}</span>\n\t\t\t</a>\n\t\t\t\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(27)
	__vue_script__ = __webpack_require__(31)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] source\\components\\sideBar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(85)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Users\\zxr\\Documents\\GitHub\\MyCollections\\albums\\source\\components\\sideBar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.3.1/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/vue-loader/8.3.1/vue-loader/lib/selector.js?type=style&index=0!./sideBar.vue", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.3.1/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/vue-loader/8.3.1/vue-loader/lib/selector.js?type=style&index=0!./sideBar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	exports.i(__webpack_require__(29), "");

	// module
	exports.push([module.id, " \n", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".side-bar {\r\n  position: fixed;\r\n  width: 400px;\r\n  height: 100%;\r\n  right: 0;\r\n  top: 0;\r\n  z-index: 0; }\r\n  .side-bar .side-bar-ctro {\r\n    display: block;\r\n    position: absolute;\r\n    width: 30px;\r\n    height: 22px;\r\n    margin-top: 10px;\r\n    right: 10px;\r\n    cursor: pointer;\r\n    transition: all 0.2s ease-in-out;\r\n    z-index: 3; }\r\n    .side-bar .side-bar-ctro::before {\r\n      content: '';\r\n      display: block;\r\n      width: 100%;\r\n      height: 4px;\r\n      background-color: white;\r\n      margin-bottom: 5px;\r\n      position: relative;\r\n      transform-origin: 50%;\r\n      transition: all 0.2s ease-in-out; }\r\n    .side-bar .side-bar-ctro .side-bar-ctro-bar {\r\n      display: block;\r\n      width: 100%;\r\n      height: 4px;\r\n      background-color: white;\r\n      transition: all 0.2s ease-in-out; }\r\n    .side-bar .side-bar-ctro::after {\r\n      content: '';\r\n      display: block;\r\n      width: 100%;\r\n      height: 4px;\r\n      background-color: white;\r\n      margin-bottom: 5px;\r\n      position: relative;\r\n      transform-origin: 50%;\r\n      transition: all 0.2s ease-in-out;\r\n      margin-bottom: 0px;\r\n      margin-top: 5px; }\r\n  .side-bar .side-bar-content {\r\n    color: black;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    right: -100%;\r\n    top: 0;\r\n    opacity: 0;\r\n    background-color: white;\r\n    z-index: 2;\r\n    transition: all 0.2s ease-in-out;\r\n    padding: 10px; }\r\n\r\n.side-bar.open {\r\n  z-index: 2; }\r\n  .side-bar.open .side-bar-ctro::before {\r\n    background-color: black;\r\n    transform: translateY(9px) rotate(45deg); }\r\n  .side-bar.open .side-bar-ctro .side-bar-ctro-bar {\r\n    background-color: black;\r\n    opacity: 0; }\r\n  .side-bar.open .side-bar-ctro::after {\r\n    background-color: black;\r\n    transform: translateY(-9px) rotate(-45deg); }\r\n  .side-bar.open .side-bar-content {\r\n    right: 0;\r\n    opacity: 1; }\r\n\r\n/*# sourceMappingURL=sideBar.css.map */\r\n", ""]);

	// exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _from = __webpack_require__(32);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function clearField() {
		var aInputs = (0, _from2.default)(document.querySelector('.side-bar-content').querySelectorAll('input'));
		aInputs.forEach(function (item) {
			if (item.type === 'checkbox' || item.type === 'radio') {
				item.parentNode.classList.remove('checked');
				item.checked = false;
			} else {
				item.value = '';
			}
		});
	}
	exports.default = {
		data: function data() {
			return {
				message: 'hello',
				isPuzzle: true,
				picNum: 6,
				gutter: 0,
				albumSize: {
					width: '600px',
					height: '600px'
				},
				fullScreen: false,

				Class: {
					'side-bar': true,
					'open': false,
					'close': true

				}

			};
		},

		methods: {
			toggleState: function toggleState() {
				var oContent = document.querySelector('.side-bar');

				switch (this.Class['open']) {
					case true:
						this.Class['open'] = false;this.Class['close'] = true;clearField();break;
					case false:
						this.Class['open'] = true;this.Class['close'] = false;clearField();break;
				}
			},
			applyChange: function applyChange() {
				var data = { picNum: this.picNum, gutter: this.gutter, albumSize: this.albumSize, fullScreen: this.fullScreen };
				switch (this.Class['open']) {
					case true:
						this.Class['open'] = false;this.Class['close'] = true;clearField();break;
					case false:
						this.Class['open'] = true;this.Class['close'] = false;clearField();break;
				}
			}
		}

	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(33), __esModule: true };

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(34);
	__webpack_require__(78);
	module.exports = __webpack_require__(42).Array.from;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(35)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(38)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(36)
	  , defined   = __webpack_require__(37);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(39)
	  , $export        = __webpack_require__(40)
	  , redefine       = __webpack_require__(55)
	  , hide           = __webpack_require__(45)
	  , has            = __webpack_require__(56)
	  , Iterators      = __webpack_require__(57)
	  , $iterCreate    = __webpack_require__(58)
	  , setToStringTag = __webpack_require__(74)
	  , getPrototypeOf = __webpack_require__(76)
	  , ITERATOR       = __webpack_require__(75)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(41)
	  , core      = __webpack_require__(42)
	  , ctx       = __webpack_require__(43)
	  , hide      = __webpack_require__(45)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 41 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 42 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(44);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(46)
	  , createDesc = __webpack_require__(54);
	module.exports = __webpack_require__(50) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(47)
	  , IE8_DOM_DEFINE = __webpack_require__(49)
	  , toPrimitive    = __webpack_require__(53)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(50) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(48);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(50) && !__webpack_require__(51)(function(){
	  return Object.defineProperty(__webpack_require__(52)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(51)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(48)
	  , document = __webpack_require__(41).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(48);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(45);

/***/ },
/* 56 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(59)
	  , descriptor     = __webpack_require__(54)
	  , setToStringTag = __webpack_require__(74)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(45)(IteratorPrototype, __webpack_require__(75)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(47)
	  , dPs         = __webpack_require__(60)
	  , enumBugKeys = __webpack_require__(72)
	  , IE_PROTO    = __webpack_require__(69)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(52)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(73).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(46)
	  , anObject = __webpack_require__(47)
	  , getKeys  = __webpack_require__(61);

	module.exports = __webpack_require__(50) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(62)
	  , enumBugKeys = __webpack_require__(72);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(56)
	  , toIObject    = __webpack_require__(63)
	  , arrayIndexOf = __webpack_require__(66)(false)
	  , IE_PROTO     = __webpack_require__(69)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(64)
	  , defined = __webpack_require__(37);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(65);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(63)
	  , toLength  = __webpack_require__(67)
	  , toIndex   = __webpack_require__(68);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(36)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(36)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(70)('keys')
	  , uid    = __webpack_require__(71);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(41)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(41).document && document.documentElement;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(46).f
	  , has = __webpack_require__(56)
	  , TAG = __webpack_require__(75)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(70)('wks')
	  , uid        = __webpack_require__(71)
	  , Symbol     = __webpack_require__(41).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(56)
	  , toObject    = __webpack_require__(77)
	  , IE_PROTO    = __webpack_require__(69)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(37);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(43)
	  , $export        = __webpack_require__(40)
	  , toObject       = __webpack_require__(77)
	  , call           = __webpack_require__(79)
	  , isArrayIter    = __webpack_require__(80)
	  , toLength       = __webpack_require__(67)
	  , createProperty = __webpack_require__(81)
	  , getIterFn      = __webpack_require__(82);

	$export($export.S + $export.F * !__webpack_require__(84)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(47);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(57)
	  , ITERATOR   = __webpack_require__(75)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(46)
	  , createDesc      = __webpack_require__(54);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(83)
	  , ITERATOR  = __webpack_require__(75)('iterator')
	  , Iterators = __webpack_require__(57);
	module.exports = __webpack_require__(42).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(65)
	  , TAG = __webpack_require__(75)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(75)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"Class\">\n\t<div class=\"side-bar-ctro\" @click=\"toggleState\">\n\t\t<div class=\"side-bar-ctro-bar\"></div>\n\t</div>\n\t<div class=\"side-bar-content\">\n\t\t<div class=\"side-bar-content-block\" v-if=\"isPuzzle\">\n\t\t\t<h3>图片数量</h3>\n\t\t\t<label>1</label><input name=\"num\" type=\"radio\" v-model=\"picNum\" value=\"1\">\n\t\t\t<label>2</label><input name=\"num\" type=\"radio\" v-model=\"picNum\" value=\"2\">\n\t\t\t<label>3</label><input name=\"num\" type=\"radio\" v-model=\"picNum\" value=\"3\">\n\t\t\t<label>4</label><input name=\"num\" type=\"radio\" v-model=\"picNum\" value=\"4\">\n\t\t\t<label>5</label><input name=\"num\" type=\"radio\" v-model=\"picNum\" value=\"5\">\n\t\t\t<label>6</label><input name=\"num\" type=\"radio\" v-model=\"picNum\" value=\"6\">\n\t\t\t{{a}}\t\n\t\t</div>\n\t\t<div class=\"side-bar-content-block\">\n\t\t\t<span class=\"input input--isao\">\n\t\t\t\t<input class=\"input__field input__field--isao\" v-model=\"gutter\" type=\"text\" id=\"input-38\" />\n\t\t\t\t<label class=\"input__label input__label--isao\" for=\"input-38\" data-content=\"图片间隙\">\n\t\t\t\t\t<span class=\"input__label-content input__label-content--isao\">图片间隙</span>\n\t\t\t\t</label>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"side-bar-content-block\">\n\t\t\t<span class=\"input input--isao\">\n\t\t\t\t<input class=\"input__field input__field--isao\" v-model=\"albumSize.width\" type=\"text\" id=\"input-38\" />\n\t\t\t\t<label class=\"input__label input__label--isao\" for=\"input-38\" data-content=\"相册宽度\">\n\t\t\t\t\t<span class=\"input__label-content input__label-content--isao\">相册宽度</span>\n\t\t\t\t</label>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"side-bar-content-block\">\n\t\t\t<span class=\"input input--isao\">\n\t\t\t\t<input class=\"input__field input__field--isao\" v-model=\"albumSize.height\"  type=\"text\" id=\"input-38\" />\n\t\t\t\t<label class=\"input__label input__label--isao\" for=\"input-38\" data-content=\"相册高度\">\n\t\t\t\t\t<span class=\"input__label-content input__label-content--isao\">相册高度</span>\n\t\t\t\t</label>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"side-bar-content-block\">\n\t\t\t<label for=\"fullScreen\">禁止全屏浏览</label> <input v-model=\"fullScreen\" type=\"checkbox\" id=\"fullScreen\">{{b}}\n\t\t</div>\n\t\t<button @click=\"applyChange\">应用修改</button>\n\t</div>\n</div>\n";

/***/ }
/******/ ]);