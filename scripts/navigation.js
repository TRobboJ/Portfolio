const hamburgerMenu = document.querySelector("#hamburger-menu")
const hamburgerIcon = document.querySelector("#hamburger-icon")

// nav menu animations for mobile

const toggleHamburgerMenu = function(){
      hamburgerMenu.classList.toggle("nav__hidden")
            hamburgerMenu.classList.toggle("vh")
           
            hamburgerIcon.innerText = hamburgerIcon.innerText === '☰' ?  '✖' : '☰'
}   


hamburgerIcon.addEventListener("click", toggleHamburgerMenu)
// Smooth scrolling for sections
document.querySelector('.nav__list').addEventListener('click', function (e) {
      if (e.target.classList.contains('nav__link__jp') || e.target.classList.contains('nav__link__en')) return;
      e.preventDefault();
      
      if (e.target.classList.contains('nav__link')) {
            
            const id = e.target.getAttribute('href');
            document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
            
      }
      });



// document.querySelector('.nav__list').addEventListener('click', function (e) {
//       e.preventDefault();
//       toggleHamburgerMenu()
//       if (e.target.classList.contains('nav__link')) {
//             // const header = document.querySelector(`.header`)
//             // const headerHeight = header.offsetHeight
//             const id = e.target.getAttribute('href');
//             const element = document.querySelector(id)
//             const elementPosition = element.getBoundingClientRect().top
//             const offset = elementPosition  - window.innerHeight  + 93
            
        
//             window.scrollTo({
//                   top: offset,
//                   behavior: 'smooth'
//             })
            
//             setTimeout(()=>{
//                   const hTest = document.querySelector(`.header`)
//                   const hHtest = hTest.offsetHeight
//                   console.log(hHtest)}, 10000)
//       }
      
//       });