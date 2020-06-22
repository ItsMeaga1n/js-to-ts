export const isNullOrUndefined = (value) => {
  return typeof value === "undefined" || value === null;
};

export const noteToMIDI = (note) => {
  return note + 21;
};

const keyNotes = [0, 1, 0];
for (let i = 0; i < 7; i++) {
  keyNotes.push(0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0);
}
keyNotes.push(0);
export { keyNotes };

const keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const defaultKeysNames = ["A0", "A#0", "B0"];
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < keys.length; j++) {
    defaultKeysNames.push(keys[j] + (i + 1).toString());
  }
}
defaultKeysNames.push("C8");
export { defaultKeysNames };
