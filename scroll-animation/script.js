window.addEventListener('scroll', function (){
    const containers = document.getElementsByClassName('content-container')

    for(let containerElement of containers)
    {
        i++;
        const isElementInsideScreen = IsElementInsideTheScreen(containerElement);
        const containsActiveCssClass = containerElement.classList.contains('active')

        if(isElementInsideScreen && !containsActiveCssClass)
            containerElement.classList.add('active')
        else if(!isElementInsideScreen && containsActiveCssClass)
            containerElement.classList.remove('active')
    }
    i=0;
})
var i = 0;
function IsElementInsideTheScreen(element){
    const {height, y} = element.getBoundingClientRect();
    const {innerHeight: screenHeight} = window;

    return (y + height / 2) < screenHeight;
}