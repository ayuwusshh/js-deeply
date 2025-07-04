"use strict";       //treat all JS code as newer version
// alert(3-3)    were using node js, not browser

let name = "Ayush";
let age = 22;
let isLoggedIn = true;
let state;
// primtive data types
//  number => 2 to the power of 53
// bigint
// string = ""
// boolean => true / false
// null=>stand alone value
// undefined => value not assigned
// symbol => unique value

const symB = Symbol('userId');
const symA = Symbol('userId');

//objects

console.log(String(symA));   // This forces conversion to a readable string
console.log(typeof symA);    // Should say "symbol"

