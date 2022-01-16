function startUp(){
    const token = localStorage.getItem('userToken');
    if(!location.search.includes('identify')){
        console.log("ga ada identify")
        if(token){
            const uri = `${location.pathname}?identify=${token}`
            location.href = uri
        }
    }else{
        return
    }
}

startUp();
