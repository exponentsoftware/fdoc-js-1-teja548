//for (let line = "#######"; line.length > 0; line = line.slice(1))
// console.log(line);

//2a

/*for (let i = 1; i < 7; i++) {

    const arr = new Array(i).fill('#');
    console.log(arr.join(''));

}
*/

//2d
const isUnique = (arrToTest) =>
    arrToTest.length === new Set(arrToTest).size

console.log(isUnique([1, 1, 2, 3]));
console.log(isUnique([1, 2, 3]));