function loginCheck(){
    const loginId = 'naveenthor27@gmail.com';
    const loginP = 'Naveen@75';

    const uNameValue = document.querySelector('.userName').value;
    let uPassword = document.querySelector('.passWord').value;

    const stored = JSON.parse(localStorage.getItem('value')) || [{}];
    const validUser = stored.find(
        (user) => user.uName === uNameValue && user.uPass === uPassword
    );

    if(uNameValue === loginId && uPassword === loginP){
        window.location.href = "loggedIn.html";
    }else if(validUser) {
        window.location.href = "loggedIn.html";
    }else{
        alert('Wrong Input');
    }
}

document.querySelector('.uForgot').addEventListener('click', ()=>{
        window.location.href="fckof.html" ;
});
    document.querySelector('.pForgot').addEventListener('click', ()=>{
            window.location.href="fckof.html" ;
});