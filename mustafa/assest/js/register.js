//define dom objects
const mailInput = document.getElementById("mail");
const mailInputError = document.getElementById("errmail");

const passInput = document.getElementById("password");
const passInputError = document.getElementById("errpassword");
const pwdstrengthSpan = document.getElementById("pwdstrength");

const userTypeInput = document.getElementById("usertype");
const userTypeError = document.getElementById("errusertype");

const submintBtn = document.getElementById("frmbtn");

// those are will be assigned when the second form loaded
let nameInput = "";
let cityInput = "";
let phoneInput = "";
//for patient
let genderInput = "";
let ageInput = "";
let formBtnPatient = "";
//for doctor
let firmInput = "";
let specializationsInput = "";
let formBtnDoctor = "";

//define global varibles
let userMail = "";
let userPassWord = "";
let usrType = "";

// check if password strong
passInput.addEventListener("input", () => {
  const password = passInput.value;
  const passwordStrength = checkPasswordStrength(password);
  showPassWordStength(passwordStrength);
});

const checkPasswordStrength = (password) => {
  let result = "";
  // trim the password
  password = password.trim();

  /*define regex */
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  /*define regex END*/

  let passwordLength = password.length;
  let strength = 0;

  // if has lowecase add 1 to strength
  if (lowercaseRegex.test(password)) {
    strength++;
  }

  // if has uppercase add 1 to strength
  if (uppercaseRegex.test(password)) {
    strength++;
  }

  // if has number add 1 to strength
  if (digitRegex.test(password)) {
    strength++;
  }

  // if has chars add 2 to strength
  if (specialCharRegex.test(password)) {
    strength++;
    strength++;
  }

  // length shorter then 8 it is week
  if (passwordLength <= 7) {
    result = "week";
  }
  //betwen 8 and 15 check
  else if (passwordLength > 7 && passwordLength <= 15) {
    if (strength < 3) {
      result = "week";
    } else if (strength === 3) {
      result = "medium";
    } else {
      result = "strong";
    }
  }
  // length longer than 20 strong
  else if (passwordLength > 20) {
    result = "strong";
  }
  //betwen 15 and 20 check
  else {
    if (strength < 2) {
      result = "week";
    } else if (strength === 2) {
      result = "medium";
    } else {
      result = "strong";
    }
  }

  return result;
};

const showPassWordStength = (strength) => {
  // clean the span
  pwdstrengthSpan.textContent = "";
  pwdstrengthSpan.classList = [];

  // create the span content
  switch (strength) {
    case "week":
      pwdstrengthSpan.textContent = "Week";
      pwdstrengthSpan.classList.add("week");
      break;

    case "medium":
      pwdstrengthSpan.textContent = "Medium";
      pwdstrengthSpan.classList.add("medium");
      break;

    case "strong":
      pwdstrengthSpan.textContent = "Strong";
      pwdstrengthSpan.classList.add("strong");
      break;
  }
};

const checkIsMail = (mail) => {
  let result = false;
  mail = mail.trim().toLowerCase();

  const mailRegex =
    /^([a-zA-Z0-9\-_\.]{1,50})@([a-zA-Z0-9\-_]{1,50})\.([a-zA-Z0-9\-_]{1,10})(\.(['a-z''A-Z''0-9''\-_]{1,5}))?$/;

  if (mailRegex.test(mail)) {
    result = true;
  }

  return result;
};

const checkIsAlreadyMember = (mail) => {
  let result = false;
  // connect to API and check if this mail is already a member
  return result;
};

// proceses firt form
submintBtn.addEventListener("click", () => {
  const mail = mailInput.value;
  const password = passInput.value;

  //clean previus errors
  mailInput.removeAttribute("aria-invalid");
  mailInputError.textContent = "";
  passInput.removeAttribute("aria-invalid");
  passInputError.textContent = "";
  userTypeInput.removeAttribute("aria-invalid");
  userTypeError.textContent = "";

  // check is mail
  if (!checkIsMail(mail)) {
    mailInput.setAttribute("aria-invalid", "true");
    mailInputError.textContent = `Please enter a valid email address`;
    return;
  }

  // check is mail registerd
  if (checkIsAlreadyMember(mail)) {
    mailInput.setAttribute("aria-invalid", "true");
    mailInputError.innerHTML = `This mail already registerd, please <a href="login.html">Login</a>`;
    return;
  }

  // check is password not week
  const passwordStrength = checkPasswordStrength(password);
  if (passwordStrength === "week") {
    passInput.setAttribute("aria-invalid", "true");
    passInputError.textContent = `Please use stronger password`;
    return;
  }

  // if there is no error post data to second stage
  const userType = userTypeInput.value;

  switch (userType) {
    case "patient":
      //assing global values for next page
      userMail = mail;
      userPassWord = password;
      usrType = "patient";

      //show next page
      showPatientPage();
      break;
    case "doctor":
      //assing global values for next page
      userMail = mail;
      userPassWord = password;
      usrType = "doctor";

      //show next page
      showDoctorPage();
      break;
    default: // give an error
      //clean gobal varibles
      userMail = "";
      userPassWord = "";
      usrType = "";

      //show error
      userTypeInput.setAttribute("aria-invalid", "true");
      passInputError.textContent = `Please select one`;
      break;
  }
});

const showPatientPage = () => {
  const url = "registerpatient.html";
  
  //show the page
  fetch("/" + url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((htmlContent) => {
      // convert HTML code a DOM object
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");

      // get content from elements from fetch
      const containerContent = doc.getElementById("container").innerHTML;

      // show new content at the page
      document.getElementById("container").innerHTML = containerContent;

      // define new pages dom objects (patient)
      definePatientDomObjests();

      // add event listener to the new button.
      formBtnPatient.addEventListener("click", () => {
        // get all the data

        //post to the API
        alert(
          "Whitout api this form can not perfom, for now it will directy redirect to mail confirmation form"
        );

        //is every thing is ok, redirect to mail confirmation form
        window.location.replace("emailverification.html?verify=sdf6sdf6sadf6");
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

const showDoctorPage = () => {
  const url = "registerdoctor.html";

  //show the page
  fetch("/" + url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((htmlContent) => {
      // convert HTML code a DOM object
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");

      // get content from elements from fetch
      const containerContent = doc.getElementById("container").innerHTML;

      // show new content at the page
      document.getElementById("container").innerHTML = containerContent;

      // define new pages dom objects (patient)
      defineDcotorDomObjests();

      // add event listener to the new button.
      formBtnDoctor.addEventListener("click", () => {
        // get all the data

        //post to the API
        alert(
          "Whitout api this form can not perfom, for now it will directy redirect to mail confirmation form"
        );

        //is every thing is ok, redirect to mail confirmation form
        window.location.replace("emailverification.html?verify=sdf6sdf6sadf6");
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

//second form functions
const definePatientDomObjests = () => {
  nameInput = document.getElementById("name");
  cityInput = document.getElementById("city");
  phoneInput = document.getElementById("phone");

  genderInput = document.getElementById("gender");
  ageInput = document.getElementById("age");
  formBtnPatient = document.getElementById("frmbtnpatient");
};

//
const defineDcotorDomObjests = () => {
  nameInput = document.getElementById("name");
  cityInput = document.getElementById("city");
  phoneInput = document.getElementById("phone");

  firmInput = document.getElementById("firm");
  specializationsInput = document.getElementById("specializations");
  formBtnDoctor = document.getElementById("frmbtndcotor");
};
