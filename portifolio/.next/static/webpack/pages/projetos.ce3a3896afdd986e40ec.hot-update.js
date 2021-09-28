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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
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
            lineNumber: 9,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
            children: res.repo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: res.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().Line)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
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
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
      children: displayrepo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamV0b3MuY2UzYTM4OTZhZmRkOTg2ZTQwZWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBQ0EsNkJBQWUsb0NBQVVFLEtBQVYsRUFBaUI7QUFBQTs7QUFDOUIsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLEtBQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRixJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFBQyxHQUFHO0FBQUEsd0JBQ2hDO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFUCxnRkFBaEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVBLGtGQUFoQjtBQUFBLGtDQUNFO0FBQUcsaUJBQUssRUFBRTtBQUFDVSxjQUFBQSxlQUFlLEVBQUVILEdBQUcsQ0FBQ0k7QUFBdEIsYUFBVjtBQUFBLHNCQUFrREosR0FBRyxDQUFDSztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxzQkFBS0wsR0FBRyxDQUFDSjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBQSxvQkFBSUksR0FBRyxDQUFDTTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFVSTtBQUFLLGlCQUFTLEVBQUViLHFFQUFXYztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVko7QUFBQSxvQkFEZ0M7QUFBQSxHQUFaLENBQXBCO0FBY0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyw4REFBRDtBQUFRLFNBQUcsRUFBRVosS0FBSyxDQUFDYSxJQUFOLENBQVdDLFVBQXhCO0FBQW9DLFdBQUssRUFBRWQsS0FBSyxDQUFDYSxJQUFOLENBQVdFO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFFakIsMEVBQWhCO0FBQUEsZ0JBRUdLO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFXRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZXRvcy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcidcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgY29uc3QgcmVwbyA9IHByb3BzLnJlcG9zXHJcbiAgY29uc3QgZGlzcGxheXJlcG8gPSByZXBvLm1hcChyZXMgPT5cclxuICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbnRlbnRQcm9qZWN0c30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJDZWxsUHJvamVjdH0+XHJcbiAgICAgICAgICA8cCBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcmVzLmxhbmd1YWdlQ29sb3IgfX0+e3Jlcy5sYW5ndWFnZX08L3A+XHJcbiAgICAgICAgICA8aDI+e3Jlcy5yZXBvfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxwPntyZXMuZGVzY3JpcHRpb259PC9wPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTGluZX0vPlxyXG4gICAgPC8+XHJcbiAgKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIGltZz17cHJvcHMuaW5mby5hdmF0YXJfdXJsfSBsb2dpbj17cHJvcHMuaW5mby5sb2dpbn0+PC9IZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHJcbiAgICAgICAge2Rpc3BsYXlyZXBvfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG5cclxuXHJcbiAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuXHJcblxyXG4gIGNvbnN0IGluZm9yZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2VtZXJzb24tZG91Z2xhcycpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9naC1waW5uZWQtcmVwb3MuZWdvaXN0LnNoLz91c2VybmFtZT1lbWVyc29uLWRvdWdsYXMnKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcmVwb3M6IHJlc3BvbnNlLFxyXG4gICAgICBpbmZvOiBpbmZvcmVzcG9uc2UsXHJcbiAgICB9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkhlYWRlciIsInByb3BzIiwicmVwbyIsInJlcG9zIiwiZGlzcGxheXJlcG8iLCJtYXAiLCJyZXMiLCJDb250ZW50UHJvamVjdHMiLCJIZWFkZXJDZWxsUHJvamVjdCIsImJhY2tncm91bmRDb2xvciIsImxhbmd1YWdlQ29sb3IiLCJsYW5ndWFnZSIsImRlc2NyaXB0aW9uIiwiTGluZSIsImluZm8iLCJhdmF0YXJfdXJsIiwibG9naW4iLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9