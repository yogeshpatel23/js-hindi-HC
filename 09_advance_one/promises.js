const promiseOne = new Promise(function (resolve, reject) {
  // do am async task
  // DB calls, cryptography, network calls
  setTimeout(() => {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promis consume");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Asnk task 2");
    resolve();
  }, 2000);
}).then(function () {
  console.log("promic 2 ressolve");
});

const promisThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promis 3 data");
  }, 2000);
});

promisThree.then((data) => {
  console.log(data);
});

const promiseFout = new Promise((resolve, resject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "YYogesh", passowd: "sdfe" });
    } else {
      resject({ err: "somethig webt rose" });
    }
  }, 1000);
});

promiseFout
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("code complest");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ language: "javascript", users: "2.3M" });
    } else {
      reject("ERROR: Unable to fetch data.");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const res = await promiseFive;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getUser() {
  try {
    const respons = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await respons.json();
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

getUser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((user) => console.log(user))
  .catch((er) => console.log(er))
  .finally(() => console.log("Work done"));
