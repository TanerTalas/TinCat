document.addEventListener("DOMContentLoaded", () => {
  // ******************** Navbar section observer ********************
  const sections = document.querySelectorAll(
    "#feature-section, #safety-section, #pricing-section, #support-section",
  );

  const navLinks = document.querySelectorAll(".js-nav-link");
  const homeLink = document.querySelector(".js-nav-home");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;
        const link = document.querySelector(`a[href="#${id}"]`);

        navLinks.forEach((l) => l.classList.remove("active"));
        homeLink.classList.remove("active");
        link.classList.add("active");
      });
    },
    {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    },
  );

  sections.forEach((section) => sectionObserver.observe(section));

  window.addEventListener("scroll", () => {
    if (window.scrollY < 50) {
      navLinks.forEach((l) => l.classList.remove("active"));
      homeLink.classList.add("active");
    }
  });

  // ******************** Navigation download button and header download buttons ********************
  const trigger = document.querySelector(".js-download-trigger");
  const downloadButtons = document.querySelectorAll(".download-btn");

  trigger.addEventListener("click", () => {
    setTimeout(() => {
      downloadButtons.forEach((btn) => {
        btn.classList.add("is-pulsing");
        setTimeout(() => {
          btn.classList.remove("is-pulsing");
        }, 400);
      });
    }, 400);
  });

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
  const pricingSection = document.querySelector("#pricing-section");
  const supportSection = document.querySelector("#support-section");
  const minScale = 0.6;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = header.offsetHeight - 64;

    // opacity header
    let opacity = Math.max(0, Math.min(1, 1 - scrollY / maxScroll));
    header.style.opacity = opacity;

    // scale header
    const progress = Math.min(scrollY / maxScroll, 1);
    const scale = 1 - (1 - minScale) * progress;
    header.style.transform = `scale(${scale})`;

    // navigation navbar-dark class add or remove
    const pricingTop = pricingSection.getBoundingClientRect().top;
    const supportTop = supportSection.getBoundingClientRect().top;

    if (pricingTop < 50) {
      navbar.classList.add("navbar-dark");
      navbar.classList.remove("navbar-light");
      logo.classList.remove("darkLogo");
    } else if (scrollY >= maxScroll) {
      navbar.classList.remove("navbar-dark");
      navbar.classList.add("navbar-light");
      logo.classList.add("darkLogo");
    } else {
      navbar.classList.add("navbar-dark");
      navbar.classList.remove("navbar-light");
      logo.classList.remove("darkLogo");
    }
    // DÜZELTİLEBİLİR!!!!!!
    if (supportTop < 50) {
      navbar.classList.remove("navbar-dark");
      navbar.classList.add("navbar-light");
      logo.classList.add("darkLogo");
    }
  });

  // ******************** Features & Fade ********************
  const animatedElements = document.querySelectorAll(".featureItem, .willFade");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // featureItem pop animation
          if (el.classList.contains("featureItem")) {
            setTimeout(() => {
              el.classList.add("feature-pop");
            }, index * 300);
          }

          // willFade, fade-scale animation
          if (el.classList.contains("willFade")) {
            el.classList.add("fade-scale");
          }

          observer.unobserve(el); // Will only be triggered once
        }
      });
    },
    { threshold: 0.5 },
  );

  animatedElements.forEach((el) => observer.observe(el));

  // ******************** Testimonial - Brands Loop (npm) ********************
  const track = document.querySelector(".tag-track");
  const items = Array.from(track.children);

  // Cloning until the viewport is full
  let trackWidth = track.scrollWidth;
  const viewportWidth = window.innerWidth;

  while (trackWidth < viewportWidth * 2) {
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
    trackWidth = track.scrollWidth;
  }

  // GSAP infinite loop (NO GAP)
  gsap.to(track, {
    x: () => `-${track.scrollWidth / 2}px`,
    duration: 30,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => {
        return parseFloat(x) % (track.scrollWidth / 2);
      }),
    },
  });
});
