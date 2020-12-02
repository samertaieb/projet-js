
function liste_etab(){
const users=JSON.parse(localStorage.getItem("users")) || [];
const tbody=document.getElementById("tab_etab");


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
    <th class="border-top-0">${user.id}</th>
    <th>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Modifier</button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              <input type="text" id="new_nom_etab" class="form-control" placeholder="Nom" aria-label="Username"
                aria-describedby="basic-addon1" />
            </div>
            <br /><br />
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Adresse</span>
              </div>
              <input type="text" id="new_adresse_etab" class="form-control" placeholder="Adresse"
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <br /><br />
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">N° telephone</span>
              </div>
              <input type="number" id="new_num_etab" class="form-control" placeholder="+216******"
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <br /><br />
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Fax</span>
              </div>
              <input type="number" id="new_fax_etab" class="form-control" placeholder="*********"
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <br /><br />
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Email</span>
              </div>
              <input type="email" id="new_email_etab" class="form-control" placeholder="Exemple@Exemple.com"
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
              <input type="password" id="new_password_etab" class="form-control" placeholder="*******"
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <br /><br />
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Confirmer mot de passe</span>
              </div>
              <input type="password" id="new_passwordC_etab" class="form-control" placeholder="*******"
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <center>
              <button type="button" onclick="modification_etab()" class="btn btn-success">
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
    location.href="modification_etab.html"
  }
  });

    
