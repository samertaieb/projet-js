var tableau_candidats = JSON.parse(localStorage.getItem("tableau_candidats")) || [];

var ajouter_candidat = document.getElementById("ajouter_candidat");

function ajout_candidats() {
  let MSG = "";
  const nom_candidat = document.getElementById("nom_candidat").value;
  const prenom_candidat = document.getElementById("prenom_candidat").value;
  const numero_candidat = document.getElementById("numero_candidat").value;
  const email_candidat = document.getElementById("email_candidat").value;
  if (nom_candidat != "" && prenom_candidat != "" && email_candidat != "" && numero_candidat != "") {
    var candidatObj = {
      nom: nom_candidat,
      prenom: prenom_candidat,
      numero: numero_candidat,
      email: email_candidat,
      id: tableau_candidats.length + 1000,
      idEtablissement: "",
    };
    tableau_candidats.push(candidatObj);
    localStorage.setItem("tableau_candidats", JSON.stringify(tableau_candidats));
    // const alert11 = document.getElementById("alert_candidat").innerHTML = "Candidat ajouté avec succée"
    document.getElementById("nom_candidat").value = "";
    document.getElementById("prenom_candidat").value = "";
    document.getElementById("email_candidat").value = "";
    document.getElementById("numero_candidat").value = "";
    alert((MSG = "Vous avez ajouter un candidat avec succées"));
    MSG.color = "green";
  } else {
    alert((MSG = "REMPLISSEZ TOUS LES CHAMPS"));
    MSG.color = "red";
  }
}

const tbody = document.getElementById("tbody_liste");
function liste_candidats() {
  var candidats = JSON.parse(localStorage.getItem("tableau_candidats")) || [];
  candidats.forEach((candidatObj) => {
    tbody.innerHTML += ` <tr id="${candidatObj.id}">
    <th scope="col">${candidatObj.id}</th>
    <th scope="col">${candidatObj.nom}</th>
    <th scope="col">${candidatObj.prenom}</th>
    <th scope="col">${candidatObj.email}</th>
    <th scope="col">${candidatObj.numero}</th>
   <th scope="col">
   <a href="Modification_candidats.html"><button type="button" class="btn btn-warning modifier">Modifier</button></a>
   <button type="button" class="btn btn-danger delete">Supprimer</button>
   </th>
</tr>`;
  });
}

tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
    const candidats = JSON.parse(localStorage.getItem("tableau_candidats"));
    const filteredCandidats = candidats.filter(
      (candidatObj) => candidatObj.id != e.target.parentElement.parentElement.id
    );
    localStorage.setItem("tableau_candidats", JSON.stringify(filteredCandidats));
  }
});

function LOGOUT() {
  localStorage.removeItem("user");
  window.location.replace("logIn.html");
}

function bonjourUtilisateur() {
  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("BJ").innerHTML = "BIENVENUE CHEZ NOUS " + user.nomEtablissament;
}
