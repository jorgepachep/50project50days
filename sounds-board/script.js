(() => {
    const audioButtons = document.getElementsByTagName('div');
    let playingAudio = null;
    for(let audioButton of audioButtons){
        if(!audioButton.getAttribute('audio'))
            continue;
        audioButton.addEventListener('click', (event) => {
            if(playingAudio != null){
                playingAudio.pause();
            }
            const audioName = event.target.getAttribute('audio');
            const audioUrl = `./sounds/${audioName}.mp3`;
            
            playingAudio = new Audio(audioUrl);
            playingAudio.play();
        })
    }
})()