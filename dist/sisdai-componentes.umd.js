(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sisdai-componentes"] = factory(require("vue"));
	else
		root["sisdai-componentes"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(481);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(400);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".componente-vacio{max-width:300px;display:inline-flex;flex-direction:column;justify-content:center}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(481);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(400);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".conacyt-piepagina{color:#fff;font-size:14px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(481);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(400);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".gobmx-piepagina{background-image:url(https://cdn.conacyt.mx/sisdai-archivos/gobmxpleca.svg);background-position:bottom;background-repeat:repeat-x;background-size:auto 50px;color:#fff;font-size:14px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 400:
/***/ (function(module) {

"use strict";


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

/***/ 481:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 445:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(528);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("074cf345", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 76:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(660);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("22eadc42", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 430:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(230);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("fff518c6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ addStylesClient; }
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 203:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b6487c7-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/componente-vacio/ComponenteVacio.vue?vue&type=template&id=a6444270&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "componente-vacio"
  }, [_c('b', [_vm._v("Soy un componente ")]), _c('button', {
    on: {
      "click": _setup.saludo
    }
  }, [_vm._v("vacio")])]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/componente-vacio/ComponenteVacio.vue?vue&type=script&setup=true&lang=js&
/* harmony default export */ var ComponenteVaciovue_type_script_setup_true_lang_js_ = ({
  __name: 'ComponenteVacio',
  setup(__props) {
    function saludo() {
      alert('Hola, desde el componente vacio');
    }
    return {
      __sfc: true,
      saludo
    };
  }
});
;// CONCATENATED MODULE: ./src/components/componente-vacio/ComponenteVacio.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var componente_vacio_ComponenteVaciovue_type_script_setup_true_lang_js_ = (ComponenteVaciovue_type_script_setup_true_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-54.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/componente-vacio/ComponenteVacio.vue?vue&type=style&index=0&id=a6444270&prod&lang=css&
var ComponenteVaciovue_type_style_index_0_id_a6444270_prod_lang_css_ = __webpack_require__(445);
;// CONCATENATED MODULE: ./src/components/componente-vacio/ComponenteVacio.vue?vue&type=style&index=0&id=a6444270&prod&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/componente-vacio/ComponenteVacio.vue



;


/* normalize component */

var component = normalizeComponent(
  componente_vacio_ComponenteVaciovue_type_script_setup_true_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ComponenteVacio = (component.exports);
;// CONCATENATED MODULE: ./src/components/componente-vacio/index.js

const componente_vacio_plugin = {
  install: function (Vue) {
    Vue.component('ComponenteVacio', ComponenteVacio);
  }
};
/* harmony default export */ var componente_vacio = (componente_vacio_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b6487c7-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/colapsable-navegacion/ColapsableNavegacion.vue?vue&type=template&id=369561f0&
var ColapsableNavegacionvue_type_template_id_369561f0_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('li', {
    staticClass: "colapsable-navegacion",
    class: {
      activo: _setup.esta_activo
    }
  }, [_c('button', {
    staticClass: "colapsable-boton-submenu nav-boton-submenu",
    on: {
      "click": function ($event) {
        _setup.esta_activo = !_setup.esta_activo;
      }
    }
  }, [_vm._v(" " + _vm._s(_setup.props.titulo) + " ")]), _c('ul', {
    staticClass: "colapsable-submenu"
  }, [_vm._t("listado-contenido", function () {
    return [_vm._m(0)];
  })], 2)]);
};
var ColapsableNavegacionvue_type_template_id_369561f0_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/salsa-community/sisdai-componentes/",
      "target": "_blank"
    }
  }, [_vm._v(" Elemento desplegado")])]);
}];

;// CONCATENATED MODULE: ./src/components/colapsable-navegacion/ColapsableNavegacion.vue?vue&type=template&id=369561f0&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/colapsable-navegacion/ColapsableNavegacion.vue?vue&type=script&setup=true&lang=js&

/* harmony default export */ var ColapsableNavegacionvue_type_script_setup_true_lang_js_ = ({
  __name: 'ColapsableNavegacion',
  props: {
    titulo: {
      type: String,
      default: 'Titulo de colapsable'
    },
    activo: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const esta_activo = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(props.activo);
    return {
      __sfc: true,
      props,
      esta_activo
    };
  }
});
;// CONCATENATED MODULE: ./src/components/colapsable-navegacion/ColapsableNavegacion.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var colapsable_navegacion_ColapsableNavegacionvue_type_script_setup_true_lang_js_ = (ColapsableNavegacionvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/components/colapsable-navegacion/ColapsableNavegacion.vue





/* normalize component */
;
var ColapsableNavegacion_component = normalizeComponent(
  colapsable_navegacion_ColapsableNavegacionvue_type_script_setup_true_lang_js_,
  ColapsableNavegacionvue_type_template_id_369561f0_render,
  ColapsableNavegacionvue_type_template_id_369561f0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ColapsableNavegacion = (ColapsableNavegacion_component.exports);
;// CONCATENATED MODULE: ./src/components/colapsable-navegacion/index.js

const colapsable_navegacion_plugin = {
  install: function (Vue) {
    Vue.component('ColapsableNavegacion', ColapsableNavegacion);
  }
};
/* harmony default export */ var colapsable_navegacion = (colapsable_navegacion_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b6487c7-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/menu-lateral/MenuLateral.vue?vue&type=template&id=7b6a071d&
var MenuLateralvue_type_template_id_7b6a071d_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('menu', {
    staticClass: "menu-lateral-contenedor"
  }, [_c('div', {
    staticClass: "menu-mov",
    class: {
      abierto: _setup.menu_abierto
    },
    on: {
      "click": function ($event) {
        _setup.menu_abierto = !_setup.menu_abierto;
      }
    }
  }, [_c('button', {
    staticClass: "boton-icono boton-menu"
  }, [_setup.menu_abierto ? _c('span', {
    staticClass: "icono-angulo-doble-izquierda"
  }) : _c('span', {
    staticClass: "icono-angulo-doble-derecha"
  })])]), _c('div', {
    staticClass: "menu-colapsable",
    class: {
      abierto: _setup.menu_abierto
    }
  }, [_c('div', {
    staticClass: "menu-max-height"
  }, [_vm._t("contenido-menu-lateral", function () {
    return [_c('router-link', {
      attrs: {
        "to": "#routerlink"
      }
    }, [_vm._v(" router link prueba ")]), _c('a', {
      attrs: {
        "href": "#anchore"
      }
    }, [_vm._v(" anchore link prueba ")]), _vm._m(0)];
  })], 2)])]);
};
var MenuLateralvue_type_template_id_7b6a071d_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('a', {
    attrs: {
      "href": "https://github.com/salsa-community/sisdai-componentes",
      "rel": "noopener",
      "target": "_blank"
    }
  }, [_c('span', {
    staticClass: "icono-social-github"
  }), _vm._v(" ejemplo github ")]);
}];

