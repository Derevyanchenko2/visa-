// burger-menu
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".overlay");
    const body = document.body;

    function toggleMenu() {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
        body.classList.toggle("lock");
    }

    burger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
});



document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".header-item");
    let dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", function () {
        dropdownMenu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function (event) {
        if (!dropdownMenu.contains(event.relatedTarget)) {
            dropdownMenu.style.display = "none";
        }
    });

    dropdownMenu.addEventListener("mouseleave", function (event) {
        if (!dropdown.contains(event.relatedTarget)) {
            dropdownMenu.style.display = "none";
        }
    });

    dropdownMenu.addEventListener("mouseenter", function () {
        dropdownMenu.style.display = "block";
    });
});



document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            smoothScrollTo(targetElement);
        }
    });
});

function smoothScrollTo(target) {
    const start = document.documentElement.scrollTop || document.body.scrollTop;
    const distance = target.getBoundingClientRect().top;
    const duration = 1000;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo(0, start + distance * progress);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}


let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
    event.addEventListener("click", () => {
        // Toggle active class
        event.classList.toggle("active");

        const answer = event.querySelector('.accordion__answer');
        if (event.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px'; 
        } else {
            answer.style.maxHeight = '0';
        }
    });
});

const swiper = new Swiper('.reviews-swiper', {
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 900,
    loop: true,

    autoplay: {
        delay: 3000, // Интервал между слайдами (3 секунды)
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // Останавливает autoplay при наведении
    },

    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    },
});



const JobSwiper = new Swiper('.job-cards--mob', {
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    slidesPerView: '1', 
    spaceBetween: 20,
    speed: 900,
    loop: false,
    
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  
    breakpoints: {
  
      768: {
        slidesPerView: 1, 
      },
    },
  });
  