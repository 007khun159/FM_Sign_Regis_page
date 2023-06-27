function CheckerEmail(event) {
  event.preventDefault();

  var emailInput = document.getElementById('emailInput');
  var email = emailInput.value.trim();

  // Regular expression pattern for email validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    alert("Please enter an email address.");
    return false;
  } else if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }


  
  window.location.href = './subscribe.html?email=' + encodeURIComponent(email);
  return true;
}



