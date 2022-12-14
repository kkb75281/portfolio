// 이미지 확대
function Intro() {
  let Intro = gsap.timeline({
    scrollTrigger: {
      trigger: "#introInner",
      start: "0% 0%",
      end: "100% 0%",
      pin: "#introInner",
      scrub: 2.2,
    },
  });

  Intro.to("#introInner .introDesc", { scale: 0, opacity: 0 }, 0)
    .to("#introInner .introImg", { scale: 0, opacity: 0 }, 0)
    .to(
      "#introInner .introTit",
      {
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "30rem",
        color: "#fecf67",
        zIndex: "-1",
      },
      0
    )
    .to(
      "#introInner .introBox",
      { width: "100%", height: "100%", zIndex: "-1" },
      0
    )
    .to("#introMade", { width: "100%", height: "100%", y: 200, opacity: 0 }, 0)
    .from("#introMade", { y: 200, opacity: 0 }, 0.51);
}
Intro();

// 사이트 소개
function Site() {
  let Site = gsap.timeline({
    scrollTrigger: {
      trigger: ".siteIntroTit",
      start: "0% 0%",
      end: "100% 0%",
      pin: ".siteIntroTit",
      scrub: 2.2,
      // markers: true,
    },
  });

  Site.from(
    ".siteIntroTit .icon1",
    { x: -10, scale: 0, zIndex: "-9", opacity: 0 },
    0
  )
    .from(".siteIntroTit .tit .stit", { y: -200, opacity: 0 }, 0)
    .from(".siteIntroTit .tit .btit", { y: 200, opacity: 0 }, 0)
    .from(".siteIntroTit .tit .sdesc", { y: 200, opacity: 0 }, 0.1);
}
Site();

// gsap.to('.scroll img', {
//     scrollTrigger: {
//         trigger: ".project",
//         scrub: true,
//     }, rotation: 360
// })

// gsap.fromTo('.scroll img', 0.5, { scale: 1 }, { scale: 1.05, repeat: 3, repeatDelay: 0, yoyo: true, transformOrigin: 'center center' });

gsap.from(".Proj1 .pnum", {
  scrollTrigger: {
    trigger: ".Proj1",
    scrub: true,
  },
  y: -100,
  mixBlendMode: "lighten",
  opacity: 0,
});

gsap.from(".Proj1 .pcont", {
  scrollTrigger: {
    trigger: ".Proj1",
    scrub: true,
  },
  y: 100,
});

gsap.from(".Proj2 .pnum", {
  scrollTrigger: {
    trigger: ".Proj2",
    scrub: true,
  },
  y: -100,
  mixBlendMode: "lighten",
  opacity: 0,
});

gsap.to(".Proj2 .pcont", {
  scrollTrigger: {
    trigger: ".Proj2",
    scrub: true,
  },
  y: -100,
});

gsap.to(".project .icon2", {
  scrollTrigger: {
    trigger: ".project",
    scrub: true,
  },
  scale: 0.7,
  rotate: "270deg",
  y: -100,
});

gsap.from(".Proj3 .pnum", {
  scrollTrigger: {
    trigger: ".Proj3",
    scrub: true,
  },
  y: -100,
  mixBlendMode: "lighten",
  opacity: 0,
});

gsap.to(".Proj3 .pcont", {
  scrollTrigger: {
    trigger: ".Proj3",
    scrub: true,
  },
  y: -100,
});

gsap.to(".project .icon3", {
  scrollTrigger: {
    trigger: ".project",
    scrub: true,
    // ease: "Bounce.easeOut",
    // yoyo: true,
  },
  x: -800,
});

gsap.from(".Proj4 .pnum", {
  scrollTrigger: {
    trigger: ".Proj4",
    scrub: true,
  },
  y: -100,
  mixBlendMode: "lighten",
  opacity: 0,
});

gsap.to(".Proj4 .pcont", {
  scrollTrigger: {
    trigger: ".Proj4",
    scrub: true,
  },
  y: -100,
});

gsap.from(".Proj5 .pnum", {
  scrollTrigger: {
    trigger: ".Proj5",
    scrub: true,
  },
  y: -100,
  mixBlendMode: "lighten",
  opacity: 0,
});

gsap.to(".Proj5 .pcont", {
  scrollTrigger: {
    trigger: ".Proj5",
    scrub: true,
  },
  y: -100,
});

gsap.from(".Proj6 .pnum", {
  scrollTrigger: {
    trigger: ".Proj6",
    scrub: true,
  },
  y: -100,
  mixBlendMode: "lighten",
  opacity: 0,
});

gsap.to(".Proj6 .pcont", {
  scrollTrigger: {
    trigger: ".Proj6",
    scrub: true,
  },
  y: -100,
});
