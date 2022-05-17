'use strict';

// 1. valuble: primitive type & object 
// number, string, boolean, null, undefined, symbol: primitive type의 데이타는 다른 변수에 할당될때 값 자체가 복사
// object : reference 가 메모리에 할당되어 있기 때문에 다른 변수에 할당시 reference가 복사

// let vs const 
// let: mutervale 
// const: immuterable, 상수변수, 자체의 레퍼런스는 수정불가, 레퍼런스가 가르치고 있는 것은 수정가능

class Counter {
    constructor(runEvery5Times) {
        this.counter = 0;
        this.callback = runEvery5Times;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
        }
    }
}

function printSomthing(num) {
    console.log(`yo! ${num}`);
}

function alertNum(num) {
    console.log(`Alert! ${num}`);
}

const printCounter = new Counter(printSomthing);
const alertCOunter = new Counter(alertNum);