;// CONCATENATED MODULE: ./src/components/menu-lateral/MenuLateral.vue?vue&type=template&id=7b6a071d&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/menu-lateral/MenuLateral.vue?vue&type=script&setup=true&lang=js&

/* harmony default export */ var MenuLateralvue_type_script_setup_true_lang_js_ = ({
  __name: 'MenuLateral',
  setup(__props) {
    const menu_abierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
    return {
      __sfc: true,
      menu_abierto
    };
  }
});
;// CONCATENATED MODULE: ./src/components/menu-lateral/MenuLateral.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var menu_lateral_MenuLateralvue_type_script_setup_true_lang_js_ = (MenuLateralvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/components/menu-lateral/MenuLateral.vue





/* normalize component */
;
var MenuLateral_component = normalizeComponent(
  menu_lateral_MenuLateralvue_type_script_setup_true_lang_js_,
  MenuLateralvue_type_template_id_7b6a071d_render,
  MenuLateralvue_type_template_id_7b6a071d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MenuLateral = (MenuLateral_component.exports);
;// CONCATENATED MODULE: ./src/components/menu-lateral/index.js

const menu_lateral_plugin = {
  install: function (Vue) {
    Vue.component('MenuLateral', MenuLateral);
  }
};
/* harmony default export */ var menu_lateral = (menu_lateral_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b6487c7-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/navegacion-principal/NavegacionPrincipal.vue?vue&type=template&id=ac94e6b8&
var NavegacionPrincipalvue_type_template_id_ac94e6b8_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('nav', {
    staticClass: "navegacion navegacion-conacyt",
    class: {
      'navegacion-pegada': _vm.fija
    }
  }, [_c('div', {
    staticClass: "nav-contenedor-identidad"
  }, [_vm._t("identidad", function () {
    return [_vm._m(0)];
  }), _c('button', {
    staticClass: "nav-boton-menu",
    class: {
      abierto: _setup.menuEstaAbierto
    },
    on: {
      "click": _setup.alternarMenu
    }
  }, [_c('span', {
    staticClass: "nav-icono-menu"
  })]), _c('div', {
    staticClass: "nav-informacion",
    domProps: {
      "innerHTML": _vm._s(_vm.navInformacion)
    }
  })], 2), _c('div', {
    staticClass: "nav-menu-contedor",
    class: {
      abierto: _setup.menuEstaAbierto
    }
  }, [_c('div', {
    ref: "cuadroElementosMenu",
    staticClass: "nav-menu-principal",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": _setup.alternarMenu
    }
  }, [_vm._t("default", function () {
    return [_vm._m(1)];
  })], 2)])]);
};
var NavegacionPrincipalvue_type_template_id_ac94e6b8_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('a', {
    staticClass: "nav-hiperviculo-logo",
    attrs: {
      "href": "https://conacyt.mx/",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "nav-logo",
    attrs: {
      "width": "130",
      "height": "38",
      "src": "https://cdn.conacyt.mx/sisdai-archivos/conacyt-azul.svg",
      "alt": "Conacyt."
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('ul', {
    staticClass: "nav-menu"
  }, [_c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "/"
    }
  }, [_vm._v("Inicio")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "/acerca-de"
    }
  }, [_vm._v("Acerca de")])])]);
}];

