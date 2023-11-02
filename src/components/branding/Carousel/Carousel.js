const scrollable = document.querySelector('.carousel__scrollable');
const slider = document.getElementById('slider');
const items = slider.children;
const prev = document.querySelector('.carousel__button.prev');
const next = document.querySelector('.carousel__button.next');

const scrollAmount = slider.offsetWidth;

prev.addEventListener('click', (e) => {
  moveToLeft();
})

next.addEventListener('click', () => {
  moveToRight();
})

function moveToRight () {
  scrollable.scrollLeft += scrollAmount;
}

function moveToLeft () {
  scrollable.scrollLeft += -scrollAmount;
}

function disableEnable () {
  prev.disabled = scrollable.scrollLeft < 1;
  next.disabled = scrollable.scrollLeft === slider.scrollWidth - slider.offsetWidth;
}

let debounced;
scrollable.addEventListener('scroll', () => {
  window.clearTimeout(debounced);
  debounced = setTimeout(disableEnable, 200);
});

if (scrollable.scrollLeft > 0) scrollable.scrollLeft = 0;

setInterval(() => {
  if (scrollable.scrollLeft === slider.scrollWidth - slider.offsetWidth) {
    scrollable.scrollLeft = 0;
  } else {
    moveToRight();
  }
}, 5000);
