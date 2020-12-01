function seConnecter(){
    var users = JSON.parse(localStorage.getItem('users'))
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;

   if(email!='' || password!='')
   {
       
       const user = users.find(element => element.email==email && element.password==password);
      if(user!=undefined){
        localStorage.setItem('user',JSON.stringify(user));
        // window.location.replace("PageAdmin.html");
        window.location.href = "./PageAdmin.html"
      }
      else
      alert('email or password invalid! try again or sign up')
       
      
    }
   else 
   alert('remplissez tous les champs!')
}
