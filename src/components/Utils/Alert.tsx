//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ########################################################
import swal from "sweetalert";
//- --------------------------------------------------------
//- ########################################################




//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################

//~ --------------------------------------------
//~ ALERT COPIER PRESSE PAPIER SUR LA PARTIE CONTACT
//~ --------------------------------------------
export const alertAdress = () => {
    return swal("Adresse copier !", "Vous pouvez maintenant coller la sélection", "success");
};
export const alertEmail = () => {
    return swal("E-mail copier !", "Vous pouvez maintenant coller la sélection", "success");
};
export const alertPhoneNumber = () => {
    return swal("Téléphone copier !", "Vous pouvez maintenant coller la sélection", "success");
};
export const alertFb= () => {
    return swal("Facebook copier !", "Vous pouvez maintenant coller la sélection", "success");
};
//~ --------------------------------------------


//~ --------------------------------------------------------
//~ ########################################################