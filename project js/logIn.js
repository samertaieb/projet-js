function seConnecter() {
  var users = JSON.parse(localStorage.getItem("users"));
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email != "" || password != "") {
    const user = users.find(
      element => element.email == email && element.password == password
    );
    console.log(user);
    if (user != undefined) {
      if (email == "superAdmin@super.com") {
        window.location.href = "page_super_admin.html";
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        window.location.href = "PageAdmin.html";
        localStorage.setItem("user", JSON.stringify(user));
      }
    } else alert("email or password invalid! try again or sign up");
  } else alert("remplissez tous les champs!");
}


function toSignUp() {
  window.location.replace("inscription.html");
}
