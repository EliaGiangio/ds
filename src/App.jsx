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
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/ds-site/competition-schedule" element={<CompSchedule />} />
          <Route path="/ds-site/events" element={<Events />} />
          <Route path="/ds-site/contacts" element={<Contact />} />
          <Route path="/ds-site/shop" element={<Shop />} />
          <Route path="/ds-site/kids-club" element={<Project />} />
          <Route path="/ds-site/info" element={<GeneralInfo />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
