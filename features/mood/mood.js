window.selectedMood="";
window.selectMood=function(m){
 selectedMood=m;
 document.querySelectorAll("#mood-box span").forEach(x=>x.style.border="none");
 event.target.style.border="2px solid black";
}