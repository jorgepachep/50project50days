const beginnerContainer = document.querySelector('.container:not(.none)');
const eventContainer = document.querySelector('.container.none');

document.onkeydown = keyEvent => {
    console.log(keyEvent)
    eventContainer.querySelector('.event-key .event-output span').innerText = keyEvent.key
    eventContainer.querySelector('.event-key-code .event-output span').innerText = keyEvent.keyCode
    eventContainer.querySelector('.event-code .event-output span').innerText = keyEvent.code

    if(!beginnerContainer.classList.contains('none')){
        beginnerContainer.classList.add('none')
        eventContainer.classList.remove('none')
    }
}
