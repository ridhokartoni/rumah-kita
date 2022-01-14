const User = require('../../model/user.model');
const bcrypt = require('bcrypt');

exports.getAllUser = async function (page) {
    try {
        let result = await User.findAndCountAll({
            limit : 10,
            offside : (page - 1) * 10,
            include: ['role']
        });
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}

exports.createUser = async function (user) {
    try {
        user.password = bcrypt.hashSync(user.password, 10);
        let result = await User.create(user);
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}

exports.updateUser = async function (userRequest) {
    try {
        
        if(userRequest.password){
            userRequest.password = bcrypt.hashSync(userRequest.password, 10);
        }
        
        let result = await User.update(userRequest, {
            where: {
                id : userRequest.id
            }
        });
        
        if(result[0] === 0){
            throw new Error('User tidak ditemukan/User tidak dapat diupdate')
        }else {
            return {message : "Berhasil mengupdate user", data : result}
        }
        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.deleteUser = async function (userWrong) {
    try {
        let result = await User.destroy({
            where: {
                id : userWrong.id
            }
        });
        
        if(result === 0){
            throw new Error('User tidak ditemukan/User tidak dapat didelete')
        }else {
            return {message : "Berhasil menghapus user", data : result}
        }
        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};
