// let a=10
// const b=20
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
  let a = 10
  const b = 20
  var c = 30
}
//  console.log(a);
//  console.log(b);
//  console.log(c);

function one() {
  const username = "Ayush"
  function two() {
    const website = "yt"
    console.log(username);
  }
  // console.log(website); // cannot acessc website outside its scope
  two();
}
//one()
if(true){
  const username="raosaab"
  if(username==="raosaab"){
    const website="yt"
    console.log(username+website);
  }
//  console.log(website);
}
//console.log(username);
  