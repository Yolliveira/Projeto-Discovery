function toggleMode() {

const hmtl= document.documentElement
hmtl.classList.toggle('light')

const img= document.querySelector('#profile img')

if (hmtl.classList.contains('Light')) {

    img.setAttribute("src", "./assets/Logo.png")
} else{

    img.setAttribute("src", "./assets/Dark.png")
}

}