const bcrypt = require('bcrypt');
const UserModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

exports.login = async (user) => {
    
    const UserLogin = await UserModel.findOne({
        where : {
            email : user.email
        }
    });
    
    if(UserLogin !== null){
        const isPasswordMatched = await bcrypt.compareSync(user.password, UserLogin.password);
        if(isPasswordMatched == true){
            const token = jwt.sign({
               userId : UserLogin.userId
            }, process.env.SECRET_KEY, {expiresIn: '7d'});

            return {
                email : UserLogin.email,
                token : token
            }
        }
    }else{
        throw new Error('User is not found');
    }
}