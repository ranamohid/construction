//slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//slideshow2
var slideInde = 1;
showSlide(slideInde);

function plusSlide(n) {
  showSlide(slideInde += n);
}

function currentSlid(n) {
  showSlide(slideInde = n);
}

function showSlide(n) {
  var i;
  var slides = document.querySelectorAll(".rand .mySlides");
  var dots = document.querySelectorAll(".rand .dot");
  if (n > slides.length) {slideInde = 1}    
  if (n < 1) {slideInde = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideInde-1].style.display = "block";  
  dots[slideInde-1].className += " active";
}


