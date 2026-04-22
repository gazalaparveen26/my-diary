import { auth } from "../../firebase/config.js";
import { getFirestore, collection, getDocs } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const db=getFirestore();

window.searchEntries=async function(){
 let k=search.value.toLowerCase();
 let u=auth.currentUser;
 let snap=await getDocs(collection(db,"diary",u.uid,"entries"));
 let out="";
 snap.forEach(doc=>{
  let d=doc.data();
  if(d.text.toLowerCase().includes(k)){
   out+=d.text+"<br>";
  }
 });
 results.innerHTML=out;
}
