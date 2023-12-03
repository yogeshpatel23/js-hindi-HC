// let myName = "Yogesh     ";
// let mychannet = "chai     ";

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spideman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.yogesh = function () {
  console.log(`yogesh is awail in all objects`);
};

Array.prototype.heyyogesh = function () {
  console.log(`Yogesh says hello`);
};

// heroPower.yogesh();
// myHeros.yogesh();

// heroPower.heyyogesh();
// myHeros.heyyogesh();

// Inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// morden syntex
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
};

anotherUsername.trueLength();
"Yogesh".trueLength();
"text_text".trueLength();
