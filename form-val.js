const submit = document.querySelector('.get-touch');
submit.addEventListener('click', validate);
function validate(e) {
  const email = document.getElementById('email');
  if (email.value === email.value.toLowerCase()) {
    alert('done');
  } else {
    const err = document.querySelector('.err');
    e.preventDefault();
    err.innerHTML = 'Email cannot be uppercase';
  }
}
