const a = JSON.parse(localStorage.getItem('value')) || [{}];

function signUp(){
    let display = document.querySelector('.display').innerHTML;

    const uName = document.querySelector('.userName').value;
    let uPass = document.querySelector('.passWord1').value;
    let uPassword2 = document.querySelector('.passWord2').value;

    if(uName === ''){
        alert('Invalid Username');
    }else if(uPass === ''){
        alert('Invalid Password');
    }else{
            if(uPass !== uPassword2){
                alert("Password didn't match");
            }else{
                display = `Signed up by username ${uName}`;
        
                a.push({
                    uName,
                    uPass
                });
            
                localStorage.setItem('value',JSON.stringify(a));
                document.querySelector('.display').innerHTML = display;
            }
    }
}