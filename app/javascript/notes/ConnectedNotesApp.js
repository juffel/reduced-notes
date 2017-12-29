import { connect } from 'react-redux';

import NotesApp from './NotesApp';
import {
  addNoteThunk,
  updateNoteThunk,
  deleteNoteThunk
} from './actions';

const mapStateToProps = state => {
  return { notes: state.notesReducer.notes };
};

const mapDispatchToProps = dispatch => {
  return {
    onNoteAdd: (body = '') => {
      dispatch(addNoteThunk(body));
    },
    onNoteUpdate: (id, body) => {
      dispatch(updateNote(id, body));
    },
    onNoteDelete: id => {
      dispatch(deleteNote(id));
    }
  };
};

const ConnectedNotesApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesApp);

export default ConnectedNotesApp;
