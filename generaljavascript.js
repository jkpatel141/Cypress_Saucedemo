/// <reference types="cypress"/>
function reverseString(str) {
  return str.split("").reverse().join("");
}

const printReverse = "I am learning the to reverse the string";
console.log(reverseString(printReverse));

// Reverse the string with different method

function reverseStringSecond(str) {
  let reverse = "";
  for (let i = str.length - 1; i > 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log("This is second method : " + reverseStringSecond(printReverse));

// to check the palindrome
function isPal(str) {
  let palStr = str.split("").reverse().join("");
  return palStr === str;
}

const correctPal = "tat";
console.log(isPal(printReverse));
console.log(isPal(correctPal));

// to check the number of vowels and consonants from the string

function vcCount(string){
  const vowels = "aeiouAEIOU";
  let countVowels = 0;
  let countConsonants = 0;
  const charCount = {};

  let vowelList = [];
  let consonantsList = [];

  for (let ch of string){
    if(vowels.includes(ch)){
      countVowels++
      vowelList.push(ch)
    }else if(/[a-zA-Z]/.test(ch)){
      countConsonants++
      consonantsList.push(ch)
    }
    if (ch != " "){
      charCount[ch] = (charCount[ch] || 0) + 1;
    }
  }

  let value = string.replace(/\s/g,"").length
  return {countVowels, countConsonants, vowelList, consonantsList,charCount,value}
}

const mainString = "This is testing for the check the vowels";

const result = vcCount(mainString)
console.log("Count of vowels :" + result.countVowels);
console.log("Count of consonants :" + result.countConsonants);
console.log("Vowels list :" , result.vowelList);
console.log("Consonant list :" , result.consonantsList);
console.log("Count the list :" , result.charCount);
console.log("Length of string :" , result.value);

// duplicate count
function dup(string){
  const duplicate = {};
  const charCount = {};

  for(let ch of string){
    charCount[ch] = (charCount[ch] || 0) + 1;
  }

  for (let ch in charCount){
    if(charCount[ch] > 1){
      duplicate[ch] = charCount[ch]
    }
  }
  return {duplicate,charCount}
}
const resultTest = "snndivnianidnbfrnidsnf";

const resultValue = dup(resultTest)
console.log("Total count of text : ",resultValue.charCount)
console.log("Duplicate value of text : ",resultValue.duplicate)

