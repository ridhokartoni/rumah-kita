

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
    let timeNow = new Date().toLocaleTimeString('en-ID');

    let sliceTime = timeNow.split(' ');
    let hour = parseInt(sliceTime[0].slice(0, 2));
    let dayOrNight = sliceTime[1];
    if (hour >= 3 && hour <= 10 && dayOrNight === 'AM') {
        return 'Pagi'
    } else if ((hour >= 11 && dayOrNight === 'AM') || (hour <= 2 && dayOrNight === 'PM')) {
        return 'Siang'
    } else if ((hour >= 3 && hour <= 6 && dayOrNight === 'PM')) {
        return 'Sore'
    } else if ((hour >= 7 && dayOrNight === 'PM') || (hour <= 2 && dayOrNight === 'AM')) {
        return 'Malam'
    }
}



