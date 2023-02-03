window.addEventListener("load",()=>{
    const bloque = document.querySelectorAll(".acordeonBlock")
    const acordeonTitle = document.querySelectorAll(".acordeonTitle")

    const chevrom = document.querySelectorAll(".chevromDown")
    
    acordeonTitle.forEach((cadaTitle, i)=>{
        acordeonTitle[i].addEventListener("click", ()=>{

            bloque.forEach((cadaBloque, i)=>{
                bloque[i].classList.remove("active")
                chevrom[i].classList.remove("chevromNone")
            })
            bloque[i].classList.add("active")
            chevrom[i].classList.add("chevromNone")

        })
    })


})
