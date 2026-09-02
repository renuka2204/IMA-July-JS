// Multiplication Tables

let number = 7;
for (let i=1; i<=10; i++){
    console.log(number * i);
}

// Sum of Even and Odd Numbers

let totalEven = 0;
let totalOdd = 0;
let sumEven = 0;
let sumOdd = 0;

for (let i = 1; i <= 50; i++) {

  if (i % 2 === 0) {
    totalEven++;
    sumEven += i;
  } else {
    totalOdd++;
    sumOdd += i;
  }
}
console.log("Total Even Numbers:", totalEven);
console.log("Total Odd Numbers:", totalOdd);
console.log("Sum of Even Numbers:", sumEven);
console.log("Sum of Odd Numbers:", sumOdd);

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("First number divisible by 3 and 5:", i);
    break;
  }
}
