const  studentFailed = (finalGrade, absences) => {
    if (finalGrade < 7 && absences > 4) {
        return true;
    } else {
        return false;
    }
}

//const showName = (name) => {
//    return name; }

const showName = (name) => name;

console.log(studentFailed(6, 5));
console.log(studentFailed(10, 2)); 
console.log(showName('Gustavo'));