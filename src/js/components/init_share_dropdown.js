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


      if (window.innerHeight < (btnYPos + shareMenuHight * 1.1)) {
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

  shareMenu.querySelector(".js-copy-link").addEventListener("click", (event) => {
    const tempElement = document.createElement('input')
    document.body.appendChild(tempElement);
    tempElement.value = window.location.href;
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);

    const tooltip = event.currentTarget.nextElementSibling;
    setTimeout(() => {
      tooltip.classList.add("active");
      setTimeout(() => {
        tooltip.classList.remove("active");
      }, 2500)
    }, 100);
  })
}

