/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function pairsOfTwoChar(str){
    if(str === "") return []
    let newArr str.split("").map((val, idx) => {
        if(idx % 2 ===0) {
            return val + (str[idx+1] || "_")
        } else {
            return " "
        }
    }).join("").split(" ")
}