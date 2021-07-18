function logger(image)
{
    let newsImg = document.getElementById('news-img');
    newsImg.src = `/assets/images/${image}`;
}
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    toggleActions: "play complete play reset"
    });
gsap.from("#link", {
    scrollTrigger: "#head",
    y: 100,
    delay:0.5,
    duration: 0.4,
    stagger: 0.2,
    opacity:0,
    ease:"power1.inOut"
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