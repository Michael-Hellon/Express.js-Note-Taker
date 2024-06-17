const notesForm = getElementByClass('note-form')

gsBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    window.location.href = 'notes.html';
  });

  const createNote = (note) => {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card', 'mb-3', 'm-3');
    cardEl.setAttribute('key', note.note_id); 
    }