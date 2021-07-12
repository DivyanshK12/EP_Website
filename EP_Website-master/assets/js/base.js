const showAnim = gsap.from('.main-tool-bar', { 
    yPercent: -100,
    paused: true,
    duration: 0.3
  }).progress(1);
  
  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });