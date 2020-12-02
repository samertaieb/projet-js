var tableau_candidats =
  JSON.parse(localStorage.getItem("tableau_candidats")) || [];

var ajouter_candidat = document.getElementById("ajouter_candidat");

function ajout_candidats() {
  let MSG = "";
  const nom_candidat = document.getElementById("nom_candidat").value;
  const prenom_candidat = document.getElementById("prenom_candidat").value;
  const numero_candidat = document.getElementById("numero_candidat").value;
  const email_candidat = document.getElementById("email_candidat").value;
  if (
    nom_candidat != "" &&
    prenom_candidat != "" &&
    email_candidat != "" &&
    numero_candidat != ""
  ) {
    var candidatObj = {
      nom: nom_candidat,
      prenom: prenom_candidat,
      numero: numero_candidat,
      email: email_candidat,
      id: tableau_candidats.length + 1000,
      idEtablissement: "",
    };
    tableau_candidats.push(candidatObj);
    localStorage.setItem(
      "tableau_candidats",
      JSON.stringify(tableau_candidats)
    );
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
  candidats.forEach(candidatObj => {
    tbody.innerHTML += ` <tr id="${candidatObj.id}" onclick="myFunction(this)">
    <td scope="col">${candidatObj.id}</td>
    <td scope="col">${candidatObj.nom}</td>
    <td scope="col">${candidatObj.prenom}</td>
    <td scope="col">${candidatObj.email}</td>
    <td scope="col">${candidatObj.numero}</td>
   <td scope="col">
   <button type="button" class="btn btn-primary modifier" data-toggle="modal" data-target="#exampleModal" >
modifier</button>
   <button type="button" class="btn btn-danger delete" data-toggle="modal" data-target="#deleteModal">Supprimer</button>
   </td>
</tr>`;
  });
}
let idCandidat2;

const newNomCandidat = document.getElementById("newNomCandidat");
const newPrenomCandidat = document.getElementById("newPrenomCandidat");
const newEmailCandidat = document.getElementById("newEmailCandidat");
const newNumeroCandidat = document.getElementById("newNumeroCandidat");
let idCandidat;

tbody.addEventListener("click", e => {
  const candidats = JSON.parse(localStorage.getItem("tableau_candidats"));
  if (e.target.classList.contains("delete")) {
    idCandidat2 = e.target.parentElement.parentElement.id;
  }
  if (e.target.classList.contains("modifier")) {
    const mofifierCandidat = candidats.find(
      candidatObj => candidatObj.id == e.target.parentElement.parentElement.id
    );
    idCandidat = e.target.parentElement.parentElement.id;
    newNomCandidat.value = mofifierCandidat.nom;
    newPrenomCandidat.value = mofifierCandidat.prenom;
    newEmailCandidat.value = mofifierCandidat.email;
    newNumeroCandidat.value = mofifierCandidat.numero;
  }
});

// const user = JSON.parse(localStorage.getItem("user")) || [];
const candidats = JSON.parse(localStorage.getItem("tableau_candidats"));
const update = document.querySelector("#update");

update.addEventListener("click", () => {
  const modifiedCandidats = {
    nom: newNomCandidat.value,
    prenom: newPrenomCandidat.value,
    email: newEmailCandidat.value,
    numero: newNumeroCandidat.value,
    id: idCandidat,
  };

  const newCandidat = candidats.map(candidat => {
    if (candidat.id == modifiedCandidats.id) {
      candidat = modifiedCandidats;
    }
    return candidat;
  });
  console.log(newCandidat);
  localStorage.setItem("tableau_candidats", JSON.stringify(newCandidat));
  // alert((MSG = "Vous avez modifier vos données avec succées"));
  // MSG.color = "green";
  location.reload();
});
let index;
function myFunction() {
  index = row.parentNode.parentNode.rowIndex;
}
function suprimerCandidat() {
  const candidats = JSON.parse(localStorage.getItem("tableau_candidats"));
  const filteredCandidats = candidats.filter(
    candidatObj => candidatObj.id != idCandidat2
  );
  localStorage.setItem("tableau_candidats", JSON.stringify(filteredCandidats));
  tbody.deleteRow(index);
}

function LOGOUT() {
  localStorage.removeItem("user");
  window.location.replace("logIn.html");
}

function bonjourUtilisateur() {
  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("BJ").innerHTML =
    "BIENVENUE CHEZ NOUS " + user.nomEtablissament;
}
