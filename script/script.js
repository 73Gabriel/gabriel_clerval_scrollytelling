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
gsap.registerPlugin(DrawSVGPlugin);



//DRAW SVG
gsap.from(".line-1", {duration:1,drawSVG: 0});






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
    y: '900%',
    scale: 0.5,
    ease: "power1.in",
    scrollTrigger: {
        trigger: '.chp0',
        start: 'top 20%',
        end: 'top 100px',
        pin: true,
        scrub: 1,
       // markers: true,

    }
});

// animation du texte
gsap.from('.chp2', {
    duration: 1,
    autoAlpha: 0,
    xPercent: -100,
    scale: 0.5,
    //ease: 'power1.out',
    scrollTrigger: {
        trigger: '#chapitre-2',
       start: 'center center',
      end: 'bottom top',
      //  toggleActions: 'play none none reverse',
        markers: true
    }
});
gsap.from('.chp4', {
    duration: 3,
   
    xPercent: -100,
    
    ease: 'power1.out',
    scrollTrigger: {
        trigger: '#chapitre-4',
        start: 'top center',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
        //markers: true
    }
});
gsap.from('.chp5', {
    duration: 1,
    autoAlpha: 0,
    xPercent: -100,
    scale: 0.5,
    ease: 'power1.out',
    scrollTrigger: {
        trigger: '#chapitre-5',
        start: 'top center',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
       // markers: true
    }
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







// Animation de la terre qui scale in et out avec le scroll(chapitre1)
gsap.to('.terre', {
    scrollTrigger: {
        trigger: '#chapitre-1',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
     //   markers: true
    },
    scale: 0.5,
    ease: 'none'
});
gsap.to("#chapitre-1", {
    scrollTrigger: {
        trigger: "#chapitre-1",
        start: "top top",
        end: () => "+=" + document.querySelector("#chapitre-3").offsetHeight,
      //  pin: true,
        scrub: true
    }
});

// Animation de la métorite qui s'avance vers la terre (chapitre1)

gsap.to('.meteorite', {
    scrollTrigger: {
        trigger: '#chapitre-1',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        //markers: true,
    },
    x: '40vw',
    ease: 'none'
});

//(chapitre 2)
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





// (chapitre 3)
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


    tl.to("#chapitre-4 .feu", {
            y: -900,
            ease: "none"
        })
        .to("#chapitre-4 .nuage1", { y: 700, ease: "none" }, 0)
        .to("#chapitre-4 .nuage2", { y: 700, ease: "none" }, 0)
        .to("#chapitre-4 .fusee", { y: -900, ease: "none" }, 0);
});


const bombeTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#chapitre-6 .bombe',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        pin: true,
        //markers: true
    }
});

// Animation de la bombe qui se fait lancer
bombeTimeline.to('#chapitre-6 .bombe', {
    y: 300,
    x: 500,
    rotation: 720,
    duration: 10,
    ease: 'power1.out'
});

// Animation du volant qui tourne de droite a gauche
function animationVolant() {
    const volant = document.querySelector('.volant');


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#chapitre-5',
            start: 'top 20%',
            end: 'bottom center',
            scrub: true,
            repeat:-1,
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