const carouselItems = document.querySelectorAll(".carousel_item");
let i = 1;

setInterval(() => {
  Array.from(carouselItems).forEach((item, index) => {
    const translateValue = -i * 100 + "%";
    item.style.transform = `translateX(${translateValue})`;
  });
  i++;

  if (i >= carouselItems.length) {
    i = 0;
  }
}, 4000);
