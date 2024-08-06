
const keyDisplay = document.getElementById('key-display');

document.addEventListener('keydown', event => {
    keyDisplay.textContent = `Key Code: ${event.keyCode}`;
});
