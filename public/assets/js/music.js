$(document).ready(() => {
    const musicButton = document.querySelector('input[type="checkbox"]');
    const musicIcon = document.getElementById('music-icon');
    const music = document.getElementById('music-src');

    function clickMusic(e) {
        if (e.target.checked) {
            musicIcon.innerHTML = '<i class="far fa-volume"></i>'
            music.play()
        }
        else {
            musicIcon.innerHTML = '<i class="far fa-volume-mute"></i>'
            music.pause()
        }
    }

    musicButton.addEventListener('change', clickMusic)
    music.onended = () => {
        musicButton.checked = false;
        musicIcon.innerHTML = '<i class="far fa-volume-mute"></i>'
    }
})