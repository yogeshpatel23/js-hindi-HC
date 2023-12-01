const name = "Yogesh"
const repoCount = 50

// console.log(name + repoCount + " Value")

console.log(`Hello my Name is ${name} and my repoCont is ${repoCount}.`)

const gameName = new String('YogeshJDP')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   yogesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://yogesh.com/yogesh%20patel"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));