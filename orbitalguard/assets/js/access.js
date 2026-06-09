const loginForm = document.querySelector(".login-form");
const loginError = document.querySelector(".login-error");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    loginError.textContent = "Usuário não encontrado.";
});