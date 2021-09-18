//for (let line = "#######"; line.length > 0; line = line.slice(1))
// console.log(line);

//2a
for (let i = 1; i < 7; i++) {

    const arr = new Array(i).fill('#');
    console.log(arr.join(''));

}
//2b

function sevenRandomNumbers() {
    let arr = []
    while (arr.length < 9) {
        let r = Math.floor(Math.random() * 10)
        if (arr.indexOf(r) === -1) arr.push(r)
    }
    return arr
}
console.log(sevenRandomNumbers([1, 4, 5, 7, 9, 8, 0]));


//2d
const checkUniqueness = (arrToTest) =>
    arrToTest.length === new Set(arrToTest).size

console.log(checkUniqueness([1, 4, 6, 2, 1]));
console.log(checkUniqueness([1, 4, 6, 2, 3]));

//2c
let numbers = ["A", "B", "C"];
let reversedNumbers = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
}

console.log(reversedNumbers);

//1a
var a, b;
function countWords(paragraph, w1, w2) {
    a = paragraph.split(w1).length - 1;
    b = paragraph.split(w2).length - 1;
    if (a > b) {
        console.log(`The word '${w1}' more frequently occurred than word '${w2}'.`)
    } else {
        console.log(`The word '${w2}' more frequently occurred than word '${w1}'.`)
    }

}
const para = "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";
countWords(para, "love", "you")


//1b
const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?";

console.log(sentence.replace(/[^a-zA-Z. ]/g, ""));

//1c

function countWords(sentence) {
    let arr = sentence.split(" ").map(w => w.length);
    let count = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] >= 2) {

            count++

        }

    }
    console.log(count)


}

const sentence = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
countWords(sentence);

//1d

function varietyOfWords(sentence) {
    let ar1 = sentence.split(' ')
    let temp = []
    for (let word of ar1) {
        if (word[word.length - 1] === '.' || word[word.length - 1] === '?') {
            word = word.substr(0, word.length - 1)
        }
        if (temp.includes(word) === false) {
            temp.push(word)
        }
    }
    // console.log(temp)
    return temp.length
}



const sentence = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(varietyOfWords(sentence));

