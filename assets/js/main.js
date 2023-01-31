window.addEventListener("load",()=>{

    let navItemsContainer = document.querySelector("#navItemsContainer")
    let btnToggleMenu = document.querySelector("#btnToggleMenu")

    btnToggleMenu.addEventListener("click", ()=>{
        navItemsContainer.classList.toggle("move")
        btnToggleMenu.classList.toggle("rotate")
    })


})