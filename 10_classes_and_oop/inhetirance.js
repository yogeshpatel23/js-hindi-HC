class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`UserName is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCouces() {
    console.log(`new cores added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "cahi@rtedsd.com", "123");

chai.addCouces();
chai.logMe();

const mtchai = new User("texsd");

mtchai.logMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
