"use strict"


const animals = [
    { id: 1, label: "lion" },
    { id: 2, label: "tiger" },
    { id: 3, label: "elephant" },
    { id: 4, label: "giraffe" },
    { id: 5, label: "zebra" },
    { id: 6, label: "kangaroo" },
    { id: 7, label: "panda" },
    { id: 8, label: "koala" },
    { id: 9, label: "rhinoceros" },
    { id: 10, label: "hippopotamus" },
    { id: 11, label: "cheetah" },
    { id: 12, label: "leopard" },
    { id: 13, label: "bear" },
    { id: 14, label: "wolf" },
    { id: 15, label: "fox" },
    { id: 16, label: "deer" },
    { id: 17, label: "rabbit" },
    { id: 18, label: "squirrel" },
    { id: 19, label: "beaver" },
    { id: 20, label: "otter" },
    { id: 21, label: "moose" },
    { id: 22, label: "buffalo" },
    { id: 23, label: "bison" },
    { id: 24, label: "camel" },
    { id: 25, label: "horse" },
    { id: 26, label: "donkey" },
    { id: 27, label: "sheep" },
    { id: 28, label: "goat" },
    { id: 29, label: "cow" },
    { id: 30, label: "pig" },
    { id: 31, label: "chicken" },
    { id: 32, label: "duck" },
    { id: 33, label: "goose" },
    { id: 34, label: "turkey" },
    { id: 35, label: "peacock" },
    { id: 36, label: "eagle" },
    { id: 37, label: "hawk" },
    { id: 38, label: "falcon" },
    { id: 39, label: "owl" },
    { id: 40, label: "penguin" },
    { id: 41, label: "seal" },
    { id: 42, label: "walrus" },
    { id: 43, label: "whale" },
    { id: 44, label: "dolphin" },
    { id: 45, label: "shark" },
    { id: 46, label: "octopus" },
    { id: 47, label: "jellyfish" },
    { id: 48, label: "crab" },
    { id: 49, label: "lobster" },
    { id: 50, label: "starfish" }
];
let score={
    success:0,
    wrong:0
}

let inputElm = document.getElementById("word-input");
let wordElm = document.getElementById("word");



animals.sort(() => Math.random() - 0.3 );
let i=0

function randomWord(val){

   let result = val.toLowerCase().split('').sort(() => Math.random() - 0.3 ).join('')
    if(result === val){
        return randomWord(val)
    }
    return result
}

wordElm.innerText = randomWord(animals[i].label)

function check(){
    if(inputElm.value.toLowerCase() === animals[i].label.toLowerCase()){
        score.success++;


    }else {

        score.wrong++
    }
    if((score.success + score.wrong) === 10){
        return gameOver()
    }
    i++

    wordElm.innerText = randomWord(animals[i].label)

}


function gameOver(){
    let gameOverElm = document.querySelector("#game-over");
    gameOverElm.classList.remove("d-none");
    gameOverElm.querySelector('ul').innerHTML=`
    <li>Success: ${score.success}</li>
    <li>Wrong: ${score.wrong}</li>
    
    `
}


function refresh(){
    i++
    wordElm.innerText = randomWord(animals[i].label)

}
document.querySelector("#new-game").onclick = function(){
    score.success = 0
    score.wrong = 0
    i = 0
    animals.sort(() => Math.random() - 0.3 );
    wordElm.innerText = randomWord(animals[i].label)
    document.querySelector("#game-over").classList.add("d-none")
}