let progress = 0;

const progressInterval = setInterval(() => {
    progress++;
    const container = document.getElementsByClassName('container')[0];
    const progressLabel = document.getElementsByClassName('progress-label')[0];

    container.style.filter = `blur(${(100 - progress)/10}px)`;
    progressLabel.style.opacity = 1-(progress/100);
    progressLabel.innerText = `${progress}%`
    

    if(progress === 100){
        progressLabel.style.display = 'none';
        clearInterval(progressInterval)
    }
    
}, 35)