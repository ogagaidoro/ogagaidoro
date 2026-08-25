function openModal() {
    hamburgerBtnElement.style.display = 'none'
    modalElement.style.display = 'block'
    closeBtnElement.style.display = 'block'
    bodyElement.style.overflow = 'hidden'
    backdropElement.style.display = 'block'
}

function closeModal() {
    hamburgerBtnElement.style.display = 'block'
    modalElement.style.display = 'none'
    closeBtnElement.style.display = 'none'
    backdropElement.style.display = 'none'
    bodyElement.style.overflow = ''
}

function jump() {
    if (window.innerWidth >= 900) {
        return
    }

    hamburgerBtnElement.style.display = 'block'
    modalElement.style.display = 'none'
    closeBtnElement.style.display = 'none'
    backdropElement.style.display = 'none'
    bodyElement.style.overflow = ''
}

window.addEventListener("resize", function () {
    if (window.innerWidth >= 900) {
        modalElement.style.display = 'flex'
        backdropElement.style.display = 'none'
        closeBtnElement.style.display = 'none'
        hamburgerBtnElement.style.display = ''
        bodyElement.style.overflow = ''
    } else {
        modalElement.style.display = 'none'
        backdropElement.style.display = 'none'
        closeBtnElement.style.display = 'none'
        hamburgerBtnElement.style.display = 'block'
        bodyElement.style.overflow = ''
    }
})