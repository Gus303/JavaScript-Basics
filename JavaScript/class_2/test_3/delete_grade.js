const grade = [10, 6, 8, 5.5, 10];

grade.pop();

const finalGrade = (grade[0] + grade[1] + grade[2] + grade[3]) / grade.length;

console.log(finalGrade.toFixed(2));