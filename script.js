// JavaScript to hide the preloader when the page is fully loaded
window.addEventListener("load", function () {
    const main = document.querySelector(".main");
    main.style.opacity = 0;
    setTimeout(() => {
        main.style.display = "none";
    }, 500);
});
