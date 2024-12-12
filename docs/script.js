let emailErrorMsg = document.getElementById("email-error-msg-id");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm() {
    let emailValue = document.getElementById("email-input").value;
    
    if (emailRegex.test(emailValue)) {
        emailErrorMsg.style.display = "none";
        localStorage.setItem("email", emailValue);
        window.location.href = "success.html";
    }

    else {
        emailErrorMsg.style.display = "inline";
    }
}

document.getElementById("subscribe-btn-id").addEventListener("click", (event) => {
    event.preventDefault();
    validateForm();
});