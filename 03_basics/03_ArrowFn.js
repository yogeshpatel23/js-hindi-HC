const user = {
  username: "yogesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "pooja";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "Yogesh";
//   console.log(this.username);
// }

// chai();

// const chai = function () {
//   let username = "Yogesh";
//   console.log(this.username);
// };

// chai();

const chai = () => {
  let username = "Yogesh";
  console.log(this);
};

// chai();

// const addTwo = (num1, nun2) => {
//   return num1 + nun2;
// };
// const addTwo = (num1, nun2) => num1 + nun2;
const addTwo = (num1, nun2) => ({ numenr1: num1, number2: nun2 });

console.log(addTwo(2, 5));

// const myArrsy = [2, 3, 5, 7, 8]

// myArrsy.forEach(() => ())
