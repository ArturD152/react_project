import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Contacts from "./pages/Contact/Contact.js";
import Attractions from "./pages/Attractions/Attractions.js";
import './styles/App.css'
import Footer from './components/Footer/Footer.js'
import UnderFooter from './components/Footer/UnderFooter.js'
import InformationPage from "./pages/InformationPage/InformationPage.js";

function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/attractions/:id" element={<InformationPage />} />
          </Routes>
          <Footer />
          </div>
          <UnderFooter />
          </div>
    </Router>
  );
}

export default App;