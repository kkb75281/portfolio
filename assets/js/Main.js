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

// 스크롤 오버했을때
const scrollsite = document.querySelector(".hover");
const presite = document.querySelectorAll(".presite");

// const img = new Image()
// img.src = "./assets/img/site1.jpg"
// console.log(img.height)

const TL = gsap.timeline({ paused: true });
// const imgHeight = gsap.getProperty(".presite","naturalheight")

TL.to(presite, {
  scale: 1.0,
  duration: 8,
  stagger: 0.1,
  // ease: "back.out(1.7)",
  y: -1360,
});

scrollsite.addEventListener("mouseenter", () => {
  TL.play();
});
scrollsite.addEventListener("mouseout", () => {
  TL.reverse();
});
