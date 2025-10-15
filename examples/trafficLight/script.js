"use strict"


let num = 0
let countElm = document.querySelector("#timer")
let greenElm = document.querySelector("#green")
let orangeElm = document.querySelector("#orange")
let redElm = document.querySelector("#red")
let btnElm = document.querySelector("#oneBtn")


function addSecond(){
    if(num < 25){
        num++
        countElm.innerText = `${num}`
    }

    if(num === 23 || num === 24 ){
        orangeElm.classList.add("active")
        greenElm.classList.remove("active")
    }else if(num === 25) {
        redElm.classList.add("active")
        orangeElm.classList.remove("active")
        btnElm.onclick = removeSecond
    }

}


function removeSecond() {
    if (num <= 25) {
        num--
        countElm.innerText = `${num}`
    }

    if(num<=3 && num>=1){
        orangeElm.classList.add("active")
    }else if(num===0){
        redElm.classList.remove("active")
        orangeElm.classList.remove("active")
        greenElm.classList.add("active")
        btnElm.onclick = addSecond
    }


}


function reset(){
    num = 0
    countElm.innerText = `${num}`
    redElm.classList.remove("active")
    orangeElm.classList.remove("active")
    greenElm.classList.add("active")
    btnElm.onclick = addSecond
}


