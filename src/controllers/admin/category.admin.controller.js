const categoryAdminServices = require('../../services/admin/category.admin.services')

exports.getAllCategory = async function (req,res){
    try {
        if(req.params.page){
            let result = await categoryAdminServices.getAllCategory(req.params.page);
            res.render('../views/pages/admin/category.ejs', {
                appLink : process.env.appLink,
                data : {
                    categorys : result.rows,
                    pagination : {
                        page : req.params.page,
                        beforePage : parseInt(req.params.page) - 1,
                        nextPage : parseInt(req.params.page) + 1,
                        totalPage : Math.ceil(result.count / 10),
                        namePage : 'category'
                    } 
                }
            });
        }else{
            res.redirect('/admin/category/1')
        }
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};

exports.createCategory = async function (req,res) {
    try {
        let result = await categoryAdminServices.createCategory(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};

exports.updateCategory = async function (req,res) {
    try {
        let result = await categoryAdminServices.updateCategory(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};

exports.deleteCategory = async function (req,res) {
    try {
        let result = await categoryAdminServices.deleteCategory(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};