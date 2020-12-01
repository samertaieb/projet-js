function suprimerCandidat() {
  const candidats = JSON.parse(localStorage.getItem("tableau_candidats"));
  const filteredCandidats = candidats.filter(
    (candidatObj) => candidatObj.id != e.target.parentElement.parentElement.id
  );
  localStorage.setItem("tableau_candidats", JSON.stringify(filteredCandidats));
}
