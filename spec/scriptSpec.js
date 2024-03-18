const jsdom = require("jsdom");
const fs = require("fs");
const index = fs.readFileSync("./index.html", "utf-8");
const { JSDOM } = jsdom;
const { document } = new JSDOM(index).window;
global.document = document;

const JamBuddy = require("../src/jamBuddy");
const {
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
} = require("../src/script");

const buddy = new JamBuddy();

describe("JamBuddy checkAnswer() && DOM testing:", function () {
  it("should return 'Wrong answer! Try again!' if submit button is clicked", function () {
    if (submitBtn.onclick) {
      revealAnswer();
      expect(result.innerHTML).toBe("Wrong answer! Try again!");
    }
  });

  it("should return 'You got it right .Well Done!' if input is correct", function () {
    if (inputNum.value === buddy.checkDistance()) {
      revealAnswer();
      expect(result.innerHTML).toBe("You got it right .Well Done!");
    }
  });

  it("should populate displayNotes with two notes when 'Get random notes' button os clicked", function () {
    if (randomNotes.onclick) {
      showNotes();
      expect(displayNotes.innerHTML).toBeDefined();
    }
  });

  it("should reset the streak count when the distance is incorrect", function () {
    if (inputNum.value !== buddy.checkDistance()) {
      revealAnswer();
      expect(displayCount.innerHTML).toBe("0");
    }
  });

  it("should show the distance when the 'Reveal notes' button is clicked", function () {
    document.getElementById("revealAllNotes").click();
    expect(showDistance()).toBe(parseInt(distanceValue.innerHTML));
  });

  it("should display two notes when the 'Get random notes' button is clicked", function () {
    if (document.getElementById("randomNotes").click()) {
      expect(displayNotes.innerHTML).toBeDefined();
    }
  });

  it("should allow user to enter a number when 'input field' is clicked", function () {
    if (document.getElementById("distance").click()) {
      expect(document.getElementById("distance").value).toBe("");
    }
  });

  it("should show highlighted notes when the 'Reveal notes' button is clicked", function () {
    if (document.getElementById("revealAllNotes").onclick()) {
      expect(explanation.style.display).toBe("block");
    }
  });

  it("should hide 'explanation' when 'Get random notes' button is clicked", function () {
    if (document.getElementById("randomNotes").click()) {
      expect(document.getElementById("explanation").style.display).toBe("none");
    }
  });
});
