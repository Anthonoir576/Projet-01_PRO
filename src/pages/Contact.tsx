//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ########################################################
import React from "react";
import Footer from "../components/Footer";
import BiTelephoneFill from "../components/Icons/BiTelephoneFill";
import Navbar from "../components/Navbar";
import PepiconsLetter from "../components/Icons/PepiconsLetter";
import UimFacebookF from "../components/Icons/UimFacebookF";
import GisPosition from "../components/Icons/GisPosition";
//- --------------------------------------------------------
//- ########################################################

//* ########################################################
//* ----------------- APP => CONTACT -----------------------
//* ########################################################
const Contact = () => {
  return (
    <div className="all">
      <Navbar />
      <div className="information-contact">
        <div className="information-container">
          <div className="img-contact">
            <img
              src="https://github.com/Anthonoir576/Projet-01_PRO/blob/master/public/assets/images/photo-profil.jpg?raw=true"
              alt="profil Emelyne Wojdowski"
            />
          </div>
          <div className="information-txt">
            <div className="info-icons">
              <BiTelephoneFill />
              <PepiconsLetter />
              <UimFacebookF />
              <GisPosition />
            </div>
            <div className="info-txt">
              <p>06 64 23 45 67</p>
              <p>wojdowskiemy@gmail.com</p>
              <p>Emelyne WOJDOWSKI</p>
              <p>
                Montigny-En-Ostrevent, 59182, <br />
                HAUT-DE-FRANCE, FRANCE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="second">
        <Footer />
      </div>
    </div>
  );
};
//* --------------------------------------------------------
//* ########################################################

//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################
export default Contact;
//~ --------------------------------------------------------
//~ ########################################################
