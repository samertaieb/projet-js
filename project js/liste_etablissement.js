

function liste_etab(){
  const users=JSON.parse(localStorage.getItem("users")) || [];
const tbody=document.getElementById("tab_etab");
const user=JSON.parse(localStorage.getItem("user")) || [];

users.forEach((user) => {
    tbody.innerHTML+=` 
    <tr id="${user.id}">
    <th class="border-top-0"><img src=${user.file} height="40px" ,width="40px"></th>
    <th class="border-top-0">${user.nomEtablissament}</th>
    <th class="border-top-0">${user.adresse}</th>
    <th class="border-top-0">${user.tel}</th>
    <th class="border-top-0">${user.fax}</th>
    <th class="border-top-0">${user.email}</th>
    <th class="border-top-0">${user.password}</th>
    <th class="border-top-0">${user.passwordC}</th>
    <th class="border-top-0">${user.id}</th>
    <th>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal${user.id}" data-whatever="@mdo">Modifier</button>
    <div class="modal fade" id="exampleModal${user.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"><center>Modifier l'etablissement:</center></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Nom de l'établissement</span>
              </div>
              <input type="text" id="new_nom_etab${user.id}" class="form-control" value=${user.nomEtablissament} aria-label="Username"
                aria-describedby="basic-addon1" />
            </div>
            <br /><br />
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Adresse</span>
              </div>
              <input type="text" id="new_adresse_etab${user.id}" class="form-control" value=${user.adresse} placeholder="Adresse"
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <br /><br />
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">N° telephone</span>
              </div>
              <input type="number" id="new_num_etab${user.id}" class="form-control" value=${user.tel} placeholder="+216******"
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <br /><br />
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Fax</span>
              </div>
              <input type="number" id="new_fax_etab${user.id}" class="form-control" value=${user.fax}placeholder="*********"
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <br /><br />
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Email</span>
              </div>
              <input type="email" id="new_email_etab${user.id}" class="form-control" value= ${user.email} placeholder="Exemple@Exemple.com"
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <br /><br />
            <div class="input-group-append">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupFileAddon01">Ajouter fichier/logo</span>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="inputGroupFile01">
                  <label class="custom-file-label" for="inputGroupFile01">Choose file</label>


                </div>
              </div>
              <button type="button" class="btn btn-outline-secondary" onclick="enreImg()">Ajouter</button>

            </div>
            <br /><br />
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Mot de passe</span>
              </div>
              <input type="password" id="new_password_etab${user.id}" class="form-control" value=${user.password} placeholder="*******"
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <br /><br />
            
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Confirmer mot de passe</span>
              </div>
              <input type="password" id="new_passwordC_etab${user.id}" class="form-control" value=${user.passwordC} placeholder="*******"
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <center>
              <button type="submit" onclick="modification_etab(${user.id})" class="btn btn-success">
                Enregistrer
              </button>
            </center>
          </form>
        </div>
      </div>

    

    </div>
  </div>
  
    <button type="button" class="btn btn-danger delete" >Supprimer</button>
    </th>
</tr>`
  });
} 




//Modification:
function modification_etab(idUser) {
  const newNomEtablissement = document.getElementById('new_nom_etab'+idUser);
  const newAdresse = document.getElementById('new_adresse_etab'+idUser);
  const newTel = document.getElementById('new_num_etab'+idUser);
  const newFax = document.getElementById('new_fax_etab'+idUser);
  const newEmail = document.getElementById('new_email_etab'+idUser);
  const newPassword = document.getElementById('new_password_etab'+idUser);
  const newPasswordConfirmed = document.getElementById('new_passwordC_etab'+idUser);
  const newImg = document.getElementById('inputGroupFile01'+idUser);
users.map(e=>{
 
  if(e.id==idUser){
 
    e.nomEtablissament=newNomEtablissement.value;
    e.adresse =newAdresse.value;
    e.tel=newTel.value;
    e.fax=newFax.value;
    e.email=newEmail.value;
    e.password=newPassword.value;
    e.passwordConfirmed=newPasswordConfirmed.value;
   // e.file=imgFile;
  }
 });

//alert(users[1].nomEtablissament)

  
  
  localStorage.setItem("users", JSON.stringify(users));
 

  alert((MSG = "Vous avez modifier vos données avec succées"));
  MSG.color = "green";
}

//Suppression:
const users=JSON.parse(localStorage.getItem("users")) || [];
const tbody=document.getElementById("tab_etab");
tbody.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.parentElement.remove();
     
      const filtered_etab=users.filter(user=>user.id!=e.target.parentElement.parentElement.id)
      localStorage.setItem("users",JSON.stringify(filtered_etab));
    }
    if(e.target.classList.contains("modifier")){
      
    const modifEtab=users.find(user=>user.id==e.target.parentElement.parentElement.id)
    localStorage.setItem("modifEtab",JSON.stringify(modifEtab));
    
  }
  });

  
  const user = JSON.parse(localStorage.getItem("user")) || [];
  console.log(user);
  const modifiedObjEtab = {
    id: user.id
  }
  
  
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

  
 // modal js:
  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })
