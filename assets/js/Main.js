// top 버튼
window.addEventListener("scroll", () => {
  let scrollTop =
    window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

  // 02
  if (scrollTop >= document.body.scrollHeight - window.innerHeight) {
    document.querySelector(".top").classList.add("show");
  } else {
    document.querySelector(".top").classList.remove("show");
  }
});

document.querySelector(".top").addEventListener("click", () => {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
});

// icon rotate 효과
window.addEventListener("scroll", function (event) {
  let scroll = this.scrollY;
  document.querySelector(".scr1 img").style.transform =
    "rotate(-" + scroll / 8 + "deg)";
  document.querySelector(".scr2 img").style.transform =
    "rotate(-" + scroll / 8 + "deg)";
  document.querySelector(".scr3 img").style.transform =
    "rotate(-" + scroll / 8 + "deg)";
  document.querySelector(".scr4 img").style.transform =
    "rotate(-" + scroll / 8 + "deg)";
  document.querySelector(".scr5 img").style.transform =
    "rotate(-" + scroll / 8 + "deg)";
  document.querySelector(".scr6 img").style.transform =
    "rotate(-" + scroll / 8 + "deg)";
  // document.querySelector(".scr7 img").style.transform = "rotate(-" + scroll / 8 + "deg)";
});

// 스크롤 오버했을때
const hover1 = document.querySelector(".h1");
const hover2 = document.querySelector(".h2");
const hover3 = document.querySelector(".h3");
const hover4 = document.querySelector(".h4");
const hover5 = document.querySelector(".h5");
const hover6 = document.querySelector(".h6");
// const hover7 = document.querySelector(".h7");
const presite1 = document.querySelector(".ps1");
const presite2 = document.querySelector(".ps2");
const presite3 = document.querySelector(".ps3");
const presite4 = document.querySelector(".ps4");
const presite5 = document.querySelector(".ps5");
const presite6 = document.querySelector(".ps6");
// const presite7 = document.querySelector(".ps7");

const s1 = gsap.timeline({ paused: true });
const s2 = gsap.timeline({ paused: true });
const s3 = gsap.timeline({ paused: true });
const s4 = gsap.timeline({ paused: true });
const s5 = gsap.timeline({ paused: true });
const s6 = gsap.timeline({ paused: true });
// const s7 = gsap.timeline({ paused: true });

s1.to(presite1, {
  scale: 1.0,
  duration: 8,
  stagger: 0.1,
  y: "-82%",
});

s2.to(presite2, {
  scale: 1.0,
  duration: 8,
  stagger: 0.1,
  y: "-60%",
});

s3.to(presite3, {
  scale: 1.0,
  duration: 8,
  stagger: 0.1,
  y: "-80%",
});

// s4.to(presite4, {
//   scale: 1.0,
//   duration: 8,
//   stagger: 0.1,
//   x: -2230,
// });

s5.to(presite5, {
  scale: 1.0,
  duration: 8,
  stagger: 0.1,
  y: "-75%",
});

s6.to(presite6, {
  scale: 1.0,
  duration: 8,
  stagger: 0.1,
  x: "-75%",
});

// s7.to(presite7, {
//   scale: 1.0,
//   duration: 8,
//   stagger: 0.1,
//   y: -1360,
// });

hover1.addEventListener("mouseenter", () => {
  s1.play();
});
hover1.addEventListener("mouseout", () => {
  s1.reverse();
});
hover2.addEventListener("mouseenter", () => {
  s2.play();
});
hover2.addEventListener("mouseout", () => {
  s2.reverse();
});
hover3.addEventListener("mouseenter", () => {
  s3.play();
});
hover3.addEventListener("mouseout", () => {
  s3.reverse();
});
// hover4.addEventListener("mouseenter", () => {
//   s4.play();
// });
// hover4.addEventListener("mouseout", () => {
//   s4.reverse();
// });
hover5.addEventListener("mouseenter", () => {
  s5.play();
});
hover5.addEventListener("mouseout", () => {
  s5.reverse();
});
hover6.addEventListener("mouseenter", () => {
  s6.play();
});
hover6.addEventListener("mouseout", () => {
  s6.reverse();
});

// 배경색 전환
const bgColorElems = document.querySelectorAll("[data-bgcolor]");
// console.log(bgColorElems);
bgColorElems.forEach((colorSection, i) => {
  // console.log(colorSection);
  // console.log(i);
  const prevBg = i === 0 ? "" : bgColorElems[i - 1].dataset.bgcolor;
  // let prevBg = i === 0 ? "" : bgColorElems[i - 1].dataset.bgcolor;
  // if (i === 4) {
  //   bgColorElems[i].dataset.bgcolor = "#ffffff";
  // }
  ScrollTrigger.create({
    trigger: colorSection,
    start: "top 50%",
    end: "bottom 5%",
    // markers: true,
    onEnter: () =>
      gsap.to("#main", {
        backgroundColor: colorSection.dataset.bgcolor,
        // overwrite: "auto"
      }),
    onLeaveBack: () =>
      gsap.to("#main", {
        backgroundColor: prevBg,
        // overwrite: "auto"
      }),
  });
});
