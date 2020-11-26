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
<<<<<<< HEAD
    window.location.replace("logIn.html")
=======
>>>>>>> 1a03946af3837d00f2191860aeed8e1296f4de3e

}  