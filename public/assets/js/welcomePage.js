function startUp(){
    const token = localStorage.getItem('userToken');
    if(token){
        location.replace(`/home?identify=${token}`);
    }else{
        return
    }
}

startUp();