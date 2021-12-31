const User = require('../model/user.model');
const Role = require('../model/role.model');



Role.sync({force : false, alter: true}).then(() => {
    console.log("Syncronize Table Role success");
}).catch((err) => {
    console.log(err);
})

User.sync({force: false, alter: true}).then(() => {
    console.log("Table User Has Been Created");
}).catch((err) => {
    console.log(err);
})

Role.bulkCreate([
    {
        name : "user"
    }, 
    {
        name : "admin"
    }
]).then((result) => {
    console.log(result);
}).catch((err) => console.log(err));

User.create({
    name : "Teguh",
    email : "tripr@gmail.com",
    password : "Teguh121@!",
    gender : "Pria",
    avatar : "/3.svg",
    roleId : 1
}).then((result) => {
    console.log(result)
}).catch((err) => console.log(err))

