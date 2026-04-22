import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAQMsykyF4Q3yteZ1rG6WM4sI1YvqYuC9o",
  authDomain: "my-diary-66d94.firebaseapp.com",
  databaseURL: "https://my-diary-66d94-default-rtdb.firebaseio.com",
  projectId: "my-diary-66d94",
  storageBucket: "my-diary-66d94.firebasestorage.app",
  messagingSenderId: "40748601600",
  appId: "1:40748601600:web:489fdca84dba9044bce3e5",
  measurementId: "G-PH0WRQ646Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

window.signup = async function () {
  let e = document.getElementById("email").value;
  let p = document.getElementById("password").value;

  await createUserWithEmailAndPassword(auth, e, p);

  alert("Account created!");
}

window.login = async function () {
  let e = document.getElementById("email").value;
  let p = document.getElementById("password").value;

  await signInWithEmailAndPassword(auth, e, p);

  // FIX 👇
  document.getElementById("login").style.display = "none";
  document.getElementById("diary").style.display = "block";
}
