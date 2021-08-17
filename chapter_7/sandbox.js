const form= document.querySelector('.signup-form');
// const feedback= document.querySelector('.feedback');

form.addEventListener('submit', e=>{
    e.preventDefault();
    // console.log(username.value);
    // console.log(email.value);
    // console.log(form.username.value);
    // console.log(form.email.value);

// ===============testing RegExp
// const username= '1234aminkhan123';
// const pattern = /^[a-z0-9]{5,}$/;
// let result =pattern.test(username);
// if (result) {
//     console.log('RegExp test passed.');
// }
// else{
//     console.log('failed..');

// }
// let result= username.search(pattern);
// console.log(result);

//=====================form validation by regular expression===========
// const username= form.username.value;
// console.log(username);
// const usernamepattern = /^[a-zA-Z0-9]{5,}$/;
// if (usernamepattern.test(username)) {
//     feedback.textContent='username is valid';

// }
// else{
//     feedback.textContent='username  must contain letters only and also the string must be greater than 5 ';

// }

})
// live feedback
form.username.addEventListener('keyup', e=>{
    const usernamepattern = /^[a-z]{5,10}$/; 
    //    console.log(e.target.value,form.username.value);
      if(usernamepattern.test(e.target.value))
      {
        //    console.log('passed')
          form.username.setAttribute('class','success');
      }
    else{
        // console.log('failed')
        form.username.setAttribute('class','error');
    }
});
