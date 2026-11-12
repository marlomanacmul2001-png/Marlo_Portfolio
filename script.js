const images = [
  "https://via.placeholder.com/600x300?text=Sample+Project+1",
  "https://via.placeholder.com/600x300?text=Sample+Project+2",
  "https://via.placeholder.com/600x300?text=Sample+Project+3"
];
let index = 0;

const sliderImage = document.getElementById("sliderImage");

setInterval(() => {
  index = (index + 1) % images.length;
  sliderImage.src = images[index];
}, 3000);
