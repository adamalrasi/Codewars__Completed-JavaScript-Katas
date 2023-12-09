/* Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate. */
function mergeArrays(a, b) {
  // 
  const one = [...a, ...b]
  const newArr = []
  one.sort((a, b) => a - b )
  for(let i = 0; i < one.length; i++){
    if(one[i] != one[i+1]){
      newArr.push(one[i])
    }
  }
  return newArr
}
