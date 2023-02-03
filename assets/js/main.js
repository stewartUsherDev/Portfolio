window.addEventListener("load",()=>{

    let navItemsContainer = document.querySelector("#navItemsContainer")
    let btnToggleMenu = document.querySelector("#btnToggleMenu")

    btnToggleMenu.addEventListener("click", ()=>{
        navItemsContainer.classList.toggle("move")
        btnToggleMenu.classList.toggle("rotate")
    })


    const viewMoreBtn = document.querySelector(".viewMoreContainer")


    /* --------- Redirection of the view more btn in te proyect section --------- */
    viewMoreBtn.addEventListener("click",()=>{
        window.location.replace("https://github.com/Matiasstewart?tab=repositories")
    })


})