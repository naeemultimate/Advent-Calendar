const days = document.querySelectorAll('.day');
const messageBox = document.getElementById('messageBox');

days.forEach(day => {
    day.addEventListener('click', () => {
        const message = day.getAttribute('data-message');
        messageBox.textContent = message;
        messageBox.style.visibility = 'visible';
    });
});