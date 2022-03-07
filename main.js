// declared the hamburger variable corresponding to the tag "i" fa-bars
const hamburger = document.querySelector(".fa-bars");
// declared the back variable corresponding to the tag "i" fa-times
const back = document.querySelector(".fa-times");
// declared the variable corresponding to the hambuger menu
const menuOnOff = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", function () {
    // class display block
    menuOnOff.classList.toggle("active");
});

back.addEventListener("click", function () {
    // class display block
    menuOnOff.classList.toggle("active");
});