//==================Filter array  mathod=================

// const scores=['23','45','56','67','30'];

//  const filteredScore=scores.filter((score)=>{
    
//       return score >50;

//  });
//   console.log(filteredScore);
//   const users = [
//       {name:'Amin', premium:true},
//       {name: 'saeed',premium:false},
//       {name: 'idress', premium:false},
//       {name: 'zafar', premium:true}
//   ];
//   const premiumUsers = users.filter((user)=>{
//       return user.premium;
//   });
//       console.log(premiumUsers);

// ========================Map array method=============
// const prices =['40','47','46','100','20','30'];
// const salesprices= prices.map(price=>{
//      return price/2;
//     })
//     console.log(salesprices);

//     const products =[
//         {name: 'head &shoulder', price:'310'},
//         {name: 'Dove soup', price:'110'},
//         {name: 'golden pearl cream', price: '400'},
//         {name: 'hair removal cream ', price: '700'},
//         {name: ' body spray' ,price:'1900'}
//     ];
//     const salesproducts= products.map(product=>{
//         if(product.price>699){
//             return{name: product.name, price:product.price/2};
//         }
//         else{
//             return product;
//         }
//     });
//     console.log(salesproducts,products);
//=========================Reduce array method============= 
// const scores =['34','34','56','67','65'];
// const result =scores.reduce((acc,curr)=>{
//     if(curr>40){
//         acc++;
//     }
//     return acc;
// },0);
// console.log(result);


// const  scores=[
//     {student: 'amin', subject:'maths',    score:95},
//     {student: 'Atif', subject:'maths',    score : 79},
//     {student: 'adnan',subject:'maths',    score: 90},
//     {student: 'zafar', subject:'maths',   score: 90},

//     {student: 'amin', subject:'bi0logy',   score:93},
//     {student: 'Atif', subject:'bi0logy',   score : 85},
//     {student: 'adnan',subject:'bi0logy',   score: 80},
//     {student: 'zafar', subject:'bi0logy',  score: 97},

//     {student: 'amin', subject:'chemistry',    score:89},
//     {student: 'Atif', subject:'chemistry',    score : 70},
//     {student: 'adnan',subject:'chemistry',    score: 67},
//     {student: 'zafar', subject:'chemistry',   score: 92},
    
//     {student: 'amin', subject:'physics',    score:96},
//     {student: 'Atif', subject:'physics',    score : 90},
//     {student: 'adnan',subject:'physics',    score: 88},
//     {student: 'zafar', subject:'physics',   score: 87},
    
    
    
// ];
// const amintotalscore=scores.reduce((acc,curr)=>{
//          if(curr.student ==='amin'){
//              acc +=curr.score;
//          }
//          return acc;
// },0);
// console.log( 'totalmarks=',amintotalscore);

//==============================Find array method================
// const score=['56','67','89','75'];
// const findscore= score.find((score)=>{
//     return score > 67;
// });
// console.log(findscore);

//==============================sort aray method=======================


// //sort method is automatically inbuilt method but it does not sort the numbers or integer correctly then we can use our logic for sorting the integers.

//  const names=['amin','aamir','sikandar','sikandaar','usman'];
// names.sort()
//  console.log(names);
// let score=[10,5,20,56,70];
// score.sort((a,b)=>b-a);
// console.log(score);
// const  scores=[
//     {player: 'amin',     score:96},
//     {player: 'Atif',    score : 90},
//     {player: 'adnan',   score: 88},
//     {player: 'zafar',    score: 95},
    
// ];
// scores.sort((a,b)=>{
//     if(a.score>b.score){
//         return -1;
//     }else if(b.score>a.score){
//         return 1;

//     }else{
//         return 0;
//     }
// });
// console.log(scores);
//=============================chaining array method==========================

// const products =[
//             {name: 'head &shoulder',     price:'310'},
//             {name: 'Dove soup',          price:'110'},
//             {name: 'golden pearl cream', price: '400'},
//             {name: 'hair removal cream ',price: '700'},
//             {name: ' body spray' ,       price:'800'}
//         ];
// const filterdproducts= products.filter(product=>{
//        return product.price >400;
// });
// const promos = filterdproducts.map(product=>
//     {
//         return ` the ${product.name} price is ${product.price/2}`;
//     })
// const promos = products
// .filter(product=> product.price >400)
// .map(product=>` the ${product.name} price is ${product.price/2}`);
// console.log(promos);
