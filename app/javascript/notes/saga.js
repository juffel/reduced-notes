import {
  call, put, takeEvery, takeLatest, all
} from 'redux-saga/effects';

import {
  receiveNotesAction,
  receiveAddedNoteAction,
  receiveUpdatedNoteAction,
  receiveDeletedNoteAction
} from './actions';
import client from './client';

function* fetchNotesSaga() {
  const response = yield call(client.getNotes);
  yield put(receiveNotesAction(response.jsonData));
}

function* watchFetchNotes() {
  yield takeLatest('REQUEST_NOTES', fetchNotesSaga);
}

function* addNoteSaga({ note }) {
  const response = yield call(client.postNote, { body: note.body });
  yield put(receiveAddedNoteAction(note, response.jsonData));
}

function* watchAddNote() {
  yield takeEvery('ADD_NOTE', addNoteSaga);
}

function* updateNoteSaga({ note }) {
  const response = yield call(client.patchNote, note.id, { body: note.body });
  yield put(receiveUpdatedNoteAction(note, response.jsonData));
}

function* watchUpdateNote() {
  yield takeEvery('UPDATE_NOTE', updateNoteSaga);
}

function* deleteNoteSaga({ note }) {
  yield call(client.deleteNote, note.id);
  yield put(receiveDeletedNoteAction(note));
}

function* watchDeleteNote() {
  yield takeEvery('DELETE_NOTE', deleteNoteSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchNotes(),
    watchAddNote(),
    watchUpdateNote(),
    watchDeleteNote()
  ]);
}
