const users = JSON.parse(localStorage.getItem("users")) || [];
const user = JSON.parse(localStorage.getItem("user")) || [];
const newNomEtablissement = document.getElementById("newNomEntreprise");
const newAdresse = document.getElementById("newAdresse");
const newTel = document.getElementById("newTelEntreprise");
const newFax = document.getElementById("newFaxEntreprise");
const newEmail = document.getElementById("newEmailEntreprise");
const newPassword = document.getElementById("newPassword");
const newPasswordConfirmed = document.getElementById("newPasswordConfirmed");

newNomEtablissement.value = user.nomEtablissement;
newAdresse.value = user.adresse;
newTel.value = user.tel;
newFax.value = user.fax;
newEmail.value = user.email;
newPassword.value = user.password;
newPasswordConfirmed.value = user.passwordConfirmed;
function modificationDonnées() {
  const modifiedObj = {
    nomEtablissement: newNomEtablissement.value,
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
