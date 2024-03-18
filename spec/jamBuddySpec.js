const JamBuddy = require("../src/jamBuddy");
const buddy = new JamBuddy();
const notes = buddy.selectNotes();

describe("JamBuddy class:", function () {
  it("should return two notes from the notes", function () {
    expect(notes.length).toBe(2);
  });

  it("should check if the notes are correct", function () {
    expect(buddy.notes).toEqual([
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "Db",
      "Bb",
      "Eb",
      "Gb",
      "Ab",
    ]);
  });
});

describe("JamBuddy checkAnswer() class:", function () {
  buddy.selectNotes();

  it("should return true if the difference between the notes A and A# is 1 ", function () {
    buddy.twoNotes = ["A", "A#"];
    expect(buddy.checkAnswer(1)).toEqual(true);
  });

  it("should return true if the difference between the notes A# and Db is 3 ", function () {
    buddy.twoNotes = ["A#", "Db"];
    expect(buddy.checkAnswer(3)).toEqual(true);
  });

  it("should return true if the difference between the notes A# and A is 11", function () {
    buddy.twoNotes = ["A#", "A"];
    expect(buddy.checkAnswer(11)).toEqual(true);
  });

  it("should return true if the difference between the notes A# and Bb is 0", function () {
    buddy.twoNotes = ["A#", "Bb"];
    expect(buddy.checkAnswer(0)).toEqual(true);
  });

  it("should expect distance to be '0' between the notes A# and Bb.", function () {
    buddy.twoNotes = ["A#", "Bb"];
    expect(buddy.checkDistance()).toEqual(0);
  });
});
