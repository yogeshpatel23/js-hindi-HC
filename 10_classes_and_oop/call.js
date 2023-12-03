function SetUsername(username) {
  // complex SB call
  this.username = username;
  console.log("called");
}

function createUser(username, email, passwrod) {
  SetUsername.call(this, username);
  this.email = email;
  this.passwrod = passwrod;
}

const chai = new createUser("chai", "chai@fsk", "123");
console.log(chai);
