document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  gsap.registerPlugin(ScrollTrigger);

  // Lenis
  const lenis = new Lenis({
    duration: 1.2
  })
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Integration Lenis on GSAP ScrollTrigger
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  

  const workInfoItems = document.querySelectorAll(".work__photo-item");
  workInfoItems.forEach((item, index) => {
    item.style.zIndex = workInfoItems.length - index;
  });

  gsap.set(".work__photo-item", {
    clipPath: () => {
      return "inset(0% 0% 0% 0%)";
    },
  });

  const animation = gsap.to(".work__photo-item:not(:last-child)", {
    clipPath: () => {
      return "inset(0% 0% 100% 0%)";
    },
    stagger: .5,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: ".work",
    start: "top top",
    end: "bottom bottom",
    animation: animation,
    scrub: 1,
  });
});
