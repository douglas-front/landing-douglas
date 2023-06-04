const spans = [document.querySelector(".off") , document.querySelector(".ln1") , document.querySelector(".ln2") , document.querySelector(".mobile")]
const btnMobile = document.getElementById("btn-mobile")
const btnUp = document.getElementById("btn-up")
const divClients = document.querySelector(".div-clients")
const btnDown = document.getElementById("btn-down")
const header_and_main = [document.querySelector(".header") , document.querySelector(".main")]
const loading = document.querySelector(".loading")

const carregando = ()=>{
    header_and_main.forEach(elemento =>[
        elemento.classList.add("element-on")
    ])
    loading.classList.add("loading-off")
}
setTimeout( carregando, 3000)


btnMobile.addEventListener("click", ()=> mobile())
const mobile = ()=>{
    spans.forEach(elemento =>{
        elemento.classList.toggle("mobile-on")
    })
}
btnDown.addEventListener("click", ()=> up())
btnUp.addEventListener("click", ()=> up())
const up = ()=>{
    divClients.classList.toggle("div-clients-active")
    btnDown.classList.toggle("down-btn-on")
}