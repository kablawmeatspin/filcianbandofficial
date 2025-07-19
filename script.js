const toggleBtn = document.getElementById("theme-toggle");
const logoImg = document.getElementById("filcianlogo-img");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Switch icon on toggle
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

  // Switch logo image
  if (document.body.classList.contains("dark")) {
    logoImg.src = "logo/filcianlogo-dark.png"; // Replace with your dark logo image
  } else {
    logoImg.src = "logo/filcianlogo-light.png"; // Replace with your light logo image
  }
});
