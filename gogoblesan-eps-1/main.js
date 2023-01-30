const card = document.querySelector('#card');
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const random = document.querySelector('#random');

submit.addEventListener('click', () => {
    card.style.background = input.value;
});

random.addEventListener('click', () => {
let rand = () => {
        return Math.floor(Math.random() * 255 + 1);
    }
    card.style.background = `rgb(${rand()}, ${rand()}, ${rand()})`;
});