// Given 2 binary numbers, print the prime numbers in between those 2 binary numbers.
// Input You are given 2 binary numbers
// Sample Input 1

// Input: num1 = 101, num2 = 11111

// Output
// 5, 7, 11, 13, 17, 19, 23, 29, 31

let num1 = 101,
  num2 = 11111;

num1 = parseInt(num1, 2);
num2 = parseInt(num2, 2);

function checkIsPrime(num) {
  let isPrime = true;
  for (let index = 2; index <= num / 2; index++) {
    if (num % index === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

while (num1 <= num2) {
  if (checkIsPrime(num1)) {
    console.log(num1);
  }
  num1++;
}
