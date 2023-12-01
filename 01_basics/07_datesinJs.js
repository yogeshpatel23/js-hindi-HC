// Date

let myDate = new Date()
// console.log(myDate.toString()) //Fri Dec 01 2023 13:59:59 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) //Fri Dec 01 2023
// console.log(myDate.toLocaleString()) //12/1/2023, 1:59:59 PM

// let myCreatedDate = new Date(2023,0,23)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate);

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDay())