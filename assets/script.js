const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection des éléments
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p"); 
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0; // Index de l'image actuelle

// Fonction pour mettre à jour l'image et le texte
function updateBanner() {
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerText.innerHTML = slides[currentIndex].tagLine;
    
    updateDots();
}

// Fonction pour gérer les points (dots)
function updateDots() {
    dotsContainer.innerHTML = ""; // Réinitialiser les dots
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === currentIndex) dot.classList.add("dot_selected"); // Ajoute une classe active au dot actuel
        dotsContainer.appendChild(dot);

        // Ajout d'un écouteur pour naviguer au clic sur un dot
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateBanner();
        });
    });
}

// Écouteurs d'événements sur les flèches
arrowLeft.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateBanner();
});

arrowRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateBanner();
});

// Initialisation du carrousel
updateBanner();
