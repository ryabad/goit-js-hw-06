const loginForm = document.querySelector("form.login-form");

/*-----------------------------------------------
loginForm.addEventListener("submit", (event) => {
  const data = {};
  event.preventDefault();
  const form = event.currentTarget;
  const emailValue = form.elements.email.value;
  const emailKey = form.elements.email.name;
  const passwordValue = form.elements.password.value;
  const passwordKey = form.elements.password.name;

  if (emailValue === "" || passwordValue === "") {
    alert("All fields must be filled. Please enter your login and password!");
  } else {
    data[emailKey] = emailValue;
    data[passwordKey] = passwordValue;
    console.log(data);
    loginForm.reset();
  }
});
*/

loginForm.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();
  const data = {};
  const emailValue = event.currentTarget.elements.email.value;
  const emailKey = event.currentTarget.elements.email.name;
  const passwordValue = event.currentTarget.elements.password.value;
  const passwordKey = event.currentTarget.elements.password.name;

  if (emailValue === "" || passwordValue === "") {
    alert("All fields must be filled. Please enter your login and password!");
  } else {
    data[emailKey] = emailValue;
    data[passwordKey] = passwordValue;
    console.log(data);
    loginForm.reset();
  }
}
