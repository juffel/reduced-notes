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

export default { getNotes, postNote, patchNote, deleteNote };
