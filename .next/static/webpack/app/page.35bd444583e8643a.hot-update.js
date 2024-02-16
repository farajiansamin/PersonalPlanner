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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GoalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoalItem */ \"(app-pages-browser)/./app/Components/GoalItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GoalCard(props) {\n    _s();\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [goals, setGoal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: \"\",\n            title: \"\",\n            completed: false,\n            week_number: \"\",\n            month: \"\",\n            created_at: \"\",\n            updated_at: \"\",\n            user: \"\",\n            category: \"\"\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch the initial goals data from the server when the component mounts\n        const fetchGoals = async ()=>{\n            try {\n                const response = await fetch(\"http://127.0.0.1:8000/planner/weekly_goals/\");\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setGoal(data); // Update the goals state with the fetched data\n            } catch (error) {\n                console.error(\"Failed to fetch goals:\", error);\n            }\n        };\n        fetchGoals();\n    }, []);\n    console.log(goals);\n    function handleChange(event) {\n        setInputText(event.target.value);\n    }\n    function handleClick(event) {\n        event.preventDefault();\n        setGoal((prevGoals)=>{\n            return [\n                ...prevGoals,\n                inputText\n            ];\n        });\n        setInputText(\"\");\n    }\n    function deleteItem(id) {\n        setGoal((prevGoals)=>{\n            return prevGoals.filter((goals, index)=>{\n                return index !== id;\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        tabIndex: 0,\n        className: \" collapse bg-[#fdf2bf] overflow-visible\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                lineNumber: 67,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse-title text-black\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                lineNumber: 68,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container collapse-content z-30 overflow-visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-70 gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc\",\n                            children: goals.map((goal, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    id: index,\n                                    text: goal,\n                                    onChecked: deleteItem\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 11\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 7\n                        }, this),\n                        props.goals,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-actions flex flex-row gap-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Type here\",\n                                        className: \"input input-sm pb-1 m-1 input-bordered w-full max-w-xs\",\n                                        onChange: handleChange,\n                                        name: \"Goal\",\n                                        value: inputText\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dropdown dropdown-right \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                tabIndex: 0,\n                                                role: \"button\",\n                                                className: \"btn m-1\",\n                                                children: \"Click\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                tabIndex: 0,\n                                                className: \"dropdown-content menu p-2 shadow z-40 bg-base-100 rounded-box w-52\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: handleClick,\n                                                            children: \"Career\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                            lineNumber: 95,\n                                                            columnNumber: 19\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                        lineNumber: 95,\n                                                        columnNumber: 15\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: handleClick,\n                                                            children: \"Health\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                            lineNumber: 96,\n                                                            columnNumber: 19\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                        lineNumber: 96,\n                                                        columnNumber: 15\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: handleClick,\n                                                            children: \"RelationShip\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                            lineNumber: 97,\n                                                            columnNumber: 19\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 15\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: handleClick,\n                                                            children: \"Entertainmnet\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                            lineNumber: 98,\n                                                            columnNumber: 19\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 15\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n                lineNumber: 69,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\New Student\\\\Desktop\\\\Web projects\\\\Planner\\\\PersonalPlanner\\\\app\\\\Components\\\\GoalCard.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(GoalCard, \"2mURtg1JIdghbybopyl6TkLD0l8=\");\n_c = GoalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoalCard);\nvar _c;\n$RefreshReg$(_c, \"GoalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL0dvYWxDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2tEO0FBQ2hCO0FBSWxDLFNBQVNJLFNBQVNDLEtBQUs7O0lBQ3JCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLE9BQU9DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7UUFBQztZQUNqQ1MsSUFBRztZQUNIQyxPQUFNO1lBQ05DLFdBQVU7WUFDVkMsYUFBWTtZQUNaQyxPQUFNO1lBQ05DLFlBQVc7WUFDWEMsWUFBVztZQUNYQyxNQUFLO1lBQ0xDLFVBQVM7UUFJWDtLQUFFO0lBRUZoQixnREFBU0EsQ0FBQztRQUNSLHlFQUF5RTtRQUN6RSxNQUFNaUIsYUFBYTtZQUNqQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtnQkFDN0IsSUFBSSxDQUFDRCxTQUFTRSxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtnQkFDbEI7Z0JBQ0EsTUFBTUMsT0FBTyxNQUFNSixTQUFTSyxJQUFJO2dCQUNoQ2hCLFFBQVFlLE9BQU8sK0NBQStDO1lBQ2hFLEVBQUUsT0FBT0UsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7WUFDMUM7UUFDRjtRQUVBUDtJQUNGLEdBQUcsRUFBRTtJQUVQUSxRQUFRQyxHQUFHLENBQUNwQjtJQUdWLFNBQVNxQixhQUFhQyxLQUFLO1FBQ3pCdkIsYUFBYXVCLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNqQztJQUVBLFNBQVNDLFlBQVlILEtBQUs7UUFDeEJBLE1BQU1JLGNBQWM7UUFDcEJ6QixRQUFRLENBQUMwQjtZQUNQLE9BQU87bUJBQUlBO2dCQUFXN0I7YUFBVTtRQUNsQztRQUNBQyxhQUFhO0lBQ2Y7SUFFQSxTQUFTNkIsV0FBVzFCLEVBQUU7UUFDcEJELFFBQVEsQ0FBQzBCO1lBQ1AsT0FBT0EsVUFBVUUsTUFBTSxDQUFDLENBQUM3QixPQUFPOEI7Z0JBQzlCLE9BQU9BLFVBQVU1QjtZQUNuQjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQzZCO1FBQUlDLFVBQVU7UUFBR0MsV0FBVTs7MEJBQzlCLDhEQUFDQztnQkFBTUMsTUFBSzs7Ozs7OzBCQUNaLDhEQUFDSjtnQkFBSUUsV0FBVTswQkFBNkJwQyxNQUFNTSxLQUFLOzs7Ozs7MEJBQ3ZELDhEQUFDNEI7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNGO29CQUFJRSxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQ1hqQyxNQUFNcUMsR0FBRyxDQUFDLENBQUNDLE1BQU1SLHNCQUNoQiw4REFBQ25DLGlEQUFRQTtvQ0FBQ08sSUFBSTRCO29DQUFPUyxNQUFNRDtvQ0FBa0JFLFdBQVdaO21DQUFsQkU7Ozs7Ozs7Ozs7d0JBR3pDakMsTUFBTUcsS0FBSztzQ0FDWiw4REFBQytCOzRCQUFJRSxXQUFVO3NDQUNiLDRFQUFDUTs7a0RBQ0MsOERBQUNQO3dDQUNDQyxNQUFLO3dDQUNMTyxhQUFZO3dDQUNaVCxXQUFVO3dDQUNWVSxVQUFVdEI7d0NBQ1Z1QixNQUFLO3dDQUNMcEIsT0FBTzFCOzs7Ozs7a0RBRVQsOERBQUNpQzt3Q0FBSUUsV0FBVTs7MERBQ2IsOERBQUNGO2dEQUFJQyxVQUFVO2dEQUFHYSxNQUFLO2dEQUFTWixXQUFVOzBEQUFVOzs7Ozs7MERBR3BELDhEQUFDRztnREFDQ0osVUFBVTtnREFDVkMsV0FBVTs7a0VBRVYsOERBQUNhO2tFQUFHLDRFQUFDQzs0REFBR0MsU0FBU3ZCO3NFQUFhOzs7Ozs7Ozs7OztrRUFDOUIsOERBQUNxQjtrRUFBRyw0RUFBQ0M7NERBQUVDLFNBQVN2QjtzRUFBYTs7Ozs7Ozs7Ozs7a0VBQzdCLDhEQUFDcUI7a0VBQUcsNEVBQUNDOzREQUFFQyxTQUFTdkI7c0VBQWE7Ozs7Ozs7Ozs7O2tFQUM3Qiw4REFBQ3FCO2tFQUFHLDRFQUFDQzs0REFBRUMsU0FBU3ZCO3NFQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVM0M7R0FyR1M3QjtLQUFBQTtBQXVHVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvQ29tcG9uZW50cy9Hb2FsQ2FyZC50c3g/ZDIyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR29hbEl0ZW0gZnJvbSBcIi4vR29hbEl0ZW1cIjtcclxuXHJcbmltcG9ydCBHb2FsQ2F0ZWdvcnlDYXJkIGZyb20gXCIuL0dvYWxDYXRlZ29yeUNhcmRcIjtcclxuXHJcbmZ1bmN0aW9uIEdvYWxDYXJkKHByb3BzKSB7XHJcbiAgY29uc3QgW2lucHV0VGV4dCwgc2V0SW5wdXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtnb2Fscywgc2V0R29hbF0gPSB1c2VTdGF0ZShbe1xyXG4gICAgaWQ6XCJcIixcclxuICAgIHRpdGxlOlwiXCIsXHJcbiAgICBjb21wbGV0ZWQ6ZmFsc2UsXHJcbiAgICB3ZWVrX251bWJlcjpcIlwiLFxyXG4gICAgbW9udGg6XCJcIixcclxuICAgIGNyZWF0ZWRfYXQ6XCJcIixcclxuICAgIHVwZGF0ZWRfYXQ6XCJcIixcclxuICAgIHVzZXI6XCJcIixcclxuICAgIGNhdGVnb3J5OlwiXCJcclxuXHJcblxyXG5cclxuICB9XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBGZXRjaCB0aGUgaW5pdGlhbCBnb2FscyBkYXRhIGZyb20gdGhlIHNlcnZlciB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgICBjb25zdCBmZXRjaEdvYWxzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wbGFubmVyL3dlZWtseV9nb2Fscy8nKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldEdvYWwoZGF0YSk7IC8vIFVwZGF0ZSB0aGUgZ29hbHMgc3RhdGUgd2l0aCB0aGUgZmV0Y2hlZCBkYXRhXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIGdvYWxzOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaEdvYWxzKCk7XHJcbiAgfSwgW10pOyBcclxuXHJcbmNvbnNvbGUubG9nKGdvYWxzKVxyXG4gXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgc2V0SW5wdXRUZXh0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEdvYWwoKHByZXZHb2FscykgPT4ge1xyXG4gICAgICByZXR1cm4gWy4uLnByZXZHb2FscywgaW5wdXRUZXh0XTtcclxuICAgIH0pO1xyXG4gICAgc2V0SW5wdXRUZXh0KFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlSXRlbShpZCkge1xyXG4gICAgc2V0R29hbCgocHJldkdvYWxzKSA9PiB7XHJcbiAgICAgIHJldHVybiBwcmV2R29hbHMuZmlsdGVyKChnb2FscywgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gaW5kZXggIT09IGlkO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cIiBjb2xsYXBzZSBiZy1bI2ZkZjJiZl0gb3ZlcmZsb3ctdmlzaWJsZVwiPlxyXG4gIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UtdGl0bGUgdGV4dC1ibGFja1wiPntwcm9wcy50aXRsZX08L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2xsYXBzZS1jb250ZW50IHotMzAgb3ZlcmZsb3ctdmlzaWJsZVwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctNzAgZ2FwLTNcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzY1wiPlxyXG4gICAgICAgIHtnb2Fscy5tYXAoKGdvYWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8R29hbEl0ZW0gaWQ9e2luZGV4fSB0ZXh0PXtnb2FsfSBrZXk9e2luZGV4fSBvbkNoZWNrZWQ9e2RlbGV0ZUl0ZW19IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIHtwcm9wcy5nb2Fsc31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMgZmxleCBmbGV4LXJvdyBnYXAtMlwiPlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1zbSBwYi0xIG0tMSBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHNcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBuYW1lPVwiR29hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBkcm9wZG93bi1yaWdodCBcIj5cclxuICAgICAgICAgICAgPGRpdiB0YWJJbmRleD17MH0gcm9sZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBtLTFcIj5cclxuICAgICAgICAgICAgICBDbGlja1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudCBtZW51IHAtMiBzaGFkb3cgei00MCBiZy1iYXNlLTEwMCByb3VuZGVkLWJveCB3LTUyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxsaT48YSAgb25DbGljaz17aGFuZGxlQ2xpY2t9PkNhcmVlcjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBvbkNsaWNrPXtoYW5kbGVDbGlja30+SGVhbHRoPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5SZWxhdGlvblNoaXA8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgb25DbGljaz17aGFuZGxlQ2xpY2t9PkVudGVydGFpbm1uZXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvYWxDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdvYWxJdGVtIiwiR29hbENhcmQiLCJwcm9wcyIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsImdvYWxzIiwic2V0R29hbCIsImlkIiwidGl0bGUiLCJjb21wbGV0ZWQiLCJ3ZWVrX251bWJlciIsIm1vbnRoIiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRfYXQiLCJ1c2VyIiwiY2F0ZWdvcnkiLCJmZXRjaEdvYWxzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwicHJldkdvYWxzIiwiZGVsZXRlSXRlbSIsImZpbHRlciIsImluZGV4IiwiZGl2IiwidGFiSW5kZXgiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJ1bCIsIm1hcCIsImdvYWwiLCJ0ZXh0Iiwib25DaGVja2VkIiwiZm9ybSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJuYW1lIiwicm9sZSIsImxpIiwiYSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/GoalCard.tsx\n"));

/***/ })

});