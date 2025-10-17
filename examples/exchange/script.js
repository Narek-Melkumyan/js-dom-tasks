"use strict"

const exchange={
    usd:{
        buy:381,
        sell:401
    },
    rub:{
        buy:3.9,
        sell:4.1
    },
    eur:{
        buy:400,
        sell:405
    },
    amd:{
        buy:1,
        sell:1
    }
}

{

    const fromCurrencyEl=document.querySelector('#fromCurrency')
    const toCurrencyEl=document.querySelector('#toCurrency')


    for (const key in exchange) {
        fromCurrencyEl.innerHTML+=`<option value="${key}">${key.toUpperCase()}</option>`
        toCurrencyEl.innerHTML+=`<option value="${key}">${key.toUpperCase()}</option>`
    }
}

function change(){
    let inputElm = document.querySelector('#amount')
    let amount = inputElm.value
    let fromCurrencyElm = document.querySelector('#fromCurrency')
    let toCurrencyElm = document.querySelector('#toCurrency')
    let resultElm = document.querySelector('#result')
    let sum = (amount*exchange[fromCurrencyElm.value].buy/exchange[toCurrencyElm.value].sell).toFixed(1)
    resultElm.innerHTML = `${sum} ${toCurrencyElm.value}`

}




