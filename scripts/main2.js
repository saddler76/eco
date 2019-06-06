function validateForm() {
  var x = document.forms["formA"]["firstname"].value;
  if (x == "") {
    alert("Popunite polje");
    return false;
  }
}

function validateForm2() {
  var y = document.forms["formA"]["location"].value;
  if (y == "") {
    alert("Popunite polje");
    return false;
  }
}
