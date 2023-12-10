/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let i = 0;
  let j = str.length-1;
  let word = str.toLowerCase();

  while(i<j){
    if(word[i]!=word[j])
    return false;
  i++;
  j--;
  }
  return true;
}

module.exports = isPalindrome;
