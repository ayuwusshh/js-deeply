const code = ['js', 'ruby', 'java', 'py']

// code.forEach( function (item){
//   console.log(item);

// })
// function printMe(item) {
//   console.log(item);
// }
// code.forEach(printMe)

// code.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// })

//********************for each on objects******* */

const myCode = [
  {
    langName: "Javascript",
    langFileName: "js"
  },
  {
    langName: "Java",
    langFileName: "java"
  },
  {
    langName: "python",
    langFileName: "py"
  }
]
myCode.forEach((item)=>{
  console.log(item.langFileName);
})