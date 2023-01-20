let sum = 0;
const positiveNum = [];
// eslint-disable-next-line max-len
const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

for (let i = 1; i <= arr.length; i += 1) {
  if (arr[i] >= 0) {
    sum += arr[i];
    positiveNum.push(arr[i]);
  }
}
console.log(sum);// Знайти суму  позитивних елементів.
console.log(positiveNum.length);// кількість позитивних елементів.

// Знайти мінімальний елемент масиву та його порядковий номер.

let min = arr[0];

// eslint-disable-next-line no-restricted-syntax
for (const count of arr) {
  if (count < min) {
    min = count;
  }
}
console.log(min);// мінімальне число
console.log(arr.indexOf(min));// інекс мінімально числа в масиві

// Знайти максимальний елемент масиву та його порядковий номер.

let max = arr[0];

// eslint-disable-next-line no-restricted-syntax
for (const count of arr) {
  if (count > max) {
    max = count;
  }
}
console.log(max);// максимальне число
console.log(arr.indexOf(max));// індекс максимально числа

// Визначити кількість негативних елементів.

const negativeNum = [];
for (let i = 1; i <= arr.length; i += 1) {
  if (arr[i] < 0) {
    negativeNum.push(arr[i]);
  }
}
console.log(negativeNum.length);// кількість негативних елементів

// Знайти кількість непарних позитивних елементів.
const oddNum = [];

for (let i = 0; i <= arr.length; i += 1) {
  if (arr[i] > 0 && arr[i] % 2 !== 0) {
    oddNum.push(arr[i]);
  }
}
console.log(oddNum.length);// кількість непарних позитивних елементів

// Знайти кількість парних позитивних елементів.
const evenNum = [];

for (let i = 0; i <= arr.length; i += 1) {
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    evenNum.push(arr[i]);
  }
}
console.log(evenNum.length);// кількість парних позитивних елементів

// Знайти суму парних позитивних елементів
let count = 0;
for (let i = 0; i <= arr.length; i += 1) {
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    count += arr[i];
  }
}
console.log(count);// сума парних позитивних елементів

// Знайти суму непарних позитивних елементів.
let countOdd = 0;

for (let i = 0; i <= arr.length; i += 1) {
  if (arr[i] > 0 && arr[i] % 2 !== 0) {
    countOdd += arr[i];
  }
}
console.log(countOdd);// сума не парних позитивних елементів

// Знайти добуток позитивних елементів.

let mult = 1;
for (let i = 0; i <= arr.length; i += 1) {
  if (arr[i] > 0) {
    mult *= arr[i];
  }
}
console.log(mult);

// Знайти найбільший серед елементів масиву, ост альні обнулити.

let maxNum = arr[0];
let maxIndex = 0;
for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
    maxIndex = i;
  }
  arr[i] = 0;
}
arr[maxIndex] = maxNum;
console.log(arr);
