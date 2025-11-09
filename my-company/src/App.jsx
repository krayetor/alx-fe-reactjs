import { Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif'
  };

  const mainContentStyle = {
    flex: 1,
    padding: '1rem'
  };

  return (
    <div style={appStyle}>
      <Navbar />

      <main style={mainContentStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;