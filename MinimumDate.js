const dates = [new Date('2023-09-18'), new Date('2023-09-10'), new Date('2023-09-20')];
const minimumDate = new Date(Math.min(...dates));

console.log('Tanggal Minimum:', minimumDate.toDateString());