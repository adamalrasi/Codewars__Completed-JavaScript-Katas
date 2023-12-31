/*
Multiplying numbers as strings
This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!
*/

function multiply(num1, num2){
    // Convert the input numbers from strings to arrays of integers
        let vec1 = num1.split("").reverse().map(Number);
        let vec2 = num2.split("").reverse().map(Number);
     
        // Initialize the result array with zeros
        let result = Array(vec1.length + vec2.length).fill(0);
     
        // Multiply each digit in vec2 with vec1 and add the result to the appropriate position in the result array
        for (let i = 0; i < vec2.length; i++) {
            let carry = 0;
            for (let j = 0; j < vec1.length; j++) {
                let product = vec1[j] * vec2[i] + carry + result[i + j];
                carry = Math.floor(product / 10);
                result[i + j] = product % 10;
            }
            result[i + vec1.length] = carry;
        }
     
        // Remove leading zeros from the result array and convert it back to a string
        while (result.length > 1 && result[result.length - 1] === 0) {
            result.pop();
        }
        return result.reverse().join("");
    }