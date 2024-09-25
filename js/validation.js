document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  document.querySelectorAll(".error-message").forEach((el) => (el.style.display = "none"));

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const tel = document.getElementById("tel").value.trim();
  const refer = document.getElementById("refer").value;
  const message = document.getElementById("message").value.trim();
  const terms = document.getElementById("terms").checked;

  let valid = true;

  if (!name) {
    valid = false;
    document.getElementById("nameError").style.display = "block";
  }

  if (!validateEmail(email)) {
    valid = false;
    document.getElementById("emailError").style.display = "block";
  }

  if (!validatePhone(tel)) {
    valid = false;
    document.getElementById("telError").style.display = "block";
  }

  if (!refer) {
    valid = false;
    document.getElementById("referError").style.display = "block";
  }

  if (!message) {
    valid = false;
    document.getElementById("messageError").style.display = "block";
  }

  if (!terms) {
    valid = false;
    document.getElementById("termsError").style.display = "block";
  }

  if (valid) {
    alert("Form submitted successfully!");
    this.submit(); 
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(phone);
}
