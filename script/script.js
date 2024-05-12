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

//gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);
//gsap.registerPlugin(DrawSVGPlugin);








/* ---- Animation de la souris qui monte et descend dans la section de bienvenue de page ----- */
gsap.to('.scroll', {
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: 'easeInOut',
    top: '20%',
    scrub: 1,
});


/* ----  Animation du texte prologue (chapitre 0) ----- */


gsap.to('.chp0', {
    duration: 30,
    y: '500%',
    scale: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: '.chp0',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: 1,

        // markers: true,
    }
});










/* ----  animation du texte ----- */

document.addEventListener('DOMContentLoaded', function() {

    const chp2 = document.querySelector('.chp2');


    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: chp2,
            start: 'top 30%',
            end: 'bottom top',
            scrub: true
        }
    });

    timeline.to(chp2, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
    });
});


gsap.from('.chp6', {
    duration: 1,
    autoAlpha: 0,
    xPercent: -100,
    scale: 0.5,
    ease: 'power1.out',
    scrollTrigger: {
        trigger: '#chapitre-7',
        start: 'top center',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
        // markers: true
    }
});






/*  Animation de la terre qui scale in et out avec le scroll(chapitre1) */


gsap.to('.terre', {
    scrollTrigger: {
        trigger: '#chapitre-1',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        // markers: true
    },
    scale: 0.5,
    ease: 'none'
});

gsap.to("#chapitre-1", {
    scrollTrigger: {
        trigger: "#chapitre-1",
        start: "top top",
        end: () => "+=" + document.querySelector("#chapitre-1").offsetHeight,
        pin: true,
    }
});

/* Animation de la météorite qui s'avance vers la terre (chapitre 1) */
gsap.to('.meteorite', {
    scrollTrigger: {
        trigger: '#chapitre-1',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        // markers: true,
    },
    x: '30vw',
    ease: 'none'
});

/* CHAPITRE 2 */
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




/* (chapitre 3)*/

function animateElements() {
    const pince = document.querySelector('#chapitre-3 .pince');
    const casque = document.querySelector('#chapitre-3 .casque');

    // Animation timeline des elements qui doit aller en haut et en bas
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#chapitre-3",
            start: 'top 10%',
            end: 'bottom center',
            scrub: true,
            // markers: true
        }
    });
    gsap.to("#chapitre-3", {
        scrollTrigger: {
            trigger: "#chapitre-3",
            start: "top top",
            end: () => "+=" + document.querySelector("#chapitre-3").offsetHeight,
            pin: true,
            scrub: true
        }
    });

    //animation du casque qui va en bas
    tl.to([pince, casque], {
        y: '+=20vh',
        duration: 0.5,
        ease: 'power2.inOut'
    });

    // animation du haut
    tl.to(pince, {
        y: '-40vh',
        duration: 0.5,
        ease: 'power2.inOut',
        yoyo: true
    });
}


document.addEventListener('DOMContentLoaded', () => {
    animateElements();
});


/* DÉBUT ANIMATION CHAPITRE 4*/

//spritesheet feu
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
        backgroundPosition: '0 -2000%',
        ease: 'steps(20)',
        duration: 1,
        repeat: -1
    });
}

document.addEventListener('DOMContentLoaded', () => {
    feu();
});


// Animation du paralaxe avec la fusee dans le chapitre 4
document.addEventListener("DOMContentLoaded", function() {
    gsap.to("#chapitre-4", {
        scrollTrigger: {
            trigger: "#chapitre-4",
            start: "top top",
            end: () => "+=" + document.querySelector("#chapitre-4").offsetHeight,
            pin: true,
            scrub: true
        }
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#chapitre-4",
            start: "top top",
            end: () => "+=" + document.querySelector("#chapitre-4").offsetHeight,
            scrub: 1
        }
    });

    tl.to("#chapitre-4 .feu", { y: -950, ease: "power2.inOut" })
        .to("#chapitre-4 .nuage1", { y: 700, ease: "power2.inOut" }, 0)
        .to("#chapitre-4 .nuage2", { y: 700, ease: "power2.inOut" }, 0)
        .to("#chapitre-4 .nuage3", { y: 700, ease: "power2.inOut" }, 0)
        .to("#chapitre-4 #chp4", { y: 50, ease: "power2.inOut" }, 0)
        .to("#chapitre-4 .fusee", { y: -950, ease: "power2.inOut" }, 0);
});
//chapitre 4
document.addEventListener("DOMContentLoaded", function() {
    gsap.to("#chapitre-4", {
        scrollTrigger: {
            trigger: "#chapitre-4",
            start: "top top",
            end: () => "+=" + document.querySelector("#chapitre-4").offsetHeight,

            scrub: true
        }
    });


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#chapitre-4",
            start: "top top",
            end: () => "+=" + document.querySelector("#chapitre-4").offsetHeight,
            scrub: true
        }
    });


    tl.to(".chp4", {
        y: () => -(document.querySelector("#chapitre-4").offsetHeight * 0.5),
        ease: "none"
    });
});
//fin parallax text chapitre 4

