document.addEventListener("DOMContentLoaded", () => {
  const phone = document.querySelector(".phone");
  const screen = document.querySelector(".phoneScreenOpen");

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

  const closeButton = document.querySelector(".closeButton");

  closeButton.addEventListener("click", () => {
    screen.classList.toggle("open");
    closeButton.classList.toggle("clicked");
    setTimeout(() => {
      closeButton.classList.toggle("clicked");
    }, 200);
  });
});
