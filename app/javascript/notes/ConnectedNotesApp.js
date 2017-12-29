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
    onNoteAdd: (body = 'New Note') => {
      dispatch(addNoteThunk(body));
    },
    onNoteUpdate: (note) => {
      dispatch(updateNoteThunk(note));
    },
    onNoteDelete: (note) => {
      dispatch(deleteNoteThunk(note));
    }
  };
};

const ConnectedNotesApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesApp);

export default ConnectedNotesApp;
