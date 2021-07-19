gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    toggleActions: "play complete play reset"
    });
gsap.from("#abtus", {
    scrollTrigger: "#abtus",
    y: 100,
    duration: 0.5,
    delay:0.1,
    stagger: 0.2,
    opacity:0,
    ease:"power2.inOut"
  });