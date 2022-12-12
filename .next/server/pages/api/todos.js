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

/***/ "(api)/./pages/api/todos.tsx":
/*!*****************************!*\
  !*** ./pages/api/todos.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {\n  if (req.method === \"GET\") {\n    try {\n      const todosBuffer = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(\"data/todos.json\");\n      const todosString = todosBuffer.toString();\n\n      if (!todosString) {\n        res.statusCode = 200;\n        res.send([]);\n      }\n\n      const todos = JSON.parse(todosString);\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBR0EsaUVBQWUsQ0FBQ0MsR0FBRCxFQUFzQkMsR0FBdEIsS0FBK0M7RUFDN0QsSUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7SUFDekIsSUFBSTtNQUNILE1BQU1DLFdBQVcsR0FBR0osc0RBQUEsQ0FBZ0IsaUJBQWhCLENBQXBCO01BQ0EsTUFBTU0sV0FBVyxHQUFHRixXQUFXLENBQUNHLFFBQVosRUFBcEI7O01BQ0EsSUFBSSxDQUFDRCxXQUFMLEVBQWtCO1FBQ2pCSixHQUFHLENBQUNNLFVBQUosR0FBaUIsR0FBakI7UUFDQU4sR0FBRyxDQUFDTyxJQUFKLENBQVMsRUFBVDtNQUNBOztNQUNELE1BQU1DLEtBQWlCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixXQUFYLENBQTFCO01BQ0FKLEdBQUcsQ0FBQ00sVUFBSixHQUFpQixHQUFqQjtNQUNBLE9BQU9OLEdBQUcsQ0FBQ08sSUFBSixDQUFTQyxLQUFULENBQVA7SUFDQSxDQVZELENBVUUsT0FBT0csQ0FBUCxFQUFVO01BQ1hDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO01BQ0FYLEdBQUcsQ0FBQ00sVUFBSixHQUFpQixHQUFqQjtNQUNBTixHQUFHLENBQUNPLElBQUosQ0FBU0ksQ0FBVDtJQUNBO0VBQ0Q7QUFDRCxDQWxCRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vcGFnZXMvYXBpL3RvZG9zLnRzeD83NTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3RvZG9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG5cdGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCB0b2Rvc0J1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhcImRhdGEvdG9kb3MuanNvblwiKTtcclxuXHRcdFx0Y29uc3QgdG9kb3NTdHJpbmcgPSB0b2Rvc0J1ZmZlci50b1N0cmluZygpO1xyXG5cdFx0XHRpZiAoIXRvZG9zU3RyaW5nKSB7XHJcblx0XHRcdFx0cmVzLnN0YXR1c0NvZGUgPSAyMDA7XHJcblx0XHRcdFx0cmVzLnNlbmQoW10pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHRvZG9zOiBUb2RvVHlwZVtdID0gSlNPTi5wYXJzZSh0b2Rvc1N0cmluZyk7XHJcblx0XHRcdHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG5cdFx0XHRyZXR1cm4gcmVzLnNlbmQodG9kb3MpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0cmVzLnN0YXR1c0NvZGUgPSA1MDA7XHJcblx0XHRcdHJlcy5zZW5kKGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIl0sIm5hbWVzIjpbImZzIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9kb3NCdWZmZXIiLCJyZWFkRmlsZVN5bmMiLCJ0b2Rvc1N0cmluZyIsInRvU3RyaW5nIiwic3RhdHVzQ29kZSIsInNlbmQiLCJ0b2RvcyIsIkpTT04iLCJwYXJzZSIsImUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos.tsx"));
module.exports = __webpack_exports__;

})();