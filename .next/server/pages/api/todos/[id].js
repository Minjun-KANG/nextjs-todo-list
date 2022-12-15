"use strict";
(() => {
var exports = {};
exports.id = 427;
exports.ids = [427];
exports.modules = {

/***/ 263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ data)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: ./lib/data/todo.tsx


const getList = () => {
  const todosBuffer = external_fs_default().readFileSync("data/todos.json");
  const todosString = todosBuffer.toString();

  if (!todosString) {
    return [];
  }

  const todos = JSON.parse(todosString);
  return todos;
};

const exist = ({
  id
}) => {
  const todos = getList();
  const todo = todos.some(todo => todo.id === id);
  return todo;
};

const write = async todos => {
  (0,external_fs_namespaceObject.writeFileSync)("data/todos.json", JSON.stringify(todos));
};

/* harmony default export */ const todo = ({
  getList,
  exist,
  write
});
;// CONCATENATED MODULE: ./lib/data/index.tsx

const Data = {
  todo: todo
};
/* harmony default export */ const data = (Data);

/***/ }),

/***/ 30:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  if (req.method === "PATCH") {
    try {
      const todoId = Number(req.query.id);
      const todo = _lib_data__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todo.exist */ .Z.todo.exist({
        id: todoId
      });

      if (!todo) {
        res.statusCode = 404;
        res.end();
      }

      const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todo.getList */ .Z.todo.getList();
      const changedTodos = todos.map(todo => {
        if (todo.id === todoId) {
          return _objectSpread(_objectSpread({}, todo), {}, {
            checked: !todo.checked
          });
        }

        return todo;
      });
      _lib_data__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todo.write */ .Z.todo.write(changedTodos);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  if (req.method === "DELETE") {
    try {
      const todoId = Number(req.query.id);
      const todo = _lib_data__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todo.exist */ .Z.todo.exist({
        id: todoId
      });

      if (!todo) {
        res.statusCode = 404;
        res.end();
      }

      const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todo.getList */ .Z.todo.getList();
      const filteredTodos = todos.filter(todo => todo.id !== todoId);
      _lib_data__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todo.write */ .Z.todo.write(filteredTodos);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  res.statusCode = 405;
  return res.end();
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(30));
module.exports = __webpack_exports__;

})();