import { auth } from "../../firebase/config.js";
import { getFirestore, doc, setDoc, getDoc } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const db=getFirestore();

window.saveEntry=async function(){
 let d=date.value,u=auth.currentUser;
 let text=entry.value;

 await setDoc(doc(db,"diary",u.uid,"entries",d),{
  text:text,
  mood:window.selectedMood
 });

 alert("Saved");
}

window.loadByDate=async function(){
 let d=date.value,u=auth.currentUser;
 let ref=doc(db,"diary",u.uid,"entries",d);
 let snap=await getDoc(ref);
 if(snap.exists()){
  entry.value=snap.data().text;
 }
}
