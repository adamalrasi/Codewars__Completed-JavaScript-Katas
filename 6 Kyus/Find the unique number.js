/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique

*/

function findUniq(arr) {
    console.log("arr", arr)
    let newObj = {}
    for(let numb of arr) newObj[numb] = (newObj[numb] || 0) + 1
    for(let key in newObj){
    console.log(key, newObj[key])
    if(newObj[key] == 1) 
      return Number(key)
    } 
    return -1
  }
  