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

	/**
	 * Created by zxr on 2016/5/6.
	 */

	 
	 __webpack_require__(1);
	 var puzzle = __webpack_require__(5);
	 var waterfall = __webpack_require__(11);
	 var Barrels = __webpack_require__(15);
	(function (window) {
	    // 由于是第三方库，我们使用严格模式，尽可能发现潜在问题
	    'use strict';
	    function IfeAlbum() {
	        // 布局的枚举类型
	        this.LAYOUT = {
	            PUZZLE: 1,    // 拼图布局
	            WATERFALL: 2, // 瀑布布局
	            BARREL: 3     // 木桶布局
	        };
	        // 公有变量可以写在这里
	        this.imageStack = [];

	    }

	    // 私有变量可以写在这里
	    var LayoutFuncs = {
	        1:puzzle,
	        2:waterfall,
	        3:Barrels,
	    }

	    // var xxx = ...



	    /************* 以下是本库提供的公有方法 *************/



	    /**
	     * 初始化并设置相册
	     * 当相册原本包含图片时，该方法会替换原有图片
	     * @param {(string|string[])} image  一张图片的 URL 或多张图片 URL 组成的数组
	     * @param {object}            option 配置项包含属性
	     */
	    IfeAlbum.prototype.setImage = function (image, option) {
	        var self = this;
	        if (typeof image === 'string') {
	            // 包装成数组处理
	            this.setImage([image]);
	            return;
	        }

	        // 推入图片栈
	        this.imageStack = [];
	        image.forEach(function(item,index,array){
	            self.imageStack.push(item);
	        });
	        // 设置图片
	        this.layout.setImage(this.imageStack);
	    };



	    /**
	     * 获取相册所有图像对应的 DOM 元素
	     * 可以不是 ，而是更外层的元素
	     * @return {HTMLElement[]} 相册所有图像对应的 DOM 元素组成的数组
	     */
	    IfeAlbum.prototype.getImageDomElements = function() {

	        return this.layout.getImageDomElements();
	    };




	    /**
	     * 移除相册中的图片
	     * @param  {(HTMLElement|HTMLElement[])} image 需要移除的图片
	     * @return {boolean} 是否全部移除成功
	     */
	    IfeAlbum.prototype.removeImage = function (image) {
	        var index;
	        var out = [];
	        var self = this;
	        if(image.length){

	            image.forEach(function(item){
	                index = self.getImageDomElements().indexOf(index);
	                out.push(self.imageStack.splice(index,1));
	            });

	            this.layout.setImage(this.imageStack);

	            return out.length===image.length
	        }else{
	            index = this.getImageDomElements().indexOf(image);
	            out = this.imageStack.splice(index,1);
	            console.log(this.imageStack);
	            this.layout.setImage(this.imageStack);

	            return out!==void 0
	        }
	    };



	    /**
	     * 设置相册的布局
	     * @param {number} layout 布局值，IfeAlbum.LAYOUT 中的值
	     */
	    IfeAlbum.prototype.setLayout = function (layout) {
	        this.layout = LayoutFuncs[layout]();
	        this.layout.name = Object.keys(this.LAYOUT)[layout-1];
	        this.dom = this.layout.getDom();
	    }



	    /**
	     * 获取相册的布局
	     * @return {string} 布局名称
	     */
	    IfeAlbum.prototype.getLayout = function() {
	        return this.layout.name;
	    };



	    /**
	     * 设置图片之间的间距
	     * 注意这个值仅代表图片间的间距，不应直接用于图片的 margin 属性，如左上角图的左边和上边应该紧贴相册的左边和上边
	     * 相册本身的 padding 始终是 0，用户想修改相册外框的空白需要自己设置相框元素的 padding
	     * @param {number}  x  图片之间的横向间距
	     * @param {number} [y] 图片之间的纵向间距，如果是 undefined 则等同于 x
	     */
	    IfeAlbum.prototype.setGutter = function (x, y) {
	        this.layout.setGutter(x,y);
	    };



	    /**
	     * 允许点击图片时全屏浏览图片
	     */
	    IfeAlbum.prototype.enableFullscreen = function () {
	        this.layout.enableFullscreen();
	    };



	    /**
	     * 禁止点击图片时全屏浏览图片
	     */
	    IfeAlbum.prototype.disableFullscreen = function () {
	        this.layout.disableFullscreen();
	    };



	    /**
	     * 获取点击图片时全屏浏览图片是否被允许
	     * @return {boolean} 是否允许全屏浏览
	     */
	    IfeAlbum.prototype.isFullscreenEnabled = function () {
	        return this.layout.isFullscreenEnabled();
	    };

	    /**
	     * 设置各个布局的基本信息
	     * @param {string}  width  宽度
	     * @param {string}  height  高度
	     * @param {object}  options  其它对应参数
	     * @return {object} 拼图的dom
	     */
	    IfeAlbum.prototype.init = function (width,height,options) {
	        return this.layout.init(width,height,options);
	    };
	    /**
	     * 获取木桶模式每行图片数的上限
	     * @return {number} 最多图片数（含）
	     */
	    IfeAlbum.prototype.getBarrelBinMax = function () {
	        if(!this.layout.name==='BARREL') return;
	        return this.layout.getBarrelBinMax();

	    };



	    /**
	     * 获取木桶模式每行图片数的下限
	     * @return {number} 最少图片数（含）
	     */
	    IfeAlbum.prototype.getBarrelBinMin = function () {
	        if(!this.layout.name==='BARREL') return;
	        return this.layout.getBarrelBinMin();
	    };



	    /**
	     * 设置木桶模式每行高度的上下限，单位像素
	     * @param {number} min 最小高度
	     * @param {number} max 最大高度
	     */
	    IfeAlbum.prototype.setBarrelHeight = function (min, max) {

	    };



	    /**
	     * 获取木桶模式每行高度的上限
	     * @return {number} 最多图片数（含）
	     */
	    IfeAlbum.prototype.getBarrelHeightMax = function () {

	    };



	    /**
	     * 获取木桶模式每行高度的下限
	     * @return {number} 最少图片数（含）
	     */
	    IfeAlbum.prototype.getBarrelHeightMin = function () {

	    };



	    // 你想增加的其他接口



	    /************* 以上是本库提供的公有方法 *************/



	    // 实例化
	    if (typeof window.ifeAlbum === 'undefined') {
	        // 只有当未初始化时才实例化
	        window.ifeAlbum = new IfeAlbum();
	    }

	}(window));




