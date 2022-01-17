let termsandconditionRadio = document.getElementById('termsandconditionRadio');
let termsNext = document.getElementById('termsNext');

termsandconditionRadio.addEventListener('click', (event) => {

    if (termsandconditionRadio.checked) {
        termsNext.removeAttribute('disabled')
    } else {
        termsNext.setAttribute('disabled', true)
    }
})


function onNextRegister(appLink) {
    termsNext.setAttribute('disabled', true);
    let registerData = JSON.parse(sessionStorage.getItem('registerData'))
    $.ajax({
        type: 'POST',
        data : registerData,
        url : `${appLink}/user/create`,
        success : function(data){
            $.ajax({
                type : 'POST',
                url : `${appLink}/auth/login`,
                data : {
                    email : registerData.email,
                    password : registerData.password
                },
                success : function(data){
                    localStorage.setItem('userToken', data.token);
                    sessionStorage.removeItem('registerData');
                    window.location.href = '/register/termsandcondition/success'
                },
                error : function(XMLHttpRequest, textStatus, errorThrown){
                    let responseError = JSON.parse(XMLHttpRequest.responseText);
                    console.log(responseError)
                    alert(responseError.errorMessage);
                    termsNext.removeAttribute('disabled')
                }
            })
        },

        error : function(XMLHttpRequest, textStatus, errorThrown){
            let responseError = JSON.parse(XMLHttpRequest.responseText);
            console.log(responseError)
            alert(responseError.errorMessage);
            termsNext.removeAttribute('disabled')
        }
    })
}
