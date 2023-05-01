const keyboardLayout = [
  [
    {
      code: 'Backquote', case: false, lang: { en: '`', ru: '~' }, properties: 'regular',
    },
    {
      code: 'Digit1', case: false, lang: { en: '1', ru: '1' }, properties: 'regular',
    },
    {
      code: 'Digit2', case: false, lang: { en: '2', ru: '2' }, properties: 'regular',
    },
    {
      code: 'Digit3', case: false, lang: { en: '3', ru: '3' }, properties: 'regular',
    },
    {
      code: 'Digit4', case: false, lang: { en: '4', ru: '4' }, properties: 'regular',
    },
    {
      code: 'Digit5', case: false, lang: { en: '5', ru: '5' }, properties: 'regular',
    },
    {
      code: 'Digit6', case: false, lang: { en: '6', ru: '6' }, properties: 'regular',
    },
    {
      code: 'Digit7', case: false, lang: { en: '7', ru: '7' }, properties: 'regular',
    },
    {
      code: 'Digit8', case: false, lang: { en: '8', ru: '8' }, properties: 'regular',
    },
    {
      code: 'Digit9', case: false, lang: { en: '9', ru: '9' }, properties: 'regular',
    },
    {
      code: 'Digit0', case: false, lang: { en: '0', ru: '0' }, properties: 'regular',
    },
    {
      code: 'Minus', case: false, lang: { en: '-', ru: '-' }, properties: 'regular',
    },
    {
      code: 'Equal', case: false, lang: { en: '=', ru: '=' }, properties: 'regular',
    },
    {
      code: 'Backspace', case: true, lang: { en: 'delete', ru: 'delete' }, properties: 'btn__delete',
    },
    // {
    //   code: 'Delete', case: true, lang: { en: 'Del ⌦', ru: 'Del ⌦' }, properties: 'wide',
    // },
  ],
  [
    {
      code: 'Tab', case: true, lang: { en: 'tab', ru: 'tab' }, properties: 'btn__tab',
    },
    {
      code: 'KeyQ', case: false, lang: { en: 'q', ru: 'й' }, properties: 'regular',
    },
    {
      code: 'KeyW', case: false, lang: { en: 'w', ru: 'ц' }, properties: 'regular',
    },
    {
      code: 'KeyE', case: false, lang: { en: 'e', ru: 'у' }, properties: 'regular',
    },
    {
      code: 'KeyR', case: false, lang: { en: 'r', ru: 'к' }, properties: 'regular',
    },
    {
      code: 'KeyT', case: false, lang: { en: 't', ru: 'е' }, properties: 'regular',
    },
    {
      code: 'KeyY', case: false, lang: { en: 'y', ru: 'н' }, properties: 'regular',
    },
    {
      code: 'KeyU', case: false, lang: { en: 'u', ru: 'г' }, properties: 'regular',
    },
    {
      code: 'KeyI', case: false, lang: { en: 'i', ru: 'ш' }, properties: 'regular',
    },
    {
      code: 'KeyO', case: false, lang: { en: 'o', ru: 'щ' }, properties: 'regular',
    },
    {
      code: 'KeyP', case: false, lang: { en: 'p', ru: 'з' }, properties: 'regular',
    },
    {
      code: 'BracketLeft', case: false, lang: { en: '[', ru: 'х' }, properties: 'regular',
    },
    {
      code: 'BracketRight', case: false, lang: { en: ']', ru: 'ъ' }, properties: 'regular',
    },
    {
      code: 'Backslash', case: false, lang: { en: '\\', ru: 'ё' }, properties: 'regular',
    },
  ],
  [
    {
      code: 'CapsLock', case: true, lang: { en: 'caps lock', ru: 'caps lock' }, properties: 'btn__caps-lock',
    },
    {
      code: 'KeyA', case: false, lang: { en: 'a', ru: 'ф' }, properties: 'regular',
    },
    {
      code: 'KeyS', case: false, lang: { en: 's', ru: 'ы' }, properties: 'regular',
    },
    {
      code: 'KeyD', case: false, lang: { en: 'd', ru: 'в' }, properties: 'regular',
    },
    {
      code: 'KeyF', case: false, lang: { en: 'f', ru: 'а' }, properties: 'regular',
    },
    {
      code: 'KeyG', case: false, lang: { en: 'g', ru: 'п' }, properties: 'regular',
    },
    {
      code: 'KeyH', case: false, lang: { en: 'h', ru: 'р' }, properties: 'regular',
    },
    {
      code: 'KeyJ', case: false, lang: { en: 'j', ru: 'о' }, properties: 'regular',
    },
    {
      code: 'KeyK', case: false, lang: { en: 'k', ru: 'л' }, properties: 'regular',
    },
    {
      code: 'KeyL', case: false, lang: { en: 'l', ru: 'д' }, properties: 'regular',
    },
    {
      code: 'Semicolon', case: false, lang: { en: ';', ru: 'ж' }, properties: 'regular',
    },
    {
      code: 'Quote', case: false, lang: { en: '\'', ru: 'э' }, properties: 'regular',
    },
    {
      code: 'Enter', case: true, lang: { en: 'return', ru: 'return' }, properties: 'btn__return',
    },
  ],
  [
    {
      code: 'ShiftLeft', case: true, lang: { en: 'shift', ru: 'shift' }, properties: 'btn__lshift',
    },
    {
      code: 'KeyZ', case: false, lang: { en: 'z', ru: 'я' }, properties: 'regular',
    },
    {
      code: 'KeyX', case: false, lang: { en: 'x', ru: 'ч' }, properties: 'regular',
    },
    {
      code: 'KeyC', case: false, lang: { en: 'c', ru: 'с' }, properties: 'regular',
    },
    {
      code: 'KeyV', case: false, lang: { en: 'v', ru: 'м' }, properties: 'regular',
    },
    {
      code: 'KeyB', case: false, lang: { en: 'b', ru: 'и' }, properties: 'regular',
    },
    {
      code: 'KeyN', case: false, lang: { en: 'n', ru: 'т' }, properties: 'regular',
    },
    {
      code: 'KeyM', case: false, lang: { en: 'm', ru: 'ь' }, properties: 'regular',
    },
    {
      code: 'Comma', case: false, lang: { en: ',', ru: 'б' }, properties: 'regular',
    },
    {
      code: 'Period', case: false, lang: { en: '.', ru: 'ю' }, properties: 'regular',
    },
    {
      code: 'Slash', case: false, lang: { en: '/', ru: '/' }, properties: 'regular',
    },
    {
      code: 'ShiftRight', case: true, lang: { en: 'shift', ru: 'shift' }, properties: 'btn__rshift',
    },

  ],
  [
    {
      code: 'fn', case: true, lang: { en: 'fn', ru: 'fn' }, properties: 'btn__fn',
    },
    {
      code: 'ControlLeft', case: true, lang: { en: 'ctrl', ru: 'ctrl' }, properties: 'btn__lcontrol',
    },
    {
      code: 'AltLeft', case: true, lang: { en: 'option', ru: 'option' }, properties: 'btn__loption',
    },
    {
      code: 'MetaLeft', case: true, lang: { en: 'command', ru: 'command' }, properties: 'btn__lcommand',
    },
    {
      code: 'Space', case: false, lang: { en: ' ', ru: ' ' }, properties: 'btn__space',
    },
    {
      code: 'MetaRight', case: true, lang: { en: 'command', ru: 'command' }, properties: 'btn__rcommand',
    },
    {
      code: 'AltRight', case: true, lang: { en: 'alt', ru: 'alt' }, properties: 'btn__roption',
    },
    {
      code: 'ArrowLeft', case: true, lang: { en: '◄', ru: '◄' }, properties: 'btn__left',
    },
    {
      code: 'ArrowUp', case: true, lang: { en: '▲', ru: '▲' }, properties: 'btn__up',
    },
    {
      code: 'ArrowDown', case: true, lang: { en: '▼;', ru: '▼' }, properties: 'btn__down',
    },
    {
      code: 'ArrowRight', case: true, lang: { en: '►', ru: '►' }, properties: 'btn__right',
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
    keyboardKeys[key.code].case = key.case;

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
