////singleton
//const tnderUser = new Object();

const tinderUser={}
tinderUser.id="123abc";
tinderUser.name="Ayush Kumar";
tinderUser.isLogedIn="false"
// console.log(tinderUser);

const regularUser={
  email:"ayush@example.com",
  fullname:{
    userFullname:{
      firstname:"Ayush",
      lastname:"Kumar"
    }
  }
}
// console.log(regularUser.email);  //accessing object properties

// console.log(regularUser.fullname.userFullname?.firstname,regularUser.fullname.userFullname.lastname); //optional chaining to access nested object properties safely

const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"d",5:"e",6:"f"};
const obj3={...obj1,...obj2}; //merging two objects using spread operator
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }