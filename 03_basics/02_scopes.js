// var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  // console.log(a);
}

// console.log(a);
// console.log(b);

function one() {
  const username = "yogesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}

// one();

if (true) {
  const username = "yogesh";
  if (username === "yogesh") {
    const website = " youtube";
    console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++++++++ intersting ================================

console.log(addone(5));

function addone(num) {
  return num + 1;
}

// console.log(addtow(4));

const addtow = function (num) {
  return num + 2;
};

console.log(addtow(2));
