document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close');
    const fullscreenBtn = document.getElementById('fullscreen');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = image.src;
            lightboxCaption.textContent = image.nextElementSibling.textContent;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === fullscreenBtn) {
            lightbox.style.display = 'none';
        }
    });

    fullscreenBtn.addEventListener('click', () => {
        if (lightboxImg.requestFullscreen) {
            lightboxImg.requestFullscreen();
        } else if (lightboxImg.webkitRequestFullscreen) { /* Safari */
            lightboxImg.webkitRequestFullscreen();
        } else if (lightboxImg.msRequestFullscreen) { /* IE11 */
            lightboxImg.msRequestFullscreen();
        }
    });
});
