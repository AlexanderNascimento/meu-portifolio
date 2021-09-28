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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().HeaderCellPri),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            style: {
              color: 'white',
              backgroundColor: res.languageColor,
              borderRadius: '25%'
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
      }, _this)
    }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamV0b3MuMDY2Yjg4NTNiNWI1MWE4ZTI4YWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBQ0EsNkJBQWUsb0NBQVVFLEtBQVYsRUFBaUI7QUFBQTs7QUFDOUIsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLEtBQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRixJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFBQyxHQUFHO0FBQUEsd0JBQzlCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFUCxnRkFBaEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVBLDhFQUFoQjtBQUFBLGtDQUNFO0FBQUcsaUJBQUssRUFBRTtBQUFFVSxjQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsY0FBQUEsZUFBZSxFQUFFSixHQUFHLENBQUNLLGFBQXZDO0FBQXNEQyxjQUFBQSxZQUFZLEVBQUU7QUFBcEUsYUFBVjtBQUFBLHNCQUF3Rk4sR0FBRyxDQUFDTztBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxzQkFBS1AsR0FBRyxDQUFDSjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBQSxvQkFBSUksR0FBRyxDQUFDUTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBRDhCO0FBQUEsR0FBWixDQUFwQjtBQWNBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsOERBQUQ7QUFBUSxTQUFHLEVBQUViLEtBQUssQ0FBQ2MsSUFBTixDQUFXQyxVQUF4QjtBQUFvQyxXQUFLLEVBQUVmLEtBQUssQ0FBQ2MsSUFBTixDQUFXRTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBRWxCLDBFQUFoQjtBQUFBLGdCQUVHSztBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBV0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamV0b3MuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9Db21wb25lbnRzL0hlYWRlci9IZWFkZXInXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gIGNvbnN0IHJlcG8gPSBwcm9wcy5yZXBvc1xyXG4gIGNvbnN0IGRpc3BsYXlyZXBvID0gcmVwby5tYXAocmVzID0+XHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbnRlbnRQcm9qZWN0c30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJDZWxsUHJpfT5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBiYWNrZ3JvdW5kQ29sb3I6IHJlcy5sYW5ndWFnZUNvbG9yLCBib3JkZXJSYWRpdXM6ICcyNSUnIH19PntyZXMubGFuZ3VhZ2V9PC9wPlxyXG4gICAgICAgICAgPGgyPntyZXMucmVwb308L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8cD57cmVzLmRlc2NyaXB0aW9ufTwvcD5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcblxyXG4gIClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciBpbWc9e3Byb3BzLmluZm8uYXZhdGFyX3VybH0gbG9naW49e3Byb3BzLmluZm8ubG9naW59PjwvSGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcblxyXG4gICAgICAgIHtkaXNwbGF5cmVwb31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuXHJcblxyXG4gIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcblxyXG5cclxuICBjb25zdCBpbmZvcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9lbWVyc29uLWRvdWdsYXMnKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZ2gtcGlubmVkLXJlcG9zLmVnb2lzdC5zaC8/dXNlcm5hbWU9ZW1lcnNvbi1kb3VnbGFzJykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHJlcG9zOiByZXNwb25zZSxcclxuICAgICAgaW5mbzogaW5mb3Jlc3BvbnNlLFxyXG4gICAgfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJIZWFkZXIiLCJwcm9wcyIsInJlcG8iLCJyZXBvcyIsImRpc3BsYXlyZXBvIiwibWFwIiwicmVzIiwiQ29udGVudFByb2plY3RzIiwiSGVhZGVyQ2VsbFByaSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGFuZ3VhZ2VDb2xvciIsImJvcmRlclJhZGl1cyIsImxhbmd1YWdlIiwiZGVzY3JpcHRpb24iLCJpbmZvIiwiYXZhdGFyX3VybCIsImxvZ2luIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==