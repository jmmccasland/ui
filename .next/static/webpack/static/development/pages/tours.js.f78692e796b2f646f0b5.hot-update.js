webpackHotUpdate("static/development/pages/tours.js",{

/***/ "./components/styles/Button.js":
/*!*************************************!*\
  !*** ./components/styles/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/jmmccasland/webdev/bk-bttr/ui/components/styles/Button.js";



var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1sj4wx5-0"
})(["display:block;width:100%;max-width:25rem;margin:0 auto;padding:12px;border-radius:", " / 2;font-size:", ";font-weight:bold;cursor:pointer;&.submit,&.primary{background:", ";color:", ";}&:disabled{cursor:not-allowed;}&.disabled{color:", ";background:", ";}"], function (props) {
  return props.theme.border_radius;
}, function (props) {
  return props.theme.xs;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.disabled_text;
}, function (props) {
  return props.theme.disabled_bg;
});
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Button__StyledLink",
  componentId: "sc-1sj4wx5-1"
})(["display:block;width:100%;max-width:25rem;margin:0 auto;padding:12px;border-radius:calc(", " / 2);font-size:", ";font-weight:bold;cursor:pointer;&.submit,&.primary{background:", ";color:", ";}&:disabled{cursor:not-allowed;}&.disabled{color:", ";background:", ";}"], function (props) {
  return props.theme.border_radius;
}, function (props) {
  return props.theme.xs;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.disabled_text;
}, function (props) {
  return props.theme.disabled_bg;
});

var Button = function Button(props) {
  var as = props.as,
      handleClick = props.handleClick,
      href = props.href,
      variant = props.variant;

  if (as === 'link') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: variant,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, props.children, " goes to ", href)));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=tours.js.f78692e796b2f646f0b5.hot-update.js.map