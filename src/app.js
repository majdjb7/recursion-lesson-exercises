/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(number, result = number) {

  if(number == 1) {
    return result;
  }
  number--;

  result*=number;
  return findFactorial(number, result)

}
console.log(findFactorial(8))

//Exercise 2
const reverseString = function(str, resultStr='') {
  if(str == '') {
    return resultStr
  }

  resultStr += str.substring(str.length-1)
  str = str.substring(0, str.length-1)
  return(reverseString(str, resultStr))

}
console.log(reverseString('Hello World'))
//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1, arr2) {
  if (arr1.length == 0) {
    return
  }
  arr2.push(arr1.splice(0, 1)[0])

  return swap(arr1, arr2)
  //Your code here

}
swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]
/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }