webpackHotUpdate("static/development/pages/tours.js",{

/***/ "./components/styles/Title.js":
/*!************************************!*\
  !*** ./components/styles/Title.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/jmmccasland/webdev/bk-bttr/ui/components/styles/Title.js";


var StyledSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Title__StyledSection",
  componentId: "sc-16nq74k-0"
})(["padding:", ";"], function (props) {
  return props.theme.gutter;
});
var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Title__StyledContainer",
  componentId: "sc-16nq74k-1"
})(["max-width:", ";margin:0 auto;"], function (props) {
  return props.theme.max_width;
});

var Section = function Section(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.withContainer ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.children) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./pages/tours.js":
/*!************************!*\
  !*** ./pages/tours.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_styles_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/Section */ "./components/styles/Section.js");
/* harmony import */ var _components_styles_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/Title */ "./components/styles/Title.js");
var _jsxFileName = "/Users/jmmccasland/webdev/bk-bttr/ui/pages/tours.js";





var Tours = function Tours(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    withContainer: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Tours"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "No tours yet."));
};

/* harmony default export */ __webpack_exports__["default"] = (Tours);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/tours")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=tours.js.3de5d064548913607233.hot-update.js.map