webpackHotUpdate_N_E("pages/[slug]",{

/***/ "./components/seo.js":
/*!***************************!*\
  !*** ./components/seo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nvar Head = function Head(_ref) {\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'Note 蓝银草' : _ref$title,\n      _ref$description = _ref.description,\n      description = _ref$description === void 0 ? '蓝银草' : _ref$description,\n      image = _ref.image,\n      children = _ref.children;\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"title\", {\n      children: title\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"og:title\",\n      content: title\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"description\",\n      content: description\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"og:description\",\n      content: description\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1.0\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      httpEquiv: \"Content-Language\",\n      content: \"en\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"twitter:site\",\n      content: \"\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"apple-mobile-web-app-title\",\n      content: \"whatthefuck.is\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"author\",\n      content: \"\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"link\", {\n      rel: \"alternate\",\n      type: \"application/rss+xml\",\n      title: \"RSS Feed Note\",\n      href: \"/feed.xml\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"msapplication-TileColor\",\n      content: \"#ffffff\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\", {\n      name: \"theme-color\",\n      content: \"#ffffff\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"link\", {\n      rel: \"preload\",\n      href: \"https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2\",\n      as: \"font\",\n      type: \"font/woff2\",\n      crossOrigin: \"anonymous\"\n    }), children]\n  });\n};\n\n_c = Head;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\n\nvar _c;\n\n$RefreshReg$(_c, \"Head\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZW8uanM/NTI0MiJdLCJuYW1lcyI6WyJIZWFkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUtQO0FBQUEsd0JBSkpDLEtBSUk7QUFBQSxNQUpKQSxLQUlJLDJCQUpJLFVBSUo7QUFBQSw4QkFISkMsV0FHSTtBQUFBLE1BSEpBLFdBR0ksaUNBSFUsS0FHVjtBQUFBLE1BRkpDLEtBRUksUUFGSkEsS0FFSTtBQUFBLE1BREpDLFFBQ0ksUUFESkEsUUFDSTtBQUNKLHNCQUNFLCtEQUFDLGdEQUFEO0FBQUEsNEJBRUU7QUFBQSxnQkFBUUg7QUFBUixNQUZGLGVBR0U7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUVBO0FBQS9CLE1BSEYsZUFNRTtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBRUM7QUFBbEMsTUFORixlQU9FO0FBQU0sVUFBSSxFQUFDLGdCQUFYO0FBQTRCLGFBQU8sRUFBRUE7QUFBckMsTUFQRixlQVVFO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBc0IsYUFBTyxFQUFDO0FBQTlCLE1BVkYsZUFXRTtBQUFNLGVBQVMsRUFBQyxrQkFBaEI7QUFBbUMsYUFBTyxFQUFDO0FBQTNDLE1BWEYsZUFhRTtBQUFNLFVBQUksRUFBQyxjQUFYO0FBQTBCLGFBQU8sRUFBQztBQUFsQyxNQWJGLGVBY0U7QUFBTSxVQUFJLEVBQUMsNEJBQVg7QUFBd0MsYUFBTyxFQUFDO0FBQWhELE1BZEYsZUFlRTtBQUFNLFVBQUksRUFBQyxRQUFYO0FBQW9CLGFBQU8sRUFBQztBQUE1QixNQWZGLGVBa0JFO0FBQ0UsU0FBRyxFQUFDLFdBRE47QUFFRSxVQUFJLEVBQUMscUJBRlA7QUFHRSxXQUFLLEVBQUMsZUFIUjtBQUlFLFVBQUksRUFBQztBQUpQLE1BbEJGLGVBMEJFO0FBQU0sVUFBSSxFQUFDLHlCQUFYO0FBQXFDLGFBQU8sRUFBQztBQUE3QyxNQTFCRixlQTJCRTtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBQztBQUFqQyxNQTNCRixlQThCRTtBQUNFLFNBQUcsRUFBQyxTQUROO0FBRUUsVUFBSSxFQUFDLGdGQUZQO0FBR0UsUUFBRSxFQUFDLE1BSEw7QUFJRSxVQUFJLEVBQUMsWUFKUDtBQUtFLGlCQUFXLEVBQUM7QUFMZCxNQTlCRixFQXNDR0UsUUF0Q0g7QUFBQSxJQURGO0FBMENELENBaEREOztLQUFNSixJO0FBa0RTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2VvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgSGVhZCA9ICh7XG4gIHRpdGxlID0gJ05vdGUg6JOd6ZO26I2JJyxcbiAgZGVzY3JpcHRpb24gPSAn6JOd6ZO26I2JJyxcbiAgaW1hZ2UsXG4gIGNoaWxkcmVuLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxOZXh0SGVhZD5cbiAgICAgIHsvKiBUaXRsZSAqL31cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuXG4gICAgICB7LyogRGVzY3JpcHRpb24gKi99XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuXG4gICAgICB7LyogR2VuZXJhbCAqL31cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIkNvbnRlbnQtTGFuZ3VhZ2VcIiBjb250ZW50PVwiZW5cIiAvPlxuXG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIlwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwid2hhdHRoZWZ1Y2suaXNcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJcIiAvPlxuXG4gICAgICB7LyogUlNTIGZlZWQgKi99XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJhbHRlcm5hdGVcIlxuICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vcnNzK3htbFwiXG4gICAgICAgIHRpdGxlPVwiUlNTIEZlZWQgTm90ZVwiXG4gICAgICAgIGhyZWY9XCIvZmVlZC54bWxcIlxuICAgICAgLz5cblxuICAgICAgey8qIFRPRE86IEZhdmljb25zICovfVxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuXG4gICAgICB7LyogSW50ZXIgZm9udCAqL31cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9hc3NldHMudmVyY2VsLmNvbS9yYXcvdXBsb2FkL3YxNTg3NDE1MzAxL2ZvbnRzLzIvaW50ZXItdmFyLWxhdGluLndvZmYyXCJcbiAgICAgICAgYXM9XCJmb250XCJcbiAgICAgICAgdHlwZT1cImZvbnQvd29mZjJcIlxuICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXG4gICAgICAvPlxuXG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9OZXh0SGVhZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/seo.js\n");

/***/ })

})