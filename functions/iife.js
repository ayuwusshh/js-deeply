// Immediately Invoked Function Expressions(IIFE)--->we write when we don't want our function to get polluted due to global scope


(function ayush(){
  console.log(`DB CONNECTED`); 
})();

(()=>{
  console.log(`Connected twice`);
})();