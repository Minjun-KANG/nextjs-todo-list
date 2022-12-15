"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCheckMark = function SvgCheckMark(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m9 21.035-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436L24 5.782z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgCheckMark);

/***/ }),

/***/ 789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTrashCan = function SvgTrashCan(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 24,
    height: 24,
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M19 24H5a2 2 0 0 1-2-2V5H2V3h6V1.5C8 .673 8.673 0 9.5 0h5c.825 0 1.5.671 1.5 1.5V3h6v2h-1v17a2 2 0 0 1-2 2zm0-19H5v16.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V5zm-9 4a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0V9zm6 0a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0V9zm-2-7h-4v1h4V2z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgTrashCan);

/***/ }),

/***/ 62:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(172);
/* harmony import */ var _public_statics_svg_trash_can_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(789);
/* harmony import */ var _public_statics_svg_check_mark_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(857);
/* harmony import */ var _lib_api_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(233);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_todo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(672);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_todo__WEBPACK_IMPORTED_MODULE_5__]);
_lib_api_todo__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "TodoList__Container",
  componentId: "sc-1tuyej9-0"
})(["width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;position:relative;border-bottom:1px solid ", ";.todo-list-last-todo{font-size:14px;margin:0 0 8px;span{margin-left:12px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:", ";}.bg-green{background-color:", ";}.bg-navy{background-color:", ";}.bg-orange{background-color:", ";}.bg-red{background-color:", ";}.bg-yellow{background-color:", ";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid ", ";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:", ";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;align-items:center;margin-right:12px;svg{&:first-child{margin-right:12px;}}.todo-trash-can{width:25px;path{fill:", ";}}.todo-check-mark{width:25px;fill:", ";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid ", ";background-color:transparent;outline:none;}}}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__/* ["default"].gray */ .Z.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__/* ["default"].blue */ .Z.blue, _styles_palette__WEBPACK_IMPORTED_MODULE_2__/* ["default"].green */ .Z.green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__/* ["default"].navy */ .Z.navy, _styles_palette__WEBPACK_IMPORTED_MODULE_2__/* ["default"].orange */ .Z.orange, _styles_palette__WEBPACK_IMPORTED_MODULE_2__/* ["default"].red */ .Z.red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__/* ["default"].yellow */ .Z.yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_2__/* ["default"].gray */ .Z.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__/* ["default"].gray */ .Z.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__/* ["default"].deep_red */ .Z.deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__/* ["default"].deep_green */ .Z.deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__/* ["default"].gray */ .Z.gray);

const TodoList = () => {
  const todos = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.todo.todos);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const {
    0: localTodos,
    1: setLocalTodos
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(todos);
  const getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let green = 0;
    let blue = 0;
    let navy = 0;
    todos.forEach(todo => {
      switch (todo.color) {
        case "red":
          red += 1;
          break;

        case "orange":
          orange += 1;
          break;

        case "yellow":
          yellow += 1;
          break;

        case "green":
          green += 1;
          break;

        case "blue":
          blue += 1;
          break;

        case "navy":
          navy += 1;
          break;

        default:
          break;
      }

      return {
        red,
        orange,
        yellow,
        green,
        blue,
        navy
      };
    });
  }, [todos]);
  const todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const colors = {};
    todos && todos.forEach(todo => {
      const value = colors[todo.color];

      if (!value) {
        //* 존재하지않던 key라면
        colors[`${todo.color}`] = 1;
      } else {
        //* 존재하는 키라면
        colors[`${todo.color}`] = value + 1;
      }
    });
    return colors;
  }, [todos]);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  const checkTodo = async id => {
    try {
      await (0,_lib_api_todo__WEBPACK_IMPORTED_MODULE_5__/* .checkTodoAPI */ .Py)(id);
      console.log("체크하였습니다."); //체크를 적용하는 방법 1 - 데이터 다시 받기
      // router.reload();
      //체크를 적용하는 방법 2 - 클라이언트 네비게이션을 사용하여 전체를 다시 불러오지 않음.
      //serverSideProps만 다시 실행됨.
      // router.push("/");
      //체크를 적용하는 방법 3 - state 이용

      const newTodos = localTodos.map(todo => {
        if (todo.id === id) {
          return _objectSpread(_objectSpread({}, todo), {}, {
            checked: !todo.checked
          });
        }

        return todo;
      });
      dispatch(_store_todo__WEBPACK_IMPORTED_MODULE_8__/* .todoActions.setTodo */ .M.setTodo(newTodos));
      console.log("체크하였습니다.");
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTodo = async id => {
    try {
      await (0,_lib_api_todo__WEBPACK_IMPORTED_MODULE_5__/* .deleteTodoAPI */ .t2)(id);
      const newTodos = localTodos.filter(todo => todo.id !== id);
      dispatch(_store_todo__WEBPACK_IMPORTED_MODULE_8__/* .todoActions.setTodo */ .M.setTodo(newTodos));
      console.log("삭제했습니다.");
    } catch (e) {
      console.log(e);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "todo-list-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
        className: "todo-list-last-todo",
        children: ["\uB0A8\uC740 TODO", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
          children: [localTodos && localTodos.length, "\uAC1C"]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: "todo-list-header-colors",
        children: Object.keys(todoColorNums).map((color, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "todo-list-header-color-num",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            className: `todo-list-header-round-color bg-${color}`
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
            children: [todoColorNums[color], "\uAC1C"]
          })]
        }, index))
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("ul", {
      className: "todo-list",
      children: localTodos && localTodos.map(todo => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
        className: "todo-item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "todo-left-side",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            className: `todo-color-block bg-${todo.color}`
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
            className: `todo-text ${todo.checked ? "checked-todo-text" : ""}`,
            children: todo.text
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "todo-right-side",
          children: [todo.checked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_public_statics_svg_trash_can_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
              className: "todo-trash-can",
              onClick: () => {
                deleteTodo(todo.id);
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_public_statics_svg_check_mark_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              className: "todo-check-mark",
              onClick: () => {
                checkTodo(todo.id);
              }
            })]
          }), !todo.checked && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("button", {
            type: "button",
            className: "todo-button",
            onClick: () => {}
          })]
        })]
      }, todo.id))
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 813:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const axios = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: "http://localhost:3000"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 233:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Py": () => (/* binding */ checkTodoAPI),
/* harmony export */   "d": () => (/* binding */ addTodoAPI),
/* harmony export */   "nR": () => (/* binding */ getTodosApi),
/* harmony export */   "t2": () => (/* binding */ deleteTodoAPI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(813);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);
___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

