const users = JSON.parse(localStorage.getItem("users")) || [];
var check = false;
function test() {
  check = true;
}
function inscription() {
  const nomEtablissament = document.getElementById("nom-établissament").value;
  const adresse = document.getElementById("adresse").value;
  const tel = document.getElementById("tel").value;
  const fax = document.getElementById("fax").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConfirmed = document.getElementById("password-confirmed").value;
  const randomNumber = Math.floor(Math.random() * 1000);
  if (
    nomEtablissament != "" &&
    adresse != "" &&
    tel != "" &&
    fax != "" &&
    email != "" &&
    password != "" &&
    passwordConfirmed != "" &&
    check === true &&
    ValidateEmail(email) &&
    Validatepassword(password)
  ) {
    if (password === passwordConfirmed) {
      const user = {
        nomEtablissament: nomEtablissament,
        adresse: adresse,
        tel: tel,
        fax: fax,
        email: email,
        password: password,
        passwordConfirmed: passwordConfirmed,
        id: randomNumber,
      };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      window.location.replace("logIn.html");
    } else {
      const errorPasswordConfirmed = document.getElementById(
        "confirmedPasswordError"
      );
      errorPasswordConfirmed.innerHTML = "invalid passwoord!";
      errorPasswordConfirmed.style.color = "red";
    }
  }
}
function ValidateEmail(email) {
  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(mailformat)) {
    // alert("Valid email address!");
    document.getElementById("email").focus();
    return true;
  } else {
    const errorEmail = document.getElementById("emailError");
    errorEmail.innerHTML = "invalid email";
    errorEmail.style.color = "red";

    document.form.Email.focus();
    return false;
  }
}
function Validatepassword(password) {
  const passwordFormat = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;

  if (password.match(passwordFormat)) {
    // alert("Valid password !");
    // document.getElementById("password").focus();
    return true;
  } else {
    console.log("ok");
    const errorPassword = document.getElementById("passwordError");
    errorPassword.innerHTML =
      "password Contain at least: 8 characters,1 number,1 lowercase character,1 uppercase character";
    errorPassword.style.color = "red";
    // document.getElementById("password").focus();
    return false;
  }
}

// if(!true)
//{traitements}
//
