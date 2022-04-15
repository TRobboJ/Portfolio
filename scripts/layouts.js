const EN_WELCOME = 'Welcome!'
const JA_WELCOME = 'ようこそ!'
const TEXT_SPEED = 300
const welcomeText = document.querySelector("#welcome__text")

let i = 0;

// Welcome screen typewriter text
function typeWriter() {
   if (i < EN_WELCOME.length) {
    welcomeText.innerHTML += EN_WELCOME.charAt(i);
    i++;
    setTimeout(typeWriter, TEXT_SPEED)
    
  
  
}
  
}
typeWriter()

function typeWriterJA() {
    
    if (i < JA_WELCOME.length) {
      welcomeText.innerHTML += JA_WELCOME.charAt(i);
      i++;
      setTimeout(typeWriterJA, TEXT_SPEED);
    }
  }

