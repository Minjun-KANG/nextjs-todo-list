"use strict";
exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ wrapper)
/* harmony export */ });
/* unused harmony export useSelector */
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(672);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //???????????? ???????????? ????????????, combineReducers??? ???????????? ????????? ??????

const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  todo: _todo__WEBPACK_IMPORTED_MODULE_1__/* ["default"].reducer */ .Z.reducer
}); // ????????? ????????? ????????? HYDRATE(__NEXT_REDUX_WRAPPER_HYDRATE__)???
// ???????????? ????????????, hydrate??? ???????????? ?????????
// ????????? ???????????? ????????????????????? ????????? ??? ????????? ????????????.

const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE) {
    const nextState = _objectSpread(_objectSpread({}, state), action.payload);

    if (state.count) {
      nextState.count = state.count;
    }

    return nextState;
  }

  return rootReducer(state, action);
}; //????????? ????????? ?????? ???????????? ?????? ?????????


//???????????? ????????? ?????? ????????? enhancer
//????????? ???????????? : ????????? ???????????? ??????, ??????????????? ???????????? ?????? ????????? ????????? ????????? ??????
//production??? ?????? ????????? chrome ????????? ????????? ?????? ???????????? ??????
// const bindMiddleware = (middleware: any) => {
// 	if (process.env.NODE_ENV !== "production") {
// 		const { composeWithDevTools } = require("redux-devtools-extension");
// 		return composeWithDevTools(applyMiddleware(...middleware));
// 	}
// 	return applyMiddleware(...middleware);
// };
//?????? ?????? ????????? ?????? -> version issue??? RTK??? confiureStore??? ??????
// const initStore = () => {
// 	return createStore(reducer, bindMiddleware([]));
// };
const initStore = () => {
  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
    reducer,
    devTools: true
  });
};


const useSelector = (/* unused pure expression or super */ null && (useReduxSelector));
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(initStore);

/***/ }),

/***/ 672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ todoActions),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  todos: []
};
const todo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "todo",
  initialState,
  reducers: {
    setTodo(state, action) {
      state.todos = action.payload;
    }

  }
});
const todoActions = _objectSpread({}, todo.actions);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo); // //rule 3 - defined action type
// export const INIT_TODO_LIST = "todo/INIT_TODO_LIST";
// //rule 2 - defined action constructor
// export const setTodo = (payload: TodoType[]) => {
// 	return {
// 		type: INIT_TODO_LIST,
// 		payload,
// 	};
// };
// export const todoActions = { setTodo };
// interface TodoReduxState {
// 	todos: TodoType[];
// }
// //init state
// const initialState: TodoReduxState = {
// 	todos: [],
// };
// //rule 1 - reducer
// export default function reducer(state = initialState, action: any) {
// 	switch (action.type) {
// 		case SET_TODO_LIST:
// 			const newState = { ...state, todos: action.payload };
// 			return newState;
// 		default:
// 			return state;
// 	}
// }

/***/ }),

/***/ 172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  red: "#FFAFB0",
  orange: "#FFC282",
  yellow: "#FCFFB0",
  green: "#E2FFAF",
  blue: "#AEE4FF",
  navy: "#B5C7ED",
  gray: "#E5E5E5",
  deep_red: "#F35456",
  deep_green: "#47E774"
});

/***/ })

};
;