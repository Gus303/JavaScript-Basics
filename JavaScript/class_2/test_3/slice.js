const studentList = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const classroom1 = studentList.slice(0, studentList.length/2);
const classroom2 = studentList.slice(studentList.length/2);

console.log(classroom1);
console.log(classroom2);
