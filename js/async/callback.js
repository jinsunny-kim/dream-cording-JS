'use strict';

// JavaScript is Synchronous. by order -> in order 동기적, 정해진 순서에 맞게 실행
// Execute the code block by  order after hoisting. 
// hoisting: var, function declaration  변수, 함수선언이 바로 제일 위로 올라가는 것


// Synchronous callback
// 즉각적으로 동기적으로 실행되는 콜백
function printImmediately(print) {
    print();
}

// Asynchronous callback
// 언제 실행될지 모르는 콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

console.log('1'); //동기
setTimeout(() => console.log('2'), 1000); //1000ms -> 1초 지난 다음에 함수를 call해줘, 비동기적 실행, 비동기
console.log('3'); //동기
printImmediately(() => console.log('hello')); // 1/3/hello/2 로 setTimeout의 출력2 보다 먼저 실행, 동기
printWithDelay(() => console.log('async callback'), 2000); //비동기


// CallBack Hell Example
class UserStorage {
    loginUser(id, password, onSucess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSucess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSucess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSucess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);