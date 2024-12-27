// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componet/Home';
import Login from './Componet/Login';
import Rt from './Componet/Rt';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Rt" element={<Rt />} />
                </Routes>
            </div>
        
    );
}

export default App;
