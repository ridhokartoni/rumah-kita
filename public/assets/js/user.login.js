let loginButton = document.getElementById('loginButton');
let userEmail = document.getElementById('userEmail');
let userPassword = document.getElementById('userPassword');

loginButton.addEventListener('submit', () => {
    $.ajax({
        url: `${process.env.APP_LINK}/login`,
        type: 'POST',
        dataType: 'json',
        data: {
            email: userEmail.value,
            password: userPassword.value
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