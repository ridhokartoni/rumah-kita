const roleAdminServices = require('../../services/admin/role.admin.services')

exports.gertAllRole = async function (req,res){
    try {
        if(req.params.page){
            let result = await roleAdminServices.getAllRole(req.params.page);
            res.render('../../views/pages/tables.ejs');
        }
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
}

exports.createUser = async function (req,res) {
    try {
        let result = await roleAdminServices.createRole(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
}