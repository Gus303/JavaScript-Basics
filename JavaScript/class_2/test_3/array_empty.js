const arrayEmpty = [];

console.log(arrayEmpty)
console.log(arrayEmpty.length)

//---------//

const arrayAlmostEmpty = [,,,];

console.log(arrayAlmostEmpty.length)
console.log(arrayAlmostEmpty[0])
console.log(arrayAlmostEmpty[1])
console.log(arrayAlmostEmpty[2])

//---------//

const arrayPushed = [,,,];

console.log(arrayPushed.length)
arrayPushed.push(50)
console.log(arrayPushed)
console.log(arrayPushed.length)