'use strict';

// JSON
// - simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for serialization and transmission of data between the network the network connection
// - independent programming language and platform (C, C++, C#, php, java etc...)

// client -> Object {key:value} -> server
// client <- Object {key:value} <- server

// 1. object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`); //함수는 json string으로 변환되지 않음
    }
}

json = JSON.stringify(rabbit);
console.log(json);

// replacer는 ?넣어도 되고 안넣어도 됨. key:value의 값으로 이루어진 배열을 넣어도됨
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

console.clear();

// 2. JSON to Object
// parse(json)

{
    json = JSON.stringify(rabbit);
    const obj = JSON.parse(json);
    console.log(obj);
    rabbit.jump();
    // obj.jump(); json파일로 변경되면서 함수부분은 삭제되었기때문에 obj안에 jump()가 없음

    console.log(rabbit.birthDate.getDate());
    // console.log(obj.birthDate.getDate()); rabbit.birthDate가 json string으로 변경. 더이상 birthDate()라는 함수가 아니기에 birthDate의 내장함수 getDate()호출 불가
}

{
    json = JSON.stringify(rabbit);
    const obj = JSON.parse(json, (key, value) => {
        console.log(`key: ${key}, value: ${value}`);
        return key === 'birthDate' ? new Date(value) : value;
        //obj의 string birthDate를 new Date()함수로 바꿈
    });

}