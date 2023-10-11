console.log("créé par : IMMER Alex")

const carousel = document.querySelectorAll(".carousel");
const arrow = document.querySelectorAll(".fa-arrow-right");
let index = 0;

const changeCarousel = () => {
  if (index <= -1) {
    index = carousel.length - 1;
  } else if (index >= carousel.length) {
    index = 0;
  }
  for (let i = 0; i < carousel.length; i++) {
    if (index === i) {
      carousel[i].classList.remove("hide");
    } else {
      carousel[i].classList.add("hide");
    }
  }
};

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(() => {
    index = (index + 1) % carousel.length;
    changeCarousel();
  }, 10000);
};

arrow[1].addEventListener("click", () => {
  index--;
  changeCarousel();
  resetInterval();
});

arrow[0].addEventListener("click", () => {
  index++;
  changeCarousel();
  resetInterval();
});

changeCarousel();
let interval = setInterval(() => {
  index = (index + 1) % carousel.length;
  changeCarousel();
}, 10000);

