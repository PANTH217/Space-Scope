# SpaceScope - Explore, Learn & Stay Connected with the Universe

A comprehensive interactive platform that centralizes real-time space information and educational content in a user-friendly visual format.

## 🌌 Features

### Interactive Dashboard
- **ISS Orbital Tracker**: Real-time tracking of the International Space Station with live map visualization
- **Daily Intel (APOD)**: NASA's Astronomy Picture of the Day with detailed explanations
- **Space Weather**: Real-time cosmic weather data including solar storms, aurora forecasts, and radiation alerts
- **Upcoming Events**: Quick view of next celestial events
- **Mission Timeline**: Visual timeline of past, current, and future space missions

### Celestial Events Calendar
- Interactive calendar showing upcoming astronomical events
- Filter by event type and timeframe
- Detailed event cards with descriptions and timing
- Visibility maps and timing information

### Space Missions
- Visual timeline of space missions
- Filter by status and agency
- Detailed mission profiles with objectives and milestones
- Progress tracking for ongoing missions

### Learning Zone
- 20+ educational modules covering:
  - Solar System (Sun, Planets, Moons)
  - Astrophysics (Black Holes, Neutron Stars, Dark Matter)
  - Space Technology (JWST, ISS, Rocket Propulsion)
  - Cosmology (Big Bang, Multiverse Theory)
  - History (Apollo 11, Voyager, Space Race)
- Interactive quizzes for each module
- Video content and infographics
- Student-friendly content with difficulty levels

### Earth Impact
- Real-time ISS location tracking
- Solar activity impact monitoring
- Near-Earth Objects (NEOs) tracking
- Earth's magnetosphere visualization
- Satellite data applications demonstration

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SpaceScope
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

4. Set up environment variables:

Create a `.env` file in the `frontend` directory:
```env
REACT_APP_NASA_API_KEY=your_nasa_api_key_here
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
```

Create a `.env` file in the `backend` directory:
```env
PORT=5000
NASA_API_KEY=your_nasa_api_key_here
```

**Note**: You can get a free NASA API key from [NASA API Portal](https://api.nasa.gov/)

### Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server (in a new terminal):
```bash
cd frontend
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Leaflet** - Map visualization
- **Firebase** - Authentication
- **NASA APIs** - Space data
- **The Space Devs API** - Launch and event data

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger

## 📁 Project Structure

```
SpaceScope/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service functions
│   │   ├── contexts/       # React contexts (Auth, Theme)
│   │   └── ...
│   └── public/
├── backend/
│   ├── routes/             # API routes
│   ├── controllers/        # Route controllers
│   └── server.js          # Express server
└── README.md
```

## 🎨 Key Features Implementation

### Real-time Data
- ISS location updates every 5 seconds
- Space weather data with caching
- Event calendar with real-time updates

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

### User Experience
- Smooth animations and transitions
- Loading states and error handling
- Intuitive navigation
- Dark space-themed UI

## 🔑 API Keys Required

1. **NASA API Key** (Free)
   - Sign up at: https://api.nasa.gov/
   - Used for: APOD, NEO data, Space weather

2. **Firebase** (Optional - for authentication)
   - Set up Firebase project
   - Configure authentication providers

## 📝 Available Scripts

### Frontend
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests

### Backend
- `npm start` - Start Express server

## 🌟 Deliverables Checklist

✅ Interactive dashboard showing upcoming celestial events with visibility maps and timing
✅ Real-time cosmic weather data (solar storms, aurora forecast, radiation alerts)
✅ Visual timeline of past, current, and future space missions
✅ Learning zone with quizzes, infographics, and student-friendly content
✅ Visual demonstration of how satellite data contributes to real-world problem solving

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- NASA for providing amazing APIs and educational content
- The Space Devs for launch and event data
- All the space agencies and researchers making space exploration possible

---

**Built with ❤️ for space enthusiasts, students, and explorers of the infinite.**
