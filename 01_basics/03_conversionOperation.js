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

 /************************** Operations */
 let value = 3
 let negValue = -value
 // console.log(negValue);
 
 // console.log(2+2);
 // console.log(2-2);
 // console.log(2*2);
 // console.log(2**3);
 // console.log(2/3);
 // console.log(2%3);
 
 let str1 = "hello"
 let str2 = " hitesh"
 
 let str3 = str1 + str2
 // console.log(str3);
 
 // console.log("1" + 2);
 // console.log(1 + "2");
 // console.log("1" + 2 + 2);
 // console.log(1 + 2 + "2");
 
 // console.log( (3 + 4) * 5 % 3);
 
 // console.log(+true);
 // console.log(+"");
 
 let num1, num2, num3
 
 num1 = num2 = num3 = 2 + 2
 
 let gameCounter = 100
 ++gameCounter;
 console.log(gameCounter);
 
 // link to study
 // https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion