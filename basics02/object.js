//non-singleton

const mySym = Symbol("Key1");
const JsUser = {
  name: "Ayush",
  age: 22,
  "full name": "Ayush Kumar",
  location: "India",
  [mySym]: "mykey1",
  email: "ayush@example.com",
  isLoggedIn: false,
  lastOnlineDays: ["Monday", "Saturday"]
}
// console.log(JsUser);
// console.log(JsUser.name);
// console.log(JsUser["name"]); // accessing object properties using bracket notation
// console.log(JsUser["full name"]); // accessing object properties with spaces using bracket notation
// console.log(JsUser[mySym]); // accessing object properties using symbol
//Object.freeze(JsUser); // this will freeze the object and prevent any changes to it
JsUser.email = "Hey@chatgpt";
// console.log(JsUser["email"]);


JsUser.function = function () {    // // adding a function to the object
  console.log("Hello js user");
}
JsUser.functiontwo = function () {    // // adding a function to the object
  console.log(`Hello js user ${this.name}`);
}
console.log(JsUser.function()); // calling the function inside the object
console.log(JsUser.functiontwo()); // calling the function inside the object with this keyword to access the object properties