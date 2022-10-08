
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ######################################################## 
import React                 from 'react';
import { Routes,
         Route,
         BrowserRouter,
         Navigate
        }                    from 'react-router-dom';
import Accueil               from './pages/Accueil';  
//- --------------------------------------------------------
//- ########################################################



//* ########################################################
//* ------------------ APP => PAGES ------------------------
//* ########################################################
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/accueil'             element  ={ <Accueil                        /> } />
        <Route path='*'                    element  ={ <Navigate replace to='/accueil' /> } />
      </Routes>
  </BrowserRouter>
  );
};
//* --------------------------------------------------------
//* ########################################################



//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ######################################################## 
export default App;
//~ --------------------------------------------------------
//~ ########################################################