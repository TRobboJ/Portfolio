const hamburgerMenu = document.querySelector("#hamburger-menu")
const hamburgerIcon = document.querySelector("#hamburger-icon")


hamburgerIcon.addEventListener("click", function(){
      hamburgerMenu.classList.toggle("hidden")
      hamburgerIcon.innerText = hamburgerIcon.innerText === '☰' ?  '✖' : '☰'
})
