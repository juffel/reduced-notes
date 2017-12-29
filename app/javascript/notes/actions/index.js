import {
  createFetch,
  createStack,
  base,
  params,
  parse,
  method,
} from 'http-client';

const BASE_URL = '/api/v1/notes';

const commonStack = createStack(
  base(BASE_URL),
  parse('json', 'jsonData')
);

const getNotes = createFetch(
  commonStack,
  method('GET')
);

function postNote(parameters) {
  return createFetch(
    commonStack,
    method('POST'),
    params(parameters)
  )();
};

function patchNote(id, parameters) {
  return createFetch(
    commonStack,
    method('PATCH'),
    params(parameters)
  )('/' + id);
};

function deleteNote(id) {
  return createFetch(
    commonStack,
    method('DELETE'),
  )('/' + id);
};

let incrementalId = 0;

const addNoteAction = () => {
  return {
    type: 'ADD_NOTE',
    id: incrementalId++,
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
    noteId: note.id,
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

    return getNotes().then((response) => {
      dispatch(receiveNotesAction(response.jsonData));
    });
  };
}

export function addNoteThunk() {
  return function(dispatch) {
    const note = addNoteAction();
    dispatch(note);

    return postNote().then((response) => {
      dispatch(receiveAddedNoteAction(note, response.jsonData));
    });
  };
}

export function updateNoteThunk(note) {
  return function(dispatch) {
    dispatch(updateNoteAction(note));

    return patchNote(note.id, { body: note.body }).then((response) => {
      dispatch(receiveUpdatedNoteAction(note, response.jsonData));
    });
  };
}

export function deleteNoteThunk(note) {
  return function(dispatch) {
    dispatch(deleteNoteAction(note));

    return deleteNote(note.id).then(() => {
      dispatch(receiveDeletedNoteAction(note));
    });
  };
}
