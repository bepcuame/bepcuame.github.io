// script.js
window.onscroll = function() {
    var header = document.getElementById("main-header");
    if (window.scrollY > 50) {
        header.classList.remove("transparent");
        header.classList.add("opaque");
    } else {
        header.classList.remove("opaque");
        header.classList.add("transparent");
    }
};

// footer
const currentYear = new Date().getFullYear();
// Set the current year in the HTML element
document.getElementById("currentYear").textContent = currentYear;

// recipe
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// birthday
const today = new Date();
const month = today.getMonth(); // 0 for January, 1 for February, ..., 9 for October
const day = today.getDate(); // Day of the month

// Get the video element
const videoElement = document.getElementById("bgVideo");
const videoSource = document.getElementById("videoSource");

// Change the video source if today is October 18
if (month === 9 && day === 18) { // October is month 9
    videoSource.src = "resources\\birthday.mp4"; // Change to the new video source
    console.log("Changed video source to newVideo.mp4");
} else {
    videoSource.src = "resources\\introVideo.mp4"; // Ensure default video is set on other days
    console.log("Using default video source: introVideo.mp4");
}

videoElement.load();