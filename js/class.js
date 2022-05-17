'use restrict';

// class 조금 더 연관있는 데이타를 한데 묶어놓는 컨테이너
// 속성 fields, 행동 methods(fuctions)

// class
// - template
// - declare one
// - no data in 

// object
// class이용해 실제 데이타를 넣어 이용하는 것이 object
// - instance of a class
// - created many times
// - data in

// object-oriented programming
// class: template
// oject: instance of a class
// javascript classes
// - introduced in ES6
// - syntatical sugar over prototype-based inhreitance

// 1. class declaretions
class Person {
    // constructor
    constructor(name, age) {
            // fields
            this.name = name;
            this.age = age;
        }
        // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        //값을 리턴
    get age() {
            return this._age;
        }
        // 값을 세팅
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative!');
        // }
        this._age = value;
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'jobs', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
    publicField = 2;
    privateField = 0; //#privateField
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Tooo Soon!
// 들어오는 object, data에 상관없이 공통적으로 클래스에서 사용하는 것이라면 static으로 사용하여 메모리 아낌
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance 상속
// a way for one class to extend another class
// 코드 재사용

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('!!!!');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectagle = new Rectangle(20, 20, 'blue');
rectagle.draw();
console.log(rectagle.getArea());
const triangle = new Triangle(20, 30, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceof
console.log(rectagle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

// Fun Quiz
// fuction calculate(command, a, b)
// command: add, substract, divide, multiply, reminder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'reminder':
            return a % b;
        default:
            throw Error('unknown command')
    }
}

console.log(calculate('add', 2, 3));