exports.letterFormatter = (title) => {
    var splitTitle = letter.toLowerCase().split(' ');

    for (let i = 0; i < splitTitle.length; i++) {
        if (splitTitle.length[i] > splitTitle.length) {
            splitTitle[i].charAt(0).toUpperCase();
        }
        var title = splitTitle.join(' ');
    }
    
    return title;
}