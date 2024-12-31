const darkModeToggle = document.getElementById("dark-mode");
const darkClass = "dark";
const htmlTag = document.querySelector("html");

function applyDarkMode(isDark) {
  htmlTag.classList.toggle(darkClass, isDark);
  htmlTag.setAttribute("data-theme", isDark ? "min-dark" : "min-light");
  const sunIcon = document.querySelector(".feather-sun");
  const moonIcon = document.querySelector(".feather-moon");
  sunIcon.classList.toggle("hidden", !isDark);
  moonIcon.classList.toggle("hidden", isDark);
}

function getCookie(name) {
  const value = `; `;
  const parts = document.cookie.split(value);
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].split("=");
    if (part[0].trim() === name) {
      return part[1];
    }
  }
  return null;
}

function setCookie(name, value, expirationDays) {
  const date = new Date();
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

const isDarkMode = getCookie("darkMode") === "true";
applyDarkMode(isDarkMode);

darkModeToggle.addEventListener("click", () => {
  const isDark = htmlTag.classList.contains(darkClass);
  applyDarkMode(!isDark);
  setCookie("darkMode", !isDark, 30);
});
