function redirect(url) {
  window.location.href = url;
}

let mobileNavigation = document.querySelector(".mobile-navigation");
let mobileNavigationItems = Array.from(mobileNavigation.children);
let selectionCircle = document.querySelector(".selection-circle");

mobileNavigationItems.forEach((item) => {
  item.addEventListener("click", function () {
    selectionCircle.style.display = "block";

    let clickedIndex = mobileNavigationItems.indexOf(item);
    let leftValue = 10 + (clickedIndex - 1) * 50;

    selectionCircle.style.left = leftValue + "px";

    mobileNavigationItems.forEach((item2) => {
      item2.classList.remove("active");
    });

    item.classList.add("active");
  });
});

window.addEventListener("DOMContentLoaded", function () {
    mobileNavigationItems[1].classList.add("active");
    mobileNavigation.style.bottom = "10px";
    this.setTimeout(function () {
        this.document.body.style.overflow = "scroll";
    }, 500);
})