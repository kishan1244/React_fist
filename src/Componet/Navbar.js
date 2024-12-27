import React from 'react';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/Login');
    }

    const goToRegs = () => {
        navigate('/Rt');
    }
    const GoToHome = () => {
        navigate('/Componet/Home')
    }

    return (
        <div className="home-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link active"onClick={GoToHome} aria-current="page" >Home</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={goToLogin}>Login</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={goToRegs}>Registration</span>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
