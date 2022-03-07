const hamburger = document.querySelector(".fa-bars");
hamburger.addEventListener("click", function () {
    let menuOn = document.querySelector(".hamburger-menu");
    menuOn.style.display = "block";
});

const back = document.querySelector(".fa-times");
back.addEventListener("click", function () {
    let menuOff = document.querySelector(".hamburger-menu");
    menuOff.style.display = "none";
});