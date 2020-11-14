webpackHotUpdate_N_E("pages/[slug]",{

/***/ "./components/seo.js":
/*!***************************!*\
  !*** ./components/seo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nvar Head = function Head(_ref) {\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'Note 蓝银草' : _ref$title,\n      _ref$description = _ref.description,\n      description = _ref$description === void 0 ? '蓝银草' : _ref$description,\n      image = _ref.image,\n      children = _ref.children;\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"title\", {\n      children: title\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"og:title\",\n      content: title\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"description\",\n      content: description\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"og:description\",\n      content: description\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1.0\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      httpEquiv: \"Content-Language\",\n      content: \"en\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"twitter:site\",\n      content: \"@dan_abramov\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"apple-mobile-web-app-title\",\n      content: \"whatthefuck.is\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"author\",\n      content: \"Dan Abramov\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"link\", {\n      rel: \"alternate\",\n      type: \"application/rss+xml\",\n      title: \"RSS Feed for whatthefuck.is\",\n      href: \"/feed.xml\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"msapplication-TileColor\",\n      content: \"#ffffff\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"theme-color\",\n      content: \"#ffffff\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"link\", {\n      rel: \"preload\",\n      href: \"https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2\",\n      as: \"font\",\n      type: \"font/woff2\",\n      crossOrigin: \"anonymous\"\n    }), children]\n  });\n};\n\n_c = Head;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\n\nvar _c;\n\n$RefreshReg$(_c, \"Head\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZW8uanM/NTI0MiJdLCJuYW1lcyI6WyJIZWFkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUtQO0FBQUEsd0JBSkpDLEtBSUk7QUFBQSxNQUpKQSxLQUlJLDJCQUpJLFVBSUo7QUFBQSw4QkFISkMsV0FHSTtBQUFBLE1BSEpBLFdBR0ksaUNBSFUsS0FHVjtBQUFBLE1BRkpDLEtBRUksUUFGSkEsS0FFSTtBQUFBLE1BREpDLFFBQ0ksUUFESkEsUUFDSTtBQUNKLHNCQUNFLCtEQUFDLGdEQUFEO0FBQUEsNEJBRUU7QUFBQSxnQkFBUUg7QUFBUixNQUZGLGVBR0U7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUVBO0FBQS9CLE1BSEYsZUFNRTtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBRUM7QUFBbEMsTUFORixlQU9FO0FBQU0sVUFBSSxFQUFDLGdCQUFYO0FBQTRCLGFBQU8sRUFBRUE7QUFBckMsTUFQRixlQVVFO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBc0IsYUFBTyxFQUFDO0FBQTlCLE1BVkYsZUFXRTtBQUFNLGVBQVMsRUFBQyxrQkFBaEI7QUFBbUMsYUFBTyxFQUFDO0FBQTNDLE1BWEYsZUFhRTtBQUFNLFVBQUksRUFBQyxjQUFYO0FBQTBCLGFBQU8sRUFBQztBQUFsQyxNQWJGLGVBY0U7QUFBTSxVQUFJLEVBQUMsNEJBQVg7QUFBd0MsYUFBTyxFQUFDO0FBQWhELE1BZEYsZUFlRTtBQUFNLFVBQUksRUFBQyxRQUFYO0FBQW9CLGFBQU8sRUFBQztBQUE1QixNQWZGLGVBa0JFO0FBQ0UsU0FBRyxFQUFDLFdBRE47QUFFRSxVQUFJLEVBQUMscUJBRlA7QUFHRSxXQUFLLEVBQUMsNkJBSFI7QUFJRSxVQUFJLEVBQUM7QUFKUCxNQWxCRixlQTBCRTtBQUFNLFVBQUksRUFBQyx5QkFBWDtBQUFxQyxhQUFPLEVBQUM7QUFBN0MsTUExQkYsZUEyQkU7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUF5QixhQUFPLEVBQUM7QUFBakMsTUEzQkYsZUE4QkU7QUFDRSxTQUFHLEVBQUMsU0FETjtBQUVFLFVBQUksRUFBQyxnRkFGUDtBQUdFLFFBQUUsRUFBQyxNQUhMO0FBSUUsVUFBSSxFQUFDLFlBSlA7QUFLRSxpQkFBVyxFQUFDO0FBTGQsTUE5QkYsRUFzQ0dFLFFBdENIO0FBQUEsSUFERjtBQTBDRCxDQWhERDs7S0FBTUosSTtBQWtEU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Nlby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0SGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IEhlYWQgPSAoe1xuICB0aXRsZSA9ICdOb3RlIOiTnemTtuiNiScsXG4gIGRlc2NyaXB0aW9uID0gJ+iTnemTtuiNiScsXG4gIGltYWdlLFxuICBjaGlsZHJlbixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TmV4dEhlYWQ+XG4gICAgICB7LyogVGl0bGUgKi99XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cblxuICAgICAgey8qIERlc2NyaXB0aW9uICovfVxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBuYW1lPVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cblxuICAgICAgey8qIEdlbmVyYWwgKi99XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LUxhbmd1YWdlXCIgY29udGVudD1cImVuXCIgLz5cblxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAZGFuX2FicmFtb3ZcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCIgY29udGVudD1cIndoYXR0aGVmdWNrLmlzXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiRGFuIEFicmFtb3ZcIiAvPlxuXG4gICAgICB7LyogUlNTIGZlZWQgKi99XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJhbHRlcm5hdGVcIlxuICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vcnNzK3htbFwiXG4gICAgICAgIHRpdGxlPVwiUlNTIEZlZWQgZm9yIHdoYXR0aGVmdWNrLmlzXCJcbiAgICAgICAgaHJlZj1cIi9mZWVkLnhtbFwiXG4gICAgICAvPlxuXG4gICAgICB7LyogVE9ETzogRmF2aWNvbnMgKi99XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG5cbiAgICAgIHsvKiBJbnRlciBmb250ICovfVxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgIGhyZWY9XCJodHRwczovL2Fzc2V0cy52ZXJjZWwuY29tL3Jhdy91cGxvYWQvdjE1ODc0MTUzMDEvZm9udHMvMi9pbnRlci12YXItbGF0aW4ud29mZjJcIlxuICAgICAgICBhcz1cImZvbnRcIlxuICAgICAgICB0eXBlPVwiZm9udC93b2ZmMlwiXG4gICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgIC8+XG5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L05leHRIZWFkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/seo.js\n");

/***/ })

})