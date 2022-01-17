let loginButton = document.getElementById('loginButton');
let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');
let formLogin = document.getElementById('form-login');

formLogin.addEventListener('submit', function(event) {
    event.preventDefault();
});

function userLogin (appLink){
    loginButton.setAttribute('disabled', true);

    $.ajax({
        url: `${appLink}/auth/login`,
        type: 'POST',
        dataType: 'json',
        data: {
            email: loginEmail.value,
            password: loginPassword.value
        },
        success: (data) => {
            localStorage.setItem('userToken', data.token);
            window.location.href = `/home?identify=${data.token}`;
        },
        error: (XMLHttpRequest, textStatus, errorThrown) => {
            let responseError = JSON.parse(XMLHttpRequest.responseText);
            alert(responseError.errorMessage);
            loginButton.removeAttribute('disabled');

        }
    });
}

let token = localStorage.getItem('userToken');
if(token){
    location.replace(`/home?identify=${token}`)
}