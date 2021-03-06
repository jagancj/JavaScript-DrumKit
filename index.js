keyPressed = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.keyblock[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    key.classList.add('sound');
    audio.play();
}
const keyList = document.querySelectorAll('.keyblock');
console.log(keyList);
keyList.forEach(key => {
    key.ontransitionend = () => {
        key.classList.remove('sound');
    };
});
window.addEventListener('keydown', keyPressed);