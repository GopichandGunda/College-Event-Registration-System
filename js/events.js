// The event list is shared by the home, events, and registration pages.
const collegeEvents = [
  { name: 'TechFest 2026', date: '15 March 2026', time: '10:00 AM - 5:00 PM', venue: 'Innovation Auditorium', image: 'images/techfest.jpg', description: 'A day of emerging technology talks, demos, and hands-on showcases.' },
  { name: 'Coding Challenge 2026', date: '28 March 2026', time: '9:00 AM - 1:00 PM', venue: 'Computer Lab Complex', image: 'images/coding-challenge.jpg', description: 'Test your problem-solving skills through an energetic competitive programming sprint.' },
  { name: 'Hackathon 2026', date: '10 April 2026', time: '9:00 AM - 9:00 PM', venue: 'Digital Learning Centre', fee: 'INR 500', image: 'images/hackathon.jpg', description: 'Build useful ideas with a team, mentors, and a full day to make something real.' },
  { name: 'Cultural Fest 2026', date: '24 April 2026', time: '4:00 PM - 9:00 PM', venue: 'Main Quadrangle', image: 'images/cultural-fest.jpg', description: 'An evening of music, dance, theatre, food, and the many cultures of our campus.' },
  { name: 'Sports Meet 2026', date: '8 May 2026', time: '7:00 AM - 4:00 PM', venue: 'College Sports Ground', image: 'images/sports-meet.jpg', description: 'Bring your team spirit to a full day of track, field, and friendly competition.' },
  { name: 'Dussehra Celebration 2026', date: '20 October 2026', time: '5:00 PM - 9:00 PM', venue: 'Main Quadrangle', image: 'images/dussehra.jpg', description: 'Celebrate the spirit of Dussehra with cultural performances, music, traditional food, and community.' }
];

function createEventCard(event) {
  return `<article class="event-card"><img class="event-image" src="${event.image}" alt="${event.name} event image"><div class="event-card-content"><div class="event-accent"></div><h3>${event.name}</h3><p>${event.description}</p><div class="event-meta"><div>${event.date} <span>· ${event.time}</span></div><div>${event.venue}</div><div>Entry fee: <span>${event.fee || 'Free'}</span></div></div><a class="button button-primary" href="register.html?event=${encodeURIComponent(event.name)}">Register <span>→</span></a></div></article>`;
}

function renderEvents() {
  const featuredEvents = document.querySelector('#featured-events');
  const allEvents = document.querySelector('#all-events');
  if (featuredEvents) featuredEvents.innerHTML = collegeEvents.slice(0, 3).map(createEventCard).join('');
  if (allEvents) allEvents.innerHTML = collegeEvents.map(createEventCard).join('');
  const eventSelect = document.querySelector('#selectedEvent');
  if (eventSelect) {
    collegeEvents.forEach((event) => eventSelect.add(new Option(event.name, event.name)));
    const selectedEvent = new URLSearchParams(window.location.search).get('event');
    if (selectedEvent) eventSelect.value = selectedEvent;
    const updateFee = () => {
      const event = collegeEvents.find((item) => item.name === eventSelect.value);
      const feeElement = document.querySelector('#event-fee');
      if (feeElement) feeElement.textContent = event ? `Entry fee: ${event.fee || 'Free'}` : 'Entry fee: Select an event';
    };
    eventSelect.addEventListener('change', updateFee);
    updateFee();
  }
}

document.addEventListener('DOMContentLoaded', renderEvents);
