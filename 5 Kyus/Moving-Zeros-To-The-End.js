/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
  var result = [];
  var zeros = [];

  for (var i in arr) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else if (arr[i] !== 0) {
      result.push(arr[i]);
    }
  }
  return result.concat(zeros);
};
