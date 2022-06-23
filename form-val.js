// const email = document.getElementById('email');
document.querySelector('.get-touch').addEventListener('click', (event) => {
  validateInput();
});

function validateInput() {
  if (email.value === email.value.toLowerCase()) {
    let parent = email.parentElement;
    let message = parent.querySelector('small');
    message.style.visibility = 'hidden';
    message.innerText = '';
  } else {
    let parent = email.parentElement;
    let message = parent.querySelector('small');
    message.style.visibility = 'visible';
    message.innerText = 'Email cannot be uppercase';
    event.preventDefault();
  }
}

// (email.value !== email.value.toLowerCase()) {
//     const err = document.querySelector('.err');
//     // err.classList.toggle('show');
//     e.preventDefault();
//     err.innerHTML = 'error';
//   } else if (email.value === email.value.toLowerCase()) {
//     // const suc = document.querySelector('.suc');
//     // suc.classList.toggle('visible');
//     alert('Done');
//   }

// const submit = document.querySelector('.get-touch');
// submit.addEventListener('click', validate);
// function validate(e) {
//   //   e.preventDefault();
//   const email = document.getElementById('email');
//   if (email.value === email.value.toLowerCase()) {
//     alert('done');
//   } else {
//     const err = document.querySelector('.err');
//     e.preventDefault();
//     err.innerHTML = 'error';
//   }
// }
