function startUp(){
    const token = localStorage.getItem('userToken');
    if(token){
        const uri = `${location.pathname}?identify=${token}`
        location.replace(uri);
    }
}