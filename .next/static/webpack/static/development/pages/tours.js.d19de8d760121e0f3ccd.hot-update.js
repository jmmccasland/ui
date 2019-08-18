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
})(["width:100%;padding:12px;border-radius:$m-border-radius / 2;font-size:$f-xs;font-weight:bold;&.submit,&.primary{background:$c-blue;color:$c-white;}&:disabled{cursor:not-allowed;}&.disabled{color:$c-disabled-txt;background:$c-disabled-bg;}"]);
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "Button__StyledLink",
  componentId: "sc-1sj4wx5-1"
})(["width:100%;padding:12px;border-radius:$m-border-radius / 2;font-size:$f-xs;font-weight:bold;&.submit,&.primary{background:$c-blue;color:$c-white;}&:disabled{cursor:not-allowed;}&.disabled{color:$c-disabled-txt;background:$c-disabled-bg;}"]);

var Button = function Button(props) {
  var as = props.as,
      handleClick = props.handleClick,
      href = props.href;

  if (as === 'link') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, props.children));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=tours.js.d19de8d760121e0f3ccd.hot-update.js.map