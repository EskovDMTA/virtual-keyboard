import { keyboardFragment, keyboardKeys } from './keyboard.js';

let lang = 'ru';
let caps = false;

function setLocalStorage() {
  lang = localStorage.getItem('lang') === 'en' ? 'en' : 'ru';
}

setLocalStorage();

function renderKeyboard(keyboardKeys) {
  const container = document.createElement('div');
  const title = document.createElement('h1');
  const display = document.createElement('textarea');
  const wrapper = document.createElement('div');
  const keyboard = document.createElement('div');
  const aboutKeyboard = document.createElement('h3');

  container.classList.add('container');

  title.classList.add('keyboard__title');
  title.textContent = 'Virtual keyboard';

  display.setAttribute('type', 'text');
  display.autofocus = true;
  display.classList.add('display');

  wrapper.classList.add('wrapper');

  keyboard.classList.add('keyboard');

  aboutKeyboard.textContent = "Keyboard designed on macos. Press 'ctrl+command' to change language";

  keyboard.appendChild(keyboardFragment);
  wrapper.appendChild(keyboard);

  container.appendChild(title);
  container.appendChild(display);
  container.appendChild(wrapper);
  container.appendChild(aboutKeyboard);
  document.body.appendChild(container);
}

renderKeyboard();

const buttons = document.querySelectorAll('.btn');

const keyboard = document.querySelector('.keyboard');
const display = document.querySelector('.display');

let displayValue = [];

changeLanguage(lang);
display.addEventListener('blur', () => {
  setTimeout(() => {
    display.focus();
  }, 0);
});

buttons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    if (btn.id === 'Tab') {
      btn.classList.add('btn__active');
      tabBTN(event);
      setTimeout(() => {
        btn.classList.remove('btn__active');
      }, 100);
      return;
    }

    if (btn.id === 'Space') {
      btn.classList.add('btn__active');
      spaceBTN(event);
      setTimeout(() => {
        btn.classList.remove('btn__active');
      }, 100);
      return;
    }
    if (btn.id === 'Backspace') {
      deleteBTN(event);
      return;
    }
    if (btn.id === 'ShiftLeft') {
      btn.classList.add('btn__active');
      shiftBTN(event);
      setTimeout(() => {
        btn.classList.remove('btn__active');
      }, 100);
      return;
    }
    if (btn.id === 'ShiftRight') {
      btn.classList.add('btn__active');
      shiftBTN(event);
      setTimeout(() => {
        btn.classList.remove('btn__active');
      }, 100);
      return;
    }
    if (btn.id === 'AltLeft') {
      btn.classList.add('btn__active');
      setTimeout(() => {
        btn.classList.remove('btn__active');
      }, 100);
      return;
    }
    if (btn.id === 'AltRight') {
      btn.classList.add('btn__active');
      setTimeout(() => {
        btn.classList.remove('btn__active');
      }, 100);
      return;
    }
    if (btn.id === 'Enter') {
      returnBTN();

      return;
    }
    if (btn.id === 'ControlLeft') {
      btn.classList.add('btn__active');
      setTimeout(() => {
        btn.classList.remove('btn__active');
      }, 100);
      return;
    }
    if (btn.id === 'MetaLeft') {
      btn.classList.add('btn__active');
      setTimeout(() => {
        btn.classList.remove('btn__active');
      }, 100);
      return;
    }
    if (btn.id === 'MetaRight') {
      btn.classList.add('btn__active');
      setTimeout(() => {
        btn.classList.remove('btn__active');
      }, 100);
      return;
    }
    if (btn.id === 'CapsLock') {
      capsSwitch(caps);
      btn.classList.toggle('btn__active');
      return;
    }
    if (btn.id === 'fn') {
      btn.classList.add('btn__active');
      setTimeout(() => {
        btn.classList.remove('btn__active');
      }, 100);
      return;
    }
    display.value += btn.innerText;
    displayValue = display.value.split('');
    btn.classList.add('btn__active');
    setTimeout(() => {
      btn.classList.remove('btn__active');
    }, 100);
  });
});
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  console.log(event.code);
  const btn = document.getElementById(event.code);
  if (event.code === 'Tab') {
    btn.classList.add('btn__active');
    tabBTN(event);
    return;
  }

  if (event.code === 'MetaLeft' && event.ctrlKey) {
    lang = lang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('lang', lang);
    changeLanguage(lang);
  }
  if (event.code === 'Space') {
    spaceBTN(event);
    btn.classList.add('btn__active');
    return;
  }

  if (event.code === 'Backspace') {
    btn.classList.add('btn__active');
    deleteBTN(event);
    return;
  }

  if (event.code === 'CapsLock') {
    capsSwitch(caps);
    btn.classList.add('btn__active');
    return;
  }
  if (event.code === 'ShiftLeft') {
    shiftBTN(event);
    btn.classList.add('btn__active');
    return;
  }
  if (event.code === 'ShiftRight') {
    shiftBTN(event);
    btn.classList.add('btn__active');
    return;
  }
  if (event.code === 'MetaLeft') {
    btn.classList.add('btn__active');
    return;
  }
  if (event.code === 'MetaRight') {
    btn.classList.add('btn__active');
    return;
  }
  if (event.code === 'ControlLeft') {
    btn.classList.add('btn__active');
    return;
  }
  if (event.code === 'AltLeft') {
    btn.classList.add('btn__active');
    return;
  }
  if (event.code === 'AltRight') {
    btn.classList.add('btn__active');
    return;
  }
  if (event.code === 'Enter') {
    btn.classList.add('btn__active');
    returnBTN();
    return;
  }
  display.value += btn.innerText;
  displayValue = display.value.split('');

  btn.classList.add('btn__active');
});

