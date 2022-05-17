'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' and ');
    console.log(result);
}


// Q2. make an array out of a string ??
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(); //배열자체도 변경
    console.log(result);
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const result = array.splice(0,2); //기존 배열 변경
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    // find: 찾아낸 첫번쨰 값을 리턴 
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    //map: 배열안에 있는 모든 요소들을 callback function를 호출하면서 가공(return)되어진 값들로 대체, 배열안에 있는 요소들을 함수를 이용해서 다른값으로 변경하고자 할때
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    // some: 배열내 콜백함수를 통해 하나라도 조건에 만족하면 true
    const result = students.some((student) => student.score < 50);
    console.log(result);

    //every: 콜백함수를 통해 모든 조건이 만족해야 true
    const result2 = students.every((student) => student.score >= 50);
    console.log(result2);
}

// Q9. compute students' average score
{
    // 이전의 배열의 값을 prev, 현재의 배열의 값을 curr으로 누적
    // reduceRight은 배열을 꺼꾸로 누적
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score)
        .filter((score => score >= 50))
        .join();
    console.log(result);

}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b) // 마이너스 밸류가 나올경우 뒷자리가 크다는 뜻
        .join();
    console.log(result);
}