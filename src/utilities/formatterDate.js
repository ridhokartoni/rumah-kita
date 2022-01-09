const moment = require('moment');

exports.formatterDate = function() {
    moment.locale('id');
    const dateLocalWIB = moment().format('LLLL').split(" ");
    return dateLocalWIB[0] + " " + dateLocalWIB[1] + " "+  dateLocalWIB[2]+ " " + dateLocalWIB[3]
}


