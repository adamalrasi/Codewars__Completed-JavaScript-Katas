/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
*/
function XO(str) {
  var z = str.toLowerCase();
  var x = z.split("x").length;
  var o = z.split("o").length;
  return x == o;
}