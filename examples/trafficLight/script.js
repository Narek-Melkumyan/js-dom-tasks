"use strict"


let num = 0
let countElm = document.querySelector("#timer")
let greenElm = document.querySelector("#green")
let orangeElm = document.querySelector("#orange")
let redElm = document.querySelector("#red")

let output = {
    value: 1,
    status: 'up'
}

if (localStorage["output"]) {
    output = JSON.parse(localStorage["output"])
    countElm.innerHTML = output.value
}

if (output.value >= 0 && output.status === 'up') {
    output.value--
} else if (output.value >= 0 && output.status === 'down') {
    output.value++
}


document.querySelector("#oneBtn").onclick = function () {
    start()
}


function start() {

    if (output.status === 'up') {
        up()
    } else if (output.status === 'down') {
        down()
    }
    updateStorage()
    countElm.innerHTML = output.value

}

start()

function up() {
    output.value++
    console.log(output.value)
    if (output.value > 0 && output.value < 23) {
        greenElm.classList.add("active")
    } else if (output.value === 23 || output.value === 24) {
        greenElm.classList.remove("active")
        orangeElm.classList.add("active")

    } else if (output.value === 25) {
        redElm.classList.add("active")
        orangeElm.classList.remove("active")
        output.status = 'down'
    }
}

function down() {
    output.value--
    if (output.value > 3 && output.value <= 25) {
        redElm.classList.add("active")
        orangeElm.classList.remove("active")
        greenElm.classList.remove("active")

    } else if ((output.value <= 3 && output.value >= 1)) {
        orangeElm.classList.add("active")
        redElm.classList.add("active")

    } else if (output.value === 0) {
        redElm.classList.remove("active")
        orangeElm.classList.remove("active")
        greenElm.classList.remove("active")
        output.status = 'up'
    }
}

function updateStorage() {
    localStorage.setItem("output", JSON.stringify(output))
}

document.querySelector("#resetBtn").onclick = function () {
    output.value = 1
    output.status = 'up'
    redElm.classList.remove("active")
    orangeElm.classList.remove("active")
    greenElm.classList.add("active")
    countElm.innerHTML = output.value
    updateStorage()
}

