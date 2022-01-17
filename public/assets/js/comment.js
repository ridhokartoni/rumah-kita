let commentButton = document.getElementById('commentButton');
let commentInput = document.getElementById('commentInput');

commentButton.addEventListener('submit', () => {
    $.ajax({
        url: `${appLink}/comment/create`,
        type: 'POST',
        dataType: 'json',
        data: {
            articleId: loginEmail.value,
            userId: loginPassword.value,
            comment: commentInput.value
        },
        success: (data) => {
            // localStorage.setItem('userToken', data.token);
            // window.location.href = `/home?identify=${data.token}`;
        },
        error: (XMLHttpRequest, textStatus, errorThrown) => {
            let responseError = JSON.parse(XMLHttpRequest.responseText);
            alert(responseError.errorMessage);
            loginButton.removeAttribute('disabled');

        }
    });
})