// 1. Use strict
// added in ES 5
// use this for valina JavaScript
'use strict';

// 2. Variable 변수 rw(Read/Write)
// let (added ES6)
// mutable type
// var (don't ever use this!) 옛날 버전, 값을 선언하기도 전에 출력 가능, 
// var hoisting (move declaration from bottom to top)
// ha no block scope

// 3. Contants, r(read only)
// use const whenever possible
// use only let if variable needs to change
const dayInWeek = 7;
const maxNumber = 5;

// Note!!
// 선언함과 동시에 메모리 할당, 값이 변경되지 않음
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutale data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive - 메모리에 value 할당, single item: number, boolean, null. undefiedn, symbol
// object - 커서 메모리에 다 올라갈수 없음 ref(reference)를 통해서 메모리에 할당, box container
// function, first-class function
// 숫자 타입에 관계없이 모두 number로 선언 , C/JAVA는 숫자타입(short, long, float, double...)에 따른 다른 메모리 할당

// number - special numberic: infinity , -infinitym, NaN(Not a number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// const bigInt = 1234567890123456789012345678901234 n; // over(-2**53 ~ 2*53)
// console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
// Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendon = 'brendon';
const greeting = 'hello ' + brendon;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendon}`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefiened, NaN,''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
// let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 값이 할당되지 않은 상태
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects 식별자, 
// 출력시 .description을 이용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, Real-life objects, data structure 
const ellie = { name: 'ellie', age: 20 };
console.log(ellie.age);
ellie.age = 21;
console.log(ellie.age);

// 5. Dynamic typing: dynamically typed language
let text = 'hello'; // string
console.log(text.charAt(0)); // string - h
console.log(`value: ${text}, type: ${typeof text}`); // string
text = 1; // number
console.log(`value: ${text}, type: ${typeof text}`); // number
text = '7' + 5; // string + number
console.log(`value: ${text}, type: ${typeof text}`); // string
text = '8' / '2'; //string / string
console.log(`value: ${text}, type: ${typeof text}`); // number
console.log(text.charAt(0)); // string으로 인식했으나 number, runtime error