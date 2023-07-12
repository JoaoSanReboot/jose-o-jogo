const changeThemeBtn = document.querySelector("#mudar-tema")

// Toggle light mode
function toggleLigthMode()
{
    document.body.classList.toggle("light");
}

// Load Light ou Dark mode
function loadTema(){
    const lightmode = localStorage.getItem("light");

    if(lightmode){
        toggleLigthMode();
    }
}

loadTema();

changeThemeBtn.addEventListener("change", function() {
    toggleLigthMode();

    localStorage.removeItem("light");
   
    // Salvar ou remover ligth mode
    if(document.body.classList.contains("light")){
        localStorage.setItem("light", 1);
    }
});

var audio = document.getElementById("audio-fundo");

function aumentarVolume() {
  if (audio.volume < 1) {
    audio.volume += 0.1;
  }
}

function diminuirVolume() {
  if (audio.volume > 0) {
    audio.volume -= 0.1;
  }
}
