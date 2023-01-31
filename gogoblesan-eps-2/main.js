const targetObject1 = document.querySelector('#targetObject1');
const targetObject2 = document.querySelector('#targetObject2');
const selection = document.querySelector('#selection');
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    const selectionValue = selection.value;
    const inputValue = input.value;
    let inputValueSize = parseInt(inputValue);
    if (selectionValue === "bgColor") {
        targetObject1.style.backgroundColor = inputValue;
    } else if (selectionValue === "txtColor") {
        targetObject2.style.color = inputValue;
    } else if (selectionValue === "fontSize") {
        targetObject2.style.fontSize = `${inputValueSize}px`;
    } else if (selectionValue === "fontFamily") {
        targetObject2.style.fontFamily = inputValue;
    } else if (selectionValue === "wCont") {
        targetObject1.style.width = `${inputValueSize}px`;
    } else if (selectionValue === "hCont") {
        targetObject1.style.height = `${inputValueSize}px`;
    }
});