let incrementalId = 0;

export const addNote = body => {
  return {
    type: 'ADD_NOTE',
    id: incrementalId++,
    body
  };
};

export const updateNote = (id, body) => {
  return { type: 'UPDATE_NOTE', id, body };
};

export const deleteNote = id => {
  return {
    type: 'DELETE_NOTE',
    id
  };
};

export const requestNotes = () => {
  return {
    type: 'REQUEST_NOTES'
  };
};

export const receiveNotes = (json) => {
  return {
    type: 'RECEIVE_NOTES'
  };
};

export const receiveAddedNote = (note, json) => {
  return {
    type: 'RECEIVE_ADDED_NOTE',
    note,
    addedNote: json.data
  };
};

export const receiveUpdatedNote = (note, json) => {
  return {
    type: 'RECEIVE_UPDATED_NOTE',
    note,
    updatedNote: json.data
  };
};

export const receiveDeletedNote = (note) => {
  return {
    type: 'RECEIVE_DELETED_NOTE',
    note
  };
};
