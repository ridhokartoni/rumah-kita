let formEditData = document.getElementById('form-edit-metadata');

formEditData.addEventListener('submit', (event) => {
    event.preventDefault();
})

function openTheLock(id){
    let elementLock = document.getElementById(id);
    elementLock.removeAttribute('readonly');
}

function saved(id, appLink){
    let email = document.getElementById('email-edit')
    let name = document.getElementById('name-edit');
    const token = localStorage.getItem('userToken');
    let buttonSaved = document.getElementById('buttonSaved');
    buttonSaved.setAttribute('disabled', true);
    $.ajax({
        type : 'PUT',
        url : `${appLink}/user/update`,
        data : {
            id : id,
            name : name.value,
        },
        headers :{
            'Authorization' : token,
        },
        success : function(data){
            location.href = "#modal-changes-saved"
        },
        error : function(XMLHttpRequest){
            let responseError = JSON.parse(XMLHttpRequest.responseText);
            alert(responseError.errorMessage);
        }
    })
}