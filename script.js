const days = document.querySelectorAll('.day');
const messageBox = document.getElementById('messageBox');
const clickSound = new Audio('ding-101492.mp3');

days.forEach(day => {
    day.addEventListener('click', () => {
        clickSound.play();
        //Plays the sound effect first
        const message = day.getAttribute('data-message');
        messageBox.textContent = message;
        messageBox.style.visibility = 'visible';
    });
});