import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import { auth } from "./firebase";

function App() {
  const [user,setUser] =useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); 
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
    <Router>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/homepage" element={user?<HomePage/> : <LoginPage/>}></Route>
          </Routes>
    </Router>
    </>
  );
}

export default App;
