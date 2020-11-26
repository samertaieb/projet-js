const users=JSON.parse(localStorage.getItem('users')) || [];
function inscription(){
    const nomEtablissament=document.getElementById('nom-établissament').value;
    const adresse=document.getElementById('adresse').value;
    const tel=document.getElementById('tel').value;
    const fax=document.getElementById('fax').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const passwordConfirmed=document.getElementById('password-confirmed').value;
    const randomNumber=Math.floor(Math.random()*1000);
         const user ={
            nomEtablissament :nomEtablissament,
            adresse:adresse,
            tel :tel,
            fax:fax,
            email:email,
            password:password,
            passwordConfirmed,
            id:randomNumber,
         }
         console.log(user);
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    window.location.replace("logIn.html")

}  