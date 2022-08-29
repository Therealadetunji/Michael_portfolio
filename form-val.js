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

const fullNameForm = document.getElementById('name');
const emailForm = document.getElementById('email');
const messageForm = document.getElementById('message');

function handleChange() {
  const formData = {
    fullName: fullNameForm.value,
    email: emailForm.value,
    comment: messageForm.value,
  };
  localStorage.setItem('form', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
  const getFormValue = localStorage.getItem('form');
  if (getFormValue) {
    const formObject = JSON.parse(getFormValue);
    fullNameForm.value = formObject.fullName;
    emailForm.value = formObject.email;
    messageForm.value = formObject.comment;
  }
});

fullNameForm.oninput = handleChange;
emailForm.oninput = handleChange;
messageForm.oninput = handleChange;
