function validateForm() {
  var x = document.forms["formA"]["firstname"].value;
  if (x == "") {
    alert("Popunite polje");
    return false;
  }
}
