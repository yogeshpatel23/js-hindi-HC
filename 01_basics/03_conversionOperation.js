let score = "33abc"

// console.log(typeof score);
// console.log(typeof(score));

let vauleInNumber = Number(score)

// console.log(typeof(vauleInNumber));
// console.log(vauleInNumber);

/*
Convert To Number
 "33" => 33
 "33aa" => NaN
 null => 0
 undefined => NaN
 true => 1 ; false => 0
 */

let isLoggedIn = undefined;

let booleanLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanLoggedIn);
// console.log(booleanLoggedIn);

/*
Convert To Boolene
 "" => false
 "33aa" => true
 null => false
 undefined => false
 1 => true ; 0 => false
 */

 let someNumber = undefined
 let stringNumber = String(someNumber)
 console.log(typeof stringNumber);
 console.log(stringNumber);