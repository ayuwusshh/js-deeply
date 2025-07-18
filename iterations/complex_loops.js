//for of loop
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
  //console.log(num);
}
const greetings = "Hello World"

for (const greeting of greetings) {
  if (greeting == " ") continue
  //console.log(greeting);
}

//Maps
const map = new Map()   //stores only unique values
map.set('In', "India")
map.set('Us', "United States Of America")
map.set('Fr', "France")
map.set('In', "India")
//console.log(map);
for (const [key, value] of map) {
  console.log(key, value);
}

//for of on objects

const newObj = {
  'game1': 'nfs',
  'game2': 'Spiderman'
}
// for (const [key, value] of newObj) {
// console.log(key, value);  //error because for of loop cannot iterate objects,so for in loop is used
// }

//*********************for in***********************

//forin on obj
const lang = {
  js: 'Javascript',
  cpp: 'C++',
  rb: 'Ruby',
  swift: 'Swift by apple'
}
for (const key in lang) {
  // console.log(`${key} : ${lang[key]}`);
}

//forin on arrays

const programming = ['js', 'ruby', 'java', 'py']
for (const num in programming) {
  // console.log(num);//returns only the index
  //  console.log(programming[num]);
}

//forin on maps
for (const key in map) {
  // console.log(key);
}