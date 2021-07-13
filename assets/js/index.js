function logger(image)
{
    let newsImg = document.getElementById('news-img');
    newsImg.src = `/assets/images/${image}`;
}
gsap.registerPlugin(ScrollTrigger);
gsap.from("#row1", {
    scrollTrigger: "#row1",
    y: 200,
    duration: 0.5,
    ease:"power1.inOut"
  });
  gsap.from("#row2", {
    scrollTrigger: "#row2", 
    y: 200,
    duration: 0.5,
    ease:"power1.inOut"
  });