import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/home';
import About from './pages/about';
import ErrorPage from './pages/error';
import CompSchedule from './pages/compschedule';
import Events from './pages/events';
import Contact from './pages/contact';
import Shop from './pages/shop';
import Project from './pages/project';
import GeneralInfo from './pages/general-info';


function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/ds/" element={<HomePage />} />
        <Route path="/ds/about" element={<About />} />
        <Route path="/ds/competition-schedule" element={<CompSchedule />} />
        <Route path="/ds/events" element={<Events />} />
        <Route path="/ds/contacts" element={<Contact />} />
        <Route path="/ds/shop" element={<Shop />} />
        <Route path="/ds/kids-club" element={<Project />} />
        <Route path="/ds/info" element={<GeneralInfo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
