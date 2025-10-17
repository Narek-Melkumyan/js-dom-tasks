

if(localStorage["theme"] === "v-dark"){
    document.querySelector("#theme").classList.add("v-dark")
    document.querySelector("#lamp").src = "./assets/images/on.png"
}else{
    document.querySelector("#theme").classList.remove("v-dark")
    document.querySelector("#lamp").src = "./assets/images/off.png"
}



document.querySelector('#lamp').onclick = (e) => {
    if(e.target.src.includes('off.png')){
        e.target.src='./assets/images/on.png'
    }else{
        e.target.src='./assets/images/off.png'
    }
    if(document.querySelector('#theme').classList.contains("v-dark")){
        document.querySelector("#theme").classList.remove("v-dark")
        localStorage["theme"] = "light"

    }else{
        document.querySelector("#theme").classList.add("v-dark")
        localStorage["theme"] = "v-dark"
    }
}