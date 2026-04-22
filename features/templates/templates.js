window.changeTemplate = function() {
  let val = document.getElementById("template").value;
  let diary = document.getElementById("diary");

  diary.className = "";
  diary.classList.add(val);
}
