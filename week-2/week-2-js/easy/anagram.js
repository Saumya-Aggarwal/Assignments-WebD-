/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var string1 = str1.toLowerCase().split("").sort().join("");
  console.log(string1);
  var string2 = str2.toLowerCase().split("").sort().join("");
  console.log(string2);
  if (string1 === string2) {
    return true;
  }else{
    return false;
  }
}
console.log(isAnagram("Listen", "silent")); //my testing
module.exports = isAnagram;
