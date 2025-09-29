function toggleButton(e){
    const widgetInput = e.target.parentElement.getElementsByTagName('input')[0]
    const isActive = widgetInput.classList.contains('active');

    if(!isActive)
        widgetInput.classList.add('active')
    else
        widgetInput.classList.remove('active')

    widgetInput.focus();
}