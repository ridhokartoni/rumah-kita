const User = require('../model/user.model');
const Role = require('../model/role.model');
const Category = require('../model/category.model');


//Run this function to migration about table structure in our databases
async function migration(){
    try {
        const roleSync = await Role.sync({
            force: false,
            alter : true,
        });

        const categorySync = await Category.sync({
            force: false,
            alter : true,
        });
    
        const userSync = await User.sync({
            force: false,
            alter: true
        });
    
        console.log(roleSync);
        console.log(userSync);

        const createCategory = await Category.create({
            name : "Mental Issues"
        });

        console.log('Create Category Success')


        const createRole = await Role.bulkCreate([
            {
                name : "user"
            }, 
            {
                name : "admin"
            }
        ]);

        console.log('Create Role Success')


        const createUser = await User.create({
            name : "Teguh",
            email : "tripr@gmail.com",
            password : "Teguh121@!",
            gender : "Pria",
            avatar : "/3.svg",
            roleId : 1
        });

        console.log('Create User Success')


        
    } catch (error) {
        console.log(error);
    }
}


migration();





