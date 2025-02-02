import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
