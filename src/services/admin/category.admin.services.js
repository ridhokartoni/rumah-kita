const Category = require('../../model/category.model');

exports.getAllCategory = async function (page) {
    try {
        let result = await Category.findAndCountAll({
            limit : 10,
            offside : (page - 1) * 10
        });
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
};

exports.createCategory = async function (category) {
    try {
        let result = await Category.create(category);
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
};

exports.updateCategory = async function (categoryRequest) {
    try {
        let result = await Category.update(categoryRequest, {
            where: {
                id : categoryRequest.id
            }
        });
        
        if(result[0] === 0){
            throw new Error('Category tidak ditemukan/Category tidak dapat diupdate')
        }else {
            return {message : "Berhasil mengupdate category", data : result}
        }
        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.deleteCategory = async function (categoryWrong) {
    try {
        let result = await Category.destroy({
            where: {
                id : categoryWrong.id
            }
        });
        
        if(result === 0){
            throw new Error('Category tidak ditemukan/Category tidak dapat didelete')
        }else {
            return {message : "Berhasil menghapus category", data : result}
        }
        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};