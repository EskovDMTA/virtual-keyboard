const keyboardLayout = [
  [
    {
      code: 'Backquote', func: false, lang: { en: '`', ru: ']' }, properties: 'regular',
    },
    {
      code: 'Digit1', func: false, lang: { en: '1', ru: '1' }, properties: 'regular',
    },
    {
      code: 'Digit2', func: false, lang: { en: '2', ru: '2' }, properties: 'regular',
    },
    {
      code: 'Digit3', func: false, lang: { en: '3', ru: '3' }, properties: 'regular',
    },
    {
      code: 'Digit4', func: false, lang: { en: '4', ru: '4' }, properties: 'regular',
    },
    {
      code: 'Digit5', func: false, lang: { en: '5', ru: '5' }, properties: 'regular',
    },
    {
      code: 'Digit6', func: false, lang: { en: '6', ru: '6' }, properties: 'regular',
    },
    {
      code: 'Digit7', func: false, lang: { en: '7', ru: '7' }, properties: 'regular',
    },
    {
      code: 'Digit8', func: false, lang: { en: '8', ru: '8' }, properties: 'regular',
    },
    {
      code: 'Digit9', func: false, lang: { en: '9', ru: '9' }, properties: 'regular',
    },
    {
      code: 'Digit0', func: false, lang: { en: '0', ru: '0' }, properties: 'regular',
    },
    {
      code: 'Minus', func: false, lang: { en: '-', ru: '-' }, properties: 'regular',
    },
    {
      code: 'Equal', func: false, lang: { en: '=', ru: '=' }, properties: 'regular',
    },
    {
      code: 'Backspace', func: true, lang: { en: 'delete', ru: 'delete' }, properties: 'btn__delete',
    },
    // {
    //   code: 'Delete', func: true, lang: { en: 'Del ⌦', ru: 'Del ⌦' }, properties: 'wide',
    // },
  ],
  [
    {
      code: 'Tab', func: true, lang: { en: 'tab', ru: 'tab' }, properties: 'btn__tab',
    },
    {
      code: 'KeyQ', func: false, lang: { en: 'q', ru: 'й' }, properties: 'regular',
    },
    {
      code: 'KeyW', func: false, lang: { en: 'w', ru: 'ц' }, properties: 'regular',
    },
    {
      code: 'KeyE', func: false, lang: { en: 'e', ru: 'у' }, properties: 'regular',
    },
    {
      code: 'KeyR', func: false, lang: { en: 'r', ru: 'к' }, properties: 'regular',
    },
    {
      code: 'KeyT', func: false, lang: { en: 't', ru: 'е' }, properties: 'regular',
    },
    {
      code: 'KeyY', func: false, lang: { en: 'y', ru: 'н' }, properties: 'regular',
    },
    {
      code: 'KeyU', func: false, lang: { en: 'u', ru: 'г' }, properties: 'regular',
    },
    {
      code: 'KeyI', func: false, lang: { en: 'i', ru: 'ш' }, properties: 'regular',
    },
    {
      code: 'KeyO', func: false, lang: { en: 'o', ru: 'щ' }, properties: 'regular',
    },
    {
      code: 'KeyP', func: false, lang: { en: 'p', ru: 'з' }, properties: 'regular',
    },
    {
      code: 'BracketLeft', func: false, lang: { en: '[', ru: 'х' }, properties: 'regular',
    },
    {
      code: 'BracketRight', func: false, lang: { en: ']', ru: 'ъ' }, properties: 'regular',
    },
    {
      code: 'Backslash', func: false, lang: { en: '\\', ru: 'ё' }, properties: 'regular',
    },
  ],
  [
    {
      code: 'CapsLock', func: true, lang: { en: 'caps lock', ru: 'caps lock' }, properties: 'btn__caps-lock',
    },
    {
      code: 'KeyA', func: false, lang: { en: 'a', ru: 'ф' }, properties: 'regular',
    },
    {
      code: 'KeyS', func: false, lang: { en: 's', ru: 'ы' }, properties: 'regular',
    },
    {
      code: 'KeyD', func: false, lang: { en: 'd', ru: 'в' }, properties: 'regular',
    },
    {
      code: 'KeyF', func: false, lang: { en: 'f', ru: 'а' }, properties: 'regular',
    },
    {
      code: 'KeyG', func: false, lang: { en: 'g', ru: 'п' }, properties: 'regular',
    },
    {
      code: 'KeyH', func: false, lang: { en: 'h', ru: 'р' }, properties: 'regular',
    },
    {
      code: 'KeyJ', func: false, lang: { en: 'j', ru: 'о' }, properties: 'regular',
    },
    {
      code: 'KeyK', func: false, lang: { en: 'k', ru: 'л' }, properties: 'regular',
    },
    {
      code: 'KeyL', func: false, lang: { en: 'l', ru: 'д' }, properties: 'regular',
    },
    {
      code: 'Semicolon', func: false, lang: { en: ';', ru: 'ж' }, properties: 'regular',
    },
    {
      code: 'Quote', func: false, lang: { en: '\'', ru: 'э' }, properties: 'regular',
    },
    {
      code: 'Enter', func: true, lang: { en: 'return', ru: 'return' }, properties: 'btn__return',
    },
  ],
  [
    {
      code: 'ShiftLeft', func: true, lang: { en: 'shift', ru: 'shift' }, properties: 'btn__lshift',
    },
    {
      code: 'KeyZ', func: false, lang: { en: 'z', ru: 'я' }, properties: 'regular',
    },
    {
      code: 'KeyX', func: false, lang: { en: 'x', ru: 'ч' }, properties: 'regular',
    },
    {
      code: 'KeyC', func: false, lang: { en: 'c', ru: 'с' }, properties: 'regular',
    },
    {
      code: 'KeyV', func: false, lang: { en: 'v', ru: 'м' }, properties: 'regular',
    },
    {
      code: 'KeyB', func: false, lang: { en: 'b', ru: 'и' }, properties: 'regular',
    },
    {
      code: 'KeyN', func: false, lang: { en: 'n', ru: 'т' }, properties: 'regular',
    },
    {
      code: 'KeyM', func: false, lang: { en: 'm', ru: 'ь' }, properties: 'regular',
    },
    {
      code: 'Comma', func: false, lang: { en: ',', ru: 'б' }, properties: 'regular',
    },
    {
      code: 'Period', func: false, lang: { en: '.', ru: 'ю' }, properties: 'regular',
    },
    {
      code: 'Slash', func: false, lang: { en: '/', ru: '/' }, properties: 'regular',
    },
    {
      code: 'ShiftRight', func: true, lang: { en: 'shift', ru: 'shift' }, properties: 'btn__rshift',
    },

  ],
  [
    {
      code: 'fn', func: true, lang: { en: 'fn', ru: 'fn' }, properties: 'btn__fn',
    },
    {
      code: 'ControlLeft', func: true, lang: { en: 'ctrl', ru: 'ctrl' }, properties: 'btn__lcontrol',
    },
    {
      code: 'AltLeft', func: true, lang: { en: 'option', ru: 'option' }, properties: 'btn__loption',
    },
    {
      code: 'MetaLeft', func: true, lang: { en: 'command', ru: 'command' }, properties: 'btn__lcommand',
    },
    {
      code: 'Space', func: false, lang: { en: ' ', ru: ' ' }, properties: 'btn__space',
    },
    {
      code: 'MetaRight', func: true, lang: { en: 'command', ru: 'command' }, properties: 'btn__rcommand',
    },
    {
      code: 'AltRight', func: true, lang: { en: 'alt', ru: 'alt' }, properties: 'btn__roption',
    },
    {
      code: 'ArrowLeft', func: true, lang: { en: '◄', ru: '◄' }, properties: 'btn__left',
    },
    {
      code: 'ArrowUp', func: true, lang: { en: '▲', ru: '▲' }, properties: 'btn__up',
    },
    {
      code: 'ArrowDown', func: true, lang: { en: '▼;', ru: '▼' }, properties: 'btn__down',
    },
    {
      code: 'ArrowRight', func: true, lang: { en: '►', ru: '►' }, properties: 'btn__right',
    },
  ],
];

const keyboardKeys = {};
let btnArrow = document.createElement("div")
const keyboardFragment = document.createDocumentFragment();

keyboardLayout.forEach((line) => {
  const keyboardRow = document.createElement('div');
  keyboardRow.classList.add('keyboard__row');

  line.forEach((key) => {
    keyboardKeys[key.code] = key.lang;
    keyboardKeys[key.code].func = key.func;

    const keyBtn = document.createElement('button');
    keyBtn.setAttribute('id', key.code);
    keyBtn.setAttribute('type', 'button');
    keyBtn.classList.add('btn');
    keyBtn.classList.add(`${key.properties}`);

    keyBtn.textContent = key.lang.ru;
    keyboardRow.appendChild(keyBtn);
  });

  keyboardFragment.appendChild(keyboardRow);
});

export { keyboardFragment, keyboardKeys };
