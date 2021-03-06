/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************************************!*\
  !*** ./010_lesson22_object_destructuring/src/main.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	//Деструктуризация (destructuring assignment) – это особый синтаксис присваивания, 
	//при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части.
	
	var options = {
	    title: "Меню",
	    width: 100,
	    height: 200
	};
	
	var title = options.title;
	var width = options.width;
	var height = options.height;
	
	
	alert(title); // Меню
	alert(width); // 100
	alert(height); // 200

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map