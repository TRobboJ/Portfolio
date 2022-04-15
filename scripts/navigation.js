const hamburgerMenu = document.querySelector("#hamburger-menu")
const hamburgerIcon = document.querySelector("#hamburger-icon")


hamburgerIcon.addEventListener("click", function(){
           hamburgerMenu.classList.toggle("nav__hidden")
            hamburgerMenu.classList.toggle("vh")
           
            hamburgerIcon.innerText = hamburgerIcon.innerText === '☰' ?  '✖' : '☰'
      })
      