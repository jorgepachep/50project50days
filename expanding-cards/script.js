
document.addEventListener("DOMContentLoaded", () => {
    cardEventLoader()
})


const cardEventLoader = () => {
    const cards = document.getElementsByClassName('card');
    for(let card of cards){
        card.onclick = onCardClick
    }
}

const isCardActive = (classes) => {
    for(let classE of classes){
        if(classE === 'active'){
            return true
        }
    }
    return false
}

const onCardClick = (event) => {
    const selectectCard = event.currentTarget
    const classes = selectectCard.classList
    let isActive = isCardActive(classes);
    if(!isActive){
        const activeCard = document.getElementsByClassName('card active')[0];
        activeCard.classList.remove('active')
        selectectCard.classList.add('active')
        selectectCard.addEventListener('transitionend', onCardTransitionEnd)
    }
}

const onCardTransitionEnd = (event) => {
    const card = event.currentTarget;
    card.removeEventListener('transitionend', onCardTransitionEnd);
}