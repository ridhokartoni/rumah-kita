const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const sendEmail = require('../utilities/sendEmail');



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

exports.updateUser = async (user) => {
    let result;
    try {
        result = await User.update({
            where: {
                id: user.id
            }
        })
    } catch (error) {
        
    }
}

exports.forgotPassword = async(email) => {
    try {
        const userForgot = await User.findOne({
            where : {
                email : email
            }
        });
    
        if(userForgot){
            const tokenForgotPassword = jwt.sign({
                id : userForgot.id,
            }, process.env.SECRET_KEY, {expiresIn: '2h'})
            
            let result = await sendEmail(userForgot, tokenForgotPassword);
            return result;
        }else{
            throw new Error('User tidak ditemukan')
        }
    } catch (error) {
        throw new Error(error.message);
    }
    
}