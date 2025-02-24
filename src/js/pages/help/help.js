import '../../../scss/components/pages/help/help.scss';

/*--------------------Add Active to item list------------------*/
document.querySelectorAll(".list a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelectorAll(".list a").forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        let target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: "smooth"
            });
        }
    });
});

/*-----------------------show search-box------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.querySelector(".icon-search");
    const inputSearch2 = document.querySelector(".input-search2");
    const overlay = document.querySelector(".overlay");

    const toggleSearchBox = () => {
        inputSearch2.classList.toggle("active");
        overlay.classList.toggle("active");
    };

    searchIcon?.addEventListener("click", () => {
        if (window.innerWidth <= 425) {
            inputSearch2.classList.add("active");
            overlay.classList.add("active");
        }
    });

    overlay?.addEventListener("click", () => {
        if (inputSearch2.classList.contains("active")) {
            inputSearch2.classList.remove("active");
            overlay.classList.remove("active");
        }
    });

    const checkScreenSize = () => {
        if (window.innerWidth <= 425) {
            inputSearch2.classList.remove("active");
        }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});
