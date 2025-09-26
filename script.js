function generateQRCode() {
  const isDark = document.body.classList.contains("dark");
  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), {
    text: "https://www.johndoe.dev",
    width: 80,
    height: 80,
    colorDark : isDark ? "#ffffff" : "#000000",
    colorLight : isDark ? "#1a1a1a" : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}

function toggleMode() {
  document.body.classList.toggle("dark");
  const btn = document.querySelector(".toggle-btn");
  btn.textContent = document.body.classList.contains("dark") ? "☀ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  generateQRCode();
}

window.onload = function() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
    document.querySelector(".toggle-btn").textContent = "☀ Light Mode";
  }
  generateQRCode();
}
