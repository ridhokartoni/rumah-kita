let token = localStorage.getItem('tokenAdmin');

function addData(appLink) {
    let loadingSpinner = document.getElementById('loading-add');
    let addButton = document.getElementById('addButton');
    let title = document.getElementById('add-title');
    let source = document.getElementById('add-linkOrigin');
    let thumbnail = document.getElementById('thumbnailBerita');
    let content = document.getElementById('add-content');
    let category = document.getElementById('add-category');

    loadingSpinner.removeAttribute('hidden')
    addButton.setAttribute('hidden', true)

    let formData = new FormData();
    formData.append("image", thumbnail.files[0]);

    $.ajax({
        type: 'POST',
        url: "https://api.imgbb.com/1/upload?key=9581b07778dd3f45736cae4ce09c412a",
        processData: false,
        contentType: false,
        cache: false,
        data: formData,
        enctype: 'multipart/form-data',
        success: function (msg) {
            let thumbnailUrl = msg.data.display_url;
            $.ajax({
                type: 'post',
                url: `${appLink}/admin/article/create`,
                data: {
                    title: title.value,
                    linkOrigin: source.value,
                    thumbnailPicture: thumbnailUrl,
                    content: encodeURIComponent(content.value),
                    categoryId: category.value
                },
                headers: {
                    'Authorization': token
                },
                success: function (msg) {
                    alert('sukses menambah data')
                    location.reload();
                },
                error: function (XMLHttpRequest) {
                    let responseError = JSON.parse(XMLHttpRequest.responseText);
                    console.log(responseError)
                    alert(responseError.errorMessage);
                    location.reload();
                }
            })
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            let responseError = JSON.parse(XMLHttpRequest.responseText);
            console.log(responseError)
            alert(responseError);
        }
    })

}


function editData(id, appLink) {
    let loadingSpinner = document.getElementById(`loading-edit-${id}`);
    let editButton = document.getElementById(`editButton-${id}`);
    let title = document.getElementById(`title-${id}`);
    let linkOrigin = document.getElementById(`linkOrigin-${id}`);
    let content = document.getElementById(`content-${id}`);
    let category = document.getElementById(`category-${id}`);

    loadingSpinner.removeAttribute('hidden');
    editButton.setAttribute('hidden', true);

    $.ajax({
        type: 'PUT',
        url: `${appLink}/admin/article/update`,
        data: {
            id: id,
            title: title.value,
            linkOrigin: linkOrigin.value,
            content: encodeURIComponent(content.value),
            categoryId: category.value
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
    let buttonDelete = document.getElementById(`button-delete-${id}`);
    let loadingSpinner = document.getElementById(`loading-delete-${id}`);
    buttonDelete.setAttribute('hidden', true);
    loadingSpinner.removeAttribute('hidden');

    $.ajax({
        type : 'DELETE',
        url : `${appLink}/admin/article/delete`,
        data : {
            id : id
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