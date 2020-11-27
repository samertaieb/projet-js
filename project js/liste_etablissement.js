
function liste_etab(){
const users=JSON.parse(localStorage.getItem("users")) || [];
const tbody=document.getElementById("tab_etab");


users.forEach((user) => {
    tbody.innerHTML+=` 
    <tr>
    <th class="border-top-0">${user.nomEtablissament}</th>
    <th class="border-top-0">${user.adresse}</th>
    <th class="border-top-0">${user.tel}</th>
    <th class="border-top-0">${user.fax}</th>
    <th class="border-top-0">${user.email}</th>
    <th class="border-top-0">${user.password}</th>
    <th class="border-top-0">${user.id}</th>
    <th class="border-top-0"><button>Modifier</button></th>
    <th class="border-top-0"><button class="delete">Supprimer</button></th>
</tr>`
  });
} 
const users=JSON.parse(localStorage.getItem("users")) || [];
const tbody=document.getElementById("tab_etab");
tbody.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.parentElement.remove();
    }
  });

    
