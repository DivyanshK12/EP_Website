// const showAnim = gsap.from('.main-tool-bar', { 
//     yPercent: -100,
//     paused: true,
//     duration: 0.3
//   }).progress(1);
  
//   ScrollTrigger.create({
//     start: "top top",
//     end: 99999,
//     onUpdate: (self) => {
//       self.direction === -1 ? showAnim.play() : showAnim.reverse()
//     }
//   });
function initMap() {
    // The location of Uluru
    const uluru = { lat: 17.5947, lng: 78.1230 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
let tl = new TimelineMax({paused:true, reversed:true});
tl.from('.dropdown-menu', 0.25, {height: 0, ease: Power2.easeOut, opacity: 0})
tl.staggerFrom('.dropdown-menu > li', .2, {y: -20, opacity: 0}, .015);

document.getElementById("navbarDropdown").addEventListener("click", function(){
    tl.reversed() ? tl.play() : tl.reverse(0);
  });