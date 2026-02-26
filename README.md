# Full-Stack Web Application

This is a full-stack web application that serves both the customer and administrative sides of the Travlr project. The application includes secure login authentication for admin users, integrates a MongoDB database for storing data, and provides a seamless frontend experience using an SPA (Single-Page Application).

## Project Overview

This project is a full-stack web application designed to handle both customer-facing and administrative features. It includes an admin dashboard for managing content, secure login authentication, and a responsive, dynamic user interface powered by a Single-Page Application (SPA) architecture.

---

## Architecture

### Frontend Development Comparison

This project used multiple frontend development approaches, including **Express-rendered HTML with JavaScript** and a **Single-Page Application (SPA)**.

The Express HTML approach uses server-side rendering, where routes return complete HTML pages to the browser. Each user action that requires new data typically results in a full page reload. This approach is simpler and works well for basic interactions, but it can feel slower and less dynamic to users.

In contrast, the SPA loads a single HTML page and dynamically updates content using JavaScript. The SPA communicates with the backend through API calls, allowing data to be retrieved and updated without refreshing the page. This results in a smoother, more responsive user experience and better separation of concerns between frontend and backend logic.

Overall, the SPA provides richer functionality and better usability compared to traditional Express-based page rendering, especially for administrative workflows such as editing and managing data.

### Backend Database Choice

The backend uses a NoSQL MongoDB database. MongoDB was selected because it stores data in flexible, JSON-like documents, which aligns well with JavaScript-based applications. This flexibility allows the data model to evolve without complex schema migrations.

MongoDB also integrates well with Node.js and Express, supports scalability, and simplifies working with nested or variable data structures, making it an ideal choice for this full stack application.

---

## Functionality

### JSON vs JavaScript

JavaScript is a programming language used to implement application logic on both the frontend and backend. JSON (JavaScript Object Notation), on the other hand, is a data format used for transferring structured data between systems.

In this project, JSON acts as the bridge between the frontend and backend. API endpoints return JSON responses, which the frontend parses and uses to update the user interface. Similarly, user input is sent to the backend in JSON format when creating or updating records.

This standardized data exchange enables clear communication between application layers and supports a clean separation of responsibilities.

### Refactoring and Reusable UI Components

Throughout development, several areas of the codebase were refactored to improve efficiency and maintainability. Repeated UI logic, such as forms and input handling, was consolidated into reusable components rather than duplicated across multiple views.

The benefits of reusable UI components include reduced code duplication, easier maintenance, improved readability, and faster implementation of new features. Changes to shared components only need to be made in one place, reducing the risk of bugs and inconsistencies.

---

## Testing

Testing the application involved validating both functionality and security. API endpoints were tested using different HTTP methods such as GET, POST, PUT, and DELETE to ensure proper request handling and correct responses.

Tools like Postman were used to verify status codes, returned data, and error handling. As authentication was added, testing became more complex, requiring valid credentials or tokens to access protected routes.

Security testing focused on confirming that administrative endpoints were inaccessible without authentication and that invalid or expired tokens were handled correctly. This reinforced the importance of layered security in a full stack application.

---

## Reflection

This course significantly contributed to my professional development and understanding of full stack web development. I gained hands-on experience building an application from the database layer through the backend API and into a modern frontend interface.

Key skills developed include RESTful API design, database integration, authentication and authorization, frontend-backend communication, and debugging across the entire stack. I also strengthened my ability to read documentation, troubleshoot errors, and refactor code for clarity and efficiency.

Completing this project has made me more confident in my ability to design, build, and secure full stack applications. The experience and skills gained directly support my career goals and make me a more competitive candidate in the software development field.

---

### Features:
- **User Authentication:** Secure login system for both admin and users.
- **Admin Dashboard:** Ability to manage and update data in the system.
- **Database Integration:** MongoDB is used for the backend to store user and trip data.
- **Frontend:** Built using React for a dynamic, responsive user experience.

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (NoSQL database)
  - JWT (JSON Web Tokens) for authentication

- **Frontend:**
  - React.js (SPA architecture)
  - HTML, CSS, JavaScript

- **Testing:**
  - Jest (unit testing)
  - Postman (API endpoint testing)

## Installation Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/aerubi/cs465-fullstack.git

2. Installation and Setup

This project uses the **MEAN stack** (MongoDB, Express, Angular, Node.js). Both the server-side application and the Angular SPA must be installed and run separately.

Install dependencies for both the backend and frontend applications.

#### Backend (Node.js / Express)

```bash
cd ~/travlr
npm install
```
#### Frontend (Angular SPA)

```bash
cd ~/travlr/app_admim
npm install
```

3. Enviroment Configuration
   
Create a .env file in the backend directory and configure the following environment variables:

```bash
MONGODB_URI=your-mongo-uri
JWT_SECRET=your-secret-key
```

4.  To run the application

Start the backend with:
```bash
cd ~/travlr
npm start
```

Start the frontend with:
```bash
cd ~/travlr/app_admin
ng serve
```
## API Endpoints

The backend exposes a RESTful API that supports both customer-facing and administrative functionality.

POST /api/auth/login
Authenticates a user and returns a JSON Web Token (JWT).

POST /api/auth/register
Registers a new user account.

Trip Management Endpoints

GET /api/trips
Retrieves all available travel trips from the database.

POST /api/trips
Adds a new trip to the database (admin only).

PUT /api/trips/:id
Updates an existing trip by ID (admin only).

DELETE /api/trips/:id
Deletes a trip by ID (admin only).
