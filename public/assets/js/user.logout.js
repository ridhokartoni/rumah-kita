let logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('userToken');
    window.location.href = '/home';
})