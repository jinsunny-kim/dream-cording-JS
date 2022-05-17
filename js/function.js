"use strict";

// function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculate a value

// 1. Function declaration
// fuction name (param1, param2) { body.... return; }
// one funtion === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, creatPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('he---lo');
log(23);
// 자바에서는 함수에서 타입이 확인되지 않음, typescript에서는 자료형 명시


// 2.Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
// paramenter 옆에 default값을 넣어주면 따로 코드를 작성해서 지정해 줄 필요가 없음
function showMessage(message, from = 'unknown') {
    // function showMessage(message, from) {
    //		from의 값이 없을경우 unknow이라 지정해줌 ES6이전의 경우
    //     if (from === undefined) {
    //         from = 'unknown';
    //     }
    console.log(`${message} by ${from}`);
}
showMessage('hi!');


// 4. Rest parameters (added in ES6)
// ...args 배열 형태
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // 배열출력 방법: args증 하나씩 꺼내서
    // for (const arg of args) {
    // 	console.log(arg);
    // }
    // forEach사용
    // args.forEach((arg) => console.log(arg));

}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
// 밖에서는 안을 볼수 없지만 안에서는 밖을 볼수 있다.
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); 
    //자식함수에서 부모함수의 값을 가져올수 있지만 자식함의 값을 부모함수에서 가져올수 없다
    return undefined; //return할 값이 없음
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
        // user.point가 10이상이면 로직을 실행하는 함수
    }
}
// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
        // user.point가 10이하이면 바로 빨리 리턴을 해서 제외하고 로직 실행
    }
    // long upgrade logic
}

// First-class function
// fuctions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another fuction

// 1. function expression
// a fuction declaration can be earlier than it is defiend (hoisted)
// 함수 호출수 함수 선언해도 값이 나옴. 선언된 함수가 가장 먼저 올라가기 때문에 
// a fuction expression is created when the execution reaches it.

const print = function() {
    // anonymous fuction
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 2));

// 2. call back fuction using fuction expression
function ramdomQuiz(answer, printYes, PrintNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        PrintNo();
    }
}

// anonymous fuction
const printYes = function() {
        console.log('yes');
    }
    // named fuction
    // better debugging in debugger's stack traces
    // recursions
const PrintNo = function print() {
    console.log('no');
    // print();
}
ramdomQuiz('wrong', printYes, PrintNo);
ramdomQuiz('love you', printYes, PrintNo);

// Arrow fuction
// always anonymous fuction

// const simplePrint = function() {
//     console.log('simplePrint!');
// };
const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a * b;
const simpleMultiply = (a, b) => {
    // do someting more
    return a * b;
}

// IIFE: Immediately Invoked fuction Expression
// 선언과 동시에 함수 호출
(function hello() {
    console.log('IIEF');
})();