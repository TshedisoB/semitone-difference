class JamBuddy {
  constructor() {
    this.notes = [
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
    ];
    this.twoNotes = [];
  }

  selectNotes() {
    const randomNotes = [...this.notes];
    randomNotes.sort(() => Math.random() - 0.5);
    this.twoNotes = randomNotes.slice(0, 2);
    return this.twoNotes;
  }

  checkDistance() {
    for (let i = 0; i < this.twoNotes.length; i++) {
      if (this.twoNotes[i] === "Bb") {
        this.twoNotes[i] = "A#";
      }
      if (this.twoNotes[i] === "Db") {
        this.twoNotes[i] = "C#";
      }
      if (this.twoNotes[i] === "Eb") {
        this.twoNotes[i] = "D#";
      }
      if (this.twoNotes[i] === "Gb") {
        this.twoNotes[i] = "F#";
      }
      if (this.twoNotes[i] === "Ab") {
        this.twoNotes[i] = "G#";
      }
    }

    const firstNote = Math.abs(this.notes.indexOf(this.twoNotes[0]));
    const secondNote = Math.abs(this.notes.indexOf(this.twoNotes[1]));
    let distance = secondNote - firstNote;

    if (distance < 0) {
      distance = distance + 12;
    }

    return distance;
  }

  checkAnswer(num) {
    const trueDistance = this.checkDistance(num);
    return trueDistance === num;
  }

  checkIndexPosition() {
    for (let i = 0; i < this.twoNotes.length; i++) {
      if (this.twoNotes[i] === "Bb") {
        this.twoNotes[i] = "A#";
      }
      if (this.twoNotes[i] === "Db") {
        this.twoNotes[i] = "C#";
      }
      if (this.twoNotes[i] === "Eb") {
        this.twoNotes[i] = "D#";
      }
      if (this.twoNotes[i] === "Gb") {
        this.twoNotes[i] = "F#";
      }
      if (this.twoNotes[i] === "Ab") {
        this.twoNotes[i] = "G#";
      }
    }

    const firstNote = Math.abs(this.notes.indexOf(this.twoNotes[0]));
    const secondNote = Math.abs(this.notes.indexOf(this.twoNotes[1]));
    return [firstNote + 1, secondNote + 1];
  }
}

module.exports = JamBuddy;