//Get TodoList API
const getTodosApi = () => ___WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("api/todos");
const checkTodoAPI = id => ___WEBPACK_IMPORTED_MODULE_0__/* ["default"].patch */ .Z.patch(`api/todos/${id}`);
const addTodoAPI = body => ___WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/api/todos", body);
const deleteTodoAPI = id => {
  ___WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"](`/api/todos, ${id}`);
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var _lib_api_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(233);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(794);
/* harmony import */ var _store_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(672);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_TodoList__WEBPACK_IMPORTED_MODULE_1__, _lib_api_todo__WEBPACK_IMPORTED_MODULE_2__]);
([_components_TodoList__WEBPACK_IMPORTED_MODULE_1__, _lib_api_todo__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const app = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_TodoList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};

const getServerSideProps = _store__WEBPACK_IMPORTED_MODULE_3__/* .wrapper.getServerSideProps */ .Y.getServerSideProps(store => async () => {
  console.log(store);

  try {
    const {
      data
    } = await (0,_lib_api_todo__WEBPACK_IMPORTED_MODULE_2__/* .getTodosApi */ .nR)();
    store.dispatch(_store_todo__WEBPACK_IMPORTED_MODULE_4__/* .todoActions.setTodo */ .M.setTodo(data));
    return {
      props: {}
    };
  } catch (e) {
    console.log(e);
    return {
      props: {}
    };
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [999], () => (__webpack_exec__(6)));
module.exports = __webpack_exports__;

})();