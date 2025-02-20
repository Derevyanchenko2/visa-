// burger-menu
document.querySelector(".open-menu-js").addEventListener("click", function() {
    var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
    mobileMenuOverlay.classList.add("open");
    document.body.style.overflowX = "hidden";
  });
  
  document.querySelector(".mobileMenu-close").addEventListener("click", function() {
    var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
    mobileMenuOverlay.classList.remove("open");
    document.body.style.overflowX = "auto";
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



  const links = document.querySelectorAll('.header-link');

  function smoothScrollTo(target) {
      const start = window.scrollY;
      const distance = target.offsetTop - start;
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

  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();

          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              smoothScrollTo(targetElement);
          }
      });
  });


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
        delay: 1500, // Интервал между слайдами (3 секунды)
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
    slidesPerView: 'auto', 
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
  