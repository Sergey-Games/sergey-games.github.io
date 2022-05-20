export const radioPlayerInit = () => {

const radioNavigation = document.querySelector('.radio-navigation');
const radioItem = document.querySelectorAll('.radio-item');
const radioStop = document.querySelector('.radio-stop');
const radioVolume = document.querySelector('.radio-volume');


const audio = new Audio();
audio.type = 'audio/aac';

radioStop.disabled = true;

const selectItem = elem => {
    radioItem.forEach(item => item.classList.remove('select'));
    elem.classList.add('select'); 
}

radioNavigation.addEventListener('change', event => {
    const target = event.target;
    const parrent = target.closest('.radio-item');
    selectItem(parrent);
    radioStop.disabled = false;
    audio.src = target.dataset.radioStantion;
    audio.play();
});

radioStop.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

radioVolume.addEventListener('input', () => {
    audio.volume = radioVolume.value / 100;
    varTempVolume = audio.volume;
});

};