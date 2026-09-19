// The event list is shared by the home, events, and registration pages.
const collegeEvents = [
  { name: 'TechFest 2026', date: '15 March 2026', time: '10:00 AM - 5:00 PM', venue: 'Innovation Auditorium', description: 'A day of emerging technology talks, demos, and hands-on showcases.' },
  { name: 'Coding Challenge 2026', date: '28 March 2026', time: '9:00 AM - 1:00 PM', venue: 'Computer Lab Complex', description: 'Test your problem-solving skills through an energetic competitive programming sprint.' },
  { name: 'Hackathon 2026', date: '10 April 2026', time: '9:00 AM - 9:00 PM', venue: 'Digital Learning Centre', description: 'Build useful ideas with a team, mentors, and a full day to make something real.' },
  { name: 'Cultural Fest 2026', date: '24 April 2026', time: '4:00 PM - 9:00 PM', venue: 'Main Quadrangle', description: 'An evening of music, dance, theatre, food, and the many cultures of our campus.' },
  { name: 'Sports Meet 2026', date: '8 May 2026', time: '7:00 AM - 4:00 PM', venue: 'College Sports Ground', description: 'Bring your team spirit to a full day of track, field, and friendly competition.' }
];

function createEventCard(event) {
  return `<article class="event-card"><div class="event-accent"></div><h3>${event.name}</h3><p>${event.description}</p><div class="event-meta"><div>${event.date} <span>· ${event.time}</span></div><div>${event.venue}</div></div><a class="button button-primary" href="register.html?event=${encodeURIComponent(event.name)}">Register <span>→</span></a></article>`;
}

function renderEvents() {
  const featuredEvents = document.querySelector('#featured-events');
  const allEvents = document.querySelector('#all-events');
  if (featuredEvents) featuredEvents.innerHTML = collegeEvents.slice(0, 3).map(createEventCard).join('');
  if (allEvents) allEvents.innerHTML = collegeEvents.map(createEventCard).join('');
  const eventSelect = document.querySelector('#selectedEvent');
  if (eventSelect) collegeEvents.forEach((event) => eventSelect.add(new Option(event.name, event.name)));
}

document.addEventListener('DOMContentLoaded', renderEvents);
