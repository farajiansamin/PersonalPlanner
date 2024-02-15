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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GoalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoalItem */ \"(app-pages-browser)/./app/Components/GoalItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GoalCard(props) {\n    _s();\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [goals, setGoal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function handleChange(event) {\n        setInputText(event.target.value);\n    }\n    function handleClick(event) {\n        event.preventDefault();\n        setGoal((prevGoals)=>{\n            return [\n                ...prevGoals,\n                inputText\n            ];\n        });\n        setInputText(\"\");\n    }\n    function deleteItem(id) {\n        setGoal((prevGoals)=>{\n            return prevGoals.filter((goals, index)=>{\n                return index !== id;\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        tabIndex: 0,\n        className: \"  z-30   collapse bg-[#fdf2bf]  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse-title\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" container collapse-content  z-30  \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-70 gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc  \",\n                            children: goals.map((goal, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    id: index,\n                                    text: goal,\n                                    onChecked: deleteItem\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        props.goals,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-actions flex flex-row gap-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Type here\",\n                                        className: \"input input-sm pb-1 input-bordered w-full max-w-xs\",\n                                        onChange: handleChange,\n                                        name: \"Goal\",\n                                        value: inputText\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dropdown\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                tabIndex: 0,\n                                                role: \"button\",\n                                                className: \"btn m-1\",\n                                                children: \"Click\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                tabIndex: 0,\n                                                className: \"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            children: \"Item 1\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                            lineNumber: 66,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            children: \"Item 2\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(GoalCard, \"trfIM5cAtHZeqcWWO1JQa1R8Lnc=\");\n_c = GoalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoalCard);\nvar _c;\n$RefreshReg$(_c, \"GoalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL0dvYWxDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ047QUFHbEMsU0FBU0csU0FBU0MsS0FBSzs7SUFDckIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sT0FBT0MsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXBDLFNBQVNRLGFBQWFDLEtBQUs7UUFDekJKLGFBQWFJLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNqQztJQUVBLFNBQVNDLFlBQVlILEtBQUs7UUFDeEJBLE1BQU1JLGNBQWM7UUFDcEJOLFFBQVEsQ0FBQ087WUFDUCxPQUFPO21CQUFJQTtnQkFBV1Y7YUFBVTtRQUNsQztRQUNBQyxhQUFhO0lBQ2Y7SUFFQSxTQUFTVSxXQUFXQyxFQUFFO1FBQ3BCVCxRQUFRLENBQUNPO1lBQ1AsT0FBT0EsVUFBVUcsTUFBTSxDQUFDLENBQUNYLE9BQU9ZO2dCQUM5QixPQUFPQSxVQUFVRjtZQUNuQjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsVUFBVTtRQUFHQyxXQUFVOzswQkFDMUIsOERBQUNDO2dCQUFNQyxNQUFLOzs7Ozs7MEJBQ1osOERBQUNKO2dCQUFJRSxXQUFVOzBCQUFrQmxCLE1BQU1xQixLQUFLOzs7Ozs7MEJBQzVDLDhEQUFDTDtnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ0Y7b0JBQUlFLFdBQVU7O3NDQUNiLDhEQUFDSTs0QkFBR0osV0FBVTtzQ0FDWGYsTUFBTW9CLEdBQUcsQ0FBQyxDQUFDQyxNQUFNVCxzQkFDaEIsOERBQUNqQixpREFBUUE7b0NBQ1BlLElBQUlFO29DQUNKVSxNQUFNRDtvQ0FFTkUsV0FBV2Q7bUNBRE5HOzs7Ozs7Ozs7O3dCQUtWZixNQUFNRyxLQUFLO3NDQUNaLDhEQUFDYTs0QkFBSUUsV0FBVTtzQ0FDYiw0RUFBQ1M7O2tEQUNDLDhEQUFDUjt3Q0FDQ0MsTUFBSzt3Q0FDTFEsYUFBWTt3Q0FDWlYsV0FBVTt3Q0FDVlcsVUFBVXhCO3dDQUNWeUIsTUFBSzt3Q0FDTHRCLE9BQU9QOzs7Ozs7a0RBRVQsOERBQUNlO3dDQUFJRSxXQUFVOzswREFDYiw4REFBQ0Y7Z0RBQUlDLFVBQVU7Z0RBQUdjLE1BQUs7Z0RBQVNiLFdBQVU7MERBQVU7Ozs7OzswREFHcEQsOERBQUNJO2dEQUNDTCxVQUFVO2dEQUNWQyxXQUFVOztrRUFFViw4REFBQ2M7a0VBQ0MsNEVBQUNDO3NFQUFFOzs7Ozs7Ozs7OztrRUFFTCw4REFBQ0Q7a0VBQ0MsNEVBQUNDO3NFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVdkI7R0F6RVNsQztLQUFBQTtBQTJFVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvQ29tcG9uZW50cy9Hb2FsQ2FyZC50c3g/ZDIyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHb2FsSXRlbSBmcm9tIFwiLi9Hb2FsSXRlbVwiO1xyXG5cclxuaW1wb3J0IEdvYWxDYXRlZ29yeUNhcmQgZnJvbSBcIi4vR29hbENhdGVnb3J5Q2FyZFwiO1xyXG5mdW5jdGlvbiBHb2FsQ2FyZChwcm9wcykge1xyXG4gIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZ29hbHMsIHNldEdvYWxdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHNldElucHV0VGV4dChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRHb2FsKChwcmV2R29hbHMpID0+IHtcclxuICAgICAgcmV0dXJuIFsuLi5wcmV2R29hbHMsIGlucHV0VGV4dF07XHJcbiAgICB9KTtcclxuICAgIHNldElucHV0VGV4dChcIlwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oaWQpIHtcclxuICAgIHNldEdvYWwoKHByZXZHb2FscykgPT4ge1xyXG4gICAgICByZXR1cm4gcHJldkdvYWxzLmZpbHRlcigoZ29hbHMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICE9PSBpZDtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCIgIHotMzAgICBjb2xsYXBzZSBiZy1bI2ZkZjJiZl0gIFwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZS10aXRsZVwiPntwcm9wcy50aXRsZX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY29udGFpbmVyIGNvbGxhcHNlLWNvbnRlbnQgIHotMzAgIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTcwIGdhcC0zXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjICBcIj5cclxuICAgICAgICAgICAge2dvYWxzLm1hcCgoZ29hbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8R29hbEl0ZW1cclxuICAgICAgICAgICAgICAgIGlkPXtpbmRleH1cclxuICAgICAgICAgICAgICAgIHRleHQ9e2dvYWx9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgb25DaGVja2VkPXtkZWxldGVJdGVtfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIHtwcm9wcy5nb2Fsc31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGZsZXggZmxleC1yb3cgZ2FwLTFcIj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1zbSBwYi0xIGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14c1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIkdvYWxcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VGV4dH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdGFiSW5kZXg9ezB9IHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIENsaWNrXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICB0YWJJbmRleD17MH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudCB6LVsxXSBtZW51IHAtMiBzaGFkb3cgYmctYmFzZS0xMDAgcm91bmRlZC1ib3ggdy01MlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5JdGVtIDE8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5JdGVtIDI8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb2FsQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJHb2FsSXRlbSIsIkdvYWxDYXJkIiwicHJvcHMiLCJpbnB1dFRleHQiLCJzZXRJbnB1dFRleHQiLCJnb2FscyIsInNldEdvYWwiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInByZXZHb2FscyIsImRlbGV0ZUl0ZW0iLCJpZCIsImZpbHRlciIsImluZGV4IiwiZGl2IiwidGFiSW5kZXgiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJ0aXRsZSIsInVsIiwibWFwIiwiZ29hbCIsInRleHQiLCJvbkNoZWNrZWQiLCJmb3JtIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm5hbWUiLCJyb2xlIiwibGkiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/GoalCard.tsx\n"));

/***/ })

});