;// CONCATENATED MODULE: ./src/components/navegacion-principal/NavegacionPrincipal.vue?vue&type=template&id=ac94e6b8&

;// CONCATENATED MODULE: ./src/composables/useMenuDesenfocable.js


/**
 * @typedef { import("vue").Ref } Ref
 */

/**
 * @typedef {Object} UseMenuDesenfocableObject
 * @property {Ref<boolean>} menuEstaAbierto  Indica el estado del menu si esta abierto o no
 * @property {function} abrirMenu  pone `menuEstaAbierto = true`
 * @property {function} cerrarMenu  pone `menuEstaAbierto = false`
 * @property {function} alternarMenu  pone `menuEstaAbierto =  !menuEstaAbierto`
 */

/**
 *  Composable que maneja el estado de *abierto-cerrado* de un menu (en los menus colapsables), adicionalmente
 *  administra los eventos *focus-blur* para cerrar el menu automaticamente al momento de que el menu pierda el foco
 *
 * @param {Ref<HTMLElement>} elementoMenuEnfocable Referecia del elemento html que contiene los
 * elementos del menu colapsable `ref<HTMLElement>`. Debe ser enfocable, si es un div o algun elemento que no
 * tenga focus por si mismo, debe agregarse el atributo [tab-index](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
 *
 * @returns {UseMenuDesenfocableObject} Metodos y propiedades del composable
 * - `menuEstaAbierto: ref<boolean>`
 * - `abrirMenu: function`
 * - `cerrarMenu: function`
 * - `alternarMenu: function`
 */
