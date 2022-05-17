'use strict';

// 함수 선언
// 함수 호출

// 함수선언
// 선언을 하때는 어떤 값을 받아 올것인지 인자들을 정의하고 코드 블럭을 작성
// 선언만 하면 코드가 실행되지 않는다.
function doSomething(add) {
    //코드
    console.log(add); //어떤 기능을 수행하고 그냥 끝나는 타입
    const result = add(2, 3); // 2,3을 인자로 가진 함수 호출하여 변수 result에 전달
    console.log(result);
}

// 함수의 두가지 타입
// 1) 어떤 기능을 수행하고 그냥 끝나는 타입
// 2) 어떠한 계산을 하고 특정한 값을 전달하는 타입

function add(a, b) {
    const sum = a + b; //어떠한 계산을 하고 특정한 값을 전달하는 타입
    return sum;
}

// 함수 호출
// 함수를 선언하고 실행하려면 호출해야함
// 함수를 호출하기 위해서는 함수이름 옆에 ()소괄호를 이용해 함수에서 원하는 정의된 인자값들을 전달하며 호출
// 함수 이름 자체는 함수를 가르키는 함수 자체가 된다. 소괄호를 쓰지 않고 다른 함수에 인자로 전달하던지 변수에 할당하면 함수자체를 가르치게 되는 것.
doSomething(add); // doSomething함수 호출하면서 인자로 add 자체를 전달(함수의 이름만 소괄호 뺴고), add()를 넣으면 a,b 인자가 없기 때문에 sum이 not a number(NaN)으로 나옴

const addFun = add; // 함수 자체 전달
console.log(addFun); // 함수 자체 출력
console.log(add(1, 2)); // 함수 인자들을 전달하며 호출