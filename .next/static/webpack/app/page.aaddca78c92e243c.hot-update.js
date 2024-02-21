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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GoalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoalItem */ \"(app-pages-browser)/./app/Components/GoalItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GoalCard(props) {\n    _s();\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [goals, setGoals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGoals = async ()=>{\n            try {\n                const response = await fetch(\"http://127.0.0.1:8000/planner/goals/\");\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setGoals(data);\n            } catch (error) {\n                console.error(\"Failed to fetch goals:\", error);\n            }\n        };\n        fetchGoals();\n    }, []);\n    //console.log(goals);\n    function handleChange(event1) {\n        setInputText(event1.target.value);\n    }\n    function handleClick(event1, category) {\n        event1.preventDefault();\n        let categoryID;\n        let goalType;\n        let weekNumber;\n        if (category === \"Health\") {\n            categoryID = 5;\n        }\n        if (category === \"Career\") {\n            categoryID = 6;\n        }\n        if (category === \"Relationship\") {\n            categoryID = 7;\n        }\n        if (category === \"Entertainment\") {\n            categoryID = 8;\n        }\n        if (props.type === \"Weekly\") {\n            goalType = \"W\";\n        }\n        if (props.type === \"Monthly\") {\n            goalType = \"M\";\n        }\n        if (props.type === \"Daily\") {\n            goalType = \"D\";\n        }\n        if (props.title === \"Week One\") {\n            weekNumber = 1;\n        }\n        if (props.title === \"Week Two\") {\n            weekNumber = 2;\n        }\n        if (props.title === \"Week Three\") {\n            weekNumber = 3;\n        }\n        if (props.title === \"Week Four\") {\n            weekNumber = 4;\n        }\n        const newGoal = {\n            title: inputText,\n            user: 1,\n            goal_type: goalType,\n            month: null,\n            week: weekNumber,\n            day: null,\n            completed: false,\n            category: categoryID\n        };\n        fetch(\"http://127.0.0.1:8000/planner/goals/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newGoal)\n        }).then((response)=>response.json()).then((data)=>{\n            setGoals((prevGoals)=>[\n                    ...prevGoals,\n                    data\n                ]); // Assuming the backend returns the created goal with an id\n            setInputText(\"\");\n        }).catch((error)=>console.error(\"Error adding goal:\", error));\n    }\n    function deleteItem(goalId) {\n        console.log(\"hey\");\n        // First, make a request to the backend to delete the goal\n        fetch(\"http://127.0.0.1:8000/planner/goals/\".concat(goalId, \"/\"), {\n            method: \"DELETE\",\n            headers: {\n                // If your API requires authentication, make sure to include the necessary headers\n                // \"Authorization\": \"Bearer YOUR_TOKEN_HERE\",\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            if (!response.ok) {\n                // If the server responds with an error, throw an error\n                throw new Error(\"Network response was not ok\");\n            }\n            // If the delete request was successful, update the local state\n            setGoals((prevGoals)=>prevGoals.filter((goal)=>goal.id !== goalId));\n        }).catch((error)=>{\n            console.error(\"Error deleting goal:\", error);\n        // Here, you might want to handle the error, perhaps by showing an error message to the user\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        tabIndex: 0,\n        className: \"collapse bg-[#fdf2bf] overflow-visible\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse-title text-black\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container collapse-content z-30 overflow-visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-70 gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc  \",\n                            children: goals.map((goal, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    id: index,\n                                    text: goal.title,\n                                    onDoubleClick: ()=>deleteItem(goal.id)\n                                }, index, false, {\n                                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-actions flex flex-row gap-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Type here\",\n                                        className: \"input input-sm input-bordered w-full max-w-xs\",\n                                        onChange: handleChange,\n                                        name: \"Goal\",\n                                        value: inputText\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dropdown dropdown-right\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                tabIndex: 0,\n                                                role: \"button\",\n                                                className: \"btn m-1\",\n                                                children: \"Click\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                lineNumber: 137,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                tabIndex: 0,\n                                                className: \"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Career\"),\n                                                            children: \"Career\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 145,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 144,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Health\"),\n                                                            children: \"Health\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 148,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 147,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Relationship\"),\n                                                            children: \"Relationship\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 151,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 150,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        onClick: ()=>handleClick(event, \"Entertainment\"),\n                                                        children: \"Entertainment\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 155,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {}, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 158,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                lineNumber: 140,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_s(GoalCard, \"fXnIRfSpzza4iIq8f6TLGfF+JOs=\");\n_c = GoalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoalCard);\nvar _c;\n$RefreshReg$(_c, \"GoalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL0dvYWxDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ2pCO0FBSWxDLFNBQVNJLFNBQVNDLEtBQUs7O0lBQ3JCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUVyQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxhQUFhO1lBQ2pCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixJQUFJLENBQUNELFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFDQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7Z0JBQ2hDUCxTQUFTTTtZQUNYLEVBQUUsT0FBT0UsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7WUFDMUM7UUFDRjtRQUVBUDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUFxQjtJQUVyQixTQUFTUyxhQUFhQyxNQUFLO1FBQ3pCYixhQUFhYSxPQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDakM7SUFFQSxTQUFTQyxZQUFZSCxNQUFLLEVBQUVJLFFBQVE7UUFDbENKLE9BQU1LLGNBQWM7UUFDcEIsSUFBSUM7UUFDSixJQUFJQztRQUNKLElBQUlDO1FBRUosSUFBSUosYUFBVyxVQUFTO1lBQUVFLGFBQVc7UUFBRTtRQUN2QyxJQUFJRixhQUFXLFVBQVM7WUFBQ0UsYUFBVztRQUFDO1FBQ3JDLElBQUlGLGFBQVcsZ0JBQWU7WUFBQ0UsYUFBVztRQUFDO1FBQzNDLElBQUdGLGFBQVcsaUJBQWdCO1lBQUNFLGFBQVc7UUFBQztRQUUzQyxJQUFJckIsTUFBTXdCLElBQUksS0FBSSxVQUFTO1lBQUNGLFdBQVM7UUFBRztRQUN4QyxJQUFJdEIsTUFBTXdCLElBQUksS0FBSSxXQUFVO1lBQUNG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Ozs7Ozs7a0VBRWxELDhEQUFDOEM7a0VBQ0MsNEVBQUNDOzREQUFFQyxTQUFTLElBQU03QyxZQUFZSCxPQUFPO3NFQUFXOzs7Ozs7Ozs7OztrRUFFbEQsOERBQUM4QztrRUFDQyw0RUFBQ0M7NERBQUVDLFNBQVMsSUFBTTdDLFlBQVlILE9BQU87c0VBQWlCOzs7Ozs7Ozs7OztrRUFJeEQsOERBQUMrQzt3REFBRUMsU0FBUyxJQUFNN0MsWUFBWUgsT0FBTztrRUFBa0I7Ozs7OztrRUFHdkQsOERBQUM4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU25CO0dBaEtTOUQ7S0FBQUE7QUFrS1QsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0NvbXBvbmVudHMvR29hbENhcmQudHN4P2QyMmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdvYWxJdGVtIGZyb20gXCIuL0dvYWxJdGVtXCI7XG5cbmltcG9ydCBHb2FsQ2F0ZWdvcnlDYXJkIGZyb20gXCIuL0dvYWxDYXRlZ29yeUNhcmRcIjtcblxuZnVuY3Rpb24gR29hbENhcmQocHJvcHMpIHtcbiAgY29uc3QgW2lucHV0VGV4dCwgc2V0SW5wdXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZ29hbHMsIHNldEdvYWxzXSA9IHVzZVN0YXRlKFtdKTsgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEdvYWxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wbGFubmVyL2dvYWxzL1wiKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBva1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRHb2FscyhkYXRhKTsgXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGdvYWxzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoR29hbHMoKTtcbiAgfSwgW10pO1xuXG4gIC8vY29uc29sZS5sb2coZ29hbHMpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHNldElucHV0VGV4dChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQsIGNhdGVnb3J5KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY2F0ZWdvcnlJRFxuICAgIGxldCBnb2FsVHlwZVxuICAgIGxldCB3ZWVrTnVtYmVyXG5cbiAgICBpZiAoY2F0ZWdvcnk9PT1cIkhlYWx0aFwiKXsgY2F0ZWdvcnlJRD01IH1cbiAgICBpZiAoY2F0ZWdvcnk9PT1cIkNhcmVlclwiKXtjYXRlZ29yeUlEPTZ9XG4gICAgaWYgKGNhdGVnb3J5PT09XCJSZWxhdGlvbnNoaXBcIil7Y2F0ZWdvcnlJRD03fVxuICAgIGlmKGNhdGVnb3J5PT09XCJFbnRlcnRhaW5tZW50XCIpe2NhdGVnb3J5SUQ9OH1cblxuICAgIGlmIChwcm9wcy50eXBlID09PVwiV2Vla2x5XCIpe2dvYWxUeXBlPVwiV1wifVxuICAgIGlmIChwcm9wcy50eXBlID09PVwiTW9udGhseVwiKXtnb2FsVHlwZT1cIk1cIn1cbiAgICBpZiAocHJvcHMudHlwZSA9PT1cIkRhaWx5XCIpe2dvYWxUeXBlPVwiRFwifVxuXG4gICAgaWYgKHByb3BzLnRpdGxlID09PVwiV2VlayBPbmVcIikge3dlZWtOdW1iZXI9MX1cbiAgICBpZiAocHJvcHMudGl0bGUgPT09XCJXZWVrIFR3b1wiKXt3ZWVrTnVtYmVyPTJ9XG4gICAgaWYgKHByb3BzLnRpdGxlID09PVwiV2VlayBUaHJlZVwiKXt3ZWVrTnVtYmVyPTN9XG4gICAgaWYgKHByb3BzLnRpdGxlID09PVwiV2VlayBGb3VyXCIpeyB3ZWVrTnVtYmVyPTR9XG5cbiAgICBcbiAgICBcblxuICAgIGNvbnN0IG5ld0dvYWwgPSB7XG4gICAgICB0aXRsZTogaW5wdXRUZXh0LFxuICAgICAgdXNlcjogMSxcbiAgICAgIGdvYWxfdHlwZTpnb2FsVHlwZSxcbiAgICAgIG1vbnRoOiBudWxsLFxuICAgICAgd2Vlazp3ZWVrTnVtYmVyLFxuICAgICAgZGF5OiBudWxsLFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeUlELFxuICAgICAgXG4gICAgfTtcblxuICAgIGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL3BsYW5uZXIvZ29hbHMvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0dvYWwpLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldEdvYWxzKChwcmV2R29hbHMpID0+IFsuLi5wcmV2R29hbHMsIGRhdGFdKTsgLy8gQXNzdW1pbmcgdGhlIGJhY2tlbmQgcmV0dXJucyB0aGUgY3JlYXRlZCBnb2FsIHdpdGggYW4gaWRcbiAgICAgICAgc2V0SW5wdXRUZXh0KFwiXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZ29hbDpcIiwgZXJyb3IpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oZ29hbElkKSB7XG4gICAgY29uc29sZS5sb2coXCJoZXlcIilcbiAgICAvLyBGaXJzdCwgbWFrZSBhIHJlcXVlc3QgdG8gdGhlIGJhY2tlbmQgdG8gZGVsZXRlIHRoZSBnb2FsXG4gICAgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wbGFubmVyL2dvYWxzLyR7Z29hbElkfS9gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAvLyBJZiB5b3VyIEFQSSByZXF1aXJlcyBhdXRoZW50aWNhdGlvbiwgbWFrZSBzdXJlIHRvIGluY2x1ZGUgdGhlIG5lY2Vzc2FyeSBoZWFkZXJzXG4gICAgICAgIC8vIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBZT1VSX1RPS0VOX0hFUkVcIixcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAvLyBJZiB0aGUgc2VydmVyIHJlc3BvbmRzIHdpdGggYW4gZXJyb3IsIHRocm93IGFuIGVycm9yXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICB9XG4gICAgICAvLyBJZiB0aGUgZGVsZXRlIHJlcXVlc3Qgd2FzIHN1Y2Nlc3NmdWwsIHVwZGF0ZSB0aGUgbG9jYWwgc3RhdGVcbiAgICAgIHNldEdvYWxzKHByZXZHb2FscyA9PiBwcmV2R29hbHMuZmlsdGVyKGdvYWwgPT4gZ29hbC5pZCAhPT0gZ29hbElkKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGdvYWw6XCIsIGVycm9yKTtcbiAgICAgIC8vIEhlcmUsIHlvdSBtaWdodCB3YW50IHRvIGhhbmRsZSB0aGUgZXJyb3IsIHBlcmhhcHMgYnkgc2hvd2luZyBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSB1c2VyXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImNvbGxhcHNlIGJnLVsjZmRmMmJmXSBvdmVyZmxvdy12aXNpYmxlXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UtdGl0bGUgdGV4dC1ibGFja1wiPntwcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbGxhcHNlLWNvbnRlbnQgei0zMCBvdmVyZmxvdy12aXNpYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTcwIGdhcC0zXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyAgXCI+XG4gICAgICAgICAgICB7Z29hbHMubWFwKChnb2FsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8R29hbEl0ZW1cbiAgICAgICAgICAgICAgICBpZD17aW5kZXh9XG4gICAgICAgICAgICAgICAgdGV4dD17Z29hbC50aXRsZX0gLy8gQ29ycmVjdGx5IGFjY2Vzc2luZyB0aGUgcHJvcGVydHkgb2YgdGhlIG9iamVjdFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KCkgPT4gZGVsZXRlSXRlbShnb2FsLmlkKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyBmbGV4IGZsZXgtcm93IGdhcC0zXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1zbSBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHNcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgbmFtZT1cIkdvYWxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gZHJvcGRvd24tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHRhYkluZGV4PXswfSByb2xlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIG0tMVwiPlxuICAgICAgICAgICAgICAgICAgQ2xpY2tcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudCB6LVsxXSBtZW51IHAtMiBzaGFkb3cgYmctYmFzZS0xMDAgcm91bmRlZC1ib3ggdy01MlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhldmVudCwgXCJDYXJlZXJcIil9PkNhcmVlcjwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGV2ZW50LCBcIkhlYWx0aFwiKX0+SGVhbHRoPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soZXZlbnQsIFwiUmVsYXRpb25zaGlwXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICBSZWxhdGlvbnNoaXBcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGV2ZW50LCBcIkVudGVydGFpbm1lbnRcIil9PlxuICAgICAgICAgICAgICAgICAgICBFbnRlcnRhaW5tZW50XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8bGk+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR29hbENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdvYWxJdGVtIiwiR29hbENhcmQiLCJwcm9wcyIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsImdvYWxzIiwic2V0R29hbHMiLCJmZXRjaEdvYWxzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayIsImNhdGVnb3J5IiwicHJldmVudERlZmF1bHQiLCJjYXRlZ29yeUlEIiwiZ29hbFR5cGUiLCJ3ZWVrTnVtYmVyIiwidHlwZSIsInRpdGxlIiwibmV3R29hbCIsInVzZXIiLCJnb2FsX3R5cGUiLCJtb250aCIsIndlZWsiLCJkYXkiLCJjb21wbGV0ZWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicHJldkdvYWxzIiwiY2F0Y2giLCJkZWxldGVJdGVtIiwiZ29hbElkIiwibG9nIiwiZmlsdGVyIiwiZ29hbCIsImlkIiwiZGl2IiwidGFiSW5kZXgiLCJjbGFzc05hbWUiLCJpbnB1dCIsInVsIiwibWFwIiwiaW5kZXgiLCJ0ZXh0Iiwib25Eb3VibGVDbGljayIsImZvcm0iLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibmFtZSIsInJvbGUiLCJsaSIsImEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/GoalCard.tsx\n"));

/***/ })

});