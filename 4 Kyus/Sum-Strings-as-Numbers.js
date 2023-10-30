/*Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.*/

function sumStrings(a, b) {
  // Convert the string representations of the integers to numbers.
  //   console.log(a,b)
  // Convert the strings to BigIntegers to avoid precision errors.
  const num1 = BigInt(a);
  const num2 = BigInt(b);

  // Sum the BigIntegers.
  const sum = num1 + num2;

  // Convert the sum back to a string.
  return sum.toString();
}
