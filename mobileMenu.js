const navSlide = () => {
  const menuMobile = document.querySelector(".menu-button");
  const nav = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav__links a");
  const overlay = document.querySelector(".overlay");

  menuMobile.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.5}s `;
      }
    });
    menuMobile.classList.toggle("open");
    overlay.classList.toggle("hidden");
    document.querySelector("body").classList.toggle("overflow");
  });
};

navSlide();
