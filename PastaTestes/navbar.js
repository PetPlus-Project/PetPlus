const navbar = document.querySelector("#navbar");

let lastScroolTop = 0;

window.addEventListener(
    "scroll",
    () => {
        var {pageYOffset} = window;
        if (pageYOffset > lastScroolTop) {
            navbar.classList.remove("visible");
        } else if(pageYOffset < lastScroolTop) {
            navbar.classList.add("visible");
        }
        lastScroolTop = pageYOffset <= 0 ? 0 : pageYOffset;
    },
    {passive: true}
);