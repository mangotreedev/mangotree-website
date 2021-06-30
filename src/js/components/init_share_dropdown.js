export const initShareDropdown = () => {
  const shareBtns = document.querySelectorAll(".js-share-btn");
  const shareMenu = document.querySelector(".js-share-menu");

  shareBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      btn.appendChild(shareMenu);
      shareMenu.classList.add("active");

      const shareMenuHight = shareMenu.getBoundingClientRect().height;
      const btnYPos = btn.getBoundingClientRect().y;

      if (window.innerHeight < (btnYPos + shareMenuHight)) {
        shareMenu.classList.add("top");
      }
      document.addEventListener("click", closeMenu)
    })
  })

  function closeMenu() {
    document.removeEventListener("click", closeMenu)
    shareMenu.classList.remove("active");
    shareMenu.classList.remove("top");
  }
}

