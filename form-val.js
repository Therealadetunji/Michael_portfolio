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

const name = document.getElementById('#name');
const email = document.getElementById('#email');
const text = document.getElementById('#message');

let contactObj = {
  name: 'mike',
  email: 'madetunji1376@gmail.com',
  text: 'i love football',
};

localStorage.setItem('info', JSON.stringify(contactObj));

let infoString = localStorage.getItem('info');
console.log('string saved in localStorage', infoString);

let savedContact = JSON.parse(infoString);
console.log('person name:', savedContact.name);
console.log('person email:', savedContact.email);
console.log('person text:', savedContact.text);
