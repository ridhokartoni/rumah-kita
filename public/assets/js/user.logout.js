let logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('submit', () => {
    localStorage.removeItem('userToken');
    window.location.href = '/';
})