 const usernameInput = document.getElementById("usser");
const emailInput = document.getElementById("gmail");
const passwordInput = document.getElementById("pass");
const agreeCheckbox = document.getElementById("checkbox");
const registerButton = document.getElementById("submit");

registerButton.addEventListener("click", function(event) {
  if (!usernameInput.value || !emailInput.value || !passwordInput.value || !agreeCheckbox.checked) {
    alert("Mohon lengkapi semua kolom dan centang kotak persetujuan!");
    event.preventDefault();
  }else if (passwordInput.value.length <= 5) {
    alert("Password harus lebih dari 5 huruf!");
    event.preventDefault(); 
  }


});