function SayMyName() {
  console.log("A");
  console.log("Y");
  console.log("U");
  console.log("S");
  console.log("H");
}
//SayMyName();

function add(a, b) {
  let result = a + b;
  return result;
}
const result = add(2, 3);
//console.log(result); // 5


function loginUSwerMessage(username) {
  if (!undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

//console.log(loginUSwerMessage());
; // "Ayush just logged in"

function clculateCartPrice(...n){ // ...(rest operator) dynamically accepts any number of arguments
  return n;
}
//console.log(clculateCartPrice(100, 200, 300)); // [100, 200, 300]
// returning objects in a function
const user={
  username:"Ayush",
  price:199
}
function handleObject(anyobject){
  console.log(`Username:${anyobject.username} and Price:${anyobject.price}`);  
}
//handleObject(user); // Username: Ayush, Price: 199
// returning arrays in a function

const myNewArray=[20,425,680,222];
function handlearray(items) {
  return items[2];
}
console.log(handlearray(myNewArray));
