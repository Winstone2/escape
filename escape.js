// Using escape characters in JavaScript strings

// Escape characters for single and double quotes
let singleQuotedString = 'This is a single-quoted string with a \'single quote\' inside.';
let doubleQuotedString = "This is a double-quoted string with a \"double quote\" inside.";

console.log(singleQuotedString);
console.log(doubleQuotedString);

// Newline and tab characters
let multiLineString = "This is a multi-line string.\nIt has two lines separated by a newline character.\tAnd a tab character here.";
console.log(multiLineString);

// Backspace and carriage return
let backspaceString = "Backspace\bCharacter"; // The "Backspace" word moves back one position.
let carriageReturnString = "Carriage\rReturn"; // The "Carriage" word is followed by "Return".
console.log(backspaceString);
console.log(carriageReturnString);

// Unicode escape characters
let unicodeString = "\u00A9 Copyright Symbol \u2764 Heart Symbol";
console.log(unicodeString);
