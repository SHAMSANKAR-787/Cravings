function validateForm() {
    var a = document.forms["Form"]["answer_a"].value;
    var b = document.forms["Form"]["answer_b"].value;
    var c = document.forms["Form"]["answer_c"].value;
    if ((a == null || a == "") && (b == null || b == "") && (c == null || c == "") ) {
      alert("Please Fill In All Required Fields");
      return false;
    }
  }
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }