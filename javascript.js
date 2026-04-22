import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import { getFirestore, doc, setDoc, getDoc } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// 🔴 Yahan apna config paste karo

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

window.signup = async function() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  await createUserWithEmailAndPassword(auth, email, pass);
  alert("Account created!");
}

window.login = async function() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  let userCred = await signInWithEmailAndPassword(auth, email, pass);

  document.getElementById("login").style.display = "none";
  document.getElementById("diary").style.display = "block";

  let docRef = doc(db, "diary", userCred.user.uid);
  let docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    document.getElementById("entry").value = docSnap.data().text;
  }
}

window.save = async function() {
  let text = document.getElementById("entry").value;
  let user = auth.currentUser;

  await setDoc(doc(db, "diary", user.uid), {
    text: text
  });

  alert("Saved!");
}

window.logout = function() {
  signOut(auth);
  location.reload();
}