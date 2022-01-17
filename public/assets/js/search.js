let searchInput = document.getElementById('searchInput');
let searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const token = localStorage.getItem('userToken');
    if (token) {
        location.href = `/search?find=${searchInput.value}&identify=${token}`
    } else {
        location.href = `/search?find=${searchInput.value}`
    }
})