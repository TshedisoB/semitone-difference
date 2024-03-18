/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/jamBuddy.js":
/*!*************************!*\
  !*** ./src/jamBuddy.js ***!
  \*************************/
/***/ ((module) => {

eval("class JamBuddy {\r\n  constructor() {\r\n    this.notes = [\r\n      \"A\",\r\n      \"A#\",\r\n      \"B\",\r\n      \"C\",\r\n      \"C#\",\r\n      \"D\",\r\n      \"D#\",\r\n      \"E\",\r\n      \"F\",\r\n      \"F#\",\r\n      \"G\",\r\n      \"G#\",\r\n      \"Db\",\r\n      \"Bb\",\r\n      \"Eb\",\r\n      \"Gb\",\r\n      \"Ab\",\r\n    ];\r\n    this.twoNotes = [];\r\n  }\r\n\r\n  selectNotes() {\r\n    const randomNotes = [...this.notes];\r\n    randomNotes.sort(() => Math.random() - 0.5);\r\n    this.twoNotes = randomNotes.slice(0, 2);\r\n    return this.twoNotes;\r\n  }\r\n\r\n  checkDistance() {\r\n    for (let i = 0; i < this.twoNotes.length; i++) {\r\n      if (this.twoNotes[i] === \"Bb\") {\r\n        this.twoNotes[i] = \"A#\";\r\n      }\r\n      if (this.twoNotes[i] === \"Db\") {\r\n        this.twoNotes[i] = \"C#\";\r\n      }\r\n      if (this.twoNotes[i] === \"Eb\") {\r\n        this.twoNotes[i] = \"D#\";\r\n      }\r\n      if (this.twoNotes[i] === \"Gb\") {\r\n        this.twoNotes[i] = \"F#\";\r\n      }\r\n      if (this.twoNotes[i] === \"Ab\") {\r\n        this.twoNotes[i] = \"G#\";\r\n      }\r\n    }\r\n\r\n    const firstNote = Math.abs(this.notes.indexOf(this.twoNotes[0]));\r\n    const secondNote = Math.abs(this.notes.indexOf(this.twoNotes[1]));\r\n    let distance = secondNote - firstNote;\r\n\r\n    if (distance < 0) {\r\n      distance = distance + 12;\r\n    }\r\n\r\n    return distance;\r\n  }\r\n\r\n  checkAnswer(num) {\r\n    const trueDistance = this.checkDistance(num);\r\n    return trueDistance === num;\r\n  }\r\n\r\n  checkIndexPosition() {\r\n    for (let i = 0; i < this.twoNotes.length; i++) {\r\n      if (this.twoNotes[i] === \"Bb\") {\r\n        this.twoNotes[i] = \"A#\";\r\n      }\r\n      if (this.twoNotes[i] === \"Db\") {\r\n        this.twoNotes[i] = \"C#\";\r\n      }\r\n      if (this.twoNotes[i] === \"Eb\") {\r\n        this.twoNotes[i] = \"D#\";\r\n      }\r\n      if (this.twoNotes[i] === \"Gb\") {\r\n        this.twoNotes[i] = \"F#\";\r\n      }\r\n      if (this.twoNotes[i] === \"Ab\") {\r\n        this.twoNotes[i] = \"G#\";\r\n      }\r\n    }\r\n\r\n    const firstNote = Math.abs(this.notes.indexOf(this.twoNotes[0]));\r\n    const secondNote = Math.abs(this.notes.indexOf(this.twoNotes[1]));\r\n    return [firstNote + 1, secondNote + 1];\r\n  }\r\n}\r\n\r\nmodule.exports = JamBuddy;\r\n\n\n//# sourceURL=webpack://tshediso-boshiana-199-semitone-difference-basic-algorithm-javascript/./src/jamBuddy.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const JamBuddy = __webpack_require__(/*! ./jamBuddy.js */ \"./src/jamBuddy.js\");\r\n\r\nconst buddy = new JamBuddy();\r\nconst result = document.getElementById(\"result\");\r\nconst distance = document.getElementById(\"distance\");\r\nconst submitBtn = document.getElementById(\"submitBtn\");\r\nconst displayNotes = document.getElementById(\"displayNotes\");\r\nconst explanation = document.getElementById(\"explanation\");\r\nconst revealAllNotes = document.getElementById(\"revealAllNotes\");\r\nconst displayCount = document.getElementById(\"displayCount\");\r\nconst distanceValue = document.getElementById(\"distanceValue\");\r\nconst revealDistance = document.getElementById(\"revealDistance\");\r\nconst randomNotes = document.getElementById(\"randomNotes\");\r\ndisplayNotes.style.display = \"block\";\r\nconst inputNum = Number(distance.value);\r\n\r\nhideDistance();\r\nhideExplanation();\r\nshowNotes();\r\n\r\nrandomNotes.onclick = function () {\r\n  showNotes();\r\n  enableSubmitBtn();\r\n  hideDistance();\r\n  hideExplanation();\r\n  showRevealAnswer();\r\n  hideResult();\r\n};\r\n\r\nfunction showNotes() {\r\n  displayNotes.style.color = \"rgb(0, 9, 128)\";\r\n  const notes = buddy.selectNotes();\r\n  displayNotes.innerHTML = notes;\r\n  distance.value = \"\";\r\n  const noteIndexes = buddy.checkIndexPosition();\r\n  const noteIndexesOne = noteIndexes[0];\r\n  const noteIndexesTwo = noteIndexes[1];\r\n  const matchedSpanOne = `span${noteIndexesOne}`;\r\n  const matchedSpanTwo = `span${noteIndexesTwo}`;\r\n\r\n  for (let i = 1; i <= 12; i++) {\r\n    if (\r\n      (noteIndexesOne === i && matchedSpanOne === `span${i}`) ||\r\n      (noteIndexesTwo === i && matchedSpanTwo === `span${i}`)\r\n    ) {\r\n      document.getElementById(`span${noteIndexesOne}`).style.color = \"white\";\r\n      document.getElementById(`span${noteIndexesTwo}`).style.color = \"white\";\r\n      document.getElementById(`span${noteIndexesOne}`).style.backgroundColor =\r\n        \"green\";\r\n      document.getElementById(`span${noteIndexesTwo}`).style.backgroundColor =\r\n        \"green\";\r\n    } else {\r\n      document.getElementById(`span${i}`).style.color = \"rgb(0, 9, 128)\";\r\n      document.getElementById(`span${i}`).style.backgroundColor =\r\n        \"rgb(236, 205, 173)\";\r\n    }\r\n  }\r\n}\r\n\r\nfunction revealAnswer() {\r\n  const notesDistance = buddy.checkDistance();\r\n  const inputNum = Number(distance.value);\r\n  showDistance();\r\n  if (notesDistance === inputNum) {\r\n    showExplanation();\r\n    hideRevealAnswer();\r\n    streakCount();\r\n    result.style.color = \"green\";\r\n    return correctAnswer();\r\n  } else {\r\n    streakReset();\r\n    hideDistance();\r\n    showRevealAnswer();\r\n    result.style.color = \"red\";\r\n    return incorrectAnswer();\r\n  }\r\n}\r\n\r\nfunction correctAnswer() {\r\n  return (result.innerHTML = \"You got it right .Well Done!\");\r\n}\r\n\r\nfunction incorrectAnswer() {\r\n  return (result.innerHTML = \"Wrong answer! Try again!\");\r\n}\r\n\r\nfunction streakCount() {\r\n  return displayCount.innerHTML++;\r\n}\r\n\r\nfunction streakReset() {\r\n  return (displayCount.innerHTML = 0);\r\n}\r\n\r\nsubmitBtn.onclick = function () {\r\n  showResult();\r\n  revealAnswer();\r\n};\r\n\r\nrevealAllNotes.onclick = function () {\r\n  showExplanation();\r\n  showDistance();\r\n  disableSubmitBtn();\r\n};\r\n\r\nfunction hideExplanation() {\r\n  explanation.style.display = \"none\";\r\n}\r\n\r\nfunction showExplanation() {\r\n  const distance = buddy.checkDistance();\r\n  explanation.style.display = \"block\";\r\n  return (distanceValue.innerHTML = distance);\r\n}\r\n\r\nfunction hideResult() {\r\n  result.style.display = \"none\";\r\n}\r\n\r\nfunction showResult() {\r\n  result.style.display = \"block\";\r\n}\r\n\r\nfunction showRevealAnswer() {\r\n  revealAllNotes.style.display = \"block\";\r\n}\r\n\r\nfunction hideRevealAnswer() {\r\n  revealAllNotes.style.display = \"none\";\r\n}\r\n\r\nfunction hideDistance() {\r\n  revealDistance.style.display = \"none\";\r\n}\r\n\r\nfunction showDistance() {\r\n  const distance = buddy.checkDistance();\r\n  revealDistance.style.display = \"block\";\r\n  return (distanceValue.innerHTML = distance);\r\n}\r\n\r\nfunction disableSubmitBtn() {\r\n  submitBtn.disabled = true;\r\n}\r\n\r\nfunction enableSubmitBtn() {\r\n  submitBtn.disabled = false;\r\n}\r\n\r\nmodule.exports = {\r\n  revealAnswer,\r\n  showDistance,\r\n  showNotes,\r\n  randomNotes,\r\n  displayCount,\r\n  inputNum,\r\n  submitBtn,\r\n  displayNotes,\r\n  explanation,\r\n  distanceValue,\r\n  result,\r\n};\r\n\n\n//# sourceURL=webpack://tshediso-boshiana-199-semitone-difference-basic-algorithm-javascript/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;