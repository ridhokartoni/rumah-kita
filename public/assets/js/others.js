function clickOthers(path){
    const token = localStorage.getItem('userToken');
    if(token){
        location.href = `/see-others?page=${path}&identify=${token}`
    }else{
        location.href = `/see-others?page${path}`
    }
}