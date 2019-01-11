/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/BaseBlock.js":
/*!**************************!*\
  !*** ./src/BaseBlock.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { doNothingHandler } = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\r\n\r\nconst BaseBlock = id => {\r\n  const block = document.createElement(\"div\");\r\n  block.id = id;\r\n  block.classList.add(\"block\");\r\n\r\n  block.addEventListener(\"mousedown\", doNothingHandler);\r\n  block.addEventListener(\"mouseup\", doNothingHandler);\r\n  \r\n  return block;\r\n};\r\n\r\nmodule.exports = BaseBlock;\r\n\n\n//# sourceURL=webpack:///./src/BaseBlock.js?");

/***/ }),

/***/ "./src/BlockFactory.js":
/*!*****************************!*\
  !*** ./src/BlockFactory.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const BaseBlock = __webpack_require__(/*! ./BaseBlock */ \"./src/BaseBlock.js\");\r\n\r\nconst BlockFactory = () => {\r\n  return {\r\n    newBlock() {\r\n      const block = {\r\n        style: document.createElement(\"style\"),\r\n        bottomRight: [],\r\n        topLeft: []\r\n      };\r\n\r\n      const handler = {\r\n        set: function(obj, prop, value) {\r\n\r\n          switch (prop) {\r\n            case \"bottomRight\":\r\n              if (obj.topLeft.length) {\r\n                obj[prop] = value;\r\n                const [x, y] = obj.topLeft;\r\n                const [newX, newY] = value;\r\n                const [minX, maxX] = [x, newX].sort((a, b) => a - b);\r\n                const [minY, maxY] = [y, newY].sort((a, b) => a - b);\r\n                obj.left = minX;\r\n                obj.top = minY;\r\n                obj.height = maxY - minY;\r\n                obj.width = maxX - minX;\r\n              } else {\r\n                obj[prop] = value;\r\n              }\r\n              break;\r\n            \r\n            case \"topLeft\":\r\n              if (obj.bottomRight.length) {\r\n                obj[prop] = value;\r\n                const [x, y] = obj.bottomRight;\r\n                const [newX, newY] = value;\r\n                const [minX, maxX] = [x, newX].sort((a, b) => a - b);\r\n                const [minY, maxY] = [y, newY].sort((a, b) => a - b);\r\n                obj.left = minX;\r\n                obj.top = minY;\r\n                obj.height = maxY - minY;\r\n                obj.width = maxX - minX;\r\n              } else {\r\n                obj[prop] = value;\r\n              }\r\n              break;\r\n\r\n            case \"id\":\r\n              obj[\"ref\"] = BaseBlock(value);\r\n              obj[\"style\"].innerHTML = `\r\n                #${value} {\r\n                  position: absolute;\r\n                  width: ${obj.width}px;\r\n                  left: ${obj.left}px;\r\n                  background: lightblue;\r\n                  height: ${obj.height}px;\r\n                  top: ${obj.top}px;\r\n                  border: 5px solid;\r\n                }\r\n              `;\r\n              break;\r\n          }\r\n        },\r\n\r\n        get: function (obj, prop) {\r\n          return obj[prop];\r\n        }\r\n      };\r\n\r\n      return new Proxy(block, handler);\r\n    }\r\n  };\r\n};\r\n\r\nmodule.exports = BlockFactory();\r\n\n\n//# sourceURL=webpack:///./src/BlockFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const BlockFactory = __webpack_require__(/*! ./BlockFactory */ \"./src/BlockFactory.js\");\r\n\r\nconst { getId } = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\r\n\r\nconst builder = document.getElementById(\"builder\");\r\n\r\nlet block = BlockFactory.newBlock();\r\n\r\nbuilder.addEventListener(\"mousedown\", e => {\r\n  const { clientX, clientY } = e;\r\n  block.topLeft = [clientX, clientY];\r\n});\r\n\r\nbuilder.addEventListener(\"mouseup\", e => {\r\n  if (block.topLeft.length === 0) {\r\n    return;\r\n  }\r\n  const { clientX, clientY } = e;\r\n  block.bottomRight = [clientX, clientY];\r\n\r\n  const id = getId();\r\n  block.id = id;\r\n\r\n  builder.appendChild(block.ref);\r\n  builder.appendChild(block.style);\r\n\r\n  console.log(block);\r\n\r\n  block = BlockFactory.newBlock();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const doNothingHandler = e => {\r\n  e.preventDefault();\r\n  e.stopPropagation();\r\n};\r\n\r\nconst getRandom = (min, max) => {\r\n  return Math.floor(Math.random() * (max - min)) + min;\r\n};\r\n\r\nconst getLetter = () => {\r\n  const min = 65;\r\n  const max = 90;\r\n  const isLowercase = Math.random() > 0.5;\r\n  const letter = String.fromCharCode(getRandom(min, max));\r\n  return isLowercase ? letter.toLowerCase() : letter;\r\n};\r\n\r\nconst range = max => {\r\n  const arr = [];\r\n  for (let i = 0; i < max; i++) {\r\n    arr.push(i);\r\n  }\r\n  return arr;\r\n};\r\n\r\nconst getId = () => {\r\n  let id = \"\";\r\n  range(10).forEach(() => id += getLetter());\r\n  id += new Date().getMilliseconds();\r\n  return id;\r\n};\r\n\r\nmodule.exports = {\r\n  doNothingHandler,\r\n  getRandom,\r\n  getLetter,\r\n  range,\r\n  getId\r\n};\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });