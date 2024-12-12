const emailEntered = document.querySelector(".email-entered");
let email = localStorage.getItem("email");
const dismissMsgBtn = document.querySelector(".dismiss-msg-btn")
    
emailEntered.innerHTML = `${email}`;

dismissMsgBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});