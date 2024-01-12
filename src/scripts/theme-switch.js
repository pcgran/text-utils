document.getElementById('switch').onclick = switchTheme;

function switchTheme() {
    var currentDarkElements = document.getElementsByClassName('dark');
    var currentLightElements = document.getElementsByClassName('light');
    if (currentDarkElements.length > 0) {
        switchToLight(currentDarkElements);
    } else {
        switchToDark(currentLightElements);
    }
}

function switchToLight(currentDarkElements) {
    var darkElements = Array.from(currentDarkElements);
    for (var i = 0; i < darkElements.length; i++) {
        darkElements[i].classList.remove('dark');  
        darkElements[i].classList.add('light');              
    }
}

function switchToDark(currentLightElements) {
    var lightElements = Array.from(currentLightElements);
    for (var i = 0; i < lightElements.length; i++) {
        lightElements[i].classList.remove('light');  
        lightElements[i].classList.add('dark');              
    }
}