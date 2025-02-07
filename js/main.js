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

  // Функция для плавной прокрутки
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


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    speed: 800, 

    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    },
});
