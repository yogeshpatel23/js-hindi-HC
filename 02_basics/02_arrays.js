const marvelHeros = ["Thor", "IronMan", "Spiderman", "Dr.Strange"];
const dcHeros = ["Superman", "Flash", "batman"];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);

// marvelHeros.concat(dcHeros);
// console.log(marvelHeros.concat(dcHeros));

// const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_anotehr_arrya = another_arr.flat(Infinity);
// console.log(real_anotehr_arrya);

Array.isArray("Yogesh"); // check for array  : False for string

// console.log(Array.from("Yogesh"));

// console.log(Array.from({ name: "yogesh" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score3, score2, score1));
