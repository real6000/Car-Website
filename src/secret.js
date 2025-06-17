function checkSpecialPassword() {
  const input = document.getElementById("specialPassword").value.trim();
  const error = document.getElementById("specialError");
  const overlay = document.getElementById("loadingOverlay");

  if (input === "veryspecialpassword") {
    error.style.display = "none";
    overlay.classList.remove("hidden");

    setTimeout(() => {
      window.location.href = "cars.html";
    }, 3000);
  } else {
    error.textContent = "❌ Incorrect special password.";
    error.style.display = "block";
  }
}