function useMenuDesenfocable(elementoMenuEnfocable) {
  const menuEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
  function updateBlur() {
    //revisar que no tengo foco ningun elemento hijo

    if (menuEstaAbierto.value) {
      setTimeout(() => {
        if (elementoMenuEnfocable.value && !elementoMenuEnfocable.value.contains(document.activeElement)) {
          menuEstaAbierto.value = false;
        }
      }, 200);
    }
  }
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
    if (elementoMenuEnfocable.value) elementoMenuEnfocable.value.addEventListener('blur', updateBlur);
  });
  function abrirMenu() {
    menuEstaAbierto.value = true;
  }
  function cerrarMenu() {
    menuEstaAbierto.value = false;
  }
  function alternarMenu() {
    menuEstaAbierto.value = !menuEstaAbierto.value;
  }
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(menuEstaAbierto, menuEstaAbierto => {
    if (menuEstaAbierto) {
      elementoMenuEnfocable.value.focus();
    }
  });
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
    if (elementoMenuEnfocable.value) elementoMenuEnfocable.value.removeEventListener('blur', updateBlur);
  });
  return {
    menuEstaAbierto,
    abrirMenu,
    cerrarMenu,
    alternarMenu
  };
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/navegacion-principal/NavegacionPrincipal.vue?vue&type=script&setup=true&lang=js&


/* harmony default export */ var NavegacionPrincipalvue_type_script_setup_true_lang_js_ = ({
  __name: 'NavegacionPrincipal',
  props: {
    navInformacion: {
      default: '',
      type: String
    },
    fija: {
      default: true,
      type: Boolean
    }
  },
  setup(__props) {
    //Que el menu se pueda cerrar automaticamente al enfocar otra cosa
    const cuadroElementosMenu = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    const {
      menuEstaAbierto,
      alternarMenu
    } = useMenuDesenfocable(cuadroElementosMenu);
    return {
      __sfc: true,
      cuadroElementosMenu,
      menuEstaAbierto,
      alternarMenu
    };
  }
});
;// CONCATENATED MODULE: ./src/components/navegacion-principal/NavegacionPrincipal.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var navegacion_principal_NavegacionPrincipalvue_type_script_setup_true_lang_js_ = (NavegacionPrincipalvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/components/navegacion-principal/NavegacionPrincipal.vue





/* normalize component */
;
var NavegacionPrincipal_component = normalizeComponent(
  navegacion_principal_NavegacionPrincipalvue_type_script_setup_true_lang_js_,
  NavegacionPrincipalvue_type_template_id_ac94e6b8_render,
  NavegacionPrincipalvue_type_template_id_ac94e6b8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavegacionPrincipal = (NavegacionPrincipal_component.exports);
;// CONCATENATED MODULE: ./src/components/navegacion-principal/index.js

const navegacion_principal_plugin = {
  install: function (Vue) {
    Vue.component('NavegacionPrincipal', NavegacionPrincipal);
  }
};
/* harmony default export */ var navegacion_principal = (navegacion_principal_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b6487c7-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/navegacion-gob-mx/NavegacionGobMx.vue?vue&type=template&id=21fb4e6e&
var NavegacionGobMxvue_type_template_id_21fb4e6e_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('nav', {
    staticClass: "navegacion navegacion-gobmx"
  }, [_c('div', {
    staticClass: "nav-contenedor-identidad"
  }, [_vm._m(0), _c('button', {
    staticClass: "nav-boton-menu",
    class: {
      abierto: _setup.menuEstaAbierto
    },
    on: {
      "click": _setup.alternarMenu
    }
  }, [_c('span', {
    staticClass: "nav-icono-menu"
  })])]), _c('div', {
    staticClass: "nav-menu-contedor",
    class: {
      abierto: _setup.menuEstaAbierto
    }
  }, [_c('div', {
    ref: "cuadroElementosMenu",
    staticClass: "nav-menu-principal",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": _setup.alternarMenu
    }
  }, [_vm._m(1)])])]);
};
var NavegacionGobMxvue_type_template_id_21fb4e6e_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('a', {
    staticClass: "nav-hiperviculo-logo",
    attrs: {
      "href": "https://www.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('img', {
    staticClass: "nav-logo",
    attrs: {
      "width": "128",
      "height": "38",
      "src": "https://cdn.conacyt.mx/sisdai-archivos/gobmx.svg",
      "alt": "Gobierno de México."
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('ul', {
    staticClass: "nav-menu"
  }, [_c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://mivacuna.salud.gob.mx/index.php",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Registro para vacunación")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://coronavirus.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Información sobre COVID-19")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://www.gob.mx/tramites",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Trámites")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://www.gob.mx/gobierno",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Gobierno")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://www.gob.mx/busqueda",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-buscar"
  })])])]);
}];

