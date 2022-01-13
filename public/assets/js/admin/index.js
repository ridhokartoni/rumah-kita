function logout(){
    localStorage.removeItem('tokenAdmin');
    location.replace('/admin/login');
}

function start(){
    let token = localStorage.getItem('tokenAdmin');
    if(!token){
        location.replace('/admin/login');
    }
}

start();