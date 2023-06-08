// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar2 from './components/Navbar2';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#04041d';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar2 title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container mt-3">
          {/* <Routes> */}
            {/* exact is used to go to a path that exactly matches the given one */}
            {/* /users--> component1
                /users/home--> component2 */}
            {/* <Route exact path="/about" element={<About />}> </Route> */}
            {/* <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />}></Route> */}
            <Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />
            <About />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
