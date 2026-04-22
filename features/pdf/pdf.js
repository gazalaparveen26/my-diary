window.downloadPDF=function(){
 let blob=new Blob([entry.value],{type:"application/pdf"});
 let a=document.createElement("a");
 a.href=URL.createObjectURL(blob);
 a.download="diary.pdf";
 a.click();
}