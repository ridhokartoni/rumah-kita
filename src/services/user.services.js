const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10

exports.getAllUser = async () => {
    let result;
    try {
        result = await User.findAll({
            include : 'role'
        });
    } catch (error) {
        throw new Error(error.message);
    }
    return result;
}

exports.createUser = async (user) => {
    let result;
    try {
        let isAlreadyExist = await User.findOne({
            where : {email : user.email}
        });
        
        if(isAlreadyExist == null){
            user.password = await bcrypt.hashSync(user.password, saltRounds);
            return result = await User.create(user);
        }else {
            throw new Error('User has been exists')
        }

    } catch (error) {
        throw new Error(error.message);
    }
}

exports.deleteUser = async (user) => {
    let result;
    try {
        result = await User.destroy({
            where : {
                id : user.id
            }
        });
        
        return result
    } catch (error) {
        throw new Error(error.message);
    }
    
}