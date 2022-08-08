const housingButtons = ['HCA', 'Kim', 'Lunt', 'Lloyd', 'Barkley', 'Leeds'];
const buttonPaths = []

housingButtons.forEach(function(button) {
    buttonPaths.push(document.getElementById(button))
});

function overButton(event) {
    event.target.style.backgroundColor = 'red';
}
function notOverButton(event) {
    event.target.style.backgroundColor = '';
}
function buttonClick(event) {
    
}

let buttonEvents = function(button) {
    button.onmouseover = function() {
        overButton(event);
    }
    button.onmouseout = function() {
        notOverButton(event);
    }
}

buttonPaths.forEach(buttonEvents);