;// CONCATENATED MODULE: ./src/components/navegacion-gob-mx/NavegacionGobMx.vue?vue&type=template&id=21fb4e6e&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/navegacion-gob-mx/NavegacionGobMx.vue?vue&type=script&setup=true&lang=js&



//Que el menu se pueda cerrar automaticamente al enfocar otra cosa

/* harmony default export */ var NavegacionGobMxvue_type_script_setup_true_lang_js_ = ({
  __name: 'NavegacionGobMx',
  setup(__props) {
    const cuadroElementosMenu = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    const {
      menuEstaAbierto,
      alternarMenu
    } = useMenuDesenfocable(cuadroElementosMenu);
    return {
      __sfc: true,
      cuadroElementosMenu,
      menuEstaAbierto,
      alternarMenu
    };
  }
});
;// CONCATENATED MODULE: ./src/components/navegacion-gob-mx/NavegacionGobMx.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var navegacion_gob_mx_NavegacionGobMxvue_type_script_setup_true_lang_js_ = (NavegacionGobMxvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/components/navegacion-gob-mx/NavegacionGobMx.vue





/* normalize component */
;
var NavegacionGobMx_component = normalizeComponent(
  navegacion_gob_mx_NavegacionGobMxvue_type_script_setup_true_lang_js_,
  NavegacionGobMxvue_type_template_id_21fb4e6e_render,
  NavegacionGobMxvue_type_template_id_21fb4e6e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavegacionGobMx = (NavegacionGobMx_component.exports);
;// CONCATENATED MODULE: ./src/components/navegacion-gob-mx/index.js

const navegacion_gob_mx_plugin = {
  install: function (Vue) {
    Vue.component('NavegacionGobMx', NavegacionGobMx);
  }
};
/* harmony default export */ var navegacion_gob_mx = (navegacion_gob_mx_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b6487c7-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/pie-pagina-gob-mx/PiePaginaGobMx.vue?vue&type=template&id=b0f1391e&
var PiePaginaGobMxvue_type_template_id_b0f1391e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var PiePaginaGobMxvue_type_template_id_b0f1391e_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "contenedor gobmx-fondo-oscuro-1 piepagina-gobmx gobmx-piepagina p-t-4 p-b-10"
  }, [_c('div', {
    staticClass: "flex flex-wrap"
  }, [_c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.conacyt.mx/sisdai-archivos/gobmx.svg",
      "alt": "Gobierno de México",
      "width": "200px",
      "height": "60px"
    }
  })]), _c('nav', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v("Enlaces")]), _c('ul', {
    staticClass: "lista-plana"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://participa.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Participa")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/publicaciones",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Publicaciones Oficiales")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "http://www.ordenjuridico.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Marco Jurídico")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://consultapublicamx.inai.org.mx/vut-web/faces/view/consultaPublica.xhtml",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Plataforma Nacional de Transparencia")])])])]), _c('nav', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v("¿Qué es gob.mx?")]), _c('p', [_c('span', [_vm._v("Es el portal único de trámites, información y participación ciudadana. ")]), _c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/que-es-gobmx",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Leer más")])]), _c('ul', {
    staticClass: "lista-plana"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://datos.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Portal de datos abiertos")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/accesibilidad",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Declaración de accesibilidad")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/aviso_de_privacidad",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Aviso de privacidad integral")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/privacidadsimplificado",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Aviso de privacidad simplificado")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/terminos",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Términos y Condiciones")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/terminos#medidas-seguridad-informacion",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Política de seguridad")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/sitemap",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Mapa de sitio")])])])]), _c('nav', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Denuncia contra servidores públicos")])]), _c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v(" Síguenos en "), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("nuestras redes sociales:")])]), _c('p', [_c('a', {
    staticClass: "hipervinculo-gobmx m-r-3",
    attrs: {
      "href": "https://www.facebook.com/gobmx",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-facebook icono-3"
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("feisbuk")])]), _c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://twitter.com/gobmx",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-twitter icono-3"
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("y tuiter.")])])])])])]);
}];

