const generateHex = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const button = document.getElementById('btn');
const colour = document.querySelector('.colour');
let currentColour = '';

button.addEventListener('click', () => {
    let newColour = ''
    do {
        newColour = generateHex();
    } while(newColour === currentColour);
    currentColour = newColour;
    document.body.style.backgroundColor = newColour;
    colour.textContent = newColour.toUpperCase();
})

