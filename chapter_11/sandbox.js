//=================time and date======================

// const date =new Date();
// console.log(date)
// console.log(date.getFullYear());
// console.log(date.getMinutes());
//=========================digital clock=================
// const clock =document.querySelector('.clock');
// const tick =()=>{
//     const now =new Date();
//     const h=now.getHours();
//     const m= now.getMinutes();
//     const s= now.getSeconds();

//     const html=`
//     <span>${h}</span>:
//     <span>${m}</span>:
//     <span>${s}</span>`;
//     clock.innerHTML=html;
// //  console.log(h,m,s)
// }
// setInterval(tick, 1000);
const now = new Date();
console.log(dateFns.format( now ,'dddd Do MMM YYYY'));