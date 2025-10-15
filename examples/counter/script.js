"use strict"


let num = 0
let countElm = document.querySelector(`#counter`)



if (localStorage["num"]) {
    num  = parseInt(localStorage["num"])
    countElm.innerText = `${num}`

}

function increment() {
    num++
    countElm.innerText = `${num}`
}
function decrement() {
    num--
    countElm.innerText = `${num}`
}
function twoPlus(){
    num += 2
    countElm.innerText = `${num}`
}
function theenPlus(){
    num += 10
    countElm.innerText = `${num}`
}

function saveButton(){
    localStorage.setItem("num", num)
}

