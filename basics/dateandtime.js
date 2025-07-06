// let myDate = new Date()
// console.log(`Date - ${myDate}`);// "Mon Jan 01 2024 00:00:00 GMT+0000 (Coordinated Universal Time)"
// console.log(`Type - ${typeof myDate}`);
// console.log(`String - ${myDate.toString()}`);// "Mon Jan 01 2024 00:00:00 GMT+0000 (Coordinated Universal Time)"
// console.log(`Locale String - ${myDate.toLocaleString()}`);// "1/1/2024, 12:00:00 AM" (or similar, depending on locale)
// console.log(`ISO - ${myDate.toISOString()}`); // "2024-01-01T00:00:00.000Z"
// console.log(`Date String - ${myDate.toDateString()}`);  // "Mon, 01 Jan 2024"



// // let myCreatedDate = new Date(2002, 9, 11, 4, 33)// month is 0-indexed
// //let myCreatedDate = new Date('2002-10-11')//month is 1-indexed
// let myCreatedDate = new Date('10-11-2002'); // indian format (MM-DD-YYYY)
// console.log(`My dob is ${myCreatedDate.toDateString()}`);
// console.log(`My dob is ${myCreatedDate.toLocaleString()}`); // "10/11/2002, 4:33:00 AM" (or similar, depending on locale)
// console.log(`My dob is ${myCreatedDate.toLocaleDateString()}`) // "10/11/2002" (or similar, depending on locale) \



// let myTimeStamp = Date.now();
// console.log(`Timestamp - ${myTimeStamp}`); // 1704067200000 (or similar, depending on current time)
// console.log(`LocaleString Timestamp - ${myTimeStamp.toLocaleString()}`); // 1704067200000 (or similar, depending on current time)
// console.log(`Fixed Timestamp - ${myTimeStamp.toFixed()}`);
// //How to convert miliseconds into seconds--->
// console.log(Math.floor(Date.now() / 1000))


let newD=new Date();
console.log(newD);
console.log(newD.getMonth()); // "2024"

