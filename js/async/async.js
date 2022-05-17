'use strict';

// async & await
// syntactic sugar: 새로운것이 추가된것이 아니라 기존의 promise위에 좀 더 간편한 API 제공. 기존의 프로토타입을 베이스로 한 살짝 덧붙여진 것
// clear style of using promise

// 1. async
// javascript는 동기적으로 처리되기 때문에 오래 걸리는 코드는 비동기적으로 처리할수 있게 해줘야함
// promise: 언제 유저의 데이터를 받아 올지 모르지만 약속할게 이 promise라는 object를 가지고 있으면 여기에 then이라는 콜백함수만 등록해놓으면 유저의 데이타가 준비되는 되는 데로 니가 등록한 콜백함수를 불러줄께

// promise ((executer: resolve, resolve) => {});
function fetchUser() {
    // do somthing request in 10 sec...
    // return 'ellie';
    return new Promise((resolve, reject) => {
        // do somthing request in 10 sec... 비동기적 실행
        resolve('ellie'); // resolve or reject 콜백함수를 호출하지 않으면 promise의 상태(pending, fulfilled, rejected)가 'pending'으로 남아있음. 꼭 resolve or reject로 완료해주어야함
    });
}
const user = fetchUser();
user.then(console.log);
console.log(user);

// async
// 함수앞에 async를 넣어주면 함수안의 코드블럭이 promise로 변경됨
async function fetchUser2() {
    // do somthing request in 10 sec...
    return 'ellie again';
}
const user2 = fetchUser2();
console.log(user2);

// 2. await
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '애플';
}

async function getBanana() {
    await delay(1000);
    // throw 'error'; //에러처리
    return '바나나';
}

// promise의 chain을 쓰는 것보다 동 await를 이용해 기적으로 보이게 코딩하는 것이 직관적이라 이해하기가 편함
// function getBanana() {
//     return delay(1000)
//         .then(() => '바나나');
// }

async function pickFruits() {
    const applePromise = getApple(); //병렬처리
    const bananaPromise = getBanana(); //병렬처리
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple}+${banana}`;
}

pickFruits().then(console.log);

// function pickFruits() {
//     return getApple()
//         .then(apple => {
//             return getBanana().then(banana => `${apple} + ${banana}`);
//         });
// }
// pickFruits().then(console.log);

// async와 await를 사용하여 동기적으로 작성하듯이 비동기적 코드

// 3. usefull Promis APIs
function pickAllFruits() {
    // Promise배열을 전달하면 모두 병렬형태로 다 받아지면 전달
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join('+')); // 배열을 string으로 변환
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);

// CallBack Hell: promise to async & await
class UserStorage {
    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async loginUser(id, password) {
        await delay(2000);
        if (
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
        ) {
            return id;
        } else {
            throw 'not found';
        }
    }

    async getRoles(user) {
        await delay(1000);
        if (user === 'ellie') {
            return { name: 'ellie', role: 'admin' };
        } else {
            throw 'no access';
        }
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
async function findUserRole() {
    const user = await userStorage.loginUser(id, password);
    const userInfo = await userStorage.getRoles(user);
    return alert(`Hello ${userInfo.name}, you have a ${userInfo.role} role`);
}

findUserRole(console.log);