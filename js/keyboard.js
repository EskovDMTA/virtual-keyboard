const keyboardLayout = [
  [
    {
      code: 'Backquote', case: false, lang: { en: '`', ru: '~' }, properties: 'normal',
    },
    {
      code: 'Digit1', case: false, lang: { en: '1', ru: '1' }, properties: 'normal',
    },
    {
      code: 'Digit2', case: false, lang: { en: '2', ru: '2' }, properties: 'normal',
    },
    {
      code: 'Digit3', case: false, lang: { en: '3', ru: '3' }, properties: 'normal',
    },
    {
      code: 'Digit4', case: false, lang: { en: '4', ru: '4' }, properties: 'normal',
    },
    {
      code: 'Digit5', case: false, lang: { en: '5', ru: '5' }, properties: 'normal',
    },
    {
      code: 'Digit6', case: false, lang: { en: '6', ru: '6' }, properties: 'normal',
    },
    {
      code: 'Digit7', case: false, lang: { en: '7', ru: '7' }, properties: 'normal',
    },
    {
      code: 'Digit8', case: false, lang: { en: '8', ru: '8' }, properties: 'normal',
    },
    {
      code: 'Digit9', case: false, lang: { en: '9', ru: '9' }, properties: 'normal',
    },
    {
      code: 'Digit0', case: false, lang: { en: '0', ru: '0' }, properties: 'normal',
    },
    {
      code: 'Minus', case: false, lang: { en: '-', ru: '-' }, properties: 'normal',
    },
    {
      code: 'Equal', case: false, lang: { en: '=', ru: '=' }, properties: 'normal',
    },
    {
      code: 'Backspace', case: true, lang: { en: 'delete', ru: 'delete' }, properties: 'btn__delete',
    },
  ],
  [
    {
      code: 'Tab', case: true, lang: { en: 'tab', ru: 'tab' }, properties: 'btn__tab',
    },
    {
      code: 'KeyQ', case: false, lang: { en: 'q', ru: 'й' }, properties: 'normal',
    },
    {
      code: 'KeyW', case: false, lang: { en: 'w', ru: 'ц' }, properties: 'normal',
    },
    {
      code: 'KeyE', case: false, lang: { en: 'e', ru: 'у' }, properties: 'normal',
    },
    {
      code: 'KeyR', case: false, lang: { en: 'r', ru: 'к' }, properties: 'normal',
    },
    {
      code: 'KeyT', case: false, lang: { en: 't', ru: 'е' }, properties: 'normal',
    },
    {
      code: 'KeyY', case: false, lang: { en: 'y', ru: 'н' }, properties: 'normal',
    },
    {
      code: 'KeyU', case: false, lang: { en: 'u', ru: 'г' }, properties: 'normal',
    },
    {
      code: 'KeyI', case: false, lang: { en: 'i', ru: 'ш' }, properties: 'normal',
    },
    {
      code: 'KeyO', case: false, lang: { en: 'o', ru: 'щ' }, properties: 'normal',
    },
    {
      code: 'KeyP', case: false, lang: { en: 'p', ru: 'з' }, properties: 'normal',
    },
    {
      code: 'BracketLeft', case: false, lang: { en: '[', ru: 'х' }, properties: 'normal',
    },
    {
      code: 'BracketRight', case: false, lang: { en: ']', ru: 'ъ' }, properties: 'normal',
    },
    {
      code: 'Backslash', case: false, lang: { en: '\\', ru: 'ё' }, properties: 'normal',
    },
  ],
  [
    {
      code: 'CapsLock', case: true, lang: { en: 'caps lock', ru: 'caps lock' }, properties: 'btn__caps-lock',
    },
    {
      code: 'KeyA', case: false, lang: { en: 'a', ru: 'ф' }, properties: 'normal',
    },
    {
      code: 'KeyS', case: false, lang: { en: 's', ru: 'ы' }, properties: 'normal',
    },
    {
      code: 'KeyD', case: false, lang: { en: 'd', ru: 'в' }, properties: 'normal',
    },
    {
      code: 'KeyF', case: false, lang: { en: 'f', ru: 'а' }, properties: 'normal',
    },
    {
      code: 'KeyG', case: false, lang: { en: 'g', ru: 'п' }, properties: 'normal',
    },
    {
      code: 'KeyH', case: false, lang: { en: 'h', ru: 'р' }, properties: 'normal',
    },
    {
      code: 'KeyJ', case: false, lang: { en: 'j', ru: 'о' }, properties: 'normal',
    },
    {
      code: 'KeyK', case: false, lang: { en: 'k', ru: 'л' }, properties: 'normal',
    },
    {
      code: 'KeyL', case: false, lang: { en: 'l', ru: 'д' }, properties: 'normal',
    },
    {
      code: 'Semicolon', case: false, lang: { en: ';', ru: 'ж' }, properties: 'normal',
    },
    {
      code: 'Quote', case: false, lang: { en: '\'', ru: 'э' }, properties: 'normal',
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
      code: 'KeyZ', case: false, lang: { en: 'z', ru: 'я' }, properties: 'normal',
    },
    {
      code: 'KeyX', case: false, lang: { en: 'x', ru: 'ч' }, properties: 'normal',
    },
    {
      code: 'KeyC', case: false, lang: { en: 'c', ru: 'с' }, properties: 'normal',
    },
    {
      code: 'KeyV', case: false, lang: { en: 'v', ru: 'м' }, properties: 'normal',
    },
    {
      code: 'KeyB', case: false, lang: { en: 'b', ru: 'и' }, properties: 'normal',
    },
    {
      code: 'KeyN', case: false, lang: { en: 'n', ru: 'т' }, properties: 'normal',
    },
    {
      code: 'KeyM', case: false, lang: { en: 'm', ru: 'ь' }, properties: 'normal',
    },
    {
      code: 'Comma', case: false, lang: { en: ',', ru: 'б' }, properties: 'normal',
    },
    {
      code: 'Period', case: false, lang: { en: '.', ru: 'ю' }, properties: 'normal',
    },
    {
      code: 'Slash', case: false, lang: { en: '/', ru: '/' }, properties: 'normal',
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
      code: 'AltRight', case: true, lang: { en: 'option', ru: 'option' }, properties: 'btn__roption',
    },
    {
      code: 'ArrowLeft', case: true, lang: { en: '◄', ru: '◄' }, properties: 'btn__left',
    },
    {
      code: 'ArrowUp', case: true, lang: { en: '▲', ru: '▲' }, properties: 'btn__up',
    },
    {
      code: 'ArrowDown', case: true, lang: { en: '▼', ru: '▼' }, properties: 'btn__down',
    },
    {
      code: 'ArrowRight', case: true, lang: { en: '►', ru: '►' }, properties: 'btn__right',
    },
  ],
];

const keyboardKeys = {};

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
