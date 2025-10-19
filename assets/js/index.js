
function switchLamp(){
    const themeEl=document.querySelector("#theme")
    const lampEl= document.querySelector("#lamp")
    if(localStorage["theme"] === "v-dark"){
        themeEl.classList.add("v-dark")
        lampEl.src = "./assets/images/on.png"
    }else{
        themeEl.classList.remove("v-dark")
        lampEl.src = "./assets/images/off.png"
    }



    lampEl.onclick = () => {
        if(lampEl.src.includes('off.png')){
            lampEl.src='./assets/images/on.png'
        }else{
            lampEl.src='./assets/images/off.png'
        }
        if(themeEl.classList.contains("v-dark")){
            themeEl.classList.remove("v-dark")
            localStorage["theme"] = "light"

        }else{
            themeEl.classList.add("v-dark")
            localStorage["theme"] = "v-dark"
        }
    }
}

document.addEventListener('DOMContentLoaded', function (){
    switchLamp()
})