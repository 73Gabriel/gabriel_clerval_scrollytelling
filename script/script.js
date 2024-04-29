const { ScrollTrigger } = window;
let scrollTimeout;

function addScrollingClass() {
    document.body.classList.add('is-scrolling');
}

function removeScrollingClass() {
    document.body.classList.remove('is-scrolling');
}
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    addScrollingClass();
    scrollTimeout = setTimeout(() => {
        removeScrollingClass();
    }, 100);
});

gsap.registerPlugin(ScrollTrigger);

// Animation de la souris qui monte et descend dans la section de bienvenue de page
gsap.to('.scroll', {
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: 'easeInOut',
    top: '20%',
});

// Animation du texte prologue (chapitre 0)
gsap.to('.chp0', {
    duration: 20,
    y: '600%',
    scale: 0.5,
    ease: "power1.in",
    onStart: () => document.querySelector('.chp2').style.bottom = 'auto',
    scrollTrigger: {
        trigger: '.chp0',
        start: 'top center',
        end: 'top 100px',
        pin: true,
        scrub: true,
        markers: true
    }
});
// Animation de la terre qui scale in et out avec le scroll(chapitre2)
gsap.to('.terre', {
    scrollTrigger: {
        trigger: '#chapitre-1',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        markers: true
    },
    scale: 0.5,
    ease: 'none'
});

// Animation de la métorite qui s'avance vers la terre (chapitre2)

gsap.to('.meteorite', {
    scrollTrigger: {
        trigger: '#chapitre-1',
        start: 'top bottom', // Animation starts when the top of #chapitre-1 hits the bottom of the viewport
        end: 'bottom top', // Animation ends when the bottom of #chapitre-1 hits the top of the viewport
        scrub: true, // Smooth transition linked to the scroll position
        markers: true // Optional: shows start and end points for debugging
    },
    x: '40vw',
    ease: 'none'
});



function animateElements() {
    const pince = document.querySelector('#chapitre-3 .pince');
    const casque = document.querySelector('#chapitre-3 .casque');

    // Animation timeline des elements qui doit aller en haut et en bas
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: pince,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            markers: true
        }
    });

    //animation du casque qui va en bas
    tl.to([pince, casque], {
        y: '+=20vh',
        duration: 1,
        ease: 'power2.inOut'
    });

    // animation du haut
    tl.to(pince, {
        y: '-40vh',
        duration: 1,
        ease: 'power2.inOut',
        yoyo: true
    });
}


document.addEventListener('DOMContentLoaded', () => {
    animateElements();
});


// animation du spritesheet de feu
function feu() {

    const spritesheet = document.querySelector('#chapitre-4 .feu');


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: spritesheet,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });


    tl.to(spritesheet, {
        backgroundPositionY: '-2000%',
        ease: 'steps(20)',
        duration: 0.8,
        repeat: -1
    });
}

document.addEventListener('DOMContentLoaded', () => {
    feu();
});





// Animation du paralaxe avec la fusee dans le chapitre 4
function fusee() {
    const feu = document.querySelector('#chapitre-4 .feu');
    const fusee = document.querySelector('#chapitre-4 .fusee');


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: fusee,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });


    tl.to(feu, {
        y: -250,
        ease: 'power2.out'
    });


    tl.to(fusee, {
        y: -400,
        ease: 'power2.out'
    }, 0);
}
document.addEventListener('DOMContentLoaded', () => {
    fusee();
});

function animationKevin() {
    const kevin = document.querySelector('#chapitre-2 .kevin');


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: kevin,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            pin: true,
            pinSpacing: false
        }
    });


    tl.to(kevin, {
        y: '-20vh',
        duration: 1,
        ease: 'power2.out'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    animationKevin();
});

gsap.from('.chp2', {
    duration: 1,
    autoAlpha: 0,
    scale: 0.5,
    ease: 'power1.out',
    scrollTrigger: {
        trigger: '.chp2',
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
        markers: true
    }
});

const bombeTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#chapitre-6 .bombe',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        pin: true,
        markers: true
    }
});

// Animation de la bombe qui se fait lancer
bombeTimeline.to('#chapitre-6 .bombe', {
    y: -500,
    x: 500,
    rotation: 720,
    duration: 3,
    ease: 'power1.out'
});

// Animation du volant qui tourne de droite a gauche
function animationVolant() {
    const volant = document.querySelector('.volant');


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#chapitre-5',
            start: 'top center',
            end: 'bottom center',
            scrub: true
        }
    });


    tl.to(volant, {
        backgroundPositionY: '2500%',
        duration: 1,
        ease: 'steps(25)',

    });
}
document.addEventListener('DOMContentLoaded', () => {
    animationVolant();
});


// animation de la météorite qui explose
function animationMeteorites() {
    const meteorite1 = document.querySelector('.meteorite1');
    const meteorite2 = document.querySelector('.meteorite2');
    const meteorite3 = document.querySelector('.meteorite3');


    gsap.to(meteorite1, {
        x: -2000,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
    });


    gsap.to(meteorite2, {
        x: 2000,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
    });


    gsap.to(meteorite3, {
        y: 2000,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
    });
}

document.addEventListener('DOMContentLoaded', () => {
    animationMeteorites();
});