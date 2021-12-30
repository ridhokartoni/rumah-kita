const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const password = 'Teguh121@!';

User.sync({force: false}).then(() => {
    console.log("Table User Has Been Created");
}).catch((err) => {
    console.log(err);
})



let dataUser = {
    userName : 'Teguh',
    userPassword : bcrypt.hashSync(password, 10)
}

User.create(dataUser).then(()=> {
    console.log('One data user has been inserted');
}).catch((err) => {
    console.log(err);
})