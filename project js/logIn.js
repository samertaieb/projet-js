function seConnecter(){
    const users=JSON.parse(localStorage.getItem(users))
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    if(email!="" || password!=""){
        const user =users.find(e=>e.email==email && e.password==password )
        if(user!=undefined){
            localStorage.setItem("user",JSON.stringify(user));
            window.location.replace("")
        }
        else {
            alert("L'adresse email est déja existe")
        }
    }
    else{
        alert("remplissez tous les champs")
    }
}
