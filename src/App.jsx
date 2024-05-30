import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/Login.jsx';
import HomePage from './Pages/HomePage.jsx';
import StatusPage from './Pages/StatusPage.jsx';
import MainLayout from './Layout/MainLayout';

function App() {
  return (
    <Router>
      <div className="App">
   
        <Routes>
          <Route path="/" element={<LoginPage />} />
      
          <Route
            path="/home"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          <Route
            path="/status"
            element={
              <MainLayout>
                <StatusPage />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
