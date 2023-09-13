console.log("Soal Nomor 1");
/* ● Create a function to convert Excel sheet column title to its corresponding column number.
● Example : 
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
…
● Example : 
○ Input : AB
○ Output : 28
*/
function titleToNumber(n) {
    let result = 0;
    const ACode = 'A'.charCodeAt(0);

    for (let i = 0; i < n.length; i++) {
        const char = n.charAt(i);
        const charValue = char.charCodeAt(0) - ACode + 1;
        result = result * 26 + charValue;
    }

    return result;
}

console.log(titleToNumber("AB"));



console.log("Soal Nomor 2");
/* Given a non-empty array of integers nums, every element appears twice except for one. Find 
that single one.
● You must implement a solution with a linear runtime complexity and use only constant extra 
space.
● Example 1:
○ Input: nums = [2,2,1]
○ Output: 1
● Example 2:
○ Input: nums = [4,1,2,1,2]
○ Output: 4
● Example 3:
○ Input: nums = [1]
○ Output: 1
*/

let temukanNomor = (arr) => {
    return arr.filter(v => arr.filter(item => item == v).length == 1)
};

console.log(temukanNomor([4, 1, 2, 1, 2]));

console.log("Soal Nomor 3");
/* ● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
● Example 1:
○ Input: s = "anagram", t = "nagaram"
○ Output: true
● Example 2:
○ Input: s = "rat", t = "car"
○ Output: false
*/
function myfunc(a, b) {
    let newA =a.split("").sort().join("")
    let newB =b.split("").sort().join("")

    return newA == newB

}

console.log(myfunc("anagram", "nagaram"));
console.log(myfunc("rat", "car"))
    


console.log("Soal Nomor 4");
/* ● You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 
or 2 steps. In how many distinct ways can you climb to the top?
● Example 1:
○ Input: n = 2
○ Output: 2
○ Explanation: There are two ways to climb to the top.
■ 1. 1 step + 1 step
■ 2. 2 steps
● Example 2:
○ Input: n = 3
○ Output: 3
○ Explanation: There are three ways to climb to the top.
■ 1. 1 step + 1 step + 1 step
■ 2. 1 step + 2 steps
■ 3. 2 steps + 1 step 
*/

function climbStairs(n) {
    let res = [0, 1]
    for (let i = 2; i <= n +1; i++) {
        res.push(res[i - 1] + res[i - 2])
    }
    return res[n +1]
  }

  console.log(climbStairs(5));