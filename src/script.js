const JamBuddy = require("./jamBuddy.js");

const buddy = new JamBuddy();
const result = document.getElementById("result");
const distance = document.getElementById("distance");
const submitBtn = document.getElementById("submitBtn");
const displayNotes = document.getElementById("displayNotes");
const explanation = document.getElementById("explanation");
const revealAllNotes = document.getElementById("revealAllNotes");
const displayCount = document.getElementById("displayCount");
const distanceValue = document.getElementById("distanceValue");
const revealDistance = document.getElementById("revealDistance");
const randomNotes = document.getElementById("randomNotes");
displayNotes.style.display = "block";
const inputNum = Number(distance.value);

hideDistance();
hideExplanation();
showNotes();

randomNotes.onclick = function () {
  showNotes();
  enableSubmitBtn();
  hideDistance();
  hideExplanation();
  showRevealAnswer();
  hideResult();
};

function showNotes() {
  displayNotes.style.color = "rgb(0, 9, 128)";
  const notes = buddy.selectNotes();
  displayNotes.innerHTML = notes;
  distance.value = "";
  const noteIndexes = buddy.checkIndexPosition();
  const noteIndexesOne = noteIndexes[0];
  const noteIndexesTwo = noteIndexes[1];
  const matchedSpanOne = `span${noteIndexesOne}`;
  const matchedSpanTwo = `span${noteIndexesTwo}`;

  for (let i = 1; i <= 12; i++) {
    if (
      (noteIndexesOne === i && matchedSpanOne === `span${i}`) ||
      (noteIndexesTwo === i && matchedSpanTwo === `span${i}`)
    ) {
      document.getElementById(`span${noteIndexesOne}`).style.color = "white";
      document.getElementById(`span${noteIndexesTwo}`).style.color = "white";
      document.getElementById(`span${noteIndexesOne}`).style.backgroundColor =
        "green";
      document.getElementById(`span${noteIndexesTwo}`).style.backgroundColor =
        "green";
    } else {
      document.getElementById(`span${i}`).style.color = "rgb(0, 9, 128)";
      document.getElementById(`span${i}`).style.backgroundColor =
        "rgb(236, 205, 173)";
    }
  }
}

function revealAnswer() {
  const notesDistance = buddy.checkDistance();
  const inputNum = Number(distance.value);
  showDistance();
  if (notesDistance === inputNum) {
    showExplanation();
    hideRevealAnswer();
    streakCount();
    result.style.color = "green";
    return correctAnswer();
  } else {
    streakReset();
    hideDistance();
    showRevealAnswer();
    result.style.color = "red";
    return incorrectAnswer();
  }
}

function correctAnswer() {
  return (result.innerHTML = "You got it right .Well Done!");
}

function incorrectAnswer() {
  return (result.innerHTML = "Wrong answer! Try again!");
}

function streakCount() {
  return displayCount.innerHTML++;
}

function streakReset() {
  return (displayCount.innerHTML = 0);
}

submitBtn.onclick = function () {
  showResult();
  revealAnswer();
};

revealAllNotes.onclick = function () {
  showExplanation();
  showDistance();
  disableSubmitBtn();
};

function hideExplanation() {
  explanation.style.display = "none";
}

function showExplanation() {
  const distance = buddy.checkDistance();
  explanation.style.display = "block";
  return (distanceValue.innerHTML = distance);
}

function hideResult() {
  result.style.display = "none";
}

function showResult() {
  result.style.display = "block";
}

function showRevealAnswer() {
  revealAllNotes.style.display = "block";
}

function hideRevealAnswer() {
  revealAllNotes.style.display = "none";
}

function hideDistance() {
  revealDistance.style.display = "none";
}

function showDistance() {
  const distance = buddy.checkDistance();
  revealDistance.style.display = "block";
  return (distanceValue.innerHTML = distance);
}

function disableSubmitBtn() {
  submitBtn.disabled = true;
}

function enableSubmitBtn() {
  submitBtn.disabled = false;
}

module.exports = {
  revealAnswer,
  showDistance,
  showNotes,
  randomNotes,
  displayCount,
  inputNum,
  submitBtn,
  displayNotes,
  explanation,
  distanceValue,
  result,
};
