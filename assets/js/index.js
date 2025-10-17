document.querySelector('#lamp').onclick = (e) => {
    if(e.target.src.includes('off.png')){
        e.target.src='./assets/images/on.png'
    }else{
        e.target.src='./assets/images/off.png'
    }
}