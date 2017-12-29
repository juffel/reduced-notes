import client from './client';

const addNoteAction = () => {
  return {
    type: 'ADD_NOTE',
    id: Math.floor((Math.random() * 100000)),
  };
};

const updateNoteAction = (note) => {
  return { type: 'UPDATE_NOTE', note };
};

const deleteNoteAction = (note) => {
  return {
    type: 'DELETE_NOTE',
    note
  };
};

export const requestNotesAction = () => {
  return {
    type: 'REQUEST_NOTES'
  };
};

const receiveNotesAction = (notes) => {
  return {
    type: 'RECEIVE_NOTES',
    notes
  };
};

const receiveAddedNoteAction = (note, json) => {
  return {
    type: 'RECEIVE_ADDED_NOTE',
    note,
    backendId: json.id
  };
};

const receiveUpdatedNoteAction = (note, json) => {
  return {
    type: 'RECEIVE_UPDATED_NOTE',
    note,
    updatedNote: json.data
  };
};

const receiveDeletedNoteAction = (note) => {
  return {
    type: 'RECEIVE_DELETED_NOTE',
    note
  };
};

export function fetchNotesThunk() {
  return function(dispatch) {
    dispatch(requestNotesAction());

    return client.getNotes().then((response) => {
      dispatch(receiveNotesAction(response.jsonData));
    });
  };
}

export function addNoteThunk() {
  return function(dispatch) {
    const note = addNoteAction();
    dispatch(note);

    return client.postNote().then((response) => {
      dispatch(receiveAddedNoteAction(note, response.jsonData));
    });
  };
}

export function updateNoteThunk(note) {
  return function(dispatch) {
    dispatch(updateNoteAction(note));

    return client.patchNote(note.id, { body: note.body }).then((response) => {
      dispatch(receiveUpdatedNoteAction(note, response.jsonData));
    });
  };
}

export function deleteNoteThunk(note) {
  return function(dispatch) {
    dispatch(deleteNoteAction(note));

    return client.deleteNote(note.id).then(() => {
      dispatch(receiveDeletedNoteAction(note));
    });
  };
}
