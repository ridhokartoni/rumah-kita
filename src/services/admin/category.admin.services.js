const category = require('../../model/category.model');

exports.getAllCategory = async function (page) {
    try {
        let result = await category.findAll({
            limit : 10,
            offside : (page - 1) * 10
        });
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}

exports.createCategory = async function (categoryy) {
    try {
        let result = await category.create(categoryy);
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}