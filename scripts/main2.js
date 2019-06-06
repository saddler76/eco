function validateForm() {
  var x = document.forms["formA"]["firstname"]["location"].value;
  if (x == "") {
    alert("Popunite polje");
    return false;
  }
}