/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n", ""]);

	// exports


/***/ },
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zxr on 2016/4/27.
	 */
	__webpack_require__(6);
	var allScreen = __webpack_require__(8);
	var puzzle = function(){
	    var dom = createDom('div');
	    var imgStack = [];
	    var EnallScreen;
	    var flag;
	    //裁剪图片，生成套子,并将套子插入定位元素
	    function cutImage(img,domr){
	        //公共数据
	        var domWidth = (domr.Wraper)? parseInt(domr.Wraper.style.width) : parseInt(dom.style.width);
	        var domHeight = (domr.Wraper)?parseInt(domr.Wraper.style.height) : parseInt(dom.style.height);
	        //获取宽高比
	        var scale = img.width/img.height;
	        var scaleDom = domWidth/domHeight;
	        //计算水平或者垂直方向上的偏移
	        var move;
	        if(scaleDom>=scale){
	            move = ((domWidth/scale)-domHeight)/2;
	            updateStyles(img,{width:'100%',position:'absolute',top:-move+'px'});
	        }else{
	            move = ((domHeight*scale)-domWidth)/2;
	            updateStyles(img,{height:'100%',position:'absolute',left:-move+'px'});
	        }
	        updateStyles(domr,{overflow:'hidden',width:'100%',height:'100%',position:'relative'});
	        if(domr.Wraper) {
	            //将图像插入dom
	            addChilds(domr,img);
	            //套子插入定位元素
	            addChilds(domr.Wraper,domr);
	        }else{
	            addChilds(dom,img);
	        }


	    }
	    //不同布局的策略方法
	    var Layouts = {
	        1:function(imgs){
	            //公共数据
	            var domWidth = parseInt(dom.style.width),
	                domHeight= parseInt(dom.style.height);
	            //创建图像
	            var oImg = createDom('div');

	            oImg.Wraper = createDom('div');
	            dom.innerHTML = '';
	            imgStack = [];
	            imgStack.push(oImg);

	            updateStyles(oImg.Wraper,{
	                width:domWidth+'px',height:domHeight+'px',overflow:'hidden'
	            });
	            imgStack.forEach(function(item){
	                item.className = 'img-wraper';
	            });
	            //图片
	            imgs.forEach(function(item,index,array){
	                var img = createImage(item);
	                img.addEventListener('load',function(){
	                    cutImage(this,imgStack[index]);
	                },false)
	            });
	            addChilds(oImg.Wraper,oImg);
	            addChilds(dom,oImg.Wraper);

	        },
	        2:function(imgs){
	            //公共数据
	            var domWidth = parseInt(dom.style.width),
	                domHeight= parseInt(dom.style.height);

	            //再套一层div再进行旋转
	            var oDiv = createDom('div'),
	                div1 = createDom('div'),
	                div2 = createDom('div');
	            //img
	            var img1 = createImage(imgs[0]),oImg1 = createDom('div'),
	                img2 = createImage(imgs[1]),oImg2 = createDom('div');

	            dom.innerHTML = '';
	            imgStack = [];
	            imgStack.push(oImg1);
	            imgStack.push(oImg2);
	            imgStack.forEach(function(item){
	                item.className = 'img-wraper';
	                item.classList.add('right');
	                item.classList.add('bottom');
	            });

	            //计算出的数据
	            var cosDeg = Math.cos(Math.atan(domWidth/(3*domHeight)));
	            var Deg = Math.acos(cosDeg)*(180/Math.PI);
	            var rDeg = Math.acos(cosDeg);
	            var X = cosDeg*(domWidth/3);
	            var Y = Math.sin(rDeg)*(domWidth/3);
	            var wH = Y+(domHeight/cosDeg);
	            var oTop = Math.sin(rDeg)*domWidth;
	            var oLeft = domWidth*Math.tan(rDeg)*Math.sin(rDeg);

	            //属性设置
	            updateSameProperties([div1,div2],{
	                width:domWidth+'px',height:wH+'px',position:'absolute',overflow:'hidden'
	            },[{},{top:-Y+'px',left:domWidth+'px'}]);
	            updateStyles(oDiv,{
	                position:'relative',transformOrigin:'0 0',transform:'rotate('+Deg+'deg)',
	                top:-oTop+'px',left:-oLeft+'px'
	            });
	            updateSameProperties([oImg1,oImg2],{
	                width:domWidth+'px',height:domHeight+'px',position:'absolute',overflow:'hidden',
	                transform:'rotate('+-Deg+'deg)'
	            },[
	                {right:X-domWidth+'px',bottom:0,transformOrigin:'bottom left'},
	                {left:X-domWidth+'px',top:0,transformOrigin:'right top'}
	            ]);
	            updateSameProperties([img1,img2],{
	                height:'100%',position:'absolute'
	            },[{left:-domWidth/4+'px'},{right:-domWidth/4+'px'}]);

	            //添加结构
	            addChilds(oImg1,img1);
	            addChilds(oImg2,img2);
	            addChilds(div1,oImg1);
	            addChilds(div2,oImg2);
	            addChilds(oDiv,[div1,div2]);
	            addChilds(dom,oDiv);
	        },
	        3:function(imgs){
	            //公共数据
	            var domWidth = parseInt(dom.style.width),
	                domHeight= parseInt(dom.style.height);

	            //左边宽div
	            var divBig = createDom('div'),
	                divNarrow = createDom('div'),
	                divUp = createDom('div'),
	                divDown = createDom('div');

	            divBig.Wraper = createDom('div');
	            divNarrow.Wraper = createDom('div');
	            divUp.Wraper = createDom('div');
	            divDown.Wraper = createDom('div');

	            imgStack = [];
	            imgStack.push(divBig);
	            imgStack.push(divUp);
	            imgStack.push(divDown);




	            dom.innerHTML = '';
	            imgStack.forEach(function(item){
	                item.className = 'img-wraper';
	            });

	            //设置定位套子的位置信息
	            divUp.Wraper.className ='right top';
	            divDown.Wraper.className ='right bottom';
	            divBig.Wraper.className ='bottom left top';

	            //属性设置
	            updateStyles(divBig.Wraper,{
	                width:0.67*domWidth+'px',height:domHeight+'px',float:'left',position:'relative',
	                overflow:'hidden'
	            });
	            updateStyles(divNarrow.Wraper,{
	                width:0.33*domWidth+'px',height:'100%',float:'left'
	            });
	            console.log(domWidth);
	            updateSameProperties([divUp.Wraper,divDown.Wraper],{
	                width:domHeight*0.5+'px',height:domHeight*0.5+'px',
	                overflow:'hidden',position:'relative'
	            });

	            //图片
	            imgs.forEach(function(item,index,array){
	                var img = createImage(item);
	                img.addEventListener('load',function(){
	                    cutImage(this,imgStack[index]);
	                },false)
	            });
	            addChilds(divBig.Wraper,divBig);
	            addChilds(divNarrow.Wraper,[divUp.Wraper,divDown.Wraper]);
	            addChilds(dom,[divBig.Wraper,divNarrow.Wraper]);
	        },
	        4:function(imgs){

	            //公用数据部分
	            var domWidth = parseInt(dom.style.width),
	                domHeight = parseInt(dom.style.height);

	            //左右两大块
	            var divRight = createDom('div'),
	                divLeft = createDom('div');


	            //4个小方块
	            var divLup = createDom('div'),
	                divLdown = createDom('div'),
	                divRup = createDom('div'),
	                divRdown = createDom('div');


	                divLup.Wraper = createDom('div');
	                divLdown.Wraper = createDom('div');
	                divRup.Wraper = createDom('div');
	                divRdown.Wraper = createDom('div');

	            imgStack = [];
	            imgStack.push(divLup);
	            imgStack.push(divLdown);
	            imgStack.push(divRup);
	            imgStack.push(divRdown);


	            dom.innerHTML = '';
	            imgStack.forEach(function(item){
	                item.className = 'img-wraper';
	            });

	            divRup.Wraper.className = 'right top';
	            divRdown.Wraper.className = 'right bottom';
	            divLdown.Wraper.className = 'left bottom';
	            divLup.Wraper.className = 'left top';


	            //属性设置
	            updateSameProperties([divLeft,divRight],{
	                width:domWidth*0.5+'px',height:domHeight+'px',float:'left'
	            });
	            updateSameProperties([divLup.Wraper,divLdown.Wraper,divRup.Wraper,divRdown.Wraper],{
	                width:domWidth*0.5+'px',height:0.5*domHeight+'px',overflow:'hidden',position:'relative'
	            });

	            //图片
	            imgs.forEach(function(item,index,array){
	                var img = createImage(item);
	                img.addEventListener('load',function(){
	                    cutImage(this,imgStack[index]);
	                },false)
	            });

	            //添加结构
	            addChilds(divLeft,[divLup.Wraper,divLdown.Wraper]);
	            addChilds(divRight,[divRup.Wraper,divRdown.Wraper]);
	            addChilds(dom,divLeft);
	            addChilds(dom,divRight);
	        },
	        5:function(imgs){
	            //公共数据
	            var domWidth = parseInt(dom.style.width),
	                domHeight = parseInt(dom.style.height);
	            //套子
	            var leftTop = createDom('div'),
	                leftdoubleBottom = createDom('div'),
	                leftCenterBottom = createDom('div'),
	                rightTop = createDom('div'),
	                rightBottom = createDom('div');
	            //布局
	            var left = createDom('div'),
	                leftBottom = createDom('div'),
	                right = createDom('div');


	            leftTop.Wraper = createDom('div');
	            leftdoubleBottom.Wraper = createDom('div');
	            leftCenterBottom.Wraper = createDom('div');
	            rightTop.Wraper = createDom('div');
	            rightBottom.Wraper = createDom('div');

	            imgStack = [];
	            imgStack.push(leftTop);
	            imgStack.push(leftdoubleBottom);
	            imgStack.push(leftCenterBottom);
	            imgStack.push(rightTop);
	            imgStack.push(rightBottom);


	            dom.innerHTML = '';

	            imgStack.forEach(function(item){
	                item.className = 'img-wraper';
	            });

	            leftTop.Wraper.className = 'left top';
	            leftdoubleBottom.Wraper.className = 'left bottom';
	            leftCenterBottom.Wraper.className = 'bottom';
	            rightTop.Wraper.className = 'right top';
	            rightBottom.Wraper.className = 'right bottom';


	            //属性设置
	            updateStyles(left,{
	                width:0.67*domWidth+'px',height:domHeight+'px',float:'left'
	            });
	            updateStyles(right,{
	                width:0.33*domWidth+'px',height:domHeight+'px',float:'left'
	            });
	            updateStyles(leftBottom,{
	                width:0.67*domWidth+'px',height:0.33*domHeight+'px'
	            });
	            updateStyles(leftTop.Wraper,{
	                width:0.67*domWidth+'px',height:0.67*domHeight+'px',overflow:'hidden',position:'relative'
	            });
	            updateSameProperties([leftdoubleBottom.Wraper,leftCenterBottom.Wraper],{
	                width:0.5*0.67*domWidth+'px',height:0.33*domHeight+'px',float:'left',overflow:'hidden',position:'relative'
	            });
	            updateStyles(rightTop.Wraper,{
	                width:0.33*domWidth+'px',height:domWidth*0.33+'px',overflow:'hidden',position:'relative'
	            });
	            updateStyles(rightBottom.Wraper,{
	                width:0.33*domWidth+'px',height:domHeight-(domWidth*0.33)+'px',overflow:'hidden',position:'relative'
	            });
	            //图片属性

	            imgs.forEach(function(item,index,array){
	                var img = createImage(item);

	                img.addEventListener('load',function(){
	                    cutImage(this,imgStack[index]);
	                },false)
	            });

	            //添加结构
	            addChilds(dom,[left,right]);
	            addChilds(left,[leftTop.Wraper,leftBottom]);
	            addChilds(right,[rightTop.Wraper,rightBottom.Wraper]);
	            addChilds(leftBottom,[leftdoubleBottom.Wraper,leftCenterBottom.Wraper]);

	        },
	        6:function(imgs){
	            //公用数据
	            var domWidth = parseInt(dom.style.width),
	                domHeight = parseInt(dom.style.height);
	            //套子
	            var leftTop = createDom('div'),
	                leftDoubleBottom = createDom('div'),
	                leftCenterBottom = createDom('div'),
	                RightTop = createDom('div'),
	                RightCenter = createDom('div'),
	                RightBottom = createDom('div');

	            leftTop.Wraper = createDom('div');
	            leftDoubleBottom.Wraper = createDom('div');
	            leftCenterBottom.Wraper = createDom('div');
	            RightTop.Wraper = createDom('div');
	            RightCenter.Wraper = createDom('div');
	            RightBottom.Wraper = createDom('div');


	            //布局
	            var left = createDom('div'),
	                right = createDom('div'),
	                leftBottom = createDom('div');

	            imgStack = [];
	            imgStack.push(leftTop);
	            imgStack.push(leftDoubleBottom);
	            imgStack.push(leftCenterBottom);
	            imgStack.push(RightTop);
	            imgStack.push(RightCenter);
	            imgStack.push(RightBottom);



	            dom.innerHTML = '';
	            imgStack.forEach(function(item){
	                item.className = 'img-wraper';
	            });

	            leftTop.Wraper.className = 'left top';
	            leftDoubleBottom.Wraper.className = 'left bottom';
	            leftCenterBottom.Wraper.className = 'bottom';
	            RightTop.Wraper.className = 'right top';
	            RightCenter.Wraper.className = 'right';
	            RightBottom.Wraper.className = 'right bottom';


	            updateStyles(left,{
	                width:0.67*domWidth+'px',height:domHeight+'px',float:'left'
	            });
	            updateStyles(right,{
	                width:0.33*domWidth+'px',height:domHeight+'px',float:'left'
	            });
	            updateStyles(leftBottom,{
	                width:0.67*domWidth+'px',height:0.333*domHeight+'px'
	            });

	            updateStyles(leftTop.Wraper,{
	                width:0.67*domWidth+'px',height:0.67*domHeight+'px',position:'relative',overflow:'hidden'
	            });
	            updateSameProperties([leftDoubleBottom.Wraper,leftCenterBottom.Wraper],{
	                width:0.5*0.67*domWidth+'px',height:0.333*domHeight+'px',position:'relative',overflow:'hidden',float:'left'
	            });
	            updateSameProperties([RightTop.Wraper,RightCenter.Wraper,RightBottom.Wraper],{
	                width:0.333*domWidth+'px',height:0.333*domHeight+'px',position:'relative',overflow:'hidden'
	            });

	            //图片属性
	            imgs.forEach(function(item,index,array){
	                var img = createImage(item);
	                img.addEventListener('load',function(){
	                    cutImage(this,imgStack[index]);
	                },false)
	            });

	            //创建结构
	            addChilds(dom,[left,right]);
	            addChilds(left,[leftTop.Wraper,leftBottom]);
	            addChilds(right,[RightTop.Wraper,RightCenter.Wraper,RightBottom.Wraper]);
	            addChilds(leftBottom,[leftDoubleBottom.Wraper,leftCenterBottom.Wraper]);
	        }
	    }
	    return {
	        init:function(width,height){
	            updateStyles(dom,{width:width,height:height,position:'relative'});
	            dom.addEventListener('click',function(e){
	                if(e.target.tagName==='IMG') EnallScreen.pop(e.target);
	            },false)
	            return dom;
	        },
	        setImage:function(obj){
	            Layouts[obj.length](obj);
	            return dom;
	        },
	        getImageDomElements:function(){
	            return imgStack;
	        },
	        getDom:function(){
	            return dom;
	        },
	        setGutter:function(x,y){
	            var X = x/2 || 0;
	            var Y = y/2 || x/2 || 0;
	            if(imgStack.length!==2){
	                imgStack.forEach(function(item){
	                item.Wraper.style.paddingLeft = (item.Wraper.classList.contains('left'))? 0:X+'px';
	                item.Wraper.style.paddingRight = (item.Wraper.classList.contains('right'))? 0:X+'px';
	                item.Wraper.style.paddingTop = (item.Wraper.classList.contains('top'))? 0:Y+'px';
	                item.Wraper.style.paddingBottom = (item.Wraper.classList.contains('bottom'))? 0:Y+'px';
	                });    
	            }
	            
	        },
	        enableFullscreen:function(){
	            EnallScreen = allScreen();
	            flag = true;
	        },
	        disableFullscreen:function(){
	            EnallScreen.disable();
	            flag = false;
	        },
	        isFullscreenEnabled:function(){
	            return flag;
	        }
	    }
	}
	module.exports = puzzle;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./puzzle.scss", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./puzzle.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".img-wraper {\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out; }\n  .img-wraper:hover {\n    transform: scale(1.1); }\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	var allScreen = function(){
		var dom = createDom('div');
		var blackWraper = createDom('div');
		var showWraper = createDom('div');

		//添加css控制类
		dom.className = 'allScreen';
		blackWraper.className = 'allScreen_blackWraper';
		showWraper.className = 'allScreen_showWraper';

		//生成结构
		addChilds(dom,blackWraper);
		addChilds(blackWraper,showWraper);
		addChilds(document.body,dom);

		//点击事件处理函数
		function clickHandler(e){
			!hasRoot(e.target,showWraper) &&  $(dom).fadeOut();
		}
		//添加点击关闭事件
		dom.addEventListener('click',clickHandler,false);

		return {
			pop:function(img){
				$(dom).fadeIn();

				var imgScale = img.width/img.height;
				var scale = dom.offsetWidth/dom.offsetHeight;
				var width = (scale>imgScale)? (dom.offsetHeight-40)*imgScale : (dom.offsetWidth-200);
				var height = width/imgScale;
				var oImg = new Image();
				oImg.src = img.src;

				updateStyles(oImg,{width:'100%',height:'100%'});
				updateStyles(showWraper,{width:width+'px',height:height+'px'});
				
				showWraper.innerHTML = '';
				addChilds(showWraper,oImg);

			},
			close:function(){
				$(dom).fadeOut();
			},
			disable:function(){
				dom.parentNode.removeChild(dom);
			}
		}
	}

	module.exports = allScreen;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./allScreen.scss", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./allScreen.scss");
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

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".allScreen {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: none; }\n\n.allScreen_blackWraper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.9); }\n\n.allScreen_showWraper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 4px solid white; }\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zxr on 2016/4/28.
	 */
	__webpack_require__(12);
	var allScreen = __webpack_require__(8)
	var ImagesAgent = __webpack_require__(14)
	var waterfall = function(){
	    var instance;
	    var EnallScreen,flag;

	    function waterFalls(){
	        this.element = createDom('div');
	        this.marginBet = 16;
	        this.colsBet = 4;
	        this.num = 8;
	        this.layouts = [];
	        this.wrapers = [];
	    }
	    waterFalls.prototype.init = function(width,height,options){
	        this.colsBet = options? options.cols: 4;
	        //初始化最外层
	        this.element.className = 'falls';
	        updateStyles(this.element,{paddingTop:this.marginBet+'px',paddingLeft: this.marginBet+'px',width:width,height:height});
	        //创建布局
	        this.generateLayout();
	    }
	    waterFalls.prototype.generateLayout = function(){
	        var html = '';
	        var percent = (1/this.colsBet)*100;
	        var marginBet = this.marginBet;
	        var LayoutStack = this.layouts;

	        for(var i=0;i<this.colsBet;i++){
	            html += '<div class="falls-cols" style="width:'+percent+'%;float:left;padding-right:'+marginBet+'px;"></div>';
	        }

	        this.element.innerHTML = html;
	        addChilds(document.body,this.element);
	        var $cols = document.querySelectorAll('.falls-cols');
	        putInarray($cols,LayoutStack);
	    }
	    waterFalls.prototype.addImage = function(imgs){
	        var WraperStack = this.wrapers;
	        var self = this;
	        //创建图像
	        imgs.forEach(function(item,index){
	            var img = new Image();
	            img.addEventListener('click',function(){
	                EnallScreen.pop(this);
	            },false);
	            var wraper = createDom('div');
	            wraper.className = 'falls-wraper';
	            //设置套子和图片属性
	            updateStyles(wraper,{
	                width:'100%',position:'relative',height:'200px',
	                marginBottom:self.marginBet+'px'
	            });
	            updateStyles(img,{width:'100%',display:'block'});
	            WraperStack.push(wraper);
	            //寻找最短的列插入
	            addChilds(self.findShortest(),wraper);
	            ImagesAgent.addImage(wraper,img,item);
	        });
	    }
	    waterFalls.prototype.findShortest = function(){
	        return findMin(this.layouts,'clientHeight');
	    }
	    return {
	        init:function(width,height,options){
	            //改变
	            instance.init(width,height,options);
	        },
	        //添加图片
	        setImage:function(imgs){
	            //添加图片，生成套子
	            instance.addImage(imgs);
	            //第一屏加载
	            ImagesAgent.load();
	        },
	        getDom:function(){
	            instance = new waterFalls();
	            return instance.element;
	        },
	        setGutter:function(x,y){
	            
	            var oFalls = document.querySelector('.falls');
	            var aCols = document.querySelectorAll('.falls-cols');
	            var aWrapers = document.querySelectorAll('.falls-wraper');

	            updateStyles(oFalls,{paddingTop:y+'px',paddingLeft:x+'px'});
	            updateSameProperties(Array.prototype.slice.call(aCols,0),{paddingRight:x+'px'});
	            updateSameProperties(Array.prototype.slice.call(aWrapers,0),{marginBottom:y+'px'});
	            
	        },
	        enableFullscreen:function(){
	            EnallScreen = allScreen();
	            flag = true;
	        },
	        disableFullscreen:function(){
	            EnallScreen.disable();
	            flag = false;
	        },
	        isFullscreenEnabled:function(){
	            return flag;
	        }
	    }
	}
	module.exports = waterfall;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./falls.scss", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./falls.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".falls::after {\n  content: '';\n  width: 0;\n  height: 0;\n  display: block;\n  clear: both; }\n\n.falls-blackWraper {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 100;\n  display: none;\n  transition: all 0.5s ease-in-out; }\n\n.falls-wraper {\n  width: 100%;\n  position: relative;\n  background-color: #D8D8D8;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: -2px -2px 10px rgba(0, 0, 0, 0.5), 2px 2px 10px rgba(0, 0, 0, 0.5);\n  border: 2px solid white; }\n  .falls-wraper:hover {\n    transform: scale(1.1); }\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Created by zxr on 2016/4/28.
	 */
	var ImagesAgent = (function(){
	    var ImageStack = [];
	    //添加窗口滚动事件
	    window.addEventListener('scroll',function(){
	        ImagesAgent.load();
	    },false);
	    //判断是否在可视区,如在则加载
	    function judgeLoad(){
	        for(var i = ImageStack.length-1,item;item=ImageStack[i--];){
	            if(parseInt(item.dom.offsetTop)<=parseInt((document.documentElement.clientHeight+bodyScrollTop()))){
	                addImage(item.dom,item.img,item.src);
	                ImageStack.splice(ImageStack.indexOf(item),1);
	            }
	        }
	    }
	    return {
	        //添加到图片栈
	        addImage:function(dom,img,src){
	            var oImg = {};
	            oImg.dom = dom;
	            oImg.img = img;
	            oImg.src = src;
	            ImageStack.push(oImg);
	        },
	        //加载接口
	        load:function(){
	            judgeLoad();
	        }
	    }
	})();

	module.exports = ImagesAgent;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zxr on 2016/4/30.
	 */
	__webpack_require__(16);
	var allScreen = __webpack_require__(8);
	var Barrels = function(){
	    var instance;
	    var EnallScreen,flag;
	    //木桶类
	    function Barrel(){
	        this.rows = [];
	        this.images = [];
	        this.wraper = createDom('div');
	    }
	    Barrel.prototype.init = function(width,height,options){
	        this.BinMin = options? options.BinMin : 3;
	        this.BinMax = options? options.BinMax : 6;
	        updateStyles(this.wraper,{width:width,height:height});
	        this.wraper.className = 'Barrel';
	        document.body.appendChild(this.wraper);
	        return this.wraper
	    }
	    Barrel.prototype.addImages = function(imgs){

	        var imgLength = imgs.length;
	        var averHeight = parseInt(document.documentElement.clientHeight/3);
	        var DW = parseInt(this.wraper.offsetWidth);
	        var self = this;
	        var current;

	        newRowInsert();
	        loadImage(0);

	        //创建新行并插入到wraper
	        function newRowInsert(){
	            current = {length:0,scale:0,height:averHeight,dom:createDom('div')};
	            current.dom.className = 'barrel-row';
	            updateStyles(current.dom,{height:averHeight+'px'});
	            self.wraper.appendChild(current.dom);
	        }
	        //设置当前current应有的高度以适应宽度
	        function fitWidth(){
	            var height = parseInt(DW/current.scale);
	            updateStyles(current.dom,{height:height+'px'});
	            current.height = height;
	        }
	        //从第一张图片开始加载
	        function loadImage(index){

	            if(index>=imgLength) return true;
	            var image = createImage(imgs[index]);
	            image.className = 'Barrel-img';
	            image.addEventListener('load',function(){
	                this.addEventListener('click',function(){
	                    EnallScreen.pop(this);
	                },false);
	                insertImage(this);
	                loadImage(index+1);
	            },false);

	        }
	        //添加图片算法
	        function insertImage(img){

	            var scale = img.width/img.height;
	            var width = parseInt(current.height*(current.scale+scale));
	            if(width>DW){
	                if(current.length<self.BinMin){
	                    //行插入当前img
	                    current.length++;
	                    current.scale += scale;
	                    updateStyles(img,{height:'100%'});
	                    fitWidth();
	                    current.dom.appendChild(img);
	                }else{
	                    //根据已有img的scale计算行高
	                    fitWidth();
	                    //以平均高度创建新行,将其插进新行
	                    newRowInsert();
	                    //当前行插入新的img
	                    current.length++;
	                    current.scale += scale;
	                    updateStyles(img,{height:'100%'});
	                    current.dom.appendChild(img);
	                }
	            }else{
	                //插进当前行
	                current.length++;
	                current.scale += scale;
	                updateStyles(img,{height:'100%'});
	                current.dom.appendChild(img);

	            }

	        }

	    }

	    return {
	        init:function(width,height,options){
	        
	            
	            instance.init(width,height,options);
	            return instance.wraper;
	        },
	        setImage:function(imgs){

	            instance.addImages(imgs);
	            
	        },
	        getDom:function(){

	            instance = new Barrel();
	            return instance.wraper;

	        },
	        enableFullscreen:function(){
	            EnallScreen = allScreen();
	            flag = true;
	        },
	        disableFullscreen:function(){
	            EnallScreen.disable();
	            flag = false;
	        },
	        isFullscreenEnabled:function(){
	            return flag;
	        },
	        getBarrelBinMax:function(){
	            return instance.BinMax;
	        },
	        getBarrelBinMin:function(){
	            return instance.BinMin;
	        }
	    }
	}

	module.exports = Barrels;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Barrel.scss", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Barrel.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".Barrel-img {\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out; }\n  .Barrel-img:hover {\n    transform: scale(1.1); }\n", ""]);

	// exports


/***/ }
/******/ ]);