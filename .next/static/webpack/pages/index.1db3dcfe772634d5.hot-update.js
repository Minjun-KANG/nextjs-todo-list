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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.tsx\");\n/* harmony import */ var _public_statics_svg_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/statics/svg/trash_can.svg */ \"./public/statics/svg/trash_can.svg\");\n/* harmony import */ var _public_statics_svg_check_mark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/statics/svg/check_mark.svg */ \"./public/statics/svg/check_mark.svg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\LG7\\\\Desktop\\\\Develope\\\\next\\\\next-study\\\\kang-bj-public\\\\5-1(Todo)\\\\components\\\\TodoList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-1oqh0di-0\"\n})([\"width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;position:relative;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;margin:0 0 8px;span{margin-left:12px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid \", \";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:\", \";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;align-items:center;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:16px;path{fill:\", \";}}.todo-check-mark{width:16px;fill:\", \";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid \", \";background-color:transparent;outline:none;}}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray);\n_c = Container;\n\nvar TodoList = function TodoList(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n  var getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    var red = 0;\n    var orange = 0;\n    var yellow = 0;\n    var green = 0;\n    var blue = 0;\n    var navy = 0;\n    todos.forEach(function (todo) {\n      switch (todo.color) {\n        case \"red\":\n          red += 1;\n          break;\n\n        case \"orange\":\n          orange += 1;\n          break;\n\n        case \"yellow\":\n          yellow += 1;\n          break;\n\n        case \"green\":\n          green += 1;\n          break;\n\n        case \"blue\":\n          blue += 1;\n          break;\n\n        case \"navy\":\n          navy += 1;\n          break;\n\n        default:\n          break;\n      }\n\n      return {\n        red: red,\n        orange: orange,\n        yellow: yellow,\n        green: green,\n        blue: blue,\n        navy: navy\n      };\n    });\n  }, [todos]);\n  var todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {\n    var colors = {};\n    todos.forEach(function (todo) {\n      var value = colors[todo.color];\n\n      if (!value) {\n        colors[\"\".concat(todo.color)] = 1;\n      } else {\n        colors[\"\".concat(todo.color)] = value + 1;\n      }\n    });\n    return colors;\n  }, [todos]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 193,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 192,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"todo-list-header-colors\",\n        children: Object.keys(todoColorNums).map(function (color, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"todo-list-header-color-num\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              className: \"todo-list-header-round-color bg-\".concat(color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 198,\n              columnNumber: 8\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n              children: [todoColorNums[color], \"\\uAC1C\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 199,\n              columnNumber: 8\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 197,\n            columnNumber: 7\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 195,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"ul\", {\n      className: \"todo-list\",\n      children: todos.map(function (todo) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n          className: \"todo-item\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"todo-left-side\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              className: \"todo-color-block bg-\".concat(todo.color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 208,\n              columnNumber: 8\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n              className: \"todo-text \".concat(todo.checked ? \"checked-todo-text\" : \"\"),\n              children: todo.text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 209,\n              columnNumber: 8\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 207,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"todo-right-side\",\n            children: [todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_public_statics_svg_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"todo-trash-can\",\n                onClick: function onClick() {}\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 229,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_public_statics_svg_check_mark_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"todo-check-mark\",\n                onClick: function onClick() {}\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 233,\n                columnNumber: 10\n              }, _this)]\n            }, void 0, true), !todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n              type: \"button\",\n              className: \"todo-button\",\n              onClick: function onClick() {}\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 240,\n              columnNumber: 9\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 217,\n            columnNumber: 7\n          }, _this)]\n        }, todo.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 206,\n          columnNumber: 6\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 204,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 190,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(TodoList, \"lbu9IE0+D5iX+9TYNfAYXp8wH1M=\");\n\n_c2 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"TodoList\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7Z0JBQUE7Z0JBQUE7Y0FBQSxTQWREO1lBQUEsZ0JBRkYsRUFzQkUsQ0FBQ1YsSUFBSSxDQUFDVSxPQUFOLGlCQUNBO2NBQ0MsSUFBSSxFQUFDLFFBRE47Y0FFQyxTQUFTLEVBQUMsYUFGWDtjQUdDLE9BQU8sRUFBRSxtQkFBTSxDQUFFO1lBSGxCO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0F2QkY7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBWEQ7UUFBQSxHQUErQlYsSUFBSSxDQUFDWSxFQUFwQztVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRFU7TUFBQSxDQUFWO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQWREO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUREO0FBK0RBLENBM0hEOztHQUFNaEI7O01BQUFBO0FBNEhOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9kb0xpc3QudHN4PzFjOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vdHlwZXMvdG9kb1wiO1xyXG5pbXBvcnQgVHJhc2hDYW5JY29uIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljcy9zdmcvdHJhc2hfY2FuLnN2Z1wiO1xyXG5pbXBvcnQgQ2hlY2tNYXJrSWNvbiBmcm9tIFwiLi4vcHVibGljL3N0YXRpY3Mvc3ZnL2NoZWNrX21hcmsuc3ZnXCI7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuXHR0b2RvczogVG9kb1R5cGVbXTtcclxufVxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdHdpZHRoOiAxMDAlO1xyXG5cclxuXHQudG9kby1udW0ge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEycHg7XHJcblx0fVxyXG5cclxuXHQudG9kby1saXN0LWhlYWRlciB7XHJcblx0XHRwYWRkaW5nOiAxMnB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHJcblx0XHQudG9kby1saXN0LWxhc3QtdG9kbyB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0bWFyZ2luOiAwIDAgOHB4O1xyXG5cdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMTJweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC50b2RvLWxpc3QtaGVhZGVyLWNvbG9ycyB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdC50b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bSB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDZweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3Ige1xyXG5cdFx0XHRcdFx0d2lkdGg6IDE2cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDE2cHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5iZy1ibHVlIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ibHVlfTtcclxuXHR9XHJcblx0LmJnLWdyZWVuIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmVlbn07XHJcblx0fVxyXG5cdC5iZy1uYXZ5IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5uYXZ5fTtcclxuXHR9XHJcblx0LmJnLW9yYW5nZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcclxuXHR9XHJcblx0LmJnLXJlZCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUucmVkfTtcclxuXHR9XHJcblx0LmJnLXllbGxvdyB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUueWVsbG93fTtcclxuXHR9XHJcblxyXG5cdC50b2RvLWxpc3Qge1xyXG5cdFx0LnRvZG8taXRlbSB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogNTJweDtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHJcblx0XHRcdC50b2RvLWxlZnQtc2lkZSB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHQudG9kby1jb2xvci1ibG9jayB7XHJcblx0XHRcdFx0XHR3aWR0aDogMTJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmNoZWNrZWQtdG9kby10ZXh0IHtcclxuXHRcdFx0XHRcdGNvbG9yOiAke3BhbGV0dGUuZ3JheX07XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnRvZG8tdGV4dCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTJweDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LnRvZG8tcmlnaHQtc2lkZSB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTJweDtcclxuXHRcdFx0XHRzdmcge1xyXG5cdFx0XHRcdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTZweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnRvZG8tdHJhc2gtY2FuIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxNnB4O1xyXG5cdFx0XHRcdFx0cGF0aCB7XHJcblx0XHRcdFx0XHRcdGZpbGw6ICR7cGFsZXR0ZS5kZWVwX3JlZH07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC50b2RvLWNoZWNrLW1hcmsge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDE2cHg7XHJcblx0XHRcdFx0XHRmaWxsOiAke3BhbGV0dGUuZGVlcF9ncmVlbn07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC50b2RvLWJ1dHRvbiB7XHJcblx0XHRcdFx0XHR3aWR0aDogMjBweDtcclxuXHRcdFx0XHRcdGhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0b3V0bGluZTogbm9uZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBUb2RvTGlzdDogUmVhY3QuRkM8SVByb3BzPiA9ICh7IHRvZG9zIH0pID0+IHtcclxuXHRjb25zdCBnZXRUb2RvQ29sb3JOdW1zID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0bGV0IHJlZCA9IDA7XHJcblx0XHRsZXQgb3JhbmdlID0gMDtcclxuXHRcdGxldCB5ZWxsb3cgPSAwO1xyXG5cdFx0bGV0IGdyZWVuID0gMDtcclxuXHRcdGxldCBibHVlID0gMDtcclxuXHRcdGxldCBuYXZ5ID0gMDtcclxuXHJcblx0XHR0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcblx0XHRcdHN3aXRjaCAodG9kby5jb2xvcikge1xyXG5cdFx0XHRcdGNhc2UgXCJyZWRcIjpcclxuXHRcdFx0XHRcdHJlZCArPSAxO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcIm9yYW5nZVwiOlxyXG5cdFx0XHRcdFx0b3JhbmdlICs9IDE7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwieWVsbG93XCI6XHJcblx0XHRcdFx0XHR5ZWxsb3cgKz0gMTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJncmVlblwiOlxyXG5cdFx0XHRcdFx0Z3JlZW4gKz0gMTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJibHVlXCI6XHJcblx0XHRcdFx0XHRibHVlICs9IDE7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwibmF2eVwiOlxyXG5cdFx0XHRcdFx0bmF2eSArPSAxO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cmVkLFxyXG5cdFx0XHRcdG9yYW5nZSxcclxuXHRcdFx0XHR5ZWxsb3csXHJcblx0XHRcdFx0Z3JlZW4sXHJcblx0XHRcdFx0Ymx1ZSxcclxuXHRcdFx0XHRuYXZ5LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSk7XHJcblx0fSwgW3RvZG9zXSk7XHJcblxyXG5cdHR5cGUgT2JqZWN0SW5kZXhUeXBlID0ge1xyXG5cdFx0W2tleTogc3RyaW5nXTogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHRvZG9Db2xvck51bXMgPSB1c2VNZW1vKCgpID0+IHtcclxuXHRcdGNvbnN0IGNvbG9yczogT2JqZWN0SW5kZXhUeXBlID0ge307XHJcblx0XHR0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcblx0XHRcdGNvbnN0IHZhbHVlID0gY29sb3JzW3RvZG8uY29sb3JdO1xyXG5cdFx0XHRpZiAoIXZhbHVlKSB7XHJcblx0XHRcdFx0Y29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSAxO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gdmFsdWUgKyAxO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBjb2xvcnM7XHJcblx0fSwgW3RvZG9zXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXJcIj5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtbGFzdC10b2RvXCI+XHJcblx0XHRcdFx0XHTrgqjsnYAgVE9ETzxzcGFuPnt0b2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3JzXCI+XHJcblx0XHRcdFx0XHR7T2JqZWN0LmtleXModG9kb0NvbG9yTnVtcykubWFwKChjb2xvciwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bVwiIGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgdG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciBiZy0ke2NvbG9yfWB9IC8+XHJcblx0XHRcdFx0XHRcdFx0PHA+e3RvZG9Db2xvck51bXNbY29sb3JdfeqwnDwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDx1bCBjbGFzc05hbWU9XCJ0b2RvLWxpc3RcIj5cclxuXHRcdFx0XHR7dG9kb3MubWFwKCh0b2RvKSA9PiAoXHJcblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwidG9kby1pdGVtXCIga2V5PXt0b2RvLmlkfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxlZnQtc2lkZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgdG9kby1jb2xvci1ibG9jayBiZy0ke3RvZG8uY29sb3J9YH0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHRvZG8tdGV4dCAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0b2RvLmNoZWNrZWQgPyBcImNoZWNrZWQtdG9kby10ZXh0XCIgOiBcIlwiXHJcblx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7dG9kby50ZXh0fVxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9kby1yaWdodC1zaWRlXCI+XHJcblx0XHRcdFx0XHRcdFx0e3RvZG8uY2hlY2tlZCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJ0b2RvLXRyYXNoLWNhblwiIG9uQ2xpY2s9eygpID0+IHt9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cIi90cmFzaF9jYW4ucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cImljb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezEwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9JbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+ICovfVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRyYXNoQ2FuSWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRvZG8tdHJhc2gtY2FuXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PjwvVHJhc2hDYW5JY29uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tNYXJrSWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRvZG8tY2hlY2stbWFya1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge319XHJcblx0XHRcdFx0XHRcdFx0XHRcdD48L0NoZWNrTWFya0ljb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdHshdG9kby5jaGVja2VkICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRvZG8tYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge319XHJcblx0XHRcdFx0XHRcdFx0XHQ+PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInN0eWxlZCIsInBhbGV0dGUiLCJUcmFzaENhbkljb24iLCJDaGVja01hcmtJY29uIiwiQ29udGFpbmVyIiwiZGl2IiwiZ3JheSIsImJsdWUiLCJncmVlbiIsIm5hdnkiLCJvcmFuZ2UiLCJyZWQiLCJ5ZWxsb3ciLCJkZWVwX3JlZCIsImRlZXBfZ3JlZW4iLCJUb2RvTGlzdCIsInRvZG9zIiwiZ2V0VG9kb0NvbG9yTnVtcyIsImZvckVhY2giLCJ0b2RvIiwiY29sb3IiLCJ0b2RvQ29sb3JOdW1zIiwiY29sb3JzIiwidmFsdWUiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJjaGVja2VkIiwidGV4dCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n"));

/***/ })

});