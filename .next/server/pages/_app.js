"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/palette.tsx
var palette = __webpack_require__(172);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Header.tsx




const Container = external_styled_components_default().div.withConfig({
  displayName: "Header__Container",
  componentId: "sc-14r3i13-0"
})(["display:flex;align-items:center;width:100%;height:52px;padding:0 12px;border-bottom:1px solid ", ";h1{font-size:21px;}"], palette/* default.gray */.Z.gray);

const Header = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Minjun-Kang's TodoList"
    })
  });
};

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: external "styled-reset"
const external_styled_reset_namespaceObject = require("styled-reset");
var external_styled_reset_default = /*#__PURE__*/__webpack_require__.n(external_styled_reset_namespaceObject);
;// CONCATENATED MODULE: ./styles/GlobalStyle.tsx


const globalStyle = (0,external_styled_components_.css)(["", ";*{box-sizing:border-box;}body{font-family:Noto Sans,Noto Sans KR;}"], (external_styled_reset_default()));
const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["", ""], globalStyle);
/* harmony default export */ const styles_GlobalStyle = (GlobalStyle);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./components/Footer.tsx





const Footer_Container = external_styled_components_default().footer.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-nawktz-0"
})(["width:100%;height:53px;position:fixed;bottom:0;border-top:1px solid ", ";display:flex;justify-content:center;align-items:center;background-color:white;.footer-button{font-size:32px;width:32px;height:32px;border-radius:5px;border:1px solid black;display:flex;justify-content:center;align-items:center;background-color:white;padding:0;line-height:0;outline:none;}"], palette/* default.gray */.Z.gray);

const Footer = () => {
  const router = (0,router_.useRouter)();
  const isMain = router.pathname === "/";
  return /*#__PURE__*/jsx_runtime_.jsx(Footer_Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx("button", {
      type: "button",
      className: "footer-button",
      onClick: () => router.push(isMain ? "/todo/add" : "/"),
      children: isMain ? "+" : "-"
    })
  });
};

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: ./store/index.tsx
var store = __webpack_require__(794);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const app = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(styles_GlobalStyle, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
}; //기존 코드 : export default app
//하위 컴포넌트에게 redux 스토어로 값을 전달하기 위해 래핑


/* harmony default export */ const _app = (store/* wrapper.withRedux */.Y.withRedux(app));

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [999], () => (__webpack_exec__(132)));
module.exports = __webpack_exports__;

})();