
const moment = require('moment');


exports.currentDate = () => {
    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const dayNames = [
        "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"
    ];
    const date = new Date();
    const currentDate = `${dayNames[date.getDay()]}, ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;

    return currentDate;
}


exports.formatterTime = function () {
    moment.locale('id')
    const time = moment().format('a');
    return time
}



