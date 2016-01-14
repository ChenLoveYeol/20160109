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
	 * Created by Administrator on 2016/1/13.
	 */
	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./buypage.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./buypage.scss");
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
	exports.i(__webpack_require__(4), "");

	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*��ҳ*/\n.left, #nav-top .btn img, #nav-top p, #buy-con .goods2 .back, #buy-con .goods2 p, #buy-con .goods2 .favor1, #buy-con .buy-size span, #buy-con .buy-color span {\n  float: left; }\n\n/*�б�ҳ*/\n/*��������ҳ*/\n/*���ﳵ*/\nbody {\n  background: #cbcbcb; }\n\n#nav-top {\n  margin-top: 1rem;\n  width: 16rem;\n  height: 2.2rem;\n  background: #fff; }\n  #nav-top .btn img {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    margin-top: 4%;\n    margin-left: 0.5rem; }\n  #nav-top p {\n    font-family: \"\\3A2\\FFFD\\FFFD\\FFFD\\17A\\FFFD\", Tahoma, sans-serif;\n    font-size: 1.25rem;\n    font-weight: 200;\n    margin: 0rem 0 0 3.5rem;\n    line-height: 2.2rem; }\n\n#buy-con {\n  overflow: hidden;\n  margin-top: 0.125rem; }\n  #buy-con .goods2 {\n    width: 16rem;\n    height: 4.95rem;\n    background: #efefef; }\n    #buy-con .goods2 .back {\n      width: 3.75rem;\n      height: 3.75rem;\n      background-color: #fff;\n      margin: 0.625rem 0 0 0.625rem; }\n      #buy-con .goods2 .back img {\n        width: 2.4rem;\n        height: 2.4rem;\n        margin: 0.7rem 0 0 0.7rem; }\n    #buy-con .goods2 p {\n      width: 10.55rem;\n      height: 2.825rem;\n      margin: 0.5rem 0 0 0.625rem;\n      font-family: \"\\3A2\\FFFD\\FFFD\\FFFD\\17A\\FFFD\", Tahoma, sans-serif;\n      font-size: 0.75rem;\n      font-weight: 200; }\n    #buy-con .goods2 .favor1 {\n      width: 11.25rem; }\n      #buy-con .goods2 .favor1 span:nth-child(1) {\n        color: #ff5500;\n        font-size: 0.925rem;\n        font-weight: 200;\n        margin-left: 0.625rem; }\n      #buy-con .goods2 .favor1 span:nth-child(2) {\n        color: darkgray;\n        text-decoration: line-through;\n        font-size: 0.75rem;\n        margin-left: 0.625rem; }\n  #buy-con .buy-size, #buy-con .buy-color {\n    height: 3.95rem;\n    background: #efefef;\n    margin-top: 0.05rem; }\n    #buy-con .buy-size p, #buy-con .buy-color p {\n      width: 2.5rem;\n      margin-left: 0.6rem;\n      margin-bottom: 0.25rem;\n      font-family: \"\\3A2\\FFFD\\FFFD\\FFFD\\17A\\FFFD\", Tahoma, sans-serif;\n      font-size: 1rem;\n      font-weight: 100; }\n    #buy-con .buy-size span, #buy-con .buy-color span {\n      width: 3.4rem;\n      height: 2rem;\n      display: block;\n      margin-left: 0.45rem;\n      background: #fff;\n      text-align: center;\n      line-height: 2rem;\n      border: 1px solid #ccc; }\n  #buy-con .buy-number {\n    position: relative;\n    background: #efefef;\n    border-top: 1px dashed #ccc;\n    width: 16rem;\n    height: 12.5rem; }\n    #buy-con .buy-number .num {\n      width: 2.5rem;\n      margin-left: 0.6rem;\n      margin-top: 0.25rem; }\n    #buy-con .buy-number .add span {\n      background: #fff;\n      font-size: 1.75rem;\n      font-family: sans-serif;\n      border: 1px solid #ccc;\n      display: block;\n      float: left;\n      margin-left: 0.375rem;\n      text-align: center;\n      line-height: 2.025rem; }\n      #buy-con .buy-number .add span:nth-child(1) {\n        margin-left: 0.6rem;\n        width: 2.025rem;\n        height: 2.025rem; }\n      #buy-con .buy-number .add span:nth-child(2) {\n        margin-left: 0.6rem;\n        width: 2.025rem;\n        height: 2.025rem; }\n    #buy-con .buy-number .add input {\n      float: left;\n      margin-left: 0.6rem;\n      width: 3.5rem;\n      height: 2.025rem;\n      font-size: 1.25rem;\n      font-family: sans-serif;\n      text-align: center;\n      line-height: 2.025rem; }\n    #buy-con .buy-number .num1 {\n      color: #ff5500;\n      float: left;\n      width: 5.75rem;\n      margin-left: 0.425rem;\n      font-size: 1rem;\n      font-family: sans-serif; }\n    #buy-con .buy-number .num2 {\n      float: left;\n      width: 5.75rem;\n      margin-left: 0.425rem;\n      font-size: 1rem;\n      font-family: sans-serif; }\n    #buy-con .buy-number .buy {\n      position: absolute;\n      bottom: 0.25rem;\n      left: 0.6rem;\n      width: 14.8rem;\n      height: 2.175rem;\n      background: #ff5500;\n      text-align: center;\n      line-height: 2.175rem;\n      bottom: 0.25rem;\n      border-radius: 0.375rem;\n      color: #fff; }\n", ""]);

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

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"utf-8\";\r\n*{ box-sizing:border-box;}\r\narticle, aside, blockquote, body, button, code, dd, details, div, dl, dt, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, input, legend, li, menu, nav, ol, p, pre, section, td, textarea, th, ul {margin:0;padding:0;}\r\narticle, aside, details, figcaption, figure, footer, header, hgroup, nav, section, summary {display:block;}\r\nh1,h2,h3,h4,h5,h6{font-weight: normal;}\r\nul,ol,li{list-style:none;}\r\n\r\nem,i{font-style:normal;}\r\nhtml{ font-size:10px;color:#383838;background:#efefef;}\r\nbody,input,textarea,select,button{font-family:\"\\5FAE\\8F6F\\96C5\\9ED1\",Tahoma,sans-serif;-webkit-appearance:none;border-radius: 0;}\r\na{color:#333;text-decoration:none; outline:none;}\r\na.active{color:#c4a000;}\r\na,button,input,p,label,div{-webkit-tap-highlight-color:rgba(255,0,0,0);}\r\n\r\nimg{border:0;width:100%;vertical-align:bottom;}\r\n\r\n.clearfix:after {content:\".\";display:block;height:0;clear:both;visibility:hidden;}\r\n.clearfix {zoom:1;}\r\n.none{ display:none;}\r\ninput,textarea{border:none; }\r\ninput:focus,textarea:focus{outline: none;}\r\ntextarea{resize:none;}\r\nbutton{border:none;background:none;}\r\naddress{font-style: normal;}\r\n\r\n#wrap{ background:#efefef; min-width:320px; max-width:640px; margin:0 auto; font-size:14px; padding-bottom: 5.3em;}\r\n@media screen and (min-width:480px) {\r\n\t#wrap {font-size:19px;}\r\n}\r\n@media screen and (min-width:640px) {\r\n\t#wrap {font-size:28px;}\r\n}\r\n\r\n.m_z{ background:#ff4f4f; color:#FFF; text-align:center;}\r\n.h_g{ background:#feb02f; color:#FFF; text-align:center;}\r\n.m_j{ background:#fd5e44; color:#FFF; text-align:center;}\r\n.b_y{ background:#8fc31f; color:#FFF; text-align:center;}\r\n.t_c{ background:#556fb5; color:#FFF; text-align:center;}\r\n.t_g{ background:#e3000f; color:#FFF; text-align:center;}\r\n.z_k{ background:#ff387f; color:#FFF; text-align:center;}\r\n.z_x{ background:#35b3f5; color:#FFF; text-align:center;}\r\n\r\n/**清除浮动**/\r\n.clear{\r\n\tclear:both;\r\n}\r\n\r\n.clearfix:after{\r\n\tcontent:\"\";\r\n\tdisplay:black;\r\n\toverflow: hidden;\r\n\tclear:both;\r\n}\r\n/*浮动*/\r\n.floatL{\r\n\tfloat: left;\r\n}\r\n.floatR{\r\n\tfloat: right;\r\n}\r\n/**左右有 24px 间距**/\r\n.g-container_padding{\r\n\tpadding:0 0.857em;\r\n}\r\n\r\n.marginLeft12{\r\n\tmargin-left: 0.429em;\r\n}\r\n\r\n.marginTop10{\r\n\tmargin-top: 0.357em;\r\n}\r\n\r\n.marginTop12{\r\n\tmargin-top: 0.429em;\r\n}\r\n\r\n.marginTop18{\r\n\tmargin-top: 0.643em;\r\n}\r\n\r\n#wrap .marginTop20{\r\n\tmargin-top: 0.714em;\r\n}\r\n\r\n.marginTop25{\r\n\tmargin-top: 0.893em;\r\n}\r\n\r\n.marginTop32{\r\n\tmargin-top: 1.143em;\r\n}\r\n\r\n#wrap .marginTop56{\r\n\tmargin-top: 2em;\r\n}\r\n\r\n.marginBottom20{\r\n\tmargin-bottom: 0.714em;\r\n}\r\n\r\n.marginBottom24{\r\n\tmargin-bottom: 0.857em;\r\n}\r\n\r\n.marginRight25{\r\n\tmargin-right: 0.893em;\r\n}\r\n\r\n.marginLeft20{\r\n\tmargin-left: 0.714em;\r\n}\r\n\r\n.paddingBottom62-{\r\n\tpadding-bottom: 2.214em;\r\n}\r\n\r\n.paddingLeft16{\r\n\tpadding-left: 0.571em;\r\n}\r\n\r\n.bottom-border{\r\n\tborder-bottom:1px solid #dbdbdb;\r\n}\r\n\r\n.bordertb{\r\n\tborder-top:1px solid #dbdbdb;\r\n\tborder-bottom:1px solid #dbdbdb;\r\n}\r\n\r\n.relative{\r\n\tposition: relative;\r\n}\r\n\r\n.absolute{\r\n\tposition: absolute;\r\n}\r\n\r\n/**右侧箭头-->位于垂直居中**/\r\n.arrow-son:after{\r\n\tdisplay: block;\r\n\tcontent:\"\";\r\n\twidth:10px;\r\n\theight: 10px;\r\n\tborder-top:1px solid #989898;\r\n\tborder-right:1px solid #989898;\r\n\tposition: absolute;\r\n\tright:10px;\r\n\ttop:40%;\r\n\t-webkit-transform:rotate(45deg)\r\n}\r\n\r\n/**字体大小**/\r\n.fs20{\r\n\tfont-size:0.714em;\r\n}\r\n.fs22{\r\n\tfont-size:0.786em;\r\n}\r\n.fs24{\r\n\tfont-size:0.857em;\r\n}\r\n.fs26{\r\n\tfont-size:0.929em;\r\n}\r\n.fs28{\r\n\tfont-size:1em;\r\n}\r\n.fs36{\r\n\tfont-size: 1.286em;\r\n}\r\n.fs30{\r\n\tfont-size: 1.071em;\r\n}\r\n.fs36{\r\n\tfont-size: 1.286em;\r\n}\r\n\r\n.fs48{\r\n\tfont-size: 1.714em;\r\n}\r\n\r\n/**常用颜色**/\r\n#wrap .c71{\r\n\tcolor:#717171;\r\n}\r\n#wrap .c98{\r\n\tcolor:#989898;\r\n}\r\n#wrap .c57{\r\n\tcolor: #575757;\r\n}\r\n#wrap .c33{\r\n\tcolor:#333333;\r\n}\r\n#wrap .c-orange{\r\n\tcolor:#fc4a00;\r\n}\r\n\r\n#wrap .c-red{\r\n\tcolor:#e3000f;\r\n}\r\n#wrap .c-green{\r\n\tcolor:#8fc31f;\r\n}\r\n\r\n#wrap .bold{\r\n\tfont-weight: bold;\r\n}\r\n\r\n#wrap .c-white{\r\n\tcolor:#FFF;\r\n}\r\n\r\n#wrap .disabled{\r\n\tbackground: #989898;\r\n\tcolor:#FFF;\r\n\tfont-size: 0.857em;\r\n}\r\n\r\n.button-orange-116{\r\n\tdisplay: inline-block;\r\n\twidth:5.143em;\r\n\theight: 2.357em;\r\n\tline-height: 2.357em;\r\n\tborder:1px solid #fc4a00;\r\n\tborder-radius:5px;\r\n\ttext-align: center;\r\n\tcolor:#FFFFFF;\r\n\tfont-size: 1em;\r\n\tbackground:#fc4a00;\r\n}\r\n\r\n.button-gray-100{\r\n\tdisplay: inline-block;\r\n\twidth:3.571em;\r\n\theight: 1.857em;\r\n\tline-height: 1.857em;\r\n\tborder:1px solid #575757;\r\n\tborder-radius:5px;\r\n\ttext-align: center;\r\n\tcolor:#575757;\r\n\tfont-size: 0.857em;\r\n\tletter-spacing: 0.107em;\r\n}\r\n\r\n.button-gray-116{\r\n\tdisplay: inline-block;\r\n\twidth:5.5em;\r\n\theight: 2.6em;\r\n\tline-height: 2.6em;\r\n\tborder:1px solid #575757;\r\n\tborder-radius:2px;\r\n\ttext-align: center;\r\n\tcolor:#575757;\r\n\tfont-size: 0.857em;\r\n}\r\n\r\n.bgwhite{\r\n\tbackground: #FFF;\r\n}\r\n\r\n.show{\r\n\tdisplay: block!important;\r\n}\r\n\r\n.hide{\r\n\tdisplay: none!important;\r\n}\r\n\r\n/**ios7 开关**/\r\n.iosCheck input {\r\n  display: none;\r\n}\r\n.iosCheck i {\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  padding-right: 25px;\r\n  transition: all ease 0.2s;\r\n  -webkit-transition: all ease 0.2s;\r\n  border-radius: 25px;\r\n  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5);\r\n}\r\n.iosCheck i:before {\r\n  display: block;\r\n  content: '';\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 25px;\r\n  background: white;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\r\n}\r\n.iosCheck :checked + i {\r\n  padding-right: 0;\r\n  padding-left: 25px;\r\n  background: #8fc31f;\r\n  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5), inset 0 0 40px #8fc31f;\r\n  -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5), inset 0 0 40px #8fc31f;\r\n}\r\n.iosCheck.green :checked + i {\r\n  background: #8fc31f;\r\n  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5), inset 0 0 40px #0093ea;\r\n  -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5), inset 0 0 40px #0093ea;\r\n}\r\n\r\n/**幻灯片**/\r\n.swipe {\r\n  overflow: hidden;\r\n  visibility: hidden;\r\n  position: relative;\r\n}\r\n.swipe-wrap {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n.swipe-wrap > div {\r\n  float:left;\r\n  width:100%;\r\n  position: relative;\r\n}\r\n.swipe-num{\r\n    position: absolute;\r\n    bottom:5px;\r\n    left:50%;\r\n    -webkit-transform:translateX(-50%);\r\n    transform:translateX(-50%);\r\n}\r\n\r\n.swipe-num li{\r\n    width:10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    background: #cacac7;\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n}\r\n\r\n.swipe-num li.active{\r\n    background: #fc4a00;\r\n}\r\n\r\n\r\n.label{\r\n\tpadding:0.179em 0.279em;\r\n\tcolor:#FFFFFF;\r\n\tfont-size: 0.786em;\r\n}\r\n\r\n.bg-pink{\r\n\tbackground: #ff387f;\r\n}\r\n\r\n.bg-green{\r\n\tbackground: #1e9e49;\r\n}\r\n\r\n.bg-sgreen{\r\n\tbackground: #8fc31f;\r\n}\r\n\r\n.bg-red{\r\n\tbackground:#e3000f;\r\n}\r\n\r\n.bg-red1{\r\n\tbackground:#ff2a00;\r\n}\r\n\r\n.bg-brick{\r\n\tbackground:#fd5e44;\r\n}\r\n.bg-blue{\r\n\tbackground: #556fb5;\r\n}\r\n.bg-skyblue{\r\n\tbackground:#26a9e1;\r\n}\r\n.bg-syellow{\r\n\tbackground: #fc4a00;\r\n}\r\n\r\n.bg-gray{\r\n\tbackground: #c5c5c5;\r\n\tcolor:#989898 !important;\r\n}\r\n\r\n.bg-lowblue{\r\n\tbackground: #26a9e1;\r\n}\r\n\r\n\r\n.bg-yellow{\r\n\tbackground: #feb02f;\r\n}\r\n\r\n.shake{\r\n\t-webkit-animation-duration:0.4s !important;\r\n\tanimation-duration:0.4s !important;\r\n}\r\n\r\n.text-center{\r\n\ttext-align: center;\r\n}\r\n\r\n/***垂直居中提示层**/\r\n.tips {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n}\r\n.tips {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 9999;\r\n  -webkit-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  -webkit-justify-content: center;\r\n  justify-content: center;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  -webkit-align-items: center;\r\n  align-items: center;\r\n}\r\n\r\n@-webkit-keyframes tips_scale{\r\n\tto{\r\n\t\t-webkit-transform: scale(1);\r\n\t}\r\n}\r\n\r\n@keyframes tips_scale{\r\n\tto{\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n\r\n.tipscon {\r\n\t-webkit-transform: scale(0);\r\n\ttransform: scale(0);\r\n\r\n\tanimation: tips_scale .3s linear forwards;\r\n\t-webkit-animation: tips_scale .3s linear forwards;\r\n\r\n}\r\n.tipscon {\r\n  padding:15px;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  border-radius: 5px;\r\n  margin: 0 20px;\r\n  overflow: hidden;\r\n  opacity: 1;\r\n  color:#FFF;\r\n  font-size: 1.25em;\r\n  letter-spacing:2px;\r\n}\r\n\r\n.home_icon{\r\n\tz-index: 999;\r\n\twidth: 3.428em;\r\n\theight: 3.428em;\r\n\tposition: fixed;\r\n\tleft: 0.892em;\r\n\tbottom:0.892em;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 5 */
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
		var sourceMap = obj.sourceMap;

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
		var media = obj.media;
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


/***/ }
/******/ ]);