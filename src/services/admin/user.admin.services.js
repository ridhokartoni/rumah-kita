const User = require('../../model/user.model');

exports.getAllUser = async function (page) {
    try {
        let result = await User.findAll({
            limit : 10,
            offside : (page - 1) * 10
        });
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}

exports.createUser = async function (user) {
    try {
        let result = await User.create(user);
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}

exports.updateUser = async function (userRequest) {
    try {
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
