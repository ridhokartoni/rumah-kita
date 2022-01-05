const user = require('../../model/user.model');

exports.getAllUser = async function (page) {
    try {
        let result = await user.findAll({
            limit : 10,
            offside : (page - 1) * 10,
        });
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}

exports.createUser = async function (user) {
    try {
        let result = await user.create(user);
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}