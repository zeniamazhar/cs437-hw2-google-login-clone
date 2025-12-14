function goToPassword() {
  const email = document.getElementById("emailInput").value;

  if (!email) {
    alert("Please enter an email");
    return;
  }

  // Save email temporarily (frontend only)
  localStorage.setItem("email", email);

  // Go to password page
  window.location.href = "password.html";
}
