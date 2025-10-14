const input = document.getElementsByClassName('input')[0];
const effectTimeInMs = 2100;
const effectChangeTimeInMs = 100;

input.addEventListener('input', (event) => {
    const {value: inputText} = event.target;

    const words = inputText.trim().split(',')
    const tagContainerDiv = document.getElementsByClassName('tags-container')[0];
    const tagsDiv = document.getElementsByClassName('tag');

    if(inputText === '' && tagsDiv.length === 1) {
        tagContainerDiv.removeChild(tagsDiv[0]) 
        return;
    }
    
    for(let i = 0; i < words.length; i++){
        const word = words[i];
        const tagDiv = tagsDiv[i] ?? createTagElement()

        if(tagsDiv[i] === undefined && word.length > 0)
            tagContainerDiv.append(tagDiv);
        
        if(tagDiv.innerText === word)
            continue;

        tagDiv.innerText = word
    }

    for(let i=0;i<tagsDiv.length;i++){
        const word = words[i]?.trim()
        if(tagsDiv[i].innerText?.trim() === '' || word === undefined || word === '') {
            tagContainerDiv.removeChild(tagsDiv[i])
            i--;
        }
    }
})

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        const tagsDiv = document.getElementsByClassName('tag');
        let prevTag = undefined;
        for(let i=0; i < effectTimeInMs / effectChangeTimeInMs; i++){
            const randomTag = parseInt((Math.random() * 10 *((tagsDiv.length / 10) + 1)) % tagsDiv.length);
            setTimeout(() => {
                if(prevTag !== undefined) {
                    prevTag.classList.remove('selected')
                    prevTag = undefined;
                } else {
                    tagsDiv[randomTag].classList.add('selected')
                    prevTag = tagsDiv[randomTag];

                }
            }, effectChangeTimeInMs * i)
        }
        
        event.target.value = '';
        event.preventDefault();
    }
    else if(document.getElementsByClassName('selected')){
        document.getElementsByClassName('selected')[0].classList.remove('selected')
    }
})

function createTagElement(value){
    const container = document.createElement('div');
    container.classList.add('tag');
    return container;
}