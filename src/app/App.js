import React from 'react';
import './App.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailList from '../components/EmailList';
import Mail from '../components/Mail';


function App() {
  return (
    <Router basename={'/me-site'}>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
