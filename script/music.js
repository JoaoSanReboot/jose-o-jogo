
const audioPlayer = document.getElementById('audio-fundo');
        
//Salvar a posição de reprodução atual no localStorage a tempo determinado.
setInterval(() => {
    localStorage.setItem('audioCurrentTime', audioPlayer.currentTime);
}, 10);
