"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./lib/data/index.tsx":
/*!****************************!*\
  !*** ./lib/data/index.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"(api)/./lib/data/todo.tsx\");\n\nconst Data = {\n  todo: _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBLE1BQU1DLElBQUksR0FBRztFQUFFRCxJQUFJQSwrQ0FBQUE7QUFBTixDQUFiO0FBRUEsaUVBQWVDLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL2xpYi9kYXRhL2luZGV4LnRzeD9hN2U4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG9cIjtcclxuXHJcbmNvbnN0IERhdGEgPSB7IHRvZG8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGE7XHJcbiJdLCJuYW1lcyI6WyJ0b2RvIiwiRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/data/index.tsx\n");

/***/ }),

/***/ "(api)/./lib/data/todo.tsx":
/*!***************************!*\
  !*** ./lib/data/todo.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst getList = () => {\n  const todosBuffer = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(\"data/todos.json\");\n  const todosString = todosBuffer.toString();\n\n  if (!todosString) {\n    return [];\n  }\n\n  const todos = JSON.parse(todosString);\n  return todos;\n};\n\nconst exist = ({\n  id\n}) => {\n  const todos = getList();\n  const todo = todos.some(todo => todo.id === id);\n  return todo;\n};\n\nconst write = async todos => {\n  (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(\"data/todos.json\", JSON.stringify(todos));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getList,\n  exist,\n  write\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS90b2RvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7QUFHQSxNQUFNRSxPQUFPLEdBQUcsTUFBTTtFQUNyQixNQUFNQyxXQUFXLEdBQUdILHNEQUFBLENBQWdCLGlCQUFoQixDQUFwQjtFQUNBLE1BQU1LLFdBQVcsR0FBR0YsV0FBVyxDQUFDRyxRQUFaLEVBQXBCOztFQUNBLElBQUksQ0FBQ0QsV0FBTCxFQUFrQjtJQUNqQixPQUFPLEVBQVA7RUFDQTs7RUFDRCxNQUFNRSxLQUFpQixHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osV0FBWCxDQUExQjtFQUNBLE9BQU9FLEtBQVA7QUFDQSxDQVJEOztBQVVBLE1BQU1HLEtBQUssR0FBRyxDQUFDO0VBQUVDO0FBQUYsQ0FBRCxLQUE0QjtFQUN6QyxNQUFNSixLQUFLLEdBQUdMLE9BQU8sRUFBckI7RUFDQSxNQUFNVSxJQUFJLEdBQUdMLEtBQUssQ0FBQ00sSUFBTixDQUFZRCxJQUFELElBQVVBLElBQUksQ0FBQ0QsRUFBTCxLQUFZQSxFQUFqQyxDQUFiO0VBQ0EsT0FBT0MsSUFBUDtBQUNBLENBSkQ7O0FBTUEsTUFBTUUsS0FBSyxHQUFHLE1BQU9QLEtBQVAsSUFBNkI7RUFDMUNOLGlEQUFhLENBQUMsaUJBQUQsRUFBb0JPLElBQUksQ0FBQ08sU0FBTCxDQUFlUixLQUFmLENBQXBCLENBQWI7QUFDQSxDQUZEOztBQUdBLGlFQUFlO0VBQUVMLE9BQUY7RUFBV1EsS0FBWDtFQUFrQkk7QUFBbEIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vbGliL2RhdGEvdG9kby50c3g/OGYxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IGZzLCB7IHdyaXRlRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdG9kb1wiO1xyXG5cclxuY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcclxuXHRjb25zdCB0b2Rvc0J1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhcImRhdGEvdG9kb3MuanNvblwiKTtcclxuXHRjb25zdCB0b2Rvc1N0cmluZyA9IHRvZG9zQnVmZmVyLnRvU3RyaW5nKCk7XHJcblx0aWYgKCF0b2Rvc1N0cmluZykge1xyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH1cclxuXHRjb25zdCB0b2RvczogVG9kb1R5cGVbXSA9IEpTT04ucGFyc2UodG9kb3NTdHJpbmcpO1xyXG5cdHJldHVybiB0b2RvcztcclxufTtcclxuXHJcbmNvbnN0IGV4aXN0ID0gKHsgaWQgfTogeyBpZDogbnVtYmVyIH0pID0+IHtcclxuXHRjb25zdCB0b2RvcyA9IGdldExpc3QoKTtcclxuXHRjb25zdCB0b2RvID0gdG9kb3Muc29tZSgodG9kbykgPT4gdG9kby5pZCA9PT0gaWQpO1xyXG5cdHJldHVybiB0b2RvO1xyXG59O1xyXG5cclxuY29uc3Qgd3JpdGUgPSBhc3luYyAodG9kb3M6IFRvZG9UeXBlW10pID0+IHtcclxuXHR3cml0ZUZpbGVTeW5jKFwiZGF0YS90b2Rvcy5qc29uXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHsgZ2V0TGlzdCwgZXhpc3QsIHdyaXRlIH07XHJcbiJdLCJuYW1lcyI6WyJmcyIsIndyaXRlRmlsZVN5bmMiLCJnZXRMaXN0IiwidG9kb3NCdWZmZXIiLCJyZWFkRmlsZVN5bmMiLCJ0b2Rvc1N0cmluZyIsInRvU3RyaW5nIiwidG9kb3MiLCJKU09OIiwicGFyc2UiLCJleGlzdCIsImlkIiwidG9kbyIsInNvbWUiLCJ3cml0ZSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/data/todo.tsx\n");

/***/ }),

