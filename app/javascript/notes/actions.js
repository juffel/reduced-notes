export const addNoteAction = body => ({
  type: 'ADD_NOTE',
  note: {
    id: Math.floor((Math.random() * 100000)),
    body
  }
});

export const updateNoteAction = note => ({
  type: 'UPDATE_NOTE', note
});

export const deleteNoteAction = note => ({
  type: 'DELETE_NOTE',
  note
});

export const requestNotesAction = () => ({
  type: 'REQUEST_NOTES'
});

export const receiveNotesAction = notes => ({
  type: 'RECEIVE_NOTES',
  notes
});

export const receiveAddedNoteAction = (note, json) => ({
  type: 'RECEIVE_ADDED_NOTE',
  note,
  backendId: json.id
});

export const receiveUpdatedNoteAction = (note, json) => ({
  type: 'RECEIVE_UPDATED_NOTE',
  note,
  updatedNote: json.data
});

export const receiveDeletedNoteAction = note => ({
  type: 'RECEIVE_DELETED_NOTE',
  note
});
