// check the vowels and consonants

function countVC(string){
  const vowels = "aeiouAEIOU";
  let countVowels = 0
  let countConsonants = 0
  let countChair = {}
  let duplicateChar = {}

  let listVowels = [];
  let listConst = [];

  for (let ch of string){
    if (vowels.includes(ch)){
        countVowels++
        listVowels.push(ch)
    }else if(/[a-zA-Z]/.test(ch)){
        countConsonants++
        listConst.push(ch)
    }    
    }
    for (let cha of string){
       countChair[cha] = (countChair[cha] || 0)+1
    }

    for (let cha in countChair){
        if(countChair[cha] > 1){
         duplicateChar[cha] = countChair[cha]
        }
    }
    return {countVowels, countConsonants, listVowels, listConst, countChair, duplicateChar}
  }


const strValue = "This is my first code for string";

const result = countVC(strValue)
console.log("These are the list of vowels : " +result.countVowels)
console.log("These are the list of consonants : " +result.countConsonants)
console.log("List of vowels :" +result.listVowels)
console.log("List of COnsonants :" +result.listConst)
console.log("Count Chars :", result.countChair)
console.log("Duplicate Chars :", result.duplicateChar)



// factorial Number
function factorial(num){
    let result = 1
    for (let i = 1 ; i <=num ; i++){
        result *= i;
    }
    return result;
}

console.log(factorial(5))


