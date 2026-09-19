# College Event Registration System

A beginner-friendly, responsive college event registration website built with HTML5, CSS3, vanilla JavaScript, and browser LocalStorage. Students can explore campus events, submit registrations, and view or manage saved registrations without a backend.

## Features

- Responsive home page with college introduction and upcoming events
- Six sample events: TechFest 2026, Coding Challenge 2026, Hackathon 2026, Cultural Fest 2026, Sports Meet 2026, and Dussehra Celebration 2026
- Event details including date, time, venue, description, and registration link
- Relevant local images for every event, including Dussehra Celebration 2026
- Registration form with student name, roll number, email, phone, department, year, and event
- Client-side validation for required, email, and phone fields
- Success message after a valid registration
- Registrations dashboard with total count, search/filter, and delete controls
- No framework, backend, or external database required

## Technologies Used

- HTML5 for page structure and accessible form markup
- CSS3 for responsive layout, colors, typography, and components
- JavaScript for rendering events, validation, and registration management
- Browser LocalStorage for persisting registration data on the current device

## Project Structure

```text
College-Event-Registration-System/
├── index.html
├── events.html
├── register.html
├── registrations.html
├── css/
│   └── style.css
├── js/
│   ├── events.js
│   ├── registration.js
│   └── registrations.js
├── images/
└── README.md
```

## How to Run

1. Download or clone this project.
2. Open `index.html` in any modern web browser.
3. Use the navigation bar to browse events, register, and view registrations.
4. For the best development experience, open the folder in VS Code and use any static server extension, or serve the folder with a simple local HTTP server.

No installation or package manager is needed.

## How LocalStorage Is Used

Registrations are stored in the browser under the key `collegeEventRegistrations`. Each submitted form is converted into an object with a unique ID and saved as a JSON array. The Registrations page reads this array on load, filters it while typing, and writes the updated array back after deletion. Data is local to the browser and is not shared with a server.

## Future Enhancements

- Add student login and role-based event coordinator access
- Add event capacity limits and duplicate registration checks
- Export registrations as CSV
- Add email confirmations through a backend service
- Connect the interface to a secure database and hosted API
