const form = document.querySelector(".form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");

const isEmail = (email) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

let nameFine = false;
let emailFine = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;

  if (firstNameValue === "") {
    setErrorFor(firstName, "Field cannot be empty");
  } else {
    setSuccessFor(firstName);
  }
  if (lastNameValue === "") {
    setErrorFor(lastName, "Field cannot be empty");
  } else {
    setSuccessFor(lastName);
    nameFine = true;
  }
  if (emailValue === "") {
    setErrorFor(email, "Field cannot be empty");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    setSuccessFor(email);
    emailFine = true;
  }

  console.log(nameFine, emailFine);
  if (nameFine && emailFine) {
    redirect();
  }
});

function redirect() {
  window.location.href = "thankyou.html";
}

function setErrorFor(input, message) {
  const field = input.parentElement; //form-control
  const errorMessage = field.querySelector(".error-message");

  field.className = "form__control show-error";
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const field = input.parentElement;
  field.className = "form__control success";
}

// function isEmail(email) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );
// }
