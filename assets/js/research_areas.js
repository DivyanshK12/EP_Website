gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  toggleActions: "play complete play reset",
});
gsap.from("#abtus", {
  scrollTrigger: "#abtus",
  y: 100,
  duration: 0.5,
  delay: 0.1,
  stagger: 0.2,
  opacity: 0,
  ease: "power2.inOut",
});

function viewMore() {
  let row = document.getElementById("moreInfo");
  let toggle = document.getElementById("infoToggle");
  console.log(row.classList);
  if (row.classList.contains("d-none")) {
    row.classList.remove("d-none");
    toggle.innerText = "Read Less...";
    gsap.from("#moreInfo", {
      y: -100,
      duration: 0.5,
      opacity: 0,
      ease: "power2.inOut",
    });
  } else {
    row.classList.add("d-none");
    toggle.innerText = "Read More...";
  }
  console.log("Toggled");
  return false;
}
