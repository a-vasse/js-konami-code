const pressed = [];
const secretCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';

  window.addEventListener('keyup', (event) => {
    pressed.push(event.key);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length)
    if (pressed.join('').includes(secretCode)) {
      console.log ("DING DING");
    }
    console.log(pressed.join(''))
  })
