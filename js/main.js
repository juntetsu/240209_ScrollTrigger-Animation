document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  gsap.registerPlugin(ScrollTrigger);

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
