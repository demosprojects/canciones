// Esperar a que el documento esté listo
document.addEventListener("DOMContentLoaded", function() {
    var enterBtn = document.getElementById("enter-btn");
    var splashScreen = document.getElementById("splash-screen");
    var mainContent = document.getElementById("main-content");

    // Al hacer clic en el botón "Acceder"
    enterBtn.addEventListener("click", function() {
        // Ocultar la pantalla de bienvenida
        splashScreen.style.display = "none";
        // Mostrar el contenido principal
        mainContent.style.display = "block";
    });

    // Reproductor de audio personalizado
    var audio = document.getElementById("audio");
    var playPauseBtn = document.getElementById("play-pause-btn");
    var progressBar = document.getElementById("progress-bar");
    var volumeSlider = document.getElementById("volume-slider");

    // Alternar entre reproducir y pausar
    playPauseBtn.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "⏸️"; // Cambiar el ícono a pausa
        } else {
            audio.pause();
            playPauseBtn.textContent = "▶️"; // Cambiar el ícono a play
        }
    });

    // Actualizar la barra de progreso mientras se reproduce el audio
    audio.addEventListener("timeupdate", function() {
        var percentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percentage + "%";
    });

    // Permitir hacer clic en la barra de progreso para avanzar en el audio
    var progressContainer = document.querySelector(".progress-container");
    progressContainer.addEventListener("click", function(event) {
        var clickX = event.offsetX;
        var width = progressContainer.offsetWidth;
        var duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    });

    // Controlar el volumen del audio
    volumeSlider.addEventListener("input", function() {
        audio.volume = volumeSlider.value;
    });
});



