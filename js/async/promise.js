'use strict';

// Promise
// 비동기를 간편하게 사용할수있도록 도와주는 object
// Promise is a Javascript object for asynchronous operation
// 1. state 2. producer 정보제공자 / consumer 정보사용자 차이

// State: 운영중일때는 pending -> 운영이 다 끝나면 fulfilled or rejected 문제가 생긴다면
// Producer vs Consumer

// 1. Producer
// 비동기적 실행, promise는 클래스로 new로 생성
// promise를 만드는 순간 executer가 바로 실행
// When new promise is created, the executer runs automatically 
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, read files)
    console.log('doing something');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumer: then, catch, finally
promise
// then은 다시 promise를 리턴하고 promise의 catch를 다시 리턴
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    //실패나 성공에 관계없이 마지막에 무조건 수행
    .finally(() => {
        console.log('finally');
    });


// 3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handing
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });


const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 달걀`), 1000);
        setTimeout(() => reject(new Error(`error: ${hen} => 달걀`)), 1000);
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 달걀후라이`), 1000);
    });

// getHen()
//     .then(hen => getEgg(hen)) // 받은 value를 바로  호출할 경우 생략가능
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal));

getHen() //
    .then(getEgg)
    .catch(error => '빵')
    .then(cook)
    .then(console.log)
    .catch(console.log); // 에러처리