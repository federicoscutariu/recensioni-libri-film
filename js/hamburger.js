let hamburgerCheckbox = document.querySelector(".hamburger input");
let mobileSubnav = document.querySelector(".mobile-subnav");

hamburgerCheckbox.addEventListener("change", function () {
    mobileSubnav.classList.toggle("active", hamburgerCheckbox.checked);
    mobileSubnav.style.top = hamburgerCheckbox.checked ? "69px" : "-200px";
});