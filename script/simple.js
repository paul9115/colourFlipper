const colours = [
    'green',
    'red',
    'rgba(133, 122, 200)',
    '#f15025',
];

const button = document.getElementById('btn');
const colour = document.querySelector('.colour');

let currentColour = '';

const getRandomColour = () => {
    console.log(`current: ${currentColour}`);
    let newColour = '';
    do {
        newColour = colours[Math.floor(Math.random() * colours.length)];
        console.log(`new: ${newColour}`);
    } while (newColour === currentColour);
    currentColour = newColour;
    return newColour;
}

button.addEventListener('click', () => {
    const newSelection = getRandomColour()
    document.body.style.backgroundColor = newSelection;
    colour.textContent = newSelection;
});