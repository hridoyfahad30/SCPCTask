// Task 1
// Created a function for reverse a string without using built-in reverse() methods.

const stringReverse = (string) => {
  return Array.from(string).reduce((pre, current) => current + pre);
};

const inputString = "hello world";
const stringReversed = stringReverse(inputString);
// console.log(stringReversed);


// ----------------------------------------------------------

// Task 2
// Created a function for sum all of positive number of an array.

const addPositiveNumber = (numbers) => {
  return numbers.reduce((sum, number) => (number > 0 ? sum + number : sum), 0);
};

const inputNumbers = [2, -5, 10, -3, 7];
const sum = addPositiveNumber(inputNumbers);
// console.log(sum);

// Task 3
// Created a function for find most frequent number in an array.

const findFrequent = (inputArray) => {
  const frequencyMap = new Map();
  let maxFrequent = 0;
  let mostFrequentElement = null;

  inputArray.forEach((number) => {
    const frequency = frequencyMap.get(number) || 0;
    frequencyMap.set(number, frequency + 1);
    if (frequency + 1 > maxFrequent) {
      maxFrequent = frequency + 1;
      mostFrequentElement = number;
    }
  });

  return mostFrequentElement;
};

const numbers = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findFrequent(numbers);
// console.log(mostFrequent);


// ----------------------------------------------------------

// Task 4
// Created a function for find out numbers that sum are match with target.

const twoNumbersForTarget = (number, target) => {
  const NumberMap = new Map();

  const arrayIndex = number.findIndex((num, index) => {
    const array = target - num;
    if (NumberMap.has(array)) {
      return true;
    }
    NumberMap.set(num, index);
    return false;
  });

  return arrayIndex !== -1
    ? [NumberMap.get(target - number[arrayIndex]), arrayIndex]
    : null;
};

const numbersArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = twoNumbersForTarget(numbersArray, targetValue);
// console.log(result);


// ----------------------------------------------------------

// Task 5
// Created a function for calculate

const calculator = (number1, number2, operator) => {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      return "Invalid calculation";
  }
};

const number1 = 10;
const number2 = 5;
const operation = "+";
const total = calculator(number1, number2, operation);
//   console.log(total);


// ----------------------------------------------------------

// Task 6
//  Created a function for generate password.

const generateRandomPassword = (length) => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%&_?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  const randomPassword = Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    return allChars.charAt(randomIndex);
  }).join("");

  return randomPassword;
};

const passwordLength = 16;
const randomPassword = generateRandomPassword(passwordLength);
//   console.log(randomPassword);


// ----------------------------------------------------------

// Task 7
//  Created a function for Roman Numeral to Integer.

const romanToInteger = (romanNumeral) => {
  const romanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const integerArray = [...romanNumeral].map(
    (numeral) => romanNumeralMap[numeral]
  );
  const integerValue = integerArray.reduce((pre, curr, index, arr) => {
    if (curr < arr[index + 1]) {
      return pre - curr;
    }
    return pre + curr;
  }, 0);

  return integerValue;
};

const romanNumeral1 = "CIV";
const romanNumeral2 = "XXI";

const test1 = romanToInteger(romanNumeral1);
const test2 = romanToInteger(romanNumeral2);

//   console.log(test1);
//   console.log(test2);


// ----------------------------------------------------------

// Task 8
// Created a function for

const secondSmallest = (array) => {
  if (array.length < 2) {
    return "Array must have at least 2 elements";
  }

  const smallest = Math.min(...array);
  const withoutSmallest = array.filter((num) => num !== smallest);
  return Math.min(...withoutSmallest);
};

const exampleArray = [5, 2, 8, 3, 9, 4];
const smallest = secondSmallest(exampleArray);
//   console.log(smallest);
