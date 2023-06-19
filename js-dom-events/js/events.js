//option 1 : Directly set on html element
// <button onclick="console.log(65)">Another Button</button>



//option 2: add onclick function on the HTML Element
//IMPORTANT: we will use this
//<button onclick="makeRed()">Make Red</button>

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//option:3 add onclick function
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//option:3 add onclick function
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


//option:4 add onclick function
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}



//option:4 add onclick function another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});



//option:4 final option
//IMPORTANT: we will use it some time
// document.getElementById('make-goldenrod').addEventListener('click',function(){});
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
});
