'use strict';

// Objects
// one of javascript's data types
// a collection of related data and/or functionally
// nealy all objects in Javascript are instance of Ojbects
// Object = { Key : Value };

// 1. Literals and propertise
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

//with Javascript magic (dynamiccally typed language)
//can add propertise later
// 동적 타입언어로 ojbect 선언후 차후에 property를 추가 가능

ellie.hasjob = true;
console.log(ellie.hasjob);
delete ellie.hasjob;
console.log(ellie.hasjob);

// 2. Computed properties
// key should be always string
// dot 코딩하는 순간 그 키에 해당하는 값을 가져오고 싶을때
// 우리가 정확하게 어떤 키가 필요하지 모를때, 즉 런타임에서 결정될때
console.log(ellie.name); //닷(.)으로 접근가능
console.log(ellie['name']); // ellie라는 object에 string으로 name 접근, []배열의 형태로 접근 가능
ellie['hasjob'] = true;
console.log(ellie.hasjob);

function privateValue(obj, key) {
    console.log(obj[key]);
}
privateValue(ellie, 'name');
privateValue(ellie, 'age');

// 3. Property value shorthened
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ellie', 5);

function makePerson(name, age) {
    return {
        name, // {name: name, age: age} key와 value의 이름이 동일하다면 생략가능
        age
    };
}
console.log(person4);

// 4. Constructor fuction
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator property existance check (key in obj);
// 해당 object앞에 key가 있는지 없는지 확인
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

console.clear();

// 6. f for..in vs for..of
// for (key in obj)
for (const key in ellie) {
    console.log(key);
}
// for (value of iterable)
const array = [1, 2, 3, 4, ];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
for (const value of array) {
    console.log(value);
}

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (const key in user) {
    user3[key] = user[key];
}
console.log(user3);

//Object.assign
const user4 = {};
Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);