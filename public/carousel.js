document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const indicatorsContainer = document.querySelector('.indicators');
    let currentIndex = 0;

    function showImage(index) {
        carousel.style.transform = `translateX(${-index * 100}%)`;
        updateIndicators(index);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showImage(currentIndex);
    }

    function updateIndicators(index) {
        const indicators = Array.from(indicatorsContainer.children);
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    setInterval(nextImage, 2000);

    window.addEventListener('resize', function () {
        showImage(currentIndex);
    });

    // Adicionado para ajustar o tamanho do carrossel com base no número de slides
    showImage(currentIndex);
});
