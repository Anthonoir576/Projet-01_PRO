
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ######################################################## 
import React     from 'react';
import ReactDOM  from 'react-dom/client';
import App       from './App';


import './styles/css/style.css';
//- --------------------------------------------------------
//- ########################################################




//* ########################################################
//* --- INDEX DE L'APP => rendu injecté dans l'id #root ---
//* ########################################################
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//* --------------------------------------------------------
//* ########################################################
