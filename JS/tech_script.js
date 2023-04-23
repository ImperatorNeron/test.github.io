const els = document.querySelectorAll(".el");
const active = document.querySelector(".active-op");
const option_text = document.querySelectorAll(".option-text");

let last = active;

els.forEach((el, index) => {
  el.addEventListener("click", function () {
    last.classList.remove("active-op");
    last = el;
    option_text.forEach((text) => {
      text.classList.remove("active-text");
    });
    option_text[index].classList.add("active-text");
    el.classList.add("active-op");
  });
});
