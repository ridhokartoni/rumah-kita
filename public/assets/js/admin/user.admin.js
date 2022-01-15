let token = localStorage.getItem('tokenAdmin');

function addData(appLink) {
    let loadingAdd = document.getElementById(`loading-add`)
    let addButton = document.getElementById(`addButton`)
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let gender = document.getElementById('gender');
    let password = document.getElementById('password');
    let role = document.getElementById('role');

    addButton.setAttribute('hidden', true);
    loadingAdd.removeAttribute('hidden');


    $.ajax({
        type : 'POST',
        url : `${appLink}/admin/user/create`,
        headers : {
            'Authorization' : token
        },
        data : {
            name : name.value,
            email : email.value,
            password : password.value,
            gender : gender.value,
            roleId : role.value
        },
        success : function(msg){
            alert("Berhasil menambah data");
            location.reload();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            let responseText = JSON.parse(XMLHttpRequest.responseText);
            console.log(responseText);
            alert('Gagal Menambah data');
            location.reload();

        }
    })
}

function editData(id, appLink){
    let loadingEdit = document.getElementById(`loading-edit-${id}`)
    let editButton = document.getElementById(`editButton-${id}`)
    let name = document.getElementById(`name-${id}`);
    let email = document.getElementById(`email-${id}`);
    let gender = document.getElementById(`gender-${id}`);
    let password = document.getElementById(`password-${id}`);
    let role = document.getElementById(`role-${id}`);
    
    editButton.setAttribute('hidden', true);
    loadingEdit.removeAttribute('hidden');

    let data = {
        id: id,
        name : name.value,
        email : email.value,
        gender : gender.value,
        roleId : role.value
    }

    if(password.value){
        data.password = password.value
    }
    
    $.ajax({
        type : 'PUT',
        url : `${appLink}/admin/user/update`,
        headers : {
            'Authorization' : token
        },
        data : data,
        success : function(msg){
            alert("Berhasil mengedit data");
            location.reload();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            let responseText = JSON.parse(XMLHttpRequest.responseText);
            console.log(responseText);
            alert('Gagal Menambah data');
            location.reload();

        }
    })
}

function deleteData(id, appLink){
    let loadingDelete = document.getElementById(`loading-delete-${id}`)
    let deleteButton = document.getElementById(`deleteButton-${id}`)
        
    deleteButton.setAttribute('hidden', true);
    loadingDelete.removeAttribute('hidden');
    $.ajax({
        type : 'DELETE',
        url : `${appLink}/admin/user/delete`,
        headers : {
            'Authorization' : token
        },
        data : {
            id : id
        },
        success : function(msg){
            alert("Berhasil menghapus data");
            location.reload();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            let responseText = JSON.parse(XMLHttpRequest.responseText);
            console.log(responseText);
            alert('Gagal Menambah data');
            location.reload();

        }
    })
}