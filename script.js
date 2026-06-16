// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Hero fade-in
gsap.from(".hero h1", { 
    opacity: 0, 
    y: 100, 
    scale: 0.8, 
    rotation: 5, 
    duration: 1.5, 
    ease: "power4.out" 
});
gsap.from(".hero p", { opacity: 0, y: 30, duration: 1, delay: 0.5 });

// Scroll animations for sections
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1
    });
});
