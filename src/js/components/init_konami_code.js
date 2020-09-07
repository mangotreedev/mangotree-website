export const initKonamiCode = () => {
  console.log("🎉 Enter the Konami Code to see something cool 🎉")

  const keysPressed = [];
  const secretCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"].join("");

  window.addEventListener('keyup', (e) => {
    keysPressed.push(e.key);
    console.log(keysPressed);
    keysPressed.splice(-secretCode.length - 1, keysPressed.length - secretCode.length);
    if (keysPressed.join('').includes(secretCode)) {
      console.log('🔦 Dark Mode All Day All Night 🌌');
      // Select root variables and swap background and primary colors
      document.documentElement.style.setProperty("--background", "#101010");
      document.documentElement.style.setProperty("--primary", "#F9F9F9");
      document.querySelector(".landing-page__right img").src = "https://res.cloudinary.com/nico1711/image/upload/c_scale,h_350/v1599485051/__White_Outline_Full_Colour_-_Icon_Only_rzmtlr.png"
    }
  })
}

