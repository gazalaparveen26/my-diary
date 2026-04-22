import { getFirestore, doc, setDoc } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { auth } from "../../firebase/config.js";

const db = getFirestore();

window.saveEntry = async function() {
  let text = document.getElementById("entry").value;
  let user = auth.currentUser;

  await setDoc(doc(db, "diary", user.uid), {
    text: text
  });

  alert("Saved!");
}
