// // old function 

// function sorwor(a,b){
//     return a+b;
// }

// // old function 
// let result = sorwor(250,50);
// console.log(result)


// // new
// multi line    
// const sorwor=(a,b)=>{
//     console.log("processing..")
//     return a+b;
// }

// ถ้ามี return ก็แก้ให้เป็นงี้ สะดวกดี
// single line 
// const sorwor =(a,b) => a+b;
// let result = sorwor(250,50);
// 1 paramiter  => ไม่มีวงเล็บ

// return object 


const student = (name) => ({name:name,age:10});

let result = student("John")


console.log(result)