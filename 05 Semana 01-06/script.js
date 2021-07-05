function validacao() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("O campo Nome não pode ficar em branco.");
      return false;
    }
  }