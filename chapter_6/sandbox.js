//=======================queryselecter===========================
// const para = document.querySelector('p');
// const error= document.querySelector('div.error');
// console.log(para);
// console.log(error);

// const para = document.querySelectorAll('p');
// const error=document.querySelectorAll('.error') ;
// console.log(para);

// =============================other way to query the DOM================
//------------get element by id
// const  para = document.getElementById('rollno');
// console.log(para);
// // ----------------get element by class name 
// const classname =document.getElementsByClassName("name");
// console.log(classname);
// // ---------------get element by tag name
// const tag = document.getElementsByTagName('p');
// console.log(tag);
//-----------------adding and changing the page content-----------
// const para = document.querySelector('p');
// para.innerHTML +=' muhammad amin';
// console.log(para);
// const contant = document.querySelector('.content');
// console.log(contant.innerHTML);

//================================getting and setting attributes-------------

// const link=document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href','amin.com');
// console.log(link.getAttribute('href'));
// //================================= changing CSS style
// const title = document.querySelector('p');
// title.style.color='red';

// ========================adding and removing  classes=============
// const add = document.querySelectorAll('p');
// add.forEach(p => {
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//    if (p.textContent.includes('success')) {
//        p.classList.add('success');

//    }
//    if (p.textContent.includes('primary')) {
//     p.classList.add('primary');
//     // p.classList.remove('primary')
// }
// });
// =====================parent, children and siblings 
// const article = document.querySelector('article');
// console.log(article.children);
// console.log(Array.from(article.children));
// Array.from(article.children).forEach(child=>{
//     child.classList.add('article-element')
// });

// const title = document.querySelector('article');
// console.log(title.parentElement.parentElement.children);
// console.log(title.parentElement.children)

//=================================== click events==================
// const button= document.querySelector('button');
// button.addEventListener('click', ()=>{
//     console.log('you clicked me');
// });

// const items = document.querySelectorAll('li')
// items.forEach(item => {
//   item.addEventListener('click', e => {
//     //   console.log('item clicked')
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(item);
    
//      e.target.style.textDecoration='line-through';
     
//   });
// });
// ====================creating and removing elements====================
// const ul =document.querySelector('ul');
// const button= document.querySelector('button');
// button.addEventListener('click', ()=>{
//     const li = document.createElement('li');
//     li.textContent= 'something new to do ';
//     // ul.append(li);
//     ul.prepend(li);
// });

// const items = document.querySelectorAll('li')
// items.forEach(item => {
//   item.addEventListener('click', e => {
//     //   console.log('item clicked')
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(item);
    
//      e.target.style.textDecoration='line-through';
//     //  e.target.remove();
     
//   });
// });
// ul.addEventListener('click', e=>{
//     if(e.target.tagName==='LI'){
//     e.target.remove('li')
//     }
// });
const copy =document.querySelector('.copy-me');
copy.addEventListener('copy', ()=>{
    console.log('copyright')
    alert('oh my contect is copyright');
});
const box =document.querySelector('.box')
box.addEventListener('mousemove', e=>{
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    // box.textContent= ` X pos - ${e.offsetX} Y pos - ${e.offsetY}`
});
document.addEventListener('wheel', e => {
    console.log(e.pageX,e.pageY);
})


