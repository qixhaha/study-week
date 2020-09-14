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

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 路由的基础配置\r\n */\nmodule.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"hello from a\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2EuanM/YzE5OCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUlBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsR0FBVixFQUFlO0FBQzVCQSxLQUFHLENBQUNDLElBQUosR0FBVztBQUNQLGVBQVc7QUFESixHQUFYO0FBR0gsQ0FKRCIsImZpbGUiOiIuL3NyYy9hcGkvYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDot6/nlLHnmoTln7rnoYDphY3nva5cclxuICovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgIGN0eC5ib2R5ID0ge1xyXG4gICAgICAgIFwibWVzc2FnZVwiOiBcImhlbGxvIGZyb20gYVwiXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 路由的基础配置\r\n */\nmodule.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"hello from b\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2IuanM/ZGVmZCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUlBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsR0FBVixFQUFlO0FBQzVCQSxLQUFHLENBQUNDLElBQUosR0FBVztBQUNQLGVBQVc7QUFESixHQUFYO0FBR0gsQ0FKRCIsImZpbGUiOiIuL3NyYy9hcGkvYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDot6/nlLHnmoTln7rnoYDphY3nva5cclxuICovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgIGN0eC5ib2R5ID0ge1xyXG4gICAgICAgIFwibWVzc2FnZVwiOiBcImhlbGxvIGZyb20gYlwiXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/b.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_4__);\n// const Koa = require('koa')\n// import '@babel/polyfill';\n // const statics = require('koa-static')\n\n // const path = require('path')\n\n\nconst app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a(); // const router = require('./routes/routes');\n// const helmet = require('koa-helmet')\n\n\n\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_1___default()(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '..', 'public')));\napp.use(koa_helmet__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(_routes_routes__WEBPACK_IMPORTED_MODULE_3___default()());\napp.listen(4000, () => {\n  console.log('running');\n}); // 'use strict';\n// function test() {\n//     new Promise()\n// }\n// test();\n// const arr = [1, 2, 3, 4].map((item) => {\n//     return item * item;\n// })\n// console.log(arr)\n// class Apple {\n//     constructor() {\n//         this.name = Symbol('orange');\n//         this.attrs = new Map();\n//     }\n//     hello() {\n//         console.log('hello');\n//     }\n// }\n/* WEBPACK VAR INJECTION */}.call(this, \"src\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJhcHAiLCJLb2EiLCJ1c2UiLCJzdGF0aWNzIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJoZWxtZXQiLCJyb3V0ZXIiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUVBOztDQUVBOztBQUNBO0FBQ0EsTUFBTUEsR0FBRyxHQUFHLElBQUlDLDBDQUFKLEVBQVosQyxDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBRCxHQUFHLENBQUNFLEdBQUosQ0FBUUMsaURBQU8sQ0FBQ0MsMkNBQUksQ0FBQ0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLElBQXJCLEVBQTJCLFFBQTNCLENBQUQsQ0FBZjtBQUNBTixHQUFHLENBQUNFLEdBQUosQ0FBUUssaURBQU0sRUFBZDtBQUNBUCxHQUFHLENBQUNFLEdBQUosQ0FBUU0scURBQU0sRUFBZDtBQUVBUixHQUFHLENBQUNTLE1BQUosQ0FBVyxJQUFYLEVBQWlCLE1BQU07QUFDbkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDSCxDQUZELEUsQ0FJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsSSIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEtvYSA9IHJlcXVpcmUoJ2tvYScpXHJcbi8vIGltcG9ydCAnQGJhYmVsL3BvbHlmaWxsJztcclxuaW1wb3J0IEtvYSBmcm9tICdrb2EnXHJcbi8vIGNvbnN0IHN0YXRpY3MgPSByZXF1aXJlKCdrb2Etc3RhdGljJylcclxuaW1wb3J0IHN0YXRpY3MgZnJvbSAna29hLXN0YXRpYydcclxuLy8gY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5jb25zdCBhcHAgPSBuZXcgS29hKCk7XHJcblxyXG4vLyBjb25zdCByb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcy9yb3V0ZXMnKTtcclxuLy8gY29uc3QgaGVsbWV0ID0gcmVxdWlyZSgna29hLWhlbG1ldCcpXHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXMvcm91dGVzJztcclxuaW1wb3J0IGhlbG1ldCBmcm9tICdrb2EtaGVsbWV0J1xyXG5hcHAudXNlKHN0YXRpY3MocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uJywgJ3B1YmxpYycpKSlcclxuYXBwLnVzZShoZWxtZXQoKSlcclxuYXBwLnVzZShyb3V0ZXIoKSlcclxuXHJcbmFwcC5saXN0ZW4oNDAwMCwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3J1bm5pbmcnKVxyXG59KVxyXG5cclxuLy8gJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gZnVuY3Rpb24gdGVzdCgpIHtcclxuLy8gICAgIG5ldyBQcm9taXNlKClcclxuLy8gfVxyXG4vLyB0ZXN0KCk7XHJcbi8vIGNvbnN0IGFyciA9IFsxLCAyLCAzLCA0XS5tYXAoKGl0ZW0pID0+IHtcclxuLy8gICAgIHJldHVybiBpdGVtICogaXRlbTtcclxuLy8gfSlcclxuLy8gY29uc29sZS5sb2coYXJyKVxyXG5cclxuXHJcbi8vIGNsYXNzIEFwcGxlIHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKCkge1xyXG4vLyAgICAgICAgIHRoaXMubmFtZSA9IFN5bWJvbCgnb3JhbmdlJyk7XHJcbi8vICAgICAgICAgdGhpcy5hdHRycyA9IG5ldyBNYXAoKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBoZWxsbygpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcclxuLy8gICAgIH1cclxuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/aRouter.js":
/*!*******************************!*\
  !*** ./src/routes/aRouter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\n\nconst router = new Router();\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2FSb3V0ZXIuanM/OTJiYyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwiYSIsInJvdXRlciIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUF0Qjs7QUFDQSxNQUFNQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsZ0NBQUQsQ0FBakI7O0FBQ0EsTUFBTUUsTUFBTSxHQUFHLElBQUlILE1BQUosRUFBZjtBQUNBRyxNQUFNLENBQUNDLEdBQVAsQ0FBVyxJQUFYLEVBQWlCRixDQUFqQjtBQUNBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJILE1BQWpCIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9hUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyID0gcmVxdWlyZSgna29hLXJvdXRlcicpO1xyXG5jb25zdCBhID0gcmVxdWlyZSgnLi4vYXBpL2EnKTtcclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5yb3V0ZXIuZ2V0KCcvYScsIGEpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/aRouter.js\n");

/***/ }),

