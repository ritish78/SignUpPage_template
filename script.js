const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const confirmPasswordSpan = document.getElementById('confirmPasswordSpan');
confirmPasswordSpan.style.opacity = 0;

confirmPassword.addEventListener("input", () => {
    if (!password.value.trim()) {
        confirmPasswordSpan.style.opacity = 0;
        return;
    }
    
    if (password.value.trim() === confirmPassword.value.trim()) {
        confirmPasswordSpan.style.opacity = 0;
    } else {
        confirmPasswordSpan.style.opacity = 1;
    }
})


password.addEventListener("input", () => {
    if (!confirmPassword.value.trim()) {
        confirmPasswordSpan.style.opacity = 0;
        return;
    }

    if (password.value.trim() === confirmPassword.value.trim()) {
        confirmPasswordSpan.style.opacity = 0;
    } else {
        confirmPasswordSpan.style.opacity = 1;
    }
})