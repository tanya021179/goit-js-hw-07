const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSumit);
function handleSumit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  if (!elements.email.value || !elements.password.value) {
    alert('All form fields must be filled in');
    return;
  }
  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  form.reset();
  console.log(info);
}
