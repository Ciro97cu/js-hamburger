// declared the hamburger variable corresponding to the tag "i" fa-bars
const hamburger = document.querySelector(".fa-bars");
// added a click event to the hamburger variable
hamburger.addEventListener("click", function () {
    // declared the variable corresponding to the hambuger menu to be displayed
    let menuOn = document.querySelector(".hamburger-menu");
    // display block
    menuOn.style.display = "block";
});
// declared the back variable corresponding to the tag "i" fa-times
const back = document.querySelector(".fa-times");
// added a click event to the back variable
back.addEventListener("click", function () {
    // declared the variable corresponding to the hambuger menu to be made to disappear
    let menuOff = document.querySelector(".hamburger-menu");
    // display none
    menuOff.style.display = "none";
});