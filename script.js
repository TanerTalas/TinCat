document.addEventListener("DOMContentLoaded", () => {
  // ******************** Phone ********************
  const phone = document.querySelector(".phone");
  const screen = document.querySelector(".phoneScreenOpen");

  // Phone show, screen open and close button clicked
  if (phone) {
    setTimeout(() => {
      phone.classList.add("show");
    }, 300);

    setTimeout(() => {
      closeButton.classList.toggle("clicked");
      setTimeout(() => {
        closeButton.classList.toggle("clicked");
      }, 200);
      screen.classList.add("open");
    }, 1600);
  }
  // Phone - close button
  const closeButton = document.querySelector(".closeButton");

  closeButton.addEventListener("click", () => {
    screen.classList.toggle("open");
    closeButton.classList.toggle("clicked");
    setTimeout(() => {
      closeButton.classList.toggle("clicked");
    }, 200);
  });
  
  // ******************** Scrolling ********************
  const header = document.querySelector(".header-container");
  const navbar = document.querySelector("nav");
  const logo = document.querySelector(".logo");
  const minScale = 0.8;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = header.offsetHeight - 64;
    // play with opactiy of header-container while scrolling
    let opacity = Math.max(0, Math.min(1, 1 - scrollY / maxScroll));
    header.style.opacity = opacity;
    // scale header-container while scrolling
    const progress = Math.min(scrollY / maxScroll, 1); // 0-1 arası
    const scale = 1 - (1 - minScale) * progress;
    header.style.transform = `scale(${scale})`;
    // remove navbar-dark from nav element after maxScroll
    if (scrollY >= maxScroll) {
      navbar.classList.remove("navbar-dark");
      navbar.classList.add("navbar-light");
      logo.classList.add("darkLogo");
    } else {
      navbar.classList.add("navbar-dark");
      navbar.classList.remove("navbar-light");
      logo.classList.remove("darkLogo");
    }
  });
});
