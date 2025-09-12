// Importar o módulo principal do Firebase
import firebase from "firebase/app";

// Importar os módulos específicos que você precisa
import "firebase/analytics";

// TODO: Adicione outros módulos do Firebase que deseja usar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuração do seu aplicativo Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBdxJd-E4a2cL664EjazEwvD2dQPxT4EhM",
  authDomain: "siteluanagomes.firebaseapp.com",
  projectId: "siteluanagomes",
  storageBucket: "siteluanagomes.appspot.com",
  messagingSenderId: "314890403435",
  appId: "1:314890403435:web:841e179bd16d1c9b6fbb2e",
  measurementId: "G-LDQ3Q1TBQQ"
};

// Inicializar o Firebase
const app = firebase.initializeApp(firebaseConfig);

// Inicializar o Analytics (se necessário)
const analytics = firebase.analytics();

// Outros códigos relacionados ao Firebase podem ser adicionados aqui
 // JavaScript para o carrossel do hero e menu mobile
        document.addEventListener('DOMContentLoaded', () => {
            const heroImages = document.querySelectorAll('.hero-image-carousel img');
            let currentHeroImage = 0;

            function changeHeroImage() {
                heroImages[currentHeroImage].classList.remove('active');
                currentHeroImage = (currentHeroImage + 1) % heroImages.length;
                heroImages[currentHeroImage].classList.add('active');
            }
            setInterval(changeHeroImage, 5000); // Muda a cada 5 segundos

            // Menu Toggle para Mobile
            const menuToggle = document.querySelector('.menu-toggle');
            const menuNav = document.querySelector('.MenuNav');

            if (menuToggle && menuNav) {
                menuToggle.addEventListener('click', () => {
                    menuNav.classList.toggle('active');
                    menuToggle.querySelector('.material-symbols-outlined').textContent = 
                        menuNav.classList.contains('active') ? 'close' : 'menu';
                });

                // Fechar menu ao clicar em um link
                menuNav.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        menuNav.classList.remove('active');
                        menuToggle.querySelector('.material-symbols-outlined').textContent = 'menu';
                    });
                });
            }

            // Script para o cabeçalho fixo (já presente em header(rolagem).js, mas incluído aqui para garantir)
            const header = document.querySelector('header');
            if (header) {
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                });
            }
        });