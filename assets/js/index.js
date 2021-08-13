window.onload = () => {
  sessionStorage.setItem('prevSlide', 'news-img-0');
}
function logger(id)
{
  let field = `news-img-${id}`;
  let prev = sessionStorage.getItem('prevSlide', 'news-img-0');// integer like 2019, 2018
  if(field!=prev)
  {
      document.getElementById(field).classList.remove('d-none');
      document.getElementById(prev).classList.add('d-none');
      sessionStorage.setItem('prevSlide', field);
  }
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