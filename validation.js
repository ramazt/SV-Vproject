function validateName(name) {
  return /^[a-zA-Z]{2,}$/.test(name);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePasswordMatch(pass1, pass2) {
  return pass1 === pass2 && pass1.length >= 6;
}

function validateDOB(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  return !isNaN(birthDate) && birthDate < today;
}

function handleSubmit() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const dob = document.getElementById("dob").value;

  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");

  errorMsg.innerText = "";
  successMsg.innerText = "";

  // Validations
  if (!validateName(firstName) || firstName.length > 10) {
    errorMsg.innerText = "❌ First Name must be at least 2 letters and no more than 10 characters.";
    return false;
  }

  if (!validateName(lastName) || lastName.length > 10) {
    errorMsg.innerText = "❌ Last Name must be at least 2 letters and no more than 10 characters.";
    return false;
  }

  if (!validateEmail(email)) {
    errorMsg.innerText = "❌ Please enter a valid email address.";
    return false;
  }

  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(password)) {
    errorMsg.innerText = "❌ Password must include uppercase, lowercase, number, and symbol.";
    return false;
  }

  if (!validatePasswordMatch(password, confirmPassword)) {
    errorMsg.innerText = "❌ Passwords do not match or are too short.";
    return false;
  }

  if (!validateDOB(dob)) {
    errorMsg.innerText = "❌ Please enter a valid date of birth (not in the future).";
    return false;
  }

  // Save to localStorage (for assignment only)
  const formData = {
    firstName,
    lastName,
    email,
    dob,
    password
  };

  localStorage.setItem("userRegistrationData", JSON.stringify(formData));
  successMsg.innerText = "✅ Verification Successful and Data Saved!";
  return false; // prevent actual form submission
}