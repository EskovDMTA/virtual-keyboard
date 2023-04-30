document.addEventListener("keydown", (event)=>{
  console.log(event.code)
  }
)

const buttons = document.querySelectorAll(".btn")
const display = document.querySelector(".text-area")
const deleteBtn = document.querySelector(".delete__btn")
const backgroundColor = document.querySelector(".wrapper")
const colorChanger = document.querySelector(".colors_input")
let displayChars = []
buttons.forEach(btn => {
  btn.addEventListener("click", ()=>{
    display.value += btn.innerText
    displayChars = display.value.split("")
    console.log(displayChars)
  })
})

colorChanger.addEventListener("click", ()=>{
console.log(colorChanger.value)
  backgroundColor.style.backgroundColor = colorChanger.value
})
