const categoryAdminServices = require('../../services/admin/category.admin.services')

exports.gertAllCategory = async function (req,res){
    try {
        if(req.params.page){
            let result = await categoryAdminServices.getAllCategory(req.params.page);
            // res.render('../../views/pages/tables.ejs');
        }
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
}

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
}