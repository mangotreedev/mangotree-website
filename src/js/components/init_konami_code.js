export const initKonamiCode = () => {
  console.log("🎉 Enter the Konami Code to see something cool 🎉")

  const keysPressed = [];
  const secretCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"].join("");

  window.addEventListener('keyup', (e) => {
    keysPressed.push(e.key);
    console.log(keysPressed)
    keysPressed.splice(-secretCode.length - 1, keysPressed.length - secretCode.length);
    if (keysPressed.join('').includes(secretCode)) {
       console.log('Ding Ding');
     }
  })
}
