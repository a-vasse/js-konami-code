const pressed = [];
const secretCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';
let correct = true;

window.addEventListener('keydown', (event) => {
  const secret = document.querySelector('.secret');
  pressed.push(event.key);
  pressed.splice(-secretCode.length -1, pressed.length - secretCode.length)
  if (pressed.join('').includes(secretCode) && correct) {
    let jingle = new Audio('konami.wav');
    console.log ("DING DING");
    jingle.play();
    correct = false;
    secret.innerHTML =`<img src="logo.png" class="logo"></img>`
    document.getElementById("ship").src = "after.png"
  }
  console.log(pressed.join(''))
});

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('highlight');
}

function highlight(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  key.classList.add('highlight');
};

window.addEventListener('keydown', highlight);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
