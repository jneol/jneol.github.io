function disableOverlay() {
  document.getElementById("listing-overlay").style.display = "none";
  document.getElementById("listing-1").style.display = "block";
}

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const loginbox = document.getElementById('loginbox');

signUpButton.addEventListener('click', () => {
  loginbox.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  loginbox.classList.remove("right-panel-active");
});

function tbc() {
  alert("Feature not implemented yet.")
}

// Get the modal
var modal = document.getElementById("loginBox");

// Get the button that opens the modal
var btn = document.getElementById("login");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
