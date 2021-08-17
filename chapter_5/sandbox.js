//-------------------create object literals-----------

let user ={
   name:'amin',
   email:'aminafridi@gmail.com',
   location:'peshawar',
   blogs:['health is wealth','something is better than nothing'] ,
   // adding method to objects
// e.g
   login : function(){
    console.log('the user logged in');
   },
logout : function(){
    console.log('the user logged out');   
},
logblogs:function(){
    console.log('this user has written the following blogs');
    this.blogs.forEach(blog =>{
         console.log(blog);
    })
}
  
 
};
user.login();
console.log(user);
// accessing by dots
console.log(user.name);
//accesing  properties by square brackets
console.log(user['location']);
console.log(typeof user);
user.logout();
//console.log(this);
user.logblogs();
// ----------------------math object--------------------
  console.log(Math.E);
  console.log(Math.PI);
  const area= 7.5;
  console.log(Math.floor(area));
  console.log(Math.ceil(area)); 
  console.log(Math.round(area));
  const random= Math.random();
  console.log(random);
  console.log(Math.round(random*10));// it will show the number b/w 0 amd 10 randomly
  //==========================================================================A




