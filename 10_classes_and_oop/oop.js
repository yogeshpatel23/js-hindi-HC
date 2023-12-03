const user = {
  username: "Yogesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user dtaile forsmd");
    console.log(`This is ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// user.getUserDetails();

// const promisOne = new Promise()
// const date  = new Date()

function User(username, loginCount, isloggedin) {
  this.username = username;
  this.loginCount = loginCount;
  this.isloggedin = isloggedin;

  this.greeting = function () {
    console.log("Welcome " + this.username);
  };

  return this;
}

const userOne = new User("yoges", 8, true);
const userTwo = new User("manju", 12, false);

console.log(userOne.constructor);
// console.log(userTwo);
// userOne.greeting();