document.addEventListener('keyup', (event) => {
  const btn = document.getElementById(event.code);
  btn.classList.remove('btn__active');
  if (event.code === 'CapsLock') {
    capsSwitch(caps);
  }
});

function spaceBTN(event) {
  event.preventDefault();
  display.value += ' ';
  displayValue = display.value.split('');
}

function tabBTN(event) {
  event.preventDefault();
  display.value += '    ';
  displayValue = display.value.split('');
}

function deleteBTN(event) {
  event.preventDefault();
  displayValue.pop();
  display.value = displayValue.join('');
}

function shiftBTN(event) {
}

function returnBTN() {
  display.value += '\n';
  displayValue = display.value.split('');
}

function changeLanguage(lang, shift = false) {
  Array.from(keyboard.querySelectorAll('.btn')).forEach(
    (e) => {
      e.textContent = keyboardKeys[e.id][lang];
    },
  );
}

function capsSwitch(registry) {
  caps = registry !== true;
  const showCase = (caps && !registry) || (caps && registry);
  const toCase = showCase ? 'toUpperCase' : 'toLowerCase';
  Array.from(keyboard.querySelectorAll('.btn')).forEach(
    (e) => {
      if (!keyboardKeys[e.id].case) {
        if (e.id === 'Backquote' && lang === 'en') {
          e.textContent = registry ? '~' : '`';
        } else if (e.id === 'Minus' && lang === 'en') {
          e.textContent = registry ? '_' : '-';
        } else if (e.id === 'Digit1') {
          e.textContent = registry ? '1' : '!';
        } else if (e.id === 'Digit2') {
          e.textContent = registry ? '2' : '@';
        } else if (e.id === 'Digit3') {
          e.textContent = registry ? '3' : '#';
        } else if (e.id === 'Digit4') {
          e.textContent = registry ? '4' : '$';
        } else if (e.id === 'Digit5') {
          e.textContent = registry ? '5' : '%';
        } else if (e.id === 'Digit6') {
          e.textContent = registry ? '6' : '^';
        } else if (e.id === 'Digit7') {
          e.textContent = registry ? '7' : '&';
        } else if (e.id === 'Digit8') {
          e.textContent = registry ? '8' : '*';
        } else if (e.id === 'Digit9') {
          e.textContent = registry ? '9' : '(';
        } else if (e.id === 'Digit0') {
          e.textContent = registry ? '0' : ')';
        } else if (e.id === 'Equal' && lang === 'en') {
          e.textContent = registry ? '+' : '=';
        } else if (e.id === 'BracketLeft' && lang === 'en') {
          e.textContent = registry ? '{' : '[';
        } else if (e.id === 'BracketRight' && lang === 'en') {
          e.textContent = registry ? '}' : ']';
        } else if (e.id === 'Backslash' && lang === 'en') {
          e.textContent = registry ? '|' : '\\';
        } else if (e.id === 'Semicolon' && lang === 'en') {
          e.textContent = registry ? ':' : ';';
        } else if (e.id === 'Quote' && lang === 'en') {
          e.textContent = registry ? '"' : "'";
        } else if (e.id === 'Comma' && lang === 'en') {
          e.textContent = registry ? '<' : ',';
        } else if (e.id === 'Period' && lang === 'en') {
          e.textContent = registry ? '>' : '.';
        } else if (e.id === 'Slash' && lang === 'en') {
          e.textContent = registry ? '?' : '/';
        } else if (e.id === 'Slash' && lang === 'ru') {
          e.textContent = registry ? ',' : '.';
        } else {
          e.textContent = e.textContent[toCase]();
        }
      }
    },
  );
}
