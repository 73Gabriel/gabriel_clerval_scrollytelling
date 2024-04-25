const { ScrollTrigger } = window;


const feuAnimation = gsap.timeline();


feuAnimation.to('.feu', {
    backgroundPosition: '0 -2000%',
    duration: 0.8,
    repeat: -1,
    ease: 'steps(20)',
});

// animation du feu on scroll
ScrollTrigger.create({
    trigger: '.feu',
    start: 'top bottom',
    end: 'bottom top',
    animation: feuAnimation,
    scrub: true,
});