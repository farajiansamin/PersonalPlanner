"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/Components/GoalCard.tsx":
/*!*************************************!*\
  !*** ./app/Components/GoalCard.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GoalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoalItem */ \"(app-pages-browser)/./app/Components/GoalItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GoalCard(props) {\n    _s();\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [goals, setGoal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleChange(event) {\n        setInputText(event.target.value);\n    }\n    function handleClick(event) {\n        event.preventDefault();\n        setGoal((prevGoals)=>{\n            return [\n                ...prevGoals,\n                inputText\n            ];\n        });\n        setInputText(\"\");\n    }\n    function deleteItem(id) {\n        setGoal((prevGoals)=>{\n            return prevGoals.filter((goals, index)=>{\n                return index !== id;\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        tabIndex: 0,\n        className: \"  z-30 absolute collapse bg-[#ee9191]  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner- Goal Settting\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse-title\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner- Goal Settting\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" z-30  collapse-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-disc pl-5\",\n                        children: goals.map((goal, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                id: index,\n                                text: goal,\n                                onChecked: deleteItem\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner- Goal Settting\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner- Goal Settting\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, this),\n                    props.goals,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Type here\",\n                                    className: \"input input-bordered w-full max-w-xs\",\n                                    onChange: handleChange,\n                                    name: \"Goal\",\n                                    value: inputText\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner- Goal Settting\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleClick,\n                                    className: \"btn btn-sm m-2 \",\n                                    children: \"ADD\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner- Goal Settting\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner- Goal Settting\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner- Goal Settting\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner- Goal Settting\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner- Goal Settting\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(GoalCard, \"iSFqgBmHjUxH5U7h6ON/AiKLvFc=\");\n_c = GoalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoalCard);\nvar _c;\n$RefreshReg$(_c, \"GoalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL0dvYWxDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ047QUFFbEMsU0FBU0csU0FBU0MsS0FBSzs7SUFDbkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sT0FBT0MsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3BDLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUzQyxTQUFTVSxhQUFhQyxLQUFLO1FBQ3ZCTixhQUFhTSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDbkM7SUFHQSxTQUFTQyxZQUFZSCxLQUFLO1FBQ3RCQSxNQUFNSSxjQUFjO1FBQ3BCUixRQUFRLENBQUNTO1lBQ1AsT0FBTzttQkFBSUE7Z0JBQVdaO2FBQVU7UUFDbEM7UUFDQUMsYUFBYTtJQUNmO0lBRUYsU0FBU1ksV0FBV0MsRUFBRTtRQUNsQlgsUUFBUSxDQUFDUztZQUNQLE9BQU9BLFVBQVVHLE1BQU0sQ0FBQyxDQUFDYixPQUFPYztnQkFDOUIsT0FBT0EsVUFBVUY7WUFDbkI7UUFDRjtJQUNGO0lBT0oscUJBQ0UsOERBQUNHO1FBQUlDLFVBQVU7UUFBR0MsV0FBVTs7MEJBQzFCLDhEQUFDQztnQkFBTUMsTUFBSzs7Ozs7OzBCQUNaLDhEQUFDSjtnQkFBSUUsV0FBVTswQkFBa0JwQixNQUFNdUIsS0FBSzs7Ozs7OzBCQUM1Qyw4REFBQ0w7Z0JBQUlFLFdBQVU7O2tDQUNmLDhEQUFDSTt3QkFBR0osV0FBVTtrQ0FDUGpCLE1BQU1zQixHQUFHLENBQUMsQ0FBQ0MsTUFBTVQsc0JBRWQsOERBQUNuQixpREFBUUE7Z0NBQ1RpQixJQUFJRTtnQ0FDSlUsTUFBTUQ7Z0NBRU5FLFdBQVdkOytCQURORzs7Ozs7Ozs7OztvQkFpQlpqQixNQUFNRyxLQUFLO2tDQUNaLDhEQUFDZTt3QkFBSUUsV0FBVTtrQ0FDYiw0RUFBQ1M7OzhDQUNDLDhEQUFDUjtvQ0FDQ0MsTUFBSztvQ0FDTFEsYUFBWTtvQ0FDWlYsV0FBVTtvQ0FDVlcsVUFBVXhCO29DQUNWeUIsTUFBSztvQ0FDTHRCLE9BQU9UOzs7Ozs7OENBRVQsOERBQUNnQztvQ0FBT0MsU0FBU3ZCO29DQUFhUyxXQUFVOzhDQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEU7R0E1RVNyQjtLQUFBQTtBQThFVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvQ29tcG9uZW50cy9Hb2FsQ2FyZC50c3g/ZDIyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHb2FsSXRlbSBmcm9tIFwiLi9Hb2FsSXRlbVwiO1xyXG5cclxuZnVuY3Rpb24gR29hbENhcmQocHJvcHMpIHtcclxuICAgIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtnb2Fscywgc2V0R29hbF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaXNDaGVja2VkLCBzZXRJc0NoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIHNldElucHV0VGV4dChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0R29hbCgocHJldkdvYWxzKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gWy4uLnByZXZHb2FscywgaW5wdXRUZXh0XTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJbnB1dFRleHQoXCJcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVJdGVtKGlkKSB7XHJcbiAgICAgICAgc2V0R29hbCgocHJldkdvYWxzKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcHJldkdvYWxzLmZpbHRlcigoZ29hbHMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleCAhPT0gaWQ7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgIFxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cIiAgei0zMCBhYnNvbHV0ZSBjb2xsYXBzZSBiZy1bI2VlOTE5MV0gIFwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZS10aXRsZVwiPntwcm9wcy50aXRsZX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgei0zMCAgY29sbGFwc2UtY29udGVudFwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIHBsLTVcIj4gXHJcbiAgICAgICAgICAgIHtnb2Fscy5tYXAoKGdvYWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEdvYWxJdGVtXHJcbiAgICAgICAgICAgICAgICBpZD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICB0ZXh0PXtnb2FsfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17ZGVsZXRlSXRlbX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L3VsPlxyXG5cclxuXHJcblxyXG4gICAgICAgIHtwcm9wcy5nb2Fsc31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTFcIj5cclxuICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14c1wiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBuYW1lPVwiR29hbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBtLTIgXCI+QUREPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvYWxDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdvYWxJdGVtIiwiR29hbENhcmQiLCJwcm9wcyIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsImdvYWxzIiwic2V0R29hbCIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwicHJldkdvYWxzIiwiZGVsZXRlSXRlbSIsImlkIiwiZmlsdGVyIiwiaW5kZXgiLCJkaXYiLCJ0YWJJbmRleCIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInRpdGxlIiwidWwiLCJtYXAiLCJnb2FsIiwidGV4dCIsIm9uQ2hlY2tlZCIsImZvcm0iLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/GoalCard.tsx\n"));

/***/ })

});