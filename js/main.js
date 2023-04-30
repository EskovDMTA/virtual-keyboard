import {keyboardFragment, keyboardKeys} from "./keyboard.js";

const display = document.querySelector(".display")
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

// let variable
let lang = "rus"
function setLocalStorage() {
  lang = localStorage.getItem("lang") === "rus" ? "rus" : "eng"
}

function renderKeyboard (keyboardKeys) {
  let container = document.createElement("div");
  let title = document.createElement("h1");
  let display = document.createElement("input");
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

window.addEventListener("keydown", (event)=>{
  console.log(event.code)
  }
)
renderKeyboard();



const backgroundColor = document.querySelector(".wrapper")
const colorChanger = document.querySelector(".colors_input")
let displayChars = []
buttons.forEach(btn => {
  btn.addEventListener("click", ()=>{
    display.value += btn.innerText
    displayChars = display.value.split("")
  })
})


colorChanger.addEventListener("click", ()=>{
console.log(colorChanger.value)
  backgroundColor.style.backgroundColor = colorChanger.value
})


