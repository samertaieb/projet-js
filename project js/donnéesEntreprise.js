const users = JSON.parse(localStorage.getItem("users")) || [];
const user = JSON.parse(localStorage.getItem("user")) || [];
const newNomEtablissament = document.getElementById("newNomEntreprise");
const newAdresse = document.getElementById("newAdresse");
const newTel = document.getElementById("newTelEntreprise");
const newFax = document.getElementById("newFaxEntreprise");
const newEmail = document.getElementById("newEmailEntreprise");
const newPassword = document.getElementById("newPassword");
const newPasswordConfirmed = document.getElementById("newPasswordConfirmed");

newNomEtablissament.value = user.nomEtablissament;
newAdresse.value = user.adresse;
newTel.value = user.tel;
newFax.value = user.fax;
newEmail.value = user.email;
newPassword.value = user.password;
newPasswordConfirmed.value = user.passwordConfirmed;
function modificationDonnées() {
  const modifiedObj = {
    nomEtablissament: newNomEtablissament.value,
    adresse: newAdresse.value,
    tel: newTel.value,
    fax: newFax.value,
    email: newEmail.value,
    password: newPassword.value,
    passwordConfirmed: newPasswordConfirmed.value,
    id: user.id,
  };
  localStorage.setItem("user", JSON.stringify(modifiedObj));
  const newUsers = users.map(entrep => {
    if (entrep.id === user.id) {
      entrep = modifiedObj;
    }
    return entrep;
  });
  localStorage.setItem("users", JSON.stringify(newUsers));
}
