class User {
  constructor(email, password) {
    (this.email = email), (this.password = password);
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(email) {
    this._email = email;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(val) {
    this._password = val;
  }
}

const yogesh = new User("yogesh@gmis", "abc");

console.log(yogesh);
