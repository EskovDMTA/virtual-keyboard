import {keyboardFragment, keyboardKeys} from "./keyboard.js";

// let variable
let lang = ""
let caps = false

function setLocalStorage() {
  lang = localStorage.getItem("lang") === "en" ? "en" : "ru"
}

setLocalStorage()

function renderKeyboard(keyboardKeys) {
  let container = document.createElement("div");
  let title = document.createElement("h1");
  let display = document.createElement("textarea");
  let wrapper = document.createElement("div");
  let keyboard = document.createElement("div");
  const keyboardRow = document.createElement("div");
  let aboutKeyboard = document.createElement("h3")

  container.classList.add("container");

  title.classList.add("keyboard__title");
  title.textContent = "Virtual keyboard"

  display.setAttribute("type", "text");
  display.autofocus = true
  display.classList.add("display")

  wrapper.classList.add("wrapper");

  keyboard.classList.add("keyboard");


  aboutKeyboard.textContent = "Клавиатура создана на macOS"

//   Create dom element
  keyboard.appendChild(keyboardFragment)
  wrapper.appendChild(keyboard);

  container.appendChild(title)
  container.appendChild(display)
  container.appendChild(wrapper)
  container.appendChild(aboutKeyboard)
  document.body.appendChild(container)

}

renderKeyboard();


// variables
const buttons = document.querySelectorAll(".btn")
const deleteBtn = document.querySelector(".delete__btn")
const tabBtn = document.querySelector(".btn__tab")
const capsLockBtn = document.querySelector(".btn__caps-lock")
const returnBtn = document.querySelector(".btn__return")
const lShiftBtn = document.querySelector(".btn__lshift")
const rShiftBtn = document.querySelector(".btn__rshift")
const fnBtn = document.querySelector(".btn__fn")
const lControlBtn = document.querySelector(".btn__lcontrol")
const lOptionBtn = document.querySelector(".btn__loption")
const lCommandBtn = document.querySelector(".btn__lcommand")
const spaceBtn = document.querySelector(".btn__space")
const rCommandBtn = document.querySelector(".btn__rcommand")
const rOptionBtn = document.querySelector(".btn__roption")


const lArrowBtn = document.querySelector(".btn__left")
const upBtn = document.querySelector(".btn__up")
const downBtn = document.querySelector(".btn__down")
const rArrowBtn = document.querySelector(".btn__right")

const keyboard = document.querySelector(".keyboard")
const display = document.querySelector(".display")

let displayValue = []

changeLanguage(lang)
display.addEventListener('blur', (event) => {
  setTimeout(() => {
    display.focus();
  }, 0);
});

buttons.forEach(btn => {
  btn.addEventListener("click", (event) => {
    if (btn.id === "Tab") {
      tabBTN(event);
      return
    }
    ;
    if (btn.id === "Space") {
      spaceBTN(event);
      return
    }
    if (btn.id === "Backspace") {
      deleteBTN(event);
      return;
    }
    if (btn.id === "Enter") {
      returnBTN();
      
      return;
    }
    if (btn.id === "CapsLock") {
      
      capsSwitch(caps)
      btn.classList.add("btn__active")
      return
    }
    display.value += btn.innerText
    displayValue = display.value.split("")
    btn.classList.add("btn__active")
    setTimeout(() => {
      btn.classList.remove("btn__active");
    }, 100);
  })
})
document.addEventListener("keydown", (event) => {
  event.preventDefault()
  console.log(event.code)
  const btn = document.getElementById(event.code)
  if (event.code === "Tab") {
    tabBTN(event);
    return
  }
  ;
  if (event.code === "Space") {
    spaceBTN(event);
    return
  }
  ;

  if (event.code === "Backspace") {
    deleteBTN(event);
    return
  }
  ;
  if (event.code === "CapsLock") {
    capsSwitch(caps)
    btn.classList.remove("btn__active")
    return
  }
  if (event.code === "ShiftLeft" || "ShiftRight") {
    shiftBTN(event)
  }
  if (event.code === "MetaLeft") {

  }
  if (event.code === "MetaLeft" && event.ctrlKey) {
    lang = lang === "ru" ? "en" : "ru";
    localStorage.setItem("lang", lang);
    changeLanguage(lang)
  }
  if (event.code === "Enter") {
    returnBTN();
    return
  }
  display.value += btn.innerText
  displayValue = display.value.split("")

  btn.classList.add("btn__active")
})

document.addEventListener("keyup", (event) => {
  const btn = document.getElementById(event.code)
  btn.classList.remove("btn__active")
  if (event.code === "CapsLock") {
    capsSwitch(caps)
    return
  }
});

function spaceBTN(event) {
  event.preventDefault()
  display.value += " "
  displayValue = display.value.split("")
}

function tabBTN(event) {
  event.preventDefault()
  display.value += "    "
  displayValue = display.value.split("")
}

function deleteBTN(event) {
  event.preventDefault()
  displayValue.pop()
  display.value = displayValue.join("")
}

function capslockBTN(event) {
}

function shiftBTN(event) {

}

function controlBTN(event) {
  event.preventDefault()
}

function optionBTN(event) {
  event.preventDefault()
}

function commandBTN(event) {
}

function returnBTN() {
  display.value += "\n"
  displayValue = display.value.split("")
}

function changeLanguage(lang, shift = false) {
  Array.from(keyboard.querySelectorAll('.btn')).forEach(
      (e) => {
        e.textContent = keyboardKeys[e.id][lang];
      },
  );

  // switchCaps(shift);
}

function capsSwitch(registry) {
  caps = registry !== true;
  console.log(caps)
  const showCase = (caps && !registry) || (caps && registry);
  const toCase = showCase ? "toUpperCase" : "toLowerCase";
  Array.from(keyboard.querySelectorAll('.btn')).forEach(
      (e) => {
        if (!keyboardKeys[e.id].case) {
          if (e.id === "Backquote" && lang === "en") {
            e.textContent = registry ? "~" : "`";
          } else if (e.id === "Minus" && lang === "en") {
            e.textContent = registry ? "_" : "-";
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
      })
}