//FIN ANIMATION CHAPITRE 4


/*(chapitre 5)*/

/*function animateSVGPath(path) {
    gsap.timeline({
            repeat: -1,
            scrollTrigger: {
                trigger: "#chapitre-5",
            },
        })
        .to(path, { duration: 0.5, drawSVG: "25% 25%" })
        .to(path, { duration: 0.5, drawSVG: "25% 75%" })
        .to(path, { duration: 0.5, drawSVG: "50% 50%" })
        .to(path, { duration: 0.5, drawSVG: "75% 75%" })
        .to(path, { duration: 0.5, drawSVG: "100% 100%" })
        .to(path, { duration: 0.5, drawSVG: "75% 75%" })
        .to(path, { duration: 0.5, drawSVG: "50% 50%" })
        .to(path, { duration: 0.5, drawSVG: "25% 75%" })
        .to(path, { duration: 0.5, drawSVG: "0% 25%" });
}

animateSVGPath("#path-1");
animateSVGPath("#path-2");
animateSVGPath("#path-3");*/

//animation de la météorite chapitre 5
document.addEventListener("DOMContentLoaded", function() {
    const meteorite = document.querySelector('#chapitre-5 .meteorite');
    gsap.set(meteorite, { opacity: 0 });
    const meteoriteTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#chapitre-5",
            start: "top top",
            end: "bottom center",
            scrub: 1
        }
    });


    meteoriteTimeline.to(meteorite, {
        opacity: 1,
        x: 900,
        duration: 3,
        ease: "power2.out"
    });
});

// Animation du volant qui tourne de droite a gauche(CHAPITRE 5)
function animationVolant() {
    const volant = document.querySelector('.volant');


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#chapitre-5',
            start: 'top 20%',
            end: 'bottom center',
            scrub: true,
            repeat: -1,
        }
    });


    tl.to(volant, {
        backgroundPositionY: '2500%',
        duration: 5,
        ease: 'steps(25)',

    });
}
document.addEventListener('DOMContentLoaded', () => {
    animationVolant();

    gsap.to("#chapitre-5", {
        scrollTrigger: {
            trigger: "#chapitre-5",
            start: "top top",

            pin: true,
            scrub: true
        }
    });





});


//fin d'animation chapitre5

/*ANIMATION CHAPITRE 6*/

//ANIMATION DE LA BOMBE (CHAPITRE 6)
document.addEventListener("DOMContentLoaded", function() {
    const bombe = document.querySelector('#chapitre-6 .bombe');
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#chapitre-6",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
    });


    timeline.to(bombe, {
        duration: 4,
        ease: "power2.out",
        bottom: "40vh",
        left: "70vw",
        rotation: -720,
        opacity: 0
    });


    function showBomb() {
        gsap.to(bombe, {
            duration: 1,
            opacity: 1
        });
    }

    ScrollTrigger.create({
        trigger: "#chapitre-6",
        start: "top 80%",
        end: "bottom top",
        onUpdate: self => {
            if (self.direction === -1) {
                showBomb();
            }
        }
    });

    gsap.to("#chapitre-6", {
        scrollTrigger: {
            trigger: "#chapitre-6",
            start: "top top",
            end: () => "+=" + document.querySelector("#chapitre-6").offsetHeight,
            pin: true,
            scrub: true
        }
    });
});


//ANIMATION FEU CHAPITRE 6
function feuchap6() {
    const spritesheet = document.querySelector('#chapitre-6 .feu');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: spritesheet,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });


    tl.to(spritesheet, {
        backgroundPosition: '0 -2000%',
        ease: 'steps(20)',
        duration: 1,
        repeat: -1
    });
}

document.addEventListener('DOMContentLoaded', () => {
    feuchap6();
});

//FIN ANIMATION CHAPITRE









