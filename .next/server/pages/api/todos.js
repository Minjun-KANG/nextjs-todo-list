"use strict";
(() => {
var exports = {};
exports.id = 826;
exports.ids = [826];
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

/***/ 20:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {
  if (req.method === "GET") {
    try {
      const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todo.getList */ .Z.todo.getList();
      res.statusCode = 200;
      return res.send(todos);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  if (req.method === "POST") {
    const {
      text,
      color
    } = req.body;

    if (!text || !color) {
      res.statusCode = 400;
      return res.send("text 혹은 color가 없습니다.");
    }

    const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todo.getList */ .Z.todo.getList();
    let todoId;

    if (todos.length > 0) {
      todoId = todos[todos.length - 1].id + 1;
    } else {
      todoId + 1;
    }

    const newTodo = {
      id: todoId,
      text,
      color,
      checked: false
    };
    _lib_data__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todo.write */ .Z.todo.write([...todos, newTodo]);
    res.statusCode = 200;
    res.end();
  }
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(20));
module.exports = __webpack_exports__;

})();