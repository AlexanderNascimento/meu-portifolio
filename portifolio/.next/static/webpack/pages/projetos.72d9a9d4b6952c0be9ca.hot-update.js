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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        href: res.link,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().ContentProjects),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().HeaderCellProject),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              style: {
                backgroundColor: res.languageColor
              },
              children: res.language
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 11
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
              children: res.repo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 9
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            children: res.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 8
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().Line)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }, _this)]
    }, void 0, true);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Header_Header__WEBPACK_IMPORTED_MODULE_0__.default, {
      img: props.info.avatar_url,
      login: props.info.login
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
      children: displayrepo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamV0b3MuNzJkOWE5ZDRiNjk1MmMwYmU5Y2EuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBQ0EsNkJBQWUsb0NBQVVFLEtBQVYsRUFBaUI7QUFBQTs7QUFDOUIsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLEtBQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRixJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFBQyxHQUFHO0FBQUEsd0JBQ2hDO0FBQUEsOEJBQ0s7QUFBRyxZQUFJLEVBQUVBLEdBQUcsQ0FBQ0MsSUFBYjtBQUFBLCtCQUNEO0FBQUssbUJBQVMsRUFBRVIsZ0ZBQWhCO0FBQUEsa0NBRUU7QUFBSyxxQkFBUyxFQUFFQSxrRkFBaEI7QUFBQSxvQ0FDRTtBQUFHLG1CQUFLLEVBQUU7QUFBQ1csZ0JBQUFBLGVBQWUsRUFBRUosR0FBRyxDQUFDSztBQUF0QixlQUFWO0FBQUEsd0JBQWtETCxHQUFHLENBQUNNO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLHdCQUFLTixHQUFHLENBQUNKO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFPRTtBQUFBLHNCQUFJSSxHQUFHLENBQUNPO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREwsZUFhSTtBQUFLLGlCQUFTLEVBQUVkLHFFQUFXZTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYko7QUFBQSxvQkFEZ0M7QUFBQSxHQUFaLENBQXBCO0FBaUJBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsOERBQUQ7QUFBUSxTQUFHLEVBQUViLEtBQUssQ0FBQ2MsSUFBTixDQUFXQyxVQUF4QjtBQUFvQyxXQUFLLEVBQUVmLEtBQUssQ0FBQ2MsSUFBTixDQUFXRTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBRWxCLDBFQUFoQjtBQUFBLGdCQUVHSztBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBV0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamV0b3MuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9Db21wb25lbnRzL0hlYWRlci9IZWFkZXInXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gIGNvbnN0IHJlcG8gPSBwcm9wcy5yZXBvc1xyXG4gIGNvbnN0IGRpc3BsYXlyZXBvID0gcmVwby5tYXAocmVzID0+XHJcbiAgPD5cclxuICAgICAgIDxhIGhyZWY9e3Jlcy5saW5rfSA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29udGVudFByb2plY3RzfT5cclxuICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyQ2VsbFByb2plY3R9PlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHJlcy5sYW5ndWFnZUNvbG9yIH19PntyZXMubGFuZ3VhZ2V9PC9wPlxyXG4gICAgICAgICAgPGgyPntyZXMucmVwb308L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8cD57cmVzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5MaW5lfS8+XHJcbiAgICA8Lz5cclxuICApXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgaW1nPXtwcm9wcy5pbmZvLmF2YXRhcl91cmx9IGxvZ2luPXtwcm9wcy5pbmZvLmxvZ2lufT48L0hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG5cclxuICAgICAgICB7ZGlzcGxheXJlcG99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcblxyXG5cclxuICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5cclxuXHJcbiAgY29uc3QgaW5mb3Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZW1lcnNvbi1kb3VnbGFzJykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2doLXBpbm5lZC1yZXBvcy5lZ29pc3Quc2gvP3VzZXJuYW1lPWVtZXJzb24tZG91Z2xhcycpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICByZXBvczogcmVzcG9uc2UsXHJcbiAgICAgIGluZm86IGluZm9yZXNwb25zZSxcclxuICAgIH1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiSGVhZGVyIiwicHJvcHMiLCJyZXBvIiwicmVwb3MiLCJkaXNwbGF5cmVwbyIsIm1hcCIsInJlcyIsImxpbmsiLCJDb250ZW50UHJvamVjdHMiLCJIZWFkZXJDZWxsUHJvamVjdCIsImJhY2tncm91bmRDb2xvciIsImxhbmd1YWdlQ29sb3IiLCJsYW5ndWFnZSIsImRlc2NyaXB0aW9uIiwiTGluZSIsImluZm8iLCJhdmF0YXJfdXJsIiwibG9naW4iLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9