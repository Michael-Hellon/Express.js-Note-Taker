const notesForm = getElementByClass('note-form')

// gsBtn.addEventListener('click', (e) => {
//     // e.preventDefault();
//     window.location.href = 'notes.html';
//   });

const createNote = (note) => {
  // creates card
  const cardEl = document.createElement('div');
  cardEl.classList.add('card', 'mb-3', 'm-3');
  cardEl.setAttribute('key', note.note_id);
}

// Create card header
const cardHeaderEl = document.createElement('h4');
cardHeaderEl.classList.add(
  'card-header',
  'bg-primary',
  'text-light',
  'p-2',
  'm-0'
);
cardHeaderEl.innerHTML = `${note.title} </br>`;
