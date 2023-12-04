const discptroe = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(discptroe);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// const myNewObect = Object.create()

const chai = {
  name: "ginger chai",
  price: 250,
  isAvialble: true,
};

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "name", {
//   writable: false,
//   enumerable: false,
// });

Object.defineProperties(chai, {
  name: {
    writable: false,
    enumerable: false,
  },
  price: {
    configurable: false,
  },
});

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
console.log(Object.getOwnPropertyDescriptors(Math));
