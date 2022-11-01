function form_valid() {
  //   let fname = document.getElementById("fname").value;
  //   document form_name field_name value
  let fname = document.form1.fname.value;
  if (fname == "" || fname == null) {
    alert("enter name");
    return false;
  } else if (!isNaN(fname)) {
    alert("enter only alphabet");
    return false;
  }
  //   isNaN() - not a number
  // for radio button
  let male = document.form1.gen[0].checked;
  let female = document.form1.gen[1].checked;
  if (male == false && female == false) {
    alert("select gender");
    return false;
  }
  //   for checkbox
  let c1 = document.form1.c1.checked;
  let c2 = document.form1.c2.checked;
  if (c1 == false && c2 == false) {
    alert("select qualification");
    return false;
  }
  //   for dropdown
  let city = document.form1.city.value;
  if (city == -1) {
    alert("select city");
    return false;
  }
  //   for password
  let pass = document.form1.pass.value;
  let cpass = document.form1.cpass.value;
  if (pass == "") {
    alert("enter password");
    return false;
  }
  // else if (
  //   !"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,10}$"
  // ) {
  //   alert(
  //     "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
  //   );
  //   return false;
  // } else {
  //   return true;
  // }
  if (cpass != pass) {
    alert("password and confirm password does not match");
    return false;
  }

  let mno = document.form1.mno.value;
  if (mno == "") {
    alert("Enter mobile no");
    return false;
  } else if (isNaN(mno)) {
    alert("alphabet not allowed");
    return false;
  } else if (mno.length < 10) {
    alert("mobile no must be in 10 digits");
    return false;
  }
  //   else if (mno.length > 10) {
  //     alert("mobile no not more than 10 digits");
  //     return false;
  //   }
}
