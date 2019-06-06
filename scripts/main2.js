function validateForm() {
  var x = document.forms["formA"]["firstname"].value;
  if (x == "") {
    alert("Popunite polje");
    return false;
  }
}

function validateForm2() {
  var x = document.forms["formA"]["location"].value;
  if (x == "") {
    alert("Popunite polje");
    return false;
  }
}
