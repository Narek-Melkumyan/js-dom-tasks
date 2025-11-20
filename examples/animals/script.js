    const animalList = document.querySelector('.game-board');
    const currentAnimalElm = document.querySelector('#current-animal');
    const scoreElm = document.querySelector('.score');
    let currentAnswer
    let score = 0;
//animals.sort(()=>Math.random() - 0.5);
    function addAnimal() {
        animals.forEach(animal => {
            // Ստեղծում ենք նոր div տարր յուրաքանչյուր կենդանու համար
            let animalDiv = document.createElement('div');
            animalDiv.classList.add('animal-item');
            animalDiv.dataset.id = animal.id;
            // Պատկերը
            let img = document.createElement('img');
            img.src = 'animal/'+animal.thumbImg;
            img.alt = animal.name;

            // Անունը
            let name = document.createElement('h3');
            name.textContent = animal.name;

            // Ավելացնում ենք պատկերը և անունը div տարրում
            animalDiv.appendChild(img);
            animalDiv.appendChild(name);

            // Ավելացնում ենք կենդանու տարրը ցուցակի մեջ
            animalList.appendChild(animalDiv);
        });
    }
    addAnimal();



function randAnimal() {

    let randomAnm = animals[Math.floor(Math.random() * animals.length)];
    currentAnimalElm.innerHTML = `<img src="./animal/${randomAnm.thumbImg}" alt="${randomAnm.name}">
            <h2>${randomAnm.name}</h2>`
    currentAnimalElm.dataset.id = randomAnm.id;
    currentAnswer=randomAnm.id;
}
randAnimal();

        animalList.onclick = function (e) {
            if(e.target.closest('.animal-item').dataset.id === currentAnimalElm.dataset.id){
                score++;
                scoreElm.innerText = `Score: ${score}`;
                randAnimal();
            }
            if(score === 3){
                document.querySelector(".game-over").classList.remove('d-none');
                document.querySelector("#restart").onclick = newGame
                document.querySelector("#game-over-score").innerText = `Score: ${score}`;
            }
        }





 function newGame(){
     document.querySelector(".game-over").classList.add('d-none')
        animalList.innerHTML = '';
     animals.sort(()=>Math.random() - 0.5)
     addAnimal()
        score = 0
        scoreElm.innerText = `Score: ${score}`;
        randAnimal();
 }
