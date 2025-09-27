const slider = document.querySelector('.coffee-slider');

setInterval(() => {
  slider.scrollBy({ left: 270, behavior: 'smooth' });

  // Reset scroll when reaching end
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollTo({ left: 0, behavior: 'smooth' });
  }
}, 3000); // scroll every 3s
