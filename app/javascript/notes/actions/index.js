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

const get = createFetch(
  commonStack,
  method('GET')
);

function post(postParams) {
  return createFetch(
    commonStack,
    method('POST'),
    params(postParams)
  )();
};

let incrementalId = 0;

const addNoteAction = () => {
  return {
    type: 'ADD_NOTE',
    id: incrementalId++,
  };
};

const updateNoteAction = (id, body) => {
  return { type: 'UPDATE_NOTE', id, body };
};

const deleteNoteAction = id => {
  return {
    type: 'DELETE_NOTE',
    id
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

    return get().then((response) => {
      dispatch(receiveNotesAction(response.jsonData));
    });
  };
}

export function addNoteThunk() {
  return function(dispatch) {
    const note = addNoteAction();
    dispatch(note);

    return post().then((response) => {
      dispatch(receiveAddedNoteAction(note, response.jsonData));
    });
  };
}
