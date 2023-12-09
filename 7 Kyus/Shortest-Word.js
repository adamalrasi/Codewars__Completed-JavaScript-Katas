/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.



*/
function findShort(s) {
  const wordsArr = s.split(" ");
  let shortestString = Infinity;

  for (let i = 0; i < wordsArr.length; i++) {
    let wordLength = wordsArr[i].length;

    if (wordLength < shortestString) {
      shortestString = wordLength;
    }
  }
  return shortestString;
}
