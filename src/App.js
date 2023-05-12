import React from "react";

//react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./main/Home"
import Sub from "./main/Sub"
import Pagenotfound from "./main/Pagenotfound"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sub" element={<Sub />} />
            <Route path="*" element={<Pagenotfound />} />
            
          </Routes>
        </Router>
        {/* <Home /> */}
        
      </div>
    );
  }
  
  export default App;