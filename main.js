//carousel
document.addEventListener("DOMContentLoaded", function () {
  const navDots = document.querySelectorAll(".nav-dot");
  const carousel = document.querySelector(".carousel");
  const headerMenu = document.querySelector(".header-menu__nav");
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-track__slide");
  const slideWidth = slides[0].offsetWidth;

  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;

  navDots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      goToSlide(index);
      changeHeaderMenuColor(index);
    });
  });

  track.addEventListener("touchstart", touchStart);
  track.addEventListener("touchmove", touchMove);
  track.addEventListener("touchend", touchEnd);

  function touchStart(event) {
    isDragging = true;
    startX = event.touches[0].clientX;
    event.preventDefault();
  }

  function touchMove(event) {
    if (!isDragging) return;
    const currentPosition = event.touches[0].clientX;
    const diff = startX - currentPosition;
    const currentOffset = -currentIndex * slideWidth;
    track.style.transform = `translateX(${currentOffset - diff}px)`;
    event.preventDefault();
  }

  function touchEnd() {
    isDragging = false;
    const currentPosition = event.changedTouches[0].clientX;
    const diff = startX - currentPosition;
    if (Math.abs(diff) > slideWidth / 3) {
      if (diff > 0 && currentIndex < slides.length - 1) {
        currentIndex += 1;
      } else if (diff < 0 && currentIndex > 0) {
        currentIndex -= 1;
      }
    }
    goToSlide(currentIndex);
    changeHeaderMenuColor(currentIndex);
  }

  function goToSlide(index) {
    currentIndex = index;
    const offset = -index * slideWidth;
    track.style.transform = `translateX(${offset}px)`;

    navDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Функция для изменения цвета фона .header-menu
  function changeHeaderMenuColor(index) {
    switch (index) {
      case 1:
        headerMenu.style.backgroundColor = "#F49894";

        break;
      case 2:
        headerMenu.style.backgroundColor = "#36363E";
        carousel.style.backgroundColor = "#36363E";
        break;
      default:
        // Возврат к стандартному цвету фона
        headerMenu.style.backgroundColor = "";
        carousel.style.backgroundColor = "#918be4"; // или любой другой стандартный цвет
        break;
    }
  }
});

//burger

const btn_openMenu = document.querySelector(".header-menu__button");
const btn_closeMenu = document.querySelector(".burger-menu__btn");
const text_closeMenu = document.querySelector(".burger-list__close");

const menu = document.querySelector(".burger");

btn_openMenu.addEventListener("click", () => {
  menu.style.left = "0";
});

btn_closeMenu.addEventListener("click", () => {
  menu.style.left = "-100%";
});
text_closeMenu.addEventListener("click", () => {
  menu.style.left = "-100%";
});

//Dropdown 1
const btn_dropdowns = document.querySelectorAll(".shipping__arrow");

btn_dropdowns.forEach((btn_dropdown, index) => {
  btn_dropdown.addEventListener("click", () => {
    const dropdown = btn_dropdown
      .closest(".shipping-block")
      .querySelector(".shipping-block__dropdown");
    const block = btn_dropdown.closest(".shipping-block");
    const shipping = block.parentElement;

    dropdown.classList.toggle("open__dropdown");
    shipping.classList.toggle("open__dropdown");
    btn_dropdown.classList.toggle("open__dropdown");

    if (dropdown.classList.contains("open__dropdown")) {
      block.style.borderBottomRightRadius = "0";
      block.style.borderBottomLeftRadius = "0";
      if (index === 0) {
        block.style.marginBottom = "130px";
      }
      if (index === 1) {
        block.style.marginBottom = "80px";
      }
      if (index === 2) {
        block.style.marginBottom = "80px";
      }
    } else {
      block.style.borderBottomRightRadius = "10px";
      block.style.borderBottomLeftRadius = "10px";
      if (index === 0) {
        block.style.marginBottom = "14px";
      }
      if (index === 1) {
        block.style.marginBottom = "14px";
      }
      if (index === 2) {
        block.style.marginBottom = "14px";
      }
    }
  });
});

//Footer
const btn_footer = document.querySelector(".footer__button");
const footer_text = document.querySelector(".footer-text__all");

btn_footer.addEventListener("click", () => {
  if (footer_text.classList.contains("footer__open")) {
    footer_text.classList.remove("footer__open");
    btn_footer.textContent = "Read More";
  } else {
    footer_text.classList.add("footer__open");
    btn_footer.textContent = "Read Less";
  }
});

//scrollToFooter
document.addEventListener("DOMContentLoaded", function () {
  const scrollToFooter = document.getElementById("scrollToFooter");
  const footer = document.getElementById("footer");

  scrollToFooter.addEventListener("click", function () {
    footer.scrollIntoView({ behavior: "smooth" });
  });
});
