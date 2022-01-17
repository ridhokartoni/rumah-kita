exports.letterFormatter = (title) => {
    var splitTitle = title.toLowerCase().split(' ');

    for (let i = 0; i < splitTitle.length; i++) {
        splitTitle[i] = splitTitle[i].charAt(0).toUpperCase() + splitTitle[i].substring(1);
    }

    return splitTitle.join(' ');
}