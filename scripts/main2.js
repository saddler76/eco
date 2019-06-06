function validateForm()  {
 
  var x = document.forms["formA"]["firstname"].value;
  if (x==null || x=="")
     {
    alert("Popunite polje");
    return false;
  }
}

  var y = document.forms["formA"]["location"].value;
  if (y==null || y=="")
     {
    alert("Popunite polje");
    return false;
  }
}
