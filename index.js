const navbar = document.querySelector(".navbar");
const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click",function(e){
    console.log("clicked");
    navLinks.classList.toggle("toggled");
    navbar.classList.toggle("toggled");
    toggleButton.classList.toggle("toggled");
})