(() => {
    const formControls = document.getElementsByClassName('form-control');

    for(let formControl of formControls){
        const formControlInput = formControl.getElementsByTagName('input');
        const formControlLabel = formControl.getElementsByClassName('transition');

        if(formControlInput == null) return;
        
        const formInput = formControlInput[0];
        const formLabel = formControlLabel[0];
        const formLabelText = formLabel.innerHTML
        let transitionDelay = 0;
        formLabel.innerHTML = '';

        for(let char of formLabelText){
            const spanElement = document.createElement('span')
            spanElement.innerText = char;
            spanElement.style.transitionDelay = `${transitionDelay}ms`;
            formLabel.appendChild(spanElement)

            transitionDelay +=50;
        }

        formInput.addEventListener("focus", toggleFormControl);
        formInput.addEventListener("focusout", toggleFormControl);
    }
})()

function toggleFormControl(event){
    const formInputVal = event.target.value;
    const formControl = event.target.parentElement;
    const isFocused = event.type === 'focus';
    const isActive = !!(formInputVal || isFocused);

    if(isActive && !formControl.classList.contains('active')){
        formControl.classList.add('active','move')
        setTimeout(() => formControl.classList.remove('move'), 100)
    }
    else if (!isActive && formControl.classList.contains('active')){
        formControl.classList.remove('active');
        formControl.classList.add('move')  
        setTimeout(() => formControl.classList.remove('move'), 100)
    }
}