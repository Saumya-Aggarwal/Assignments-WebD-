/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str
    .toLowerCase()
    .replace(
      /\s+/g,
      ""); 
      /*\s+: This is a regular expression where \s matches any whitespace character (spaces, tabs, line breaks), and + means "one or more" spaces.
   g flag: The global flag ensures that it removes all spaces, not just the first occurrence.*/
   str = str.replace(/[^a-zA-Z0-9]/g,""); // This regular expression matches any character that is not a letter or a number, and the g flag ensures that it removes all such characters.
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  if (revStr == str) {
    return true;
  } else {
    return false;
  }
}
module.exports = isPalindrome;
