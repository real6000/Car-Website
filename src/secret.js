function checkSpecialPassword(){
    const input=document.getElementById("specialPassword").value.trim();
    const error = document.getElementById("specialError");
    const overlay = document.getElementById("loadingOverlay");

    if(input==="veryspecialpassword"){
        error.style.display = "none";
        // Show loading overlay
        overlay.classList.remove("hidden");

        setTimeout(() => {
            window.location.href = "cars.html";
        }, 3000); // 3 seconds wait
    }else{
        error.textContent = "❌ Invalid spcial password.";
        error.style.display = "block";
    }
}