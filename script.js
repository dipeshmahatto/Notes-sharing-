// Function to handle form submission
function submitForm(event) {
  event.preventDefault();

  // Get the form inputs
  var titleInput = document.getElementById('title');
  var contentInput = document.getElementById('content');

  // Create a new note element
  var noteElement = document.createElement('div');
  noteElement.classList.add('note');

  // Create a heading element for the note title
  var titleElement = document.createElement('h3');
  titleElement.textContent = titleInput.value;

  // Create a paragraph element for the note content
  var contentElement = document.createElement('p');
  contentElement.textContent = contentInput.value;

  // Append the title and content elements to the note element
  noteElement.appendChild(titleElement);
  noteElement.appendChild(contentElement);

  // Append the note element to the main section
  var mainSection = document.querySelector('main');
  mainSection.appendChild(noteElement);

  // Clear the form inputs
  titleInput.value = '';
  contentInput.value = '';
}

// Event listener to handle form submission
var form = document.querySelector('main form');
form.addEventListener('submit', submitForm);



