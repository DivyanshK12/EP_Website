gsap.registerPlugin(ScrollTrigger);
gsap.from("#ann", {
    scrollTrigger: "#head",
    y: 100,
    delay:0.3,
    duration: 0.3,
    stagger: 0.1,
    opacity:0,
    ease:"power2.inOut"
  });