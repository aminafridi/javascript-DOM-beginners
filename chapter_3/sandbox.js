// ---------------------------flow control----------------- 
// ---------------------------for loops--------------------

// for (let i=0; i<5;i++)
// {
//     console.log('in loops',i);
// }
// console.log('loop finished');
// let arr=['amin','imran','umer','qadeer'];
// for (i=0;i<arr.length;i++)
// {
//     console.log(`<div>${arr[i]}<div>`);
// }
// -------------------------while and do while loops--------------
//let i=0;
// while (i<5) {
//     console.log('in loops',i);
//     i++;
// }
//let arr=['amin','imran','umer','qadeer'];
// while (i<arr.length) {
//     console.log(arr[i]);
//     i++;
// }
//--------------------do while loop-----------------
// do{
//     console.log(arr[i]);
//     i++;
// }while (i<arr.length);

// --------------------if else and else if statements--------------------
// let password="passward";
// if(password.length >=8)
// {
//     console.log('the password is strong');

// } else if(password.length <8){
//     console.log('the  password is good');
// }else {
//     console.log('the password is weak');
// }

//-------------------------Logical operator OR || AND &&-------------

// let password="pas@ward";
// if(password.length >=8 && password.includes('@'))
// {
//     console.log('the password is strong');

// } else if(password.length <8 || password.includes('@')&& password.length <5){
//     console.log('the  password is good');
// }else {
//     console.log('the password is weak');
// }
//--------------------------------logical NOT operator--------------------
// let user= 0;
// if(!user){
//     console.log('logged in');
// }else{
//     console.log('log in failed')
// 


//--------------------------------break and continue----------------------
// let score= [ 10,45,0,30,100,90];

// for (let i=0; i<score.length;i++)
// {
 
//     if(score[i]==0)
//     {
//         continue;
//     }
//     console.log(score[i]);
//     if(score[i]===100)
//     {
//         console.log(`congrates! you got tht top marks ${score[i]} out of 100.`)
//         break;
//     }
// -------------------------------Switch statement----------------
//  let grade = 'A';
//  switch(grade)
//  {
//          case 'A':
//          console.log('you got grade A');
//          break;
//          case 'B':
//          console.log('you got grade A');
//          break;
//          case 'C':
//          console.log('you got grade A');
//          break;
//          case 'D':
//          console.log('you got grade A');
//          break;
//          case 'E':
//          console.log('you got grade A');
//          break;
//          default:
//              console.log('it is not a valid grade')
//  }

//--------------------------------variable and block scope -----------------

 const age =20;
  
 if(true){
     const  age =30;
     console.log('inside the block',age);
     if(true){
     const age= 40;
        console.log('inside the block',age);
     }
 }
 console.log('outside the block',age);
