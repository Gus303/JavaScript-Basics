const  studentFailed = function (finalGrade, absences) {
    if (finalGrade < 7 && absences > 4) {
        return true;
    } else {
        return false;
    }
}

console.log(studentFailed(6, 5));
console.log(studentFailed(10, 2));