//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ########################################################
import React                  from "react";
import Footer                 from "../components/Footer";
import BiTelephoneFill        from "../components/Icons/BiTelephoneFill";
import Navbar                 from "../components/Navbar";
import PepiconsLetter         from "../components/Icons/PepiconsLetter";
import UimFacebookF           from "../components/Icons/UimFacebookF";
import GisPosition            from "../components/Icons/GisPosition";
import { CopyToClipboard }    from 'react-copy-to-clipboard';
import { alertPhoneNumber,
         alertEmail,
         alertFb,
         alertAdress }        from "../components/Utils/Alerts";
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
              <BiTelephoneFill className="icon-1" />
              <PepiconsLetter  className="icon-2" />
              <UimFacebookF    className="icon-3" />
              <GisPosition     className="icon-4" />
            </div>
            <div className="info-txt">
              <CopyToClipboard text="06 64 23 45 67">
                <p onClick={alertPhoneNumber}>
                  06 64 23 45 67
                </p>
              </CopyToClipboard>
              <CopyToClipboard text="wojdowskiemy@gmail.com">
                <p onClick={alertEmail}>
                  wojdowskiemy@gmail.com
                </p>
              </CopyToClipboard>
              
              <CopyToClipboard text="Emelyne WOJDOWSKI">
                <p onClick={alertFb}>
                  Emelyne WOJDOWSKI
                </p>
              </CopyToClipboard>
              
              <CopyToClipboard text=" 19b rue du capitaine wazny, Montigny-En-Ostrevent, 59182, HAUT-DE-FRANCE, FRANCE">
                <p onClick={alertAdress}>
                  Montigny-En-Ostrevent, 59182, <br />
                  HAUT-DE-FRANCE, FRANCE
                </p>
              </CopyToClipboard>
         
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
