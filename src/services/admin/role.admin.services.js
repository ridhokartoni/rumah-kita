const Role = require('../../model/role.model');

exports.getAllRole = async function (page) {
    try {
        let result = await Role.findAndCountAll({
            limit : 10,
            offside : (page - 1) * 10
        });
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
};

exports.createRole = async function (role) {
    try {
        let result = await Role.create(role);
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
};

exports.updateRole = async function (roleRequest) {
    try {
        let result = await Role.update(roleRequest, {
            where: {
                id : roleRequest.id
            }
        });
        
        if(result[0] === 0){
            throw new Error('Role tidak ditemukan/Role tidak dapat diupdate')
        }else {
            return {message : "Berhasil mengupdate Role", data : result}
        }
        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.deleteRole = async function (roleWrong) {
    try {
        let result = await Role.destroy({
            where: {
                id : roleWrong.id
            }
        });
        
        if(result === 0){
            throw new Error('Role tidak ditemukan/Role tidak dapat didelete')
        }else {
            return {message : "Berhasil menghapus role", data : result}
        }
        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};