// const tinderUser = new Object();  // singlon objest
const tinderUser = {};

tinderUser.id = "123avd";
tinderUser.name = "samse";
tinderUser.isLoggedin = false;

// console.log(tinderUser);

const reqularUser = {
  email: "some@gmailc.om",
  fullname: {
    username: {
      firstname: "Yogesh",
      lastName: "patel",
    },
  },
};

// console.log(reqularUser.fullname?.username.firstname); // check of key exits

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = Object.assign({}, obj1, obj2);

// console.log(Object.assign(obj1, obj2));

const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

const users = [
  {
    id: 1,
    email: "sekse",
  },
  {
    id: 2,
    email: "sekse",
  },
  {
    id: 3,
    email: "sekse",
  },
  {
    id: 4,
    email: "sekse",
  },
];

// console.log(users[0].email);

console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
