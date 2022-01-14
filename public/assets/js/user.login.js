let loginButton = document.getElementById('loginButton');
let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');

loginButton.addEventListener('submit', () => {
    $.ajax({
        url: `${process.env.APP_LINK}/login`,
        type: 'POST',
        dataType: 'json',
        data: {
            email: loginEmail.value,
            password: loginPassword.value
        },
        success: (data) => {
            localStorage.setItem('userToken', data.token);
            window.location.href = '/';
        },
        error: (XMLHttpRequest, textStatus, errorThrown) => {
            let responseError = JSON.parse(XMLHttpRequest.responseText);
            alert(responseError.errorMessage);
        }
    });
})