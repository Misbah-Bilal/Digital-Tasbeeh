let inputBox = document.getElementById("inputBox")
let addBtn = document.getElementById("addBtn")
let resetBtn = document.getElementById("resetBtn")

addBtn.addEventListener('click', handleAddBtn)

let counter = Number(inputBox.innerHTML)
function handleAddBtn() {
   counter++
 inputBox.innerHTML = counter
}

resetBtn.addEventListener('click', handleresetBtn)

function handleresetBtn() {
 inputBox.innerHTML = 0
 counter = 0
}





