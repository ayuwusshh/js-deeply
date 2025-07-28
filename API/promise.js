const promiseOne = new Promise(function (resolve, reject) {
  //do async task
  //dv calls,cryptography 
  setTimeout(function () {
    console.log('Async task is completed');
    resolve()
  }, 1000)
})
// another way to create a promise without storing it in a variable
promiseOne.then(function () {
  console.log('Promise is consumed');
})
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async task 2');
    resolve();
  }, 1000)
}).then(function () {
  console.log('Async 2 resolved');
})
// third promise
const thirdPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: 'ayush', age: 30, mail: 'ayush@exmaple.com' });
  }, 1000)
})
thirdPromise.then(function (data) {
  console.log(data);
})
//fourth promise

new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: 'Ayush', password: 'ays12' })
    } else {
      reject('Error: Something went wrong')
    }
  }, 1000)
}).then((user) => {
  console.log(user.username)
}).catch(function (error) {
  console.log(error)
}).finally(() => console.log("Promise is either resolved or rejected"))

//promise five

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: 'Js', password: 'ays12' })
    } else {
      reject('Error: Js went wrong')
    }
  }, 1000)
})
async function consumeP5() {
  try {
    const response = await promiseFive
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}
consumeP5()


fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data);
  }).catch((e) => console.log(e))