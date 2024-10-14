const studentList = ['John', 'Juli', 'Ann', 'Carl', 'Louise', 'Marjorie', 'Alex', 'Alice', 'Daphine', 'Andy', 'Joe', 'Paul', 'Jeniffer', 'Victoria', 'Erick', 'Kyle', 'Mario', 'Ronald', 'Daisy', 'Joseph'];

const classroom1 = studentList.slice(0, studentList.length/2);
const classroom2 = studentList.slice(studentList.length/2);

console.log(classroom1);
console.log(classroom2);
