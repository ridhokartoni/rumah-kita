let comment = document.getElementById('comment');
let formComment = document.getElementById('form-comment');
let buttonComment = document.getElementById('buttonAddComment');

formComment.addEventListener('submit', (event) => {
    event.preventDefault();
})


function addComment(appLink, userId, articleId){
    const token = localStorage.getItem('userToken');
    
    buttonComment.setAttribute('disabled', true)
    $.ajax({
        type : 'POST',
        url : `${appLink}/comment/create`,
        headers : {
            'Authorization' : token
        },
        data : {
            userId : userId,
            articleId : articleId,
            comment : comment.value
        },
        success : function(data){
            location.reload();
        },
        error : function(XMLHttpRequest, textStatus, errorThrown){
            let responseError = JSON.parse(XMLHttpRequest.responseText);
            alert(responseError.errorMessage);
        }
    })
}