/*animation de la météorite qui explose(CHAPITRE 7)*/
function animationMeteorites() {
    const meteorite1 = document.querySelector('.meteorite1');
    const meteorite2 = document.querySelector('.meteorite2');
    const meteorite3 = document.querySelector('.meteorite3');

    gsap.to(meteorite1, {
        x: -2000,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        scrollTrigger: {
            trigger: meteorite1,
            start: 'top 25%',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.to(meteorite2, {
        x: 2000,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        scrollTrigger: {
            trigger: meteorite2,
            start: 'top 25%',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.to(meteorite3, {
        y: 2000,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        scrollTrigger: {
            trigger: meteorite3,
            start: 'top 25%',
            end: 'bottom top',
            scrub: true
        }
    });

}

document.addEventListener('DOMContentLoaded', () => {
    animationMeteorites();

    ScrollTrigger.create({
        trigger: '#chapitre-7',
        start: 'top top',
        end: () => `+=${document.querySelector("#chapitre-7").offsetHeight}`,
        pin: true,
        scrub: true
    });
});

document.addEventListener('DOMContentLoaded', () => {
    animationMeteorites();
});

//
/*SECTION MORPHSVG(CHAPITRE 6)*/

// animation de la bombe(morphed)qui se fait lancer
/*document.addEventListener("DOMContentLoaded", function() {
    const svg = document.querySelector('#svg');
    const bombePath = document.querySelector('#bombe1');
    const explosionPath = document.querySelector('#explosion1');


    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#chapitre-6",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    timeline.to(svg, {
        duration: 1.5,
        ease: "power2.out",
        bottom: "40vh",
        left: "70vw",
        rotation: -720,
        onComplete: () => {

            morphAnimation.play();
        }
    });

    const morphAnimation = gsap.to(bombePath, {
        morphSVG: { shape: explosionPath },
        duration: 2,
        ease: "power2.inOut",
        paused: true
    });

    ScrollTrigger.create({
        trigger: svg,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: self => {
            morphAnimation.progress(self.progress);
            const scaleFactor = 1 + self.progress * 10;
            gsap.set(svg, { scale: scaleFactor });
        }
    });
});
// FIN SECTION MORPHSVG

/*SECTION MOTIONPATH SVG(CHAPITRE 8)*/
/*document.addEventListener("DOMContentLoaded", function() {
    const mort = document.querySelector('.mort');
    const path = document.querySelector('#path-4');


    const motionAnimation = gsap.to(mort, {
        motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
        },
        duration: 40,
    });

    ScrollTrigger.create({
        trigger: '#chapitre-8',
        start: 'top top',
        end: 'bottom center',
        scrub: 1,
        onUpdate: self => {
            motionAnimation.progress(self.progress);
        }
    });


    gsap.to('.chp8', {
        motionPath: '#courbe',
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'none',
    });


    ScrollTrigger.create({
        trigger: '#chapitre-8',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: 1,
    });






});
document.addEventListener("DOMContentLoaded", function() {
    const chp8 = document.querySelector('#chapitre-8 .chp8');


    gsap.set(chp8, { opacity: 0, x: -200 });


    const chp8Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#chapitre-8",
            start: "top 25%",
            end: "bottom top",
            scrub: false
        }
    });


    chp8Timeline.to(chp8, {
        motionPath: {
            path: "#path-4",
            align: "#path-4",
            autoRotate: true
        },
        opacity: 1,
        duration: 40,
        ease: "power2.out"
    });
});
*/

//OPACITÉ MORT DE KEVIN
const invisible = document.querySelector('#chapitre-8 .kevin');

gsap.to('#chapitre-8 .kevin', {
    opacity: 0.1,
});








//FIN DE SECTION MOTIONPATH SVG


document.addEventListener("DOMContentLoaded", function() {
    const chp5 = document.querySelector('#chapitre-5 .chp5');
    gsap.set(chp5, { opacity: 0, y: -50 });
    const chp5Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#chapitre-5",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
    chp5Timeline.to(chp5, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    });
});






document.addEventListener("DOMContentLoaded", function() {
    const chp6 = document.querySelector('#chapitre-6 .chp6');


    gsap.set(chp6, { opacity: 0, x: 500 });


    const chp6Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#chapitre-6",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });


    chp6Timeline.to(chp6, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out"
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const chp7 = document.querySelector('#chapitre-7 .chp7');


    gsap.set(chp7, { opacity: 0, x: 500 });


    const chp7Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#chapitre-7",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });


    chp7Timeline.to(chp7, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out"
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const chp9 = document.querySelector('#chapitre-8 .chp9');


    gsap.set(chp9, { opacity: 0, x: 500 });


    const chp9Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#chapitre-8",
            start: "top center",
            end: "bottom top",
            scrub: 1
        }
    });


    chp9Timeline.to(chp9, {
        opacity: 1,
        x: 0,
        duration: 6,
        ease: "power2.out"
    });
});