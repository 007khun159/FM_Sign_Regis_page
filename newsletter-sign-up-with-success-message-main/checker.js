function CheckerEmail() {
    var emailInput = document.getElementById('emailInput');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (emailInput.value.match(mailformat)) {
      alert("Valid email address!");
      emailInput.focus();
      return true;
    } else {
      alert("You have entered an invalid email address!");
      emailInput.focus();
      return false;
    }
  }