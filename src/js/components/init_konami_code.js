export const initKonamiCode = () => {
  const keysPressed = [];
  const secretSeq = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  const secretCode = secretSeq.join("");
  const flashlight = document.querySelector('.js-flashlight');

  const konamiMode = () => {
    console.log('🔦 Dark Mode All Day All Night 🌌');
    // Select root variables and swap background and primary colors
    document.documentElement.style.setProperty("--background", "#101010");
    document.documentElement.style.setProperty("--primary", "#F9F9F9");
    // Swap the mango
    if (document.querySelector(".landing-page__right img")) {
      document.querySelector(".landing-page__right img").src = "https://res.cloudinary.com/nico1711/image/upload/c_scale,h_350/v1599485051/__White_Outline_Full_Colour_-_Icon_Only_rzmtlr.png"
    }
    if (document.querySelector(".landing-page__right img")) {
      document.querySelector(".navbar-menu__logo").src = "https://res.cloudinary.com/nico1711/image/upload/v1600699086/__White_Outline_-_Icon_Only_zd9scc.png"
    }
    // Add glow to flashlight
    let flickers = 0;
    let interval = setInterval(() => {
      flickers++;
      flashlight.classList.toggle('lit');
      if (flickers >= 5) clearInterval(interval);
    }, 300);
    // Disable the flashlight
    flashlight.style.pointerEvents = 'none';
  }

  window.addEventListener('keyup', (e) => {
    keysPressed.push(e.key);
    console.log(keysPressed);
    keysPressed.splice(-secretSeq.length - 1, keysPressed.length - secretSeq.length);
    if (keysPressed.join('').includes(secretCode)) { konamiMode() }
  })

  if (flashlight) {
    console.log("🎉 Enter the Konami Code to see something cool 🎉")
    flashlight.addEventListener('click', () => {
      flashlight.style.pointerEvents = 'none';
      const konamiNodes = document.querySelectorAll('.js-browser-konami-code span');
      const tl = gsap.timeline();
      tl.to(konamiNodes, { autoAlpha: 1, display: 'inline', stagger: 0.3 });
      tl.to(konamiNodes, 3, { autoAlpha: 1, display: 'none'});
      tl.eventCallback("onComplete", () => {
        flashlight.style.pointerEvents = 'all';
      })
    });

    const mobileNavbarBtn = document.querySelector('.js-navbar-dark');
    mobileNavbarBtn.addEventListener('click', () => konamiMode());
  }

}

