// singleton
// Object.create  this mathod create singlton object

// object literals

const mySym = Symbol("key1");

const Jsuser = {
  name: "Yogesh",
  age: 35,
  location: "Jagdalpur",
  [mySym]: "symbol as key",
  email: "yogsh@google.com",
  isLoggedin: false,
  lastLonginDay: ["monday", "sybda"],
};

console.log(Jsuser.name);
console.log(Jsuser["email"]);

Jsuser.email = "newemail@gmial.com";

// Object.freeze(Jsuser);

// Jsuser.email = "sedffe";

// console.log(Jsuser);

Jsuser.greetins = function () {
  console.log("hello js user");
};

Jsuser.greetins2 = function () {
  return `hello js user ${this.name}`;
};

console.log(Jsuser);

console.log(Jsuser.greetins());

console.log(Jsuser.greetins2());
