document.addEventListener('DOMContentLoaded', () => {

    // 1. CARROSSEL DA SEÇÃO HERO (Ajustado para funcionar com o HTML atual)
    const heroImages = document.querySelectorAll('.hero-image-carousel img');
    let currentHeroImage = 0;

    function changeHeroImage() {
        if (heroImages.length > 0) {
            heroImages[currentHeroImage].classList.remove('active');
            currentHeroImage = (currentHeroImage + 1) % heroImages.length;
            heroImages[currentHeroImage].classList.add('active');
        }
    }
    // Inicia o carrossel e o timer
    if (heroImages.length > 0) {
        heroImages[0].classList.add('active');
        setInterval(changeHeroImage, 5000);
    }

    // 2. GALERIA DE FOTOS COM MINIATURAS (Ajustado para o novo HTML)
    const bigImage = document.querySelector('.gallery-grid img');
    const thumbnails = document.querySelectorAll('.gallery-grid img');

    if (bigImage && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const newSrc = thumb.getAttribute('src');
                bigImage.setAttribute('src', newSrc);

                // Opcional: Adicionar classe 'active' para destacar a miniatura selecionada
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });
    }

    // 3. MENU MOBILE E EFEITO DE SCROLL DO HEADER
    const menuToggle = document.querySelector('.menu-toggle');
    const menuNav = document.querySelector('.MenuNav');
    const header = document.querySelector('header');

    if (menuToggle && menuNav) {
        menuToggle.addEventListener('click', () => {
            menuNav.classList.toggle('active');
            menuToggle.querySelector('.material-symbols-outlined').textContent =
                menuNav.classList.contains('active') ? 'close' : 'menu';
        });

        menuNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuNav.classList.remove('active');
                menuToggle.querySelector('.material-symbols-outlined').textContent = 'menu';
            });
        });
    }

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 4. FORMULÁRIO DE CONTATO (Convertido para JavaScript puro)
    const form = document.getElementById('whatsappForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            const whatsappNumber = '5561999225658';
            const encodedMessage = encodeURIComponent(`Olá, sou ${name} e gostaria de agendar um horário. Meu telefone é ${phone}. A seguinte mensagem foi enviada pelo site: ${message}`);

            const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
        });
    }

    // 5. ANIMAÇÃO DE SEÇÕES AO ROLAR
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 6. SCROLL SUAVE PARA LINKS INTERNOS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 7. BOTÃO "VOLTAR AO TOPO"
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'flex';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
    }
});

