const scriptURL = 'https://script.google.com/macros/s/AKfycbx-0xH5E5l-6nzz8RPLiJgNYghc8lTqela0NDmWaIwmW7PjSgqxbRoWjZ7nE7w3bslYDw/exec'
﻿
const form = document.forms['contact-form']
﻿
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})