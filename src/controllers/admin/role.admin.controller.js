const roleAdminServices = require('../../services/admin/role.admin.services')

exports.getAllRole = async function (req,res){
    try {
        if(req.params.page){
            let result = await roleAdminServices.getAllRole(req.params.page);
            // res.render('../../views/pages/tables.ejs');
        }
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};

exports.createRole = async function (req,res) {
    try {
        let result = await roleAdminServices.createRole(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};

exports.updateRole = async function (req,res) {
    try {
        let result = await roleAdminServices.updateRole(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};

exports.deleteRole = async function (req,res) {
    try {
        let result = await roleAdminServices.deleteRole(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};