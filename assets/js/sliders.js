
/* -------------------------------------------------------------------------- */
/*                            Front carousel logic                            */
/* -------------------------------------------------------------------------- */

window.addEventListener("load", () => {

    const sliderFront = document.querySelector("#slider__front")
    let sliderFrontSection = document.querySelectorAll(".slider__section__front")
    let sliderFrontSectionLast = sliderFrontSection[sliderFrontSection.length - 1]

    const btnLeft = document.querySelector("#slider__btn--left--front")
    const btnRight = document.querySelector("#slider__btn--right--front")

    sliderFront.insertAdjacentElement("afterbegin", sliderFrontSectionLast)

    function moveRightFront() {
        let sliderFrontSectionFirst = document.querySelectorAll(".slider__section__front")[0]
        sliderFront.style.marginLeft = "-200%"
        sliderFront.style.transition = "all 0.5s"

        setTimeout(() => {
            sliderFront.style.transition = "none"
            sliderFront.insertAdjacentElement("beforeend", sliderFrontSectionFirst)
            sliderFront.style.marginLeft = "-100%"
        }, 500)

    }

    function moveLeftFront() {
        let sliderFrontSection = document.querySelectorAll(".slider__section__front")
        let sliderFrontSectionLast = sliderFrontSection[sliderFrontSection.length - 1]
        let sliderFrontSectionFirst = document.querySelectorAll(".slider__section__front")[0]
        sliderFront.style.marginLeft = "0"
        sliderFront.style.transition = "all 0.5s"

        setTimeout(() => {
            sliderFront.style.transition = "none"
            sliderFront.insertAdjacentElement("afterbegin", sliderFrontSectionLast)
            sliderFront.style.marginLeft = "-100%"
        }, 500)

    }

    btnRight.addEventListener("click", () => {
        moveRightFront()
        btnRight.classList.add("none")
        setTimeout(() => {
            btnRight.classList.remove("none")
        }, 500)
    })

    btnLeft.addEventListener("click", () => {
        moveLeftFront()
        btnLeft.classList.add("none")
        setTimeout(() => {
            btnLeft.classList.remove("none")
        }, 500)
    })

    setInterval(() => {
        moveRightFront()
    }, 3000)

});


/* -------------------------------------------------------------------------- */
/*                             Back carousel logic                            */
/* -------------------------------------------------------------------------- */

window.addEventListener("load",()=>{


    const sliderBack = document.querySelector("#slider__back")
    let sliderBackSection = document.querySelectorAll(".slider__section__back")
    let sliderBackSectionLast = sliderBackSection[sliderBackSection.length - 1]

    const btnLeftBack = document.querySelector("#slider__btn--left--back")
    const btnRightBack = document.querySelector("#slider__btn--right--back")

    sliderBack.insertAdjacentElement("afterbegin", sliderBackSectionLast)

    function moveRightBack() {
        let sliderBackSectionFirst = document.querySelectorAll(".slider__section__back")[0]
        sliderBack.style.marginLeft = "-200%"
        sliderBack.style.transition = "all 0.5s"

        setTimeout(() => {
            sliderBack.style.transition = "none"
            sliderBack.insertAdjacentElement("beforeend", sliderBackSectionFirst)
            sliderBack.style.marginLeft = "-100%"
        }, 500)

    }

    function moveLeftBack() {
        let sliderBackSection = document.querySelectorAll(".slider__section__back")
        let sliderBackSectionLast = sliderBackSection[sliderBackSection.length - 1]
        let sliderBackSectionFirst = document.querySelectorAll(".slider__section__back")[0]
        sliderBack.style.marginLeft = "0"
        sliderBack.style.transition = "all 0.5s"

        setTimeout(() => {
            sliderBack.style.transition = "none"
            sliderBack.insertAdjacentElement("afterbegin", sliderBackSectionLast)
            sliderBack.style.marginLeft = "-100%"
        }, 500)

    }

    btnRightBack.addEventListener("click", () => {
        moveRightBack()
        btnRightBack.classList.add("none")
        setTimeout(() => {
            btnRightBack.classList.remove("none")
        }, 500)
    })

    btnLeftBack.addEventListener("click", () => {
        moveLeftBack()
        btnLeftBack.classList.add("none")
        setTimeout(() => {
            btnLeftBack.classList.remove("none")
        }, 500)
    })

    setInterval(() => {
        moveRightBack()
    }, 3000)

});


/* -------------------------------------------------------------------------- */
/*                            Extra carousel logic                            */
/* -------------------------------------------------------------------------- */


window.addEventListener("load",()=>{

    const sliderExtra = document.querySelector("#slider__extra")
    let sliderExtraSection = document.querySelectorAll(".slider__section__extra")
    let sliderExtraSectionLast = sliderExtraSection[sliderExtraSection.length - 1]

    const btnLeftExtra = document.querySelector("#slider__btn--left--extra")
    const btnRightExtra = document.querySelector("#slider__btn--right--extra")

    sliderExtra.insertAdjacentElement("afterbegin", sliderExtraSectionLast)

    function moveRightExtra() {
        let sliderExtraSectionFirst = document.querySelectorAll(".slider__section__extra")[0]
        sliderExtra.style.marginLeft = "-200%"
        sliderExtra.style.transition = "all 0.5s"

        setTimeout(() => {
            sliderExtra.style.transition = "none"
            sliderExtra.insertAdjacentElement("beforeend", sliderExtraSectionFirst)
            sliderExtra.style.marginLeft = "-100%"
        }, 500)

    }

    function moveLeftExtra() {
        let sliderExtraSection = document.querySelectorAll(".slider__section__extra")
        let sliderExtraSectionLast = sliderExtraSection[sliderExtraSection.length - 1]
        let sliderExtraSectionFirst = document.querySelectorAll(".slider__section__extra")[0]
        sliderExtra.style.marginLeft = "0"
        sliderExtra.style.transition = "all 0.5s"

        setTimeout(() => {
            sliderExtra.style.transition = "none"
            sliderExtra.insertAdjacentElement("afterbegin", sliderExtraSectionLast)
            sliderExtra.style.marginLeft = "-100%"
        }, 500)

    }

    btnRightExtra.addEventListener("click", () => {
        moveRightExtra()
        btnRightExtra.classList.add("none")
        setTimeout(() => {
            btnRightExtra.classList.remove("none")
        }, 500)
    })

    btnLeftExtra.addEventListener("click", () => {
        moveLeftExtra()
        btnLeftExtra.classList.add("none")
        setTimeout(() => {
            btnLeftExtra.classList.remove("none")
        }, 500)
    })

    setInterval(() => {
        moveRightExtra()
    }, 3000)


})