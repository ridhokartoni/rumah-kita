let email = document.getElementById('email');
let password = document.getElementById('password');

function login(appLink){
    $.ajax({
        type: "POST",
        url: `${appLink}/auth/login?role=admin`,
        dataType: "json",
        data: {
          email: email.value,
          password: password.value
        },
        success: function(msg){            
            localStorage.setItem('tokenAdmin', msg.token);
            window.location.replace(`${appLink}/admin/article/1`);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            let responseError = JSON.parse(XMLHttpRequest.responseText);
            alert(responseError.errorMessage);
        }
      });
}

