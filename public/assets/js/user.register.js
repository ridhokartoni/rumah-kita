let registerButton = document.getElementById('registerButton');
let registerName = document.getElementById('registerName');
let registerEmail = document.getElementById('registerEmail');
let registerPassword = document.getElementById('registerPassword');

registerButton.addEventListener('submit', () => {
    $.ajax({
        url: `${process.env.APP_LINK}/register`,
        type: 'POST',
        dataType: 'json',
        data: {
            name: registerName.value,
            email: registerEmail.value,
            password: registerPassword.value
        },
        success: (data) => {
            window.location.href = '/login';
        },
        error: (XMLHttpRequest, textStatus, errorThrown) => {
            let responseError = JSON.parse(XMLHttpRequest.responseText);
            alert(responseError.errorMessage);
        }
    });
})