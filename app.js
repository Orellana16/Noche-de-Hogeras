document.addEventListener('DOMContentLoaded', function () {
    const songModal = document.getElementById('songModal');
    const modalTitleEl = document.getElementById('modalSongTitleLabel');
    const modalAudioPlayer = document.getElementById('modalAudioPlayer');
    const modalDownloadBtn = document.getElementById('modalDownloadBtn');
    const modalLyricsContainer = document.getElementById('modalLyricsContainer');

    // Escucha cuando se va a mostrar un modal
    songModal.addEventListener('show.bs.modal', function (event) {
        // El elemento que disparó el modal (la tarjeta de la canción)
        const card = event.relatedTarget;

        // Extraemos los datos que pusimos en el HTML (data-*)
        const songTitle = card.getAttribute('data-song-title');
        const audioSrc = card.getAttribute('data-audio-src');

        // Encontramos el div oculto con la letra dentro de la tarjeta que fue clickeada
        const lyricsContent = card.querySelector('.lyrics-content').innerHTML;

        // Populamos el modal con la información de la canción
        modalTitleEl.textContent = songTitle;
        modalAudioPlayer.src = audioSrc;
        modalDownloadBtn.href = audioSrc;
        modalLyricsContainer.innerHTML = lyricsContent;
    });

    // Escucha cuando el modal se ha ocultado completamente
    songModal.addEventListener('hidden.bs.modal', function () {
        // Pausamos el audio y reiniciamos para que no siga sonando de fondo
        modalAudioPlayer.pause();
        modalAudioPlayer.currentTime = 0;
    });

    // Evita que al hacer clic en el enlace de la imagen se abra el modal
    const imageLinks = document.querySelectorAll('.image-link');
    imageLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });
});