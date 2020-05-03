import spa from "./spa.js";

 class Auth {
 constructor(){
    this.userRef = _db.collection("users");
    this.spa = spa;
    this.authUser;
    this.authUserRef
 }

init(){
    //checking if user is login   
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
    } else {
      // User is signed out.
        this.userNotAuth()
    }
  });
}
userNotAuth(){
this.spa.navigateTo("login")
}
}
const auth = new Auth
export default auth;