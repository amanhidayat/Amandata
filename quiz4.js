console.log("Soal Nomor 1");
let findFloorNumber = (room) => {
    let lockerPerFloor = [5, 6, 7, 5, 6, 7];
    let floor = 0;
    let i = 0;
 
    while (room > lockerPerFloor[i % 6]) {
       room -= lockerPerFloor[i % 6];
       i++;
       floor++;
    }
 
    floor += Math.ceil(room / 5);
    return floor;
 }
 
 console.log(findFloorNumber(3));


console.log("Soal Nomor 2");
function rearrange(arr){
arr.sort((a,b)=>a-b)
    let left= 0
    let right= arr.length-1
    let result = []
    let smallest= true
    while(left<=right){
        if(smallest){
            result.push(arr[left])
            left++
        }else{
            result.push(arr[right])
            right--
            
        }
        smallest=!smallest
    }
    return result
}
console.log(rearrange([4,2,9,7,1,8]));

console.log("Soal Nomor 3");
let findMaxNumber = (arr) => {
let res = []
    for (let i = arr.length; i >= 0; i--) {
        res.push(arr[i]);
    }
    return res.join("");
}
console.log(findMaxNumber([1, 1, 2, 2]));


console.log("Soal Nomor 4");

function calculateResults(arr) {
    let [n, totalPoints] = arr;
    let win = Math.floor(totalPoints / 3);
    let draw = totalPoints % 3;
    let lose = n - win - draw;
    return [win, draw, lose];
  }
  
  const arr = [2, 20, 60];  {
  const results = calculateResults(arr);
  
  console.log(results);
  }















