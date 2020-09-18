export const initKonamiCode = () => {
  console.log("🎉 Enter the Konami Code to see something cool 🎉")

  const keysPressed = [];
  const secretSeq = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  const secretCode = secretSeq.join("");
  const flashlight = document.querySelector('.js-flashlight');

  window.addEventListener('keyup', (e) => {
    keysPressed.push(e.key);
    console.log(keysPressed);
    keysPressed.splice(-secretSeq.length - 1, keysPressed.length - secretSeq.length);
    if (keysPressed.join('').includes(secretCode)) {
      console.log('🔦 Dark Mode All Day All Night 🌌');
      // Select root variables and swap background and primary colors
      document.documentElement.style.setProperty("--background", "#101010");
      document.documentElement.style.setProperty("--primary", "#F9F9F9");
      // Swap the mango
      document.querySelector(".landing-page__right img").src = "https://res.cloudinary.com/nico1711/image/upload/c_scale,h_350/v1599485051/__White_Outline_Full_Colour_-_Icon_Only_rzmtlr.png"
      // Add glow to flashlight
      let flickers = 0;
      let interval = setInterval(() => {
        flickers++;
        flashlight.classList.toggle('lit');
        if (flickers>=5) clearInterval(interval);
      }, 300);
    }
  })

  flashlight.addEventListener('click', () => {
    flashlight.style.pointerEvents = 'none'
    const konamiNodes = document.querySelectorAll('.js-browser-konami-code span');
    const tl = gsap.timeline();
    tl.to(konamiNodes, { autoAlpha: 1, display: 'inline', stagger: 0.3 });
    tl.to(konamiNodes, 3, { autoAlpha: 1, display: 'none'});
    tl.eventCallback("onComplete", () => {
      flashlight.style.pointerEvents = 'all'
    })
  });
}

