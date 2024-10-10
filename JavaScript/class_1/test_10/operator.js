const gradeFirstBi = 8;
const gradeSecondBi = 6.3;
const gradeThridBi = 7;
const gradeFourthBi = 9.3;

let media = (gradeFirstBi + gradeSecondBi + gradeThridBi + gradeFourthBi) / 4;

if (media >= 7) {
    media += media * 0.1;
}

console.log(`The grade is ${media.toFixed(2)}`);

let result;
result = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log(result);