/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
// /[aeiou]/gi:

// This is a regular expression (regex) pattern.
// [aeiou] matches any single character that is a vowel (a, e, i, o, u).
// The g flag means "global," meaning it will find all matches in the string (not just the first match).
// The i flag means "case-insensitive," so it will match both uppercase and lowercase vowels.
// str.match(/[aeiou]/gi):

// The match() function looks for all occurrences of vowels in the string str using the regex /[aeiou]/gi and returns them in an array.
function countVowels(str) {
  // Your code here
  /*const vowels = str.match(/[aeiou]/gi);
    console.log(vowels);
    return vowels ? vowels.length : 0;*/

  //? another way
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  console.log(count);
  return count;
}
countVowels("hi my name is saumya");
module.exports = countVowels;