;// CONCATENATED MODULE: ./src/components/pie-pagina-gob-mx/PiePaginaGobMx.vue?vue&type=template&id=b0f1391e&

// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-54.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/pie-pagina-gob-mx/PiePaginaGobMx.vue?vue&type=style&index=0&id=b0f1391e&prod&lang=css&
var PiePaginaGobMxvue_type_style_index_0_id_b0f1391e_prod_lang_css_ = __webpack_require__(430);
;// CONCATENATED MODULE: ./src/components/pie-pagina-gob-mx/PiePaginaGobMx.vue?vue&type=style&index=0&id=b0f1391e&prod&lang=css&

;// CONCATENATED MODULE: ./src/components/pie-pagina-gob-mx/PiePaginaGobMx.vue

var script = {}
;


/* normalize component */

var PiePaginaGobMx_component = normalizeComponent(
  script,
  PiePaginaGobMxvue_type_template_id_b0f1391e_render,
  PiePaginaGobMxvue_type_template_id_b0f1391e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PiePaginaGobMx = (PiePaginaGobMx_component.exports);
;// CONCATENATED MODULE: ./src/components/pie-pagina-gob-mx/index.js

const pie_pagina_gob_mx_plugin = {
  install: function (Vue) {
    Vue.component('PiePaginaGobMx', PiePaginaGobMx);
  }
};
/* harmony default export */ var pie_pagina_gob_mx = (pie_pagina_gob_mx_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b6487c7-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/pie-pagina-conacyt/PiePaginaConacyt.vue?vue&type=template&id=31cc8ef3&
var PiePaginaConacytvue_type_template_id_31cc8ef3_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var PiePaginaConacytvue_type_template_id_31cc8ef3_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "contenedor conacyt-fondo-degradado conacyt-texto-claro-1 conacyt-piepagina p-y-4"
  }, [_c('div', {
    staticClass: "flex flex-wrap"
  }, [_c('div', {
    staticClass: "columna-8 columna-8-esc"
  }, [_c('img', {
    staticStyle: {
      "filter": "brightness(0) invert(100)"
    },
    attrs: {
      "src": "https://cdn.conacyt.mx/sisdai-archivos/conacyt-azul.svg",
      "alt": "Conacyt",
      "width": "200px",
      "height": "60px"
    }
  }), _c('p', [_vm._v("Consejo Nacional de Ciencia y Tecnología")]), _c('p', [_vm._v(" Av. Insurgentes Sur 1582, Col. Crédito Constructor,"), _c('br'), _vm._v(" Alcaldía Benito Juárez, C.P. 03940, Ciudad de México"), _c('br'), _vm._v(" Tel: (55) 5322-7700 ")]), _c('p', [_vm._v("©2021 Conacyt Derechos Reservados")])]), _c('nav', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v("Enlaces")]), _c('ul', {
    staticClass: "lista-plana"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-conacyt",
    attrs: {
      "href": "https://conacyt.mx/conacyt/directorio/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Directorio")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conacyt",
    attrs: {
      "href": "https://conacyt.mx/soporte-tecnico/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Soporte Técnico")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conacyt",
    attrs: {
      "href": "https://conacyt.mx/aviso-de-privacidad/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Política de Privacidad")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conacyt",
    attrs: {
      "href": "http://comunidad.conacyt.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Intranet Conacyt")])])])]), _c('nav', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v(" Síguenos en "), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("nuestras redes sociales:")])]), _c('p', [_c('a', {
    staticClass: "hipervinculo-conacyt m-r-3",
    attrs: {
      "href": "https://www.facebook.com/ConacytMX/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-facebook icono-3"
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("feisbuk,")])]), _c('a', {
    staticClass: "hipervinculo-conacyt m-r-3",
    attrs: {
      "href": "https://twitter.com/Conacyt_MX",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-twitter icono-3"
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("tuiter,")])]), _c('a', {
    staticClass: "hipervinculo-conacyt m-r-3",
    attrs: {
      "href": "https://www.instagram.com/conacyt_mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-instagram icono-3"
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("instagram ")])]), _c('a', {
    staticClass: "hipervinculo-conacyt",
    attrs: {
      "href": "https://www.youtube.com/channel/UClcVyko0ESwMc_6Lu1bXmIQ",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-youtube icono-3"
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("y yutub")])])])])])]);
}];