/***/ "./src/routes/bRouter.js":
/*!*******************************!*\
  !*** ./src/routes/bRouter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst b = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\n\nconst router = new Router();\nrouter.get('/b', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2JSb3V0ZXIuanM/MmZlNyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwiYiIsInJvdXRlciIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUF0Qjs7QUFDQSxNQUFNQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsZ0NBQUQsQ0FBakI7O0FBQ0EsTUFBTUUsTUFBTSxHQUFHLElBQUlILE1BQUosRUFBZjtBQUNBRyxNQUFNLENBQUNDLEdBQVAsQ0FBVyxJQUFYLEVBQWlCRixDQUFqQjtBQUNBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJILE1BQWpCIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9iUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyID0gcmVxdWlyZSgna29hLXJvdXRlcicpO1xyXG5jb25zdCBiID0gcmVxdWlyZSgnLi4vYXBpL2InKTtcclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5yb3V0ZXIuZ2V0KCcvYicsIGIpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/bRouter.js\n");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const combineRoutes = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n\nconst aroutes = __webpack_require__(/*! ./aRouter */ \"./src/routes/aRouter.js\");\n\nconst broutes = __webpack_require__(/*! ./bRouter */ \"./src/routes/bRouter.js\");\n\nmodule.exports = combineRoutes(aroutes, broutes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3JvdXRlcy5qcz82NDFiIl0sIm5hbWVzIjpbImNvbWJpbmVSb3V0ZXMiLCJyZXF1aXJlIiwiYXJvdXRlcyIsImJyb3V0ZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxhQUFhLEdBQUdDLG1CQUFPLENBQUMsZ0RBQUQsQ0FBN0I7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLDBDQUFELENBQXZCOztBQUNBLE1BQU1FLE9BQU8sR0FBR0YsbUJBQU8sQ0FBQywwQ0FBRCxDQUF2Qjs7QUFHQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxhQUFhLENBQzFCRSxPQUQwQixFQUUxQkMsT0FGMEIsQ0FBOUIiLCJmaWxlIjoiLi9zcmMvcm91dGVzL3JvdXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbWJpbmVSb3V0ZXMgPSByZXF1aXJlKCdrb2EtY29tYmluZS1yb3V0ZXJzJyk7XHJcbmNvbnN0IGFyb3V0ZXMgPSByZXF1aXJlKCcuL2FSb3V0ZXInKVxyXG5jb25zdCBicm91dGVzID0gcmVxdWlyZSgnLi9iUm91dGVyJylcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbWJpbmVSb3V0ZXMoXHJcbiAgICBhcm91dGVzLFxyXG4gICAgYnJvdXRlc1xyXG4pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa\n");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-combine-routers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tYmluZS1yb3V0ZXJzXCI/MmM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtY29tYmluZS1yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvbWJpbmUtcm91dGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-combine-routers\n");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtaGVsbWV0XCI/NDJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtaGVsbWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-helmet\n");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/MDM1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-router\n");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCI/OWE0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXN0YXRpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-static\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });