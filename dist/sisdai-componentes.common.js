/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 99:
/***/ (function(module) {

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  // DOM helper functions

  // public
  function selectAll(selector, parent = document) {
    if (typeof selector === 'string') {
      return Array.from(parent.querySelectorAll(selector));
    } else if (selector instanceof Element) {
      return [selector];
    } else if (selector instanceof NodeList) {
      return Array.from(selector);
    } else if (selector instanceof Array) {
      return selector;
    }
    return [];
  }

  // SETUP
  function create(className) {
  	const el = document.createElement("div");
  	el.className = `scrollama__debug-step ${className}`;
  	el.style.position = "fixed";
  	el.style.left = "0";
  	el.style.width = "100%";
  	el.style.zIndex = "9999";
  	el.style.borderTop = "2px solid black";
  	el.style.borderBottom = "2px solid black";

  	const p = document.createElement("p");
  	p.style.position = "absolute";
  	p.style.left = "0";
  	p.style.height = "1px";
  	p.style.width = "100%";
  	p.style.borderTop = "1px dashed black";

  	el.appendChild(p);
  	document.body.appendChild(el);
  	return el;
  }

  // UPDATE
  function update({ id, step, marginTop }) {
  	const { index, height } = step;
  	const className = `scrollama__debug-step--${id}-${index}`;
  	let el = document.querySelector(`.${className}`);
  	if (!el) el = create(className);

  	el.style.top = `${marginTop * -1}px`;
  	el.style.height = `${height}px`;
  	el.querySelector("p").style.top = `${height / 2}px`;
  }

  function generateId() {
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const date = Date.now();
      const result = [];
      for (let i = 0; i < 6; i += 1) {
        const char = alphabet[Math.floor(Math.random() * alphabet.length)];
        result.push(char);
      }
      return `${result.join("")}${date}`;
    }

  function err$1(msg) {
  	console.error(`scrollama error: ${msg}`);
  }

  function getIndex(node) {
  	return +node.getAttribute("data-scrollama-index");
  }

  function createProgressThreshold(height, threshold) {
      const count = Math.ceil(height / threshold);
      const t = [];
      const ratio = 1 / count;
      for (let i = 0; i < count + 1; i += 1) {
        t.push(i * ratio);
      }
      return t;
    }

  function parseOffset(x) {
  	if (typeof x === "string" && x.indexOf("px") > 0) {
  		const v = +x.replace("px", "");
  		if (!isNaN(v)) return { format: "pixels", value: v };
  		else {
  			err("offset value must be in 'px' format. Fallback to 0.5.");
  			return { format: "percent", value: 0.5 };
  		}
  	} else if (typeof x === "number" || !isNaN(+x)) {
  		if (x > 1) err("offset value is greater than 1. Fallback to 1.");
  		if (x < 0) err("offset value is lower than 0. Fallback to 0.");
  		return { format: "percent", value: Math.min(Math.max(0, x), 1) };
  	}
  	return null;
  }

  function indexSteps(steps) {
  	steps.forEach((step) =>
  		step.node.setAttribute("data-scrollama-index", step.index)
  	);
  }

  function getOffsetTop(node) {
    const { top } = node.getBoundingClientRect();
    const scrollTop = window.pageYOffset;
    const clientTop = document.body.clientTop || 0;
    return top + scrollTop - clientTop;
  }

  let currentScrollY;
  let comparisonScrollY;
  let direction;

  function onScroll(container) {
  	const scrollTop = container ? container.scrollTop : window.pageYOffset;

  	if (currentScrollY === scrollTop) return;
  	currentScrollY = scrollTop;
  	if (currentScrollY > comparisonScrollY) direction = "down";
  	else if (currentScrollY < comparisonScrollY) direction = "up";
  	comparisonScrollY = currentScrollY;
  }

  function setupScroll(container) {
  	currentScrollY = 0;
  	comparisonScrollY = 0;
  	document.addEventListener("scroll", () => onScroll(container));
  }

  function scrollama() {
  	let cb = {};

  	let id = generateId();
  	let steps = [];
  	let globalOffset;
  	let containerElement;
  	let rootElement;

  	let progressThreshold = 0;

  	let isEnabled = false;
  	let isProgress = false;
  	let isDebug = false;
  	let isTriggerOnce = false;

  	let exclude = [];

  	/* HELPERS */
  	function reset() {
  		cb = {
  			stepEnter: () => { },
  			stepExit: () => { },
  			stepProgress: () => { },
  		};
  		exclude = [];
  	}

  	function handleEnable(shouldEnable) {
  		if (shouldEnable && !isEnabled) updateObservers();
  		if (!shouldEnable && isEnabled) disconnectObservers();
  		isEnabled = shouldEnable;
  	}

  	/* NOTIFY CALLBACKS */
  	function notifyProgress(element, progress) {
  		const index = getIndex(element);
  		const step = steps[index];
  		if (progress !== undefined) step.progress = progress;
  		const response = { element, index, progress, direction };
  		if (step.state === "enter") cb.stepProgress(response);
  	}

  	function notifyStepEnter(element, check = true) {
  		const index = getIndex(element);
  		const step = steps[index];
  		const response = { element, index, direction };

  		step.direction = direction;
  		step.state = "enter";

  		// if (isPreserveOrder && check && direction !== "up")
  		//   notifyOthers(index, "above");
  		// if (isPreserveOrder && check && direction === "up")
  		//   notifyOthers(index, "below");

  		if (!exclude[index]) cb.stepEnter(response);
  		if (isTriggerOnce) exclude[index] = true;
  	}

  	function notifyStepExit(element, check = true) {
  		const index = getIndex(element);
  		const step = steps[index];

  		if (!step.state) return false;

  		const response = { element, index, direction };

  		if (isProgress) {
  			if (direction === "down" && step.progress < 1) notifyProgress(element, 1);
  			else if (direction === "up" && step.progress > 0)
  				notifyProgress(element, 0);
  		}

  		step.direction = direction;
  		step.state = "exit";

  		cb.stepExit(response);
  	}

  	/* OBSERVERS - HANDLING */
  	function resizeStep([entry]) {
  		const index = getIndex(entry.target);
  		const step = steps[index];
  		const h = entry.target.offsetHeight;
  		if (h !== step.height) {
  			step.height = h;
  			disconnectObserver(step);
  			updateStepObserver(step);
  			updateResizeObserver(step);
  		}
  	}

  	function intersectStep([entry]) {
  		onScroll(containerElement);

  		const { isIntersecting, target } = entry;
  		if (isIntersecting) notifyStepEnter(target);
  		else notifyStepExit(target);
  	}

  	function intersectProgress([entry]) {
  		const index = getIndex(entry.target);
  		const step = steps[index];
  		const { isIntersecting, intersectionRatio, target } = entry;
  		if (isIntersecting && step.state === "enter")
  			notifyProgress(target, intersectionRatio);
  	}

  	/*  OBSERVERS - CREATION */
  	function disconnectObserver({ observers }) {
  		Object.keys(observers).map((name) => {
  			observers[name].disconnect();
  		});
  	}

  	function disconnectObservers() {
  		steps.forEach(disconnectObserver);
  	}

  	function updateResizeObserver(step) {
  		const observer = new ResizeObserver(resizeStep);
  		observer.observe(step.node);
  		step.observers.resize = observer;
  	}

  	function updateResizeObservers() {
  		steps.forEach(updateResizeObserver);
  	}

  	function updateStepObserver(step) {
  		const h = window.innerHeight;
  		const off = step.offset || globalOffset;
  		const factor = off.format === "pixels" ? 1 : h;
  		const offset = off.value * factor;
  		const marginTop = step.height / 2 - offset;
  		const marginBottom = step.height / 2 - (h - offset);
  		const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
  		const root = rootElement;

  		const threshold = 0.5;
  		const options = { rootMargin, threshold, root };
  		const observer = new IntersectionObserver(intersectStep, options);

  		observer.observe(step.node);
  		step.observers.step = observer;

  		if (isDebug) update({ id, step, marginTop, marginBottom });
  	}

  	function updateStepObservers() {
  		steps.forEach(updateStepObserver);
  	}

  	function updateProgressObserver(step) {
  		const h = window.innerHeight;
  		const off = step.offset || globalOffset;
  		const factor = off.format === "pixels" ? 1 : h;
  		const offset = off.value * factor;
  		const marginTop = -offset + step.height;
  		const marginBottom = offset - h;
  		const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;

  		const threshold = createProgressThreshold(step.height, progressThreshold);
  		const options = { rootMargin, threshold };
  		const observer = new IntersectionObserver(intersectProgress, options);

  		observer.observe(step.node);
  		step.observers.progress = observer;
  	}

  	function updateProgressObservers() {
  		steps.forEach(updateProgressObserver);
  	}

  	function updateObservers() {
  		disconnectObservers();
  		updateResizeObservers();
  		updateStepObservers();
  		if (isProgress) updateProgressObservers();
  	}

  	/* SETUP */
  	const S = {};

  	S.setup = ({
  		step,
  		parent,
  		offset = 0.5,
  		threshold = 4,
  		progress = false,
  		once = false,
  		debug = false,
  		container = undefined,
  		root = null
  	}) => {

  		setupScroll(container);

  		steps = selectAll(step, parent).map((node, index) => ({
  			index,
  			direction: undefined,
  			height: node.offsetHeight,
  			node,
  			observers: {},
  			offset: parseOffset(node.dataset.offset),
  			top: getOffsetTop(node),
  			progress: 0,
  			state: undefined,
  		}));

  		if (!steps.length) {
  			err$1("no step elements");
  			return S;
  		}

  		isProgress = progress;
  		isTriggerOnce = once;
  		isDebug = debug;
  		progressThreshold = Math.max(1, +threshold);
  		globalOffset = parseOffset(offset);
  		containerElement = container;
  		rootElement = root;

  		reset();
  		indexSteps(steps);
  		handleEnable(true);
  		return S;
  	};

  	S.enable = () => {
  		handleEnable(true);
  		return S;
  	};

  	S.disable = () => {
  		handleEnable(false);
  		return S;
  	};

  	S.destroy = () => {
  		handleEnable(false);
  		reset();
  		return S;
  	};

  	S.resize = () => {
  		updateObservers();
  		return S;
  	};

  	S.offset = (x) => {
  		if (x === null || x === undefined) return globalOffset.value;
  		globalOffset = parseOffset(x);
  		updateObservers();
  		return S;
  	};

  	S.onStepEnter = (f) => {
  		if (typeof f === "function") cb.stepEnter = f;
  		else err$1("onStepEnter requires a function");
  		return S;
  	};

  	S.onStepExit = (f) => {
  		if (typeof f === "function") cb.stepExit = f;
  		else err$1("onStepExit requires a function");
  		return S;
  	};

  	S.onStepProgress = (f) => {
  		if (typeof f === "function") cb.stepProgress = f;
  		else err$1("onStepProgress requires a function");
  		return S;
  	};
  	return S;
  }

  return scrollama;

})));


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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

;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45d542e8-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/NarrativaScroll.vue?vue&type=template&id=077fb80c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "contenedor narrativa-scroll",
    attrs: {
      "id": _vm.id_scroll
    }
  }, [_c('div', {
    staticClass: "fondo-narrativa"
  }, _vm._l(_vm.bullets, function (bullet, i) {
    return _c('div', {
      key: i,
      class: `contenedor-fondo fondo-${i}`
    }, [_c('picture', [_c('source', {
      attrs: {
        "srcset": bullet.imagen,
        "media": "(min-width: 769px)"
      }
    }), _c('img', {
      attrs: {
        "srcset": bullet.imagen,
        "alt": ""
      }
    })])]);
  }), 0), _c('article', _vm._l(_vm.bullets, function (bullet, i) {
    return _c('div', {
      key: i,
      class: `step step-${i}`,
      attrs: {
        "data-step": i
      }
    }, [_c('div', {
      staticClass: "bullet",
      domProps: {
        "innerHTML": _vm._s(bullet.html)
      }
    })]);
  }), 0)]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/scrollama/build/scrollama.js
var scrollama = __webpack_require__(99);
var scrollama_default = /*#__PURE__*/__webpack_require__.n(scrollama);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/NarrativaScroll.vue?vue&type=script&lang=js&

