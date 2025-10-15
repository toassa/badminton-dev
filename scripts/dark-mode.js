const toggleBtn = document.getElementById("toggle-dark");
const iconTheme = document.getElementById("icon-theme");

// Função para aplicar tema
function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    iconTheme.textContent = "light_mode";
  } else {
    document.body.classList.remove("dark-mode");
    iconTheme.textContent = "dark_mode";
  }
  localStorage.setItem("theme", theme);
}

// Carrega tema salvo
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

// Alterna tema ao clicar
toggleBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  setTheme(newTheme);
});
