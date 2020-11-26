var tableau_candidats = JSON.parse(localStorage.getItem('tableau_candidats')) || [];

var ajouter_candidat = document.getElementById("ajouter_candidat");

function ajout_candidats() {
    let MSG=""
    const nom_candidat = document.getElementById("nom_candidat").value
    const prenom_candidat = document.getElementById("prenom_candidat").value
    const numero_candidat = document.getElementById("numero_candidat").value
    const email_candidat = document.getElementById("email_candidat").value
    if (nom_candidat != "" && prenom_candidat != "" && email_candidat != "" && numero_candidat != "") {
        var candidatObj = {
            nom: nom_candidat,
            prenom: prenom_candidat,
            numero: numero_candidat,
            email: email_candidat,
            id: Math.random*1000
        }
        tableau_candidats.push(candidatObj);
        localStorage.setItem('tableau_candidats', JSON.stringify(tableau_candidats));
        // const alert11 = document.getElementById("alert_candidat").innerHTML = "Candidat ajouté avec succée"
        document.getElementById("nom_candidat").value = ""
        document.getElementById("prenom_candidat").value = ""
        document.getElementById("email_candidat").value = ""
        document.getElementById("numero_candidat").value = ""
        alert(MSG="Vous avez ajouter un candidat avec succées")
        MSG.color="green"
    }
    else{
        alert(MSG="REMPLISSER LES TOUS CHAMPS")
        MSG.color="red"

    }
}