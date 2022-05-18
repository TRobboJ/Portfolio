const EN_HERO = `My name is Thomas and I'm studying to be a web developer.`
const JA_HERO = `トーマスと申します。ウェブエンジニアを目指しています。`


const TEXT_SPEED_EN = 50
const TEXT_SPEED_JA = 100

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

function typeWriterHeroEN() {
  if (x < EN_HERO.length) {
    heroText.innerHTML += EN_HERO.charAt(x);
    if(EN_HERO.charAt(x) === `.`) heroText.innerHTML += `<br>`;
    x++;
    setTimeout(typeWriterHeroEN, TEXT_SPEED_EN);
  }
  
}

function typeWriterHeroJA() {
    
    if (i < JA_HERO.length) {
      heroText.innerHTML += JA_HERO.charAt(i);
      if(JA_HERO.charAt(i) === `。`) heroText.innerHTML += `<br>`;
      i++;
      setTimeout(typeWriterHeroJA, TEXT_SPEED_JA);
    }
  }

  if (document.documentElement.lang === "en") {typeWriterHeroEN()}
  if (document.documentElement.lang === "ja") {typeWriterHeroJA()}

