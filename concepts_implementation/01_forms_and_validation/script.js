/**
 * Complete Form Validation Logic
 * Covers:
 * 1. event.preventDefault() to stop page reloads
 * 2. Regular Expressions (Regex) for Email and Indian Phone Numbers
 * 3. Range checking for Age (18 - 99)
 * 4. Password validation and toggle visibility
 * 5. Dynamic feedback with error messages & color changes
 */

// 1. Grab DOM element references
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("fullName");
const emailInput = document.getElementById("userEmail");
const phoneInput = document.getElementById("userPhone");
const passwordInput = document.getElementById("userPassword");
const ageInput = document.getElementById("userAge");
const citySelect = document.getElementById("userCity");
const termsCheckbox = document.getElementById("termsAgree");
const togglePasswordBtn = document.getElementById("togglePasswordBtn");

// 2. Helper Functions for Showing/Clearing Errors
function showError(inputElement, errorElementId, message) {
  const errorElement = document.getElementById(errorElementId);
  if (inputElement) {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
  errorElement.textContent = message;
}

function clearError(inputElement, errorElementId) {
  const errorElement = document.getElementById(errorElementId);
  if (inputElement) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  }
  errorElement.textContent = "";
}

// 3. Validation Logic per Field
function validateName() {
  const value = nameInput.value.trim();
  const nameRegex = /^[A-Za-z\s]+$/;

  if (value === "") {
    showError(nameInput, "nameError", "Full Name is required.");
    return false;
  } else if (value.length < 3) {
    showError(nameInput, "nameError", "Name must be at least 3 characters.");
    return false;
  } else if (!nameRegex.test(value)) {
    showError(nameInput, "nameError", "Name can only contain alphabets and spaces.");
    return false;
  }
  clearError(nameInput, "nameError");
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  // Standard RFC 5322 compatible email pattern
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (value === "") {
    showError(emailInput, "emailError", "Email address is required.");
    return false;
  } else if (!emailRegex.test(value)) {
    showError(emailInput, "emailError", "Please enter a valid email address (e.g. name@domain.com).");
    return false;
  }
  clearError(emailInput, "emailError");
  return true;
}

function validatePhone() {
  const value = phoneInput.value.trim();
  // Indian 10-digit phone number starting with 6, 7, 8, or 9
  const phoneRegex = /^[6-9]\d{9}$/;

  if (value === "") {
    showError(phoneInput, "phoneError", "Phone number is required.");
    return false;
  } else if (!phoneRegex.test(value)) {
    showError(phoneInput, "phoneError", "Enter a valid 10-digit number starting with 6-9.");
    return false;
  }
  clearError(phoneInput, "phoneError");
  return true;
}

function validatePassword() {
  const value = passwordInput.value;

  if (value === "") {
    showError(passwordInput, "passwordError", "Password is required.");
    return false;
  } else if (value.length < 6) {
    showError(passwordInput, "passwordError", "Password must be at least 6 characters.");
    return false;
  }
  clearError(passwordInput, "passwordError");
  return true;
}

function validateAge() {
  const value = ageInput.value.trim();
  const num = parseInt(value, 10);

  if (value === "") {
    showError(ageInput, "ageError", "Age is required.");
    return false;
  } else if (isNaN(num) || num < 18 || num > 99) {
    showError(ageInput, "ageError", "Age must be between 18 and 99 years.");
    return false;
  }
  clearError(ageInput, "ageError");
  return true;
}

function validateGender() {
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  if (!selectedGender) {
    document.getElementById("genderError").textContent = "Please select your gender.";
    return false;
  }
  document.getElementById("genderError").textContent = "";
  return true;
}

function validateCity() {
  if (citySelect.value === "") {
    showError(citySelect, "cityError", "Please select your city.");
    return false;
  }
  clearError(citySelect, "cityError");
  return true;
}

function validateTerms() {
  if (!termsCheckbox.checked) {
    document.getElementById("termsError").textContent = "You must accept the terms to proceed.";
    return false;
  }
  document.getElementById("termsError").textContent = "";
  return true;
}

// 4. Real-Time Feedback (Event Listeners)
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
passwordInput.addEventListener("input", validatePassword);
ageInput.addEventListener("input", validateAge);
citySelect.addEventListener("change", validateCity);
termsCheckbox.addEventListener("change", validateTerms);

// 5. Password Visibility Toggle
togglePasswordBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    togglePasswordBtn.textContent = "Show";
  }
});

// 6. Form Submission Event
form.addEventListener("submit", (e) => {
  // CRITICAL: Stop browser's default reload
  e.preventDefault();

  // Run all field validations
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isPasswordValid = validatePassword();
  const isAgeValid = validateAge();
  const isGenderValid = validateGender();
  const isCityValid = validateCity();
  const isTermsValid = validateTerms();

  // If all are valid, process submission!
  if (
    isNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isPasswordValid &&
    isAgeValid &&
    isGenderValid &&
    isCityValid &&
    isTermsValid
  ) {
    // Gather values
    const selectedGender = document.querySelector('input[name="gender"]:checked').value;
    const notifications = Array.from(
      document.querySelectorAll('input[name="notifications"]:checked')
    ).map((cb) => cb.value);

    const formData = {
      fullName: nameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      age: ageInput.value.trim(),
      gender: selectedGender,
      city: citySelect.value,
      notifications: notifications.length > 0 ? notifications.join(", ") : "None",
      submittedAt: new Date().toLocaleString()
    };

    // Display formatted preview in modal
    const resultBox = document.getElementById("resultModal");
    const dataContainer = document.getElementById("submittedData");
    dataContainer.innerHTML = `
      <b>Name:</b> ${formData.fullName}<br>
      <b>Email:</b> ${formData.email}<br>
      <b>Phone:</b> ${formData.phone}<br>
      <b>Age:</b> ${formData.age}<br>
      <b>Gender:</b> ${formData.gender}<br>
      <b>City:</b> ${formData.city}<br>
      <b>Notifications:</b> ${formData.notifications}<br>
      <b>Submitted At:</b> ${formData.submittedAt}
    `;

    resultBox.classList.remove("hidden");
    resultBox.scrollIntoView({ behavior: "smooth" });
  }
});

function closeResult() {
  document.getElementById("resultModal").classList.add("hidden");
}
