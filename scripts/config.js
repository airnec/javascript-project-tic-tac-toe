function openPlayerConfig() {
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  console.dir(event);
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get('playername').trim(); // '      ' => ''
  console.log(enteredPlayername);

  if (!enteredPlayername) {
    // enteredPlayername === ''
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return;
  }
}
