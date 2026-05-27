# SpaceScope 🌌

**SpaceScope** is an advanced, full-stack cosmic intelligence dashboard and educational platform. Built on the MERN stack (MongoDB, Express, React, Node.js), SpaceScope aggregates live telemetry, deep-space hazard data, and astrophysical imagery from NASA and other global space agencies into a single, immersive command center. 

Designed for stargazers, students, and space enthusiasts, SpaceScope is your personal gateway to the cosmos.

---

## 🚀 Features

### 1. Mission Control Dashboard
- **Live Orbital Personnel Tracking:** Real-time data on the exact number of humans currently in space, complete with live rosters detailing names and spacecraft (e.g., ISS, Tiangong).
- **Deep Space Hazard Scans:** Daily automated tracking of Near-Earth Objects (NEOs) passing within our planetary vicinity.
- **Solar Weather Monitoring:** Live feeds tracking the active Solar Cycle and reporting geomagnetic storm levels (G-Scale).
- **ISS Orbital Tracker:** A high-fidelity, real-time map displaying the geographic coordinates, altitude, and velocity of the International Space Station.

### 2. AstroMind Artificial Intelligence
An integrated, specialized AI trained extensively on cosmology, orbital mechanics, and astrophysics. Powered by the Google Gemini 2.5 Flash engine, AstroMind serves as your personal co-pilot, ready to answer any inquiry regarding the universe.
- *Includes a fail-safe fallback mechanism and custom API key integration for uninterrupted intelligence.*

### 3. Cosmic Intel & Observation
- **Astronomy Picture of the Day (APOD):** High-resolution imagery of galaxies, nebulae, and stellar phenomena updated daily with professional astronomical breakdowns.
- **Planet Parade:** Calculates which planets are currently visible in the night sky based on live orbital alignments.

### 4. Educational Integration
- **Space Academy:** Gamified daily quizzes testing your knowledge against the SpaceScope database.
- **Fact Carousels:** A continuously updating stream of mind-bending facts about the scale, age, and physics of the universe.
- **Mission Timelines:** Track exact countdowns and telemetry statuses for upcoming global rocket launches.

---

## 🛠️ Technology Stack

- **Frontend:** React.js, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose)
- **Authentication:** Custom JWT & Google OAuth Hybrid
- **AI Integration:** Google Gemini Generative AI SDK
- **External APIs:** NASA Open APIs, DONKI (Space Weather), NeoWs (Asteroids), ISS Telemetry Services

---

## 💻 Installation & Setup

To run SpaceScope locally, you will need Node.js and MongoDB installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/PANTH217/SpaceScope.git
cd SpaceScope
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NASA_API_KEY=your_nasa_api_key
GEMINI_API_KEY_1=your_gemini_key
```
Start the backend server:
```bash
node server.js
```

### 3. Frontend Setup
Open a new terminal window.
```bash
cd frontend
npm install
npm run dev
```
The application will boot up at `http://localhost:5173`.

---

## 👨‍💻 Developer

**Panth Haveliwala** | Mission Commander
- **GitHub:** [@PANTH217](https://github.com/PANTH217)
- **LinkedIn:** [Panth Haveliwala](https://linkedin.com/in/panth-haveliwala-06811131a)
- **Email:** panthhaveliwala@gmail.com

---

## 📜 License
This project is for educational and open-source purposes. Telemetry data is provided by NASA and respective space agencies.

*“Somewhere, something incredible is waiting to be known.”* — Carl Sagan
