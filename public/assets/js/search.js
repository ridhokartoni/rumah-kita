let searchButton = document.getElementById('searchButton');
let searchInput = document.getElementById('searchInput');

searchButton.addEventListener('submit', () => {
    window.location.href = `/search?s=${searchInput.value}`
})