import './App.css';
import ReactDOM from "react-dom/client";
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [btnText, setbtnText] = useState("Dark Mode")
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1200);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      setbtnText("Dark Mode")
      document.body.style.backgroundColor = "white"
    }
    else {
      setMode('dark')
      setbtnText("Light Mode")
      document.body.style.backgroundColor = "#363638"
    }
  }
  return (
    <>
      <BrowserRouter basename='/ReactTutorial-Textapp/home'>
        <Navbar mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <Alert alert={alert} />
        <div className="container">

          <Routes>
            <Route exact path='ReactTutorial-Textapp/home' element={<Textform heading="Enter Text to Analyze!" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>

    

    </>
  );
}

export default App;
