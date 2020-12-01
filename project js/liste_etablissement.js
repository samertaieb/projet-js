
function liste_etab(){
const users=JSON.parse(localStorage.getItem("users")) || [];
const tbody=document.getElementById("tab_etab");


users.forEach((user) => {
  console.log(user.file);
    tbody.innerHTML+=` 
    <tr id="${user.id}">
    <th class="border-top-0"><img src=${user.file}></th>
    <th class="border-top-0">${user.nomEtablissament}</th>
    <th class="border-top-0">${user.adresse}</th>
    <th class="border-top-0">${user.tel}</th>
    <th class="border-top-0">${user.fax}</th>
    <th class="border-top-0">${user.email}</th>
    <th class="border-top-0">${user.password}</th>
    <th class="border-top-0">${user.id}</th>
    <th class="border-top-0"><button class="modifier">Modifier</button></th>
    <th class="border-top-0"><button class="delete">Supprimer</button></th>
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

    
