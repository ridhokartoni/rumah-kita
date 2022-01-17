function isHome(){
    let token = localStorage.getItem('userToken');
    if(token){
        location.href = `/home?identify=${token}`
    }else{
        location.href = '/home'
    }
}