;// CONCATENATED MODULE: ./src/components/pie-pagina-conacyt/PiePaginaConacyt.vue?vue&type=template&id=31cc8ef3&

// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-54.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/pie-pagina-conacyt/PiePaginaConacyt.vue?vue&type=style&index=0&id=31cc8ef3&prod&lang=css&
var PiePaginaConacytvue_type_style_index_0_id_31cc8ef3_prod_lang_css_ = __webpack_require__(76);
;// CONCATENATED MODULE: ./src/components/pie-pagina-conacyt/PiePaginaConacyt.vue?vue&type=style&index=0&id=31cc8ef3&prod&lang=css&

;// CONCATENATED MODULE: ./src/components/pie-pagina-conacyt/PiePaginaConacyt.vue

var PiePaginaConacyt_script = {}
;


/* normalize component */

var PiePaginaConacyt_component = normalizeComponent(
  PiePaginaConacyt_script,
  PiePaginaConacytvue_type_template_id_31cc8ef3_render,
  PiePaginaConacytvue_type_template_id_31cc8ef3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PiePaginaConacyt = (PiePaginaConacyt_component.exports);
;// CONCATENATED MODULE: ./src/components/pie-pagina-conacyt/index.js

const pie_pagina_conacyt_plugin = {
  install: function (Vue) {
    Vue.component('PiePaginaConacyt', PiePaginaConacyt);
  }
};
/* harmony default export */ var pie_pagina_conacyt = (pie_pagina_conacyt_plugin);
;// CONCATENATED MODULE: ./src/components/index.js
//import NarrativaScroll from './narrativa-scroll'








;// CONCATENATED MODULE: ./src/index.js

const src_plugin = {
  install: function (Vue) {
    //Vue.use(NarrativaScroll)
    Vue.use(componente_vacio);
    Vue.use(colapsable_navegacion);
    Vue.use(menu_lateral);
    Vue.use(navegacion_principal);
    Vue.use(navegacion_gob_mx);
    Vue.use(pie_pagina_gob_mx);
    Vue.use(pie_pagina_conacyt);
  }
};
/* harmony default export */ var src_0 = (src_plugin);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});