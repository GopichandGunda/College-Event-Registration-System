const registrationForm = document.querySelector('#registration-form');
const messageBox = document.querySelector('#form-message');
const registrationKey = 'collegeEventRegistrations';

function getRegistrations() {
  try {
    return JSON.parse(localStorage.getItem(registrationKey)) || [];
  } catch (error) {
    return [];
  }
}

function showMessage(message, type) {
  messageBox.textContent = message;
  messageBox.className = `form-message ${type}`;
}

function validateField(field) {
  const value = field.value.trim();
  let error = '';
  if (!value) error = 'This field is required.';
  if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Enter a valid email address.';
  if (field.id === 'phone' && value && !/^\d{10}$/.test(value.replace(/\D/g, ''))) error = 'Enter a 10-digit phone number.';
  const errorText = field.parentElement.querySelector('.error-text');
  field.classList.toggle('invalid', Boolean(error));
  errorText.textContent = error;
  return !error;
}

// Validates every input before saving one complete registration.
function validateForm() {
  const fields = [...registrationForm.querySelectorAll('input, select')];
  return fields.map(validateField).every(Boolean);
}

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  messageBox.className = 'form-message';
  if (!validateForm()) {
    showMessage('Please correct the highlighted fields before submitting.', 'error');
    return;
  }
  const formData = new FormData(registrationForm);
  const registration = Object.fromEntries(formData.entries());
  registration.id = Date.now().toString();
  registration.createdAt = new Date().toISOString();
  const registrations = getRegistrations();
  registrations.push(registration);
  localStorage.setItem(registrationKey, JSON.stringify(registrations));
  registrationForm.reset();
  showMessage('Registration successful. Your place has been saved on this device.', 'success');
  window.scrollTo({ top: registrationForm.offsetTop - 30, behavior: 'smooth' });
});

registrationForm.querySelectorAll('input, select').forEach((field) => field.addEventListener('blur', () => validateField(field)));
