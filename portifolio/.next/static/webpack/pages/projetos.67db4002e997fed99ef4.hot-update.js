"use strict";
self["webpackHotUpdate_N_E"]("pages/projetos",{

/***/ "./pages/projetos.jsx":
/*!****************************!*\
  !*** ./pages/projetos.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Header/Header */ "./Components/Header/Header.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\WhiteDemon\\Documents\\Projects\\React\\ReactJS\\meu-portifolio\\portifolio\\pages\\projetos.jsx";




var __N_SSG = true;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
  var _this = this;

  var repo = props.repos;
  var displayrepo = repo.map(function (res) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().ContentProjects),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          style: {
            color: 'white',
            backgroundColor: res.languageColor,
            borderRadius: '25%'
          },
          children: res.language
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          children: res.repo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: res.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }, _this)
    }, void 0, false);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Header_Header__WEBPACK_IMPORTED_MODULE_0__.default, {
      img: props.info.avatar_url,
      login: props.info.login
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
      children: displayrepo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamV0b3MuNjdkYjQwMDJlOTk3ZmVkOTllZjQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBQ0EsNkJBQWUsb0NBQVVFLEtBQVYsRUFBaUI7QUFBQTs7QUFDOUIsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLEtBQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRixJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFBQyxHQUFHO0FBQUEsd0JBQzlCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFUCxnRkFBaEI7QUFBQSxnQ0FDQTtBQUFHLGVBQUssRUFBRTtBQUFFUyxZQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsWUFBQUEsZUFBZSxFQUFFSCxHQUFHLENBQUNJLGFBQXZDO0FBQXNEQyxZQUFBQSxZQUFZLEVBQUU7QUFBcEUsV0FBVjtBQUFBLG9CQUF3RkwsR0FBRyxDQUFDTTtBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBRUU7QUFBQSxvQkFBS04sR0FBRyxDQUFDSjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBLG9CQUFJSSxHQUFHLENBQUNPO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFEOEI7QUFBQSxHQUFaLENBQXBCO0FBV0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyw4REFBRDtBQUFRLFNBQUcsRUFBRVosS0FBSyxDQUFDYSxJQUFOLENBQVdDLFVBQXhCO0FBQW9DLFdBQUssRUFBRWQsS0FBSyxDQUFDYSxJQUFOLENBQVdFO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFFakIsMEVBQWhCO0FBQUEsZ0JBRUdLO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFXRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZXRvcy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcidcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgY29uc3QgcmVwbyA9IHByb3BzLnJlcG9zXHJcbiAgY29uc3QgZGlzcGxheXJlcG8gPSByZXBvLm1hcChyZXMgPT5cclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29udGVudFByb2plY3RzfT5cclxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGJhY2tncm91bmRDb2xvcjogcmVzLmxhbmd1YWdlQ29sb3IsIGJvcmRlclJhZGl1czogJzI1JScgfX0+e3Jlcy5sYW5ndWFnZX08L3A+XHJcbiAgICAgICAgPGgyPntyZXMucmVwb308L2gyPlxyXG4gICAgICAgIDxwPntyZXMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG5cclxuICApXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgaW1nPXtwcm9wcy5pbmZvLmF2YXRhcl91cmx9IGxvZ2luPXtwcm9wcy5pbmZvLmxvZ2lufT48L0hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG5cclxuICAgICAgICB7ZGlzcGxheXJlcG99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcblxyXG5cclxuICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5cclxuXHJcbiAgY29uc3QgaW5mb3Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZW1lcnNvbi1kb3VnbGFzJykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2doLXBpbm5lZC1yZXBvcy5lZ29pc3Quc2gvP3VzZXJuYW1lPWVtZXJzb24tZG91Z2xhcycpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICByZXBvczogcmVzcG9uc2UsXHJcbiAgICAgIGluZm86IGluZm9yZXNwb25zZSxcclxuICAgIH1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiSGVhZGVyIiwicHJvcHMiLCJyZXBvIiwicmVwb3MiLCJkaXNwbGF5cmVwbyIsIm1hcCIsInJlcyIsIkNvbnRlbnRQcm9qZWN0cyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGFuZ3VhZ2VDb2xvciIsImJvcmRlclJhZGl1cyIsImxhbmd1YWdlIiwiZGVzY3JpcHRpb24iLCJpbmZvIiwiYXZhdGFyX3VybCIsImxvZ2luIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==