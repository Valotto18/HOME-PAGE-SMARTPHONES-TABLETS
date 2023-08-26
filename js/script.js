// add Carrossel de imagens
var carouselIndex = 0;
var carouselImages = [
  "./img/carrossel1.png",
  "./img/carrossel3.png",
  "./img/carrossel4.png",
  "./img/carrossel5.png"
  "./img/carrossel6.png"
  "./img/carrossel7.png"
  "./img/carrossel8.png"
];

function changeImage(direction) {
  carouselIndex += direction;

  if (carouselIndex < 0) {
    carouselIndex = carouselImages.length - 1;
  } else if (carouselIndex >= carouselImages.length) {
    carouselIndex = 0;
  }

  var carouselImg = document.querySelector(".carousel-image");
  carouselImg.src = carouselImages[carouselIndex];
}

// Event listeners para os botões de navegação do carrossel
var prevBtn = document.querySelector(".prev-btn");
prevBtn.addEventListener("click", function () {
  changeImage(-1);
});

var nextBtn = document.querySelector(".next-btn");
nextBtn.addEventListener("click", function () {
  changeImage(1);
});