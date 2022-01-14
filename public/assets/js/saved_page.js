const appLink = "http://localhost:2000"
const page = 'home'
function startUp(){
    const token = localStorage.getItem('token');
    if(token){
        window.location.replace(`${appLink}/home?token=${token}`);
    }
}


startUp()