/* Soal nomor 1
const identifierCount = {}; {

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

// Soal Nomor 2
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


// Soal Nomor 3
let floors = floor;
    let lockers = 0;

    let result;
    let locker_counter = 4;
    let x = 1;

    for(let i = 1 ; i <= floors; i++) {
        
        let arr_lockers = [];

        if(x <= 3){
            locker_counter++;
        } else if (x > 3){
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

// soal nomor 4
let last = arr.splice(-k); 
    
    let newArr = arr;
    
    let first = last.concat(newArr);
    
    return first;

} */