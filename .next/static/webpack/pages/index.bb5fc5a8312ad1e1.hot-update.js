"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.tsx\");\n/* harmony import */ var _public_statics_svg_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/statics/svg/trash_can.svg */ \"./public/statics/svg/trash_can.svg\");\n/* harmony import */ var _public_statics_svg_check_mark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/statics/svg/check_mark.svg */ \"./public/statics/svg/check_mark.svg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\LG7\\\\Desktop\\\\Develope\\\\next\\\\next-study\\\\kang-bj-public\\\\5-1(Todo)\\\\components\\\\TodoList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-1oqh0di-0\"\n})([\"width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;position:relative;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;margin:0 0 8px;span{margin-left:12px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid \", \";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:\", \";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;align-items:center;margin-right:12px;svg{&:first-child{margin-right:8px;}}.todo-trash-can{width:15px;path{fill:\", \";}}.todo-check-mark{width:30px;fill:\", \";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid \", \";background-color:transparent;outline:none;}}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray);\n_c = Container;\n\nvar TodoList = function TodoList(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n  var getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    var red = 0;\n    var orange = 0;\n    var yellow = 0;\n    var green = 0;\n    var blue = 0;\n    var navy = 0;\n    todos.forEach(function (todo) {\n      switch (todo.color) {\n        case \"red\":\n          red += 1;\n          break;\n\n        case \"orange\":\n          orange += 1;\n          break;\n\n        case \"yellow\":\n          yellow += 1;\n          break;\n\n        case \"green\":\n          green += 1;\n          break;\n\n        case \"blue\":\n          blue += 1;\n          break;\n\n        case \"navy\":\n          navy += 1;\n          break;\n\n        default:\n          break;\n      }\n\n      return {\n        red: red,\n        orange: orange,\n        yellow: yellow,\n        green: green,\n        blue: blue,\n        navy: navy\n      };\n    });\n  }, [todos]);\n  var todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {\n    var colors = {};\n    todos.forEach(function (todo) {\n      var value = colors[todo.color];\n\n      if (!value) {\n        colors[\"\".concat(todo.color)] = 1;\n      } else {\n        colors[\"\".concat(todo.color)] = value + 1;\n      }\n    });\n    return colors;\n  }, [todos]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 193,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 192,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"todo-list-header-colors\",\n        children: Object.keys(todoColorNums).map(function (color, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"todo-list-header-color-num\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              className: \"todo-list-header-round-color bg-\".concat(color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 198,\n              columnNumber: 8\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n              children: [todoColorNums[color], \"\\uAC1C\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 199,\n              columnNumber: 8\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 197,\n            columnNumber: 7\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 195,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"ul\", {\n      className: \"todo-list\",\n      children: todos.map(function (todo) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n          className: \"todo-item\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"todo-left-side\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              className: \"todo-color-block bg-\".concat(todo.color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 208,\n              columnNumber: 8\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n              className: \"todo-text \".concat(todo.checked ? \"checked-todo-text\" : \"\"),\n              children: todo.text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 209,\n              columnNumber: 8\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 207,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"todo-right-side\",\n            children: [todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_public_statics_svg_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"todo-trash-can\",\n                onClick: function onClick() {}\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 229,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_public_statics_svg_check_mark_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"todo-check-mark\",\n                onClick: function onClick() {}\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 233,\n                columnNumber: 10\n              }, _this)]\n            }, void 0, true), !todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n              type: \"button\",\n              className: \"todo-button\",\n              onClick: function onClick() {}\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 240,\n              columnNumber: 9\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 217,\n            columnNumber: 7\n          }, _this)]\n        }, todo.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 206,\n          columnNumber: 6\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 204,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 190,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(TodoList, \"lbu9IE0+D5iX+9TYNfAYXp8wH1M=\");\n\n_c2 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"TodoList\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7Z0JBQUE7Z0JBQUE7Y0FBQSxTQWREO1lBQUEsZ0JBRkYsRUFzQkUsQ0FBQ1YsSUFBSSxDQUFDVSxPQUFOLGlCQUNBO2NBQ0MsSUFBSSxFQUFDLFFBRE47Y0FFQyxTQUFTLEVBQUMsYUFGWDtjQUdDLE9BQU8sRUFBRSxtQkFBTSxDQUFFO1lBSGxCO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0F2QkY7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBWEQ7UUFBQSxHQUErQlYsSUFBSSxDQUFDWSxFQUFwQztVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRFU7TUFBQSxDQUFWO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQWREO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUREO0FBK0RBLENBM0hEOztHQUFNaEI7O01BQUFBO0FBNEhOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9kb0xpc3QudHN4PzFjOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vdHlwZXMvdG9kb1wiO1xyXG5pbXBvcnQgVHJhc2hDYW5JY29uIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljcy9zdmcvdHJhc2hfY2FuLnN2Z1wiO1xyXG5pbXBvcnQgQ2hlY2tNYXJrSWNvbiBmcm9tIFwiLi4vcHVibGljL3N0YXRpY3Mvc3ZnL2NoZWNrX21hcmsuc3ZnXCI7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuXHR0b2RvczogVG9kb1R5cGVbXTtcclxufVxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdHdpZHRoOiAxMDAlO1xyXG5cclxuXHQudG9kby1udW0ge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEycHg7XHJcblx0fVxyXG5cclxuXHQudG9kby1saXN0LWhlYWRlciB7XHJcblx0XHRwYWRkaW5nOiAxMnB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHJcblx0XHQudG9kby1saXN0LWxhc3QtdG9kbyB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0bWFyZ2luOiAwIDAgOHB4O1xyXG5cdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMTJweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC50b2RvLWxpc3QtaGVhZGVyLWNvbG9ycyB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdC50b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bSB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDZweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3Ige1xyXG5cdFx0XHRcdFx0d2lkdGg6IDE2cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDE2cHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5iZy1ibHVlIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ibHVlfTtcclxuXHR9XHJcblx0LmJnLWdyZWVuIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmVlbn07XHJcblx0fVxyXG5cdC5iZy1uYXZ5IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5uYXZ5fTtcclxuXHR9XHJcblx0LmJnLW9yYW5nZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcclxuXHR9XHJcblx0LmJnLXJlZCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUucmVkfTtcclxuXHR9XHJcblx0LmJnLXllbGxvdyB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUueWVsbG93fTtcclxuXHR9XHJcblxyXG5cdC50b2RvLWxpc3Qge1xyXG5cdFx0LnRvZG8taXRlbSB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogNTJweDtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHJcblx0XHRcdC50b2RvLWxlZnQtc2lkZSB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHQudG9kby1jb2xvci1ibG9jayB7XHJcblx0XHRcdFx0XHR3aWR0aDogMTJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmNoZWNrZWQtdG9kby10ZXh0IHtcclxuXHRcdFx0XHRcdGNvbG9yOiAke3BhbGV0dGUuZ3JheX07XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnRvZG8tdGV4dCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTJweDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LnRvZG8tcmlnaHQtc2lkZSB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTJweDtcclxuXHRcdFx0XHRzdmcge1xyXG5cdFx0XHRcdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogOHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQudG9kby10cmFzaC1jYW4ge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDE1cHg7XHJcblx0XHRcdFx0XHRwYXRoIHtcclxuXHRcdFx0XHRcdFx0ZmlsbDogJHtwYWxldHRlLmRlZXBfcmVkfTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnRvZG8tY2hlY2stbWFyayB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzBweDtcclxuXHRcdFx0XHRcdGZpbGw6ICR7cGFsZXR0ZS5kZWVwX2dyZWVufTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnRvZG8tYnV0dG9uIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgdG9kb3MgfSkgPT4ge1xyXG5cdGNvbnN0IGdldFRvZG9Db2xvck51bXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRsZXQgcmVkID0gMDtcclxuXHRcdGxldCBvcmFuZ2UgPSAwO1xyXG5cdFx0bGV0IHllbGxvdyA9IDA7XHJcblx0XHRsZXQgZ3JlZW4gPSAwO1xyXG5cdFx0bGV0IGJsdWUgPSAwO1xyXG5cdFx0bGV0IG5hdnkgPSAwO1xyXG5cclxuXHRcdHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuXHRcdFx0c3dpdGNoICh0b2RvLmNvbG9yKSB7XHJcblx0XHRcdFx0Y2FzZSBcInJlZFwiOlxyXG5cdFx0XHRcdFx0cmVkICs9IDE7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwib3JhbmdlXCI6XHJcblx0XHRcdFx0XHRvcmFuZ2UgKz0gMTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJ5ZWxsb3dcIjpcclxuXHRcdFx0XHRcdHllbGxvdyArPSAxO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcImdyZWVuXCI6XHJcblx0XHRcdFx0XHRncmVlbiArPSAxO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcImJsdWVcIjpcclxuXHRcdFx0XHRcdGJsdWUgKz0gMTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJuYXZ5XCI6XHJcblx0XHRcdFx0XHRuYXZ5ICs9IDE7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyZWQsXHJcblx0XHRcdFx0b3JhbmdlLFxyXG5cdFx0XHRcdHllbGxvdyxcclxuXHRcdFx0XHRncmVlbixcclxuXHRcdFx0XHRibHVlLFxyXG5cdFx0XHRcdG5hdnksXHJcblx0XHRcdH07XHJcblx0XHR9KTtcclxuXHR9LCBbdG9kb3NdKTtcclxuXHJcblx0dHlwZSBPYmplY3RJbmRleFR5cGUgPSB7XHJcblx0XHRba2V5OiBzdHJpbmddOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdG9kb0NvbG9yTnVtcyA9IHVzZU1lbW8oKCkgPT4ge1xyXG5cdFx0Y29uc3QgY29sb3JzOiBPYmplY3RJbmRleFR5cGUgPSB7fTtcclxuXHRcdHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBjb2xvcnNbdG9kby5jb2xvcl07XHJcblx0XHRcdGlmICghdmFsdWUpIHtcclxuXHRcdFx0XHRjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IDE7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSB2YWx1ZSArIDE7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGNvbG9ycztcclxuXHR9LCBbdG9kb3NdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDb250YWluZXI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlclwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRvZG8tbGlzdC1sYXN0LXRvZG9cIj5cclxuXHRcdFx0XHRcdOuCqOydgCBUT0RPPHNwYW4+e3RvZG9zLmxlbmd0aH3qsJw8L3NwYW4+XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlci1jb2xvcnNcIj5cclxuXHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0b2RvQ29sb3JOdW1zKS5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtXCIga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2B0b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIGJnLSR7Y29sb3J9YH0gLz5cclxuXHRcdFx0XHRcdFx0XHQ8cD57dG9kb0NvbG9yTnVtc1tjb2xvcl196rCcPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT1cInRvZG8tbGlzdFwiPlxyXG5cdFx0XHRcdHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcclxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJ0b2RvLWl0ZW1cIiBrZXk9e3RvZG8uaWR9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGVmdC1zaWRlXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2B0b2RvLWNvbG9yLWJsb2NrIGJnLSR7dG9kby5jb2xvcn1gfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgdG9kby10ZXh0ICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvZG8uY2hlY2tlZCA/IFwiY2hlY2tlZC10b2RvLXRleHRcIiA6IFwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHt0b2RvLnRleHR9XHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b2RvLXJpZ2h0LXNpZGVcIj5cclxuXHRcdFx0XHRcdFx0XHR7dG9kby5jaGVja2VkICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cInRvZG8tdHJhc2gtY2FuXCIgb25DbGljaz17KCkgPT4ge319PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiL3RyYXNoX2Nhbi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiaWNvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MTB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezEwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L0ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj4gKi99XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VHJhc2hDYW5JY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidG9kby10cmFzaC1jYW5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHt9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PC9UcmFzaENhbkljb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja01hcmtJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidG9kby1jaGVjay1tYXJrXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PjwvQ2hlY2tNYXJrSWNvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0eyF0b2RvLmNoZWNrZWQgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidG9kby1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7fX1cclxuXHRcdFx0XHRcdFx0XHRcdD48L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwic3R5bGVkIiwicGFsZXR0ZSIsIlRyYXNoQ2FuSWNvbiIsIkNoZWNrTWFya0ljb24iLCJDb250YWluZXIiLCJkaXYiLCJncmF5IiwiYmx1ZSIsImdyZWVuIiwibmF2eSIsIm9yYW5nZSIsInJlZCIsInllbGxvdyIsImRlZXBfcmVkIiwiZGVlcF9ncmVlbiIsIlRvZG9MaXN0IiwidG9kb3MiLCJnZXRUb2RvQ29sb3JOdW1zIiwiZm9yRWFjaCIsInRvZG8iLCJjb2xvciIsInRvZG9Db2xvck51bXMiLCJjb2xvcnMiLCJ2YWx1ZSIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpbmRleCIsImNoZWNrZWQiLCJ0ZXh0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n"));

/***/ })

});