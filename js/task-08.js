const formEl = document.querySelector(`.login-form`);

formEl.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (password.value === "" || email.value === "") {
    return alert("Please fill in all the fields!");
  }
    const data = {
    Email: email.value,  
    Password : password.value
  }
  console.log(data);
  event.currentTarget.reset();
}
