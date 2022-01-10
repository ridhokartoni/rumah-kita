const moment = require('moment');

exports.formatterDate = function() {
    moment.locale('id');
    const dateLocalWIB = moment().format('LLLL').split(" ");
    return dateLocalWIB[0] + " " + dateLocalWIB[1] + " "+  dateLocalWIB[2]+ " " + dateLocalWIB[3]
}

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
