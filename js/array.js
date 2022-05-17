'use restrict';

// object: 비슷한 특징과 행동들을 묶어놓는것
// 자료구조: 비슷한 타입의 object를 묶어놓는 것, 동일의 타입의 data만 담을 수 있지만 javascript는 dynamically typed languge라 다른 타입들을 담을 수 있지만 되도록 지양

// Array🎈

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['🥨', '🍕'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); //마지막 배열을 찾을때 0부터 시작

// 3. Looping over an array
// print all fruits
// a. for

for (let i = 0; i > fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach(function(fruit, index, array) {
    console.log(array, index, array);
});

fruits.forEach((fruit, index, array) => console.log(array, index, array));

//anonymous fuction은 삭제하고 arrow fuction =>로 교체 가능, {}로도 필요없음

console.clear();

// 4. Addtion, deletion cody

// push: add an item  to the end
fruits.push('🍟', '🥐');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🥗', '🥩');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shit, unshift are slower than pop, push
// 가능하면 pop과 push사용, shift/unshift는 전체 데이타가 움직여야 하기 때문에 배열의 길이가 길면 길수록 더 느려짐

// splice: remove an item by index position
fruits.push('🍖', '🍘', '🧀');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🥡', '🍛');
console.log(fruits);

// combine two arrays
const fruits2 = ['🥯', '🥠'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();

// 5. Searching
// find the index

console.log(fruits);
console.log(fruits.indexOf('🥡'));
console.log(fruits.indexOf('🍛'));
console.log(fruits.indexOf('🧀'));

// includes
console.log(fruits.includes('🥡'));
console.log(fruits.includes('🧀'));

console.clear();

// lastIndexof
console.log(fruits);
fruits.push('🥨');
console.log(fruits);
console.log(fruits.indexOf('🥨'));
console.log(fruits.lastIndexOf('🥨'));

console.clear();

// Examples
const numbers = [6, 5, 10, 23, 45, 79, 100];

function filterTest(num) {
    return num % 2 === 0;
}

console.log(numbers.filter(filterTest));