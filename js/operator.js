// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: ''' 
1+2 = ${1+2}`);

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 - 1); //substract
console.log(1 * 1); //mulitply
console.log(1 * 1); //mulitply
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1; // 우선 counter에 counter + 1를 할당한 후
// preIncrement = counter; // 이것을 preIncrement에 할당
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter; // 우선 postIncrement에 counter를 할당한후 
// counter = counter + 1;  // counter에 counter + 1를 다시 할당
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = counter--;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = --counter;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operator
let x = 3;
let y = 4;
x += y;
console.log(x += y);
x -= y;
console.log(x -= y);
x *= y;
console.log(x *= y);
x %= y;
console.log(x %= y);

//5. Comparison Operator
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); //greater than or equal

// 6. Logical Operator: || (or), && (and), !(not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value, heavy operations are located at the end
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value, heavy operations are located at the end
console.log(`and: ${value1 && value2 && check()}`);

// open used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('ohhhhhh');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false); // 0은 false로 볼수 있기에 True
console.log(0 === false); // 0은 boolean이 아니기 때문에 false
console.log('' == false); // 공백은 false로 볼 수 있기에 True
console.log('' === false); // 공백의 타입이 boolean이 아니기에 false
console.log(null == undefined); //null과 undefined은 같은것기에 true
console.log(null === undefined); //null이 boolean 타입이 아니기에 false

// 8. COnditional operator: if
// if, else if, else
const name = 'df';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator 
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use fo enum-like value check
// use for mutiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        // console.log('love you!');
        // break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is execute.
// 조건문이 맞을 때만 블럭 실행
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
// 블럭 실행후 조건문의 검사후 멈춤
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}


// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1: ${i}`);
}

// q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 10; i++) {
    if (i === 8) {
        break;
    }
    console.log(`q2: ${i}`);
}