// Immediately Invoked functin expresion

// function dbconnect() {
//   console.log("DB conneced.");
// }
// dbconnect();

// (function dbconnect() {
//   console.log("DB conneced.");
// })();

(() => console.log("dbConnetd 2"))();

((pram) => console.log(`dbConnetd 2 ${pram}`))("name");
