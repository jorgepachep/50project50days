function toggleElement(event){
    const {target} = event
    const containerElement = target.parentElement.parentElement;
    
    if(containerElement.classList.contains('active'))
        containerElement.classList.remove('active')
    else
        containerElement.classList.add('active')
}