/* harmony default export */ var NarrativaScrollvue_type_script_lang_js_ = ({
  name: 'NarrativaScroll',
  props: {
    id_scroll: {
      default: () => 'scrolly-portada',
      type: String
    },
    bullets: {
      default: () => [{
        id: '01',
        html: '<p>bullet 1</p>',
        imagen: 'https://placekitten.com/1920/1080'
      }, {
        id: '02',
        html: '<p>bullet 2</p>',
        imagen: 'https://placekitten.com/1920/1082'
      }],
      type: Array
    },
    debug: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      y_scrolleado: null,
      y_scrolleado_normalizado: null
    };
  },
  mounted() {
    this.inizializandoScrollama();
  },
  methods: {
    inizializandoScrollama() {
      this.scrolly = document.querySelector('#' + this.id_scroll);
      this.fondo_portada = this.scrolly.querySelector('div.fondo-narrativa');
      this.step = this.scrolly.querySelector('article').querySelectorAll('.step');
      this.scroller = scrollama_default()();
      this.scroller.setup({
        step: `#${this.id_scroll} .step`,
        offset: 0.5,
        debug: this.debug
      }).onStepEnter(this.cambiandoPaso);
      this.reescalandoPantalla();
      window.addEventListener('resize', this.reescalandoPantalla);
      window.addEventListener('scroll', this.calculandoDistanciaScrolleada);
    },
    reescalandoPantalla() {
      this.scroller.resize();
    },
    cambiandoPaso(response) {
      this.paso = response.index;
      this.step.forEach((d, i) => i === response.index ? d.classList.add('activo') : d.classList.remove('activo'));
      this.fondo_portada.querySelectorAll(`.contenedor-fondo`).forEach(d => d.style.opacity = 0);
      console.log(this.fondo_portada);
      for (var i = 0; i < this.bullets.length; i++) {
        if (this.paso === i) {
          this.fondo_portada.querySelector(`.contenedor-fondo.fondo-${this.paso}`).style.opacity = 1;

          //d3.select("div#fondo-narrativa").transition().duration(200).style("background-color","#8a8a8a")
        }
      }
    },

    calculandoDistanciaScrolleada() {
      var posicion_y_scrolly = this.scrolly.offsetTop;
      if (posicion_y_scrolly < window.pageYOffset) {
        this.y_scrolleado = window.pageYOffset - posicion_y_scrolly;
        this.y_scrolleado_normalizado = this.y_scrolleado / this.scrolly.clientHeight;
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/NarrativaScroll.vue?vue&type=script&lang=js&
 /* harmony default export */ var narrativa_scroll_NarrativaScrollvue_type_script_lang_js_ = (NarrativaScrollvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/NarrativaScroll.vue?vue&type=style&index=0&id=077fb80c&prod&scoped=true&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/NarrativaScroll.vue?vue&type=style&index=0&id=077fb80c&prod&scoped=true&lang=scss&

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

;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/NarrativaScroll.vue



;


/* normalize component */

var component = normalizeComponent(
  narrativa_scroll_NarrativaScrollvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "077fb80c",
  null
  
)

/* harmony default export */ var NarrativaScroll = (component.exports);
;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/index.js

const narrativa_scroll_plugin = {
  install: function (Vue) {
    Vue.component('NarrativaScroll', NarrativaScroll);
  }
};
/* harmony default export */ var narrativa_scroll = (narrativa_scroll_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45d542e8-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/colapsable-navegacion/ColapsableNavegacion.vue?vue&type=template&id=54bbbd9d&
var ColapsableNavegacionvue_type_template_id_54bbbd9d_render = function render() {
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
var ColapsableNavegacionvue_type_template_id_54bbbd9d_staticRenderFns = [function () {
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

;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/ColapsableNavegacion.vue?vue&type=template&id=54bbbd9d&

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/colapsable-navegacion/ColapsableNavegacion.vue?vue&type=script&setup=true&lang=js&

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
    const esta_activo = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(props.activo);
    return {
      __sfc: true,
      props,
      esta_activo
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/ColapsableNavegacion.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var colapsable_navegacion_ColapsableNavegacionvue_type_script_setup_true_lang_js_ = (ColapsableNavegacionvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/ColapsableNavegacion.vue





/* normalize component */
;
var ColapsableNavegacion_component = normalizeComponent(
  colapsable_navegacion_ColapsableNavegacionvue_type_script_setup_true_lang_js_,
  ColapsableNavegacionvue_type_template_id_54bbbd9d_render,
  ColapsableNavegacionvue_type_template_id_54bbbd9d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ColapsableNavegacion = (ColapsableNavegacion_component.exports);
;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/index.js

const colapsable_navegacion_plugin = {
  install: function (Vue) {
    Vue.component('ColapsableNavegacion', ColapsableNavegacion);
  }
};
/* harmony default export */ var colapsable_navegacion = (colapsable_navegacion_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45d542e8-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-lateral/MenuLateral.vue?vue&type=template&id=0408ddca&
var MenuLateralvue_type_template_id_0408ddca_render = function render() {
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
var MenuLateralvue_type_template_id_0408ddca_staticRenderFns = [function () {
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

;// CONCATENATED MODULE: ./src/componentes/menu-lateral/MenuLateral.vue?vue&type=template&id=0408ddca&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-lateral/MenuLateral.vue?vue&type=script&setup=true&lang=js&

/* harmony default export */ var MenuLateralvue_type_script_setup_true_lang_js_ = ({
  __name: 'MenuLateral',
  setup(__props) {
    const menu_abierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false);
    return {
      __sfc: true,
      menu_abierto
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/menu-lateral/MenuLateral.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var menu_lateral_MenuLateralvue_type_script_setup_true_lang_js_ = (MenuLateralvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/componentes/menu-lateral/MenuLateral.vue





/* normalize component */
;
var MenuLateral_component = normalizeComponent(
  menu_lateral_MenuLateralvue_type_script_setup_true_lang_js_,
  MenuLateralvue_type_template_id_0408ddca_render,
  MenuLateralvue_type_template_id_0408ddca_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MenuLateral = (MenuLateral_component.exports);
;// CONCATENATED MODULE: ./src/componentes/menu-lateral/index.js

const menu_lateral_plugin = {
  install: function (Vue) {
    Vue.component('MenuLateral', MenuLateral);
  }
};
/* harmony default export */ var menu_lateral = (menu_lateral_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45d542e8-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-accesibilidad/MenuAccesibilidad.vue?vue&type=template&id=7cfb6fe1&
var MenuAccesibilidadvue_type_template_id_7cfb6fe1_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "contenedor-accesibilidad",
    class: {
      abierto: _setup.menuAccesibilidadEstaAbierto
    }
  }, [_c('button', {
    staticClass: "icono-boton-accesibilidad",
    on: {
      "click": _setup.alternarMenuAccesibilidadAbierto
    }
  }, [_c('span', {
    staticClass: "icono-accesibilidad icono-5"
  })]), _c('menu', {
    staticClass: "menu-accesibilidad"
  }, [_c('h6', {
    staticClass: "titulo"
  }, [_vm._v("Herramientas de accesibilidad")]), _vm._l(_setup.opciones, function (opcion, idx) {
    return _c('button', {
      key: `opcion-accesibilidad-${idx}`,
      staticClass: "opcion-accesibilidad",
      on: {
        "click": function ($event) {
          return _setup.seleccionarOpcion(opcion);
        }
      }
    }, [_c('span', {
      staticClass: "icono-4",
      class: opcion.icono
    }), _vm._v(" " + _vm._s(opcion.titulo) + " ")]);
  }), _c('button', {
    staticClass: "opcion-accesibilidad",
    on: {
      "click": _setup.restablecer
    }
  }, [_c('span', {
    staticClass: "icono-4 icono-restablecer"
  }), _vm._v(" Restablecer ")])], 2)]);
};
var MenuAccesibilidadvue_type_template_id_7cfb6fe1_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/opcionesDefault.js
/**
 * Lista de opciones por defecto del Menú de accesibilidad, cada opción debe ser un objeto
 * con los siguientes atributos:
 * - accion {`String`}: Nombre de la acción al dar click en la opción.
 * - claseCss: {`String`}: Nombre de la clase css de la opción.
 * - icono {`String`}: Visible a un costado del titulo.
 * - titulo {`String`}: Visible en la lista del menú abierto.
 * @type Array
 */
/* harmony default export */ var opcionesDefault = ([{
  accion: 'alternarTipografiaAccesible',
  claseCss: 'a11y-tipografia',
  icono: 'icono-cambio-tipografia',
  titulo: 'Tipografía accesible'
}, {
  accion: 'alternarVistaSimplificada',
  claseCss: 'a11y-simplificada',
  icono: 'icono-vista-simplificada',
  titulo: 'Vista simplificada'
}, {
  accion: 'alternarEnlacesSubrayados',
  claseCss: 'a11y-hipervinculos',
  icono: 'icono-enlace-subrayado',
  titulo: 'Enlaces subrayados'
}]);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-accesibilidad/MenuAccesibilidad.vue?vue&type=script&setup=true&lang=js&


const propiedades = {
  /**
   * Lista de opciones que se agregará al Menú de accesibilidad, cada opción debe ser un objeto
   * con los siguientes atributos:
   * - accion {`String`}: Nombre de la acción al dar click en la opción.
   * - claseCss: {`String`}: Nombre de la clase css de la opción.
   * - icono {`String`}: Visible a un costado del titulo.
   * - titulo {`String`}: Visible en la lista del menú abierto.
   */
  agregarOpciones: {
    type: Array,
    default: () => []
  }
};
const eventos = {
  /**
   * Se ejecuta al dar click en una opción del munú de accesibilidad.
   * @param {Object} opcion Objeto que contiene los atributos de la opción seleccionada al dar
   * click.
   */
  alSeleccionarOpcion: 'alSeleccionarOpcion',
  /**
   * Se ejecuta cuanso se ha dado click en el botón "Restablecer".
   */
  restablecer: 'restablecer'
};
/* harmony default export */ var MenuAccesibilidadvue_type_script_setup_true_lang_js_ = ({
  __name: 'MenuAccesibilidad',
  props: propiedades,
  emits: Object.values(eventos),
  setup(__props, {
    expose,
    emit: emits
  }) {
    const props = __props;
    const {
      agregarOpciones
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toRefs)(props);

    /**
     * Opciones que se mostrarán en el menú de accesibilidad.
     */
    const opciones = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => [...opcionesDefault, ...agregarOpciones.value]);

    /**
     * Indica si el Menú de accesibilidad está abierto.
     * - Abierto: `true`
     * - Cerrado: `false`
     * @type Boolean
     */
    const menuAccesibilidadEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false);

    /**
     * Desencadena el emit 'alSeleccionarOpcion' al mismo tiempo que cierra el menú.
     * @param {Object} Opcion seleccionada.
     */
    function seleccionarOpcion(opcion) {
      emits(eventos.alSeleccionarOpcion, opcion);
      menuAccesibilidadEstaAbierto.value = false;
    }

    /**
     *
     */
    function restablecer() {
      emits(eventos.restablecer);
      menuAccesibilidadEstaAbierto.value = false;
    }

    /**
     * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
     * Menú de accesibilidad.
     */
    function alternarMenuAccesibilidadAbierto() {
      menuAccesibilidadEstaAbierto.value = !menuAccesibilidadEstaAbierto.value;
    }
    expose({
      alternarMenuAccesibilidadAbierto
    });
    return {
      __sfc: true,
      propiedades,
      eventos,
      props,
      emits,
      agregarOpciones,
      opciones,
      menuAccesibilidadEstaAbierto,
      seleccionarOpcion,
      restablecer,
      alternarMenuAccesibilidadAbierto
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/MenuAccesibilidad.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var menu_accesibilidad_MenuAccesibilidadvue_type_script_setup_true_lang_js_ = (MenuAccesibilidadvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/MenuAccesibilidad.vue





/* normalize component */
;
var MenuAccesibilidad_component = normalizeComponent(
  menu_accesibilidad_MenuAccesibilidadvue_type_script_setup_true_lang_js_,
  MenuAccesibilidadvue_type_template_id_7cfb6fe1_render,
  MenuAccesibilidadvue_type_template_id_7cfb6fe1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MenuAccesibilidad = (MenuAccesibilidad_component.exports);
;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/index.js

const menu_accesibilidad_plugin = {
  install: function (Vue) {
    Vue.component('MenuAccesibilidad', MenuAccesibilidad);
  }
};
/* harmony default export */ var menu_accesibilidad = (menu_accesibilidad_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45d542e8-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-principal/NavegacionPrincipal.vue?vue&type=template&id=9076fa5e&
var NavegacionPrincipalvue_type_template_id_9076fa5e_render = function render() {
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
var NavegacionPrincipalvue_type_template_id_9076fa5e_staticRenderFns = [function () {
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

;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/NavegacionPrincipal.vue?vue&type=template&id=9076fa5e&

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
  const menuEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false);
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
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
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
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.watch)(menuEstaAbierto, menuEstaAbierto => {
    if (menuEstaAbierto) {
      elementoMenuEnfocable.value.focus();
    }
  });
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onUnmounted)(() => {
    if (elementoMenuEnfocable.value) elementoMenuEnfocable.value.removeEventListener('blur', updateBlur);
  });
  return {
    menuEstaAbierto,
    abrirMenu,
    cerrarMenu,
    alternarMenu
  };
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-principal/NavegacionPrincipal.vue?vue&type=script&setup=true&lang=js&


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
    const cuadroElementosMenu = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(null);
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
;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/NavegacionPrincipal.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var navegacion_principal_NavegacionPrincipalvue_type_script_setup_true_lang_js_ = (NavegacionPrincipalvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/NavegacionPrincipal.vue





/* normalize component */
;
var NavegacionPrincipal_component = normalizeComponent(
  navegacion_principal_NavegacionPrincipalvue_type_script_setup_true_lang_js_,
  NavegacionPrincipalvue_type_template_id_9076fa5e_render,
  NavegacionPrincipalvue_type_template_id_9076fa5e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavegacionPrincipal = (NavegacionPrincipal_component.exports);
;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/index.js

const navegacion_principal_plugin = {
  install: function (Vue) {
    Vue.component('NavegacionPrincipal', NavegacionPrincipal);
  }
};
/* harmony default export */ var navegacion_principal = (navegacion_principal_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45d542e8-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/indice-de-contenido/IndiceDeContenido.vue?vue&type=template&id=65ff72cf&
var IndiceDeContenidovue_type_template_id_65ff72cf_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "indice-de-contenido",
    attrs: {
      "id": _vm.id_indice
    }
  }, [_c('p', {
    staticClass: "titulo-indice"
  }, [_vm._v(_vm._s(_vm.titulo))]), _c('nav', [_c('div', {
    staticClass: "contenedor-indice-de-contenido"
  }, [_vm._t("contenido-indice-de-contenido", function () {
    return [_c('router-link', {
      attrs: {
        "to": "#routerlink"
      }
    }, [_vm._v(" router link prueba ")]), _c('a', {
      attrs: {
        "href": "#anchore"
      }
    }, [_vm._v(" anchore link prueba ")])];
  })], 2)])]);
};
var IndiceDeContenidovue_type_template_id_65ff72cf_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/indice-de-contenido/IndiceDeContenido.vue?vue&type=script&setup=true&lang=js&

/* harmony default export */ var IndiceDeContenidovue_type_script_setup_true_lang_js_ = ({
  __name: 'IndiceDeContenido',
  props: {
    titulo: {
      type: String,
      default: 'Contenido'
    },
    altura: {
      type: Number,
      default: 50
    },
    id_indice: {
      type: String,
      defaul: 'id-del-indice-de-contenido'
    }
  },
  setup(__props) {
    const props = __props;
    const lista_elementos = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)([]);
    const seccion_visible = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)();

    /**
     * Esta funcion selecciona todos los ementos a, extrae de los href
     * el último elemento al separar por el caracter '#', es decir
     * los id
     */

    const obtenerRutas = () => {
      lista_elementos.value = [...document.querySelectorAll(`div#${props.id_indice}.indice-de-contenido a`)].map(d => {
        return {
          id: d.href.split('#').slice(-1).pop()
        };
      });
    };

    /**
     * Esta funcion detecta la posición escroleada de la navegación y calcula cual es
     * la sección activa
     */
    function scroleando() {
      lista_elementos.value.forEach(d => {
        if (document.getElementById(d.id)) {
          d.elemento = document.getElementById(d.id);
          d.y_min = d.elemento.offsetTop;
          d.y_max = d.elemento.offsetTop + d.elemento.offsetHeight;
        } else {
          console.warn('Los href que introdujiste en el slot "contenido-indice-de-contenido" no hacen referencia a ningún id de esta vista');
        }
      });
      let posicion_scroll_y = window.pageYOffset + 100;
      lista_elementos.value.map(d => {
        if (d.y_min + props.altura <= posicion_scroll_y && posicion_scroll_y <= d.y_max + props.altura) {
          seccion_visible.value = d.id;
        }
      });
    }

    /**
     * Caracteristicas del autoscroll suave al clickear un link
     */

    function autoScrollSuave() {
      document.querySelectorAll(`div#${props.id_indice}.indice-de-contenido a`).forEach(anchor => {
        anchor.addEventListener('click', e => {
          seccion_visible.value = anchor.href.split('#').slice(-1).pop();
          e.preventDefault();
          window.scrollTo({
            top: document.querySelector('#' + seccion_visible.value).offsetTop - props.altura,
            behavior: 'smooth'
          });
        });
      });
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.watch)(seccion_visible, () => {
      document.querySelectorAll(`div#${props.id_indice}.indice-de-contenido a`).forEach(d => {
        if (d.href.split('#').slice(-1).pop() === seccion_visible.value) {
          d.classList.add('link-activo');
        } else {
          d.classList.remove('link-activo');
          d.classList.remove('router-link-exact-active');
        }
      });
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
      obtenerRutas();
      autoScrollSuave();
      window.addEventListener('scroll', scroleando);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onUnmounted)(() => {
      window.removeEventListener('scroll', scroleando);
    });
    return {
      __sfc: true,
      lista_elementos,
      seccion_visible,
      props,
      obtenerRutas,
      scroleando,
      autoScrollSuave
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/indice-de-contenido/IndiceDeContenido.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var indice_de_contenido_IndiceDeContenidovue_type_script_setup_true_lang_js_ = (IndiceDeContenidovue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/componentes/indice-de-contenido/IndiceDeContenido.vue





/* normalize component */
;
var IndiceDeContenido_component = normalizeComponent(
  indice_de_contenido_IndiceDeContenidovue_type_script_setup_true_lang_js_,
  IndiceDeContenidovue_type_template_id_65ff72cf_render,
  IndiceDeContenidovue_type_template_id_65ff72cf_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IndiceDeContenido = (IndiceDeContenido_component.exports);
;// CONCATENATED MODULE: ./src/componentes/indice-de-contenido/index.js

const indice_de_contenido_plugin = {
  install: function (Vue) {
    Vue.component('IndiceDeContenido', IndiceDeContenido);
  }
};
/* harmony default export */ var indice_de_contenido = (indice_de_contenido_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45d542e8-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-gob-mx/NavegacionGobMx.vue?vue&type=template&id=cf8afe94&
var NavegacionGobMxvue_type_template_id_cf8afe94_render = function render() {
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
var NavegacionGobMxvue_type_template_id_cf8afe94_staticRenderFns = [function () {
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

;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/NavegacionGobMx.vue?vue&type=template&id=cf8afe94&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-gob-mx/NavegacionGobMx.vue?vue&type=script&setup=true&lang=js&



//Que el menu se pueda cerrar automaticamente al enfocar otra cosa

/* harmony default export */ var NavegacionGobMxvue_type_script_setup_true_lang_js_ = ({
  __name: 'NavegacionGobMx',
  setup(__props) {
    const cuadroElementosMenu = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(null);
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
;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/NavegacionGobMx.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var navegacion_gob_mx_NavegacionGobMxvue_type_script_setup_true_lang_js_ = (NavegacionGobMxvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/NavegacionGobMx.vue





/* normalize component */
;
var NavegacionGobMx_component = normalizeComponent(
  navegacion_gob_mx_NavegacionGobMxvue_type_script_setup_true_lang_js_,
  NavegacionGobMxvue_type_template_id_cf8afe94_render,
  NavegacionGobMxvue_type_template_id_cf8afe94_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavegacionGobMx = (NavegacionGobMx_component.exports);
;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/index.js

const navegacion_gob_mx_plugin = {
  install: function (Vue) {
    Vue.component('NavegacionGobMx', NavegacionGobMx);
  }
};
/* harmony default export */ var navegacion_gob_mx = (navegacion_gob_mx_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45d542e8-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-gob-mx/PiePaginaGobMx.vue?vue&type=template&id=c725a038&
var PiePaginaGobMxvue_type_template_id_c725a038_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var PiePaginaGobMxvue_type_template_id_c725a038_staticRenderFns = [function () {
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

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/PiePaginaGobMx.vue?vue&type=template&id=c725a038&

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-gob-mx/PiePaginaGobMx.vue?vue&type=style&index=0&id=c725a038&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/PiePaginaGobMx.vue?vue&type=style&index=0&id=c725a038&prod&lang=css&

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/PiePaginaGobMx.vue

var script = {}
;


/* normalize component */

var PiePaginaGobMx_component = normalizeComponent(
  script,
  PiePaginaGobMxvue_type_template_id_c725a038_render,
  PiePaginaGobMxvue_type_template_id_c725a038_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PiePaginaGobMx = (PiePaginaGobMx_component.exports);
;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/index.js

const pie_pagina_gob_mx_plugin = {
  install: function (Vue) {
    Vue.component('PiePaginaGobMx', PiePaginaGobMx);
  }
};
/* harmony default export */ var pie_pagina_gob_mx = (pie_pagina_gob_mx_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45d542e8-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-conacyt/PiePaginaConacyt.vue?vue&type=template&id=06d541b4&
var PiePaginaConacytvue_type_template_id_06d541b4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var PiePaginaConacytvue_type_template_id_06d541b4_staticRenderFns = [function () {
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

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conacyt/PiePaginaConacyt.vue?vue&type=template&id=06d541b4&

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-conacyt/PiePaginaConacyt.vue?vue&type=style&index=0&id=06d541b4&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conacyt/PiePaginaConacyt.vue?vue&type=style&index=0&id=06d541b4&prod&lang=css&

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conacyt/PiePaginaConacyt.vue

var PiePaginaConacyt_script = {}
;


/* normalize component */

var PiePaginaConacyt_component = normalizeComponent(
  PiePaginaConacyt_script,
  PiePaginaConacytvue_type_template_id_06d541b4_render,
  PiePaginaConacytvue_type_template_id_06d541b4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PiePaginaConacyt = (PiePaginaConacyt_component.exports);
;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conacyt/index.js

const pie_pagina_conacyt_plugin = {
  install: function (Vue) {
    Vue.component('PiePaginaConacyt', PiePaginaConacyt);
  }
};
/* harmony default export */ var pie_pagina_conacyt = (pie_pagina_conacyt_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45d542e8-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/info-de-despliegue/InfoDeDespliegue.vue?vue&type=template&id=0e12395d&
var InfoDeDesplieguevue_type_template_id_0e12395d_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.entornoProyecto !== 'production' ? _c('div', {
    attrs: {
      "id": "info_despliegue"
    }
  }, [_c('dl', {
    staticClass: "info-entorno"
  }, [_c('dt', [_vm._v("V")]), _c('dd', [_vm._v(_vm._s(_vm.versionProyecto))]), _c('dt', [_vm._v("Ambiente:")]), _c('dd', [_vm._v(_vm._s(_vm.entornoProyecto))]), _c('dt', [_vm._v("Actualización:")]), _c('dd', [_vm._v(_vm._s(_vm.actualizacionProyecto))])])]) : _vm._e();
};
var InfoDeDesplieguevue_type_template_id_0e12395d_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/info-de-despliegue/InfoDeDespliegue.vue?vue&type=script&setup=true&lang=js&
/* harmony default export */ var InfoDeDesplieguevue_type_script_setup_true_lang_js_ = ({
  __name: 'InfoDeDespliegue',
  props: {
    versionProyecto: {
      type: String,
      required: true
    },
    entornoProyecto: {
      type: String,
      required: true
    },
    actualizacionProyecto: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return {
      __sfc: true
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/InfoDeDespliegue.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var info_de_despliegue_InfoDeDesplieguevue_type_script_setup_true_lang_js_ = (InfoDeDesplieguevue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/info-de-despliegue/InfoDeDespliegue.vue?vue&type=style&index=0&id=0e12395d&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/InfoDeDespliegue.vue?vue&type=style&index=0&id=0e12395d&prod&lang=css&

;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/InfoDeDespliegue.vue



;


/* normalize component */

var InfoDeDespliegue_component = normalizeComponent(
  info_de_despliegue_InfoDeDesplieguevue_type_script_setup_true_lang_js_,
  InfoDeDesplieguevue_type_template_id_0e12395d_render,
  InfoDeDesplieguevue_type_template_id_0e12395d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InfoDeDespliegue = (InfoDeDespliegue_component.exports);
;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/index.js

const info_de_despliegue_plugin = {
  install: function (Vue) {
    Vue.component('InfoDeDespliegue', InfoDeDespliegue);
  }
};
/* harmony default export */ var info_de_despliegue = (info_de_despliegue_plugin);
;// CONCATENATED MODULE: ./src/componentes/index.js











;// CONCATENATED MODULE: external "@popperjs/core"
var core_namespaceObject = require("@popperjs/core");
;// CONCATENATED MODULE: ./src/directivas/tooltips/GloboInformacion.js

const GLOBAL_NAME = '__VTOOLTIP__';
globalThis[GLOBAL_NAME] = globalThis[GLOBAL_NAME] || {};
const globo_informacion = {
  name: 'globo-informacion',
  bind(el, binding) {
    const unique_id = Math.random().toString(36).substring(4);
    el.setAttribute('host-tooltip-id', unique_id);
    const modifiers = binding.modifiers;
    const interactable = modifiers['interactivo'] ? true : false;
    const placement_es = binding.arg ? binding.arg : 'derecha';
    const placement = getPosicionParaPopper(placement_es);
    let offset = offsetsBase[placement.split('-')[0]];
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset;
    }
    globalThis[GLOBAL_NAME][unique_id] = {
      placement: placement,
      offset: offset,
      value: binding.value,
      mouseEnterListener: addMouseEnterListenerTooltip(el, unique_id),
      mouseLeaveListener: addMouseLeaveListenerTooltip(el, unique_id),
      classTooltip: 'contenedor-globo-info',
      interactable: interactable
    };
  },
  update(el, binding) {
    let unique_id = el.getAttribute('host-tooltip-id');

    //volviendo a leer lo que haya cambiado del binding
    const placement_es = binding.arg ? binding.arg : 'derecha';
    const placement = getPosicionParaPopper(placement_es);
    let offset = offsetsBase[placement.split('-')[0]];
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset;
    }
    const props = globalThis[GLOBAL_NAME][unique_id];
    props.placement = placement;
    props.offset = offset;
    props.value = binding.value;
    updateTooltipElement(unique_id, props.value);
  },
  unbind(el) {
    let unique_id = el.getAttribute('host-tooltip-id');
    const props = globalThis[GLOBAL_NAME][unique_id];
    el.removeEventListener('mouseenter', props.mouseEnterListener);
    el.removeEventListener('mouseleave', props.mouseLeaveListener);
  }
};
const globo_informacion_extendido = {
  name: 'globo-informacion-extendido',
  bind(el, binding) {
    const unique_id = 'info-' + Math.random().toString(36).substring(4);
    el.setAttribute('host-tooltip-id', unique_id);
    const modifiers = binding.modifiers;
    const interactable = modifiers['interactivo'] ? true : false;
    const placement_es = binding.arg ? binding.arg : 'derecha';
    const placement = getPosicionParaPopper(placement_es);
    let offset = offsetsBase[placement.split('-')[0]];
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset;
    }
    globalThis[GLOBAL_NAME][unique_id] = {
      placement: placement,
      offset: offset,
      value: binding.value,
      mouseEnterListener: addMouseEnterListenerTooltip(el, unique_id),
      mouseLeaveListener: addMouseLeaveListenerTooltip(el, unique_id),
      classTooltip: 'contenedor-globo-info-ext',
      interactable: interactable
    };
  },
  update(el, binding) {
    let unique_id = el.getAttribute('host-tooltip-id');

    //volviendo a leer lo que haya cambiado del binding
    const placement_es = binding.arg ? binding.arg : 'derecha';
    const placement = getPosicionParaPopper(placement_es);
    let offset = offsetsBase[placement.split('-')[0]];
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset;
    }
    const props = globalThis[GLOBAL_NAME][unique_id];
    props.placement = placement;
    props.offset = offset;
    props.value = binding.value;
    updateTooltipElement(unique_id, props.value);
  },
  unbind(el) {
    let unique_id = el.getAttribute('host-tooltip-id');
    const props = globalThis[GLOBAL_NAME][unique_id];
    el.removeEventListener('mouseenter', props.mouseEnterListener);
    el.removeEventListener('mouseleave', props.mouseLeaveListener);
  }
};
const addMouseEnterListenerTooltip = (el, unique_id) => {
  const fn = () => {
    const globalProps = globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][unique_id];

    //revisar que no exista un timer para limpiar el toltip, si no cancelarlo, ya que esta funcion creara otro
    if ('timerToClear' in globalProps) {
      cancelTimerToRemove(globalProps);
      return;
    }
    removeAllTooltips();
    const tooltip = getTooltipElement(unique_id, globalProps.value, globalProps.classTooltip);
    let elementToDesignate = el;
    if (typeof globalProps.value === 'object') {
      elementToDesignate = globalProps.value['asignadoAElemento'] ? document.querySelector(globalProps.value['asignadoAElemento']) : el;
    }
    (0,core_namespaceObject.createPopper)(elementToDesignate, tooltip, {
      placement: globalProps.placement,
      modifiers: [{
        name: 'offset',
        options: {
          offset: globalProps.offset
        }
      }]
    });
  };
  el.addEventListener('mouseenter', fn);
  return fn;
};
const addMouseLeaveListenerTooltip = (el, unique_id) => {
  const fn = () => {
    const globalProps = globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][unique_id];
    //const tooltip = getTooltipElement(unique_id,globalProps.value, globalProps.classTooltip)

    if (globalProps.interactable) {
      waitToRemoveTooltip(unique_id);
      const tooltip = getTooltipElement(unique_id, globalProps.value, globalProps.classTooltip);
      tooltip.addEventListener('mouseenter', () => {
        //console.log("listener invocado");
        cancelTimerToRemove(globalProps);
      });
      tooltip.addEventListener('mouseleave', () => {
        waitToRemoveTooltip(unique_id, 500);
        //removeTooltip(unique_id)
      });

      return;
    }
    removeTooltip(unique_id);
  };
  el.addEventListener('mouseleave', fn);
  return fn;
};

/**
 * Espera antes de remover un tooltip, 1 segundo de tiempo por default
 * @param {*} unique_id identificador del tooltip
 * @param {number} ms 1000 milisegundos
 */
const waitToRemoveTooltip = (unique_id, ms = 1000) => {
  const globalProps = globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][unique_id];
  cancelTimerToRemove(globalProps);
  const timer = setTimeout(() => {
    removeTooltip(unique_id);
    delete globalProps['timerToClear'];
  }, ms);
  globalProps['timerToClear'] = timer;
};
const cancelTimerToRemove = propsOfTooltip => {
  if ('timerToClear' in propsOfTooltip) {
    //console.log("cancelando el removido porque volvio a entrar")
    const timer = propsOfTooltip['timerToClear'];
    clearTimeout(timer);
    delete propsOfTooltip['timerToClear'];
    //return
  }
};

const removeTooltip = unique_id => {
  if (document.querySelector("[tooltip-id='" + unique_id + "']") !== null) {
    document.querySelector("[tooltip-id='" + unique_id + "']").remove();
  }
};
const removeAllTooltips = () => {
  const tooltips = globalThis.document.querySelectorAll('[tooltip-id]');
  tooltips.forEach(tooltip => {
    const id = tooltip.getAttribute('tooltip-id');
    const globalProps = globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][id];
    cancelTimerToRemove(globalProps);
    tooltip.remove();
  });
};

/**
 *  Create if not exists
 * @param {string} id
 * @param {object} value
 * @param {string} classTooltip
 * @returns
 */

function getTooltipElement(id, value, classTooltip) {
  if (document.querySelector("[tooltip-id='" + id + "']")) {
    return document.querySelector("[tooltip-id='" + id + "']");
  }

  //crearlo
  const tooltip = document.createElement('div');
  tooltip.setAttribute('tooltip-id', id);
  tooltip.classList.add(classTooltip);
  let contenido = typeof value === 'object' ? value['contenido'] : value;
  tooltip.innerHTML = `<div class="cuerpo-globo-info">${contenido}</div>`;
  document.body.appendChild(tooltip);
  return tooltip;
}
function updateTooltipElement(id, value) {
  //solo se actualiza si existe
  if (document.querySelector("[tooltip-id='" + id + "']")) {
    const tooltip = document.querySelector("[tooltip-id='" + id + "']");
    let contenido = typeof value === 'object' ? value['contenido'] : value;
    tooltip.innerHTML = `<div class="cuerpo">${contenido}</div>`;
  }
}
const posiciones_espanol = {
  'izquierda-inicio': 'left-start',
  izquierda: 'left',
  'izquierda-final': 'left-end',
  'derecha-inicio': 'right-start',
  derecha: 'right',
  'derecha-final': 'right-end',
  'arriba-inicio': 'top-start',
  arriba: 'top',
  'arriba-final': 'top-end',
  'abajo-inicio': 'bottom-start',
  abajo: 'bottom',
  'abajo-final': 'bottom-end',
  inicio: 'start',
  final: 'end'
};
function getPosicionParaPopper(posicion_es) {
  return posiciones_espanol[posicion_es];
}
const offsetsBase = {
  top: [0, 8],
  bottom: [0, 8],
  right: [0, 8],
  left: [0, 8]
};

;// CONCATENATED MODULE: ./src/directivas/tooltips/index.js

const tooltips_plugin = {
  install: function (Vue) {
    Vue.directive(globo_informacion.name, globo_informacion);
    Vue.directive(globo_informacion_extendido.name, globo_informacion_extendido);
  }
};
/* harmony default export */ var tooltips = (tooltips_plugin);
;// CONCATENATED MODULE: ./src/directivas/index.js


;// CONCATENATED MODULE: ./src/index.js


const src_plugin = {
  install: function (Vue) {
    Vue.use(narrativa_scroll);
    Vue.use(colapsable_navegacion);
    Vue.use(menu_lateral);
    Vue.use(menu_accesibilidad);
    Vue.use(navegacion_principal);
    Vue.use(indice_de_contenido);
    Vue.use(navegacion_gob_mx);
    Vue.use(pie_pagina_gob_mx);
    Vue.use(pie_pagina_conacyt);
    Vue.use(tooltips);
    Vue.use(info_de_despliegue);
  }
};
/* harmony default export */ var src_0 = (src_plugin);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
module.exports = __webpack_exports__["default"];
/******/ })()
;