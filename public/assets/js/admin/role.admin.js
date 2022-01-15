let token = localStorage.getItem('tokenAdmin');

function addData(appLink) {
    let loadingSpinner = document.getElementById('loading-add');
    let buttonAdd = document.getElementById('buttonAdd');
    let name = document.getElementById('name');

    buttonAdd.setAttribute('hidden', true);
    loadingSpinner.removeAttribute('hidden');

    $.ajax({
        type: 'POST',
        url : `${appLink}/admin/role/create`,
        data : {
            name : name.value
        },
        headers: {
            'Authorization' :  token
        },
        success: function (msg) {
            alert('Sukses Menambah Data')
            location.reload();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            let responseError = JSON.parse(XMLHttpRequest.responseText);
            console.log(responseError)
            alert(responseError.errorMessage);
            location.reload();

        }
        
    })

}


function editData(id, appLink) {
    let loadingSpinner = document.getElementById(`loading-edit-${id}`);
    let editButton = document.getElementById(`buttonEdit-${id}`);
    let name = document.getElementById(`name-${id}`);

    
    loadingSpinner.removeAttribute('hidden');
    editButton.setAttribute('hidden', true);

    $.ajax({
        type: 'PUT',
        url: `${appLink}/admin/role/update`,
        data: {
            id : id,
            name : name.value
        },
        headers: {
            'Authorization' :  token
        },
        success: function (msg) {
            alert('Sukses Mengedit Data')
            location.reload();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            let responseError = JSON.parse(XMLHttpRequest.responseText);
            console.log(responseError)
            alert(responseError.errorMessage);
            location.reload();

        }
    })
}

function deleteData(id, appLink){
    let buttonDelete = document.getElementById(`buttonDelete-${id}`);
    let loadingSpinner = document.getElementById(`loading-delete-${id}`);
    buttonDelete.setAttribute('hidden', true);
    loadingSpinner.removeAttribute('hidden');

    $.ajax({
        type : 'DELETE',
        url : `${appLink}/admin/role/delete`,
        data : {
            id : id
        },
        headers: {
            'Authorization' :  token
        },
        success: function (msg) {
            alert('Sukses Menghapus Data')
            location.reload();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            let responseError = JSON.parse(XMLHttpRequest.responseText);
            console.log(responseError)
            alert(responseError.errorMessage);
            location.reload();

        }
    })
}