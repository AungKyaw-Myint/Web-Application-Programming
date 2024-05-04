// lab 5.1
const sum = (numbers) => {
    return numbers.filter((x) => x > 20).reduce((x, y) => x + y);
}

// lab 5.2
const getNewArray = (datas) => {

    return datas.filter((x) => x.length >= 5 && x.includes('a'));
}

// const data=['bbbber', 'sert', 'arrree'];
// console.log(getNewArray(data));

// lab 5.3
const concat = (...a) => {
    const result = [];

    a.forEach((data) => result.push(...data));
    return result;
}
// console.log(concat('hi', [1,2,3], ['Hello','world']));


// lab 5.4
const students = [
    { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
    { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
    { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
];

const cs303= students.filter(x => x.courses.includes('cs303'));
const avg= cs303.reduce((accum,stu) => {
    const avg=stu.grades.reduce((total, grade) => total+grade,0) /stu.grades.length;
    return {...accum, [stu.name] : avg};
}, {});

console.log(avg);
