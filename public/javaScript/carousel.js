let carousels = document.querySelectorAll(".carousel");
let dot = document.querySelectorAll(".dot");
let index = 0;

function changeCarousel() {
  for (let i = 0; i < carousels.length; i++) {
    carousels[i].style.opacity = i === index ? "1" : "0";
    carousels[i].style.visibility = i === index ? "visible" : "hidden";
    dot[i].classList.remove("selected");
    if (i === index) {
      dot[i].classList.add("selected");
    }
  }
}

function resetTimer() {
  clearInterval(interval);
  interval = setInterval(() => {
    index = (index + 1) % carousels.length;
    changeCarousel();
  }, 10000);
}

dot.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    changeCarousel();
    resetTimer();
  });
});

changeCarousel();
let interval = setInterval(() => {
  index = (index + 1) % carousels.length;
  changeCarousel();
}, 10000);

document.addEventListener("keyup", (e) => {
  if (e.keyCode === 39) {
    index = (index + 1) % carousels.length;
    changeCarousel();
    resetTimer();
  } else if (e.keyCode === 37) {
    if ((index - 1) % carousels.length < 0) {
      index = carousels.length - 1;
    } else {
      index = (index - 1) % carousels.length;
    }
    changeCarousel();
    resetTimer();
  }
});
