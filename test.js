// const article = require('./src/model/article.model')


// const createArticle =  article.create({
//     title: "Sepak Bola",
//     linkOrigin: "http//askdamsdkasm",
//     content: "asdnasasd asda sdas asd asd asd ad",
//     thumbnailPicture: "image.ajsdi",
//     categoryId: 1,
//     userId : 1
// });

function formatterTime() {
    let timeNow = new Date().toLocaleTimeString('en-ID');

    let sliceTime = timeNow.split(' ');
    let hour = parseInt(sliceTime[0].slice(0, 2));
    let dayOrNight = sliceTime[1];
    if (hour >= 3 && hour <= 10 && dayOrNight === 'AM') {
        return 'Pagi'
    } else if ((hour >= 11 && dayOrNight === 'AM') || (hour <= 3 && dayOrNight === 'PM')) {
        return 'Siang'
    } else if ((hour >= 4 && hour <= 6 && dayOrNight === 'PM')) {
        return 'Sore'
    } else if ((hour >= 7 && dayOrNight === 'PM') || (hour <= 2 && dayOrNight === 'AM')) {
        return 'Malam'
    }
}

