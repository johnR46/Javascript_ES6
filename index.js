 /*
 มี let const var 

> global
> local -> block scope 


 var // แบบเก่า >> global  

 // ลองแล้วไหง ไม่เหมือน น่าจะ ที่ nodejs กะ browser ไม่เหมือนกัน 
 
 */


//  var fruit  = "มะม่วง";

//  if(fruit === 20){
//     var fruit = "ส้มโอ";
//     console.log(fruit);
//  }

//  console.log(fruit);



 // error เพราะว่า const เป็นค่าคงที่ เปลี่ยนไม่ได้ 
//  const total = 100;
//  total = 200;
//  console.log("total = ",total);



// เก็บเป็น object เปลี่ยนค่าได้
const person = { 
    name: "John",
    last:"Nonphala"

};
console.log("person = ",person);
person.name  = "bancha";  
console.log("person = ",person);



