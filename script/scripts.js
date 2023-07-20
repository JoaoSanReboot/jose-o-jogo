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

const audioPlayer = document.getElementById('audioPlayer');
        
// Salvar a posição de reprodução atual no localStorage a cada 5 segundos
setInterval(() => {
    localStorage.setItem('audioCurrentTime', audioPlayer.currentTime);
}, 1000);
