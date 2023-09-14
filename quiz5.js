console.log("Soal Nomor 3");
function getStudent(kelas) {
    // Write your code here

    let floors = kelas;
    let lockers = 0;

    let result;
    let locker_counter = 4;
    let x = 1;

    for(let i = 1 ; i <= floors; i++){
        console.log("Kelas", i);
        let arr_lockers = [];

        if(x <= 3){
            locker_counter++;
        }else if(x>3){
            x = 1;
            locker_counter = 5;
        }
       for(let j = locker_counter ; j > 0 ; j--) {
            lockers++;
           
            arr_lockers.push(lockers);
       }
       x++;

       arr_lockers.unshift(i);
       
       result = arr_lockers;

    }
    return result;

} 
console.log(getStudent(1));
console.log(getStudent(5));

console.log("Soal Nomor 1");
const product = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 10, 15, 11],
];
const duplicationCounter = (product) => {
  const identifierCount = {};

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const identifier = product[row][col];

      if (identifierCount[identifier]) {
        identifierCount[identifier]++;
      } else {
        identifierCount[identifier] = 1;
      }
    }
  }

  let errorCount = 0;
  for (const identifier in identifierCount) {
    if (identifierCount[identifier] > 1) {
      errorCount += identifierCount[identifier] - 1;
    }
  }

  return errorCount;
};
console.log(duplicationCounter(product)); 

console.log("Soal Nomor 2");
function tellIndonesianTime(time) {
const [hour, minutes] = time.split(":").map(Number);
   let indonesianHour = hour;
   if (hour > 12) {
      indonesianHour -= 12;
   } else if (hour === 0) {
      indonesianHour = 12;
   }

   if (minutes === 0) {
      return `jam ${indonesianHour}`;
   } else if (minutes >= 1 && minutes <= 14) {
      return `jam ${indonesianHour} lewat ${minutes}`;
   } else if (minutes === 15) {
      return `jam ${indonesianHour} seperempat`;
   } else if (minutes >= 16 && minutes <= 29) {
      return `jam ${indonesianHour} lewat ${minutes}`;
   } else if (minutes === 30) {
      return `jam setengah ${indonesianHour + 1}`;
   } else if (minutes >= 31 && minutes <= 44) {
      return `jam ${indonesianHour + 1} kurang ${60 - minutes}`;
   } else if (minutes === 45) {
      return `jam ${indonesianHour + 1} kurang seperempat`;
   } else if (minutes >= 46 && minutes <= 59) {
      return `jam ${indonesianHour + 1} kurang ${minutes - 60}`;
   }

}
console.log(tellIndonesianTime('15:20'));

  console.log("Soal Nomor 4");
  function rotateArrays(arr, k) {
    let last = arr.splice(-k);
  
    let newArr = arr;
  
    let first = last.concat(newArr);
  
    return first;
  }
  
  // Sample Input and Output
  const input0 = [1, 2, 3, 4, 5];
  const rotations0 = 2;
  //console.log(rotateArrays(input0, rotations0));
  
  const input1 = [1, 0, 0, 1];
  const rotations1 = 2;
  //console.log(leftRotateArray(input1, rotations1));
  
  const input2 = [10, 11, 12, 13, 14];
  const rotations2 = 2;
  //console.log(leftRotateArray(input2, rotations2));