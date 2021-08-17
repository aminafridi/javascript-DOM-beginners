// console.log(1);
// console.log(2);
// setTimeout(()=>{
//    console.log('funtion fired'); 
// },5000);
// console.log(3);
// console.log(4);

// const getTodos= (resourse,callback)=>{
//  return new Promise((resolve,reject)=>{
  
//     const request = new XMLHttpRequest();
// request.addEventListener('readystatechange',()=>{
//     // console.log(request,request.readyState);
//    if(request.readyState===4 && request.status===200){
//     //    console.log(request.responseText);
//     const data = JSON.parse(request.responseText);
//     // callback(undefined,data);
//       resolve(data);
//     }else if(request.readyState===4 ){
//         //    console.log('could not fetch the data')
//         // callback('could not fetch data',undefined);   
//         reject('error getting resourse');
//     }
// });
// request.open('GET', resourse);
// request.send();

//  });

// };
// ==================== getting single data by promise================== 
// getTodos('todos/amin.json',).then(data=>{
//     console.log('promise resolved',data)
// }).catch(err=>{
//     console.log('promised rejected',err)
// }); 
//===============chaining promise=======================
// getTodos('todos/amin.json').then(data=>{
//     console.log('promise 1 resolved',data);
//      return getTodos('todos/zafar.json');
// }).then(data=>{
//      console.log('promise 2 resolved',data)
// }).catch(err=>{
//     console.log('promised rejected',err)
// }); 
// ==========================================
// console.log(1);
// console.log(2);
// getTodos( (err,data)=>{
// console.log('callback fired');
// // console.log(err,data);
// if(err){
//     console.log(err);
// }else{
//     console.log(data);
// }
// });
// console.log(3);
// console.log(4);
// getTodos('todos/amin.json',(err,data)=>{
//    console.log(data);
 
//   getTodos('todos/zafar.json',(err,data)=>{
//     console.log(data);
// });
// });
  

//==================promise =====================



// const getSomething = ()=>{
//     return new Promise((resolve,reject)=>{

    
//     resolve('some data');
//     reject('some error');
// });
// };
// getSomething().then((data)=>{
//    console.log(data);
// }).catch(err=>{
//     console.log(err)
// });


//=================fecth API===============
// fetch('todos/amin.json').then((response)=>{
//        console.log('resolved',response);
//        return response.json();
// }).then(data=>{
//        console.log(data)
// }).catch(err=>{
//         console.log('rejected',err)
// })
//========================async and await ====================
// const gettodos= async () => {
//     const response = await fetch('todos/amin.json');
//     const data = response.json();
//      return data;  
// }
// console.log(1);
// console.log(2);
// gettodos().then(data=>{
//     console.log('resolved',data)
// });
// console.log(3);
// console.log(4);
//========================= catching errors in async ftns==============
// const gettodos= async () => {
//         const response = await fetch('todos/amin.json');
//         if(response.status!==200){
//             throw new Error("could not fetch data");
//         }
//         const data = response.json();
//          return data;  
//     };
//     gettodos().then(data=>console.log('resolved',data))
//     .catch(err=>console.log('rejected: ',err.message));
//======================================================================