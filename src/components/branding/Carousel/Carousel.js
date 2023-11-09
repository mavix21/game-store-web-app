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
  const scrollable = document.querySelector('.carousel__scrollable');
  const slider = document.getElementById('slider');
  scrollable.scrollLeft += slider.offsetWidth;
}

function moveToLeft () {
  const scrollable = document.querySelector('.carousel__scrollable');
  const slider = document.getElementById('slider');
  scrollable.scrollLeft += -slider.offsetWidth;
}

function disableEnable () {
  const scrollable = document.querySelector('.carousel__scrollable');
  const slider = document.getElementById('slider');
  prev.disabled = scrollable.scrollLeft < 1;
  next.disabled = scrollable.scrollLeft === slider.scrollWidth - slider.offsetWidth
    || scrollable.scrollLeft === slider.scrollWidth - slider.offsetWidth - 1;
}

let debounced;
scrollable.addEventListener('scroll', () => {
  window.clearTimeout(debounced);
  debounced = setTimeout(disableEnable, 200);
});

if (scrollable.scrollLeft > 0) scrollable.scrollLeft = 0;

/* setInterval(() => {
  if (scrollable.scrollLeft === slider.scrollWidth - slider.offsetWidth
    || scrollable.scrollLeft === slider.scrollWidth - slider.offsetWidth - 1) {
    scrollable.scrollLeft = 0;
  } else {
    moveToRight();
  }
}, 5000); */
