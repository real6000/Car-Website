document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('error-msg');
    const popup = document.getElementById('success-popup');

    //just some random database for test
    const userDatabase ={
        "alice": "wonderland",
        "bob": "builder",
        "charlie": "chocolate",
        "zack": "magicboy",
        "admin": "admin123" // the super ultra secret admin
    };

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const user = usernameInput.value.trim();
        const pass = passwordInput.value.trim();

        if (!user || !pass) {
            errorMsg.textContent = 'Please fill in both fields.';
            errorMsg.style.display = 'block';
            return;
        }
        
          if (userDatabase[user] && userDatabase[user] === pass) {
            errorMsg.style.display = 'none';
            if (user === 'admin') {
                window.location.href = 'secret.html';
            } else {
                window.location.href = 'cars.html';
            }
        } else {
            errorMsg.textContent = '❌ Invalid username or password.';
            errorMsg.style.display = 'block';
        }
    });
});
