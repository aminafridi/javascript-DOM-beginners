// ---------------Functions---------------
// // function declaration
// function greeting(){
//     console.log("hello world");

// }

// greeting();
// // function expressions
// const add= function(){
//     console.log(2+2);
// }
// add();
// // HOISTING --- we can also declared the varibale before the function in javascript it is called hoisting
// // javascript only allow hoising in declaration not in initialization
// // e.g
// x=5;
// console.log(x);
// var x;
 //-----------------------Arguments and parameters---------------------


//  const speak= function(name,time){
//      console.log(`good ${time} ${name} `);

//  }
//  speak('amin','morning');
//  we can also initialize the name and time in the function paeanthesis
// e.g
// const speak = function(name= 'amin', time ='morning'){
//     console.log(`good ${time} ${name}`);

// }
// speak();
//------------------------------Returning value-------------------

// const calcarea= function(radius)
// {
//   let area = 3.14 * radius**2;
//   return area;
// }

// const area = calcarea(5);
// console.log(area);
// ---------------------------regular function and arrow function--------------
//regular function
// const calcarea= function(radius)
// {
//   let area = 3.14 * radius**2;
//   return area;
// }

// //arrow function
// const calcarea=(radius)=>{return 3.14*radius**2;}
// const area = calcarea(5);
// console.log(area);

// another example
// -------------regular function
// const bill= function(products, tax) {
//     let total =0;
//     for (let i=0; i< products.length; i++){
//         total+=products[i]+products[i]*tax;
        
        
//     }
//     return total;
// }
// -----------arrow function
// const bill=(products,tax)=>{
//     let total =0;
//     for (let i=0; i< products.length; i++){
//         total += products[i] + products[i] * tax;   
//     }
//     return total;
// }
// console.log(bill([10,15,30],0.2));

//----------------------method and function---------------
//  const Name= "amin";
// // function
// const greet=()=>'hello'
// let resultone= greet();
// console.log(resultone);

// // methods
// let resultTwo= Name.toUpperCase();
// console.log(resultTwo);

//--------------------------call back functions and for each methods-------------
// let people =['amin','shafqat','afaq','samad'];
// people.forEach(function(person){
//     console.log(person);
// });

//-------------------callback function in action--------------

// const ul =document.querySelector('.people');
//  const people =['amin','shafqat','afaq','samad'];
// let html=``;
// people.forEach(function(person){
//     // create html template
//     html += `<li style="color:blue">${person}</li>`;
   

// });
// console.log(html);
// ul.innerHTML = html;



    


