/*
Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
*/

function sumPairs(ints, s) {
  
    if(ints.length < 2 ) return undefined;
    
    let inSet = new Set()
    for(let i = 0; i < ints.length; i++){
      let needed = s - ints[i]
      if(inSet.has(needed)) return [needed, ints[i]]
      inSet.add(ints[i])
    }
    return undefined
  }