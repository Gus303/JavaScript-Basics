const student = ['John', 'Alex', 'Tom', 'Mariah'];
const grades = [4, 9, 0.5, 7];

const infoList = [student, grades];

function showNameAndGrade(student) {
    if (infoList[0].includes(student)) {
        const inde = infoList[0].indexOf(student);
        const gradeStudent = infoList[1][inde];
        console.log(`${student} has a grade equal to ${gradeStudent}`);
    } else{
        console.log('The student does not exist');   
    }
}

showNameAndGrade('John');
showNameAndGrade('Jennifer');