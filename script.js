        // Navbar functions 

const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");
const rightMenu = document.querySelector(".right");
const menuOverlay = document.getElementById("menu-overlay");


menuOpenButton.addEventListener("click", () => {
    rightMenu.classList.add("active");
    menuOverlay.classList.add("active");
});


menuCloseButton.addEventListener("click", () => {
    rightMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});


menuOverlay.addEventListener("click", () => {
    rightMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});

// ================Read-more-and-Read-less-functionality===========
const readMoreBtn = document.getElementById("read-more-btn")
const moreAbout = document.getElementById("more-about")

readMoreBtn.addEventListener("click", () => {
    moreAbout.classList.toggle("hidden-about")

    if (moreAbout.classList.contains("hidden-about")) {
        readMoreBtn.textContent = "Read More"
    }

    else {
        readMoreBtn.textContent = "Read Less"
    }
})