// array
const array = [1, 2, 3, 4, 5];
//console.log(array[0]);

//array functions
// console.log(array.length);
// array.push(6);
// array.push(7);
// array.pop();
// console.log(array);
// array.unshift(0);
// array.shift(); 
//console.log(array);
// const newArray=array.join();    // join method converts array to string
// console.log(newArray);
// console.log(typeof newArray);

// let arr = array.map((item) => {//
//   return item * 2;
// });
// console.log(arr);

// arrays advanced
const mv = ["thor", "hulk", "ironman"];
const dc = ["batman", "superman", "flash"];

//merging both arrays

//1. push method
//mv.push(dc); // not the correct way to merge arrays as it takes the array as a single element and modift the original array
//console.log(mv);

//2. concat method
// const all = mv.concat(dc); // this is the correct way to merge arrays as it combines both arrays into a new array without modifying the original arrays
// console.log(all);

//3. spread operator
// const all = [...mv, ...dc]; // this is the best way to merge arrays using spread operator as it spreads the elements individualy into a new array
// console.log(all);  

console.log(Array.isArray(mv))
console.log(Array.from("AYUSH"))
console.log(Array.from({ name: "hitesh" })) // interesting 