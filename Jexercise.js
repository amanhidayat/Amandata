console.log("Soal Nomor 1");
// create a function 
// input: "Pig latin is cool"
// return: "igPay atinlay siay oolcay !ay"

let kata = "Pig latin is cool !"
function strAy(kata) {
    return kata.split(" ").map(item => item.substr(1) + item[0] + "ay").join(" ")
}

console.log(strAy(kata))


console.log("Soal Nomor 2");
// create a function
// if begin with vocal, +"way"
// input: "Pig latin is cool !"
// return: "igPay atinlay siway oolcay !ay"
let aay = (str) => {
    let vocal = "aiueoAIUEO";
    return str
       .split(" ")
       .map((item) => {
          let firstChar = item[0];
          let secondChar = item[1];
          for (let i = 0; i < item.length; i++) {
          if (vocal.includes(firstChar)) {
             return "s" + item[i] + "way";
          } else if (!vocal.includes(firstChar) && !vocal.includes(secondChar)) {
             return item.slice(1) + firstChar + "ay ";
          } else {
             let res = "";
             let i = 0;
             while (i < item.length && !vocal.includes(item[i])) {
                res += item[i];
                i++;
             }
             return item.slice(i) + res + "ay "
          }
       }})
       .join(" ");
 };
 console.log(aay("Pig latin is cool !"));


console.log("Soal Nomor 3");
// create a function 
// input: "igPay atinlay siay oolcay !ay"
// return: "Pig latin is cool"
function pigLatinConverter(text) {
    const words = text.split(' ');
  
    function convertWord(word) {
      if (word.endsWith('way')) {
        return word.slice(0, -3);
      } else {
        return word.slice(-3, -2) + word.slice(0, -3);
      }
    }
  
    const pigLatinWords = words.map(convertWord);
  
    const pigLatinText = pigLatinWords.join(' ');
  
    return pigLatinText;
  }
  const inputText2 = "igPay atinlay siway oolcay !ay";
  const englishOutput = pigLatinConverter(inputText2);
  console.log(englishOutput);

console.log("Soal Nomor 4");
    // dataSensor = ["Anjing", "Babi"]
    // input: "budi memberi makan anjing"
    // return "budi memberi makan a****g"

    // input2: "babi dan anjing"
    // return2 : "b**i dan a****g"
function myFUNC (str) {
    let dataSensor = ["anjing", "babi"]
    let res = []
    str.split(" ").map(item => {
        if (dataSensor.includes(item)) {
            res.push(item[0] + "*".repeat(item.length - 2) + item[item.length -1])
        } else {
            res.push(item)
        }
    })
    return res.join(" ")
}
    
console.log(myFUNC("anjing dan babi"))


