import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import "bootstrap/dist/css/bootstrap.min.css";
import { faGem, faPhone, faPrint, faHouse, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './Ft.css'


import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Ft = () => {
  const GOto=()=>{
    window.location.href="https://www.instagram.com/kishlo._.aayarr/"
  }

  const GOTOO = () => {
    window.location.href = "https://www.facebook.com/kishan.chavda.50159836/"
  }
  const Linkid = () => {
    window.location.href = "https://www.linkedin.com/in/kishan-ahir-29a253251//"
  }

  const GItHUb = () => {
    window.location.href = "https://github.com/kishan1244/"
  }

  const GOOGlE = () => {
    window.location.href = "https://www.Google.com/"
  }

  const X = () => {
    window.location.href = "https://x.com/"
  }

  return (
    <footer>
      <section className="d-flex  shadow-lg justify-content-center justify-content-lg-between p-4 border-bottom ">
        <div className="me-5 d-none d-lg-block">
          <span><p className="bb">Get connected with us on social networks</p> </span>
        </div>

        <div className="ic">
           <FontAwesomeIcon icon={faTwitter} className="aa" onClick={X}/>  
           <FontAwesomeIcon icon={faGoogle}  className="aa" onClick={GOOGlE}/>  
           <FontAwesomeIcon icon={faInstagram} className="aa" onClick={GOto}/>
           <FontAwesomeIcon icon={faLinkedin} className="aa" onClick={Linkid}/> 
           <FontAwesomeIcon icon={faGithub} className="aa" onClick={GItHUb}/>  
           <FontAwesomeIcon icon={faFacebook} className="aa" onClick={GOTOO}/> 
        </div>
      </section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4"><FontAwesomeIcon icon={faGem} /> Zomato</h6>
              <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p><a href="#" className="text-reset">Angular</a></p>
              <p><a href="#" className="text-reset">React</a></p>
              <p><a href="#" className="text-reset">Vue</a></p>
              <p><a href="#" className="text-reset">Laravel</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p><a href="#" className="text-reset">Pricing</a></p>
              <p><a href="#" className="text-reset">Settings</a></p>
              <p><a href="#" className="text-reset">Orders</a></p>
              <p><a href="#" className="text-reset">Help</a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><FontAwesomeIcon icon={faHouse} /> New York, NY 10012, US</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> Kishan123@gmail.com</p>
              <p><FontAwesomeIcon icon={faPhone} /> + 01 234 567 88</p>
              <p><FontAwesomeIcon icon={faPrint} /> 0293823487</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2025 Copyright:
      </div>
    </footer>
  );
};

export default Ft;
