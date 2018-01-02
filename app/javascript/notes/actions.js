import client from './client';

const addNoteAction = body => ({
  type: 'ADD_NOTE',
  id: Math.floor((Math.random() * 100000)),
  body
});

const updateNoteAction = note => ({
  type: 'UPDATE_NOTE', note
});

const deleteNoteAction = note => ({
  type: 'DELETE_NOTE',
  note
});

export const requestNotesAction = () => ({
  type: 'REQUEST_NOTES'
});

const receiveNotesAction = notes => ({
  type: 'RECEIVE_NOTES',
  notes
});

const receiveAddedNoteAction = (note, json) => ({
  type: 'RECEIVE_ADDED_NOTE',
  note,
  backendId: json.id
});

const receiveUpdatedNoteAction = (note, json) => ({
  type: 'RECEIVE_UPDATED_NOTE',
  note,
  updatedNote: json.data
});

const receiveDeletedNoteAction = note => ({
  type: 'RECEIVE_DELETED_NOTE',
  note
});

export function fetchNotesThunk() {
  return (dispatch) => {
    dispatch(requestNotesAction());

    return client.getNotes().then((response) => {
      dispatch(receiveNotesAction(response.jsonData));
    });
  };
}

export function addNoteThunk(body) {
  return (dispatch) => {
    const note = addNoteAction(body);
    dispatch(note);

    return client.postNote({ body }).then((response) => {
      dispatch(receiveAddedNoteAction(note, response.jsonData));
    });
  };
}

export function updateNoteThunk(note) {
  return (dispatch) => {
    dispatch(updateNoteAction(note));

    return client.patchNote(note.id, { body: note.body }).then((response) => {
      dispatch(receiveUpdatedNoteAction(note, response.jsonData));
    });
  };
}

export function deleteNoteThunk(note) {
  return (dispatch) => {
    dispatch(deleteNoteAction(note));

    return client.deleteNote(note.id).then(() => {
      dispatch(receiveDeletedNoteAction(note));
    });
  };
}
