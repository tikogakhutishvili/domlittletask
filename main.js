let hone = document.querySelector("h1")
hone.style.backgroundColor = "red"


let nino = document.querySelector("h2")
nino.style.display = "none"

let div = document.querySelector("div") 
div.addEventListener('click', () => {
    div.classList.toggle("dziv")
})

let kianara = document.querySelector('#kianara')
let  ckapuna = document.querySelector("button")

ckapuna.addEventListener("click", () => {
    if(kianara.innerHTML === "yes") {
        kianara.innerHTML = "no"
    } else {
        kianara.innerHTML = "yes"
    }
})
//// incr decr gaketebuli makvs batono davit <3


let box = document.querySelector("#box")
let click = document.querySelector("#btn")
click.addEventListener("click", () => {
    box.classList.toggle("red")
})
