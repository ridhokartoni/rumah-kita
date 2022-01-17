let registerButton = document.getElementById('registerButton');
let registerName = document.getElementById('registerName');
let registerEmail = document.getElementById('registerEmail');
let registerPassword = document.getElementById('registerPassword');
let radios = document.getElementsByName('inlineRadioOptions');
let formRegister = document.getElementById('form-register');


formRegister.addEventListener('submit', (event) => {
    event.preventDefault();
});

function onRegister(){
    let gender = "";
    radios.forEach((data) => {
        if(data.checked){
            gender = data.value
        }
    })
    
    let data = {
        name : registerName.value,
        email : registerEmail.value,
        password : registerPassword.value,
        gender : gender,
        roleId : 2
    }

    sessionStorage.setItem('registerData', JSON.stringify(data));
    location.href = '/register/termsandcondition'
}

