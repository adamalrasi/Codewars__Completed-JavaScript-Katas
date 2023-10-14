/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

FUNDAMENTALS
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var lowest;
    for (var i in args) {
      if (i == 0) {
        lowest = args[i];
      } else {
        if (lowest >= args[i]) {
          lowest = args[i];
        }
      }
    }
    return lowest;
  }
}
