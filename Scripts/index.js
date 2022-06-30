let active  
const phonebtn = document.querySelector("#phones")
    phonebtn.addEventListener("click",()=>{
        if(active!=null) active.style.zIndex=-1
       const phone_card= document.querySelector(".phone__pack")
       active=phone_card
       phone_card.style.zIndex=1
    })

    const compbtn = document.querySelector("#Comp")
    compbtn.addEventListener("click",()=>{
        if(active!=null) active.style.zIndex=-1
       const comp_card= document.querySelector(".comp__pack")
       active=comp_card
       comp_card.style.zIndex=1
    })

    const elecbtn = document.querySelector("#elec")
    elecbtn.addEventListener("click",()=>{
        if(active!=null) active.style.zIndex=-1
       const elec_card= document.querySelector(".elec__pack")
       active=elec_card
       elec_card.style.zIndex=1
    })

    const homebtn = document.querySelector("#home")
    homebtn.addEventListener("click",()=>{
        if(active!=null) active.style.zIndex=-1
       const home_card= document.querySelector(".home__pack")
       active=home_card
       home_card.style.zIndex=1
    })

    const autobtn = document.querySelector("#auto")
    autobtn.addEventListener("click",()=>{
        if(active!=null) active.style.zIndex=-1
       const auto_card= document.querySelector(".auto__pack")
       active=auto_card
       auto_card.style.zIndex=1
    })

    const accbtn = document.querySelector("#acc")
    accbtn.addEventListener("click",()=>{
        if(active!=null) active.style.zIndex=-1
       const acc_card= document.querySelector(".acc__pack")
       active=acc_card
       acc_card.style.zIndex=1
    })

    const genbtn = document.querySelector("#gen")
    genbtn.addEventListener("click",()=>{
        if(active!=null) active.style.zIndex=-1
       const gen_card= document.querySelector(".gen__pack")
       active=gen_card
       gen_card.style.zIndex=1
    })

    const offbtn = document.querySelector("#off")
    offbtn.addEventListener("click",()=>{
        if(active!=null) active.style.zIndex=-1
       const off_card= document.querySelector(".off__pack")
       active=off_card
       off_card.style.zIndex=1
    })