(function () {
    "use strict";
    const squareEl = document.querySelector("#size-game");
    const matrixEl = document.querySelector(".matriX");
    const gameEndEl = document.querySelector("#game-end-container");
    const gamer = {
        player1: 'X',
        player2: 'O',
    }
    const result = {
        player1: 0,
        player2: 0,
    }
    let data = []
    let playerCount = 0
    let active = gamer.player1;
    document.querySelector('#start-game-button')
        .addEventListener("click", function (e) {
            e.target.closest(".start-game-container").classList.add("d-none");
            matrixEl.innerHTML = "";
            makeMatrix(squareEl.value)
        })

    function makeMatrix(num) {
        matrixEl.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        for (let i = 0; i < num; i++) {
            data.push([])
            for (let j = 0; j < num; j++) {
                data[i].push('')
                matrixEl.innerHTML += `  <div class="card" data-row="${i}" data-col="${j}"></div>`
            }

        }
    }

    matrixEl.onclick = function (e) {
        let tag = e.target
        if (tag.innerText !== '') {
            return
        }
        tag.innerText = active

        const row = e.target.dataset.row
        const col = e.target.dataset.col
        data[row][col] = active
playerCount++
        if ((squareEl.value * 2 - 1)<=playerCount) {
            combineChecking()
        }else{
            reverceActive()
        }




    }

    function reverceActive() {
        if (active === gamer.player1) {
            active = gamer.player2

        } else {
            active = gamer.player1
        }
    }

    const playerSelectEl = document.querySelector('.player-select')
    for (const key in gamer) {
        playerSelectEl.innerHTML += ` <div class="player ${key === 'player1' ? 'active' : ''}" data-player="${gamer[key]}">${gamer[key]}</div>`
    }

    playerSelectEl.onclick = function (e) {
        document.querySelector('.player.active').classList.remove('active');
        e.target.classList.toggle('active');
        active = e.target.getAttribute('data-player');
    }






    function combineChecking(){
        function horizon(){


            for(let i = 0; i < data.length; i++){
                let val= data[i][0]
                for(let j = 0; j < data[i].length; j++){
                    if(data[i][j] !== val){
                        val=false
                        break
                    }
                }
                if(val){

                    return {index:i,val:data[i][0]}
                }



            }


        }
        function uxahayac(){


            for(let i = 0; i < data.length; i++){
                let val= data[0][i]

                for(let j = 0; j < data.length; j++){
                    if(val !== data[j][i]){
                        val=false
                        break
                    }

                }
                if(val){
                    return {index:i,val:data[0][i]}

                }

            }

        }
        function gcain(){

            let val=data[0][0]
            let status=true
            for (let i = 0; i < data.length; i++){

                if(val!==data[i][i]){
                    return false
                }

            }
            return true
        }
        function verjic(){
            let end=data[0].length-1
            let val=data[0][end]
            let status=true
            for(let i = 0; i < data.length; i++){
                if(val!==data[i][end-i]){
                    return false
                }
            }
            return true
        }


        if(horizon()||uxahayac()||gcain()||verjic()){

            if(active === gamer.player1){
                result.player1++;
            }else if(active === gamer.player2){
                result.player2++;
            }



            gameEndEl.classList.remove('d-none')
            gameEndEl.innerHTML = `
            
    <div class="end-game" id="end-game">
        <h2>Winner is ${active}</h2>
        <p>result ${gamer.player1}:${result.player1}   ${gamer.player2}:${result.player2}  </p>
     <div class="restart-game-button">
        <button id="restart-button">Restart</button>
        </div>
    </div>
            `
            console.log(active)
        }else{
            reverceActive()
        }

        document.querySelector('#restart-button').onclick = function (e) {
            gameEndEl.classList.add('d-none')
            document.querySelector(".start-game-container").classList.remove('d-none')
            data = []
            playerCount = 0


        }

    }




})()


