/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
*/
function alphabetPosition(text) {
  // compare index to the aplahbet variable, if true, push index in a array.
  const alphab = "abcdefghijklmnopqrstuvwxyz";
  let newString = "";

  // split the letters and turn into lowercase and store in an array
  const splitString = text.toLowerCase().split("");

  // find the position of array[index] in the alphab
  for (let i = 0; i < splitString.length; i++) {
    if (alphab.includes(splitString[i])) {
      newString += alphab.match(splitString[i]).index + 1 + " ";
    }
  }
  // return newString
  return newString.trim();
}
