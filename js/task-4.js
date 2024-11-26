const form = document.querySelector(".login-form");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const userEmail = form.elements.email.value;
  const userPass = form.elements.password.value;

  if (userEmail === "" || userPass === "") {
    return alert("All form fields must be filled in");
  }
  const user = {
    email: userEmail.trim(),
    password: userPass.trim(),
  };

  form.reset();
  console.log(user);
}
