import Spa from "./spa.js";
import auth from "./login.js"




// spa.init();
auth.init();

//login
document.querySelector("#login-btn").addEventListener("click", login)
function login(){
    // ----------------- sign in ------------------------------------
    let email = document.querySelector("#emailUsername").value;
    let password = document.querySelector("#emailPassword").value;
    firebase.auth().signInWithEmailAndPassword(email, password);
}
