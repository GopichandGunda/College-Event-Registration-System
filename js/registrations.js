const registrationKey = 'collegeEventRegistrations';
const listElement = document.querySelector('#registrations-list');
const totalElement = document.querySelector('#total-registrations');
const resultCount = document.querySelector('#result-count');
const searchInput = document.querySelector('#registration-search');
let registrations = loadRegistrations();

function loadRegistrations() {
  try {
    return JSON.parse(localStorage.getItem(registrationKey)) || [];
  } catch (error) {
    return [];
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>\"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#039;' }[character]));
}

// Rebuilds the list from LocalStorage after every search or delete action.
function renderRegistrations(filter = '') {
  const query = filter.toLowerCase().trim();
  const visibleRegistrations = registrations.filter((registration) => [registration.studentName, registration.rollNumber, registration.selectedEvent, registration.department].some((value) => value.toLowerCase().includes(query)));
  totalElement.textContent = registrations.length;
  resultCount.textContent = `${visibleRegistrations.length} result${visibleRegistrations.length === 1 ? '' : 's'}`;
  if (!visibleRegistrations.length) {
    listElement.innerHTML = `<div class="empty-state"><h3>${registrations.length ? 'No matching registrations' : 'No registrations yet'}</h3><p>${registrations.length ? 'Try a different search term.' : 'Your submitted student registrations will appear here.'}</p></div>`;
    return;
  }
  listElement.innerHTML = visibleRegistrations.map((registration) => `<article class="registration-item"><div><h3>${escapeHtml(registration.studentName)}</h3><p>${escapeHtml(registration.rollNumber)} · ${escapeHtml(registration.email)}</p></div><div><small>Event</small><p>${escapeHtml(registration.selectedEvent)}</p></div><div><small>Department · Year</small><p>${escapeHtml(registration.department)} · ${escapeHtml(registration.year)}</p></div><button class="delete-button" type="button" data-id="${escapeHtml(registration.id)}" aria-label="Delete registration for ${escapeHtml(registration.studentName)}">Delete</button></article>`).join('');
}

listElement.addEventListener('click', (event) => {
  const deleteButton = event.target.closest('.delete-button');
  if (!deleteButton) return;
  const registration = registrations.find((item) => item.id === deleteButton.dataset.id);
  if (!registration || !window.confirm(`Delete the registration for ${registration.studentName}?`)) return;
  registrations = registrations.filter((item) => item.id !== deleteButton.dataset.id);
  localStorage.setItem(registrationKey, JSON.stringify(registrations));
  renderRegistrations(searchInput.value);
});
searchInput.addEventListener('input', () => renderRegistrations(searchInput.value));
renderRegistrations();
