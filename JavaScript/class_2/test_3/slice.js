const studentList = ['John', 'Juli', 'Ann', 'Carl', 'Louise', 'Marjorie', 'Alex', 'Alice', 'Daphine', 'Andy', 'Joe', 'Paul', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const classroom1 = studentList.slice(0, studentList.length/2);
const classroom2 = studentList.slice(studentList.length/2);

console.log(classroom1);
console.log(classroom2);
