// import { useState } from "react";
import './Cont.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons"; 
import { faLocation } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Cont = () => {
    return (
        <div className="content justify-content-center align-items-center d-flex shadow-lg" id="content">
            <div>
                <div className="col-md-6 d-flex justify-content-center log">
                    <form>
                        <div className="header-text mb-4">
                            <h1>
                                Contact Us
                            </h1>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" placeholder="Enter your Name" className="form-control form-control-lg bg-light fs-6" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="email" placeholder="Enter a valid email address" className="form-control form-control-lg bg-light fs-6" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" placeholder="Enter a message" className="form-control form-control-lg bg-light fs-6" />
                        </div>
                        <button type="submit">submit</button>

                    </form>
                </div>
            </div>
            <div className="col-md-6 regs  " >
                <form>
                    <div className="input-group mb-3 b">
                        <div >
                            
                            <FontAwesomeIcon icon={faPhone}  className='abb' /> 
                            <label>Phone: 9409674444</label>
                        </div>
                    </div>
                    <div className="input-group mb-3 b">
                    <FontAwesomeIcon icon={faLocation}  className='abb' />
                    <label>Location: flor 5, 196 west 21th Street, Suite 722 New york NY 10016</label>
                    </div>
                    <div className="input-group mb-3 b">
                    <FontAwesomeIcon icon={faEnvelope} className='abb' />
                    <label>Kishan232@gmail.com</label>
                    </div>

                    <div className="input-group mb-3 b ">
                    <FontAwesomeIcon icon={faGlobe}  className='abb' />
                    <label>https://www.zomato.com/</label>
                         </div>
                </form>
            </div>
        </div>
    );
};

export default Cont;
