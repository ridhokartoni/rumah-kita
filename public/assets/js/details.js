function clickDetails(path){
    const token = localStorage.getItem('userToken');
    if(token){
        location.href = `/article/${path}&identify=${token}`
    }else{
        location.href = `/article/${path}`
    }
}