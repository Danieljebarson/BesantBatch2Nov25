// Javascript - It is Web based programming language

// const { use } = require("react");

// Most popular we broswers is made up of javascript

// document.getElementById("myH1").textContent = "Hello students";

// document.getElementById("myP").textContent = `welcome to javascript world`;

// variable - a container that stores the value

// decalration  let a;

// let var const
// assigment  a = 10;

// Datatypes

// primitive and non primitive

// primitive

// int
// Float
// double
// char
// boolean

// non primitive

// array
// string
// object
// collections(List, set, map, qoue)

// let a;

// a = 10;

// let b;

// b = 20;

// let c = 10;

// console.log(c);

// let age = 24;
// let price = 10.45;
// let gpa = 2.4;
// let isStudent = true;
// let name = "siva"

// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof name);

// console.log(`You are ${age} years old`);
// console.log(`The price is ${price}`);
// console.log(`Your gpa is ${gpa}`);

// Type coversion - coverting one datatype into another type (srings, numbers, boolean)

// let age = window.prompt("How old are you? ");

// age = age + 1; = age += 1;

// age = Number(age);

// age = String(age);

// age += 1;

// console.log(typeof age);
// console.log(age);

// let a = "apple";
// let b = "orange";
// let c = "kiwi";
// let d = 3;

// a = Number(a);
// b = String(b);
// c = Boolean(c);
// d = Boolean(d);

// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);
// console.log(d, typeof d);

// const - a varaible taht cant be change

// const PI = 3.14159;

// let radius;

// let circumfernce;

// PI = 6789.678;

// radius = window.prompt("Enter the radius");

// radius = Number(radius);

// circumfernce = 2 * PI * radius;

// console.log(circumfernce);10

// conditional statement

// if
// if else
// ternery
// switch
// nested if

// let age = 10;

// // if(age >= 18) {
// //    console.log("You can vote");
// // }

// if(age >= 18) {
//     console.log("you can vote");
// } else {
//     console.log("you cannot vote");
// }

// let isStudent = true;

// if (isStudent) {
//     console.log("you are student");
// } else{
//     console.log("you are not student");
// }

// nested if

// let age = 8;
// let hasLicense = true;

// if(age >= 18) {
//     console.log("You are old enough to drive");

//     if(hasLicense) {
//         console.log("you have your license");
//     } else {
//         console.log("you do not have license yet");
//     }

// } else {
//     console.log("You must be 18+ to have a license");
// }

// ladder if else statement

// if(age >= 18) {
//     console.log("you can vote");
// } else if(age < 0) {
//     console.log("You have not born yet!!!");
// } else {
//     console.log("You canot vote");
// }

// Ternary operator - a shortcut for if and else statment help us to assign a varibale based on a condtion

// condition ? codeIfTrue : codeIfFalse;

// let age = 1;

// if(age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You cannot vote");
// }

// const result = age >= 18 ? "you can vote" : "you cannot vote";

// console.log(result);

// let purschaseAmount = 50;

// let discount = purschaseAmount >= 100 ? 10 : 0;

// console.log(`you total is ₹${purschaseAmount - purschaseAmount * (discount / 100)}`);

// switch - can be effiecnt replacement for to many else if statement

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// let day = 3456789;

// switch (day) {
//   case 1:
//     console.log("It is monday");
//     break;
//   case 2:
//     console.log("It is tuesday");
//     break;
//   case 3:
//     console.log("It is wednesday");
//     break;
//   case 4:
//     console.log("It is thursday");
//     break;
//   case 5:
//     console.log("It is friday");
//     break;
//   case 6:
//     console.log("It is saturday");
//     break;
//   case 7:
//     console.log("It is sunday");
//     break;

//   default:
//     console.log("Invalid input");
//     break;
// }

// let testScore = 65;

// let grade;

// switch (true) {
//     case testScore >= 90:
//         grade = "A";
//         break;
//     case testScore >= 80:
//         grade = "B"
//         break;
//     case testScore >= 70:
//         grade = "C"
//         break;
//     case testScore >= 60:
//         grade = "D"
//         break;

//     default:
//         console.log("invail mark");
//         break;
// }

// console.log(grade);

// String and methods -  built in methods which allow us to manipulate and work with text (strings)

// clooection of character called string 'u'
// "colbnm"

// let userName = "mani_student";

// let result = userName.startsWith(" ");
// let result = userName.endsWith("i");
// let result = userName.includes(" ");

// console.log(result);

// let res = result
//   ? "Your username cant be space in between"
//   : console.log(userName);

// console.log(res);

// if(result) {
//   console.log("Your username cant starts with space");

// } else {
//     console.log(userName);

// }

// console.log(userName.repeat());

// console.log(userName.toLowerCase());

// console.log(userName.trim());
// console.log(userName.length);

// postion or index 0 to n-1
// length = 4 (n)

// const result = userName.charAt(3)
// console.log(result);

// const result = userName.indexOf("a");
// console.log(result);

// const result = userName.lastIndexOf("a");
// console.log(result);

// let phoneNumber = "91-98988-78776";

// phoneNumber = phoneNumber.replaceAll("-", "₹");

// console.log(phoneNumber);

// String slicing - creating a substring from a protion of another string

// string.slice(start, end);

// const fullName = "Siva kumar";

// const email = manikandan@gmail.com;

// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(5);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0, fullName.indexOf(" "));

// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// let firstChar = fullName.slice();
// let lastChar = fullName.slice();

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);