/***/ "(api)/./pages/api/todos/index.tsx":
/*!***********************************!*\
  !*** ./pages/api/todos/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"(api)/./lib/data/index.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {\n  if (req.method === \"GET\") {\n    try {\n      const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n\n  if (req.method === \"POST\") {\n    const {\n      text,\n      color\n    } = req.body;\n\n    if (!text || !color) {\n      res.statusCode = 400;\n      return res.send(\"text 혹은 color가 없습니다.\");\n    }\n\n    const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n    let todoId;\n\n    if (todos.length > 0) {\n      todoId = todos[todos.length - 1].id + 1;\n    } else {\n      todoId + 1;\n    }\n\n    const newTodo = {\n      id: todoId,\n      text,\n      color,\n      checked: false\n    };\n    _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.write([...todos, newTodo]);\n    res.statusCode = 200;\n    res.end();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFFQSxpRUFBZSxDQUFDQyxHQUFELEVBQXNCQyxHQUF0QixLQUErQztFQUM3RCxJQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFuQixFQUEwQjtJQUN6QixJQUFJO01BQ0gsTUFBTUMsS0FBSyxHQUFHSiw4REFBQSxFQUFkO01BQ0FFLEdBQUcsQ0FBQ0ssVUFBSixHQUFpQixHQUFqQjtNQUNBLE9BQU9MLEdBQUcsQ0FBQ00sSUFBSixDQUFTSixLQUFULENBQVA7SUFDQSxDQUpELENBSUUsT0FBT0ssQ0FBUCxFQUFVO01BQ1hDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO01BQ0FQLEdBQUcsQ0FBQ0ssVUFBSixHQUFpQixHQUFqQjtNQUNBTCxHQUFHLENBQUNNLElBQUosQ0FBU0MsQ0FBVDtJQUNBO0VBQ0Q7O0VBQ0QsSUFBSVIsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7SUFDMUIsTUFBTTtNQUFFUyxJQUFGO01BQVFDO0lBQVIsSUFBa0JaLEdBQUcsQ0FBQ2EsSUFBNUI7O0lBQ0EsSUFBSSxDQUFDRixJQUFELElBQVMsQ0FBQ0MsS0FBZCxFQUFxQjtNQUNwQlgsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO01BQ0EsT0FBT0wsR0FBRyxDQUFDTSxJQUFKLENBQVMsc0JBQVQsQ0FBUDtJQUNBOztJQUNELE1BQU1KLEtBQUssR0FBR0osOERBQUEsRUFBZDtJQUNBLElBQUllLE1BQUo7O0lBQ0EsSUFBSVgsS0FBSyxDQUFDWSxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7TUFDckJELE1BQU0sR0FBR1gsS0FBSyxDQUFDQSxLQUFLLENBQUNZLE1BQU4sR0FBZSxDQUFoQixDQUFMLENBQXdCQyxFQUF4QixHQUE2QixDQUF0QztJQUNBLENBRkQsTUFFTztNQUNORixNQUFNLEdBQUcsQ0FBVDtJQUNBOztJQUNELE1BQU1HLE9BQU8sR0FBRztNQUNmRCxFQUFFLEVBQUVGLE1BRFc7TUFFZkgsSUFGZTtNQUdmQyxLQUhlO01BSWZNLE9BQU8sRUFBRTtJQUpNLENBQWhCO0lBT0FuQiw0REFBQSxDQUFnQixDQUFDLEdBQUdJLEtBQUosRUFBV2MsT0FBWCxDQUFoQjtJQUNBaEIsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO0lBQ0FMLEdBQUcsQ0FBQ21CLEdBQUo7RUFDQTtBQUNELENBcENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHN4PzdiZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuLi8uLi8uLi9saWIvZGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcblx0aWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHRvZG9zID0gRGF0YS50b2RvLmdldExpc3QoKTtcclxuXHRcdFx0cmVzLnN0YXR1c0NvZGUgPSAyMDA7XHJcblx0XHRcdHJldHVybiByZXMuc2VuZCh0b2Rvcyk7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHRyZXMuc3RhdHVzQ29kZSA9IDUwMDtcclxuXHRcdFx0cmVzLnNlbmQoZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG5cdFx0Y29uc3QgeyB0ZXh0LCBjb2xvciB9ID0gcmVxLmJvZHk7XHJcblx0XHRpZiAoIXRleHQgfHwgIWNvbG9yKSB7XHJcblx0XHRcdHJlcy5zdGF0dXNDb2RlID0gNDAwO1xyXG5cdFx0XHRyZXR1cm4gcmVzLnNlbmQoXCJ0ZXh0IO2YueydgCBjb2xvcuqwgCDsl4bsirXri4jri6QuXCIpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgdG9kb3MgPSBEYXRhLnRvZG8uZ2V0TGlzdCgpO1xyXG5cdFx0bGV0IHRvZG9JZDogbnVtYmVyO1xyXG5cdFx0aWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dG9kb0lkID0gdG9kb3NbdG9kb3MubGVuZ3RoIC0gMV0uaWQgKyAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dG9kb0lkICsgMTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IG5ld1RvZG8gPSB7XHJcblx0XHRcdGlkOiB0b2RvSWQsXHJcblx0XHRcdHRleHQsXHJcblx0XHRcdGNvbG9yLFxyXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcclxuXHRcdH07XHJcblxyXG5cdFx0RGF0YS50b2RvLndyaXRlKFsuLi50b2RvcywgbmV3VG9kb10pO1xyXG5cdFx0cmVzLnN0YXR1c0NvZGUgPSAyMDA7XHJcblx0XHRyZXMuZW5kKCk7XHJcblx0fVxyXG59O1xyXG4iXSwibmFtZXMiOlsiRGF0YSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRvZG9zIiwidG9kbyIsImdldExpc3QiLCJzdGF0dXNDb2RlIiwic2VuZCIsImUiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImNvbG9yIiwiYm9keSIsInRvZG9JZCIsImxlbmd0aCIsImlkIiwibmV3VG9kbyIsImNoZWNrZWQiLCJ3cml0ZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/index.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/index.tsx"));
module.exports = __webpack_exports__;

})();