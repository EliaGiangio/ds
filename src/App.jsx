import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/home';
import About from './pages/about';
import ErrorPage from './pages/error';
import CompSchedule from './pages/compschedule';
import Events from './pages/events';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/competition-schedule" element={<CompSchedule />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
