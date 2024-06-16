/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\ndocument.addEventListener('DOMContentLoaded', () => {\n    const quizContainer = document.getElementById('quiz');\n    const resultsContainer = document.getElementById('results');\n    const submitButton = document.getElementById('submit');\n    const questions = [\n        {\n            question: \"What is the capital of France?\",\n            answers: {\n                a: \"Berlin\",\n                b: \"Madrid\",\n                c: \"Paris\",\n            },\n            correctAnswer: \"c\"\n        },\n        {\n            question: \"Who is CEO of Tesla?\",\n            answers: {\n                a: \"Jeff Bezos\",\n                b: \"Elon Musk\",\n                c: \"Bill Gates\",\n            },\n            correctAnswer: \"b\"\n        },\n        {\n            question: \"What is the largest ocean?\",\n            answers: {\n                a: \"Atlantic\",\n                b: \"Indian\",\n                c: \"Pacific\",\n            },\n            correctAnswer: \"c\"\n        }\n    ];\n    function buildQuiz() {\n        // code to build the quiz\n    }\n    function showResults() {\n        // code to show the results\n    }\n    // Display quiz right away\n    buildQuiz();\n    // On submit, show results\n    submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', showResults);\n});\n\n\n//# sourceURL=webpack://quiz_app/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;