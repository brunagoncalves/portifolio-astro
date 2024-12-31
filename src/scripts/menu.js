function initMobileMenu() {
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const closeButton = document.querySelector("[data-close-button]");
  const backdrop = document.querySelector("[data-backdrop]");

  function toggleMenu() {
    const isOpen = mobileMenu.classList.contains("translate-x-0");

    if (isOpen) {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("-translate-x-full");
      backdrop.classList.add("hidden");
      document.body.style.overflow = "auto";
    } else {
      mobileMenu.classList.remove("-translate-x-full");
      mobileMenu.classList.add("translate-x-0");
      backdrop.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  }

  if (menuButton) menuButton.addEventListener("click", toggleMenu);
  if (closeButton) closeButton.addEventListener("click", toggleMenu);
  if (backdrop) backdrop.addEventListener("click", toggleMenu);

  // Fechar menu ao redimensionar para desktop
  window.addEventListener("resize", () => {
    if (
      window.innerWidth >= 1024 &&
      mobileMenu.classList.contains("translate-x-0")
    ) {
      toggleMenu();
    }
  });
}

// Inicializa o menu quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", initMobileMenu);
