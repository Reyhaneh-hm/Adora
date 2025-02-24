import '../../../scss/components/pages/help/help.scss';

/*--------------------------------------------------------*/
// document.querySelectorAll(".list a").forEach(link => {
//     link.addEventListener("click", function (e) {
//         e.preventDefault();  

//         document.querySelectorAll(".list a").forEach(item => {
//             item.classList.remove("active");
//         });

//         this.classList.add("active");

//         let target = document.querySelector(this.getAttribute("href"));
//         if (target) {
//             window.scrollTo({
//                 top: target.offsetTop - 20,
//                 behavior: "smooth"
//             });
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".list a");
    const sections = document.querySelectorAll(".content");

    // ✅ تابع برای حذف و اضافه کردن کلاس active
    function activateLink(targetId) {
        links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${targetId}`) {
                link.classList.add("active");
            }
        });
    }

    // ✅ مدیریت کلیک روی آیتم‌ها
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // جلوگیری از رفتار پیش‌فرض

            // حذف active از همه لینک‌ها و اضافه کردن به مورد کلیک‌شده
            links.forEach(item => item.classList.remove("active"));
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

    // ✅ مدیریت اسکرول و تشخیص بخش در حال نمایش
    function handleScroll() {
        let scrollPosition = window.scrollY + window.innerHeight / 3; // نقطه‌ای که می‌خوایم چک کنیم

        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activateLink(section.id);
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
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
