
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ######################################################## 
import React       from 'react';
import Navbar      from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
//- --------------------------------------------------------
//- ########################################################



//* ########################################################
//* ----------------- APP => ACCUEIL -----------------------
//* ########################################################
const Accueil = () => {
    return (
      <div className="accueil">
        <div className="accueil-first">
          <Navbar />
          <div className="img-accueil">
            <img
              src="https://github.com/Anthonoir576/Projet-01_PRO/blob/master/public/assets/images/photo-profil.jpg?raw=true"
              alt="profil Emelyne Wojdowski"
            />
          </div>
          <div className="accueil-container">
            <div className="accueil-title">
              <h1>
                Emelyne &ensp;<strong>WOJDOWSKI</strong>{" "}
              </h1>
            </div>
            <div className="aboutMe">
              <NavLink to="/experience" aria-label="experience professionnelle">
                En savoir plus ...
              </NavLink>
            </div>
          </div>
        </div>
        <div className="accueil-second second">
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
export default Accueil;
//~ --------------------------------------------------------
//~ ########################################################