
const users = JSON.parse(localStorage.getItem("users")) || [];
const user = JSON.parse(localStorage.getItem("user")) || [];
console.log(user);
const modifiedObjEtab = {
  id: user.id
}
const newNomEtablissement = document.getElementById('new_nom_etab');
const newAdresse = document.getElementById('new_adresse_etab');
const newTel = document.getElementById('new_num_etab');
const newFax = document.getElementById('new_fax_etab');
const newEmail = document.getElementById('new_email_etab');
const newPassword = document.getElementById('new_password_etab');
const newPasswordConfirmed = document.getElementById('new_passwordC_etab');
const newImg = document.getElementById('inputGroupFile01');
newNomEtablissement.value = user.nomEtablissament;
newAdresse.value = user.adresse;
newTel.value = user.tel;
newFax.value = user.fax;
newEmail.value = user.email;
newPassword.value = user.password;
newPasswordConfirmed.value = user.passwordConfirmed;

// function showFile(input) {
//   let file = input.files[0];

//   alert(`File name: ${file.name}`); // e.g my.png
 
// }

let imgFile = '';
newImg.addEventListener('change', () => {
  const file = new FileReader();
  file.readAsDataURL(newImg.files[0]);
  file.onload = function () {
    imgFile = file.result;
  };
});
function enreImg(){
  modifiedObjEtab.file = imgFile
  // localStorage.setItem("user",JSON.stringify(file));
}

function modification_etab() {
  
    modifiedObjEtab.nomEtablissement = newNomEtablissement.value
    modifiedObjEtab.adresse = newAdresse.value
    modifiedObjEtab.tel = newTel.value
    modifiedObjEtab.fax = newFax.value
    modifiedObjEtab.email = newEmail.value
    modifiedObjEtab.password = newPassword.value
    modifiedObjEtab.passwordConfirmed = newPasswordConfirmed.value
    modifiedObjEtab.file = imgFile;
   
  localStorage.setItem("user", JSON.stringify(modifiedObjEtab));
 
  const newUsers = users.map(e => {
    if (e.id === user.id) {
      e = modifiedObjEtab;
    }
    return e;
  });
  console.log(newUsers);
  localStorage.setItem("users", JSON.stringify(newUsers));
 
  alert((MSG = "Vous avez modifier vos données avec succées"));
  MSG.color = "green";
}

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})