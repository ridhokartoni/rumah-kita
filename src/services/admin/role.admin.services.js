const role = require('../../model/role.model');

exports.getAllRole = async function (page) {
    try {
        let result = await role.findAll({
            limit : 10,
            offside : (page - 1) * 10,
        });
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}

exports.createRole = async function (role) {
    try {
        let result = await role.create(role);
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}