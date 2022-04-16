const EN_WELCOME = `Welcome!`
const JA_WELCOME = `ようこそ!`
const EN_HERO = `My name is Thomas and I'm a web developer.`
const TEXT_SPEED_WELCOME = 300
const TEXT_SPEED_HERO = 50
const welcomeText = document.querySelector("#welcome__text")
const heroText = document.querySelector("#hero__text")

let i = 0;
let x = 0

// Welcome screen typewriter text
function typeWriter() {
  if (i < EN_WELCOME.length) {
    welcomeText.innerHTML += EN_WELCOME.charAt(i);
    i++;
    setTimeout(typeWriter, TEXT_SPEED_WELCOME);
  }
  
}
function typeWriterHero() {
  if (x < EN_HERO.length) {
    heroText.innerHTML += EN_HERO.charAt(x);
    x++;
    setTimeout(typeWriterHero, TEXT_SPEED_HERO);
  }
  
}
  

typeWriter()
typeWriterHero()

function typeWriterJA() {
    
    if (i < JA_WELCOME.length) {
      welcomeText.innerHTML += JA_WELCOME.charAt(i);
      i++;
      setTimeout(typeWriterJA, TEXT_SPEED);
    }
  }


