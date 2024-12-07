import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact, Experience } from './pages';

const App = () => {
  return (
    <main className="bg-slate-300/20 h-[100vh]">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </main>
  );
};

export default App;
