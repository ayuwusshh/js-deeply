const user = {
  username: "ayush",
  price: 999,
  welcomeMessage: function () {
    //   console.log(`${this.username} Welcome to website`);
    // console.log(this); 
  }
}
// user.welcomeMessage();
// user.username = "ayu"
// user.welcomeMessage();
// console.log(this);      //returns empty object as there is no global object


// function bhuji() {
//   let username = "ayush"
//   console.log(this.username); //cannot print using this method as it does not give access to current reference like it does in objects
// }
// bhuji();

//basic structure
// const bhuji = () => {   //arrow function
//   let username = "ayush"
//   console.log(this.username);
// }
// bhuji();

//ex==1
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(addTwo(2, 5));

//ex===2
// const addTwo = (num1, num2) => { return num1 + num2 };
// console.log(addTwo(2, 5));

//ex===3
// const addTwo = (num1, num2) => (num1 + num2);     //() is better approach as it is also used to return objects
// console.log(addTwo(2, 5));

//ex===4

const addTwo = (num1, num2) => ({ username: "Ayush" });     //() is better approach as it is also used to return objects
console.log(addTwo(2, 5));