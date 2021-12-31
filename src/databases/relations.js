const Role = require('../model/role.model');
const User = require('../model/user.model');


function dbRelation(){
        Role.hasMany(User);
        User.belongsTo(Role)
}

module.exports = dbRelation;