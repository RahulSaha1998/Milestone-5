function getInput(inputId){
    let inputField = document.getElementById(inputId);
    let inputStr = inputField.value;
    let input = parseFloat(inputStr);
    // inputField.value = '';
    return input;
}
function getTxtInput(inputId){
    let inputField = document.getElementById(inputId);
    let inputStr = inputField.value;
    // let input = parseFloat(inputStr);
    inputField.value = '';
    return inputStr;
}

function getText(textId){
    let textField = document.getElementById(textId);
    let textStr = textField.innerText;
    let text = parseFloat(textStr);
    return text;

}

function setText( textId, text){
    let set = document.getElementById(textId);
    set.innerHTML = text;
}
function setTextInput( textId, text){
    let set = document.getElementById(textId);
    set.value = text;
}